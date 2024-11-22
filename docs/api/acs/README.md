---
description: Systems for managing and monitoring access to physical spaces
---

# Access Control Systems

## Core Components

### 1. Acs System
- **API Object:** `acs_system`
- **Description:** Represents an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### 2. Acs User
- **API Object:** `acs_user`
- **Description:** 

### 3. Acs Entrance
- **API Object:** `acs_entrance`
- **Description:** Represents an [entrance](../../capability-guides/access-systems/retrieving-entrance-details.md) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### 4. Acs Access Group
- **API Object:** `acs_access_group`
- **Description:** Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.
The `acs_access_group` object represents an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### 5. Acs Credential
- **API Object:** `acs_credential`
- **Description:** Means by which a user gains access at an entrance.
The `acs_credential` object represents a credential that provides an ACS user access within an access control system. For each acs_credential object, you define the access method. You can also specify additional properties, such as a code.

