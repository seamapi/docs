---
description: Systems for managing and monitoring access to physical spaces
---

# The Access Control Systems Namespace

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

The Access Control Systems namespace contains the following resources:

### [`acs_system`](./systems/README.md#acs_system)
Represents an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### [`acs_user`](./users/README.md#acs_user)
Represents a [user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### [`acs_entrance`](./entrances/README.md#acs_entrance)
Represents an [entrance](../../capability-guides/access-systems/retrieving-entrance-details.md) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### [`acs_access_group`](./access_groups/README.md#acs_access_group)
Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.
The `acs_access_group` object represents an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### [`acs_credential`](./credentials/README.md#acs_credential)
Means by which an [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) gains access at an [entrance](../../capability-guides/access-systems/retrieving-entrance-details.md). The `acs_credential` object represents a [credential](../../capability-guides/access-systems/managing-credentials.md) that provides an ACS user access within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems). For each `acs_credential` object, you define the access method. You can also specify additional properties, such as a PIN code.

### [`acs_encoder`](./encoders/README.md#acs_encoder)
Represents a hardware device that encodes [credential](../../capability-guides/access-systems/managing-credentials.md) data onto physical cards within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems). See also [Working with Card Encoders and Scanners](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

