---
sidebar_position: 3
title: ES Store
---

# ES Store

ES Store is the theme store for the ES apps, at **store.edilsonsantos.co.za**. It is **not released yet**: the
catalogue can be browsed, but checkout is switched off until payments and the licence terms are finished.

**Source:** [edilsonsantos-co-za/es-marketplace](https://github.com/edilsonsantos-co-za/es-marketplace) (repository access may be required).

## What it sells

Every ES app ships with one built-in design, **Atlas**. The store offers everything else:

- **Themes** restyle one app (ES Portfolio or ES Blog). Free themes are MIT licensed and download without checkout,
  from the store or from the app's own theme screen.
- **Premium themes** and **theme packs** (a pack restyles every ES app at once) will be sold with a licence key
  once checkout opens. Prices are placeholders until then.

All themes are original designs. Credits for any inspiration are listed in the catalogue and in each package's
licence file.

## Stack

- Sylius 2 on Symfony, PHP 8.4, MySQL.
- Twig shop templates styled to match Atlas, with the shared ES apps launcher.
- Docker/Compose on the shared `milkyway` network, behind a reverse proxy; no published ports.
- Yoco (ZAR) as the planned payment gateway. It is built but not switched on.

## Theme packages and signing

Each theme is a ZIP with a `manifest.json` listing every file and its SHA-256, plus `manifest.sig`, an Ed25519
signature over the manifest. ES Portfolio and ES Blog refuse packages that are unsigned, modified, or that write
outside their own theme folder. The public key ships with each app; the private signing key is never in the
repository.

| App | Installs from | Installs to |
|---|---|---|
| ES Portfolio | Admin → Portfolio → Themes | `storage/app/themes/<id>/` |
| ES Blog | Admin → Settings → Themes | `var/themes/<id>/` |

## Sign-in

Customers and the store admin sign in through Logto (see [Sign-in with Logto](../guides/sign-in-with-logto)).
The admin area at `/admin` only admits the `es-owner` role.

## License

Original work in the repository is MIT licensed, except the premium themes, which carry the ES Theme Licence in
their packages.
