# Oosterik Bouw

- Marketing site for Oosterik Bouw.
- React 19 + TypeScript + Vite 8.
- React Router 7, Tailwind CSS 4, GSAP, Swiper, lucide-react.
- Dutch only.
- No backend, CMS, auth, i18n, or tests.

# Commands

- `npm run dev`
- `npm run build` - type-check + production build
- `npm run lint`
- `npm run preview`

# Structure

- `src/pages`: route pages.
- Routes: `/`, `/diensten`, `/projecten`, `/projecten/:id`, `/werkwijze`, `/over-ons`, `/contact`.
- `src/components`: page sections and shared UI.
- `src/layouts/Layout.tsx`: global wrapper + footer.
- Header is page-local inside hero sections, not global.
- `public`: static images.
- `website-content.md`: long-form source copy.

# Content

- Keep copy in Dutch.
- Keep tone direct, practical, and trustworthy.
- Text and project data are hardcoded in TSX.
- If copy changes, update the relevant component/page and keep `website-content.md` aligned.

# UI

- Preserve the design system in `src/index.css`: warm orange brand, dark neutrals, light surfaces, `DM Sans` body, `Montserrat` display.
- Prefer Tailwind utilities and existing theme tokens over new raw hex values.
- Use `lucide-react` for new icons.
- Prefer extending existing sections/components over adding new abstractions.

# Motion

- Use `ScrollReveal` / `useScrollReveal` for simple reveal-on-scroll.
- Use GSAP / ScrollTrigger for richer motion only.
- This app is a React Router SPA. Do not wire Barba directly into `BrowserRouter`; use a GSAP route overlay unless the app moves to MPA/SSR.
- Respect `prefers-reduced-motion`.
- Use Swiper only for sliders/carousels.

# Working Rules

- Keep solutions simple and static unless asked otherwise.
- Do not add a CMS, backend, or heavy state/data libraries without a clear request.
- Follow existing TSX style: double quotes, semicolons, Tailwind classes inline.

# Validation

- Run `npm run build` before finishing app changes.
- There is no automated test suite.
