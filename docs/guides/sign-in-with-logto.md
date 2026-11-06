---
sidebar_position: 4
title: Sign-in with Logto
---

# Sign-in with Logto

ES Portfolio, ES Blog, ES Store and ES Journal sign in through [Logto](https://logto.io/), an open-source identity service.
Running one of them yourself needs a Logto instance, and running several against the same instance gives you
single sign-on across them.

## Get a Logto instance

- **Logto Cloud:** create a tenant at [cloud.logto.io](https://cloud.logto.io/). It is hosted for you and has a free tier.
- **Self-hosted:** Logto is open source and runs in Docker next to the apps.

The [Logto documentation](https://docs.logto.io/) covers both options. These docs only list what each ES app needs.

## Register each app

In the Logto console, create one **Traditional web** application per app:

| App | Redirect URI | Post sign-out redirect URI |
|---|---|---|
| ES Portfolio | `<site>/auth/sso/callback` | `<site>/` |
| ES Blog | `<site>/login/sso/callback` | `<site>/` |
| ES Store | `<site>/login/sso/callback` | `<site>/` |
| ES Journal | `<site>/auth/sso/callback` | `<site>/` |

Copy each application's endpoint, app ID and app secret into that app's environment file:

```bash
LOGTO_ENDPOINT=https://your-tenant.logto.app   # or your self-hosted Logto URL
LOGTO_APP_ID=...
LOGTO_APP_SECRET=...
# LOGTO_INTERNAL_ENDPOINT=http://logto:3001    # optional: reach Logto over a Docker network
```

## The owner role

The admin areas (Portfolio admin, Blog admin, Store admin, Journal) only let in users who hold the Logto role **`es-owner`**.
The apps ask for the `roles` scope to read it. In the Logto console, go to **Authorization → Roles**, create
`es-owner` and assign it to your user.

## Matching accounts

Logto proves who you are, and each app decides what you can do. The verified email on your Logto account must match
an existing account in the app: the portfolio admin, a blog user created with `app:user:create`, or a journal user.
These apps never create accounts from a sign-in. ES Store is the exception: a first sign-in creates a customer
account, and a first sign-in with the `es-owner` role creates the store admin.

## Signing out

Signing out in one ES app signs you out of Logto. The other apps end their own sessions on their next request,
through a shared cookie on the parent domain.
