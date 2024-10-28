# `acs_system`

Represents an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

## Properties

### `acs_system_id`

Format: `ID`

ID of the `acs_system`.


---

### `can_add_acs_users_to_acs_access_groups`

Format: `Boolean`

Indicates whether the `acs_system` supports [adding users to access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences.md#access-group-based-access-control-systems).


---

### `can_automate_enrollment`

Format: `Boolean`

Indicates whether it is possible to [launch enrollment automations](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut) for the `acs_system`.


---

### `can_create_acs_access_groups`

Format: `Boolean`

Indicates whether the `acs_system` supports creating [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences.md#access-group-based-access-control-systems).


---

### `can_remove_acs_users_from_acs_access_groups`

Format: `Boolean`

Indicates whether the `acs_system` supports [removing users from access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group). See also [Access Group-based Access Control Systems](../../../capability-guides/access-systems/understanding-access-control-system-differences.md#access-group-based-access-control-systems).


---

### `connected_account_ids`

Format: `List`

IDs of the [connected accounts](../../../core-concepts/connected-accounts/README.md) associated with the `acs_system`.


---

### `created_at`

Format: `Datetime`

Date and time at which the `acs_system` was created.


---

### `default_credential_manager_acs_system_id`

Format: `ID`

ID of the default credential manager acs_system for this access control system.


---

### `errors`

Format: `List`

Errors associated with the `acs_system`.


---

### `external_type`

Format: `Enum`

Brand-specific terminology for the `acs_system` type.

Possible enum values:
- `pti_site`
- `alta_org`
- `salto_ks_site`
- `brivo_account`
- `hid_credential_manager_organization`
- `visionline_system`
- `assa_abloy_credential_service`
- `latch_building`
- `dormakaba_community`


---

### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the `acs_system` type.


---

### `image_alt_text`

Format: `String`

Alternative text for the `acs_system` image.


---

### `image_url`

Format: `String`

URL for the image that represents the `acs_system`.


---

### `is_credential_manager`

Format: `Boolean`

Indicates if the `acs_system` is a credential manager.


---

### `name`

Format: `String`

Name of the `acs_system`.


---

### `system_type`

{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

Format: `Enum`

Possible enum values:
- `pti_site`
- `alta_org`
- `salto_ks_site`
- `brivo_account`
- `hid_credential_manager_organization`
- `visionline_system`
- `assa_abloy_credential_service`
- `latch_building`
- `dormakaba_community`


---

### `system_type_display_name`

{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}

Format: `String`


---

### `visionline_metadata`

Format: `Object`

<details>
<summary>lan_address <code>string</code></summary>
IP address or hostname of the main Visionline server relative to the Seam Bridge on the local network.
</details>
<details>
<summary>mobile_access_uuid <code>string</code></summary>
Keyset loaded into a reader. Mobile keys and reader administration tools securely authenticate only with readers programmed with a matching keyset.
</details>
<details>
<summary>system_id <code>string</code></summary>
Unique ID assigned by the ASSA ABLOY licensing team that identifies each hotel in your credential manager.
</details>

---

### `warnings`

Format: `List`

Warnings associated with the `acs_system`.


---

### `workspace_id`

Format: `ID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the `acs_system`.


---

# Endpoints

## [`/acs/systems/get`](./get.md)

Returns a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).
## [`/acs/systems/list`](./list.md)

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).
## [`/acs/systems/list_compatible_credential_manager_acs_systems`](./list_compatible_credential_manager_acs_systems.md)

Returns a list of all credential manager ACS systems that are compatible with a specified
[access control system](https://docs.seam.co/latest/capability-guides/access-systems).
