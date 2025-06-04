# ACS Users

## The acs_user Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

An `acs_user` typically refers to an individual who requires access, like an employee or resident. Each user can possess multiple credentials that serve as their keys or identifiers for access. The type of credential can vary widely. For example, in the Salto system, a user can have a PIN code, a mobile app account, and a fob. In other platforms, it is not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can have a schedule or validity period.

For details about how to configure `acs_user`s in your access control system, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="JSON" %}
```json
{
  access_schedule: [example value],
  acs_system_id: [example value],
  acs_user_id: [example value],
  connected_account_id: [example value],
  created_at: [example value],
  display_name: [example value],
  email: [example value],
  email_address: [example value],
  errors: [example value],
  external_type: [example value],
  external_type_display_name: [example value],
  full_name: [example value],
  hid_acs_system_id: [example value],
  is_managed: [example value],
  is_suspended: [example value],
  pending_mutations: [example value],
  phone_number: [example value],
  user_identity_email_address: [example value],
  user_identity_full_name: [example value],
  user_identity_id: [example value],
  user_identity_phone_number: [example value],
  warnings: [example value],
  workspace_id: [example value]
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`access_schedule`** *Object*

`starts_at` and `ends_at` timestamps for the [ACS user's](https://docs.seam.co/latest/capability-guides/access-systems/user-management) access.



<details>
  <summary>Child Properties</summary>

  <ul>
  <li>
    <strong><code>ends_at</code></strong> <i>Datetime</i>
    
      Date and time at which the user's access ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
  </li>
  <li>
    <strong><code>starts_at</code></strong> <i>Datetime</i>
    
      Date and time at which the user's access starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
  </li>
  </ul>
</details>

---

**`acs_system_id`** *UUID*

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`acs_user_id`** *UUID*

ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`connected_account_id`** *UUID*


      The ID of the [connected account](../../../core-concepts/connected-accounts/README.md) that is associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
    




---

**`created_at`** *Datetime*

Date and time at which the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created.




---

**`display_name`** *String*

Display name for the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`email`** *String*


{% hint style="warning" %}
**Deprecated**. use email_address.
{% endhint %}



---

**`email_address`** *String*

Email address of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

[**`errors`**](./#errors) *List* *of Objects*

Errors associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>deleted_externally</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was deleted from the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) outside of Seam.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Enum values:
  
    - <code>deleted_externally</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) could not be subscribed on Salto KS because the subscription limit has been exceeded.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Enum values:
  
    - <code>salto_ks_subscription_limit_exceeded</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>failed_to_create_on_acs_system</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not created on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Enum values:
  
    - <code>failed_to_create_on_acs_system</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>failed_to_update_on_acs_system</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not updated on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Enum values:
  
    - <code>failed_to_update_on_acs_system</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>failed_to_delete_on_acs_system</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not deleted on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Enum values:
  
    - <code>failed_to_delete_on_acs_system</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>latch_conflict_with_resident_user</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created from the Seam API but also exists on Mission Control. This is unsupported. Contact Seam [support](mailto:support@seam.co).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Enum values:
  
    - <code>latch_conflict_with_resident_user</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`external_type`** *Enum*

Brand-specific terminology for the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) type.


<details>
<summary>Enum values</summary>

- <code>pti_user</code>
- <code>brivo_user</code>
- <code>hid_credential_manager_user</code>
- <code>salto_site_user</code>
- <code>latch_user</code>
- <code>dormakaba_community_user</code>
- <code>salto_space_user</code>
</details>


---

**`external_type_display_name`** *String*

Display name that corresponds to the brand-specific terminology for the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) type.




---

**`full_name`** *String*

Full name of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`hid_acs_system_id`** *UUID*





---

**`is_managed`** *Boolean*





---

**`is_suspended`** *Boolean*

Indicates whether the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is currently [suspended](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users).




---

**`pending_mutations`** *List* *of Objects*

Pending mutations associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Seam is in the process of pushing these mutations to the integrated access system.




The specific structure of each object in this list depends on the value of its `mutation_code` field.

Variants:
<details>
<summary><code>creating</code></summary>

Seam is in the process of pushing a user creation to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Enum values:
  
    - <code>creating</code>
  
  
</details>
<details>
<summary><code>deleting</code></summary>

Seam is in the process of pushing a user deletion to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Enum values:
  
    - <code>deleting</code>
  
  
</details>
<details>
<summary><code>updating_user_information</code></summary>

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Enum values:
  
    - <code>updating_user_information</code>
  
  
  ---

  **`to`** *Object*
  
  
  
</details>
<details>
<summary><code>updating_access_schedule</code></summary>

Seam is in the process of pushing an access schedule update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Enum values:
  
    - <code>updating_access_schedule</code>
  
  
  ---

  **`to`** *Object*
  
  
  
</details>
<details>
<summary><code>updating_suspension_state</code></summary>

Seam is in the process of pushing a suspension state update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Enum values:
  
    - <code>updating_suspension_state</code>
  
  
  ---

  **`to`** *Object*
  
  
  
</details>
<details>
<summary><code>updating_group_membership</code></summary>

Seam is in the process of pushing an access group membership update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  Old access group membership.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Enum values:
  
    - <code>updating_group_membership</code>
  
  
  ---

  **`to`** *Object*
  
  
  New access group membership.
  
  
</details>

---

**`phone_number`** *String*

Phone number of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).




---

**`user_identity_email_address`** *String*

Email address of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`user_identity_full_name`** *String*

Full name of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`user_identity_id`** *String*

ID of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`user_identity_phone_number`** *String*

Phone number of the user identity associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).




---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>being_deleted</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is being deleted from the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is a temporary state, and the ACS user will be deleted shortly.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Enum values:
  
    - <code>being_deleted</code>
  
  
</details>
<details>
<summary><code>salto_ks_user_not_subscribed</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is not subscribed on Salto KS, so they cannot unlock doors or perform any actions. This occurs when the their access schedule hasn’t started yet, if their access schedule has ended, if the site has reached its limit for active users (subscription slots), or if they have been manually unsubscribed.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Enum values:
  
    - <code>salto_ks_user_not_subscribed</code>
  
  
</details>
<details>
<summary><code>unknown_issue_with_acs_user</code></summary>

An unknown issue occurred while syncing the state of this [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) with the provider. This issue may affect the proper functioning of this user.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Enum values:
  
    - <code>unknown_issue_with_acs_user</code>
  
  
</details>
<details>
<summary><code>latch_resident_user</code></summary>

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created on Latch Mission Control. Please use the Latch Mission Control to manage this user.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Enum values:
  
    - <code>latch_resident_user</code>
  
  
</details>

---

**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---


## Errors

**`deleted_externally`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was deleted from the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) outside of Seam.

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) could not be subscribed on Salto KS because the subscription limit has been exceeded.

---

**`failed_to_create_on_acs_system`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not created on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---

**`failed_to_update_on_acs_system`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not updated on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---

**`failed_to_delete_on_acs_system`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not deleted on the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---

**`latch_conflict_with_resident_user`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created from the Seam API but also exists on Mission Control. This is unsupported. Contact Seam [support](mailto:support@seam.co).

---


## Warnings

**`being_deleted`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is being deleted from the [access control system](https://docs.seam.co/latest/capability-guides/access-systems). This is a temporary state, and the ACS user will be deleted shortly.

---

**`salto_ks_user_not_subscribed`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is not subscribed on Salto KS, so they cannot unlock doors or perform any actions. This occurs when the their access schedule hasn’t started yet, if their access schedule has ended, if the site has reached its limit for active users (subscription slots), or if they have been manually unsubscribed.

---

**`unknown_issue_with_acs_user`**

An unknown issue occurred while syncing the state of this [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) with the provider. This issue may affect the proper functioning of this user.

---

**`latch_resident_user`**

Indicates that the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created on Latch Mission Control. Please use the Latch Mission Control to manage this user.

---


## Events

**`acs_user.created`**

An [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created.

<details>

<summary>Properties</summary>

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>acs_user_id</code></strong> <i>UUID</i>

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_user.created`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`acs_user.deleted`**

An [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was deleted.

<details>

<summary>Properties</summary>

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>acs_user_id</code></strong> <i>UUID</i>

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_user.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

## Endpoints


[**`/acs/users/add_to_access_group`**](./add_to_access_group.md)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/users/create`**](./create.md)

Creates a new [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/users/delete`**](./delete.md)

Deletes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) and invalidates the access system user's [credentials](../../../capability-guides/access-systems/managing-credentials.md).


[**`/acs/users/get`**](./get.md)

Returns a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/users/list`**](./list.md)

Returns a list of all [access system users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/users/list_accessible_entrances`**](./list_accessible_entrances.md)

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.


[**`/acs/users/remove_from_access_group`**](./remove_from_access_group.md)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/users/revoke_access_to_all_entrances`**](./revoke_access_to_all_entrances.md)

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/users/suspend`**](./suspend.md)

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an access system user revokes their access temporarily. To restore an access system user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.


[**`/acs/users/unsuspend`**](./unsuspend.md)

[Unsuspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#unsuspend-an-acs-user) a specified suspended [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). While [suspending an access system user](https://docs.seam.co/latest/api/acs/users/suspend) revokes their access temporarily, unsuspending the access system user restores their access.


[**`/acs/users/update`**](./update.md)

Updates the properties of a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


