# DHRUVAM — The Star That Guides

Interactive installation-ceremony website for the **Rotaract Club of
Coimbatore Smart City** — 6th Installation Ceremony, Rotary Year 2026–2027,
theme **LUMA** (Lead · Unite · Motivate · Act).

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer
Motion. Fully static — no backend, no database, no auth. Deployable to
Vercel with zero configuration.

---

## 1. Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Every section reads from one file:
**`config/event.ts`**.

---

## 2. Editing content — everything lives in `config/event.ts`

You should never need to touch a component file for routine updates.

| To change...                          | Edit this field in `config/event.ts` |
|----------------------------------------|----------------------------------------|
| Event date/time                        | `event.dateISO`, `event.dateDisplay`, `event.timeDisplay` |
| Venue name / address / map link        | `event.venue` |
| Theme name / words                     | `event.theme` |
| Rotary year                            | `event.rotaryYear` |
| Live website URL (used by PDF & OG tags) | `siteUrl.production` |
| Site background photo                  | `backgroundImage` (see §3b) |
| Logo                                    | `logo.path` (see §3) |
| Dignitaries ("In the Presence Of")     | `dignitaries` array |
| Office bearers ("The Pinnacle...")     | `officeBearers` array, `officeBearersTagline` |
| Schedule                                | `schedule` array |
| Contact people                          | `contacts` array |
| RSVP link                               | `rsvp.enabled` / `rsvp.formUrl` (see §5) |
| SEO title/description/share image       | `seo` |

`event.dateISO` is the single source of truth for the "Add to Calendar"
button — update it and both the Google Calendar link and the downloadable
`.ics` file update automatically. Keep `dateDisplay` / `timeDisplay` in
sync (they're kept separate so they can be phrased naturally, e.g. "10:00
AM" instead of a raw timestamp).

---

## 3. Replacing the logo

1. Add your logo file to `public/images/logo.png` (transparent PNG
   recommended).
2. In `config/event.ts`, set:
   ```ts
   export const logo = {
     path: "/images/logo.png",
     alt: `${club.name} logo`
   };
   ```
That's it — the header/footer placeholder automatically switches to the
real logo. Until then, a tasteful typographic placeholder is shown; no
fake or invented Rotary/Rotaract mark is ever used.

---

## 3b. The background photo

The whole site uses one fixed background photo (set via `backgroundImage`
in `config/event.ts`), currently hotlinked from the URL you shared:

```ts
export const backgroundImage = "https://content.skyscnr.com/.../Northern-Lights....jpg";
```

This works once deployed — the visitor's browser fetches it directly —
but it's a third-party CDN URL that isn't yours and could change or
expire. For a permanent, reliable version:

1. Save the image file to `public/images/aurora-bg.jpg`.
2. Change the config line to:
   ```ts
   export const backgroundImage = "/images/aurora-bg.jpg";
   ```

A dark gradient is layered over the photo automatically (in
`app/globals.css`) to keep text readable — no extra step needed.

---

## 4. Adding member / dignitary photos

The "In the Presence Of" and "Pinnacle Office Bearers" sections currently
show names only (no photos), matching the reference design you shared.
Edit `dignitaries` and `officeBearers` in `config/event.ts` — each entry
is plain text, so adding or renaming people is a one-line change. Leave
`name: null` on a `dignitaries` entry for anyone unconfirmed — the card
falls back to an elegant "To be revealed" placeholder automatically.

---

## 5. Enabling RSVP later

RSVP is intentionally **off** until you have a real process (e.g. a Google
Form). To turn it on:

```ts
export const rsvp = {
  enabled: true,
  formUrl: "https://forms.gle/your-form-id"
};
```

No data is collected or submitted anywhere in this codebase unless you
wire up your own form — the section is a link-out, not a data-collecting
form, by design.

---

## 6. The opening experience

`components/OpeningExperience.tsx` is the cinematic "guiding star" intro.
It:
- Respects `prefers-reduced-motion` (shows the same content instantly,
  no animation, if the visitor's OS requests reduced motion).
- Offers a **"Skip intro"** button after ~1 second, and the
  **"Enter the Experience"** button is always present — the animation is
  never a barrier to the event details.
- Locks background scroll while open, restores it once dismissed.

To adjust timing, edit the `delay` values in the `transition` props of
each `motion.*` element in that file.

---

## 7. Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment
   variables are required.
4. Deploy. Vercel will give you a URL like
   `https://your-project.vercel.app`.
5. Copy that URL into `config/event.ts` → `siteUrl.production`. This
   single change updates:
   - Open Graph / Twitter share metadata (how it looks on WhatsApp)
   - The base URL used when generating absolute links
6. If you later attach a custom domain in Vercel, update
   `siteUrl.production` again to match.

Optional: once you have a real `public/images/og-preview.jpg` (1200×630),
the WhatsApp/social preview will use it automatically.

---

## 8. Project structure

```
app/
  layout.tsx        — fonts, <head> metadata, SEO/OG tags
  page.tsx           — assembles all sections in order
  globals.css        — design tokens, reduced-motion handling, focus states
components/
  OpeningExperience.tsx   — cinematic guiding-star intro
  Starfield.tsx           — ambient star background (deterministic, no hydration issues)
  Section.tsx             — reveal-on-scroll wrapper + guiding-line waypoint
  Hero.tsx, AboutDhruvam.tsx, ThemeLuma.tsx, CeremonyDetails.tsx,
  Dignitaries.tsx, MemberCard.tsx, Schedule.tsx, Venue.tsx,
  Contact.tsx, RSVP.tsx, Closing.tsx, Footer.tsx, Logo.tsx,
  AddToCalendar.tsx
config/
  event.ts           — ALL editable content (see §2)
public/
  images/            — logo, OG image, member photos (see per-file README)
```

---

## 9. Accessibility & performance notes

- Semantic HTML landmarks (`header`, `main`, `section`, `footer`).
- Visible focus rings on every interactive element (never suppressed).
- All motion respects `prefers-reduced-motion`; the site is fully usable
  with animations off.
- No hover-only interactions — every action has a tap/click/keyboard
  equivalent.
- Fonts are self-hosted via `@fontsource` (no external font requests at
  runtime), keeping the site fast and privacy-friendly.
- No client-side data collection anywhere in the codebase.

---

## 10. Design system reference

| Token          | Value      | Use                                  |
|----------------|------------|---------------------------------------|
| `midnight`     | `#060B14`  | Base background                       |
| `teal`         | `#0B2E2B`  | Alternating section background        |
| `emerald`      | `#1F6F5C`  | Supporting accent                     |
| `aurora`       | `#4FD8C4`  | Cyan highlight (eyebrow text, links)  |
| `violet`       | `#7C6FE0`  | Secondary atmosphere glow             |
| `parchment`    | `#F4F1E8`  | Primary text on dark backgrounds      |
| `gold`         | `#D9B26A`  | CTAs, the guiding star, waypoints     |

Typography: **Fraunces** (serif, display/title — including the italic
treatment for "The Star That Guides") + **Manrope** (sans-serif, body).

See `tailwind.config.ts` for the full token set.
