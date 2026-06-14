# iOS Reference Page Generator (DOC-224)

This directory scaffolds the DocC → MDX pipeline that will eventually regenerate
`mintlify-docs/mobile-sdks/ios/reference/*.mdx` automatically from Swift-DocC output.

## Current Status: Hand-Authored Interim Reference

> **The reference MDX pages are currently hand-authored from the SeamSDK public Swift
> sources** (`SeamSDK/Sources/SeamSDK/Public/*.swift` in the `phone` repo). They were
> authored as the day-one source of truth for the `feat/mobile-sdks-tab` PR. The
> generator described here does **not yet run** — see the blockers section below.

When the generator is complete, it will own those pages and the hand-authored content
should be treated as the initial seed that it replaces on its first run.

---

## Pipeline Overview

```
phone/seam-phone-ios/
└── SeamSDK/                 ← Swift package target
    └── Sources/SeamSDK/

        xcodebuild docbuild  ← produces a .doccarchive
        ↓
SeamSDK.doccarchive/
├── data/documentation/seamdk/         ← render JSON (one file per symbol)
└── data/documentation.json            ← top-level index

        tsx mintlify-codegen/ios-reference/generate.ts \
            --archive path/to/SeamSDK.doccarchive
        ↓
mintlify-docs/mobile-sdks/ios/reference/
├── index.mdx
├── seam.mdx
├── seam-sdk-service.mdx
├── seam-credential.mdx
├── seam-error.mdx
├── seam-credential-error.mdx
├── seam-unlock-event.mdx
├── seam-unlock-proximity.mdx
└── extensions.mdx
```

### Symbol-kind → MDX page mapping

| DocC symbol kind                  | MDX page                    |
| --------------------------------- | --------------------------- |
| `class` — `Seam`                  | `seam.mdx`                  |
| `class` — `SeamSDKService`        | `seam-sdk-service.mdx`      |
| `struct` — `SeamCredential`       | `seam-credential.mdx`       |
| `enum` — `SeamError`              | `seam-error.mdx`            |
| `enum` — `SeamCredentialError`    | `seam-credential-error.mdx` |
| `enum` — `SeamUnlockEvent`        | `seam-unlock-event.mdx`     |
| `enum` — `SeamUnlockProximity`    | `seam-unlock-proximity.mdx` |
| `extension` (public, retroactive) | `extensions.mdx`            |
| _(index)_                         | `index.mdx`                 |

---

## Requirements

### macOS + Xcode Required

**This generator cannot run in Linux CI.** `xcodebuild docbuild` requires:

- macOS 13 or later
- Xcode 15 or later (for DocC symbol graph extraction)
- The `SeamSDK` Swift package built cleanly (`swift build` in
  `phone/seam-phone-ios/` must succeed)

Until these conditions are met on the runner, the reference MDX files remain
hand-authored from source. Do not attempt to run `xcodebuild` on Linux — it is
not installed and will not work.

### Intended Build Command

```bash
# From the phone repo root:
cd /path/to/seam-phone-ios
xcodebuild docbuild \
  -scheme SeamSDK \
  -derivedDataPath /tmp/seam-docbuild \
  -destination 'generic/platform=iOS Simulator'

# Archive path:
DOCC_ARCHIVE=/tmp/seam-docbuild/Build/Products/Debug-iphonesimulator/SeamSDK.doccarchive

# From the docs repo root:
cd /path/to/seam/docs
tsx mintlify-codegen/ios-reference/generate.ts --archive "$DOCC_ARCHIVE"
```

---

## DocC Archive Structure

A `.doccarchive` produced by `xcodebuild docbuild` contains:

```
SeamSDK.doccarchive/
├── data/
│   ├── documentation.json          # top-level index of all symbols
│   └── documentation/
│       └── seamdk/
│           ├── seam.json           # Seam class render JSON
│           ├── seamcredential.json
│           ├── seamerror.json
│           └── ...                 # one file per top-level symbol
└── ...
```

Each symbol JSON contains:

- `metadata.title` — symbol name
- `metadata.symbolKind` — `"class"`, `"struct"`, `"enum"`, etc.
- `abstract[].text` — doc-comment summary
- `primaryContentSections` — declaration, discussion, parameters, returns
- `topicSections` — grouped members (Properties, Methods, Cases, etc.)
- `references` — resolved cross-references to other symbols

Alternatively, the symbol graph JSON (`.symbols.json` produced by
`-emit-symbol-graph` / `swift-symbolgraph-extract`) can be used as a lower-level
input if the full DocC render JSON is not needed.

---

## nav Fragment

The generator will also write a `docs.json` nav fragment (or patch the existing
`mintlify-docs/docs.json`) so that newly generated pages appear in the sidebar
under `Mobile SDKs → iOS → Reference`.

The nav structure is already present in `mintlify-docs/docs.json` (added manually
for the day-one launch). The generator should match existing page paths exactly to
avoid creating orphan entries.

---

## Contributing

To implement the TODO stubs in `generate.ts`:

1. Obtain a `.doccarchive` from a macOS machine.
2. Inspect the render JSON schema in `data/documentation/seamdk/*.json`.
3. Implement `parseDoccArchive()` to extract the symbol tree.
4. Implement `renderTypePage()` to produce MDX from a symbol node.
5. Run `npm run typecheck` to verify no TypeScript errors were introduced.
6. Run `npm run validate:mintlify` to verify the generated pages are valid.
7. Remove the hand-authored interim notice from each generated page once the
   generator is authoritative.
