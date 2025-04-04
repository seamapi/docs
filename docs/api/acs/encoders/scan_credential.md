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

Format: `UUID`
Required: Yes

ID of the `acs_encoder` to use for the scan.

***

## Return Type

[action\_attempt](./)

### `SCAN_CREDENTIAL`

Reading credential data from physical encoder.

#### `action_attempt_id`

Format: `UUID`

ID of the action attempt.

---

#### `action_type`

Format: `Enum`

Value: `SCAN_CREDENTIAL`

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

