---
description: Systems for managing and monitoring access to physical spaces
---

# Access Control Systems (ACS)

Access control systems centralize access authorization for buildings, which means that you can use a single system to grant users access to one or more entrances. An access control system manages the following elements:

- Who has access
- The entrances to which users have access
- The access schedule for each user and entrance
- The access mechanism—PIN codes, mobile keys, or plastic cards—for each access grant

To grant access using the Seam access control system API, use the following basic process:

1. Create `acs_user`s.
2. Configure access for these users.
   For some access control systems, configure the allowed entrances and access schedule. For other systems, use `acs_access_group`s. For details, see the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your access control system.
3. Create `acs_credential`s, which are the digital means of granting access to users, such as PIN codes, mobile keys, and plastic (RFID) cards.
   If you are developing a mobile app to provide access for your users, you can also use [Seam's iOS and Android SDKs](../../capability-guides/mobile-access/mobile-device-sdks/README.md) that pair with the Seam API to create and manage mobile keys.

## Resources

The Access Control Systems (ACS) namespace contains the following resources:

