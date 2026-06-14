# Mintlify Migration — Decisions Needed (Question Log)

_Review log from the autonomous iteration pass on the **Mintlify Docs Migration** project
([Linear](https://linear.app/seam/project/mintlify-docs-migration-c6359a7c6ad3)). Everything
below is BLOCKED on a human decision or a credential I don't have. Implementation work that
didn't need a decision has already been done — see `STATUS.md`._

---

## 1. Analytics credentials — DOC-194 ✅ RESOLVED

Set up via the **`docs` Doppler project**. Pulled `PUBLIC_GA4_ID` + `PUBLIC_POSTHOG_KEY` from
`docs/prd` and added the `integrations` block (ga4 + posthog, US-cloud apiHost) to
`mintlify-docs/docs.json`. Verified the codegen preserves it on regen. **No open question.**

One thing left, but it can only be done after deploy: **confirm events/pageviews actually land in
both the GA4 and PostHog dashboards** on the live site.

_(Design note: the values live literally in the committed `docs.json` — correct, since they're
publishable client-side keys and Mintlify reads analytics from `docs.json` at build time. Doppler
`docs` is the system of record. If you later self-host and want Doppler injected at build time, a
`doppler run` prebuild step that templates `docs.json` would do it — not needed for Mintlify
hosting.)_

---

## 2. SEO site-wide config — DOC-196 ✅ RESOLVED (applied)

Per-page meta descriptions are done (72 pages filled — see `STATUS.md`). What remains is the
**site-wide `seo` block in `docs.json`**. I verified the canonical values against the marketing
site (`ui/packages/marketing/src/app/layout.tsx`) so docs stay consistent with the main site:

| metatag        | value                 | source                                                                    |
| -------------- | --------------------- | ------------------------------------------------------------------------- |
| `twitter:site` | **`@helloseam`**      | marketing `layout.tsx` — ⚠️ NOT `@getseam` (that's only the email domain) |
| `og:site_name` | `Seam`                | marketing `openGraph.siteName` (not "Seam Docs")                          |
| `og:type`      | `website`             | marketing                                                                 |
| `og:locale`    | `en_US`               | marketing                                                                 |
| `twitter:card` | `summary_large_image` | marketing                                                                 |

**✅ APPLIED to `docs.json`** (decisions: docs domain `https://docs.seam.co`; indexing
`navigable`; docs-specific OG image you uploaded):

```jsonc
"seo": {
  "metatags": {
    "og:type": "website",
    "og:site_name": "Seam",
    "og:locale": "en_US",
    "og:image": "https://docs.seam.co/images/seam-og-default.jpg",  // absolute URL (Mintlify recommends this for OG)
    "twitter:card": "summary_large_image",
    "twitter:site": "@helloseam"
  },
  "indexing": "navigable"
}
```

OG image: `mintlify-docs/images/seam-og-default.jpg` (1200×630 JPEG, 243 KB) — the docs-specific
cover you uploaded. _(A redundant `seam-og-default.png` from the first upload is still in the
folder; superseded by the JPEG — safe to delete.)_

---

## 3. Generated API pages missing descriptions — DOC-196 follow-up (NEEDS A DECISION)

**45 of 86 generated pages** (under `api/` and `low-level-apis/`, built from `openapi.json`)
have no meta `description`. These can't be fixed by editing frontmatter — they need a change in
the **OpenAPI source / codegen pipeline** (`mintlify-codegen/` + upstream `@seamapi` types add
operation `summary`/`description`).

**Decision:** Do you want me to (a) open a separate Linear issue for a codegen change to emit
`description` metadata for generated API pages, (b) handle it now, or (c) accept it as low
priority (API reference pages rank less on meta-description anyway)? My recommendation: **(a)**,
since it's a distinct workstream from this content migration.

---

## 4. Content/IA cleanups surfaced during the audit (LOW PRIORITY — your call)

These are pre-existing, not migration-introduced. Flagging, not fixing, since they need
content-owner judgment:

- **Duplicate page titles (5 files):** "Special Requirements for Android Mobile Access SDK
  Development" (×2) and "Next Steps" (×3, all in the ASSA ABLOY Visionline setup tree). Retitling
  changes the visible H1/nav label, so I left them. Want context-specific titles?
- **Duplicate descriptions + near-duplicate bodies** on the Visionline plastic-card vs mobile-key
  setup tracks (parallel step pages). Possible duplicate-content concern; needs an IA decision.
- **GitBook-era leftovers:** `mintlify-docs/SUMMARY.mdx` and
  `mintlify-docs/device-and-system-integration-guides/SUMMARY.mdx` are not referenced in
  `docs.json` navigation. Safe to delete as cleanup? (I left them untouched.)

---

## 5. Redirects — DOC-195 (DONE, but two FYI items worth a glance)

414 redirects were validated and applied (see `STATUS.md`). Two non-blocking notes:

- The brand-guide redirects assume the legacy **bare root slugs** (e.g. `/akiles-locks`,
  `/avigilon-alta-access-system`) were the real old public URLs. This is corroborated by the
  brand `.gitbook.yaml`, but worth a sanity check against analytics/Search Console top pages.
- Several deep ASSA ABLOY Visionline `*-in-development/credential-types/*` subpaths collapse to
  their section index page (carried over verbatim from the existing GitBook redirect map).
