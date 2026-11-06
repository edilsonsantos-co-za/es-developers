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

Every push to `main` deploys (`.github/workflows/deploy.yml`): the workflow ships the committed files to the VPS
and rebuilds the image there. To redeploy by hand on the server:

```bash
docker compose build developers
docker compose up -d developers
docker exec es-developers wget -qO- http://127.0.0.1/
```

The hosted instance uses its own HTTPS reverse-proxy host and certificate on the external `milkyway` network.
Preserve unrelated apps and volumes, and never copy deployment credentials into documentation or source.

## Dependency baseline

Docusaurus core and the classic preset use the same stable version, 3.10.2. Non-forced `npm audit fix` has been
applied. The obsolete webpack override was removed; the production build works with the current dependency tree.
The latest audit still reports build/preview-toolchain advisories (including critical Tinypool findings). Do not
treat a successful static build as a clean security audit. Do not build untrusted documentation or expose the
development/preview server publicly. The final Docker image contains Nginx and static files, not Node dependencies.
Review upstream fixes before release; no forced major dependency overrides were applied.
