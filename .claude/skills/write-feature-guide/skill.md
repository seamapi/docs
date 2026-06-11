---
name: write-feature-guide
description: Use when writing a new use-case guide section for the Seam Mintlify docs — a set of pages that teach developers how to use a Seam feature end-to-end. Trigger phrases include "write a guide for X", "create docs for the Y feature", "add a new use-case section for Z", "document the W workflow", or when the user asks to create a multi-page guide section similar to the existing granting-access or other use-case guides.
---

# Write Feature Guide

Create a complete use-case guide section for a Seam feature in the Mintlify docs. All documentation work happens in `mintlify-docs/` — this is the only docs site. Do not reference or edit anything under `docs/` (that's the legacy GitBook site).

A guide section is a group of `.mdx` pages — an overview, a core workflow tutorial, delivery/variant pages, management pages, and optionally advanced/conceptual pages — organized under `mintlify-docs/use-cases/<feature>/`.

## Before you start writing

### 1. Understand the feature

Ask the user enough questions to understand:
- What is the feature? What API resources does it involve?
- What are the variants or modes? (e.g., access grants have 5 access method modes)
- What's the happy-path workflow a developer follows?
- What prerequisite resources does the developer need?
- Are there management operations (update, delete, revoke)?
- Are there advanced/edge-case scenarios worth a dedicated page?

Don't start writing until you can articulate the page structure. Propose the structure to the user and get approval.

### 2. Check existing patterns

Read the existing use-case guides to match conventions:
- `mintlify-docs/use-cases/granting-access/` — the reference implementation
- `mintlify-docs/docs.json` — for navigation structure patterns

### 3. Plan the pages

A typical guide section has these page types (not all are always needed):

| Page | File | Purpose |
|------|------|---------|
| Overview | `index.mdx` | What the feature is, when to use it, quick code example |
| Core workflow | `creating-a-<resource>.mdx` | Step-by-step tutorial for the primary action |
| Variant pages | `using-<variant>.mdx` | One per variant/mode — specific delivery or usage flow |
| Management | `managing-<resource>.mdx` | Update, delete, revoke operations |
| Advanced | `<topic>.mdx` | Edge cases, special integrations, conceptual deep-dives |

Confirm the page list with the user before writing.

---

## Page templates

### Frontmatter (all pages)

```yaml
---
title: "Page Title in Title Case"
description: "One sentence, under 150 characters, describing what this page teaches."
---
```

### Language order for all code samples

Every `<CodeGroup>` must include all 7 languages in this exact order:

1. JavaScript
2. Python
3. Ruby
4. PHP
5. C#
6. Java
7. cURL (bash)

Use language-appropriate conventions:
- **JavaScript:** `camelCase`, `const`, `await`
- **Python:** `snake_case`, no type hints in examples
- **Ruby:** `snake_case`, keyword arguments
- **PHP:** `$seam->resource->method()`, named arguments
- **C#:** `PascalCase`, `var`, `new List<string>`
- **Java:** builder pattern (`Request.builder().field().build()`)
- **cURL:** `curl -X 'POST'` with `-H` and `-d` flags

### Code sample conventions

- Include inline comments explaining what each code block does
- Use consistent placeholder IDs across examples (same UUIDs within a page)
- Show the JSON output after code samples where the response shape matters
- JSON output blocks are plain fenced code blocks, not inside `<CodeGroup>`

---

### Template: Overview page (`index.mdx`)

```
---
title: "<Feature Name>"
description: "<One-sentence value prop>"
---

[1-2 paragraph introduction explaining what the feature is and why developers use it]

[Optional: quick code example in a <CodeGroup> showing the simplest happy path]

---

## [Key concept or comparison section]

[Table or structured content explaining variants, modes, or options]

---

## [Optional: special cases or callouts]

[<Info> blocks for important caveats]

---

## Next Steps

- [Core workflow guide](./creating-a-<resource>) — Step-by-step tutorial.
- [Variant 1](./using-<variant-1>) — When to use this variant.
- [Variant 2](./using-<variant-2>) — When to use this variant.
```

**Key rules:**
- Keep it scannable — tables over prose for comparisons
- Link to every other page in the section
- Use `---` horizontal rules between major sections

---

### Template: Core workflow page (`creating-a-<resource>.mdx`)

```
---
title: "Creating a <Resource>"
description: "<One sentence about the core creation workflow>"
---

[1-2 sentence intro]

## Before You Begin

To create a <resource>, you need:

- [Prerequisite 1 with link]
- [Prerequisite 2 with link]
- [Prerequisite 3 with link]

---

## Step 1: [First action — usually verifying prerequisites]

[Explanation of what to check and why]

<CodeGroup>
[7 languages]
</CodeGroup>

---

## Step 2: [Main creation action]

[Explanation of the API call and key parameters]

<CodeGroup>
[7 languages]
</CodeGroup>

**Output:**

```json
{ ... }
```

[Optional: table of key parameters or modes]

<Info>
[Any important caveat about the creation — e.g., async behavior, reuse rules]
</Info>

---

## Step 3: [Follow-up action — retrieve, verify, or next step]

[Explanation]

<CodeGroup>
[7 languages]
</CodeGroup>

---

## Next Steps

- [Variant pages](./using-<variant>) — Deliver using a specific mode.
- [Management](./managing-<resource>) — Update or delete.
```

**Key rules:**
- Steps are numbered: `## Step 1:`, `## Step 2:`, etc.
- Each step has one `<CodeGroup>` with all 7 languages
- Include `**Output:**` JSON blocks after creation/retrieval calls
- `## Before You Begin` always comes first, with linked prerequisites
- `<Info>` blocks for async behavior, sandbox differences, or important caveats

---

### Template: Variant/delivery page (`using-<variant>.mdx`)

```
---
title: "Using <Variant Name>"
description: "<One sentence about this specific variant>"
---

[1-2 sentence intro describing this variant]

<Variant> works with:

- **<Platform/system type>** — [which systems support this, how to target them]

---

## Before You Begin

To use <variant>, you need:

- [Prerequisite with link]
- [Prerequisite with link]
- [Capability check — e.g., `can_unlock_with_<variant>` is `true`]

---

## Step 1: Verify [Resource] Support

[Check that the target device/entrance supports this variant]

<CodeGroup>
[7 languages — list + filter by capability]
</CodeGroup>

---

## Step 2: Create a <Parent Resource> with <Variant>

[Create the parent resource specifying this variant]

<CodeGroup>
[7 languages]
</CodeGroup>

**Output:**

```json
{ ... }
```

---

## Step 3: [Variant-specific delivery/action]

[This step varies the most — retrieve a code, deliver a credential, trigger an unlock, etc.]

<CodeGroup>
[7 languages]
</CodeGroup>

**Output:**

```json
{ ... }
```

[Optional: subsections with ### for sub-workflows like encoding vs. assigning cards]

---

## Step 4: [Informational step — e.g., "See Which Doors This Covers"]

[Optional but recommended — show how to inspect what the resource covers]

<CodeGroup>
[7 languages]
</CodeGroup>

---

## Next Steps

- [Related variant](./using-<other-variant>) — Alternative approach.
- [API reference](https://docs.seam.co/latest/api/<resource>/) — Full endpoint docs.
```

**Key rules:**
- Follow the 4-step pattern: Verify → Create → Deliver → Inspect
- Step 3 is where pages diverge — this is the variant-specific logic
- Step 4 is informational (not required but helpful)
- "Works with" section right after the intro lists supported platforms
- Each variant page is self-contained — a developer can follow it without reading the others

---

### Template: Management page (`managing-<resource>.mdx`)

```
---
title: "Managing <Resources>"
description: "<One sentence about update/delete operations>"
---

[Intro paragraph — when and why you'd manage these resources]

---

## [Action 1 — e.g., "Updating a <Resource>"]

[When to use this action]

### [Sub-scenario — e.g., "Updating the Schedule"]

<CodeGroup>
[7 languages]
</CodeGroup>

### [Sub-scenario — e.g., "Changing the Access Level"]

<CodeGroup>
[7 languages]
</CodeGroup>

[Optional: table showing what happens for each field change]

---

## [Action 2 — e.g., "Deleting a <Resource>"]

[Explanation of what deletion does — soft delete vs. hard delete, side effects]

<CodeGroup>
[7 languages]
</CodeGroup>

<Info>
[Important caveats about deletion — e.g., cascading effects]
</Info>

---

## Next Steps

- [Creating](./creating-a-<resource>) — How to create new resources.
- [API reference](https://docs.seam.co/latest/api/<resource>/) — Full endpoint docs.
```

**Key rules:**
- No step numbering — use scenario-based headings instead
- `###` subsections for specific sub-scenarios within an action
- Tables for decision logic (when to update vs. delete, what fields trigger re-issuance)
- `<Info>` blocks for side effects and cascading behavior

---

## Navigation setup

Add the section to `mintlify-docs/docs.json` under the appropriate group. Follow this pattern:

```json
{
  "group": "<Feature Name>",
  "pages": [
    "use-cases/<feature>/index",
    "use-cases/<feature>/creating-a-<resource>",
    {
      "group": "<Variant Group Name>",
      "pages": [
        "use-cases/<feature>/using-<variant-1>",
        "use-cases/<feature>/using-<variant-2>"
      ]
    },
    "use-cases/<feature>/managing-<resource>",
    "use-cases/<feature>/<advanced-topic>"
  ]
}
```

Variant pages go in a nested group if there are 3+ of them; otherwise keep them flat.

---

## Writing process

Follow this order:

1. **Plan** — Agree on the page list and structure with the user
2. **Overview first** — Write `index.mdx` to establish terminology and link structure
3. **Core workflow** — Write the creation tutorial
4. **Variant pages** — One at a time, in the order they'll appear in nav
5. **Management** — Write after variants, since it references concepts from them
6. **Advanced** — Last, since it assumes familiarity with everything above
7. **Navigation** — Add to `docs.json`
8. **Redirects** — If replacing existing pages, add redirects in `docs.json`
9. **Cross-links** — Verify all internal links work, add redirects for any moved content

### Local preview server

Keep a Mintlify dev server running throughout the writing process so the user can review pages in real-time. The server hot-reloads on file changes.

**Starting the server:**

```bash
source ~/.nvm/nvm.sh && nvm use 22
cd mintlify-docs
lsof -ti:3333 | xargs kill -9 2>/dev/null  # kill any existing server
npx @mintlify/cli@latest dev --port 3333
```

Run the server command with `run_in_background: true` so it stays alive. The server runs at `http://localhost:3333`.

**When to start it:**
- At the beginning of the writing session, before writing the first page
- After pulling latest changes from the branch
- If the user reports the server is down

**When to restart it:**
- After changes to `docs.json` (nav changes don't hot-reload reliably)
- If the server crashes or stops responding
- After rebasing or pulling remote changes

Always kill the old process on port 3333 before starting a new one. The OpenAPI validation warning (`Error validating OpenAPI file /docs.json`) is harmless — ignore it.

**Sharing page URLs with the user:**
After writing or updating a page, tell the user the local preview URL so they can review it:
- `http://localhost:3333/use-cases/<feature>/<page-name>`

For example: "Page is ready — you can review it at http://localhost:3333/use-cases/granting-access/using-cloud-keys"

### After each page

- Run `npm run format` (requires Node 22: `source ~/.nvm/nvm.sh && nvm use 22`)
- Commit with `feat: add <page-name> to <feature> guide`
- Push to the feature branch
- Tell the user the local URL to review the page

### After all pages

- Audit every `<CodeGroup>` to confirm all 7 languages are present
- Verify pages render correctly on the local dev server
- Create a PR with a summary of all pages added

---

## Mintlify component reference

| Component | When to use |
|-----------|-------------|
| `<CodeGroup>` | Every multi-language code example |
| `<Info>` | Tips, prerequisites notes, important caveats, cross-references |
| `<Warning>` | Breaking changes, deprecation notices, destructive operations |
| `<Tabs>` | Only on overview pages for quick examples (rare — prefer `<CodeGroup>`) |
| `---` | Between every major `##` section — creates visual rhythm |
| Tables | Comparisons with 3+ options, parameter references, decision matrices |

## Terminology

Use Seam's preferred terms consistently:
- "Device" (not "smart lock" generically)
- "Access code" (not "PIN code" in API context — but "PIN code" is fine in user-facing prose)
- "Connected account" (not "integration" or "connection")
- "Workspace" (not "account" or "organization")
- "Capability" (not "feature" or "function")
- "Provider" (not "brand" or "manufacturer" in technical contexts)
- "Entrance" (not "door" in API context — but "door" is fine in prose)

## Tone

- Second person ("you"), active voice, present tense
- Direct and action-oriented — "Create an access grant" not "An access grant can be created"
- 2-3 sentence paragraphs max
- Lead with code, explain after
