## `acs_system`

### `acs_system_id`

Type: `string`\
Format: `string`

ID of the `acs_system`.

---

### `can_add_acs_users_to_acs_access_groups`

Type: `Boolean`\
Format: `boolean`

Indicates whether the `acs_system` supports [adding users to access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

---

### `can_automate_enrollment`

Type: `Boolean`\
Format: `boolean`

Indicates whether it is possible to [launch enrollment automations](../../../capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut.md) for the `acs_system`.

---

### `can_create_acs_access_groups`

Type: `Boolean`\
Format: `boolean`

Indicates whether the `acs_system` supports creating [access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

---

### `can_remove_acs_users_from_acs_access_groups`

Type: `Boolean`\
Format: `boolean`

Indicates whether the `acs_system` supports [removing users from access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

---

### `connected_account_ids`

Type: `array`\
Format: `list`

IDs of the [connected accounts](../../../core-concepts/connected-accounts.md) associated with the `acs_system`.

---

### `created_at`

Type: `string`\
Format: `string`

Date and time at which the `acs_system` was created.

---

### `errors`

Type: `array`\
Format: `list`

Errors associated with the `acs_system`.

---

### `external_type`

Type: `string`\
Format: `enum`

Brand-specific terminology for the `acs_system` type.

---

### `external_type_display_name`

Type: `string`\
Format: `string`

Display name that corresponds to the brand-specific terminology for the `acs_system` type.

---

### `image_alt_text`

Type: `string`\
Format: `string`

Alternative text for the `acs_system` image.

---

### `image_url`

Type: `string`\
Format: `string`

URL for the image that represents the `acs_system`.

---

### `name`

Type: `string`\
Format: `string`

Name of the `acs_system`.

---

### `system_type`

{% hint style="warning" %}
**Deprecated** use something else.
{% endhint %}

Type: `string`\
Format: `enum`

---

### `system_type_display_name`

{% hint style="warning" %}
**Deprecated** use something else.
{% endhint %}

Type: `string`\
Format: `string`

---

### `visionline_metadata`

Type: `object`\
Format: `record`

---

### `warnings`

Type: `array`\
Format: `list`

Warnings associated with the `acs_system`.

---

### `workspace_id`

Type: `string`\
Format: `string`

ID of the [workspace](../../../core-concepts/workspaces.md) that contains the `acs_system`.

---

## Endpoints

### [`/acs/systems/get`](.//acs/systems/get.md)

Returns a specified [access control system](../../../capability-guides/access-systems.md).

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.

---

### [`/acs/systems/list`](.//acs/systems/list.md)

Returns a list of all [access control systems](../../../capability-guides/access-systems.md).

To filter the list of returned access control systems by a specific connected account ID, include the 
`connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the 
response includes all access control systems connected to your workspace.

---

### [`/acs/systems/list_compatible_credential_manager_acs_systems`](.//acs/systems/list_compatible_credential_manager_acs_systems.md)

Returns a list of all credential manager ACS systems that are compatible with a specified 
[access control system](../../../capability-guides/access-systems.md).

Specify the ACS system for which you want to retrieve all compatible credential manager ACS 
systems by including the corresponding `acs_system_id` in the request body.

---

## Events