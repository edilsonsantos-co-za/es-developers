---
sidebar_position: 1
title: Development
---

# Development

## Requirements

For this documentation site: Node.js 22 and npm 10. For application development: Git and Docker with
Compose, plus access to the corresponding source repository and any services it depends on.

Some ES source repositories may be private. Request authorized access before cloning; do not
copy credentials or environment files from another machine.

## Run this site locally

```bash
npm ci
npm run start
```

Docusaurus serves the site locally with live reload. To validate a production build and check internal links:

```bash
npm run build
```

Broken internal links fail the production build. Generated static files go to `build/`; do not commit that output.

## Run an application locally

Each app has its own runtime, dependencies and environment setup. Follow its application page and source README
rather than trying to run all apps as one stack:

- [ES Portfolio](../apps/es-portfolio)
- [ES Blog](../apps/es-blog)
- [ES Store](../apps/es-store)

Their Compose files use shared services and an external Docker network. Local hostnames, reverse-proxy routes,
database services and provider credentials must be configured for the developer's environment. Keep local
configuration separate from production and use isolated development data.

## Configuration safety

- Keep secrets in ignored local environment files or an approved secret manager.
- Never include secrets in documentation, sample output, issue reports or screenshots.
- Use synthetic data for examples and tests.
- For any external integration, confirm that its provider app, account, callback URLs and permissions are set up.
