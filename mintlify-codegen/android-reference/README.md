# Android Reference Page Generator (SCAFFOLD)

The Android counterpart of [`../ios-reference/`](../ios-reference/README.md). When
complete, it will regenerate `mintlify-docs/mobile-sdks/android/reference/*.mdx`
automatically from the Android SDK's Dokka output.

## Current Status: Not Implemented — Hand-Authored Pages in Place

> The Android reference MDX pages are currently **hand-authored** (DOC-231, #1155)
> from the public Kotlin API in the `phone` repo
> (`seam-phone-android/seam-phone-sdk-android/core/src/main/java/co/seam/core/api/*.kt`).
> `generate.ts` is a **no-op stub**: it accepts `--archive` and exits 0 without
> writing, so the sync workflow stays a safe no-op and never overwrites those
> pages until the real generator lands.

## Intended Pipeline

```
phone/seam-phone-android/              ← Kotlin SDK (Dokka 1.9.10 configured)

    ./gradlew dokkaHtmlMultiModule     ← aggregates each module's dokkaHtmlPartial
    ↓
build/dokka/htmlMultiModule/           ← Dokka output

    tsx mintlify-codegen/android-reference/generate.ts \
        --archive build/dokka/htmlMultiModule
    ↓
mintlify-docs/mobile-sdks/android/reference/*.mdx
```

The phone-side workflow is `seamapi/phone`
`.github/workflows/seam-phone-android-documentation.yml` — currently
`workflow_dispatch`-only. Enable its `push:` trigger once this generator works.
The docs-side automerge path (`mintlify-docs/mobile-sdks/**`) and the
`seam-ci-bot[bot]` author gate already cover Android, so no `automerge.yml`
change is needed.

## Key Design Decision Before Implementing

Unlike Swift-DocC (which emits clean per-symbol render JSON that
`ios-reference/generate.ts` parses), Dokka 1.9 has no first-class JSON output.
Pick one source to parse and design against a **real Dokka build's output**:

- **`dokkaHtmlMultiModule`** — HTML; richest but hardest to parse cleanly.
- **`dokkaGfmMultiModule`** (GFM plugin) — Markdown; closest to MDX, likely the
  least work.
- **Kotlin public sources** — parse `co.seam.core.api` declarations directly,
  skipping Dokka entirely.

Then mirror `../ios-reference/generate.ts` for the per-type page + index
rendering, and match the structure of the existing hand-authored pages so the
generator's first run is a clean diff rather than a rewrite.
