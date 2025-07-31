# Access Groups

## The acs_access_group Object

- [Properties](./#properties)
- [Events](./#events)
- [Endpoints](./#endpoints)


Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.

Some access control systems use [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups), which are sets of users, combined with sets of permissions. These permissions include both the set of areas or assets that the users can access and the schedule during which the users can access these areas or assets. Instead of assigning access rights individually to each access control system user, which can be time-consuming and error-prone, administrators can assign users to an access group, thereby ensuring that the users inherit all the permissions associated with the access group. Using access groups streamlines the process of managing large numbers of access control system users, especially in bigger organizations or complexes.

To learn whether your access control system supports access groups, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

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
  "external_type": "salto_ks_access_group",
  "external_type_display_name": "Salto KS Access Group",
  "is_managed": true,
  "name": "My Access Group",
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
</details>


---

**`access_group_type_display_name`** *String*


{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}



---

**`acs_access_group_id`** *UUID*

ID of the access group.




---

**`acs_system_id`** *UUID*

ID of the access control system that contains the access group.




---

**`connected_account_id`** *UUID*

ID of the [connected account](../../../core-concepts/connected-accounts/README.md) that contains the access group.




---

**`created_at`** *Datetime*

Date and time at which the access group was created.




---

**`display_name`** *String*





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
</details>


---

**`external_type_display_name`** *String*

Display name that corresponds to the brand-specific terminology for the access group type.




---

**`is_managed`** *Boolean*





---

**`name`** *String*

Name of the access group.




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
</details>

</details>

---

**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the access group.




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

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/acs/access_groups/add_user`**](./add_user.md)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/access_groups/get`**](./get.md)

Returns a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/access_groups/list`**](./list.md)

Returns a list of all [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/access_groups/list_accessible_entrances`**](./list_accessible_entrances.md)

Returns a list of all accessible entrances for a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/access_groups/list_users`**](./list_users.md)

Returns a list of all [access system users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


[**`/acs/access_groups/remove_user`**](./remove_user.md)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


