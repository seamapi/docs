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

#### action_attempt_id

Format: `ID`

The ID of the action attempt.

---

#### action_type

Format: `String`

---

#### error

Format: `Object`

<details>

<summary><code>message</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>type</code> Format: <code>Enum</code></summary>

</details>

---

#### result

Format: `Object`

<details>

<summary><code>acs_credential_on_encoder</code> Format: <code>Object</code></summary>

Snapshot of credential data read from physical encoder.

</details>

<details>

<summary><code>acs_credential_on_encoder.card_number</code> Format: <code>String</code></summary>

A number or string that physically identifies this card.

</details>

<details>

<summary><code>acs_credential_on_encoder.created_at</code> Format: <code>Datetime</code></summary>

Date and time the credential was created.

</details>

<details>

<summary><code>acs_credential_on_encoder.ends_at</code> Format: <code>Datetime</code></summary>

Date and time the credential will stop being useable.

</details>

<details>

<summary><code>acs_credential_on_encoder.is_issued</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.starts_at</code> Format: <code>Datetime</code></summary>

Date and time the credential will become useable.

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata</code> Format: <code>Object</code></summary>

Visionline-specific metadata for the credential.

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.cancelled</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_format</code> Format: <code>Enum</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_holder</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.card_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.common_acs_entrance_ids</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.discarded</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.expired</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_encoder.visionline_metadata.guest_acs_entrance_ids</code> Format: <code>List</code></summary>

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

Matching acs_credential currently encoded on this card.

</details>

<details>

<summary><code>acs_credential_on_seam.access_method</code> Format: <code>Enum</code></summary>

Access method for the credential. Supported values: `code`, `card`, `mobile_key`.

</details>

<details>

<summary><code>acs_credential_on_seam.acs_credential_id</code> Format: <code>ID</code></summary>

ID of the credential.

</details>

<details>

<summary><code>acs_credential_on_seam.acs_credential_pool_id</code> Format: <code>ID</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.acs_system_id</code> Format: <code>ID</code></summary>

ID of the access control system that contains the credential.

</details>

<details>

<summary><code>acs_credential_on_seam.acs_user_id</code> Format: <code>ID</code></summary>

ID of the ACS user to whom the credential belongs.

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata</code> Format: <code>Object</code></summary>

Vostio-specific metadata for the credential.

</details>

<details>

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata.door_names</code> Format: <code>List</code></summary>

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

<summary><code>acs_credential_on_seam.assa_abloy_vostio_metadata.override_guest_acs_entrance_ids</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.card_number</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.code</code> Format: <code>String</code></summary>

Access (PIN) code for the credential.

</details>

<details>

<summary><code>acs_credential_on_seam.created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the credential was created.

</details>

<details>

<summary><code>acs_credential_on_seam.display_name</code> Format: <code>String</code></summary>

Display name that corresponds to the credential type.

</details>

<details>

<summary><code>acs_credential_on_seam.ends_at</code> Format: <code>String</code></summary>

Date and time at which the credential validity ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

</details>

<details>

<summary><code>acs_credential_on_seam.errors</code> Format: <code>List</code></summary>

Errors associated with the `acs_credential`.

</details>

<details>

<summary><code>acs_credential_on_seam.external_type</code> Format: <code>Enum</code></summary>

Brand-specific terminology for the credential type. Supported values: `pti_card`, `brivo_credential`, `hid_credential`, `visionline_card`.

</details>

<details>

<summary><code>acs_credential_on_seam.external_type_display_name</code> Format: <code>String</code></summary>

Display name that corresponds to the brand-specific terminology for the credential type.

</details>

<details>

<summary><code>acs_credential_on_seam.is_issued</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.is_latest_desired_state_synced_with_provider</code> Format: <code>Boolean</code></summary>

Indicates whether the latest state of the credential has been synced from Seam to the provider.

</details>

<details>

<summary><code>acs_credential_on_seam.is_managed</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.is_multi_phone_sync_credential</code> Format: <code>Boolean</code></summary>

Indicates whether the credential is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).

</details>

<details>

<summary><code>acs_credential_on_seam.is_one_time_use</code> Format: <code>Boolean</code></summary>

Indicates whether the credential can only be used once. If "true," the code becomes invalid after the first use.

</details>

<details>

<summary><code>acs_credential_on_seam.issued_at</code> Format: <code>Datetime</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.latest_desired_state_synced_with_provider_at</code> Format: <code>Datetime</code></summary>

Date and time at which the state of the credential was most recently synced from Seam to the provider.

</details>

<details>

<summary><code>acs_credential_on_seam.parent_acs_credential_id</code> Format: <code>ID</code></summary>

ID of the parent credential.

</details>

<details>

<summary><code>acs_credential_on_seam.starts_at</code> Format: <code>String</code></summary>

Date and time at which the credential validity starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata</code> Format: <code>Object</code></summary>

Visionline-specific metadata for the credential.

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.auto_join</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.card_function_type</code> Format: <code>Enum</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.card_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.common_acs_entrance_ids</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.credential_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.guest_acs_entrance_ids</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.is_valid</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.visionline_metadata.joiner_acs_credential_ids</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>acs_credential_on_seam.warnings</code> Format: <code>List</code></summary>

Warnings associated with the `acs_credential`.

</details>

<details>

<summary><code>acs_credential_on_seam.workspace_id</code> Format: <code>ID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the credential.

</details>

<details>

<summary><code>warnings</code> Format: <code>List</code></summary>

</details>

---

#### status

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

