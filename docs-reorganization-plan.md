# Docs Reorganization Plan

## Problem

Today, all 633 pages live in a single sidebar (`SUMMARY.md`). This creates several issues:

- **Overwhelming navigation** — the sidebar is a single scroll through 600+ entries
- **API Reference dominates** — ~240 endpoint pages push everything else down
- **Device guides are buried** — 100+ manufacturer pages sit at the bottom
- **Deep nesting** — some paths go 7 levels deep (ASSA ABLOY Visionline)
- **Inconsistent file structure** — content for the same section lives across `products/`, `capability-guides/`, `device-guides/`, and `device-and-system-integration-guides/`
- **Sandbox data bloat** — 40 sandbox entries inflate the Developer Tools section

## Proposed Solution: 4 Site Sections

Split the documentation into **4 GitBook site sections**, each backed by its own space with its own sidebar and navigation. All sections are published under one site with global search.

> **Requirement:** GitBook Ultimate plan ($249/site/mo) is needed for site sections.

### Section 1: Guides (main landing space)

The default entry point. Conceptual docs and how-to guides for developers building with Seam.

See: [`proposed-summaries/guides-SUMMARY.md`](proposed-summaries/guides-SUMMARY.md)

**Audience:** Developers learning Seam or implementing specific features.
**Approx. pages:** ~120

**Organized by product layer.** Seam Connect has 3 abstraction layers, and the Guides sidebar reflects this top-to-bottom:

| Layer       | Section                      | What it covers                                                                                                                          |
| ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1 (highest) | **Connectors & Automations** | Connectors, Reservation Automations, Customer Portals                                                                                   |
| 2 (middle)  | **Access Grants & Identity** | Access Grants, Access Methods, Instant Keys, Spaces/Locations, User Identities, Mobile Access                                           |
| 3 (lowest)  | **Device & System APIs**     | Smart Locks (lock/unlock, access codes), Access Control Systems (users, credentials, encoders, Seam Bridge), Thermostats, Noise Sensors |

A developer reading top-to-bottom moves from high-level orchestration down to direct device control. Cross-cutting concerns (Webhooks, CLI, rate limits) stay in Developer Tools.

### Section 2: API Reference

Purely endpoint documentation. Developers come here to check parameters, response schemas, and code examples.

See: [`proposed-summaries/api-reference-SUMMARY.md`](proposed-summaries/api-reference-SUMMARY.md)

**Audience:** Developers looking up specific endpoints during implementation.
**Approx. pages:** ~240

### Section 3: Integrations

Per-manufacturer setup, configuration, getting started guides, and sandbox data — all consolidated by brand.

See: [`proposed-summaries/integrations-SUMMARY.md`](proposed-summaries/integrations-SUMMARY.md)

**Audience:** Developers integrating a specific device brand or system.
**Approx. pages:** ~160

### Section 4: UI Components & SDKs

Focused space for frontend developers using Seam's web and mobile component libraries.

See: [`proposed-summaries/ui-components-SUMMARY.md`](proposed-summaries/ui-components-SUMMARY.md)

**Audience:** Frontend/mobile developers building UIs with Seam components.
**Approx. pages:** ~25

---

## What Changes

| Before                                                                      | After                                                                    |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1 sidebar, ~633 pages                                                       | 4 sidebars, ~30-240 pages each                                           |
| API Reference buried mid-sidebar                                            | API Reference is its own top-level section                               |
| `device-guides/` + `device-and-system-integration-guides/` as separate dirs | Consolidated into one Integrations section, organized by device category |
| Sandbox data under Developer Tools (40 entries)                             | Sandbox data lives alongside each manufacturer in Integrations           |
| UI Components mixed into main sidebar                                       | Dedicated section for frontend developers                                |
| Deep nesting (up to 7 levels)                                               | Max 4 levels of nesting                                                  |

## What Doesn't Change

- All existing page content stays the same (no rewrites needed)
- API Reference pages remain auto-generated
- Writing conventions, code example patterns, and GitBook syntax are unchanged

## Migration Steps

1. **Decide on plan** — confirm Ultimate plan for site sections
2. **Create 4 GitBook spaces** — one per section, each with its own SUMMARY.md
3. **Move/reorganize files** — consolidate `device-guides/` and `device-and-system-integration-guides/`; move sandbox data alongside manufacturers
4. **Update internal links** — cross-section links become absolute URLs
5. **Add redirects** — update `.gitbook.yaml` with ~200+ redirects for backward compatibility
6. **Publish as site sections** — link all 4 spaces under one site

## Trade-offs

| Pro                                            | Con                                               |
| ---------------------------------------------- | ------------------------------------------------- |
| Each audience gets a focused sidebar           | Requires Ultimate plan ($249/mo)                  |
| Global search across all sections              | Cross-section links use absolute URLs             |
| Manufacturer content consolidated in one place | ~200+ redirects needed for backward compatibility |
| Room to grow without sidebar bloat             | Initial migration effort                          |

## Open Questions

- [ ] Are we on GitBook Ultimate, or willing to upgrade?
- [ ] Should Device Manufacturer Guidance (building Seam-compatible APIs) live in Integrations or in its own section?
- [ ] Do we want to consolidate `products/` and `capability-guides/` file paths while we're at it?
- [ ] Should Industry Guides (currently just Hospitality) be its own section or stay in Guides?
