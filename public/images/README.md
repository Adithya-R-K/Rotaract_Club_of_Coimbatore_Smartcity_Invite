# Image placeholders

Drop real assets in here using these exact names/paths, then update
`config/event.ts` to point to them (most are already wired up):

- `logo.png` — official club/event logo (transparent PNG). Set
  `logo.path = "/images/logo.png"` in `config/event.ts`.
- `og-preview.jpg` — 1200×630 social sharing preview image.
- Member/dignitary photos — square images work best (1:1). Add a path
  like `/images/members/name.jpg` and set it on the matching entry's
  `photo` field in `config/event.ts`.

Until real files are added, the site shows elegant placeholder states
automatically — nothing is invented or faked.
