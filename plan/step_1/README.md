# Step 1: Split into 3 Site Sections

Split the single SUMMARY.md into 3 GitBook site sections without reorganizing content within each section. The sidebar within each section preserves the current structure.

## Sections

### Guides

Current SUMMARY.md sections that stay in Guides:

- Top-level pages (Seam Documentation, Quick Start, Go Live)
- Core Concepts
- Capability Guides
- UI Components
- Developer Tools
- Industry Guides

### API Reference

Current SUMMARY.md section that moves to API Reference:

- API Reference (auto-generated endpoint docs, installation, authentication, pagination)

### Brand Guides

Current SUMMARY.md sections that move to Brand Guides:

- Device and System Integration Guides
- Device Manufacturer Guidance
- Sandbox data (currently scattered across device-guides/ and developer-tools/)

---

## Technical concerns

### 1. Each GitBook section needs its own root directory

GitBook site sections map to separate spaces, and each space requires its own root directory with its own SUMMARY.md. Files cannot be referenced outside a space's root. The repo would need to look like:

```
repo-root/
├── guides/
│   ├── .gitbook.yaml
│   ├── SUMMARY.md
│   └── (all guide content)
├── api-reference/
│   ├── .gitbook.yaml
│   ├── SUMMARY.md
│   └── (all API endpoint docs)
└── brand-guides/
    ├── .gitbook.yaml
    ├── SUMMARY.md
    └── (all integration/device docs)
```

This means files must physically move into separate directories — even for step 1.

### 2. Cross-section links become absolute URLs

Within a GitBook space, links use relative markdown paths. Between spaces, links must use absolute URLs (e.g., `https://docs.seam.co/api-reference/access_codes/create`). GitBook's broken link detection does not work across spaces.

Pages that will need link updates:
- Guides link heavily to API Reference endpoints (e.g., "see the `access_codes.create` endpoint")
- Brand Guides link back to Capability Guides (e.g., "see the Access Codes guide")
- API Reference links to Guides for conceptual context

### 3. Codegen pipeline needs updating

The current codegen (`npm run generate` → `codegen/smith.ts`) assumes a single `docs/` root:
- `summary.ts` splices generated API content into the single SUMMARY.md between anchors (`[Pagination]` and `## Developer Tools`)
- `postprocess.ts` converts absolute URLs to relative paths (assumes single-space structure)
- Generated files are written to `docs/api/`

For step 1, the codegen needs to:
- Write API files to `api-reference/` instead of `docs/api/`
- Generate a standalone SUMMARY.md for the API Reference space
- Update `postprocess.ts` to handle cross-space links (keep absolute URLs for links to Guides/Brand Guides)

### 4. Shared assets must be duplicated

GitBook spaces cannot share assets. Currently all images live in `docs/.gitbook/assets/` and reusable snippets in `docs/.gitbook/includes/`. Each space would need its own copy of any shared assets.

Options:
- Duplicate assets into each space that uses them
- Use a build step to copy shared assets into each space directory
- Audit which assets are used by which section and split accordingly

### 5. Sandbox data lives in the wrong directories

Sandbox pages are currently scattered across `device-guides/sandbox-and-sample-data/` and `developer-tools/sandbox-and-sample-data/`. In step 1, these need to move to the Brand Guides space. Some are referenced from the Developer Tools section in Guides — those references would become cross-section absolute links.

### 6. Files referenced across sections

Some files currently live in one directory but are listed in a different sidebar section:
- `device-guides/reconnecting-an-account.md` is listed under Core Concepts > Connected Accounts
- `device-guides/rate-limits-and-guardrails.md` is listed under Developer Tools
- Various `products/` files appear in Capability Guides

These files need to either move to the correct space or be replaced with cross-section links.

### 7. Git Sync is per-space

Each GitBook space has its own independent Git Sync configuration. With 3 spaces, you configure sync 3 times — each pointing at a different project directory in the same repo and branch. A commit touching files in `api-reference/` only triggers sync for that space.

### 8. Redirects

Every page that changes URL needs a redirect for backward compatibility. The current site publishes under `docs.seam.co/latest/`. If the new sections publish under different URL prefixes (e.g., `/api-reference/`, `/brand-guides/`), all existing URLs need redirects.

Each space's `.gitbook.yaml` can define redirects, but only for pages within that space. Cross-space redirects (old URL in one space, new URL in another) may need to be handled at the DNS/proxy level or via GitBook's site-level redirect settings.
