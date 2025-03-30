# Enrollment Automations

The Enrollment Automations route contains the following resources:

## The `enrollment_automation` Resource

Represents an [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) within the [Seam mobile access solution](https://docs.seam.co/latest/capability-guides/mobile-access-in-development).

## Properties

**`created_at`** *Datetime*

Date and time at which the enrollment automation was created.


---
**`credential_manager_acs_system_id`** *UUID*

ID of the associated [ACS system](https://docs.seam.co/latest/capability-guides/access-systems) that serves as the credential manager.


---
**`enrollment_automation_id`** *UUID*

ID of the enrollment automation.


---
**`user_identity_id`** *UUID*

ID of the associated [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


---
**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the enrollment automation.


---
## Endpoints

[**`/user_identities/enrollment_automations/delete`**](./delete.md)

Deletes a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system). You must delete all enrollment automations associated with a [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) before [deleting the user identity](https://docs.seam.co/latest/api/user_identities/delete).

[**`/user_identities/enrollment_automations/get`**](./get.md)

Returns a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).

[**`/user_identities/enrollment_automations/launch`**](./launch.md)

Sets up a new [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) with a specified [credential manager](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).

[**`/user_identities/enrollment_automations/list`**](./list.md)

Returns a list of all [enrollment automations](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


---

## Events

**`enrollment_automation.deleted`**

An [enrollment automation](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut) was deleted.

<details>

<summary>Properties</summary>

- <b><code>created_at</code></b> <i>Datetime</i>

  Date and time at which the event was created.



- <b><code>enrollment_automation_id</code></b> <i>UUID</i>

  ID of the [enrollment automation](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut).



- <b><code>event_id</code></b> <i>UUID</i>

  ID of the event.



- <b><code>event_type</code></b> <i>String</i>



- <b><code>occurred_at</code></b> <i>Datetime</i>

  Date and time at which the event occurred.



- <b><code>workspace_id</code></b> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

