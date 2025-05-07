# Encode an Access Method

```
POST /acs/encoders/encode_access_method ⇒ { action_attempt }
```

Encodes an existing access method onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_method_id`

Format: `UUID`
Required: Yes

ID of the `access_method` to encode onto a card.

***

### `acs_encoder_id`

Format: `UUID`
Required: Yes

ID of the `acs_encoder` to use to encode the `access_method`.

***

## Return Type

[action\_attempt](./)

### `ENCODE_ACCESS_METHOD`

Action attempt to track encoding credential data from the physical encoder onto a card.

#### `action_attempt_id`

Format: `UUID`

ID of the action attempt.

---

#### `action_type`

Format: `Enum`

Type of action that the action attempt tracks.

Value: `ENCODE_ACCESS_METHOD`

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
- `incompatible_card_format`
- `credential_cannot_be_reissued`
</details>
---

#### `result`

Format: `Object`

If an encoding attempt was successful, includes the `access_method` data that was encoded onto the card.

<details>

<summary><code>access_method_id</code> Format: <code>UUID</code></summary>

ID of the access method.
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the access method was created.
</details>
<details>

<summary><code>display_name</code> Format: <code>String</code></summary>

Display name of the access method.
</details>
<details>

<summary><code>instant_key_url</code> Format: <code>String</code></summary>

URL of instant key for mobile key access methods.
</details>
<details>

<summary><code>is_card_encoding_required</code> Format: <code>Boolean</code></summary>

Whether card encoding is required for plastic card access methods.
</details>
<details>

<summary><code>issued_at</code> Format: <code>Datetime</code></summary>

Date and time at which the access method was issued.
</details>
<details>

<summary><code>mode</code> Format: <code>Enum</code></summary>

Access method mode. Supported values: `code`, `card`, `mobile_key`.

Possible enum values:
- `code`
- `card`
- `mobile_key`
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

Unique identifier for the Seam workspace associated with the access grant.
</details>
---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

