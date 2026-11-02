# Alumni Founder Network — existing site migrated to Next.js 14

This archive contains the **existing website**, not a blank starter. The original React/Vite sections were transferred to Next.js App Router, with routing, shared navigation/footer, GSAP sections and the existing UI styles retained.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to validate your own environment.

## Structure

- `app/`: Next.js routes, layout, styles
- `components/all-components/`: each migrated website section as a `.tsx` file
- `components/ui/`: shadcn-style Button, Badge, Card
- `lib/utils.ts`: `cn()` helper
- `src/assets/images`, `videos`, `icons`: bundled local assets

## Important migration limitations

1. **Remote Pexels images:** The original Vite site references several Pexels URLs, and those image files were not inside the uploaded ZIP. This environment could not retrieve them. To keep the original photos rather than silently substitute different images, their URLs are retained temporarily. This is the one outstanding exception to your strict all-local-import asset rule. Download the licensed originals into `src/assets/images/`, import each file, and replace the URL references before production. Two photos originally bundled with the source have already been preserved as local imports.
2. Some original JS/JSX component logic was moved into TSX with `@ts-nocheck` annotations pending a full strict typing pass. The App Router, TypeScript config and shared component props are present.
3. Founder identities, statistics and some event details in the original site were mock content, not verified alumni information. Review before publication.
4. The demo registration form only validates in the browser; it has no backend.
5. GSAP code was preserved but a full production build and browser animation test could not be run in this environment.

## Framework

Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, Lucide React, and shadcn-style UI components. No Vite config or root `index.html`.


## Featured Ventures photos (Pexels)
The three scroll panels use three **different real Pexels photographs**, not AI-generated images:
- 01: https://www.pexels.com/photo/college-students-walking-out-of-a-building-and-talking-7972526/
- 02: https://www.pexels.com/photo/people-having-a-meeting-in-an-office-7651717/
- 03: https://www.pexels.com/photo/diverse-audience-engaged-at-conference-event-38111334/

They currently load from `images.pexels.com` remotely (internet connection required). They have **not** been saved into `src/assets/images/`, because this environment could not download them. For a fully offline/self-contained production build, download each photo and replace the three URL constants in `components/all-components/FeaturedVentures.tsx` with imported local files.
