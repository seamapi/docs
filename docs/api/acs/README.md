---
description: Systems for managing and monitoring access to physical spaces
---

# Access Control Systems

## Resources

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
Means by which a user gains access at an entrance. The `acs_credential` object represents a credential that provides an ACS user access within an access control system. For each acs_credential object, you define the access method. You can also specify additional properties, such as a code.

### [`acs_encoder`](./encoders/README.md#acs_encoder)
Represents a hardware device that encodes [credential](../../capability-guides/access-systems/managing-credentials.md) data onto physical cards within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems). See also [Working with Card Encoders and Scanners](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

