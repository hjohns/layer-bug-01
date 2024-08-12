# layer-bug-01

## About

There's a rendering issue, i think it's a css ordering problem potentially, when you use primevue, tailwind and nuxt layers.

This repo contains two projects:
- master01 (master nuxt project with a base layer defined)
- ext01 (extension project, extends the master with only minimal required packages included)

## Installation

```
cd /master01
pnpm i

cd /ext01
pnpm i
```

## Running

```
cd /master01
pnpm dev
(go to master site url)

cd /ext01
pnpm dev
(go to ext site url)

```

The site ext01 site rendering is broken.


## Without bug

Nuxt's pages routing seems to break the rendering.

When you remove the bug is gone.

```
rename app.vue to appx.vue
copy pages/index.vue to app.vue
```
