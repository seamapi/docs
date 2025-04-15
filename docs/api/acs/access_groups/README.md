# Access Groups

## The acs_access_group Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.

Some access control systems use [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups), which are sets of users, combined with sets of permissions. These permissions include both the set of areas or assets that the users can access and the schedule during which the users can access these areas or assets. Instead of assigning access rights individually to each access control system user, which can be time-consuming and error-prone, administrators can assign users to an access group, thereby ensuring that the users inherit all the permissions associated with the access group. Using access groups streamlines the process of managing large numbers of access control system users, especially in bigger organizations or complexes.

To learn whether your access control system supports access groups, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="JSON" %}
```json
{
  access_group_type: [example value],
  access_group_type_display_name: [example value],
  acs_access_group_id: [example value],
  acs_system_id: [example value],
  created_at: [example value],
  display_name: [example value],
  external_type: [example value],
  external_type_display_name: [example value],
  is_managed: [example value],
  name: [example value],
  warnings: [example value],
  workspace_id: [example value]
}
```
{% endtab %}
{% endtabs %}

---

## Properties

<table>
<tr><th width="250">Property</th><th>Description</th></tr>
<tr><td><strong><code>access_group_type</code></strong> <i>Enum</i></td>
<td>
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


</td></tr>

<tr><td><strong><code>access_group_type_display_name</code></strong> <i>String</i></td>
<td>
{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}


</td></tr>

<tr><td><strong><code>acs_access_group_id</code></strong> <i>UUID</i></td>
<td>
ID of the access group.


</td></tr>

<tr><td><strong><code>acs_system_id</code></strong> <i>UUID</i></td>
<td>
ID of the access control system that contains the access group.


</td></tr>

<tr><td><strong><code>created_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the access group was created.


</td></tr>

<tr><td><strong><code>display_name</code></strong> <i>String</i></td>
<td>

</td></tr>

<tr><td><strong><code>external_type</code></strong> <i>Enum</i></td>
<td>
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


</td></tr>

<tr><td><strong><code>external_type_display_name</code></strong> <i>String</i></td>
<td>
Display name that corresponds to the brand-specific terminology for the access group type.


</td></tr>

<tr><td><strong><code>is_managed</code></strong> <i>Boolean</i></td>
<td>

</td></tr>

<tr><td><strong><code>name</code></strong> <i>String</i></td>
<td>
Name of the access group.


</td></tr>

<tr><td><strong><code>warnings</code></strong> <i>List</i> <i>of Objects</i></td>
<td>
Warnings associated with the `acs_access_group`.

<details>

<summary>Child Object Properties</summary>

- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which Seam created the warning.



- <strong><code>message</code></strong> <i>String</i>

  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.



- <strong><code>warning_code</code></strong> <i>String</i>

  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.


</details>


</td></tr>

<tr><td><strong><code>workspace_id</code></strong> <i>UUID</i></td>
<td>
ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the access group.


</td></tr>

</table>

## Events

<table>
<tr><th width="250">Event</th><th>Description</th></tr>
<tr><td><strong><code>acs_access_group.deleted</code></strong></td>
<td>
An ACS access group was deleted.

<details>

<summary>Properties</summary>

- <strong><code>acs_access_group_id</code></strong> <i>UUID</i>



- <strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

</td></tr>
</table>

## Endpoints

<table>
<tr><th width="250">Endpoint</th><th>Description</th></tr>

<tr><td><a href="./add_user.md"><strong><code>/acs/access_groups/add_user</code></strong></a></td>

<td>Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).</td></tr>


<tr><td><a href="./get.md"><strong><code>/acs/access_groups/get</code></strong></a></td>

<td>Returns a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).</td></tr>


<tr><td><a href="./list.md"><strong><code>/acs/access_groups/list</code></strong></a></td>

<td>Returns a list of all [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).</td></tr>


<tr><td><a href="./list_accessible_entrances.md"><strong><code>/acs/access_groups/list_accessible_entrances</code></strong></a></td>

<td>Returns a list of all accessible entrances for a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).</td></tr>


<tr><td><a href="./list_users.md"><strong><code>/acs/access_groups/list_users</code></strong></a></td>

<td>Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).</td></tr>


<tr><td><a href="./remove_user.md"><strong><code>/acs/access_groups/remove_user</code></strong></a></td>

<td>Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).</td></tr>

</table>
