# Encode an Access Method

- [Request Parameters](#request-parameters)
- [Response](#response)

Encodes an existing access method onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Encodes an existing access method onto a plastic card placed on the specified encoder.

#### Code

```javascript
await seam.acs.encoders.encodeAccessMethod({
  acs_encoder_id: "c49a6fb0-d5a0-4b1e-9553-f32ac550a3c5",
  access_method_id: "f608c1c7-95df-433d-a449-10becae931be",
});
```

#### Output

```javascript
{
  "action_attempt_id": "550e8400-e29b-41d4-a716-446655440000",
  "action_type": "ENCODE_ACCESS_METHOD",
  "error": null,
  "result": {
    "access_method_id": "9e8d7c6b-5a4b-3c2d-1e0f-9a8b7c6d5e4f",
    "created_at": "2025-06-14T16:54:17.946612Z",
    "display_name": "My Card",
    "instant_key_url": "https://se.am/1234",
    "is_card_encoding_required": true,
    "issued_at": "2025-06-14T16:54:17.946612Z",
    "mode": "card",
    "workspace_id": "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
  },
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Encodes an existing access method onto a plastic card placed on the specified encoder.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/encode_access_method" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_encoder_id": "c49a6fb0-d5a0-4b1e-9553-f32ac550a3c5",
  "access_method_id": "f608c1c7-95df-433d-a449-10becae931be"
}
EOF
```

#### Output

```curl
{
  "action_attempt": {
    "action_attempt_id": "550e8400-e29b-41d4-a716-446655440000",
    "action_type": "ENCODE_ACCESS_METHOD",
    "error": null,
    "result": {
      "access_method_id": "9e8d7c6b-5a4b-3c2d-1e0f-9a8b7c6d5e4f",
      "created_at": "2025-06-14T16:54:17.946612Z",
      "display_name": "My Card",
      "instant_key_url": "https://se.am/1234",
      "is_card_encoding_required": true,
      "issued_at": "2025-06-14T16:54:17.946612Z",
      "mode": "card",
      "workspace_id": "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
    },
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Encodes an existing access method onto a plastic card placed on the specified encoder.

#### Code

```python
seam.acs.encoders.encode_access_method(
    acs_encoder_id="c49a6fb0-d5a0-4b1e-9553-f32ac550a3c5",
    access_method_id="f608c1c7-95df-433d-a449-10becae931be",
)
```

#### Output

```python
ActionAttempt(
    action_attempt_id="550e8400-e29b-41d4-a716-446655440000",
    action_type="ENCODE_ACCESS_METHOD",
    error=None,
    result={
        "access_method_id": "9e8d7c6b-5a4b-3c2d-1e0f-9a8b7c6d5e4f",
        "created_at": "2025-06-14T16:54:17.946612Z",
        "display_name": "My Card",
        "instant_key_url": "https://se.am/1234",
        "is_card_encoding_required": true,
        "issued_at": "2025-06-14T16:54:17.946612Z",
        "mode": "card",
        "workspace_id": "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    },
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Encodes an existing access method onto a plastic card placed on the specified encoder.

#### Code

```ruby
seam.acs.encoders.encode_access_method(
  acs_encoder_id: "c49a6fb0-d5a0-4b1e-9553-f32ac550a3c5",
  access_method_id: "f608c1c7-95df-433d-a449-10becae931be",
)
```

#### Output

```ruby
{
  "action_attempt_id" => "550e8400-e29b-41d4-a716-446655440000",
  "action_type" => "ENCODE_ACCESS_METHOD",
  "error" => nil,
  "result" => {
    access_method_id: "9e8d7c6b-5a4b-3c2d-1e0f-9a8b7c6d5e4f",
    created_at: "2025-06-14T16:54:17.946612Z",
    display_name: "My Card",
    instant_key_url: "https://se.am/1234",
    is_card_encoding_required: true,
    issued_at: "2025-06-14T16:54:17.946612Z",
    mode: "card",
    workspace_id: "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Encodes an existing access method onto a plastic card placed on the specified encoder.

#### Code

```php
<?php
$seam->acs->encoders->encode_access_method(
    acs_encoder_id: "c49a6fb0-d5a0-4b1e-9553-f32ac550a3c5",
    access_method_id: "f608c1c7-95df-433d-a449-10becae931be"
);
```

#### Output

```php
<?php
[
    "action_attempt_id" => "550e8400-e29b-41d4-a716-446655440000",
    "action_type" => "ENCODE_ACCESS_METHOD",
    "error" => null,
    "result" => [
        "access_method_id" => "9e8d7c6b-5a4b-3c2d-1e0f-9a8b7c6d5e4f",
        "created_at" => "2025-06-14T16:54:17.946612Z",
        "display_name" => "My Card",
        "instant_key_url" => "https://se.am/1234",
        "is_card_encoding_required" => true,
        "issued_at" => "2025-06-14T16:54:17.946612Z",
        "mode" => "card",
        "workspace_id" => "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    ],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Encodes an existing access method onto a plastic card placed on the specified encoder.

#### Code

```seam_cli
seam acs encoders encode-access-method --acs_encoder_id "c49a6fb0-d5a0-4b1e-9553-f32ac550a3c5" --access_method_id "f608c1c7-95df-433d-a449-10becae931be"
```

#### Output

```seam_cli
{
  "action_attempt_id": "550e8400-e29b-41d4-a716-446655440000",
  "action_type": "ENCODE_ACCESS_METHOD",
  "error": null,
  "result": {
    "access_method_id": "9e8d7c6b-5a4b-3c2d-1e0f-9a8b7c6d5e4f",
    "created_at": "2025-06-14T16:54:17.946612Z",
    "display_name": "My Card",
    "instant_key_url": "https://se.am/1234",
    "is_card_encoding_required": true,
    "issued_at": "2025-06-14T16:54:17.946612Z",
    "mode": "card",
    "workspace_id": "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
  },
  "status": "success"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method_id`** *String* (Required)

ID of the `access_method` to encode onto a card.

---

**`acs_encoder_id`** *String* (Required)

ID of the `acs_encoder` to use to encode the `access_method`.

---


## Response

[action\_attempt](./)
**`ENCODE_ACCESS_METHOD`**
{% tabs %}
{% tab title="JSON" %}
```json
{
}
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="JSON" %}
```json
[object Object]
```
{% endtab %}
{% endtabs %}
