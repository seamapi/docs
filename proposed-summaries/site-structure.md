# Proposed Site Structure

## Guides

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
│       ├── Seam Bridge (Windows, macOS, Linux)
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
│   └── Mobile SDKs (Android, iOS)
├── UI Components (TBD — may move to Developer Reference)
│   ├── Seam Components (React, Angular, Vue)
│   └── Seam Mobile Components (iOS)
└── Industry Guides
    └── Hospitality
```

## Developer Reference

```
Developer Reference
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

## Integrations

```
Integrations
├── Smart Locks (each with setup + sandbox)
├── Access Control Systems (each with setup + sandbox)
├── Thermostats (each with setup + sandbox)
├── Other Devices & Systems
└── Device Manufacturer Guidance
```
