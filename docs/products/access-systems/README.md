---
description: Learn about access systems and related concepts.
---

# 🏢 Access Systems

### What is an Access System?

Access Control Systems (ACSs) enable you to manage and monitor access to physical spaces, such as offices, residential complexes, and special-purpose facilities.

Instead of using mechanical keys, an ACS generally uses electronic means of access, like RFID cards, mobile keys, biometric identifiers, or PIN codes as credentials. This use of electronic means of access enables Seam to grant or rescind access easily, as well as to compile an audit log of when a key was used.

ACSs generally manage the following parameters:

* Who has access
* To which doors each person has access
* At what times each person can gain access
* Under what conditions each person is allowed access (for example, COVID test completed, ID verification, and so on)

The Seam API provides the capability to manage users and their access permissions. You can also issue credentials (such as PIN codes and key cards) to users.

### What Is a User?

A "user" typically refers to an individual who requires access, like an employee or resident. Each user can possess multiple "credentials" that serve as their keys or identifiers for access. The type of credential can vary widely. For example, in the [Salto](../../device-guides/salto-locks.md) system, a user can have a PIN code, a mobile app account, and a fob. In other platforms, it is not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can have a schedule or validity period.

### What Is an Access Group?

An "access group" is a set of users, combined with a set of permissions. These permissions include both the set of areas or assets that the users can access and the schedule during which the users can access these areas or assets. Instead of assigning access rights individually to each user, which can be time-consuming and error-prone, administrators can assign users to an access group, thereby ensuring that the users inherit all the permissions associated with the access group. Using access groups streamlines the process of managing large numbers of users, especially in bigger organizations or complexes.

### **Use Cases**

Leverage the Seam API for the following tasks:

* **Creating and managing users:** Streamline the process of adding and removing users, as well as defining users' access permissions.
* **Issuing and distributing credentials:** Automate issuing PIN codes, key cards, or mobile app passes to users.

### **Next Steps**

To learn how to manage users, check out our [User Management guide](user-management.md). For guidance on assigning users to access groups, see [Assigning Users to Access Groups](assigning-users-to-access-groups.md).&#x20;