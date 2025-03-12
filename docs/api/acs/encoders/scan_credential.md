# Scan a Credential

```
POST /acs/encoders/scan_credential ⇒ { action_attempt }
```

Scans an encoded [acs_credential](../../../capability-guides/access-systems/managing-credentials.md) from a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_encoder_id`

Type: `string`
Required: Yes

ID of the `acs_encoder` to use for the scan.

***

## Return Type

[action\_attempt](./)

### `SCAN_CREDENTIAL`

Reading credential data from physical encoder.

#### `action_attempt_id`

Format: `ID`

The ID of the action attempt.

---

#### `action_type`

Format: `String`

---

#### `error`

Format: `Object`

<details>

<summary><code>message</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>type</code> Format: <code>Enum</code></summary>

Possible enum values:
- `uncategorized_error`
- `action_attempt_expired`
- `no_credential_on_encoder`

</details>

---

#### `result`

Format: `Object`

<details>

<summary><code>acs_credential_on_encoder</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.card_number</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.created_at</code> Format: <code>Datetime</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.ends_at</code> Format: <code>Datetime</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.is_issued</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.starts_at</code> Format: <code>Datetime</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.cancelled</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_format</code> Format: <code>Enum</code></summary>

Possible enum values:
- `TLCode`
- `rfid48`

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_holder</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.common_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.discarded</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.expired</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.guest_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.number_of_issued_cards</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.overridden</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.overwritten</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.pending_auto_update</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.access_method</code> Format: <code>Enum</code></summary>

Possible enum values:
- `code`
- `card`
- `mobile_key`

</details>

<details>

<summary><code>acs_credential_on_seam.acs_credential_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.acs_credential_pool_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.acs_system_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.acs_user_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata.door_names</code> Format: <code>List</code> Item format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata.endpoint_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata.key_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata.key_issuing_request_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata.override_guest_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.card_number</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.code</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.created_at</code> Format: <code>Datetime</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.display_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.ends_at</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.errors</code> Format: <code>List</code> Item format: <code>Object</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.external_type</code> Format: <code>Enum</code></summary>

Possible enum values:
- `pti_card`
- `brivo_credential`
- `hid_credential`
- `visionline_card`
- `salto_ks_credential`
- `assa_abloy_vostio_key`
- `salto_space_key`

</details>

<details>

<summary><code>acs_credential_on_seam.external_type_display_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.is_issued</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.is_latest_desired_state_synced_with_provider</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.is_managed</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.is_multi_phone_sync_credential</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.is_one_time_use</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.issued_at</code> Format: <code>Datetime</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.latest_desired_state_synced_with_provider_at</code> Format: <code>Datetime</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.parent_acs_credential_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.starts_at</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.auto_join</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.card_function_type</code> Format: <code>Enum</code></summary>

Possible enum values:
- `guest`
- `staff`

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.card_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.common_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.credential_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.guest_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.is_valid</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.joiner_acs_credential_ids</code> Format: <code>List</code> Item format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.warnings</code> Format: <code>List</code> Item format: <code>Object</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.workspace_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>warnings</code> Format: <code>List</code> Item format: <code>Object</code></summary>

</details>

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

