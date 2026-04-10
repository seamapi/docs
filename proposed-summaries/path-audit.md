# URL Path Audit & Forward Plan

## Current State: Path Audit

### Sections with clean paths (100% aligned)

| Section         | Entries | Prefix             |
| --------------- | ------- | ------------------ |
| API Reference   | 241     | `api/`             |
| Industry Guides | 8       | `industry-guides/` |

### Sections with mixed paths

#### Core Concepts (33 entries)

| Prefix           | Count | Status                                  |
| ---------------- | ----- | --------------------------------------- |
| `core-concepts/` | 32    | Expected                                |
| `device-guides/` | 1     | **Foreign** — "Reconnecting an Account" |

#### Capability Guides (89 entries)

| Prefix               | Count | Status                                                                      |
| -------------------- | ----- | --------------------------------------------------------------------------- |
| `capability-guides/` | 68    | Expected                                                                    |
| `products/`          | 21    | **Foreign** — Smart Locks (13), ACS (3), Thermostats (3), Noise Sensors (2) |

`products/` is a legacy prefix never fully migrated to `capability-guides/`.

#### UI Components (26 entries)

| Prefix             | Count | Status                       |
| ------------------ | ----- | ---------------------------- |
| `seam-components/` | 17    | Expected (web components)    |
| `ui-components/`   | 9     | Expected (mobile components) |

Both prefixes are intentional — two distinct component libraries.

#### Developer Tools (48 entries) — worst alignment at 39.6%

| Prefix             | Count | Status                                                      |
| ------------------ | ----- | ----------------------------------------------------------- |
| `device-guides/`   | 28    | **Foreign** — 26 sandbox pages + rate limits + landing page |
| `developer-tools/` | 19    | Expected                                                    |
| `core-concepts/`   | 1     | **Foreign** — "Webhooks"                                    |

Sandbox data is split between `device-guides/sandbox-and-sample-data/` (26 entries) and `developer-tools/sandbox-and-sample-data/` (12 entries).

#### Device and System Integration Guides (147 entries)

| Prefix                                  | Count | Status                                                                    |
| --------------------------------------- | ----- | ------------------------------------------------------------------------- |
| `device-and-system-integration-guides/` | 113   | Expected                                                                  |
| `device-guides/`                        | 34    | **Foreign** — brand landing pages (16), "Get started" guides (17), 1 misc |

`device-guides/` is a legacy prefix partially migrated to the longer name.

#### Device Manufacturer Guidance (11 entries)

| Prefix                          | Count | Status                                                       |
| ------------------------------- | ----- | ------------------------------------------------------------ |
| `device-manufacturer-guidance/` | 6     | Expected                                                     |
| `for-device-manufacturers/`     | 5     | **Foreign** — Intercom API subtree (4) + health endpoint (1) |

### Summary: Legacy Prefix Problem

| Legacy Prefix               | Appears in Sections                                       | Foreign Entries |
| --------------------------- | --------------------------------------------------------- | --------------- |
| `device-guides/`            | Core Concepts, Developer Tools, Device Integration Guides | 63              |
| `products/`                 | Capability Guides                                         | 21              |
| `for-device-manufacturers/` | Device Manufacturer Guidance                              | 5               |

**89 entries (14% of the site) live at paths that don't match their sidebar section.**

---

## Forward Plan: Target Path Structure

### Guiding Principles

1. **One prefix per section** — every page in a section lives under that section's directory
2. **Short, predictable prefixes** — a developer should be able to guess the URL
3. **Flat where possible** — avoid nesting deeper than 3 directories (except where content requires it, like Visionline setup steps)
4. **Sandbox data lives with its manufacturer** — not in a separate directory

### Target Prefixes by Section

#### Section 1: Guides → `/guides/`

| Current Prefix                                | Target Prefix                              | Files to Move               |
| --------------------------------------------- | ------------------------------------------ | --------------------------- |
| `core-concepts/`                              | `guides/core-concepts/`                    | 32 files                    |
| `capability-guides/`                          | `guides/capabilities/`                     | 68 files                    |
| `products/`                                   | `guides/capabilities/`                     | 21 files (merge with above) |
| `industry-guides/`                            | `guides/industry/`                         | 8 files                     |
| `developer-tools/`                            | `guides/developer-tools/`                  | 19 files                    |
| `device-guides/reconnecting-an-account.md`    | `guides/core-concepts/connected-accounts/` | 1 file                      |
| `core-concepts/webhooks.md`                   | `guides/developer-tools/`                  | 1 file                      |
| `device-guides/rate-limits-and-guardrails.md` | `guides/developer-tools/`                  | 1 file                      |

**Result:** Everything under `guides/` with clear sub-prefixes. The `products/` directory is eliminated.

Example URLs:

```
/guides/core-concepts/authentication/api-keys
/guides/capabilities/smart-locks/access-codes/creating-access-codes
/guides/capabilities/thermostats/creating-and-managing-climate-presets
/guides/developer-tools/seam-cli
/guides/industry/hospitality
```

#### Section 2: API Reference → `/api/`

| Current Prefix | Target Prefix | Files to Move         |
| -------------- | ------------- | --------------------- |
| `api/`         | `api/`        | 241 files (no change) |

**Result:** Already clean. No changes needed.

Example URLs:

```
/api/access_codes/create
/api/acs/credentials/list
/api/thermostats/set_hvac_mode
```

#### Section 3: Integrations → `/integrations/`

| Current Prefix                             | Target Prefix                         | Files to Move |
| ------------------------------------------ | ------------------------------------- | ------------- |
| `device-and-system-integration-guides/`    | `integrations/`                       | 113 files     |
| `device-guides/` (brand pages)             | `integrations/`                       | 34 files      |
| `device-guides/sandbox-and-sample-data/`   | `integrations/{brand}/sandbox.md`     | 26 files      |
| `developer-tools/sandbox-and-sample-data/` | `integrations/{brand}/sandbox.md`     | 12 files      |
| `device-manufacturer-guidance/`            | `integrations/manufacturer-guidance/` | 6 files       |
| `for-device-manufacturers/`                | `integrations/manufacturer-guidance/` | 5 files       |

**Result:** One directory replaces four. Sandbox data moves next to its manufacturer. The excessively long `device-and-system-integration-guides/` prefix is shortened.

Example URLs:

```
/integrations/august-locks
/integrations/august-locks/get-started
/integrations/august-locks/sandbox
/integrations/assa-abloy-visionline/setup-instructions
/integrations/salto-ks/programming-mobile-credentials
/integrations/manufacturer-guidance/building-a-seam-compatible-smart-lock-api
```

#### Section 4: UI Components → `/ui/`

| Current Prefix     | Target Prefix           | Files to Move |
| ------------------ | ----------------------- | ------------- |
| `seam-components/` | `ui/web-components/`    | 17 files      |
| `ui-components/`   | `ui/mobile-components/` | 9 files       |

**Result:** Both component libraries under one short prefix with clear distinction.

Example URLs:

```
/ui/web-components/getting-started-with-react
/ui/web-components/device-table
/ui/mobile-components/ios/theming/colors
```

### Migration Summary

| Current Directory                       | Action             | Target                                |
| --------------------------------------- | ------------------ | ------------------------------------- |
| `core-concepts/`                        | Move               | `guides/core-concepts/`               |
| `capability-guides/`                    | Move               | `guides/capabilities/`                |
| `products/`                             | **Merge + delete** | `guides/capabilities/`                |
| `industry-guides/`                      | Move               | `guides/industry/`                    |
| `developer-tools/`                      | Move               | `guides/developer-tools/`             |
| `api/`                                  | **Keep as-is**     | `api/`                                |
| `device-and-system-integration-guides/` | Move + shorten     | `integrations/`                       |
| `device-guides/`                        | **Split + delete** | `integrations/` + `guides/` (1 file)  |
| `device-manufacturer-guidance/`         | Move               | `integrations/manufacturer-guidance/` |
| `for-device-manufacturers/`             | **Merge + delete** | `integrations/manufacturer-guidance/` |
| `seam-components/`                      | Move               | `ui/web-components/`                  |
| `ui-components/`                        | Move               | `ui/mobile-components/`               |

**Directories eliminated:** 5 (`products/`, `device-guides/`, `for-device-manufacturers/`, `seam-components/`, `ui-components/`)
**Directories shortened:** 1 (`device-and-system-integration-guides/` → `integrations/`)
**Total files to move:** ~360 of 633

### Redirect Strategy

Every moved file needs an **explicit, individual redirect** at the site level. We avoid wildcard redirects (e.g., `/products/*` → `/guides/capabilities/*`) because they break when a page is later renamed — the wildcard mechanically swaps the prefix but doesn't track renames, resulting in a 404.

**Approach: scripted generation of explicit redirects**

1. Write a script that reads the old and new SUMMARY.md files and outputs a CSV with one row per moved page
2. Upload the CSV via GitBook's site-level redirect UI (Settings > Domain & redirects, supports 500 rows per import)
3. Migrate the existing ~198 `.gitbook.yaml` space-level redirects to site-level redirects as well, since they won't work across sections

Example script logic:

```bash
# For each prefix mapping, enumerate files and emit CSV rows
for file in products/smart-locks/**/*.md; do
  old_path="/${file%.md}"
  new_path="/guides/capabilities/${file#products/}"
  new_path="${new_path%.md}"
  echo "$old_path,$new_path"
done
```

Example output (CSV for upload):

```csv
source,destination
/products/smart-locks/lock-and-unlock,/guides/capabilities/smart-locks/lock-and-unlock
/products/smart-locks/access-codes/creating-access-codes,/guides/capabilities/smart-locks/access-codes/creating-access-codes
/device-guides/august-locks,/integrations/august-locks
/device-guides/sandbox-and-sample-data/august-locks-sample-data,/integrations/august-locks/sandbox
/seam-components/overview/getting-started-with-seam-components,/ui/web-components/getting-started-with-seam-components
```

**Estimated redirects:**

- ~360 from file moves (generated by script)
- ~198 migrated from existing `.gitbook.yaml` (converted to CSV)
- **Total: ~560 redirects**, uploaded in 2 CSV batches

**Why explicit over wildcards:**

- Each redirect points to a specific destination — survives future page renames
- Can be audited and updated individually
- No risk of redirect chains or silent 404s
- The generation is automated, so the upfront cost is minimal
