# 🏢 Access Systems

### What is an Access System?

Access Control Systems (ACS) are used for managing and monitoring access to physical spaces such as offices, residential complexes, and special-purpose facilities.

Instead of using mechanical keys, ACS generally uses electronic means of access, like RFID cards, mobile keys, biometric identifiers, or pin codes as credentials. This allows us to easily grant or rescind access, and compile an audit log of when a key has been used.

ACS generally manage the following parameters:

* Who has access
* Which doors they have access to
* What times they can gain access
* Under what conditions they’re allowed access (i.e. covid test, ID verification, etc.)

Seam's API provides the capability to manage users and their access permission. You'll also be able to issue credentials (such as pin codes and key cards) to the users.

### What is a User?

A "User" typically refers to an individual who requires access, like an employee or a resident. Each user can possess multiple "Credentials" which serve as their keys or identifiers for access. The type of credential can vary widely; for example, in the Salto system, a user can have a pin code, a mobile app account, and a fob. On other platforms, it's not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can come with a schedule or validity period.

### What is an Access Group?

An "Access Group" is a predefined set of permissions that dictate which areas or assets a user can access. Instead of assigning access rights individually to each user, which can be time-consuming and error-prone, administrators can assign users to an Access Group, ensuring they inherit all the permissions associated with that group. This streamlines the process of managing large numbers of users, especially in bigger organizations or complexes.

### **Use Cases**

Leverage Seam's API for:

* **Creating and Managing Users:** Streamline the process of adding, removing users, and defining their access permissions.
* **Issuing and Distributing Credentials:** Automate issuing pin codes, key cards, or mobile app passes to users.

### **Next Steps**

To learn how to manage users, check out our guide [here](user-management.md). For guidance on assigning users to access groups, refer to [our guide here](assigning-users-to-access-groups.md).&#x20;
