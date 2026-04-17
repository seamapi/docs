# Step 2: Brand Guides Reorganization

## Before (current structure after step 1)

```
Brand Guides
├── Device and System Integration Guides
│   ├── 4SUITES Locks
│   ├── 33 Lock Devices
│   ├── Akiles Locks
│   ├── ASSA ABLOY Visionline (deep nesting — up to 7 levels)
│   ├── ASSA ABLOY Vingcard
│   ├── Brivo Access
│   ├── Dormakaba Ambiance
│   ├── Dormakaba Community
│   ├── Dormakaba Oracode
│   ├── Honeywell Thermostats
│   ├── igloohome Locks
│   ├── Keynest Key Lockers
│   ├── Latch
│   ├── Lockly Locks
│   ├── Salto KS
│   ├── Salto ProAccess Space
│   ├── Schlage Locks
│   ├── Sensi Thermostats
│   ├── SmartThings Hubs
│   ├── Tedee Locks
│   ├── Ultraloq Locks
│   └── ... (+ more from device-guides/)
├── Sandbox Data (scattered across device-guides/ and developer-tools/)
│   ├── Sandbox August Locks
│   ├── Sandbox ecobee Thermostats
│   ├── Sandbox Minut Sensors
│   └── ... (~40 entries)
└── Device Manufacturer Guidance
    ├── Building a Seam-Compatible Smart Lock API
    └── Creating a Seam-Compatible Intercom API
```

## After (proposed)

```
Brand Guides
├── Smart Locks
│   ├── 4SUITES (setup + sandbox)
│   ├── Akiles (setup + sandbox)
│   ├── August (setup + sandbox)
│   ├── igloohome (setup + sandbox)
│   ├── Kwikset (setup + sandbox)
│   ├── Lockly (setup + sandbox)
│   ├── Nuki (setup + sandbox)
│   ├── Schlage (setup + sandbox)
│   ├── Tedee (setup + sandbox)
│   ├── TTLock (setup + sandbox)
│   ├── Ultraloq (setup)
│   ├── Wyze (setup + sandbox)
│   └── Yale (setup + sandbox)
├── Access Control Systems
│   ├── ASSA ABLOY Visionline (setup + sandbox)
│   ├── ASSA ABLOY Vingcard (setup + sandbox)
│   ├── Brivo Access (setup + sandbox)
│   ├── Dormakaba Ambiance (setup + sandbox)
│   ├── Dormakaba Community (setup + sandbox)
│   ├── Latch (setup + sandbox)
│   ├── Salto KS (setup + sandbox)
│   ├── Salto ProAccess Space (setup + sandbox)
│   └── ... 
├── Thermostats
│   ├── ecobee (setup + sandbox)
│   ├── Google Nest (setup + sandbox)
│   ├── Honeywell Resideo (setup + sandbox)
│   ├── Sensi (setup + sandbox)
│   └── SmartThings (setup + sandbox)
├── Other Devices & Systems
│   ├── 2N Intercoms (setup + sandbox)
│   ├── ControlByWeb Relays (sandbox)
│   ├── Dormakaba Oracode (setup + sandbox)
│   ├── Keynest Key Lockers (setup + sandbox)
│   ├── Minut Sensors (sandbox)
│   ├── NoiseAware Sensors (sandbox)
│   └── ...
└── Device Manufacturer Guidance
    ├── Building a Seam-Compatible Smart Lock API
    └── Creating a Seam-Compatible Intercom API
```

## Key changes

- Brands organized by **device category** (Smart Locks, ACS, Thermostats, Other) instead of flat alphabetical list
- **Sandbox data consolidated alongside each brand** instead of in a separate section
- Content from `device-guides/` and `device-and-system-integration-guides/` merged into one structure
- Deep nesting reduced (ASSA ABLOY Visionline goes from 7 levels to max 4)
