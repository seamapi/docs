# DOC-196: Mintlify SEO Healthcheck

Healthcheck + safe mechanical fixes for the Mintlify docs site under `mintlify-docs/`.
Scope: edited `.mdx` frontmatter only. `docs.json` was NOT modified (parent is editing it
concurrently — proposals are listed below instead). Generated API/OpenAPI pages were not hand-edited.

## Summary stats

| Metric                                                                   | Count                     |
| ------------------------------------------------------------------------ | ------------------------- |
| Total `.mdx` files found                                                 | 410                       |
| Generated pages (`api/`, `low-level-apis/`) — skipped from editing       | 86                        |
| Navigation-only files skipped (`SUMMARY.mdx` x2, not in `docs.json` nav) | 2                         |
| Real content pages in scope                                              | 322                       |
| Real pages that already had a `description`                              | 250                       |
| Real pages **missing** `description` → filled                            | 72                        |
| Real pages missing `title` → filled                                      | 0 (none were missing)     |
| Generated pages missing `description` (reported only, not edited)        | 45 / 86                   |
| Generated pages missing `title`                                          | 0                         |
| Pre-existing wrong/duplicate descriptions corrected                      | 2 (Dormakaba — see below) |
| Duplicate titles across real pages (reported, not changed)               | 2 groups (5 files)        |

After edits: **0** real (non-generated, non-SUMMARY) pages are missing a `title` or `description`.

## Files edited

### 1. Added a missing `description` (72 files)

Each got a unique, ~120–160 char meta description (active voice, second person, Seam tone),
inserted on the line directly after `title:` in existing frontmatter. No other fields touched.

Capability guides & core concepts / dev tools:

- `mintlify-docs/capability-guides/customer-portals/integrate-customer-portal-into-your-application.mdx`
- `mintlify-docs/capability-guides/customer-portals/preview-the-customer-portal-in-console.mdx`
- `mintlify-docs/capability-guides/mobile-access/developing-in-a-sandbox-workspace.mdx`
- `mintlify-docs/capability-guides/mobile-access/mobile-device-sdks/handling-system-permissions.mdx`
- `mintlify-docs/capability-guides/mobile-access/mobile-device-sdks/initializing-the-seam-mobile-sdk.mdx`
- `mintlify-docs/core-concepts/overview.mdx`
- `mintlify-docs/developer-tools/mobile-sdks/android-sdk.mdx`
- `mintlify-docs/developer-tools/mobile-sdks/index.mdx`
- `mintlify-docs/developer-tools/mobile-sdks/ios-sdk.mdx`

Device & system integration guides (sample-data / setup pages):

- `mintlify-docs/device-and-system-integration-guides/2n-intercom-systems/2n-intercoms-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/2n-intercom-systems/2n-system-set-up-instructions.mdx`
- `mintlify-docs/device-and-system-integration-guides/4suites-locks/4suites-locks-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/akiles-locks/sandbox-akiles-locks.mdx`
- `mintlify-docs/device-and-system-integration-guides/assa-abloy-vingcard-credential-services/sandbox-assa-abloy-vingcard-credential-services.mdx`
- `mintlify-docs/device-and-system-integration-guides/assa-abloy-visionline-access-control-system/assa-abloy-visionline-access-management-system-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/assa-abloy-vostio-access-control-system/sandbox-assa-abloy-vostio-access-control-system.mdx`
- `mintlify-docs/device-and-system-integration-guides/august-locks/august-locks-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/avigilon-alta-access-system/avigilon-alta-access-system-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/brivo-access/brivo-access-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/brivo-access/brivo-access-setup-guide.mdx`
- `mintlify-docs/device-and-system-integration-guides/controlbyweb-relays/controlbyweb-relays-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/dormakaba-ambiance-access-control-system/sandbox-dormakaba-ambiance-access-control-system.mdx`
- `mintlify-docs/device-and-system-integration-guides/dormakaba-community-access-control-system/sandbox-dormakaba-community-access-control-system.mdx`
- `mintlify-docs/device-and-system-integration-guides/dormakaba-oracode-locks/dormakaba-oracode-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/dormakaba-oracode-locks/dormakaba-oracode-setup-guide.mdx`
- `mintlify-docs/device-and-system-integration-guides/dormakaba-oracode-locks/programming-offline-access-codes-on-dormakaba-oracode-locks.mdx`
- `mintlify-docs/device-and-system-integration-guides/ecobee-thermostats/ecobee-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/genie-garage-openers/genie-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/google-nest-thermostats/google-nest-thermostats-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/honeywell-thermostats/sandbox-honeywell-thermostats.mdx`
- `mintlify-docs/device-and-system-integration-guides/hotek-access-control-system/sandbox-hotek-access-control-system.mdx`
- `mintlify-docs/device-and-system-integration-guides/igloohome-locks/igloohome-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/keynest-key-lockers/keynest-setup-instructions.mdx`
- `mintlify-docs/device-and-system-integration-guides/keynest-key-lockers/sandbox-keynest-lockers.mdx`
- `mintlify-docs/device-and-system-integration-guides/kwikset-locks/kwikset-locks-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/latch-access-control-system/sandbox-latch-access-control-system.mdx`
- `mintlify-docs/device-and-system-integration-guides/lockly-locks/lockly-lock-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/lockly-locks/lockly-setup-guide.mdx`
- `mintlify-docs/device-and-system-integration-guides/minut-sensors/minut-noise-sensor-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/noiseaware-sensors/noiseaware-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/nuki-locks/nuki-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/pti-storlogix-cloud/pti-storlogix-cloud-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/salto-ks-access-control-system/sandbox-salto-ks-access-control-system.mdx`
- `mintlify-docs/device-and-system-integration-guides/salto-locks/sandbox-salto-ks-locks.mdx`
- `mintlify-docs/device-and-system-integration-guides/salto-proaccess-space-access-system/sandbox-salto-space-access-control-system.mdx`
- `mintlify-docs/device-and-system-integration-guides/schlage-locks/schlage-encode-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/sensi-thermostats/sandbox-sensi-thermostats.mdx`
- `mintlify-docs/device-and-system-integration-guides/smartthings-hubs-+-devices/smartthings-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/tedee-locks/sandbox-tedee-locks.mdx`
- `mintlify-docs/device-and-system-integration-guides/ttlock-locks/index.mdx`
- `mintlify-docs/device-and-system-integration-guides/ttlock-locks/ttlock-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/wyze-locks/wyze-sample-data.mdx`
- `mintlify-docs/device-and-system-integration-guides/yale-locks/yale-sample-data.mdx`

Device manufacturer guidance:

- `mintlify-docs/device-manufacturer-guidance/building-a-seam-compatible-smart-lock-api/webhooks-and-events.mdx`
- `mintlify-docs/device-manufacturer-guidance/creating-a-seam-compatible-intercom-api/creating-access-code-crud-endpoints.mdx`
- `mintlify-docs/device-manufacturer-guidance/creating-a-seam-compatible-intercom-api/creating-intercom-crud-endpoints.mdx`
- `mintlify-docs/device-manufacturer-guidance/creating-a-seam-compatible-intercom-api/creating-the-health-endpoint.mdx`
- `mintlify-docs/device-manufacturer-guidance/creating-a-seam-compatible-intercom-api/index.mdx`

Industry guides (hospitality):

- `mintlify-docs/industry-guides/hospitality-industry-guide/additional-guest-access-actions.mdx`
- `mintlify-docs/industry-guides/hospitality-industry-guide/feature-overview.mdx`
- `mintlify-docs/industry-guides/hospitality-industry-guide/granting-access-using-encoded-plastic-key-cards.mdx`
- `mintlify-docs/industry-guides/hospitality-industry-guide/granting-access-using-mobile-keys.mdx`
- `mintlify-docs/industry-guides/hospitality-industry-guide/granting-access-using-seam-instant-keys.mdx`
- `mintlify-docs/industry-guides/hospitality-industry-guide/seam-api-overview.mdx`
- `mintlify-docs/industry-guides/hospitality-industry-guide/setting-up-the-hotel-site.mdx`

UI components (React):

- `mintlify-docs/ui-components/overview/react-components/access-code-details.mdx`
- `mintlify-docs/ui-components/overview/react-components/access-code-table.mdx`
- `mintlify-docs/ui-components/overview/react-components/create-access-code-form.mdx`
- `mintlify-docs/ui-components/overview/react-components/device-details.mdx`
- `mintlify-docs/ui-components/overview/react-components/device-table.mdx`
- `mintlify-docs/ui-components/overview/react-components/index.mdx`
- `mintlify-docs/ui-components/overview/react-components/update-access-code-form.mdx`

Note: 3 of these (`creating-the-health-endpoint.mdx`, `create-access-code-form.mdx`,
`update-access-code-form.mdx`) landed at 100–114 chars rather than 120+. The pages have
genuinely minimal content; padding would have meant filler text, so the shorter descriptions
were kept.

### 2. Corrected a factually wrong, copy-pasted `description` (2 files)

Both pages had the description `"Learn how to configure your Latch ACS for integration with
Seam."` — wrong manufacturer (copy-paste from the Latch guide). Corrected to name the actual
system. This is a factual bug fix, not a style change.

- `mintlify-docs/device-and-system-integration-guides/dormakaba-community-access-control-system/dormakaba-community-setup-guide.mdx`
  → "Learn how to configure your Dormakaba Community access control system for integration with Seam."
- `mintlify-docs/device-and-system-integration-guides/dormakaba-ambiance-access-control-system/dormakaba-ambiance-setup-guide.mdx`
  → "Learn how to configure your Dormakaba Ambiance access control system for integration with Seam."

**Total files edited: 74.**

## docs.json SEO proposals (NOT applied — parent is editing docs.json)

Current state of `mintlify-docs/docs.json`:

- Has: `name`, `theme`, `logo` (light/dark), `favicon` (`/images/favicon.png`), `colors`,
  `navigation`, `topbar`, `footer`, `api`, `redirects`, `openapi`.
- Missing: no `seo` block, no `metatags`, no Open Graph / Twitter card defaults, no explicit
  `indexing` setting.
- Nothing blocks search indexing (no `robots`/`noindex` directives present). The site should
  be crawlable by default; Mintlify auto-generates `sitemap.xml` and `robots.txt`.

Recommended additions (Mintlify `seo` schema):

```jsonc
"seo": {
  "metatags": {
    "og:type": "website",
    "og:site_name": "Seam Docs",
    "og:image": "/images/seam-og-default.png",   // needs a 1200x630 asset added to /images
    "twitter:card": "summary_large_image",
    "twitter:site": "@getseam"                    // confirm correct Seam handle
  },
  "indexing": "navigable"   // default; set explicitly to document intent. Use "all" only if
                            // you want non-nav pages (e.g. orphan/SUMMARY) indexed too.
}
```

Decisions a human must make before applying:

1. Provide/confirm a default OG image asset (1200x630) under `mintlify-docs/images/`.
2. Confirm the correct Twitter/X handle.
3. Confirm `indexing` policy — `navigable` (only pages in nav) vs `all`.

## Remaining issues / needs human decision

1. **Generated pages missing descriptions (45 of 86).** Pages under `api/` and
   `low-level-apis/` are generated from `openapi.json` / the codegen pipeline and were not
   hand-edited per scope. To give these meta descriptions, add `description` to operation
   summaries in the OpenAPI source or the generator templates. (`docs/api-reference/` codegen
   pipeline in the parent repo.)

2. **Duplicate titles across pages (2 groups, 5 files)** — pre-existing, not changed because
   editing a `title` changes the visible H1 and nav label (beyond "safe mechanical"):
   - "Special Requirements for Android Mobile Access SDK Development" (2 files: salto-ks-…,
     assa-abloy-visionline-…). Consider prefixing with the system name.
   - "Next Steps" (3 files, all under the Visionline ACS setup tree). Consider context-specific
     titles, e.g. "Next Steps: Visionline Plastic Card Encoding App (Sandbox)".

3. **Pre-existing duplicate descriptions (still present, intentional-looking).** Several
   Visionline setup steps that appear in two parallel app tracks (plastic-card vs mobile-key)
   share identical descriptions (e.g. "Learn how to set up a Visionline user account to
   integrate with Seam." x4; "Learn which ports are required for using Visionline." x2; etc.).
   The page bodies are near-identical too, so these are effectively duplicated step pages.
   Left as-is — deduping requires content/IA decisions, not a mechanical SEO fix. Flag for the
   content owner if canonical/duplicate-content concerns matter.

4. **`SUMMARY.mdx` files** (`mintlify-docs/SUMMARY.mdx` and
   `device-and-system-integration-guides/SUMMARY.mdx`) are GitBook-era table-of-contents
   leftovers, not referenced in `docs.json` navigation. They have no `title`/`description` and
   were intentionally skipped. Consider deleting them from the Mintlify tree if they are no
   longer used (separate cleanup task).

5. **Pages with no H1 in body.** Many edited pages have no `# H1` in the body — this is normal
   for Mintlify, where the frontmatter `title` becomes the H1. No action needed; noted so the
   absence of body `#` headings is not mistaken for a defect.
