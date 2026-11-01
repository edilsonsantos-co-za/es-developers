---
sidebar_position: 3
title: Publishing and releases
---

# Publishing and releases

## Build and static hosting

The production build is a static site in `build/`. The included Docker image runs the Docusaurus build in a
Node stage and serves the result with Nginx. Build and run it with Docker Compose on a host that has the external
`milkyway` network:

```bash
docker compose up -d --build
```

The Compose service does not publish a host port. A reverse proxy must route the intended hostname to
`es-developers:80` on `milkyway`, and DNS/TLS must be configured for that hostname. The deployment target,
DNS record, proxy route, SSH account and GitHub deployment credentials have not been verified by this project;
the absolute hostname in the Docusaurus config is a target, not a claim that the site is live. A successful
production TLS check has not been confirmed.

For a manual static publish, run `npm ci && npm run build`, then copy the contents of `build/` to a static web
root that serves directory index files and the generated `404.html`. Preserve the configured base path `/`.

No automatic production deployment workflow is included. Add one only after the actual host, destination path,
proxy/DNS setup and authorized deployment credentials are confirmed.

## Versioning

Keep the documentation-site package version separate from application release versions. Application releases
follow the `VERSION` file and release instructions in each source repository; do not invent a release number or
tag from this site. Update these docs when an app's supported stack, setup or extension behavior changes.

## Contributions

Contributions require authorized access to the relevant source repository. Keep changes scoped to one project,
follow its current branch/commit/release instructions, and validate the narrowest relevant tests before publishing.
For this docs site, run:

```bash
npm ci
npm run build
```

Only document behavior verified from the app's current README, manifest or implementation. Mark private source
and external account requirements clearly, and do not include local-only workspace inventories, credentials,
personal URLs or journal content.
