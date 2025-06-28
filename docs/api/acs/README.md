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

### [`acs_access_group`](./access_groups/README.md#acs_access_group)
Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.

Some access control systems use [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups), which are sets of users, combined with sets of permissions. These permissions include both the set of areas or assets that the users can access and the schedule during which the users can access these areas or assets. Instead of assigning access rights individually to each access control system user, which can be time-consuming and error-prone, administrators can assign users to an access group, thereby ensuring that the users inherit all the permissions associated with the access group. Using access groups streamlines the process of managing large numbers of access control system users, especially in bigger organizations or complexes.

To learn whether your access control system supports access groups, see the corresponding [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems).

---
### [`acs_credential`](./credentials/README.md#acs_credential)
Means by which an [access control system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) gains access at an [entrance](../../capability-guides/access-systems/retrieving-entrance-details.md). The `acs_credential` object represents a [credential](../../capability-guides/access-systems/managing-credentials.md) that provides an ACS user access within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

An access control system generally uses digital means of access to authorize a user trying to get through a specific entrance. Examples of credentials include plastic key cards, mobile keys, biometric identifiers, and PIN codes. The electronic nature of these credentials, as well as the fact that access is centralized, enables both the rapid provisioning and rescinding of access and the ability to compile access audit logs.

For each `acs_credential`, you define the access method. You can also specify additional properties, such as a PIN code, depending on the credential type.

---
### [`acs_encoder`](./encoders/README.md#acs_encoder)
Represents a hardware device that encodes [credential](../../capability-guides/access-systems/managing-credentials.md) data onto physical cards within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Some access control systems require credentials to be encoded onto plastic key cards using a card encoder. This process involves the following two key steps:

1. Credential creation
   Configure the access parameters for the credential.
2. Card encoding
   Write the credential data onto the card using a compatible card encoder.

Separately, the Seam API also supports card scanning, which enables you to scan and read the encoded data on a card. You can use this action to confirm consistency with access control system records or diagnose discrepancies if needed.

See [Working with Card Encoders and Scanners](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

To verify if your access control system requires a card encoder, see the corresponding [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems).

---
### [`acs_entrance`](./entrances/README.md#acs_entrance)
Represents an [entrance](../../capability-guides/access-systems/retrieving-entrance-details.md) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

In an access control system, an entrance is a secured door, gate, zone, or other method of entry. You can list details for all the `acs_entrance` resources in your workspace or get these details for a specific `acs_entrance`. You can also list all entrances associated with a specific credential, and you can list all credentials associated with a specific entrance.

---
### [`acs_system`](./systems/README.md#acs_system)
Represents an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Within an `acs_system`, create [`acs_user`s](https://docs.seam.co/latest/api/acs/users#acs_user) and [`acs_credential`s](https://docs.seam.co/latest/api/acs/credentials#acs_credential) to grant access to the `acs_user`s.

For details about the resources associated with an access control system, see the [access control systems namespace](https://docs.seam.co/latest/api/acs).

---
### [`acs_user`](./users/README.md#acs_user)
Represents a [user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access system](https://docs.seam.co/latest/capability-guides/access-systems).

An access system user typically refers to an individual who requires access, like an employee or resident. Each user can possess multiple credentials that serve as their keys or identifiers for access. The type of credential can vary widely. For example, in the Salto system, a user can have a PIN code, a mobile app account, and a fob. In other platforms, it is not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can have a schedule or validity period.

For details about how to configure users in your access system, see the corresponding [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems).

---
