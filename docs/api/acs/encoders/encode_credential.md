# Encode a Credential

```
POST /acs/encoders/encode_credential ⇒ { action_attempt }
```

Encodes an existing [credential](../../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_credential_id`

Type: `string`
Required: Yes

ID of the `acs_credential` to encode onto a card.

***

### `acs_encoder_id`

Type: `string`
Required: Yes

ID of the `acs_encoder` to use to encode the `acs_credential`.

***

## Return Type

[action\_attempt](./)

### `ENCODE_CREDENTIAL`

Action attempt to track encoding credential data from the physical encoder onto a card.

#### `action_attempt_id`

Format: `UUID`

ID of the action attempt.

---

#### `action_type`

Format: `Enum`

Type of action that the action attempt tracks.

Possible enum values:
- `ENCODE_CREDENTIAL`

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

