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

