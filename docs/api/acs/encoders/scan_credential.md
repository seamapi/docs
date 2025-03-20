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

Format: `UUID`

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


Snapshot of credential data read from physical encoder.

</details>

<details>

<summary><code>acs_credential_on_encoder.card_number</code> Format: <code>String</code></summary>


A number or string that physically identifies the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_encoder.created_at</code> Format: <code>Datetime</code></summary>


Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was created.

</details>

<details>

<summary><code>acs_credential_on_encoder.ends_at</code> Format: <code>Datetime</code></summary>


Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) will stop being usable.

</details>

<details>

<summary><code>acs_credential_on_encoder.is_issued</code> Format: <code>Boolean</code></summary>


</details>

<details>

<summary><code>acs_credential_on_encoder.starts_at</code> Format: <code>Datetime</code></summary>


Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) becomes usable.

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata</code> Format: <code>Object</code></summary>


Visionline-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.cancelled</code> Format: <code>Boolean</code></summary>


Indicates whether the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md) is cancelled.

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_format</code> Format: <code>Enum</code></summary>


Format of the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

Possible enum values:
- `TLCode`
- `rfid48`

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_holder</code> Format: <code>String</code></summary>


Holden of the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_id</code> Format: <code>String</code></summary>


Card ID for the Visionline card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.common_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>UUID</code></summary>


IDs of the common [entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md) for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.discarded</code> Format: <code>Boolean</code></summary>


Indicates whether the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md) is discarded.

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.expired</code> Format: <code>Boolean</code></summary>


Indicates whether the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md) is expired.

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.guest_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>UUID</code></summary>


IDs of the guest [entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md) for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.number_of_issued_cards</code> Format: <code>Number</code></summary>


Number of issued cards associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.overridden</code> Format: <code>Boolean</code></summary>


Indicates whether the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md) is overridden.

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.overwritten</code> Format: <code>Boolean</code></summary>


Indicates whether the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md) is overwritten.

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.pending_auto_update</code> Format: <code>Boolean</code></summary>


Indicates whether the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md) is pending auto-update.

</details>

<details>

<summary><code>acs_credential_on_seam</code> Format: <code>Object</code></summary>


Matching acs_credential currently encoded on this card.

</details>

<details>

<summary><code>acs_credential_on_seam.access_method</code> Format: <code>Enum</code></summary>


Access method for the [credential](../../../capability-guides/access-systems/managing-credentials.md). Supported values: `code`, `card`, `mobile_key`.

Possible enum values:
- `code`
- `card`
- `mobile_key`

</details>

<details>

<summary><code>acs_credential_on_seam.acs_credential_id</code> Format: <code>UUID</code></summary>


ID of the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_seam.acs_credential_pool_id</code> Format: <code>UUID</code></summary>


</details>

<details>

<summary><code>acs_credential_on_seam.acs_system_id</code> Format: <code>UUID</code></summary>


ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_seam.acs_user_id</code> Format: <code>UUID</code></summary>


ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to whom the [credential](../../../capability-guides/access-systems/managing-credentials.md) belongs.

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata</code> Format: <code>Object</code></summary>


Vostio-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

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


Number of the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_seam.code</code> Format: <code>String</code></summary>


Access (PIN) code for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_seam.created_at</code> Format: <code>Datetime</code></summary>


Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was created.

</details>

<details>

<summary><code>acs_credential_on_seam.display_name</code> Format: <code>String</code></summary>


Display name that corresponds to the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.

</details>

<details>

<summary><code>acs_credential_on_seam.ends_at</code> Format: <code>String</code></summary>


Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

</details>

<details>

<summary><code>acs_credential_on_seam.errors</code> Format: <code>List</code> Item format: <code>Object</code></summary>


Errors associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

**<code>error_code</code>** Format: <code>String</code>




**<code>message</code>** Format: <code>String</code>




</details>

<details>

<summary><code>acs_credential_on_seam.external_type</code> Format: <code>Enum</code></summary>


Brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type. Supported values: `pti_card`, `brivo_credential`, `hid_credential`, `visionline_card`.

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


Display name that corresponds to the brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.

</details>

<details>

<summary><code>acs_credential_on_seam.is_issued</code> Format: <code>Boolean</code></summary>


Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been encoded onto a card.

</details>

<details>

<summary><code>acs_credential_on_seam.is_latest_desired_state_synced_with_provider</code> Format: <code>Boolean</code></summary>


Indicates whether the latest state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been synced from Seam to the provider.

</details>

<details>

<summary><code>acs_credential_on_seam.is_managed</code> Format: <code>Boolean</code></summary>


</details>

<details>

<summary><code>acs_credential_on_seam.is_multi_phone_sync_credential</code> Format: <code>Boolean</code></summary>


Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).

</details>

<details>

<summary><code>acs_credential_on_seam.is_one_time_use</code> Format: <code>Boolean</code></summary>


Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) can only be used once. If `true`, the code becomes invalid after the first use.

</details>

<details>

<summary><code>acs_credential_on_seam.issued_at</code> Format: <code>Datetime</code></summary>


Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was encoded onto a card.

</details>

<details>

<summary><code>acs_credential_on_seam.latest_desired_state_synced_with_provider_at</code> Format: <code>Datetime</code></summary>


Date and time at which the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was most recently synced from Seam to the provider.

</details>

<details>

<summary><code>acs_credential_on_seam.parent_acs_credential_id</code> Format: <code>UUID</code></summary>


ID of the parent [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>acs_credential_on_seam.starts_at</code> Format: <code>String</code></summary>


Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata</code> Format: <code>Object</code></summary>


Visionline-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

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

<summary><code>acs_credential_on_seam.visionline_metadata.common_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>UUID</code></summary>


</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.credential_id</code> Format: <code>String</code></summary>


</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.guest_acs_entrance_ids</code> Format: <code>List</code> Item format: <code>UUID</code></summary>


</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.is_valid</code> Format: <code>Boolean</code></summary>


</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.joiner_acs_credential_ids</code> Format: <code>List</code> Item format: <code>UUID</code></summary>


</details>

<details>

<summary><code>acs_credential_on_seam.warnings</code> Format: <code>List</code> Item format: <code>Object</code></summary>


Warnings associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

**<code>created_at</code>** Format: <code>Datetime</code>

Date and time at which Seam created the warning.



**<code>message</code>** Format: <code>String</code>

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.



**<code>warning_code</code>** Format: <code>Enum</code>

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `waiting_to_be_issued`
- `schedule_externally_modified`
- `schedule_modified`
- `being_deleted`
- `unknown_issue_with_acs_credential`
- `needs_to_be_reissued`


</details>

<details>

<summary><code>acs_credential_on_seam.workspace_id</code> Format: <code>UUID</code></summary>


ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).

</details>

<details>

<summary><code>warnings</code> Format: <code>List</code> Item format: <code>Object</code></summary>


**<code>warning_code</code>** Format: <code>Enum</code>


Possible enum values:
- `acs_credential_on_encoder_out_of_sync`
- `acs_credential_on_seam_not_found`


**<code>warning_message</code>** Format: <code>String</code>




</details>

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

