# Users

## `acs_user`

### Properties

#### `access_schedule`

Format: `Object`

`starts_at` and `ends_at` timestamps for the `acs_user`'s access.

<details>
<summary>ends_at <code>datetime</code></summary>
Date and time at which the user's access ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
</details>
<details>
<summary>starts_at <code>datetime</code></summary>
Date and time at which the user's access starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
</details>

---

#### `acs_system_id`

Format: `ID`

ID of the access control system that contains the `acs_user`.


---

#### `acs_user_id`

Format: `ID`

ID of the `acs_user`.


---

#### `created_at`

Format: `Datetime`

Date and time at which the `acs_user` was created.


---

#### `display_name`

Format: `String`

Display name for the `acs_user`.


---

#### `email`

{% hint style="warning" %}
**Deprecated**. use email_address.
{% endhint %}

Format: `String`


---

#### `email_address`

Format: `String`

Email address of the `acs_user`.


---

#### `errors`

Format: `List`

Errors associated with the `acs_user`.


---

#### `external_type`

Format: `Enum`

Brand-specific terminology for the `acs_user` type.

Possible enum values:
- `pti_user`
- `brivo_user`
- `hid_credential_manager_user`
- `salto_site_user`
- `latch_user`
- `dormakaba_community_user`


---

#### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the `acs_user` type.


---

#### `full_name`

Format: `String`

Full name of the `acs_user`.


---

#### `hid_acs_system_id`

Format: `ID`


---

#### `is_managed`

Format: `Boolean`


---

#### `is_suspended`

Format: `Boolean`

Indicates whether the `acs_user` is currently [suspended](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users).


---

#### `phone_number`

Format: `String`

Phone number of the `acs_user` in E.164 format (for example, `+15555550100`).


---

#### `user_identity_email_address`

Format: `String`

Email address of the user identity associated with the `acs_user`.


---

#### `user_identity_full_name`

Format: `String`

Full name of the user identity associated with the `acs_user`.


---

#### `user_identity_id`

Format: `String`

ID of the user identity associated with the `acs_user`.


---

#### `user_identity_phone_number`

Format: `String`

Phone number of the user identity associated with the `acs_user` in E.164 format (for example, `+15555550100`).


---

#### `warnings`

Format: `List`

Warnings associated with the `acs_user`.


---

#### `workspace_id`

Format: `ID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the `acs_user`.


---

## Endpoints

### [`/acs/users/add_to_access_group`](./add_to_access_group.md)

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/users/create`](./create.md)

Creates a new [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/users/delete`](./delete.md)

Deletes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) and invalidates the ACS user's [credentials](../../../capability-guides/access-systems/managing-credentials.md).
### [`/acs/users/get`](./get.md)

Returns a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/users/list`](./list.md)

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/users/list_accessible_entrances`](./list_accessible_entrances.md)

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.
### [`/acs/users/remove_from_access_group`](./remove_from_access_group.md)

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).
### [`/acs/users/revoke_access_to_all_entrances`](./revoke_access_to_all_entrances.md)

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/users/suspend`](./suspend.md)

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.
### [`/acs/users/unsuspend`](./unsuspend.md)

[Unsuspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#unsuspend-an-acs-user) a specified suspended [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). While [suspending an ACS user](https://docs.seam.co/latest/api/acs/users/suspend) revokes their access temporarily, unsuspending the ACS user restores their access.
### [`/acs/users/update`](./update.md)

Updates the properties of a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
