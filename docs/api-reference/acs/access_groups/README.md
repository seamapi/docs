# Access Groups

## The acs_access_group Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Events](./#events)
- [Endpoints](./#endpoints)


Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.

Some access control systems use [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups), which are sets of users, combined with sets of permissions. These permissions include both the set of areas or assets that the users can access and the schedule during which the users can access these areas or assets. Instead of assigning access rights individually to each access control system user, which can be time-consuming and error-prone, administrators can assign users to an access group, thereby ensuring that the users inherit all the permissions associated with the access group. Using access groups streamlines the process of managing large numbers of access control system users, especially in bigger organizations or complexes.

To learn whether your access control system supports access groups, see the corresponding [system integration guide](https://docs.seam.co/device-and-system-integration-guides#access-control-systems).

{% tabs %}
{% tab title="ACS Access Group" %}

An access group resource.

```json
{
  "access_group_type": "salto_ks_access_group",
  "access_group_type_display_name": "Salto KS Access Group",
  "acs_access_group_id": "3f448826-9875-4947-9519-e468090a4f7d",
  "acs_system_id": "045baa77-6d06-40fe-a2cd-b82eef688f4a",
  "connected_account_id": "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
  "created_at": "2025-06-15T16:54:17.946453Z",
  "display_name": "Main Group",
  "errors": [],
  "external_type": "salto_ks_access_group",
  "external_type_display_name": "Salto KS Access Group",
  "is_managed": true,
  "name": "My Access Group",
  "pending_mutations": [],
  "warnings": [],
  "workspace_id": "ac19352c-869a-4209-9ce7-44c740a8b5d0"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`access_group_type`** *Enum*


{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

<details>
<summary>Enum values</summary>

- <code>pti_unit</code>
- <code>pti_access_level</code>
- <code>salto_ks_access_group</code>
- <code>brivo_group</code>
- <code>salto_space_group</code>
- <code>dormakaba_community_access_group</code>
- <code>dormakaba_ambiance_access_group</code>
- <code>avigilon_alta_group</code>
</details>


---

**`access_group_type_display_name`** *String*


{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}



---

**`access_schedule`** *Object*

`starts_at` and `ends_at` timestamps for the access group's access.



<details>
  <summary>Child Properties</summary>

  - <strong><code>ends_at</code></strong> <i>Datetime</i>
  
    Date and time at which the user's access ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

  - <strong><code>starts_at</code></strong> <i>Datetime</i>
  
    Date and time at which the user's access starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

---

**`acs_access_group_id`** *UUID*

ID of the access group.




---

**`acs_system_id`** *UUID*

ID of the access control system that contains the access group.




---

**`connected_account_id`** *UUID*

ID of the connected account that contains the access group.




---

**`created_at`** *Datetime*

Date and time at which the access group was created.




---

**`display_name`** *String*

Display name for the access group.




---

[**`errors`**](./#errors) *List* *of Objects*

Errors associated with the `acs_access_group`.




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>failed_to_create_on_acs_system</code></summary>

Indicates that the [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups) was not created on the [access system](https://docs.seam.co/low-level-apis/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>failed_to_create_on_acs_system</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`external_type`** *Enum*

Brand-specific terminology for the access group type.


<details>
<summary>Enum values</summary>

- <code>pti_unit</code>
- <code>pti_access_level</code>
- <code>salto_ks_access_group</code>
- <code>brivo_group</code>
- <code>salto_space_group</code>
- <code>dormakaba_community_access_group</code>
- <code>dormakaba_ambiance_access_group</code>
- <code>avigilon_alta_group</code>
</details>


---

**`external_type_display_name`** *String*

Display name that corresponds to the brand-specific terminology for the access group type.




---

**`is_managed`** *Boolean*

Indicates whether Seam manages the access group.




---

**`name`** *String*

Name of the access group.




---

**`pending_mutations`** *List* *of Objects*

Collection of pending mutations for the access group. Represents operations that have been requested but not yet completed on the integrated access system.




The specific structure of each object in this list depends on the value of its `mutation_code` field.

Variants:
<details>
<summary><code>creating</code></summary>

Seam is in the process of pushing an access group creation to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing an access group creation to the integrated access system.
  
  Enum values:
  
  - <code>creating</code>
  
  
</details>
<details>
<summary><code>deleting</code></summary>

Seam is in the process of pushing an access group deletion to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing an access group deletion to the integrated access system.
  
  Enum values:
  
  - <code>deleting</code>
  
  
</details>
<details>
<summary><code>deferring_deletion</code></summary>

This access group is scheduled for automatic deletion when its access window expires.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that this access group is scheduled for automatic deletion when its access window expires.
  
  Enum values:
  
  - <code>deferring_deletion</code>
  
  
</details>
<details>
<summary><code>updating_group_information</code></summary>

Seam is in the process of pushing an access group information update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  Old access group information.
  
  Child Properties
  
  - <strong><code>name</code></strong> <i>String</i>
    
      Name of the access group.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing updated access group information to the integrated access system.
  
  Enum values:
  
  - <code>updating_group_information</code>
  
  
  ---

  **`to`** *Object*
  
  
  New access group information.
  
  Child Properties
  
  - <strong><code>name</code></strong> <i>String</i>
    
      Name of the access group.
  
  
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
    
      Ending time for the access schedule.
  
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
    
      Ending time for the access schedule.
  
  - <strong><code>starts_at</code></strong> <i>Datetime</i>
    
      Starting time for the access schedule.
  
  
</details>
<details>
<summary><code>updating_user_membership</code></summary>

Seam is in the process of pushing a user membership update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  Old user membership.
  
  Child Properties
  
  - <strong><code>acs_user_id</code></strong> <i>UUID</i>
    
      Old user ID.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing updated user membership information to the integrated access system.
  
  Enum values:
  
  - <code>updating_user_membership</code>
  
  
  ---

  **`to`** *Object*
  
  
  New user membership.
  
  Child Properties
  
  - <strong><code>acs_user_id</code></strong> <i>UUID</i>
    
      New user ID.
  
  
</details>
<details>
<summary><code>updating_entrance_membership</code></summary>

Seam is in the process of pushing an entrance membership update to the integrated access system.

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`from`** *Object*
  
  
  Old entrance membership.
  
  Child Properties
  
  - <strong><code>acs_entrance_id</code></strong> <i>UUID</i>
    
      Old entrance ID.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that Seam is in the process of pushing updated entrance membership information to the integrated access system.
  
  Enum values:
  
  - <code>updating_entrance_membership</code>
  
  
  ---

  **`to`** *Object*
  
  
  New entrance membership.
  
  Child Properties
  
  - <strong><code>acs_entrance_id</code></strong> <i>UUID</i>
    
      New entrance ID.
  
  
</details>
<details>
<summary><code>deferring_user_membership_update</code></summary>

A scheduled user membership change is pending for this access group.

  **`acs_user_id`** *UUID*
  
  
  ID of the user involved in the scheduled change.
  
  
  ---

  **`created_at`** *Datetime*
  
  
  Date and time at which the mutation was created.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the mutation.
  
  
  ---

  **`mutation_code`** *Enum*
  
  
  Mutation code to indicate that a scheduled user membership change is pending for this access group.
  
  Enum values:
  
  - <code>deferring_user_membership_update</code>
  
  
  ---

  **`variant`** *Enum*
  
  
  Whether the user is scheduled to be added to or removed from this access group.
  
  Enum values:
  
  - <code>adding</code>
  - <code>removing</code>
  
  
</details>

---

**`warnings`** *List* *of Objects*

Warnings associated with the `acs_access_group`.



<details>
  <summary>Child Object Properties</summary>
<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which Seam created the warning.

<strong><code>message</code></strong> <i>String</i>

  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

<strong><code>warning_code</code></strong> <i>Enum</i>

  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
<details>
    <summary>Enum values:</summary>

    - <code>unknown_issue_with_acs_access_group</code>
    - <code>being_deleted</code>
</details>

</details>

---

**`workspace_id`** *UUID*

ID of the workspace that contains the access group.




---


## Errors

**`failed_to_create_on_acs_system`**

Indicates that the [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups) was not created on the [access system](https://docs.seam.co/low-level-apis/access-systems). This is likely due to an internal unexpected error. Contact Seam [support](mailto:support@seam.co).

---


## Events

**`acs_access_group.deleted`**

An ACS access group was deleted.

<details>

<summary>Properties</summary>

<strong><code>acs_access_group_id</code></strong> <i>UUID</i>

  ID of the affected access group.

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_access_group.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

## Endpoints


[**`/acs/access_groups/add_user`**](./add_user.md)

Adds a specified [access system user](https://docs.seam.co/low-level-apis/access-systems/user-management) to a specified [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups).


[**`/acs/access_groups/delete`**](./delete.md)

Deletes a specified [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups).


[**`/acs/access_groups/get`**](./get.md)

Returns a specified [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups).


[**`/acs/access_groups/list`**](./list.md)

Returns a list of all [access groups](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups).


[**`/acs/access_groups/list_accessible_entrances`**](./list_accessible_entrances.md)

Returns a list of all accessible entrances for a specified [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups).


[**`/acs/access_groups/list_users`**](./list_users.md)

Returns a list of all [access system users](https://docs.seam.co/low-level-apis/access-systems/user-management) in an [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups).


[**`/acs/access_groups/remove_user`**](./remove_user.md)

Removes a specified [access system user](https://docs.seam.co/low-level-apis/access-systems/user-management) from a specified [access group](https://docs.seam.co/low-level-apis/access-systems/user-management/assigning-users-to-access-groups).


