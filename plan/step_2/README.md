# Step 2: Reorganize Content Within Each Section

After step 1 splits the docs into 3 GitBook site sections, step 2 reorganizes the sidebar structure within each section.

See the before/after trees for each section:
- [Guides](guides.md)
- [API Reference](api-reference.md)
- [Brand Guides](brand-guides.md)

## TODOs

- [ ] **Get Started section** — How should Quick Start and Go Live be organized? Should they remain top-level, be grouped under a "Get Started" section, or be split per product (e.g., "Get started with Access", "Get started with Thermostats")?
- [ ] **Core Concepts section** — Review which concepts are still relevant as top-level items. Some may fold into product sections (e.g., Devices into Access, Connect Webviews into a setup/onboarding flow). Others may be too granular for their current placement (e.g., custom metadata filtering pages).
- [ ] **Connectors & Automations placement** — Cross-product section, but location TBD.
- [ ] **Seam Bridge placement** — Currently under ACS, may move closer to Connected Accounts.
- [ ] **SDKs and UI component libraries** — Define the content split between Guides (setup, usage, tutorials) and API Reference (API surface, parameters, methods).
- [ ] **API Reference product grouping** — Requires codegen changes to `summary.ts` to produce the new grouping instead of flat namespace list.
- [ ] **Platform section in API Reference** — Review which resources belong here vs under a product group.
