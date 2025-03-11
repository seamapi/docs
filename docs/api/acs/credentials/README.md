# Credentials

## `acs_credential`

Means by which an [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) gains access at an [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md). The `acs_credential` object represents a [credential](../../../capability-guides/access-systems/managing-credentials.md) that provides an ACS user access within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems). For each `acs_credential` object, you define the access method. You can also specify additional properties, such as a PIN code.

### `access_method`

Format: `Enum`

Access method for the [credential](../../../capability-guides/access-systems/managing-credentials.md). Supported values: `code`, `card`, `mobile_key`.

Possible enum values:
- `code`
- `card`
- `mobile_key`

---

### `acs_credential_id`

Format: `ID`

ID of the [credential](../../../capability-guides/access-systems/managing-credentials.md).

---

### `acs_credential_pool_id`

Format: `ID`

---

### `acs_system_id`

Format: `ID`

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).

---

### `acs_user_id`

Format: `ID`

ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to whom the [credential](../../../capability-guides/access-systems/managing-credentials.md) belongs.

---

### `assa_abloy_vostio_metadata`

Format: `Object`

Vostio-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

<details>

<summary><code>door_names</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>endpoint_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>key_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>key_issuing_request_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>override_guest_acs_entrance_ids</code> Format: <code>List</code></summary>

</details>

---

### `card_number`

Format: `String`

Number of the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

---

### `code`

Format: `String`

Access (PIN) code for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

---

### `created_at`

Format: `Datetime`

Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was created.

---

### `display_name`

Format: `String`

Display name that corresponds to the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.

---

### `ends_at`

Format: `String`

Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

### `errors`

Format: `List`

Errors associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

---

### `external_type`

Format: `Enum`

Brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type. Supported values: `pti_card`, `brivo_credential`, `hid_credential`, `visionline_card`.

Possible enum values:
- `pti_card`
- `brivo_credential`
- `hid_credential`
- `visionline_card`
- `salto_ks_credential`
- `assa_abloy_vostio_key`
- `salto_space_key`

---

### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.

---

### `is_issued`

Format: `Boolean`

Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been encoded onto a card.

---

### `is_latest_desired_state_synced_with_provider`

Format: `Boolean`

Indicates whether the latest state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been synced from Seam to the provider.

---

### `is_managed`

Format: `Boolean`

---

### `is_multi_phone_sync_credential`

Format: `Boolean`

Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).

---

### `is_one_time_use`

Format: `Boolean`

Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) can only be used once. If `true`, the code becomes invalid after the first use.

---

### `issued_at`

Format: `Datetime`

Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was encoded onto a card.

---

### `latest_desired_state_synced_with_provider_at`

Format: `Datetime`

Date and time at which the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was most recently synced from Seam to the provider.

---

### `parent_acs_credential_id`

Format: `ID`

ID of the parent [credential](../../../capability-guides/access-systems/managing-credentials.md).

---

### `starts_at`

Format: `String`

Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

### `visionline_metadata`

Format: `Object`

Visionline-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

<details>

<summary><code>auto_join</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>card_function_type</code> Format: <code>Enum</code></summary>

Possible enum values:
- `guest`
- `staff`

</details>

<details>

<summary><code>card_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>common_acs_entrance_ids</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>credential_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>guest_acs_entrance_ids</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>is_valid</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>joiner_acs_credential_ids</code> Format: <code>List</code></summary>

</details>

---

### [`warnings`](./#warnings-1)

Format: `List`

Warnings associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

---

### `workspace_id`

Format: `ID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).

---

## Warnings

### `waiting_to_be_issued`

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is waiting to be issued.

---

### `schedule_externally_modified`

Indicates that the schedule of one of the [credential](../../../capability-guides/access-systems/managing-credentials.md)'s children was modified externally.

---

### `schedule_modified`

Indicates that the schedule of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was modified to avoid creating a credential with a start date in the past.

---

### `being_deleted`

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is being deleted.

---

### `unknown_issue_with_acs_credential`

An unknown issue occurred while syncing the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) with the provider. This issue may affect the proper functioning of the credential.

---

### `needs_to_be_reissued`

Access permissions for the [credential](../../../capability-guides/access-systems/managing-credentials.md) have changed. [Reissue](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md) (re-encode) the credential. This issue may affect the proper functioning of the credential.

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

## Events

### `acs_credential.deleted`

An [ACS credential](../../../capability-guides/access-systems/managing-credentials.md) was deleted.

<details>

<summary><code>acs_credential_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_system_id</code> Format: <code>ID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>event_id</code> Format: <code>ID</code></summary>

ID of the event.

</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.

</details>

<details>

<summary><code>workspace_id</code> Format: <code>ID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

### `acs_credential.issued`

An [ACS credential](../../../capability-guides/access-systems/managing-credentials.md) was issued.

<details>

<summary><code>acs_credential_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_system_id</code> Format: <code>ID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>event_id</code> Format: <code>ID</code></summary>

ID of the event.

</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.

</details>

<details>

<summary><code>workspace_id</code> Format: <code>ID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

### `acs_credential.reissued`

An [ACS credential](../../../capability-guides/access-systems/managing-credentials.md) was reissued.

<details>

<summary><code>acs_credential_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_system_id</code> Format: <code>ID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>event_id</code> Format: <code>ID</code></summary>

ID of the event.

</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.

</details>

<details>

<summary><code>workspace_id</code> Format: <code>ID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

