
## `acs_system`

### `acs_system_id`

ID of the `acs_system`.

Type: `string`
Format: `string`
---

### `can_add_acs_users_to_acs_access_groups`

Indicates whether the `acs_system` supports [adding users to access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

Type: `boolean`
Format: `boolean`
---

### `can_automate_enrollment`

Indicates whether it is possible to [launch enrollment automations](../../../capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut.md) for the `acs_system`.

Type: `boolean`
Format: `boolean`
---

### `can_create_acs_access_groups`

Indicates whether the `acs_system` supports creating [access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

Type: `boolean`
Format: `boolean`
---

### `can_remove_acs_users_from_acs_access_groups`

Indicates whether the `acs_system` supports [removing users from access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

Type: `boolean`
Format: `boolean`
---

### `connected_account_ids`

IDs of the [connected accounts](../../../core-concepts/connected-accounts.md) associated with the `acs_system`.

Type: `array`
Format: `list`
---

### `created_at`

Date and time at which the `acs_system` was created.

Type: `string`
Format: `string`
---

### `errors`

Errors associated with the `acs_system`.

Type: `array`
Format: `list`
---

### `external_type`

Brand-specific terminology for the `acs_system` type.

Type: `string`
Format: `enum`
---

### `external_type_display_name`

Display name that corresponds to the brand-specific terminology for the `acs_system` type.

Type: `string`
Format: `string`
---

### `image_alt_text`

Alternative text for the `acs_system` image.

Type: `string`
Format: `string`
---

### `image_url`

URL for the image that represents the `acs_system`.

Type: `string`
Format: `string`
---

### `name`

Name of the `acs_system`.

Type: `string`
Format: `string`
---

### `system_type`

{% hint style="warning" %}
**Deprecated** use something else.
{% endhint %}

Type: `string`
Format: `enum`
---

### `system_type_display_name`

{% hint style="warning" %}
**Deprecated** use something else.
{% endhint %}

Type: `string`
Format: `string`
---

### `visionline_metadata`

Type: `object`
Format: `record`
---

### `warnings`

Warnings associated with the `acs_system`.

Type: `array`
Format: `list`
---

### `workspace_id`

ID of the [workspace](../../../core-concepts/workspaces.md) that contains the `acs_system`.

Type: `string`
Format: `string`
---

## Endpoints

### [`/acs/systems/get`]()

Returns a specified [access control system](../../../capability-guides/access-systems.md).

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.
---

### [`/acs/systems/list`]()

Returns a list of all [access control systems](../../../capability-guides/access-systems.md).

To filter the list of returned access control systems by a specific connected account ID, include the 
`connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the 
response includes all access control systems connected to your workspace.
---

### [`/acs/systems/list_compatible_credential_manager_acs_systems`]()

Returns a list of all credential manager ACS systems that are compatible with a specified 
[access control system](../../../capability-guides/access-systems.md).

Specify the ACS system for which you want to retrieve all compatible credential manager ACS 
systems by including the corresponding `acs_system_id` in the request body.
---

## Events