# Content Architecture Restructure — Guides Tab

## Context

Most Seam users come to the docs to **grant people access** to physical spaces (PIN codes, mobile keys, key cards). Historically they've used the Access Codes API directly, but Seam is pushing users toward **Access Grants** — a higher-level API that works across smart locks and access control systems, handles multiple access methods, and manages the full lifecycle automatically.

Secondary user goals: **building management dashboards** (list devices, check health, monitor status) and **error monitoring** (events, webhooks, troubleshooting).

The current Guides sidebar is organized by *what things are* (Core Concepts, Capability Guides) instead of *what users want to do*. This causes:
- Users finding the low-level Access Codes guide (13 pages, prominent in sidebar) before Access Grants
- No clear path for "I want to build a dashboard" — info scattered across Core Concepts, Capability Guides, Developer Tools
- The "Use Cases" section only has one entry (Granting Access), making it feel like a dead-end

## Proposed Sidebar Structure

Reorganize the Guides tab sidebar by **user goal**, not by content type. This is a **docs.json-only change** — no files move, just the navigation grouping.

```
Guides Tab
│
├── Getting Started (3 pages)
│     index, quickstart, go-live
│
├── Granting Access (26 pages)                     ← PRIMARY, position #2
│     All 11 use-cases/granting-access/* pages
│     All 6 capability-guides/instant-keys/* pages
│     capability-guides/reservation-automations
│     industry-guides/hospitality-industry-guide/* (8 pages, nested subgroup)
│
├── Managing Devices (28 pages)                    ← DASHBOARD BUILDERS
│     core-concepts/devices/* (8 pages)
│     capability-guides/device-and-system-capabilities
│     capability-guides/smart-locks (overview + lock/unlock + get-started)
│     capability-guides/thermostats/* (13 pages, nested subgroup)
│     capability-guides/noise-sensors/* (2 pages, nested subgroup)
│     core-concepts/connected-accounts/* (4 pages)
│
├── Errors, Events, and Monitoring (6 pages)       ← MONITORING
│     core-concepts/devices/handling-device-errors
│     core-concepts/devices/testing-your-app-against-device-disconnection-and-removal
│     core-concepts/action-attempts
│     developer-tools/webhooks
│     capability-guides/smart-locks/access-codes/troubleshooting-access-code-issues
│     capability-guides/access-systems/troubleshooting-your-access-control-system
│
├── Connecting Devices and Systems (14 pages)      ← SETUP
│     core-concepts/connect-webviews/* (8 pages)
│     core-concepts/providers/* (2 pages)
│     capability-guides/seam-bridge/* (4 pages)
│
├── Platform and Authentication (10 pages)         ← FOUNDATIONAL
│     core-concepts/overview
│     core-concepts/seam-console/* (2 pages)
│     core-concepts/workspaces
│     core-concepts/authentication/* (5 pages)
│     core-concepts/mapping-your-resources-to-seam-resources
│
├── Customer Portals (5 pages)
│     capability-guides/customer-portals/* (5 pages)
│
├── UI Components (22 pages)                       ← UNCHANGED
│
├── Low-Level Access APIs (30 pages)               ← CLEARLY LABELED LOW-LEVEL
│     ├── Access Codes (13 pages nested subgroup)
│     ├── Access Control Systems (~10 pages nested subgroup)
│     └── Mobile Access (10 pages nested subgroup)
│
├── Developer Tools (5 pages)                      ← webhooks moved out
│     seam-cli, seam-mcp, mobile-sdks/*
│
└── Device Manufacturer Guidance (11 pages)        ← UNCHANGED
```

## Key Decisions

1. **"Granting Access" is position #2** — right after Getting Started. This is where most users should land. It contains the full Access Grants journey plus Instant Keys (which are a delivery mechanism for access grants, not a separate concept).

2. **"Low-Level Access APIs" at position #9** — clearly labeled, not hidden, but below the fold. Contains Access Codes (13 pages), ACS direct management (~10 pages), and Mobile Access (10 pages). Users who need low-level control can find it; new users won't stumble into it first.

3. **"Errors, Events, and Monitoring" as its own group** — pulls together error handling, webhooks, action attempts, and troubleshooting from across the current structure. Webhooks moves here from Developer Tools.

4. **"Managing Devices" combines device content** — Device health/status from Core Concepts, lock/unlock from Smart Locks, thermostats, noise sensors, and connected accounts all live here. This is the "dashboard builder" section.

5. **Connecting Devices and Systems** — Setup content: Connect Webviews, Providers, Seam Bridge, ACS connection guides. This answers "how do I get my devices into Seam?"

6. **Hospitality guide moves under Granting Access** — it's really a granting-access tutorial for hotels. Can re-extract if more industries are added later.

## Decisions Made

1. **"Low-Level Access APIs"** — clearer about the hierarchy. These are the building blocks that Access Grants abstracts over.
2. **Hospitality guide moves under Granting Access** — it's really a granting-access tutorial for hotels. Can re-extract if more industries are added later.

## Files to Modify

- **`mintlify-docs/docs.json`** — Restructure the Guides tab groups array. Use nested group syntax for subgroups within Managing Devices, Low-Level Access APIs.
- **`mintlify-docs/capability-guides/smart-locks/access-codes/index.mdx`** — Add an Info callout at top: "For most use cases, use Access Grants instead of managing access codes directly."
- **`mintlify-docs/capability-guides/access-systems/index.mdx`** — Same treatment: add banner pointing to Access Grants.
- **`mintlify-docs/capability-guides/mobile-access/index.mdx`** — Same treatment.

## Verification

- Run `npx mintlify dev` and verify:
  - Sidebar shows new group ordering
  - All pages are accessible (no 404s from moved nav entries)
  - Nested subgroups expand/collapse correctly
  - Click through Granting Access → all 26 pages load
  - Click through Low-Level Access APIs → subgroups for Access Codes, ACS, Mobile Access
