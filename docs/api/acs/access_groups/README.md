# Access Groups

## `acs_access_group`

Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.
The `acs_access_group` object represents an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### `access_group_type`

{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

Format: `Enum`

Possible enum values:
- `pti_unit`
- `pti_access_level`
- `salto_ks_access_group`
- `brivo_group`
- `salto_space_group`
- `dormakaba_community_access_group`


---

### `access_group_type_display_name`

{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}

Format: `String`


---

### `acs_access_group_id`

Format: `ID`

ID of the access group.


---

### `acs_system_id`

Format: `ID`

ID of the access control system that contains the access group.


---

### `created_at`

Format: `Datetime`

Date and time at which the access group was created.


---

### `display_name`

Format: `String`


---

### `external_type`

Format: `Enum`

Brand-specific terminology for the access group type.

Possible enum values:
- `pti_unit`
- `pti_access_level`
- `salto_ks_access_group`
- `brivo_group`
- `salto_space_group`
- `dormakaba_community_access_group`


---

### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the access group type.


---

### `is_managed`

Format: `Boolean`


---

### `name`

Format: `String`

Name of the access group.


---

### `warnings`

Format: `List`

Warnings associated with the `acs_access_group`.


---

### `workspace_id`

Format: `ID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the access group.


---

## Endpoints

### [`/acs/access_groups/add_user`](./add_user.md)

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/access_groups/get`](./get.md)

Returns a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/access_groups/list`](./list.md)

Returns a list of all [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/access_groups/list_accessible_entrances`](./list_accessible_entrances.md)

Returns a list of all accessible entrances for a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/access_groups/list_users`](./list_users.md)

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/access_groups/remove_user`](./remove_user.md)

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
