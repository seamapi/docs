# Access Groups

The Access Groups route contains the following resources:

## The `acs_access_group` Resource

Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.

Some access control systems use [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups), which are sets of users, combined with sets of permissions. These permissions include both the set of areas or assets that the users can access and the schedule during which the users can access these areas or assets. Instead of assigning access rights individually to each access control system user, which can be time-consuming and error-prone, administrators can assign users to an access group, thereby ensuring that the users inherit all the permissions associated with the access group. Using access groups streamlines the process of managing large numbers of access control system users, especially in bigger organizations or complexes.

To learn whether your access control system supports access groups, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

## Properties

**`access_group_type`** *Enum*

{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

<details>

<summary>Enum values</summary>

- `pti_unit`
- `pti_access_level`
- `salto_ks_access_group`
- `brivo_group`
- `salto_space_group`
- `dormakaba_community_access_group`
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
**`created_at`** *Datetime*

Date and time at which the access group was created.


---
**`display_name`** *String*


---
**`external_type`** *Enum*

Brand-specific terminology for the access group type.

<details>

<summary>Enum values</summary>

- `pti_unit`
- `pti_access_level`
- `salto_ks_access_group`
- `brivo_group`
- `salto_space_group`
- `dormakaba_community_access_group`
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


- <b><code>created_at</code></b> <i>Datetime</i>

  Date and time at which Seam created the warning.



- <b><code>message</code></b> <i>String</i>

  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.



- <b><code>warning_code</code></b> <i>String</i>

  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.



---
**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the access group.


---
## Endpoints


---

## Events

**`acs_access_group.deleted`**

An ACS access group was deleted.

<details>

<summary>Properties</summary>

- <b><code>acs_access_group_id</code></b> <i>UUID</i>



- <b><code>acs_system_id</code></b> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <b><code>connected_account_id</code></b> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <b><code>created_at</code></b> <i>Datetime</i>

  Date and time at which the event was created.



- <b><code>event_id</code></b> <i>UUID</i>

  ID of the event.



- <b><code>event_type</code></b> <i>String</i>



- <b><code>occurred_at</code></b> <i>Datetime</i>

  Date and time at which the event occurred.



- <b><code>workspace_id</code></b> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

