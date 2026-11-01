# ES Developers

Public documentation for the ES apps, built with Docusaurus 3.10.2. The source pages are curated for public use;
internal workspace documentation and private journal content are not included.

## Local development

Requirements: Node.js 20.20.x or newer and npm 10 or newer.

```bash
npm ci
npm run start
```

`npm run build` creates the static site in `build/` and fails on broken internal links. The `Dockerfile` builds
the docs and serves them with Nginx; `docker-compose.yml` attaches the service to the external `milkyway`
network and expects a separately configured reverse proxy.

Production deployment, DNS/TLS routing and an automated deployment workflow have not been verified or configured.
The configured hostname is a target, not a live-service claim.

## Dependency baseline

Docusaurus core and the classic preset use the same stable version, 3.10.2. Non-forced `npm audit fix` has been
applied. The obsolete webpack override was removed; the production build works with the current dependency tree.
The latest audit still reports build/preview-toolchain advisories (including critical Tinypool findings). Do not
treat a successful static build as a clean security audit. Do not build untrusted documentation or expose the
development/preview server publicly. The final Docker image contains Nginx and static files, not Node dependencies.
Review upstream fixes before release; no forced major dependency overrides were applied.
