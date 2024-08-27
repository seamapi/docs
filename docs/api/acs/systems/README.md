Represents an [access control system](../../../capability-guides/access-systems.md).

## `acs_system`

### Properties

#### `acs_system_id`

Format: `Id`

ID of the `acs_system`.

---

#### `can_add_acs_users_to_acs_access_groups`

Format: `Boolean`

Indicates whether the `acs_system` supports [adding users to access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

---

#### `can_automate_enrollment`

Format: `Boolean`

Indicates whether it is possible to [launch enrollment automations](../../../capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut.md) for the `acs_system`.

---

#### `can_create_acs_access_groups`

Format: `Boolean`

Indicates whether the `acs_system` supports creating [access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

---

#### `can_remove_acs_users_from_acs_access_groups`

Format: `Boolean`

Indicates whether the `acs_system` supports [removing users from access groups](../../../capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group.md). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems.md).

---

#### `connected_account_ids`

Format: `List`

IDs of the [connected accounts](../../../core-concepts/connected-accounts.md) associated with the `acs_system`.

---

#### `created_at`

Format: `Datetime`

Date and time at which the `acs_system` was created.

---

#### `errors`

Format: `List`

Errors associated with the `acs_system`.

---

#### `external_type`

Format: `Enum`

Brand-specific terminology for the `acs_system` type.

---

#### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the `acs_system` type.

---

#### `image_alt_text`

Format: `String`

Alternative text for the `acs_system` image.

---

#### `image_url`

Format: `String`

URL for the image that represents the `acs_system`.

---

#### `name`

Format: `String`

Name of the `acs_system`.

---

#### `system_type`

{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

Format: `Enum`

---

#### `system_type_display_name`

{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}

Format: `String`

---

#### `visionline_metadata`

Format: `Record`

---

#### `warnings`

Format: `List`

Warnings associated with the `acs_system`.

---

#### `workspace_id`

Format: `Id`

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