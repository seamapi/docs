# Credentials

## `acs_credential`

Means by which a user gains access at an entrance.
The `acs_credential` object represents a credential that provides an ACS user access within an access control system. For each acs_credential object, you define the access method. You can also specify additional properties, such as a code.

### `access_method`

Format: `Enum`

Access method for the credential. Supported values: `code`, `card`, `mobile_key`.

Possible enum values:
- `code`
- `card`
- `mobile_key`


---

### `acs_credential_id`

Format: `ID`

ID of the credential.


---

### `acs_credential_pool_id`

Format: `ID`


---

### `acs_system_id`

Format: `ID`

ID of the access control system that contains the credential.


---

### `acs_user_id`

Format: `ID`

ID of the ACS user to whom the credential belongs.


---

### `card_number`

Format: `String`


---

### `code`

Format: `String`

Access (PIN) code for the credential.


---

### `created_at`

Format: `Datetime`

Date and time at which the credential was created.


---

### `display_name`

Format: `String`

Display name that corresponds to the credential type.


---

### `ends_at`

Format: `String`

Date and time at which the credential validity ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.


---

### `errors`

Format: `List`

Errors associated with the `acs_credential`.


---

### `external_type`

Format: `Enum`

Brand-specific terminology for the credential type. Supported values: `pti_card`, `brivo_credential`, `hid_credential`, `visionline_card`.

Possible enum values:
- `pti_card`
- `brivo_credential`
- `hid_credential`
- `visionline_card`
- `salto_ks_credential`


---

### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the credential type.


---

### `is_issued`

Format: `Boolean`


---

### `is_latest_desired_state_synced_with_provider`

Format: `Boolean`

Indicates whether the latest state of the credential has been synced from Seam to the provider.


---

### `is_managed`

Format: `Boolean`


---

### `is_multi_phone_sync_credential`

Format: `Boolean`

Indicates whether the credential is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).


---

### `is_one_time_use`

Format: `Boolean`

Indicates whether the credential can only be used once. If "true," the code becomes invalid after the first use.


---

### `issued_at`

Format: `Datetime`


---

### `latest_desired_state_synced_with_provider_at`

Format: `Datetime`

Date and time at which the state of the credential was most recently synced from Seam to the provider.


---

### `parent_acs_credential_id`

Format: `ID`

ID of the parent credential.


---

### `starts_at`

Format: `String`

Date and time at which the credential validity starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


---

### `visionline_metadata`

Format: `Object`

Visionline-specific metadata for the credential.

<details>

<summary><code>auto_join</code> Format: <code>boolean</code></summary>


</details>

<details>

<summary><code>card_function_type</code> Format: <code>enum</code></summary>


</details>

<details>

<summary><code>card_id</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>common_acs_entrance_ids</code> Format: <code>list</code></summary>


</details>

<details>

<summary><code>credential_id</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>guest_acs_entrance_ids</code> Format: <code>list</code></summary>


</details>

<details>

<summary><code>is_valid</code> Format: <code>boolean</code></summary>


</details>

<details>

<summary><code>joiner_acs_credential_ids</code> Format: <code>list</code></summary>


</details>


---

### `warnings`

Format: `List`

Warnings associated with the `acs_credential`.


---

### `workspace_id`

Format: `ID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the credential.


---

## Endpoints

### [`/acs/credentials/assign`](./assign.md)

Assigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) to a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/credentials/create`](./create.md)

Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/credentials/delete`](./delete.md)

Deletes a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).
### [`/acs/credentials/get`](./get.md)

Returns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).
### [`/acs/credentials/list`](./list.md)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md).
### [`/acs/credentials/list_accessible_entrances`](./list_accessible_entrances.md)

Returns a list of all [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a [credential](https://docs.seam.co/latest/api/acs/credentials) grants access.
### [`/acs/credentials/unassign`](./unassign.md)

Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).
### [`/acs/credentials/update`](./update.md)

Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).
