# Spec: Migrate iOS SDK docs into Mintlify under a "Mobile SDKs" tab

**Date:** 2026-06-13
**Author:** Sy Bohy (sy@getseam.com)
**Status:** Approved design — ready for planning

## Problem

iOS SDK documentation currently lives at `https://ios.seam.vc/`, deployed from the
`seam-phone-ios` directory of the [`phone`](https://github.com/seamapi/phone/tree/main/seam-phone-ios)
repo to Vercel. This is a problem for two reasons:

1. **SEO & brand** — the docs sit on a separate `.vc` domain, so `docs.seam.co` gets
   none of the search ranking or brand association from this content.
2. **Fragmentation** — developers must jump between `docs.seam.co` (primary docs, now on
   Mintlify) and `ios.seam.vc` for mobile SDK reference.

We want to bring all iOS documentation into the Mintlify site (`docs.seam.co`) under a new
**"Mobile SDKs"** tab, positioned to also host Android docs later.

## Background: what `ios.seam.vc` actually is

The live site is **Jazzy-generated** Swift API reference for the `SeamSDK` module —
symbol-level pages for Classes (`Seam`, `SeamSDKService`), Enumerations (`SeamError`,
`SeamCredentialError`, `SeamUnlockEvent`, `SeamUnlockProximity`), Structures
(`SeamCredential`), and Extensions. Built via `.jazzy.yaml`, output to `docs/`, deployed
by `vercel.json`.

The repo also carries richer, hand-written **Swift-DocC** catalogs that Jazzy does not
publish today:

- `SeamSDK/Sources/SeamSDK/SeamSDK.docc/` — `Documentation.md`, `Articles/QuickStart.md`,
  `Articles/Architecture.md`, `Articles/ErrorHandling.md`
- `SeamComponents/Sources/SeamComponents/Documentation.docc/` — `GettingStarted.md`,
  `CustomizingAppearance.md`, `CustomIntegration.md`
- `INTEGRATION.md` — installation (SPM, CocoaPods, Git LFS, Xcode config, Expo static linking)

The Mintlify site **already has** conceptual mobile content under
_Guides → Capability Guides → Mobile Access → Mobile Device SDKs_ (platform-agnostic:
initializing the SDK, handling permissions, unlock with tap).

## Decisions (resolved during brainstorming)

1. **Symbol reference: full codegen from day one.** Reproduce the Swift API symbol
   reference natively in Mintlify immediately, not as a one-time hand dump.
2. **`ios.seam.vc`: immediate 301 redirect on launch.** Cut over the moment the new tab
   ships. This makes a complete, verified URL map a hard prerequisite.
3. **Existing Guides content stays put.** Keep the _Mobile Access → Mobile Device SDKs_
   pages in the Guides tab; deep-link them into the new Mobile SDKs tab for iOS-specific
   detail. Clean split: _Guides = "how mobile access works"_, _Mobile SDKs = "how to use
   the native SDK."_

## Design

### 1. Source-of-truth model

Make **Swift-DocC the single source of truth**; retire Jazzy. DocC emits a
machine-readable archive (symbol graph + articles as render JSON) that yields both the
symbol reference and the narrative articles from one pipeline, and is the modern
Apple-supported format.

Content splits into two clearly-bounded buckets:

| Bucket                                                                                    | Source                                                   | Lifecycle                                                     |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| **Narrative** (install, quickstart, architecture, error-handling concepts, UI components) | DocC articles + `INTEGRATION.md`, ported to authored MDX | Hand-maintained in `docs` repo                                |
| **Symbol reference** (every class/enum/struct/extension/method)                           | DocC symbol graph → generated MDX                        | Generated, **never hand-edited**; regenerated per SDK release |

### 2. Information architecture

New tab **"Mobile SDKs"** inserted between **API Reference** and **Brand Guides** in
`docs.json`:

```
Mobile SDKs
├── Overview
│   └── mobile-sdks/index            (platforms; iOS available, Android coming soon)
├── iOS · Get Started
│   ├── mobile-sdks/ios/index
│   ├── mobile-sdks/ios/installation        ← INTEGRATION.md
│   ├── mobile-sdks/ios/quickstart          ← DocC QuickStart.md
│   └── mobile-sdks/ios/architecture        ← DocC Architecture.md
├── iOS · Guides
│   ├── mobile-sdks/ios/error-handling      ← DocC ErrorHandling.md
│   ├── mobile-sdks/ios/expo-integration    ← INTEGRATION.md (Expo static linking)
│   └── mobile-sdks/ios/ui-components/…     ← SeamComponents.docc (3 pages)
└── iOS · API Reference   (GENERATED)
    └── mobile-sdks/ios/reference/…  (Seam, SeamSDKService, SeamError,
        SeamCredentialError, SeamUnlockEvent, SeamUnlockProximity,
        SeamCredential, extensions…)
```

Android is **reserved structurally** (tab is "Mobile SDKs," not "iOS") and ships as a
single "coming soon" stub — no fabricated content.

### 3. Codegen pipeline (day-one symbol reference)

Mirrors the existing API Reference codegen pattern (`mintlify-codegen`, `openapi.json` → MDX):

1. **Generate** — in `phone` repo: `xcodebuild docbuild` on `SeamSDK` (+ `SeamComponents`)
   → DocC archive → extract render JSON.
2. **Transform** — a generator in `docs/mintlify-codegen` walks the DocC JSON and emits
   (a) `mobile-sdks/ios/reference/*.mdx` and (b) a navigation fragment.
3. **Merge** — a script splices the nav fragment into `docs.json` under the Mobile SDKs tab.
4. **Automate** — on a `SeamSDK` release tag, CI opens a PR against `docs` with regenerated
   reference. Authored narrative MDX is untouched.

### 4. Redirects & SEO (immediate 301 cutover)

- Build a **complete path map**: every `ios.seam.vc/*` Jazzy URL (`/Classes/Seam.html`,
  `/Enums/SeamError.html`, …) → its `docs.seam.co/mobile-sdks/ios/...` equivalent.
- Implement as **per-path 301 `redirects` in the `phone` repo's `vercel.json`** (replacing
  the Jazzy build deploy), with a catch-all 301 to the iOS landing page for anything unmapped.
- **Hard gate:** cut over only after QA confirms every mapped target page exists and resolves.
- SEO: 301s pass link equity to `docs.seam.co`; add new pages to the sitemap, set canonical
  tags, submit the domain change in Google Search Console, and cross-link from Guides.

### 5. Verification & launch sequence

1. Land tab + narrative MDX + generated reference in `docs` (Mintlify preview).
2. Run link-check; verify the full redirect map resolves against deployed docs.
3. Flip `phone` repo to redirect-only deploy → `ios.seam.vc` 301s live.
4. Submit Search Console change-of-address; monitor 404s and crawl.

## Out of scope

- Android SDK content (only a "coming soon" stub now).
- Restructuring the existing Guides → Mobile Access content beyond adding deep-links.
- Changes to the API Reference (REST) tab.

## Workstreams (→ Linear issues)

1. Information architecture & tab scaffolding
2. Narrative content migration (authored MDX)
3. DocC → MDX symbol-reference codegen pipeline
4. URL mapping & 301 redirect implementation (phone repo)
5. SEO consolidation (canonical, sitemap, cross-links, Search Console)
6. QA, link verification & launch cutover
7. Android "coming soon" stub
