# Docs Reorganization Plan

## Problem

Today, all 633 pages live in a single sidebar (`SUMMARY.md`). This creates several issues:

- **Overwhelming navigation** — the sidebar is a single scroll through 600+ entries
- **API Reference dominates** — ~240 endpoint pages push everything else down
- **Device guides are buried** — 100+ manufacturer pages sit at the bottom
- **Deep nesting** — some paths go 7 levels deep (ASSA ABLOY Visionline)
- **Inconsistent file structure** — content for the same section lives across `products/`, `capability-guides/`, `device-guides/`, and `device-and-system-integration-guides/`
- **Sandbox data bloat** — 40 sandbox entries inflate the Developer Tools section

## Proposed Solution: 3 Site Sections

Split the documentation into **3 GitBook site sections**, each backed by its own space with its own sidebar and navigation. All sections are published under one site with global search.

> **Requirement:** GitBook Ultimate plan ($249/site/mo) is needed for site sections.

See: [`proposed-summaries/site-structure.md`](proposed-summaries/site-structure.md) for the full proposed sidebar tree.

### Section 1: Guides (main landing space)

The default entry point. Conceptual docs and how-to guides for developers building with Seam.

**Audience:** Developers learning Seam or implementing specific features.

**Organized by product type.** The Guides sidebar groups content by product vertical:

| Product           | What it covers                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Access**        | Access Grants & Identity (high-level), Smart Locks & Access Codes (low-level), Access Control Systems (low-level) |
| **Thermostats**   | HVAC modes, climate presets, schedules, programs                                                                  |
| **Noise Sensors** | Noise threshold configuration                                                                                     |

Cross-product features (Connectors & Automations, Customer Portals, Reservation Automations) have their own section. Developer workflow tools (Webhooks, CLI, MCP, Mobile SDKs) live in Developer Tools. UI Components (Seam Components, Seam Mobile Components) are in their own section for now.

### Section 2: Developer Reference

Endpoint documentation, SDK installation, authentication, and API behavior reference. Endpoints mirror the Guides product structure (Access, Thermostats, Noise Sensors, Connectors & Automations).

**Audience:** Developers looking up specific endpoints, parameters, and response schemas during implementation.
**Approx. pages:** ~240

### Section 3: Integrations

Per-manufacturer setup, configuration, getting started guides, and sandbox data — all consolidated by brand and organized by device category (Smart Locks, Access Control Systems, Thermostats, Other).

**Audience:** Developers integrating a specific device brand or system.
**Approx. pages:** ~160

---

## What Changes

| Before                                                                      | After                                                                    |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1 sidebar, ~633 pages                                                       | 3 sidebars, focused by audience                                          |
| API Reference buried mid-sidebar                                            | Developer Reference is its own top-level section                         |
| `device-guides/` + `device-and-system-integration-guides/` as separate dirs | Consolidated into one Integrations section, organized by device category |
| Sandbox data under Developer Tools (40 entries)                             | Sandbox data lives alongside each manufacturer in Integrations           |
| Guides organized by abstraction layer                                       | Guides organized by product type (Access, Thermostats, Noise Sensors)    |
| UI Components mixed into main sidebar                                       | UI Components in its own section within Guides (TBD)                     |
| Deep nesting (up to 7 levels)                                               | Max 4 levels of nesting                                                  |

## What Doesn't Change

- All existing page content stays the same (no rewrites needed)
- API Reference pages remain auto-generated
- Writing conventions, code example patterns, and GitBook syntax are unchanged

## Migration Steps

1. **Decide on plan** — confirm Ultimate plan for site sections
2. **Create 3 GitBook spaces** — one per section, each with its own SUMMARY.md
3. **Move/reorganize files** — consolidate `device-guides/` and `device-and-system-integration-guides/`; move sandbox data alongside manufacturers
4. **Update internal links** — cross-section links become absolute URLs
5. **Publish as site sections** — link all 3 spaces under one site

## Open Questions

- [ ] Are we on GitBook Ultimate, or willing to upgrade?
- [ ] Should Device Manufacturer Guidance (building Seam-compatible APIs) live in Integrations or in its own section?
- [ ] Should UI Components live in Guides or Developer Reference?
- [ ] Do we want to consolidate `products/` and `capability-guides/` file paths while we're at it?
