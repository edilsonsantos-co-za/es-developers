---
sidebar_position: 2
title: ES Blog
---

# ES Blog

ES Blog is a self-hosted publishing workspace rewritten on Symfony 7.4 LTS. It uses Doctrine entities and
migrations for its MySQL-backed content model, with Twig templates for its public and administration views.

**Source:** [edilsonsantos-co-za/es-blog](https://github.com/edilsonsantos-co-za/es-blog) (repository access may be required).

## Stack and features

- PHP 8.2+ and Symfony 7.4 LTS.
- Doctrine ORM and MySQL.
- Docker with an Apache/PHP application image.
- Twig-rendered public site and administration pages.
- Optional queue/worker processes for scheduled publishing and other background work.

The app's README is the source of truth for its current configuration, commands and feature set. Do not assume a
local or production integration is available merely because it is described in the source.

## Local development

Requirements are Docker with Compose, Git, and access to the repository. Create a local environment file from the
tracked example and set local-only secrets and connection strings before starting the containers:

```bash
git clone https://github.com/edilsonsantos-co-za/es-blog.git
cd es-blog
cp .env.example .env.local
docker compose up -d --build
```

The Compose setup expects shared network/database and reverse-proxy services; it does not publish the app directly
to a public interface. Consult `docs/deployment.md` in the source repository for environment-specific setup.

## Sign-in and integrations

The current sign-in flow is Logto SSO. A Logto web application must be configured with the correct callback and
sign-out URLs, and users must already exist in ES Blog with matching verified email addresses. If Logto is not
configured, the sign-in flow does not fall back to a public password form.

LinkedIn publishing requires a LinkedIn developer application with the necessary products and registered callback.
Optional feed drafting may use an external AI provider when explicitly configured. These integrations require
their own accounts, approvals and secrets; none are supplied by this documentation site.

## Themes, versions and license

Themes can be selected in the administration area or uploaded as ZIP packages. The app verifies trusted Ed25519
signatures and file integrity; disabling unsigned-theme checks is unsafe because templates are executable code.
The source repository's `VERSION` file is the version source of truth; consult its release documentation before
creating or publishing a release.

ES Blog retains the HTMLy content model and originated from a GPL-2.0-or-later codebase. Its source repository
preserves the relevant license and copyright files. Review those files before redistributing any portion of the
code or assets. The ES Blog repository may be private; access must be granted by its owner.
