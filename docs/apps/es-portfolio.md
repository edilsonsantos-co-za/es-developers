---
sidebar_position: 1
title: ES Portfolio
---

# ES Portfolio

ES Portfolio is a self-hosted developer portfolio and content-management application. The public site is rendered
from Laravel Blade themes; a separate React administration panel manages portfolio content.

**Source:** [edilsonsantos-co-za/es-portfolio](https://github.com/edilsonsantos-co-za/es-portfolio) (repository access may be required).

## Stack and structure

- Laravel 12, PHP 8.2+, and MySQL for the application and API.
- React 19, Redux, Ant Design and Vite for the administration panel.
- Blade, CSS and JavaScript for the public portfolio themes.
- Docker/Compose for development and production containers.

The frontend assets and application code are kept in the same repository. The built-in Atlas theme is the default;
administrator content is stored by the Laravel application, not in this documentation site.

## Local development

Requirements are Docker with Compose, Git, and access to the repository. The app Compose file uses shared
services on an external `milkyway` network; it does not create its own MySQL, Redis or reverse-proxy services.
Use an isolated development database: the development configuration can recreate its database.

```bash
git clone https://github.com/edilsonsantos-co-za/es-portfolio.git
cd es-portfolio
./bin/create-env.sh dev
docker compose -f docker-compose.dev.yml up -d --build
```

Set database, cache, mail, app URL and other environment values for the local environment using the repository's
environment examples. Do not copy production secrets into a development setup. The development app is served
through the local host/reverse proxy configured for that environment; the Compose file does not publish an
application port to the host.

## Configuration and sign-in

The full configuration reference and environment examples live in the source repository. Logto sign-in is
optional. When enabled, the Logto application must be registered with valid callback URLs and the application
must already contain an administrator with the same verified email address. Admin accounts are not automatically
created from SSO.

The shared ES apps launcher links the Portfolio with the other apps. Optional app links/settings are controlled
by the relevant application configuration; do not assume an app is publicly accessible just because its link is
shown.

The Atlas contact section can show optional Upwork and Support links using `UPWORK_URL` and `SUPPORT_URL`.
Each must be a complete `http://` or `https://` URL; unset or invalid values are hidden. No profile or support
account is assumed by default.

## Extending themes

Atlas is built in. Other themes can be installed from a configured theme catalogue or uploaded as ZIP packages.
Catalogue availability and publication status must be confirmed separately; this documentation does not announce
an ES Marketplace launch. Theme packages are executable templates: only install packages from a trusted source.
The installer verifies signed manifests, file hashes, allowed paths and app/version constraints; unsigned
packages are rejected by default. Installed themes persist under application storage, not under the source tree.

For source changes, keep the public portfolio theme implementation in the theme layer and use the repository's
validation/build tasks before publishing. See its `README.md`, theme documentation and manifest for the current
supported commands and constraints.

## License and status

The project is maintained from the MIT-licensed [ezfolio](https://github.com/arifszn/ezfolio) project; upstream
copyright notices are retained in the source. Check the repository's license and attribution files for the exact
terms that apply to redistributed code and assets. This page does not claim that the source repository is public
or that any particular deployment is available.
