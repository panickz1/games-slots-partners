# GameSlots Partners

Affiliate program landing page for GameSlots. Next.js 16 (App Router) and Tailwind CSS v4, exported as a static site.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static output in ./out — deploy to any CDN / static host
```

## Configuration

- **Login / Register URLs** point to the third-party affiliate platform. Set them in `.env.local` (see `.env.example`).
- **Contact info** is in `lib/config.ts`.
- **All copy** is in `content/en.ts`. Values marked `PLACEHOLDER` (commission rates, calculator rates, terms, game counts, FAQ answers, manager details) must be confirmed before launch.
- **Screenshots**: drop images into `public/screens/` with the filenames below. Until a file exists, a labelled dashed slot is shown in its place.
  - `lobby.webp` (hero, 16:9)
  - `pvp.webp`, `tiers.webp`, `games.webp` (product section, 16:9)
- **Legal pages** (`/terms`, `/privacy`, `/cookies`): copy is in `content/legal.ts`, and company details (legal name, registration, licence, governing law) in `COMPANY` in `lib/config.ts`. These are **drafts that need legal review** before launch; keep their commercial terms in sync with `content/en.ts`.
- **Affiliate manager** photo/name/handle: `start.manager` in `content/en.ts` and the avatar in `components/sections/GetStarted.tsx`.

## Structure

```
app/                 layout (header/footer), home page, legal pages, global styles, favicon
components/sections  one component per page section
components/ui        Button, Icon, Logo, Screenshot, SectionHeader
content/legal.ts     Terms, Privacy and Cookie policy copy
content/en.ts        English copy (move to next-intl messages when adding PT / PT-BR / PL)
lib/config.ts        external URLs and contact details
```
