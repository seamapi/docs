# Mintlify Migration — Iteration Pass Status

_What was done autonomously. Decisions/blockers are in `QUESTIONS.md`. Detailed reports:
`doc-195-redirect-audit.md`, `doc-196-seo-healthcheck.md`._

| Issue                                            | Title               | State after this pass                                                                    |
| ------------------------------------------------ | ------------------- | ---------------------------------------------------------------------------------------- |
| [DOC-193](https://linear.app/seam/issue/DOC-193) | Logo & favicon      | ✅ **Done** — verified                                                                   |
| [DOC-194](https://linear.app/seam/issue/DOC-194) | GA + PostHog        | ✅ **Done** — wired from Doppler `docs/prd` (verify post-deploy)                         |
| [DOC-195](https://linear.app/seam/issue/DOC-195) | No 404s / redirects | ✅ **Done** — 414 redirects added                                                        |
| [DOC-196](https://linear.app/seam/issue/DOC-196) | SEO healthcheck     | ✅ **Done** — per-page meta filled + site-wide `seo` block applied (follow-ups in Q3–Q4) |

---

## DOC-193 — Logo & favicon ✅

Already implemented in the repo; this pass **verified** it:

- `mintlify-docs/images/{seam-wordmark-light,seam-wordmark-dark,favicon}.png` exist and are
  **byte-identical** to the source in `../ui/packages/marketing/public/docs/images/`.
- `docs.json` references them correctly (`logo.light`/`logo.dark`/`favicon`).
- **Light/dark convention confirmed correct by visual inspection:** `seam-wordmark-light.png`
  is the dark navy logo (for light backgrounds), `seam-wordmark-dark.png` is the white logo
  (for dark backgrounds). No change needed.

## DOC-194 — Google Analytics + PostHog ✅

- Set up the **`docs` Doppler project** (configs dev/stg/prd); pulled `PUBLIC_GA4_ID` +
  `PUBLIC_POSTHOG_KEY` from `docs/prd`.
- **Applied:** added the `integrations` block to `docs.json` (ga4 `measurementId`, posthog
  `apiKey` + `apiHost: https://us.i.posthog.com`), placed after `colors`.
- Verified `mintlify-codegen/update-nav.ts` re-serializes the whole object and preserves
  `integrations`/`redirects` on regen (same `JSON.stringify(…,2)+'\n'` format).
- **Left for post-deploy:** confirm events/pageviews flow into both dashboards on the live site.

## DOC-195 — Legacy GitBook URLs resolve (no 404s) ✅

- Audited all three legacy GitBook spaces (main `guides`, `api-reference`, `brand-guides`)
  against the new Mintlify route set (410 `.mdx` routes + 196 OpenAPI `x-mint.href` routes + 42
  existing redirects).
- Found **414 legacy URLs that would 404**, all mapped to a verified existing destination at
  high confidence (0 unresolved).
- **Applied:** `docs.json` `redirects` grew **42 → 456** (+414).
- **Independently re-validated** before applying: no duplicate sources, no collision with
  existing redirects, no redirect shadowing a real page, and every destination resolves to a
  real route. (`migration-review/validate-redirects.mjs`, result: ALL CLEAN.)
- Gap breakdown: 42 API resource index pages → `/object`; 65 guide relocations; 307 brand-guide
  path moves. Full table in `doc-195-redirect-audit.md`.

## DOC-196 — SEO healthcheck 🟡

- Scanned all 410 `.mdx` pages.
- **Applied:** added unique meta `description` to **72 pages** that lacked one (120–160 chars,
  Seam tone), and **corrected 2 factually-wrong copy-pasted descriptions** (Dormakaba pages that
  said "Latch"). **74 files edited, frontmatter only**, all valid YAML. After this pass, every
  hand-written page has a title + description.
- **Applied:** site-wide `seo` block in `docs.json` — canonical metatags verified against the
  marketing site (`og:site_name: Seam`, `twitter:site: @helloseam`, `og:type/locale`,
  `summary_large_image`), absolute `og:image: https://docs.seam.co/images/seam-og-default.jpg`
  (docs-specific 1200×630 JPEG uploaded by Sy), and `indexing: navigable`.
- **Follow-ups (not blockers — see `QUESTIONS.md` §3–§4):** 45 generated API pages missing
  descriptions (codegen change); duplicate titles/descriptions in the Visionline tree;
  GitBook-era `SUMMARY.mdx` leftovers; redundant `seam-og-default.png` safe to delete.

---

## Changes on disk (not committed)

- `mintlify-docs/docs.json` — +414 redirects.
- 74 `mintlify-docs/**/*.mdx` — frontmatter `description` additions/fixes.
- `migration-review/` — these reports + validation script (review artifacts; delete or move
  before shipping if you don't want them in the docs repo).

Nothing has been committed or pushed. Ready for your review.
