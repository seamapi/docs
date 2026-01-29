# Seam API Documentation - Repository Guide

This document provides a comprehensive overview of the Seam API documentation repository structure, organization, and writing conventions. Use this as a reference when working with the documentation.

**Repository:** Seam API Documentation (hosted on GitBook at https://docs.seam.co/latest/)
**Total Files:** 627 markdown files
**Last Updated:** 2026-01-28

---

## Table of Contents

1. [Documentation Organization](#documentation-organization)
2. [File Structure](#file-structure)
3. [Writing Style & Tone](#writing-style--tone)
4. [Content Types](#content-types)
5. [GitBook Configuration](#gitbook-configuration)
6. [Common Patterns & Conventions](#common-patterns--conventions)
7. [Key Guidelines](#key-guidelines)

---

## Documentation Organization

The documentation is organized into **7 main sections**, each serving a distinct purpose:

### 1. Core Concepts (Foundation)

**Purpose:** Foundational knowledge for understanding Seam's architecture and key concepts

**Topics:**

- Overview
- Seam Console
- Workspaces
- Authentication
- Connect Webviews
- Devices
- Providers
- Connected Accounts
- Mapping Resources
- Action Attempts

**Location:** `/docs/core-concepts/`

### 2. Capability Guides (Feature-focused)

**Purpose:** Feature-specific implementation guides organized by what devices can DO

**Topics:**

- Smart Locks
- Access Control Systems
- Mobile Access
- Access Grants & Instant Keys
- Thermostats
- Noise Sensors
- Seam Bridge
- Customer Portals
- Reservation Automations

**Location:** `/docs/capability-guides/`

### 3. API Reference (Technical Specifications)

**Purpose:** Complete API endpoint documentation (appears to be auto-generated from OpenAPI specs)

**Topics:**

- Installation
- Authentication
- Pagination
- Detailed endpoint documentation for:
  - Access Codes
  - ACS (Access Control Systems)
  - Devices
  - Events
  - Webhooks
  - Connected Accounts
  - And 20+ other resources

**Location:** `/docs/api/`

### 4. UI Components

**Purpose:** Frontend component libraries and SDKs

**Topics:**

- Seam Components (React, Angular, Vue)
- Seam Mobile Components (iOS)

**Location:** `/docs/seam-components/`, `/docs/ui-components/`

### 5. Device & System Integration Guides

**Purpose:** Manufacturer and system-specific setup instructions

**Coverage:** 40+ device manufacturers including:

- Smart locks (August, Yale, Schlage, Kwikset, etc.)
- Access control systems (ASSA ABLOY, Salto, Brivo, etc.)
- Thermostats (Ecobee, Honeywell)
- Other IoT devices

**Location:** `/docs/device-and-system-integration-guides/`, `/docs/device-guides/`

### 6. Developer Tools

**Purpose:** Development workflow and tooling documentation

**Topics:**

- Webhooks
- Seam CLI
- Sandbox Devices
- Rate Limits
- Mobile SDKs

**Location:** `/docs/developer-tools/`

### 7. Industry Guides

**Purpose:** Vertical-specific use cases and implementation guides

**Current coverage:** Hospitality Industry

**Location:** `/docs/industry-guides/`

---

## File Structure

### Root Level Files

```
/docs/
├── README.md           # Landing page / home
├── SUMMARY.md          # GitBook table of contents
├── quickstart.md       # 5-minute getting started guide
└── go-live.md          # Production readiness checklist
```

### Directory Organization

```
/docs/
├── core-concepts/                           (9 subdirectories)
├── capability-guides/                       (11 subdirectories)
├── api/                                     (29 subdirectories - auto-generated)
├── device-and-system-integration-guides/    (26 subdirectories)
├── device-guides/                           (41 subdirectories)
├── products/                                (4 subdirectories)
├── seam-components/                         (3 subdirectories)
├── ui-components/                           (2 subdirectories)
├── developer-tools/                         (3 subdirectories)
├── industry-guides/                         (1 subdirectory)
└── .gitbook/
    ├── assets/                              (600+ images)
    └── includes/                            (reusable snippets)
```

### Asset Organization

**Location:** `/docs/.gitbook/assets/`

**Naming conventions:**

- Descriptive names with hyphens: `august_connect-flow-screens_light.png`
- Dark/light mode variants: `_dark.png` and `_light.png` suffixes
- Manufacturer logos, screenshots, diagrams, cover images

**Asset types:**

- Device screenshots
- UI flow diagrams
- Timeline visualizations
- Manufacturer logos
- Architecture diagrams

---

## Writing Style & Tone

### Tone Characteristics

- **Professional but approachable** - Technical without being overly formal
- **Direct and action-oriented** - Uses imperatives ("Create", "Install", "Confirm")
- **Helpful and encouraging** - Includes success hints and congratulatory messages
- **Developer-first** - Assumes technical audience, provides code-first examples

### Voice & Perspective

- **Second person:** Consistently uses "you" and "your"
- **Active voice:** Preferred throughout
- **Present tense:** For describing functionality and actions

### Formatting Characteristics

**Paragraph length:** 2-3 sentences for readability

**List usage:** Extensive bullet lists for scanning

**Code emphasis:** Heavy use of inline code formatting with backticks

**Examples:**

```markdown
✓ "You can create an access code by making a request to the `access_codes.create` endpoint."
✗ "An access code can be created through the utilization of the access codes creation endpoint."
```

---

## Content Types

### 1. Conceptual Documentation

**Purpose:** Explain what something is and why it matters

**Characteristics:**

- Short (typically 50-200 lines)
- High-level overviews
- Architecture explanations
- Links to related guides

**Example:** [core-concepts/overview.md](docs/core-concepts/overview.md)

### 2. Getting Started Guides

**Purpose:** Onboard new users quickly

**Structure:**

1. Prerequisites
2. Install SDK
3. Connect device
4. Perform first action
5. Build simple application

**Length:** 300-1,500 lines

**Example:** [quickstart.md](docs/quickstart.md)

### 3. How-To Guides (Capability Guides)

**Purpose:** Task-oriented instructions for specific features

**Structure:**

1. Overview
2. Before You Begin (prerequisites)
3. Step-by-step instructions
4. Code examples (multi-language)
5. Verification steps
6. Next steps

**Length:** 500-2,000 lines

**Example:** [capability-guides/creating-access-codes/README.md](docs/capability-guides/creating-access-codes/README.md)

### 4. API Reference

**Purpose:** Complete technical specifications for API endpoints

**Structure:**

1. Endpoint description
2. Request parameters (with types and constraints)
3. Response schema
4. Code examples (6+ languages)
5. Error responses

**Length:** 1,000-2,000 lines

**Characteristics:**

- Appears to be auto-generated
- Consistent formatting across all endpoints
- Comprehensive parameter documentation

**Example:** [api/access_codes/create.md](docs/api/access_codes/create.md)

### 5. Integration Guides

**Purpose:** Manufacturer-specific setup and configuration

**Structure:**

1. Device/system overview
2. Requirements
3. Setup workflow (often 5-10 steps)
4. Configuration details
5. Troubleshooting
6. Next steps

**Length:** 200-1,500 lines

**Example:** [device-and-system-integration-guides/assa-abloy-visionline-access-control-system-in-development/](docs/device-and-system-integration-guides/assa-abloy-visionline-access-control-system-in-development/)

### 6. Tutorials

**Purpose:** End-to-end implementation guides for specific use cases

**Characteristics:**

- Industry-specific workflows
- Complete working examples
- Production considerations

**Example:** [industry-guides/hospitality-industry-guide/](docs/industry-guides/hospitality-industry-guide/)

### 7. Reference Materials

**Purpose:** Quick lookup tables and specifications

**Types:**

- Device requirements tables
- Sandbox credentials
- Error code references
- Capability matrices

---

## GitBook Configuration

### Key Settings (from `.gitbook.yaml`)

**Root directory:** `./docs/`

**Structure files:**

- `README.md` - Landing page
- `SUMMARY.md` - Table of contents

### Redirect Management

The configuration includes **198+ redirects** maintaining backward compatibility:

**Common redirect patterns:**

```yaml
# API client paths → Unified API paths
api-clients/access-codes/create: api/access_codes/create

# Device guides → Integration guides
device-guides/august-locks: device-and-system-integration-guides/august-locks

# URL normalization
old/path/with-dashes: new-path/with-underscores
```

**Purpose:** Ensures old documentation links continue working as structure evolves

---

## Common Patterns & Conventions

### 1. Frontmatter

**Standard format:**

```yaml
---
description: >-
  Brief one-line summary of page content for SEO and navigation
---
```

**Usage:** Every page should have descriptive frontmatter

### 2. Page Structure Template

```markdown
---
description: Brief page summary
---

# Page Title

Brief introduction paragraph explaining what this page covers.

## Section 1: Overview or Prerequisites

Content...

## Section 2: Main Content or Step-by-Step Instructions

### Subsection with detailed steps

1. First step
2. Second step
3. Third step

## Code Examples

[Multi-language tabs - see below]

## Next Steps

- Link to related guide 1
- Link to related guide 2
```

### 3. Multi-Language Code Examples

**IMPORTANT:** ALL code examples in the documentation must include examples in ALL supported Seam SDK languages plus cURL.

**Pattern:** Use GitBook tabs for showing code in multiple languages

````markdown
{% tabs %}
{% tab title="Python" %}

```python
seam.access_codes.create(
    device_id="...",
    code="1234"
)
```
````

{% endtab %}

{% tab title="JavaScript" %}

```javascript
await seam.accessCodes.create({
  deviceId: '...',
  code: '1234',
})
```

{% endtab %}

{% tab title="Ruby" %}

```ruby
seam.access_codes.create(
  device_id: "...",
  code: "1234"
)
```

{% endtab %}

{% tab title="PHP" %}

```php
<?php
$seam->access_codes->create(
  device_id: "...",
  code: "1234"
);
```

{% endtab %}

{% tab title="C#" %}

```csharp
seam.AccessCodes.Create(
  deviceId: "...",
  code: "1234"
);
```

{% endtab %}

{% tab title="Java" %}

```java
seam.accessCodes().create(
  AccessCodesCreateRequest.builder()
    .deviceId("...")
    .code("1234")
    .build()
);
```

{% endtab %}

{% tab title="cURL (bash)" %}

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{"device_id": "...", "code": "1234"}'
```

{% endtab %}
{% endtabs %}

````

**Required languages (in this order):**
1. **Python** - Always first
2. **JavaScript** - Second
3. **Ruby** - Third
4. **PHP** - Fourth
5. **C#** - Fifth
6. **Java** - Sixth
7. **cURL (bash)** - Always last for direct API access

**When to include code examples:**
- ✅ All API operations and method calls
- ✅ Complete workflows and multi-step processes
- ✅ Common operations in setup guides
- ✅ Any code that developers would copy and use
- ❌ Simple conceptual explanations without implementation
- ❌ Reference-only sections (but include in API docs)

### 4. Code Example Conventions

**Pattern:** Get resource → Check capability → Perform action

```python
# Get the device
device = seam.devices.get(device_id="...")

# Check capability
if device.can_program_online_access_codes:
    # Perform action
    access_code = seam.access_codes.create(
        device_id=device.device_id,
        code="1234"
    )
````

**Best practices:**

- Always check capabilities before actions
- Use descriptive variable names
- Include inline comments for clarity
- Show both request and response
- Use consistent sample IDs across examples

### 5. Navigation Patterns

#### Card-Based Navigation

Used for landing pages and section overviews:

```markdown
<table data-card-size="large" data-view="cards">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th data-hidden data-card-cover data-type="files"></th>
      <th data-hidden data-card-target data-type="content-ref"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Card Title</strong></td>
      <td>Brief description</td>
      <td></td>
      <td><a href="relative/path.md">relative/path.md</a></td>
    </tr>
  </tbody>
</table>
```

#### Next Steps Sections

End most guides with actionable next steps:

```markdown
## Next Steps

- [Related Guide 1](../path/to/guide1.md)
- [Related Guide 2](../path/to/guide2.md)
- [API Reference](../../api/endpoint.md)
```

### 6. Callout Boxes (GitBook Hints)

**Success hints** (tips, alternatives, helpful info):

```markdown
{% hint style="success" %}
You can also use the Seam CLI to create access codes quickly during development.
{% endhint %}
```

**Warning hints** (important caveats, deprecated features):

```markdown
{% hint style="warning" %}
This feature is deprecated. Use the new Access Grants API instead.
{% endhint %}
```

**Info hints** (additional context, sandbox notes):

```markdown
{% hint style="info" %}
In the sandbox environment, access codes are created instantly without delay.
{% endhint %}
```

### 7. Visual Content

#### Images with Dark/Light Mode Support

```markdown
<figure>
  <picture>
    <source srcset=".gitbook/assets/diagram_dark.png" media="(prefers-color-scheme: dark)">
    <img src=".gitbook/assets/diagram_light.png" alt="Description">
  </picture>
  <figcaption>Caption explaining the diagram</figcaption>
</figure>
```

#### Embedded Videos

```markdown
{% embed url="https://www.youtube.com/watch?v=..." %}
Brief description of video content
{% endembed %}
```

#### Diagrams

- Timeline diagrams for lifecycle events
- State machine diagrams for access codes
- Architecture diagrams for system overviews
- Flow diagrams for multi-step processes

### 8. Cross-References

**Internal links:** Use relative paths from current file

```markdown
See the [Access Codes API Reference](../../api/access_codes/create.md) for details.
```

**External links:**

- Seam Console: Link to specific console pages
- GitHub: Link to SDK repositories
- Package managers: Direct install links

**Related content sections:**

```markdown
## Related Resources

- [Core Concept: Devices](../../core-concepts/devices/)
- [Capability Guide: Smart Locks](../../capability-guides/smart-locks/)
- [API: devices.get](../../api/devices/get.md)
```

### 9. Tables

**Parameter tables:**

```markdown
| Parameter   | Type   | Required | Description                     |
| ----------- | ------ | -------- | ------------------------------- |
| `device_id` | string | Yes      | ID of the device                |
| `code`      | string | No       | Custom access code (4-8 digits) |
```

**Comparison tables:**

```markdown
| Feature       | Basic Plan | Pro Plan |
| ------------- | ---------- | -------- |
| Access codes  | ✓          | ✓        |
| Mobile access | -          | ✓        |
```

### 10. Prerequisites Sections

**Standard format:**

```markdown
## Before You Begin

To follow this guide, you need:

- A Seam account (create one at [console.seam.co](https://console.seam.co))
- An API key (found in your workspace settings)
- A connected device (see [Getting Started](../quickstart.md))
- Seam SDK installed (see [Installation](../api/installation.md))
```

---

## Key Guidelines

### For Working with This Repository

1. **Auto-generated content:** The `/docs/api/` directory appears to be auto-generated. Avoid manual edits here - changes should be made to the source spec.

2. **Consistency is critical:** With 627 files, maintaining consistent formatting, tone, and structure is essential. Follow existing patterns exactly.

3. **GitBook-specific syntax:** This documentation uses GitBook markdown extensions (tabs, hints, cards, embeds). Standard markdown won't render these correctly.

4. **Multi-language support:** All code examples should be provided in at least Python, JavaScript, and cURL. Additional languages (Ruby, PHP, C#, Java) are preferred.

5. **Progressive disclosure:** Documentation flows from simple (quickstart) to complex (detailed guides). Maintain this hierarchy when adding content.

6. **Capability-driven organization:** Features are organized by what devices CAN do, not just what they ARE. This is a key architectural principle.

7. **Real-world focus:** Include sandbox credentials, troubleshooting guides, and production checklists. Developers need practical, actionable information.

8. **Link maintenance:** When restructuring, always add redirects in `.gitbook.yaml` to maintain backward compatibility.

9. **Visual aids:** Use screenshots, diagrams, and videos generously. IoT integrations benefit from visual guidance.

10. **Accessibility:** Provide alt text for images, use semantic HTML, and ensure code examples are properly formatted.

### Writing Checklist

When creating or updating documentation:

- [ ] Add descriptive frontmatter
- [ ] Include code examples in multiple languages
- [ ] Add "Before You Begin" prerequisites section
- [ ] Check capability flags before actions in code examples
- [ ] Include "Next Steps" with related links
- [ ] Add images with dark/light mode support if applicable
- [ ] Use appropriate hint boxes for tips, warnings, and info
- [ ] Verify all internal links use relative paths
- [ ] Follow standard heading hierarchy (H1 → H2 → H3)
- [ ] Keep paragraphs short (2-3 sentences)
- [ ] Use active voice and second person
- [ ] Add entry to SUMMARY.md if creating new page
- [ ] Update .gitbook.yaml redirects if restructuring

### Common Terminology

**Preferred terms:**

- "Device" (not "smart lock" generically)
- "Access code" (not "PIN code")
- "Connected account" (not "integration" or "connection")
- "Workspace" (not "account" or "organization")
- "Capability" (not "feature" or "function")
- "Provider" (not "brand" or "manufacturer" in technical contexts)

### Tone Examples

**Good:**

> "Create an access code by calling the `access_codes.create` endpoint. You'll need to provide the `device_id` and optionally specify a custom code."

**Avoid:**

> "The access code creation functionality can be accessed through the utilization of the access codes creation API endpoint, which requires authentication and accepts various parameters."

**Good:**

> "The device must support online access code programming. Check the `can_program_online_access_codes` capability before proceeding."

**Avoid:**

> "Please note that it is important to verify whether or not the device has the necessary capabilities to support the programming of online access codes prior to attempting to create one."

---

## Summary

The Seam API documentation is a mature, well-structured system designed for a developer audience building IoT integrations. Key characteristics:

- **Developer-first:** Heavy emphasis on code examples and SDKs
- **Capability-driven:** Organized by what devices can DO
- **Multi-language:** Comprehensive SDK coverage (7+ languages)
- **Production-ready:** Includes sandbox environments, troubleshooting, and go-live checklists
- **Manufacturer-agnostic:** Provides unified API across 40+ device brands
- **GitBook-optimized:** Extensive use of GitBook-specific markdown features

When contributing to this documentation, prioritize consistency, clarity, and practical examples. The documentation serves developers who need to integrate Seam quickly and reliably into production applications.
