---
name: write-brand-guide
description: >-
  Use when creating a new brand/manufacturer integration guide in the Mintlify docs — the pages that live under device-and-system-integration-guides/. Trigger on phrases like "add a brand guide for X", "create integration docs for Y locks", "write docs for the Z integration", "new device guide for W", or when the user mentions adding a new lock/device manufacturer to the Brand Guides section. Also use when the user says "write a brand guide" or "add a new manufacturer page". Do NOT use for use-case/capability guides (those go under use-cases/) — use write-feature-guide for those instead.
---

# Write Brand Guide

Create a complete brand integration guide for a device manufacturer in the Mintlify docs. All work happens in `mintlify-docs/device-and-system-integration-guides/` — this is the only docs site.

A brand guide is a group of `.mdx` pages — an overview, a getting-started tutorial, a sandbox credentials page, and optionally a setup guide — organized under `mintlify-docs/device-and-system-integration-guides/<brand>-locks/` (or `-access-control-system/` for ACS brands).

---

## Before you start writing

### 1. Discover from seam-connect

The seam-connect repo is the source of truth for what a brand supports. Before asking the user anything, try to auto-discover the brand's capabilities, sandbox credentials, and metadata.

**Ask the user for the seam-connect repo path** if you don't already know it. A common location is `~/Projects/Seam/seam-connect`, but it varies by developer — always confirm.

Once you have the path, run these discovery steps:

#### a) Find the provider definition and capability flags

There are two patterns depending on whether the brand uses the SPI (Standard Provider Interface) or the legacy provider system:

```bash
# SPI providers (newer) — check first
cat <seam-connect>/providers/<brand>/index.ts 2>/dev/null

# Legacy providers — fallback
grep -A 20 "<brand>:" <seam-connect>/lib/device/providers.ts 2>/dev/null
```

Look for the `capability_flags` object. The key flags to extract:

- `can_remotely_lock` / `can_remotely_unlock` → lock/unlock actions
- `can_program_online_access_codes` → online access codes
- `can_program_offline_access_codes` → offline access codes

Also note:

- `provider_key` — the string used in `accepted_providers`
- `readable_name` — the display name for the brand
- `device_kinds` — "lock", "thermostat", etc.
- `supports_access_grants` — whether access grants are supported

#### b) Find sandbox credentials

```bash
cat <seam-connect>/providers/<brand>/fake/lib/seed.ts
```

Look for `addUserAccount`, `createSeededDatabase`, or similar seed functions. Extract:

- **Email** — usually `jane@example.com` or similar
- **Password** — usually `test1234` or `1234`
- **2FA code** — if present (e.g., August/Yale use `123456`)

Also look for what sandbox devices are seeded (lock names, room numbers, gateway presence) — this helps write realistic code examples.

#### c) Find device metadata structure

```bash
grep -A 15 "<brand>_metadata" <seam-connect>/public-types/models/devices/device-metadata.ts 2>/dev/null
```

This tells you what brand-specific properties exist on the device object (e.g., `lock_name`, `has_gateway`, `lock_mac`), which you'll use in the getting-started guide's code examples.

#### d) Check if this is an ACS (access control system) brand

```bash
# If the provider has entrances/credentials facets, it's an ACS brand
grep -l "EntrancesFacetTypes\|CredentialsFacetTypes" <seam-connect>/providers/<brand>/provider-module/provider-model.ts 2>/dev/null
```

ACS brands have a different guide structure (systems, entrances, credentials) vs lock brands (devices, lock/unlock, access codes). The templates below are for **lock brands**. If it's an ACS brand, adapt accordingly — ACS guides focus on entrances, credential provisioning, and encoder workflows rather than lock/unlock and access codes.

### 2. Present discoveries and fill gaps

After auto-discovery, present what you found to the user:

> "I found the following in seam-connect for **<Brand>**:
>
> - **Provider key:** `<key>`
> - **Features:** lock/unlock, online access codes [etc.]
> - **Sandbox credentials:** jane@example.com / test1234
> - **Device metadata:** lock_name, has_gateway, lock_mac
>
> I still need to know:
>
> - [any gaps — gateway product URL, brand description, where-to-order link, etc.]"

The user only needs to fill in what can't be discovered from code — typically:

- Gateway/bridge product URL (if the brand requires one)
- Brand description / market focus (hospitality, residential, etc.)
- Where-to-order link
- Any brand-specific constraints, errors, or troubleshooting notes

### 3. Check existing patterns

Before writing, read one or two existing brand guides to match conventions:

```bash
# Good references — read one that's similar to the brand you're creating:
# Simple lock brand (gateway required):
cat mintlify-docs/device-and-system-integration-guides/omnitec-locks/index.mdx
# Established lock brand (multiple platforms):
cat mintlify-docs/device-and-system-integration-guides/yale-locks/index.mdx
# Lock brand with offline codes + bridge:
cat mintlify-docs/device-and-system-integration-guides/igloohome-locks/index.mdx
```

Also check `mintlify-docs/docs.json` to find where to insert the new brand in the navigation (alphabetical within its group).

### 4. Confirm the plan

Before writing, tell the user what you'll create:

- `index.mdx` — Overview page
- `<brand>-setup-guide.mdx` — Setup guide with prerequisites, connection steps, and troubleshooting
- `get-started-with-<brand>-locks.mdx` — Getting started tutorial
- `sandbox-<brand>-locks.mdx` — Sandbox credentials (or confirm one already exists)
- Navigation update in `docs.json`

Get a thumbs-up before proceeding.

---

## Page structure

### Page 1: Overview (`index.mdx`)

The overview is a **landing page**, not a tutorial. Each section answers one question and links elsewhere for details. Keep it scannable — a developer should be able to skim the page in 30 seconds and know what this brand does, what Seam supports, and where to go next.

```
---
title: '<Brand> Locks'
sidebarTitle: 'Overview'
description: 'Guide for using <Brand> locks with Seam'
---

## Overview

[1-2 paragraphs: what the brand makes, what market they serve, how Seam integrates with them. Mention gateway/bridge requirement here if applicable.]

[If the brand requires a gateway/bridge, add an <Info> block here.]

---

## Supported Devices

[What devices/models are supported. Mention gateway/bridge requirement with a link to the product page. Add a <Warning> block if there's a hard requirement like "only online locks with a gateway are supported".]

For detailed information about the <Brand> devices that Seam supports, see our [<Brand> Supported Devices page](https://www.seam.co/manufacturers/<brand>).

---

## Supported Features

We support the following features:

- [Triggering web lock and unlock actions](/low-level-apis/smart-locks/lock-and-unlock)
- [Programming online access codes](/low-level-apis/smart-locks/access-codes) on locks that have a keypad
[Add offline access codes line if supported]

---

[OPTIONAL — for ACS brands, add Related Features after Supported Features:]

## Related Features

- [**Access Grants**](/use-cases/granting-access) — The recommended way to manage access in Seam.
- [**Plastic Card Encoding**](/api/acs/encoders/encode_credential) — Encode and issue physical key cards.
[Add Mobile Keys, Instant Keys links if supported]

---

[OPTIONAL — include only if there are real gotchas:]

## Brand-Specific Restrictions

[No remote unlock, PIN length limits, account type requirements, etc. Use prose, not a <Warning> block — the heading already signals caution.]

---

[OPTIONAL — include only if notable events exist:]

## Brand-Specific Events

[Auto-relock, access denied, etc.]

---

## Device Provider Key

To create a [Connect Webview](/core-concepts/connect-webviews) that enables your users to connect their <Brand> devices to Seam, include the `<provider_key>` device provider key in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webviews](/core-concepts/connect-webviews/customizing-connect-webviews#customize-the-brands-to-display-in-your-connect-webviews).

---

## Setup Instructions

For step-by-step instructions on connecting <Brand> devices to Seam — including [gateway/bridge] configuration and troubleshooting — see the [<Brand> Setup Guide](./<brand>-setup-guide).

---

## Where to Order

<CardGroup cols={1}>
  <Card
    title='<Brand> - Products'
    href='<product_url>'
  ></Card>
</CardGroup>
```

**Section order matters.** Developers scan top-down: what is it (Overview) → what works (Supported Devices, Features) → what doesn't (Restrictions) → how to connect (Provider Key, Setup) → where to buy. Don't add runtime troubleshooting here — put it in the setup guide.

### Page 2: Getting Started (`get-started-with-<brand>-locks.mdx`)

Follow the 5-step structure used by all brand guides:

1. **Install Seam SDK** — SDK links + CodeGroup with install commands for all 7 languages + API key export
2. **Link Account with Seam** — Create Connect Webview with `accepted_providers: ["<provider_key>"]`, authorize with sandbox credentials
3. **Retrieve Devices** — List locks, show device properties including brand-specific metadata
4. **Lock & Unlock** — Lock and unlock actions (skip this section if lock/unlock is not supported)
5. **Set Access Codes** — Create ongoing + timebound codes, list codes (skip if access codes not supported)

**Every CodeGroup must include all 7 languages in this order:**

1. JavaScript
2. Python
3. Ruby
4. PHP
5. C#
6. Java
7. cURL (bash)

Use the device type from the API (e.g., `omnitec_lock`) and realistic property names from the brand's metadata. Use the seeded device names from `seed.ts` (e.g., "Front Door", "Room 101") in code output examples.

End with a **Next Steps** section linking to webhooks, core concepts, and access codes guide.

---

## ACS Brand Adaptations

If the discovery step (step 1d) detects an ACS brand (has `EntrancesFacetTypes` or `CredentialsFacetTypes`), adapt the templates:

### Directory naming

Use `-access-control-system` instead of `-locks`:

- `mintlify-docs/device-and-system-integration-guides/<brand>-access-control-system/`

### Overview differences (ACS)

- **Supported Features** lists ACS capabilities instead of lock/unlock:
  - Managing ACS users (guests and staff)
  - Listing and managing entrances
  - Creating and revoking credentials (key cards, mobile keys)
  - Encoding plastic cards via connected encoders (if encoders facet exists)
- **Related Features** section links to Access Grants, Mobile Keys, Instant Keys, Plastic Card Encoding
- If `requires_bridge: true`, mention the [Seam Bridge](/capability-guides/seam-bridge) requirement prominently
- Add a `<Warning>` if the system doesn't support remote unlock (common for ACS brands)

### Getting Started differences (ACS)

Replace the 5-step lock tutorial with an ACS-focused flow:

1. **Install Seam SDK** — same as lock brands
2. **Link System with Seam** — same Connect Webview pattern, but:
   - Bridge-based systems have a different auth flow (TCP host/port instead of email/password)
   - Describe the sandbox auth flow from the existing sandbox credentials page
3. **Retrieve the ACS System** — use `seam.acs.systems.list()` instead of `seam.locks.list()`
4. **List Entrances** — use `seam.acs.entrances.list({ acs_system_id })` to show rooms/doors
5. **Create a User and Issue a Credential** — two sub-steps:
   - Create an ACS user with `seam.acs.users.create()`
   - Create a credential with `seam.acs.credentials.create()` specifying `access_method: "card"` and `allowed_acs_entrance_ids`

Use seeded room numbers and user names from `seed.ts` in code examples.

### Setup Guide

Every brand gets a dedicated setup guide page (`<brand>-setup-guide.mdx`). The overview page's "Setup Instructions" section links to it — it should not contain inline setup steps.

**The setup guide focuses on connecting the brand's system to Seam — not on installing hardware.** Assume the user already has the brand's devices set up and working. The guide covers how to find the right credentials and authorize with Seam through the Connect Webview.

**During the interview, ask the user for specific connection instructions.** These are brand-specific and can't be auto-discovered. Prompt with: "What credentials or information does the user need to connect this brand to Seam? Where do they find them?"

For ACS brands, also ask about entrance and encoder setup — these often require coordination with Seam support.

Create a `<brand>-setup-guide.mdx` page with these sections:

1. **Overview** — one paragraph: what this guide covers, mention any hardware requirement (e.g., gateway) as a prerequisite, not as a setup step
2. **Step 1: Locate credentials** — where to find the credentials needed for the Connect Webview (app settings, admin portal, etc.). Call out if they differ from the regular login.
3. **Step 2: Connect via Connect Webview** — open the webview, select the provider, enter credentials
4. **Step 3: Verify the Connection** — confirm devices appear in Seam
5. **Troubleshooting** — common issues (wrong credentials, devices not appearing, connectivity)

**Do not include:** hardware installation steps, prerequisites like "a Seam workspace with API access", or links to sandbox credentials. The setup guide is for real users connecting their real system. Sandbox instructions belong on the sandbox credentials page.

The overview page should link to the setup guide with a single line:

```
## Setup Instructions

For step-by-step instructions on connecting <Brand> devices to Seam — including [gateway/bridge] configuration and troubleshooting — see the [<Brand> Setup Guide](./<brand>-setup-guide).
```

Reference examples: `dormakaba-community-setup-guide.mdx`, `latch-setup-guide.mdx`, `hotek-setup-guide.mdx`, `omnitec-setup-guide.mdx`.

### Sandbox Credentials differences (ACS)

ACS brands often have non-standard auth flows (bridge pairing, TCP connection, site credentials). Check the existing sandbox page — it may already document the flow. If so, don't recreate it. If it doesn't exist, document the auth stages from the provider's `seam-auth-mapper.ts`.

### Page 3: Sandbox Credentials (`sandbox-<brand>-locks.mdx`)

```
---
title: 'Sandbox <Brand> Locks'
description: 'Add virtual <Brand> locks to your Seam sandbox workspace using these sample credentials to test your integration without real hardware.'
---

Use the following set of credentials to add virtual [<Brand> locks](/device-and-system-integration-guides/<brand>-locks) to your Seam [sandbox workspace](/core-concepts/workspaces#sandbox-workspaces):

| Email Address    | Password | [Two Factor Code] | [Time Zone] |
| ---------------- | -------- | [if applicable]   | [if applicable] |
| <email>          | <pass>   | [code]            | [value]     |

[Any additional notes about the sandbox flow, e.g., time zone selection prompt.]
```

---

## Navigation setup

Add the brand to `mintlify-docs/docs.json` under the appropriate group within the "Brand Guides" tab. Brands are organized alphabetically within their group (Smart Locks, Access Control Systems, etc.).

Find the right insertion point:

```bash
# Find the Smart Locks group and nearby brands for alphabetical placement
grep -n "group.*Locks" mintlify-docs/docs.json | head -20
```

Insert a new group entry:

```json
{
  "group": "<Brand> Locks",
  "pages": [
    "device-and-system-integration-guides/<brand>-locks/index",
    "device-and-system-integration-guides/<brand>-locks/<brand>-setup-guide",
    "device-and-system-integration-guides/<brand>-locks/get-started-with-<brand>-locks",
    "device-and-system-integration-guides/<brand>-locks/sandbox-<brand>-locks"
  ]
}
```

For ACS brands, adjust the directory and page names accordingly (e.g., `<brand>-access-control-system/`). Include any additional subpages (e.g., finding-your-room-numbers) after the setup guide.

If a sandbox page already exists in the nav, keep it and add the new pages before it.

---

## After writing all pages

### Format

```bash
source ~/.nvm/nvm.sh && nvm use 22
npx prettier --write "mintlify-docs/device-and-system-integration-guides/<brand>-locks/**/*.mdx" "mintlify-docs/docs.json"
```

### Start the dev server

```bash
source ~/.nvm/nvm.sh && nvm use 22
cd mintlify-docs
lsof -ti:3333 | xargs kill -9 2>/dev/null
npx @mintlify/cli@latest dev --port 3333
```

Run with `run_in_background: true`. If ports 3333-3342 are all in use, kill them all first:

```bash
lsof -i :3333-3342 -t 2>/dev/null | sort -u | xargs kill -9 2>/dev/null
```

The OpenAPI validation warning is harmless — ignore it.

Share the preview URLs with the user:

- `http://localhost:3333/device-and-system-integration-guides/<brand>-locks`
- `http://localhost:3333/device-and-system-integration-guides/<brand>-locks/get-started-with-<brand>-locks`
- `http://localhost:3333/device-and-system-integration-guides/<brand>-locks/sandbox-<brand>-locks`

### Update Vale vocabulary

Mintlify runs Vale spellcheck on PRs. Brand names and Seam-specific terms that aren't in a standard dictionary will trigger warnings. Add new terms to the vocabulary file:

```bash
# Add brand name (and any brand-specific terms) to the accept list
echo "<Brand>" >> mintlify-docs/styles/Vocab/Seam/accept.txt
```

The vocabulary file is at `mintlify-docs/styles/Vocab/Seam/accept.txt`. Common terms already listed: Hotek, Omnitec, Webview, Webviews, prefilled. Add any new brand names or brand-specific jargon that would fail spellcheck.

If the Vale config (`mintlify-docs/.vale.ini`) or vocabulary directory doesn't exist yet, create them:

```
# mintlify-docs/.vale.ini
StylesPath = styles
MinAlertLevel = suggestion
Vocab = Seam

[*.mdx]
BasedOnStyles = Vale
```

```
# mintlify-docs/styles/Vocab/Seam/accept.txt
<brand-specific terms, one per line>
```

### Commit, push, and open PR

1. Create a feature branch if not already on one: `feat/<brand>-brand-guide`
2. Stage only the new/modified files (not unrelated files)
3. Commit with message: `feat: add <Brand> locks brand guide`
4. Push to origin with `-u` flag
5. Create or update a PR:

   ```bash
   gh pr create --title "feat: add <Brand> locks brand guide" --body "$(cat <<'EOF'
   ## Summary

   - Adds overview page for <Brand> locks with supported features, device provider key, setup instructions
   - Adds setup guide with prerequisites, connection steps, and troubleshooting
   - Adds getting started guide with full 5-step tutorial in all 7 SDK languages
   - Adds sandbox credentials page
   - Updates docs.json navigation and Vale vocabulary

   ## Test plan

   - [ ] Verify pages render correctly on Mintlify preview deploy
   - [ ] Confirm nav shows all pages under "<Brand> Locks"
   - [ ] Check all internal links resolve

   🤖 Generated with [Claude Code](https://claude.com/claude-code)
   EOF
   )"
   ```

   If a PR already exists for the branch, update it with `gh pr edit` instead.

---

## Code sample conventions

Use language-appropriate conventions consistently:

- **JavaScript:** `camelCase`, `const`, `await`, `import { Seam } from "seam"`
- **Python:** `snake_case`, `from seam import Seam`
- **Ruby:** `snake_case`, keyword arguments, `require "seam"`
- **PHP:** `$seam->resource->method()`, named arguments, `<?php` prefix
- **C#:** `PascalCase`, `var`, `using Seam.Client`
- **Java:** builder pattern (`Request.builder().field().build()`), `import co.seam.Seam`
- **cURL:** `curl -X 'POST'` with `-H` and `-d` flags, `${SEAM_API_KEY}` env var

In code output examples, use the brand's actual device type (e.g., `omnitec_lock`) and realistic metadata field names from the device metadata schema and seed data.

---

## Terminology

Use Seam's preferred terms:

- "Device" (not "smart lock" generically)
- "Access code" (not "PIN code" in API context — but "PIN code" is fine in user-facing prose)
- "Connected account" (not "integration" or "connection")
- "Workspace" (not "account" or "organization")
- "Capability" (not "feature" or "function")
- "Provider" (not "brand" or "manufacturer" in technical contexts)
- "Entrance" (not "door" in API context — but "door" is fine in prose)

## Tone

- Second person ("you"), active voice, present tense
- Direct and action-oriented — "Create an access code" not "An access code can be created"
- 2-3 sentence paragraphs max
- Professional but approachable
