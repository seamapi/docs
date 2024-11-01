# Access Groups

## `acs_access_group`


    Group that defines the entrances to which a set of users has access and, in some cases, the access schedule for these entrances and users.
    
    The `acs_access_group` object represents an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).
  

### Properties

#### `access_group_type`

{% hint style="warning" %}
**Deprecated**. use external_type
{% endhint %}

Format: `Enum`

Possible enum values:
- `pti_unit`
- `pti_access_level`
- `salto_access_group`
- `brivo_group`


---

#### `access_group_type_display_name`

{% hint style="warning" %}
**Deprecated**. use external_type_display_name
{% endhint %}

Format: `String`


---

#### `acs_access_group_id`

Format: `ID`

ID of the access group.


---

#### `acs_system_id`

Format: `ID`

ID of the access control system that contains the access group.


---

#### `created_at`

Format: `Datetime`

Date and time at which the access group was created.


---

#### `display_name`

Format: `String`


---

#### `external_type`

Format: `Enum`

Brand-specific terminology for the access group type.

Possible enum values:
- `pti_unit`
- `pti_access_level`
- `salto_access_group`
- `brivo_group`


---

#### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the access group type.


---

#### `is_managed`

Format: `Boolean`


---

#### `name`

Format: `String`

Name of the access group.


---

#### `workspace_id`

Format: `ID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the access group.


---

## `acs_entrance`

### Properties

#### `acs_entrance_id`

Format: `ID`

ID of the entrance.


---

#### `acs_system_id`

Format: `ID`

ID of the access control system that contains the entrance.


---

#### `assa_abloy_vostio_metadata`

Format: `Object`

<details>
<summary>door_name <code>string</code></summary>
</details>
<details>
<summary>door_number <code>number</code></summary>
</details>
<details>
<summary>door_type <code>enum</code></summary>
</details>
<details>
<summary>pms_id <code>string</code></summary>
</details>
<details>
<summary>stand_open <code>boolean</code></summary>
</details>

---

#### `created_at`

Format: `Datetime`

Date and time at which the entrance was created.


---

#### `display_name`

Format: `String`

Display name for the entrance.


---

#### `dormakaba_community_metadata`

Format: `Object`

<details>
<summary>access_point_name <code>string</code></summary>
</details>

---

#### `errors`

Format: `List`


---

#### `latch_metadata`

Format: `Object`

<details>
<summary>accessibility_type <code>string</code></summary>
</details>
<details>
<summary>door_name <code>string</code></summary>
</details>
<details>
<summary>door_type <code>string</code></summary>
</details>
<details>
<summary>is_connected <code>boolean</code></summary>
</details>

---

#### `salto_ks_metadata`

Format: `Object`

<details>
<summary>battery_level <code>string</code></summary>
</details>
<details>
<summary>door_name <code>string</code></summary>
</details>
<details>
<summary>intrusion_alarm <code>boolean</code></summary>
</details>
<details>
<summary>left_open_alarm <code>boolean</code></summary>
</details>
<details>
<summary>lock_type <code>string</code></summary>
</details>
<details>
<summary>locked_state <code>string</code></summary>
</details>
<details>
<summary>online <code>boolean</code></summary>
</details>
<details>
<summary>privacy_mode <code>boolean</code></summary>
</details>

---

#### `visionline_metadata`

Format: `Object`

<details>
<summary>door_category <code>enum</code></summary>
</details>
<details>
<summary>door_name <code>string</code></summary>
</details>
<details>
<summary>profiles <code>list</code></summary>
</details>

---

## `acs_user`

### Properties

#### `access_schedule`

Format: `Object`

`starts_at` and `ends_at` timestamps for the `acs_user`'s access.

<details>
<summary>ends_at <code>datetime</code></summary>
</details>
<details>
<summary>starts_at <code>datetime</code></summary>
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
