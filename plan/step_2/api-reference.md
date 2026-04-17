# Step 2: API Reference Reorganization

## Before (current structure after step 1)

```
API Reference
├── Overview
├── Installation
├── Authentication
├── Pagination
├── Access Codes
│   ├── (CRUD + generate, report constraints)
│   ├── Simulations
│   └── Unmanaged Access Codes
├── Access Control Systems (ACS)
│   ├── Access Groups
│   ├── ACS Users
│   ├── Credentials
│   ├── Encoders (+ simulations)
│   ├── Entrances
│   └── Systems
├── Access Grants
│   └── Unmanaged
├── Access Methods
│   └── Unmanaged
├── Action Attempts
├── Client Sessions
├── Connect Webviews
├── Connected Accounts (+ simulate)
├── Customers
├── Devices (+ simulations, unmanaged)
├── Events
├── Instant Keys
├── Locks (+ simulations)
├── Noise Sensors
│   ├── Simulations
│   └── Noise Thresholds
├── Phones (+ simulations)
├── Spaces
├── Thermostats
│   ├── Daily Programs
│   ├── Schedules
│   └── Simulations
├── User Identities (+ unmanaged)
├── Webhooks
└── Workspaces
```

## After (proposed)

```
API Reference
├── Overview
├── Installation
├── Authentication
├── Pagination
├── Rate Limits
├── Access
│   ├── Access Grants & Identity
│   │   ├── Access Grants (+ unmanaged)
│   │   ├── Access Methods (+ unmanaged)
│   │   ├── User Identities (+ unmanaged)
│   │   └── Instant Keys
│   ├── Smart Locks
│   │   ├── Access Codes (+ simulations, unmanaged)
│   │   └── Locks (+ simulations)
│   └── Access Control Systems
│       ├── Systems
│       ├── Access Groups
│       ├── Users
│       ├── Credentials
│       ├── Encoders (+ simulations)
│       └── Entrances
├── Thermostats
│   └── Thermostats (+ daily programs, schedules, simulations)
├── Noise Sensors
│   └── Noise Sensors (+ noise thresholds, simulations)
├── Connectors & Automations
│   ├── Customers
│   └── Spaces
└── Platform (TBD)
    ├── Action Attempts
    ├── Client Sessions
    ├── Connect Webviews
    ├── Connected Accounts (+ simulate)
    ├── Devices (+ simulations, unmanaged)
    ├── Events
    ├── Phones (+ simulations)
    ├── Webhooks
    └── Workspaces
```

## Key changes

- Flat namespace list reorganized into **product-type groups** mirroring Guides (Access, Thermostats, Noise Sensors, Connectors & Automations)
- Access endpoints grouped into the same two-tier split: **Access Grants & Identity** and **Smart Locks / ACS**
- Cross-cutting platform resources (Devices, Events, Webhooks, etc.) grouped under **Platform**
- **Rate Limits** added (moved from Guides → Developer Tools)
- Requires codegen changes to `summary.ts` to produce the new grouping
