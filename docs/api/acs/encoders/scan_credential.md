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

#### `result`

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

<summary><code>warnings</code> Format: <code>List</code></summary>

</details>

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

