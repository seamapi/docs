# Android Reference Page Generator

The Android counterpart of [`../ios-reference/`](../ios-reference/README.md). It
regenerates `mintlify-docs/mobile-sdks/android/reference/*.mdx` from the Seam
Android SDK's public Kotlin sources. The generator **owns** these pages — it
replaces them wholesale on each run, so the SDK's public KDoc is the source of
truth (the same model as the iOS reference).

## Pipeline

```
phone/seam-phone-android/seam-phone-sdk-android/   ← public Kotlin sources + KDoc

    tsx mintlify-codegen/android-reference/generate.ts \
        --source /path/to/seam-phone-sdk-android
    ↓
mintlify-docs/mobile-sdks/android/reference/*.mdx  (+ index.mdx)
```

The phone-side workflow `seamapi/phone`
`.github/workflows/seam-phone-android-documentation.yml` checks out both repos,
runs this generator against the checked-out Kotlin sources, and opens an
auto-merging PR authored by `seam-ci-bot[bot]`. The docs-side automerge path
(`mintlify-docs/mobile-sdks/**`) and the `seam-ci-bot[bot]` author gate already
cover Android, so no `automerge.yml` change is needed.

## Why parse sources, not Dokka

Unlike Swift-DocC (which emits clean per-symbol render JSON that
`ios-reference/generate.ts` parses), Dokka 1.9 has no first-class structured
output — only HTML, which is fragile to parse. The Seam Android public API is a
small, well-KDoc'd surface, so the generator parses the `.kt` sources directly
(no Gradle/Dokka build needed in CI). The `PAGES` manifest in `generate.ts` maps
each public type to its source file and output slug — edit a row to add or
retarget a page.

## What it produces vs. what it can't

Each page gets: frontmatter, an `## Overview` (declaration + class KDoc),
and member sections (properties / cases / methods) with signatures, KDoc prose,
and `@param`/`@return`/`@throws` tables. KDoc `[Ref]` links become inline code.

It is **bounded by the KDoc**: curated extras that aren't in the source (friendly
provider-name tables, conceptual sections, hand-written examples) are not
reproduced, and any stale KDoc (e.g. examples referencing renamed symbols) is
emitted verbatim — fix those upstream in the SDK's KDoc.
