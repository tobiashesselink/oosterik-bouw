---
name: barba-page-transitions
description: Barba.js page transitions with GSAP. Use when implementing Barba hooks, transitions, views, namespaces, or checking whether Barba fits a React app. In this repo, Barba is MPA/SSR-only; for the current React Router SPA, use the GSAP route overlay pattern instead.
---

# Barba.js Page Transitions

## When to Use

Use for Barba.js questions, page transitions, hooks, views, namespaces, lifecycle, or GSAP-driven page changes.

## Project Constraint

- This repo is a React Router SPA.
- Barba expects real page fetches plus `data-barba="wrapper"` and `data-barba="container"` markup.
- Do not mount Barba on top of `BrowserRouter` in this project. Barba swaps fetched HTML containers; React Router swaps client-rendered views.
- For this codebase, implement page transitions with GSAP in React.

## Use In This Repo

- Use a fixed overlay for route transitions.
- Animate to a light neutral surface first, then reveal the next route.
- Keep route transitions global and simple.
- Respect `prefers-reduced-motion`.

## If The App Becomes MPA Or SSR

1. Install `@barba/core`.
2. Add `data-barba="wrapper"` around the app shell.
3. Add one `data-barba="container"` plus a namespace per page.
4. Define transitions in `barba.init({ transitions: [...] })`.
5. Put page-specific re-init logic in `views`, not `transitions`.
6. Manage scroll reset and container stacking with hooks/CSS.

## Minimal Barba Shape

```ts
import barba from "@barba/core";
import gsap from "gsap";

barba.init({
  preventRunning: true,
  transitions: [
    {
      name: "fade",
      async leave({ current }) {
        await gsap.to(current.container, { opacity: 0, duration: 0.25 });
      },
      async enter({ next }) {
        await gsap.from(next.container, { opacity: 0, duration: 0.25 });
      },
    },
  ],
});
```

## Do Not

- Do not combine Barba DOM swapping with React Router view rendering.
- Do not put app re-init logic inside transitions when Barba `views` are the better fit.
- Do not use Barba here unless the routing architecture changes.
