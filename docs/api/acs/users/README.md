# ACS Users

## The acs_user Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access system](https://docs.seam.co/latest/capability-guides/access-systems).

An access system user typically refers to an individual who requires access, like an employee or resident. Each user can possess multiple credentials that serve as their keys or identifiers for access. The type of credential can vary widely. For example, in the Salto system, a user can have a PIN code, a mobile app account, and a fob. In other platforms, it is not uncommon for a user to have more than one of the same credential type, such as multiple key cards. Additionally, these credentials can have a schedule or validity period.

For details about how to configure users in your access system, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="ACS User" %}

An access system user resource.

```json
{
  "access_schedule": {
    "ends_at": "2025-06-12T11:00:00.000Z",
    "starts_at": "2025-06-10T15:00:00.000Z"
  },
  "acs_system_id": "62d3384f-267f-4a4a-a946-d35819ec9981",
  "acs_user_id": "6a5d9697-3cc4-436a-8165-4375ff424870",
  "connected_account_id": "c0175797-30f0-49f7-a228-2df115443ca7",
  "created_at": "2025-06-15T16:54:17.946482Z",
  "display_name": "Jane Doe",
  "email_address": "jane@example.com",
  "errors": [],
  "external_type": "salto_site_user",
  "external_type_display_name": "Salto site user",
  "full_name": "Jane Doe",
  "hid_acs_system_id": "2acbe47f-612c-422a-9205-7af292f74e7f",
  "is_managed": true,
  "is_suspended": false,
  "last_successful_sync_at": "2025-06-18T17:45:00.582Z",
  "pending_mutations": [
    {
      "to": { "acs_access_group_id": "2c0fb4a0-2b42-4651-926e-1a10bedbf6ce" },
      "from": { "acs_access_group_id": "f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f" },
      "message": "This user's access membership is being updated.",
      "created_at": "2025-06-18T17:57:01.867Z",
      "mutation_code": "updating_group_membership"
    }
  ],
  "phone_number": "+1555551000",
  "user_identity_email_address": "jane@example.com",
  "user_identity_full_name": "Jane Doe",
  "user_identity_id": "a23b3e02-e394-4e5f-b21c-b366b8bc0dd3",
  "user_identity_phone_number": "+1555551000",
  "warnings": [],
  "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`access_schedule`** *Object*

`starts_at` and `ends_at` timestamps for the [access system user's](https://docs.seam.co/latest/capability-guides/access-systems/user-management) access.



<details>
  <summary>Child Properties</summary>

  - <strong><code>ends_at</code></strong> <i>Datetime</i>
  
    Date and time at which the user's access ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

  - <strong><code>starts_at</code></strong> <i>Datetime</i>
  
    Date and time at which the user's access starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

---

**`acs_system_id`** *UUID*

ID of the [access system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`acs_user_id`** *UUID*

ID of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`connected_account_id`** *UUID*

The ID of the [connected account](../../../core-concepts/connected-accounts/README.md) that is associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`created_at`** *Datetime*

Date and time at which the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created.




---

**`display_name`** *String*

Display name for the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`email`** *String*


{% hint style="warning" %}
**Deprecated**. use email_address.
{% endhint %}



---

**`email_address`** *String*

Email address of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

[**`errors`**](./#errors) *List* *of Objects*

Errors associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>deleted_externally</code></summary>

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was deleted from the [access system](https://docs.seam.co/latest/capability-guides/access-systems) outside of Seam.

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

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) could not be subscribed on Salto KS because the subscription limit has been exceeded.

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

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not created on the [access system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

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

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not updated on the [access system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

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

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not deleted on the [access system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

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

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created from the Seam API but also exists on Mission Control. This is unsupported. Contact Seam [support](mailto:support@seam.co).

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

Brand-specific terminology for the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) type.


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

Display name that corresponds to the brand-specific terminology for the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) type.




---

**`full_name`** *String*

Full name of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`hid_acs_system_id`** *UUID*





---

**`is_managed`** *Boolean*





---

**`is_suspended`** *Boolean*

Indicates whether the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is currently [suspended](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users).




---

**`pending_mutations`** *List* *of Objects*

Pending mutations associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Seam is in the process of pushing these mutations to the integrated access system.




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
  
  
  Mutation code to indicate that Seam is in the process of pushing a user creation to the integrated access system.
  
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
  
  
  Mutation code to indicate that Seam is in the process of pushing a user deletion to the integrated access system.
  
  Enum values:
  
  - <code>deleting</code>
  
  
</details>
<details>
<summary><code>deferring_creation</code></summary>

User exists in Seam but has not been pushed to the provider yet. Will be created when a credential is issued.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is intentionally deferring the creation of the user on the access control system until the appropriate time.
  
  Enum values:
  
  - <code>deferring_creation</code>
  
  
  ---

  **`scheduled_at`** *Datetime*
  
  
  Optional: When the user creation is scheduled to occur.
  
  
</details>
<details>
<summary><code>updating_user_information</code></summary>

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  Old access system user information.
  
  Child Properties
  
  - <strong><code>email_address</code></strong> <i>String</i>
    
      Email address of the access system user.
  
  - <strong><code>full_name</code></strong> <i>String</i>
    
      Full name of the access system user.
  
  - <strong><code>phone_number</code></strong> <i>String</i>
    
      Phone number of the access system user.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing updated user information to the integrated access system.
  
  Enum values:
  
  - <code>updating_user_information</code>
  
  
  ---

  **`to`** *Object*
  
  
  New access system user information.
  
  Child Properties
  
  - <strong><code>email_address</code></strong> <i>String</i>
    
      Email address of the access system user.
  
  - <strong><code>full_name</code></strong> <i>String</i>
    
      Full name of the access system user.
  
  - <strong><code>phone_number</code></strong> <i>String</i>
    
      Phone number of the access system user.
  
  
</details>
<details>
<summary><code>updating_access_schedule</code></summary>

Seam is in the process of pushing an access schedule update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  Old access schedule information.
  
  Child Properties
  
  - <strong><code>ends_at</code></strong> <i>Datetime</i>
    
      Starting time for the access schedule.
  
  - <strong><code>starts_at</code></strong> <i>Datetime</i>
    
      Starting time for the access schedule.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing updated access schedule information to the integrated access system.
  
  Enum values:
  
  - <code>updating_access_schedule</code>
  
  
  ---

  **`to`** *Object*
  
  
  New access schedule information.
  
  Child Properties
  
  - <strong><code>ends_at</code></strong> <i>Datetime</i>
    
      Starting time for the access schedule.
  
  - <strong><code>starts_at</code></strong> <i>Datetime</i>
    
      Starting time for the access schedule.
  
  
</details>
<details>
<summary><code>updating_suspension_state</code></summary>

Seam is in the process of pushing a suspension state update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  Old user suspension state information.
  
  Child Properties
  
  - <strong><code>is_suspended</code></strong> <i>Boolean</i>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing updated user suspension state information to the integrated access system.
  
  Enum values:
  
  - <code>updating_suspension_state</code>
  
  
  ---

  **`to`** *Object*
  
  
  New user suspension state information.
  
  Child Properties
  
  - <strong><code>is_suspended</code></strong> <i>Boolean</i>
  
  
</details>
<details>
<summary><code>updating_group_membership</code></summary>

Seam is in the process of pushing an access group membership update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  Old access group membership.
  
  Child Properties
  
  - <strong><code>acs_access_group_id</code></strong> <i>UUID</i>
    
      Old access group ID.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing updated access group membership information to the integrated access system.
  
  Enum values:
  
  - <code>updating_group_membership</code>
  
  
  ---

  **`to`** *Object*
  
  
  New access group membership.
  
  Child Properties
  
  - <strong><code>acs_access_group_id</code></strong> <i>UUID</i>
    
      New access group ID.
  
  
</details>

---

**`phone_number`** *String*

Phone number of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).




---

**`salto_space_metadata`** *Object*

Salto Space-specific metadata associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).



<details>
  <summary>Child Properties</summary>

  - <strong><code>audit_openings</code></strong> <i>Boolean</i>
  
    Indicates whether AuditOpenings is enabled for the user in the Salto Space access system.

</details>

---

**`user_identity_email_address`** *String*

Email address of the user identity associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`user_identity_full_name`** *String*

Full name of the user identity associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`user_identity_id`** *String*

ID of the user identity associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---

**`user_identity_phone_number`** *String*

Phone number of the user identity associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).




---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>being_deleted</code></summary>

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is being deleted from the [access system](https://docs.seam.co/latest/capability-guides/access-systems). This is a temporary state, and the access system user will be deleted shortly.

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

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is not subscribed on Salto KS, so they cannot unlock doors or perform any actions. This occurs when the their access schedule hasn’t started yet, if their access schedule has ended, if the site has reached its limit for active users (subscription slots), or if they have been manually unsubscribed.

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

An unknown issue occurred while syncing the state of this [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) with the provider. This issue may affect the proper functioning of this user.

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

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created on Latch Mission Control. Please use the Latch Mission Control to manage this user.

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

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).




---


## Errors

**`deleted_externally`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was deleted from the [access system](https://docs.seam.co/latest/capability-guides/access-systems) outside of Seam.

---

**`failed_to_create_on_acs_system`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not created on the [access system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---

**`failed_to_delete_on_acs_system`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not deleted on the [access system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---

**`failed_to_update_on_acs_system`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was not updated on the [access system](https://docs.seam.co/latest/capability-guides/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---

**`latch_conflict_with_resident_user`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created from the Seam API but also exists on Mission Control. This is unsupported. Contact Seam [support](mailto:support@seam.co).

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) could not be subscribed on Salto KS because the subscription limit has been exceeded.

---


## Warnings

**`being_deleted`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is being deleted from the [access system](https://docs.seam.co/latest/capability-guides/access-systems). This is a temporary state, and the access system user will be deleted shortly.

---

**`latch_resident_user`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) was created on Latch Mission Control. Please use the Latch Mission Control to manage this user.

---

**`salto_ks_user_not_subscribed`**

Indicates that the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) is not subscribed on Salto KS, so they cannot unlock doors or perform any actions. This occurs when the their access schedule hasn’t started yet, if their access schedule has ended, if the site has reached its limit for active users (subscription slots), or if they have been manually unsubscribed.

---

**`unknown_issue_with_acs_user`**

An unknown issue occurred while syncing the state of this [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) with the provider. This issue may affect the proper functioning of this user.

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

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
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

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
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


