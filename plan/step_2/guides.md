# Step 2: Guides Reorganization

## Before (current structure after step 1)

```
Guides
├── Seam Documentation
├── Quick Start
├── Go Live
├── Core Concepts
│   ├── Overview
│   ├── Seam Console
│   ├── Workspaces
│   ├── Authentication
│   ├── Connect Webviews
│   ├── Devices
│   ├── Providers
│   ├── Connected Accounts
│   ├── Mapping Resources
│   └── Action Attempts
├── Capability Guides
│   ├── Device and System Capabilities
│   ├── Smart Locks
│   │   ├── Locking and Unlocking
│   │   └── Access Codes (create, retrieve, modify, delete, lifecycle, ...)
│   ├── Access Control Systems
│   │   ├── Quick Starts (PIN, Key Card, Mobile Key)
│   │   ├── Connect an ACS to Seam
│   │   ├── Managing ACS Users
│   │   ├── Managing Credentials
│   │   ├── Card Encoders & Scanners
│   │   └── Troubleshooting
│   ├── Mobile Access
│   ├── Access Grants
│   ├── Instant Keys
│   ├── Thermostats
│   ├── Noise Sensors
│   ├── Seam Bridge
│   ├── Customer Portals
│   └── Reservation Automations
├── UI Components
│   ├── Seam Components (React, Angular, Vue)
│   └── Seam Mobile Components (iOS)
├── Developer Tools
│   ├── Webhooks
│   ├── Seam CLI
│   ├── Seam MCP Server
│   ├── Rate Limits
│   ├── Mobile SDKs (Android, iOS)
│   └── Sandbox Devices and Systems (40 entries)
└── Industry Guides
    └── Hospitality
```

## After (proposed)

```
Guides
├── Quick Start (TBD)
├── Go Live (TBD)
├── Core Concepts (TBD — carried over from existing docs, not yet revisited)
│   ├── Overview
│   ├── Seam Console
│   ├── Workspaces
│   ├── Authentication (API Keys, PATs, Client Sessions)
│   ├── Connect Webviews
│   ├── Devices
│   ├── Providers
│   ├── Connected Accounts
│   ├── Mapping Resources
│   └── Action Attempts
├── Access
│   ├── Access Grants & Identity
│   │   ├── Access Grants (create, update, delete, retrieve, deliver methods, reservation grants)
│   │   ├── Instant Keys (how they work, setup, issuing, delivering)
│   │   └── User Identities (managing accounts, managing phones)
│   ├── Smart Locks
│   │   ├── Lock/Unlock
│   │   └── Access Codes (create, retrieve, modify, delete, lifecycle, constraints, offline, backup, linked codes, migration, troubleshooting)
│   └── Access Control Systems
│       ├── Connect an ACS to Seam
│       ├── Managing ACS Users
│       ├── Managing Credentials
│       ├── Retrieving Entrance Details
│       ├── Card Encoders & Scanners
│       ├── Mobile Access (setup, phones, issuing credentials, mobile SDKs)
│       ├── Seam Bridge (Windows, macOS, Linux) (TBD — may move closer to Connected Accounts)
│       └── Troubleshooting
├── Thermostats
│   ├── Concepts (HVAC modes, set points)
│   ├── Retrieving Thermostats
│   ├── Temperature Thresholds
│   ├── Current HVAC & Fan Mode Settings
│   ├── Climate Presets (fallback, activating)
│   ├── Schedules
│   ├── Programs
│   └── Testing with Simulate Endpoints
├── Noise Sensors
│   ├── Overview
│   └── Configuring Noise Thresholds
├── Connectors & Automations (TBD — location may change)
│   ├── Connectors
│   ├── Customer Portals (customers, preview, integrate, filtering)
│   └── Reservation Automations
├── Developer Tools
│   ├── Webhooks
│   ├── Seam CLI
│   ├── Seam MCP Server
│   ├── Mobile SDKs (Android, iOS)
│   ├── Seam Components (React, Angular, Vue)
│   └── Seam Mobile Components (iOS)
└── Industry Guides
    └── Hospitality
```

## Key changes

- **Capability Guides** is replaced by product-type sections: **Access**, **Thermostats**, **Noise Sensors**
- Access is split into two tiers: **Access Grants & Identity** (high-level) and **Smart Locks / ACS** (low-level)
- Mobile Access moves under ACS (low-level device credentials)
- User Identities moves up to Access Grants & Identity (high-level)
- Seam Bridge moves under ACS
- UI Components moves under Developer Tools
- Rate Limits and Sandbox data removed (Rate Limits → API Reference, Sandbox → Brand Guides)
- Connectors & Automations becomes its own section (cross-product)
