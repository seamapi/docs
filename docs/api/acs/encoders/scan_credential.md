# Scan a Credential

- [Request Parameters](#request-parameters)
- [Response](#response)

Scans an encoded [acs_credential](../../../capability-guides/access-systems/managing-credentials.md) from a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Scans an encoded acs_credential from a plastic card placed on the specified encoder.

#### Code:

```javascript
await seam.acs.encoders.scanCredential({
  acs_encoder_id: "b062df92-91c6-482c-a3f9-6e578f062d36",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "action_type": "SCAN_CREDENTIAL",
  "error": null,
  "result": {
    "acs_credential_on_encoder": {
      "card_number": "164d29dc4a09b65f",
      "created_at": "2025-06-16T16:54:17.946514Z",
      "ends_at": "2025-07-13T16:54:17.946512Z",
      "is_issued": true,
      "starts_at": "2025-07-10T16:54:17.946512Z",
      "visionline_metadata": {
        "cancelled": false,
        "card_format": "guest",
        "card_holder": "Guest",
        "card_id": "5",
        "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        "discarded": false,
        "expired": false,
        "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        "number_of_issued_cards": 1,
        "overridden": false,
        "overwritten": false,
        "pending_auto_update": false
      }
    },
    "acs_credential_on_seam": {
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
    "warnings": [
      {
        "warning_code": "acs_credential_on_encoder_out_of_sync",
        "warning_message": "The following properties are out of sync between acs_credential_on_encoder and acs_credential_on_seam: ends_at"
      }
    ]
  },
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Scans an encoded acs_credential from a plastic card placed on the specified encoder.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/scan_credential" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_encoder_id": "b062df92-91c6-482c-a3f9-6e578f062d36"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
    "action_type": "SCAN_CREDENTIAL",
    "error": null,
    "result": {
      "acs_credential_on_encoder": {
        "card_number": "164d29dc4a09b65f",
        "created_at": "2025-06-16T16:54:17.946514Z",
        "ends_at": "2025-07-13T16:54:17.946512Z",
        "is_issued": true,
        "starts_at": "2025-07-10T16:54:17.946512Z",
        "visionline_metadata": {
          "cancelled": false,
          "card_format": "guest",
          "card_holder": "Guest",
          "card_id": "5",
          "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
          "discarded": false,
          "expired": false,
          "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
          "number_of_issued_cards": 1,
          "overridden": false,
          "overwritten": false,
          "pending_auto_update": false
        }
      },
      "acs_credential_on_seam": {
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
      "warnings": [
        {
          "warning_code": "acs_credential_on_encoder_out_of_sync",
          "warning_message": "The following properties are out of sync between acs_credential_on_encoder and acs_credential_on_seam: ends_at"
        }
      ]
    },
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Scans an encoded acs_credential from a plastic card placed on the specified encoder.

#### Code:

```python
seam.acs.encoders.scan_credential(acs_encoder_id="b062df92-91c6-482c-a3f9-6e578f062d36")
```

#### Output:

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    action_type="SCAN_CREDENTIAL",
    error=None,
    result={
        "acs_credential_on_encoder": {
            "card_number": "164d29dc4a09b65f",
            "created_at": "2025-06-16T16:54:17.946514Z",
            "ends_at": "2025-07-13T16:54:17.946512Z",
            "is_issued": true,
            "starts_at": "2025-07-10T16:54:17.946512Z",
            "visionline_metadata": {
                "cancelled": false,
                "card_format": "guest",
                "card_holder": "Guest",
                "card_id": "5",
                "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
                "discarded": false,
                "expired": false,
                "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
                "number_of_issued_cards": 1,
                "overridden": false,
                "overwritten": false,
                "pending_auto_update": false,
            },
        },
        "acs_credential_on_seam": {
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
        "warnings": [
            {
                "warning_code": "acs_credential_on_encoder_out_of_sync",
                "warning_message": "The following properties are out of sync between acs_credential_on_encoder and acs_credential_on_seam: ends_at",
            }
        ],
    },
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Scans an encoded acs_credential from a plastic card placed on the specified encoder.

#### Code:

```ruby
seam.acs.encoders.scan_credential(acs_encoder_id: "b062df92-91c6-482c-a3f9-6e578f062d36")
```

#### Output:

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "action_type" => "SCAN_CREDENTIAL",
  "error" => nil,
  "result" => {
    acs_credential_on_encoder: {
      card_number: "164d29dc4a09b65f",
      created_at: "2025-06-16T16:54:17.946514Z",
      ends_at: "2025-07-13T16:54:17.946512Z",
      is_issued: true,
      starts_at: "2025-07-10T16:54:17.946512Z",
      visionline_metadata: {
        cancelled: false,
        card_format: "guest",
        card_holder: "Guest",
        card_id: "5",
        common_acs_entrance_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        discarded: false,
        expired: false,
        guest_acs_entrance_ids: ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        number_of_issued_cards: 1,
        overridden: false,
        overwritten: false,
        pending_auto_update: false,
      },
    },
    acs_credential_on_seam: {
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
    warnings: [
      {
        warning_code: "acs_credential_on_encoder_out_of_sync",
        warning_message:
          "The following properties are out of sync between acs_credential_on_encoder and acs_credential_on_seam: ends_at",
      },
    ],
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Scans an encoded acs_credential from a plastic card placed on the specified encoder.

#### Code:

```php
$seam->acs->encoders->scan_credential(
    acs_encoder_id: "b062df92-91c6-482c-a3f9-6e578f062d36",
);
```

#### Output:

```php
[
    "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
    "action_type" => "SCAN_CREDENTIAL",
    "error" => null,
    "result" => [
        "acs_credential_on_encoder" => [
            "card_number" => "164d29dc4a09b65f",
            "created_at" => "2025-06-16T16:54:17.946514Z",
            "ends_at" => "2025-07-13T16:54:17.946512Z",
            "is_issued" => true,
            "starts_at" => "2025-07-10T16:54:17.946512Z",
            "visionline_metadata" => [
                "cancelled" => false,
                "card_format" => "guest",
                "card_holder" => "Guest",
                "card_id" => "5",
                "common_acs_entrance_ids" => [
                    "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
                ],
                "discarded" => false,
                "expired" => false,
                "guest_acs_entrance_ids" => [
                    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
                ],
                "number_of_issued_cards" => 1,
                "overridden" => false,
                "overwritten" => false,
                "pending_auto_update" => false,
            ],
        ],
        "acs_credential_on_seam" => [
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
        "warnings" => [
            [
                "warning_code" => "acs_credential_on_encoder_out_of_sync",
                "warning_message" =>
                    "The following properties are out of sync between acs_credential_on_encoder and acs_credential_on_seam: ends_at",
            ],
        ],
    ],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Scans an encoded acs_credential from a plastic card placed on the specified encoder.

#### Code:

```seam_cli
seam acs encoders scan-credential --acs_encoder_id "b062df92-91c6-482c-a3f9-6e578f062d36"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "action_type": "SCAN_CREDENTIAL",
  "error": null,
  "result": {
    "acs_credential_on_encoder": {
      "card_number": "164d29dc4a09b65f",
      "created_at": "2025-06-16T16:54:17.946514Z",
      "ends_at": "2025-07-13T16:54:17.946512Z",
      "is_issued": true,
      "starts_at": "2025-07-10T16:54:17.946512Z",
      "visionline_metadata": {
        "cancelled": false,
        "card_format": "guest",
        "card_holder": "Guest",
        "card_id": "5",
        "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        "discarded": false,
        "expired": false,
        "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        "number_of_issued_cards": 1,
        "overridden": false,
        "overwritten": false,
        "pending_auto_update": false
      }
    },
    "acs_credential_on_seam": {
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
    "warnings": [
      {
        "warning_code": "acs_credential_on_encoder_out_of_sync",
        "warning_message": "The following properties are out of sync between acs_credential_on_encoder and acs_credential_on_seam: ends_at"
      }
    ]
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

**`acs_encoder_id`** *String* (Required)

ID of the encoder to use for the scan.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "action_type": "SCAN_CREDENTIAL",
  "error": null,
  "result": {
    "acs_credential_on_encoder": {
      "card_number": "164d29dc4a09b65f",
      "created_at": "2025-06-16T16:54:17.946514Z",
      "ends_at": "2025-07-13T16:54:17.946512Z",
      "is_issued": true,
      "starts_at": "2025-07-10T16:54:17.946512Z",
      "visionline_metadata": {
        "cancelled": false,
        "card_format": "guest",
        "card_holder": "Guest",
        "card_id": "5",
        "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        "discarded": false,
        "expired": false,
        "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        "number_of_issued_cards": 1,
        "overridden": false,
        "overwritten": false,
        "pending_auto_update": false
      }
    },
    "acs_credential_on_seam": {
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
    "warnings": [
      {
        "warning_code": "acs_credential_on_encoder_out_of_sync",
        "warning_message": "The following properties are out of sync between acs_credential_on_encoder and acs_credential_on_seam: ends_at"
      }
    ]
  },
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
