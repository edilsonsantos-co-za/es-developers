# ES Developers

Public documentation for the ES apps, built with Docusaurus 3.10.2. The source pages are curated for public use;
internal workspace documentation and private journal content are not included.

## Local development

Requirements: Node.js 22 and npm 10 or newer.

```bash
npm ci
npm run start
```

`npm run build` creates the static site in `build/` and fails on broken internal links. The `Dockerfile` builds
the docs and serves them with Nginx; `docker-compose.yml` attaches the service to the external `milkyway`
network and expects a separately configured reverse proxy.

## Hosted deployment

The curated site is live at **https://developers.edilsonsantos.co.za/**. All nine sitemap pages were checked over
HTTPS on 2026-11-02. The production image serves static files with Nginx 1.28; Node 22 is used only during build.
GitHub Actions validates `main`/pull requests and uploads the built site as an artifact.

Every push to `main` deploys (`.github/workflows/deploy.yml`). Since 16 Nov 2026 the site runs on **Kubernetes**
(k3s on the VPS), the first app moved there; `docker-compose.yml` remains for local use.

**How a deploy works.** The workflow ships the committed files to the VPS and runs
`/usr/local/lib/workspace/deploy-k3s.sh es-developers <commit> --host developers.edilsonsantos.co.za`, which:

1. builds the image and tags it with the commit;
2. copies it into the cluster (there is no image registry on the VPS);
3. applies `k8s/` with that tag. Kubernetes starts a new copy, waits until it answers `/`, then removes an old
   one, and repeats (two copies, `maxUnavailable: 0`), so visitors never hit a missing or half-started site;
4. requests the site through Traefik, the cluster's entry point;
5. on any failure returns to the previous version and fails the workflow.

**Request path.** Visitor -> Nginx Proxy Manager (HTTPS, certificate) -> Traefik on the cluster -> `Service`
`es-developers` -> one of the two pods. `k8s/ingress.yaml` maps the hostname; `k8s/deployment.yaml` holds the copies,
health checks and memory limit.

**Why this way.** The same `k8s/` folder can be applied to a cluster on AWS later. The alternative, keeping
`docker compose up --build`, is simpler but replaces the single container in place: a build that starts badly
takes the site down until someone notices.

**Failure modes.** A crashing build never receives traffic (tested 16 Nov: 400 of 400 requests answered while a
broken version was rolling out, then automatic rollback). If the cluster itself is down the site is down; go back
to Docker with `docker compose up -d --build` and
`python3 /usr/local/lib/workspace/npm-route.py developers.edilsonsantos.co.za --to docker:es-developers:80`.

**Check it (on the server).**

```bash
k3s kubectl -n apps get deployment,pods -l app=es-developers   # expect 2/2 and two Running pods
k3s kubectl -n apps rollout history deployment/es-developers   # past versions
python3 /usr/local/lib/workspace/npm-route.py developers.edilsonsantos.co.za   # expect 10.0.1.1:30080
```

**Try it.** Delete one pod (`k3s kubectl -n apps delete pod <name>`) while reloading the site. Predict first:
does the site go down? (It should not: the other copy keeps answering and a replacement starts in seconds.)

Preserve unrelated apps and volumes, and never copy deployment credentials into documentation or source.

## Dependency baseline

Docusaurus core and the classic preset use the same stable version, 3.10.2. Non-forced `npm audit fix` has been
applied. The obsolete webpack override was removed; the production build works with the current dependency tree.
The latest audit still reports build/preview-toolchain advisories (including critical Tinypool findings). Do not
treat a successful static build as a clean security audit. Do not build untrusted documentation or expose the
development/preview server publicly. The final Docker image contains Nginx and static files, not Node dependencies.
Review upstream fixes before release; no forced major dependency overrides were applied.
