# Hook Up API Reference Auto-Generation to Mintlify

## Context

The Seam docs have a codegen pipeline (`npm run generate`) that produces ~200 API reference markdown files from `@seamapi/types` and `@seamapi/blueprint`. Currently it outputs GitBook-flavored markdown to `docs/api-reference/`. We need it to also output Mintlify-compatible MDX to `mintlify-docs/api/`.

The key value of the codegen is **multi-language SDK examples** (JavaScript, Python, Ruby, PHP, cURL, Seam CLI) — not just REST endpoint docs. This rules out using Mintlify's native OpenAPI rendering alone.

## Approach: Hybrid — OpenAPI spec + x-codeSamples

Mintlify supports an `x-codeSamples` OpenAPI extension that lets you embed custom SDK code snippets per endpoint. This gives us the best of both worlds:

1. **OpenAPI spec** → Mintlify auto-generates parameter tables, response schemas, and interactive playground
2. **x-codeSamples** → Our custom SDK examples (seam.accessCodes.create(), etc.) appear as language tabs

### How it works

1. **Export OpenAPI spec** from `@seamapi/blueprint` as a JSON file
2. **Inject `x-codeSamples`** into each endpoint's OpenAPI definition using the existing code sample YAML definitions from `codegen/data/code-sample-definitions/`
3. **Save to `mintlify-docs/openapi.json`**
4. **Update `docs.json`** to reference the OpenAPI spec
5. **Update navigation** to reference OpenAPI endpoints instead of static MDX files

### Pipeline flow

```
@seamapi/types → @seamapi/blueprint → OpenAPI spec
                                          ↓
codegen/data/code-sample-definitions/*.yaml → inject x-codeSamples
                                          ↓
                                    openapi.json (with SDK examples)
                                          ↓
                              Mintlify renders API reference
```

## Files to Create/Modify

### New file: `codegen/generate-mintlify-openapi.ts`
Script that:
1. Creates a Blueprint from `@seamapi/types`
2. Extracts the OpenAPI spec
3. Reads code sample definitions from `codegen/data/code-sample-definitions/*.yaml`
4. For each endpoint, generates SDK code samples using `@seamapi/blueprint`'s code generation
5. Injects them as `x-codeSamples` entries (format: `{lang, label, source}`)
6. Writes the enriched spec to `mintlify-docs/openapi.json`

### Modify: `package.json`
Add script: `"generate:mintlify": "tsx codegen/generate-mintlify-openapi.ts"`

### Modify: `mintlify-docs/docs.json`
Add OpenAPI config:
```json
{
  "openapi": ["openapi.json"],
  "api": {
    "baseUrl": "https://connect.getseam.com",
    "playground": { "mode": "simple" }
  }
}
```

Update navigation to reference OpenAPI endpoints:
```json
{
  "group": "Access Codes",
  "pages": [
    "api/access_codes/index",
    "openapi.json POST /access_codes/create",
    "openapi.json POST /access_codes/delete",
    ...
  ]
}
```

### Keep: Handwritten overview pages
The "The X Object" pages (`api/access_codes/index.mdx`, etc.) stay as manual MDX files. They contain resource descriptions, property tables, and conceptual content that OpenAPI doesn't cover well.

### Remove: Generated endpoint MDX files
The individual endpoint `.mdx` files (e.g., `api/access_codes/create.mdx`) get replaced by Mintlify's native OpenAPI rendering. These files are currently 1,000-1,600 lines of bloated code/output pairs repeated across 6 languages. Mintlify handles the layout automatically — description, interactive playground, parameter tables, response schema — and the `x-codeSamples` provide the SDK tabs.

### Page design: Mintlify OpenAPI-style
Each endpoint page is auto-rendered by Mintlify from the OpenAPI spec:
- Description at top
- Interactive playground ("Try It" button) 
- Parameter table (auto-generated from OpenAPI schema)
- SDK code tabs (from x-codeSamples: JavaScript, Python, Ruby, PHP, cURL, Seam CLI)
- Response schema (auto-generated from OpenAPI)

This replaces the current 1,593-line template-generated pages with clean, auto-rendered pages that stay in sync with the types automatically.

## Code Sample Format

The `x-codeSamples` extension format Mintlify expects:

```yaml
paths:
  /access_codes/create:
    post:
      x-codeSamples:
        - lang: javascript
          label: Create an ongoing access code
          source: |
            await seam.accessCodes.create({
              device_id: "a5036385-...",
              name: "My Access Code",
              code: "1234",
            });
        - lang: python
          label: Create an ongoing access code
          source: |
            seam.access_codes.create(
              device_id="a5036385-...",
              name="My Access Code",
              code="1234",
            )
        - lang: curl
          label: Create an ongoing access code
          source: |
            curl -X POST https://connect.getseam.com/access_codes/create \
              -H "Authorization: Bearer ${SEAM_API_KEY}" \
              -d '{"device_id": "...", "code": "1234"}'
```

## Existing Code to Reuse

- `codegen/lib/layout/api-endpoint.ts` — has the SDK tab generation logic, `supportedSdks` list
- `codegen/data/code-sample-definitions/*.yaml` — all the sample request/response data
- `@seamapi/blueprint` — `createBlueprint()` generates both the OpenAPI spec and code samples
- `codegen/lib/code-sample-tab-order.ts` — SDK ordering (JS, cURL, Python, Ruby, PHP, CLI)

## Decision: Check in generated file (same as current pipeline)

The current pipeline already checks in generated files — CI runs `npm run generate`, commits the output, and automerge handles it (`.github/workflows/generate.yml`). We'll follow the same pattern: add `npm run generate:mintlify` to the CI workflow so `openapi.json` is auto-committed alongside the existing API reference markdown.

## Verification

1. Run `npm run generate:mintlify` — should produce `mintlify-docs/openapi.json`
2. Run `npx mintlify dev` from `mintlify-docs/` — API reference pages should render with:
   - Interactive playground (Try It button)
   - Parameter tables auto-generated from OpenAPI
   - SDK code tabs (JS, Python, Ruby, PHP, cURL)
   - Response schema
3. Verify SDK examples match the current GitBook site
4. Check that handwritten overview pages ("The Access Code Object") still work alongside OpenAPI pages
