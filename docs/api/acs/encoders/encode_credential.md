# Encode a Credential

- [Request Parameters](#request-parameters)
- [Response](#response)

Encodes an existing [credential](../../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md). Either provide an `acs_credential_id` or an `access_method_id`


{% tabs %}
{% tab title="JavaScript" %}

Encodes an existing credential onto a plastic card placed on the specified encoder.

#### Code:

```javascript
await seam.acs.encoders.encodeCredential({
  acs_encoder_id: "18ad521a-308e-4182-b1a6-2338b46a2763",
  acs_credential_id: "a383871c-331a-42ae-af66-146824505187",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "1b4e28ba-2fa1-11d2-883f-0016d3cca427",
  "action_type": "ENCODE_CREDENTIAL",
  "error": null,
  "result": {
    "access_method": "card",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
    "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
    "card_number": "164d29dc4a09b65f",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Guest Lock 1, Vingcard Lock 2",
    "ends_at": "2025-07-12T16:54:17.946512Z",
    "errors": [],
    "external_type": "visionline_card",
    "external_type_display_name": "Visionline Card",
    "is_issued": true,
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": false,
    "issued_at": "2025-06-16T16:54:17.946512Z",
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-07-10T16:54:17.946512Z",
    "visionline_metadata": {
      "card_function_type": "guest",
      "card_id": "5",
      "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
      "credential_id": "15",
      "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
      "is_valid": true
    },
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  },
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Encodes an existing credential onto a plastic card placed on the specified encoder.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/encode_credential" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_encoder_id": "18ad521a-308e-4182-b1a6-2338b46a2763",
  "acs_credential_id": "a383871c-331a-42ae-af66-146824505187"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "1b4e28ba-2fa1-11d2-883f-0016d3cca427",
    "action_type": "ENCODE_CREDENTIAL",
    "error": null,
    "result": {
      "access_method": "card",
      "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
      "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
      "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
      "card_number": "164d29dc4a09b65f",
      "created_at": "2025-06-16T16:54:17.946514Z",
      "display_name": "Guest Lock 1, Vingcard Lock 2",
      "ends_at": "2025-07-12T16:54:17.946512Z",
      "errors": [],
      "external_type": "visionline_card",
      "external_type_display_name": "Visionline Card",
      "is_issued": true,
      "is_latest_desired_state_synced_with_provider": true,
      "is_managed": true,
      "is_multi_phone_sync_credential": false,
      "issued_at": "2025-06-16T16:54:17.946512Z",
      "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
      "starts_at": "2025-07-10T16:54:17.946512Z",
      "visionline_metadata": {
        "card_function_type": "guest",
        "card_id": "5",
        "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        "credential_id": "15",
        "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        "is_valid": true
      },
      "warnings": [],
      "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
    },
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Encodes an existing credential onto a plastic card placed on the specified encoder.

#### Code:

```python
seam.acs.encoders.encode_credential(
    acs_encoder_id="18ad521a-308e-4182-b1a6-2338b46a2763",
    acs_credential_id="a383871c-331a-42ae-af66-146824505187",
)
```

#### Output:

```python
ActionAttempt(
    action_attempt_id="1b4e28ba-2fa1-11d2-883f-0016d3cca427",
    action_type="ENCODE_CREDENTIAL",
    error=None,
    result={
        "access_method": "card",
        "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
        "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
        "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
        "card_number": "164d29dc4a09b65f",
        "created_at": "2025-06-16T16:54:17.946514Z",
        "display_name": "Guest Lock 1, Vingcard Lock 2",
        "ends_at": "2025-07-12T16:54:17.946512Z",
        "errors": [],
        "external_type": "visionline_card",
        "external_type_display_name": "Visionline Card",
        "is_issued": true,
        "is_latest_desired_state_synced_with_provider": true,
        "is_managed": true,
        "is_multi_phone_sync_credential": false,
        "issued_at": "2025-06-16T16:54:17.946512Z",
        "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
        "starts_at": "2025-07-10T16:54:17.946512Z",
        "visionline_metadata": {
            "card_function_type": "guest",
            "card_id": "5",
            "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
            "credential_id": "15",
            "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
            "is_valid": true,
        },
        "warnings": [],
        "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd",
    },
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Encodes an existing credential onto a plastic card placed on the specified encoder.

#### Code:

```ruby
seam.acs.encoders.encode_credential(
  acs_encoder_id: "18ad521a-308e-4182-b1a6-2338b46a2763",
  acs_credential_id: "a383871c-331a-42ae-af66-146824505187",
)
```

#### Output:

```ruby
{
  "action_attempt_id" => "1b4e28ba-2fa1-11d2-883f-0016d3cca427",
  "action_type" => "ENCODE_CREDENTIAL",
  "error" => nil,
  "result" => {
    access_method: "card",
    acs_credential_id: "73a0a199-024f-454d-a916-9bbda8502c12",
    acs_system_id: "b1d03165-2759-474b-a342-e02223f27b39",
    acs_user_id: "0fc82df4-391b-4d00-a234-86378f1c3952",
    card_number: "164d29dc4a09b65f",
    created_at: "2025-06-16T16:54:17.946514Z",
    display_name: "Guest Lock 1, Vingcard Lock 2",
    ends_at: "2025-07-12T16:54:17.946512Z",
    errors: [],
    external_type: "visionline_card",
    external_type_display_name: "Visionline Card",
    is_issued: true,
    is_latest_desired_state_synced_with_provider: true,
    is_managed: true,
    is_multi_phone_sync_credential: false,
    issued_at: "2025-06-16T16:54:17.946512Z",
    latest_desired_state_synced_with_provider_at: "2025-06-18T16:54:17.946514Z",
    starts_at: "2025-07-10T16:54:17.946512Z",
    visionline_metadata: {
      card_function_type: "guest",
      card_id: "5",
      common_acs_entrance_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
      credential_id: "15",
      guest_acs_entrance_ids: ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
      is_valid: true,
    },
    warnings: [],
    workspace_id: "005f1e54-5360-40db-8c31-4ef6baaad1fd",
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Encodes an existing credential onto a plastic card placed on the specified encoder.

#### Code:

```php
$seam->acs->encoders->encode_credential(
    acs_encoder_id: "18ad521a-308e-4182-b1a6-2338b46a2763",
    acs_credential_id: "a383871c-331a-42ae-af66-146824505187"
);
```

#### Output:

```php
[
    "action_attempt_id" => "1b4e28ba-2fa1-11d2-883f-0016d3cca427",
    "action_type" => "ENCODE_CREDENTIAL",
    "error" => null,
    "result" => [
        "access_method" => "card",
        "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
        "acs_system_id" => "b1d03165-2759-474b-a342-e02223f27b39",
        "acs_user_id" => "0fc82df4-391b-4d00-a234-86378f1c3952",
        "card_number" => "164d29dc4a09b65f",
        "created_at" => "2025-06-16T16:54:17.946514Z",
        "display_name" => "Guest Lock 1, Vingcard Lock 2",
        "ends_at" => "2025-07-12T16:54:17.946512Z",
        "errors" => [],
        "external_type" => "visionline_card",
        "external_type_display_name" => "Visionline Card",
        "is_issued" => true,
        "is_latest_desired_state_synced_with_provider" => true,
        "is_managed" => true,
        "is_multi_phone_sync_credential" => false,
        "issued_at" => "2025-06-16T16:54:17.946512Z",
        "latest_desired_state_synced_with_provider_at" =>
            "2025-06-18T16:54:17.946514Z",
        "starts_at" => "2025-07-10T16:54:17.946512Z",
        "visionline_metadata" => [
            "card_function_type" => "guest",
            "card_id" => "5",
            "common_acs_entrance_ids" => [
                "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
            ],
            "credential_id" => "15",
            "guest_acs_entrance_ids" => [
                "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
            ],
            "is_valid" => true,
        ],
        "warnings" => [],
        "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
    ],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Encodes an existing credential onto a plastic card placed on the specified encoder.

#### Code:

```seam_cli
seam acs encoders encode-credential --acs_encoder_id "18ad521a-308e-4182-b1a6-2338b46a2763" --acs_credential_id "a383871c-331a-42ae-af66-146824505187"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "1b4e28ba-2fa1-11d2-883f-0016d3cca427",
  "action_type": "ENCODE_CREDENTIAL",
  "error": null,
  "result": {
    "access_method": "card",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
    "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
    "card_number": "164d29dc4a09b65f",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Guest Lock 1, Vingcard Lock 2",
    "ends_at": "2025-07-12T16:54:17.946512Z",
    "errors": [],
    "external_type": "visionline_card",
    "external_type_display_name": "Visionline Card",
    "is_issued": true,
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": false,
    "issued_at": "2025-06-16T16:54:17.946512Z",
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-07-10T16:54:17.946512Z",
    "visionline_metadata": {
      "card_function_type": "guest",
      "card_id": "5",
      "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
      "credential_id": "15",
      "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
      "is_valid": true
    },
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  },
  "status": "success"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_encoder_id`** *String* (Required)

ID of the `acs_encoder` to use to encode the `acs_credential`.

---

**`access_method_id`** *String*

ID of the `access_method` to encode onto a card.

---

**`acs_credential_id`** *String*

ID of the `acs_credential` to encode onto a card.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "1b4e28ba-2fa1-11d2-883f-0016d3cca427",
  "action_type": "ENCODE_CREDENTIAL",
  "error": null,
  "result": {
    "access_method": "card",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
    "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
    "card_number": "164d29dc4a09b65f",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Guest Lock 1, Vingcard Lock 2",
    "ends_at": "2025-07-12T16:54:17.946512Z",
    "errors": [],
    "external_type": "visionline_card",
    "external_type_display_name": "Visionline Card",
    "is_issued": true,
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": false,
    "issued_at": "2025-06-16T16:54:17.946512Z",
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-07-10T16:54:17.946512Z",
    "visionline_metadata": {
      "card_function_type": "guest",
      "card_id": "5",
      "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
      "credential_id": "15",
      "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
      "is_valid": true
    },
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  },
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
