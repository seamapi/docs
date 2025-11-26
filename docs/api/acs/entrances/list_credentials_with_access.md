# List Credentials with Access to an Entrance

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md) with access to a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all credentials with access to a specified entrance.

#### Code:

```javascript
await seam.acs.entrances.listCredentialsWithAccess({
  acs_entrance_id: "afdde789-8684-425a-b421-6031bb3df62e",
});
```

#### Output:

```javascript
[
  {
    "access_method": "code",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
    "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
    "code": "123456",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "FRONT_DOOR",
    "errors": [],
    "external_type": "salto_ks_credential",
    "external_type_display_name": "Salto KS Credential",
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": false,
    "is_one_time_use": false,
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-07-10T16:54:17.946512Z",
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all credentials with access to a specified entrance.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/list_credentials_with_access" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_entrance_id": "afdde789-8684-425a-b421-6031bb3df62e"
}
EOF
```

#### Output:

```curl
{
  "acs_credentials": [
    {
      "access_method": "code",
      "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
      "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
      "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
      "code": "123456",
      "created_at": "2025-06-16T16:54:17.946514Z",
      "display_name": "FRONT_DOOR",
      "errors": [],
      "external_type": "salto_ks_credential",
      "external_type_display_name": "Salto KS Credential",
      "is_latest_desired_state_synced_with_provider": true,
      "is_managed": true,
      "is_multi_phone_sync_credential": false,
      "is_one_time_use": false,
      "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
      "starts_at": "2025-07-10T16:54:17.946512Z",
      "warnings": [],
      "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all credentials with access to a specified entrance.

#### Code:

```python
seam.acs.entrances.list_credentials_with_access(
    acs_entrance_id="afdde789-8684-425a-b421-6031bb3df62e"
)
```

#### Output:

```python
[
    AcsCredential(
        access_method="code",
        acs_credential_id="73a0a199-024f-454d-a916-9bbda8502c12",
        acs_system_id="b1d03165-2759-474b-a342-e02223f27b39",
        acs_user_id="0fc82df4-391b-4d00-a234-86378f1c3952",
        code="123456",
        created_at="2025-06-16T16:54:17.946514Z",
        display_name="FRONT_DOOR",
        errors=[],
        external_type="salto_ks_credential",
        external_type_display_name="Salto KS Credential",
        is_latest_desired_state_synced_with_provider=true,
        is_managed=true,
        is_multi_phone_sync_credential=false,
        is_one_time_use=false,
        latest_desired_state_synced_with_provider_at="2025-06-18T16:54:17.946514Z",
        starts_at="2025-07-10T16:54:17.946512Z",
        warnings=[],
        workspace_id="005f1e54-5360-40db-8c31-4ef6baaad1fd",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all credentials with access to a specified entrance.

#### Code:

```ruby
seam.acs.entrances.list_credentials_with_access(
  acs_entrance_id: "afdde789-8684-425a-b421-6031bb3df62e",
)
```

#### Output:

```ruby
[
  {
    "access_method" => "code",
    "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id" => "b1d03165-2759-474b-a342-e02223f27b39",
    "acs_user_id" => "0fc82df4-391b-4d00-a234-86378f1c3952",
    "code" => "123456",
    "created_at" => "2025-06-16T16:54:17.946514Z",
    "display_name" => "FRONT_DOOR",
    "errors" => [],
    "external_type" => "salto_ks_credential",
    "external_type_display_name" => "Salto KS Credential",
    "is_latest_desired_state_synced_with_provider" => true,
    "is_managed" => true,
    "is_multi_phone_sync_credential" => false,
    "is_one_time_use" => false,
    "latest_desired_state_synced_with_provider_at" => "2025-06-18T16:54:17.946514Z",
    "starts_at" => "2025-07-10T16:54:17.946512Z",
    "warnings" => [],
    "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all credentials with access to a specified entrance.

#### Code:

```php
$seam->acs->entrances->list_credentials_with_access(
    acs_entrance_id: "afdde789-8684-425a-b421-6031bb3df62e",
);
```

#### Output:

```php
[
    [
        "access_method" => "code",
        "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
        "acs_system_id" => "b1d03165-2759-474b-a342-e02223f27b39",
        "acs_user_id" => "0fc82df4-391b-4d00-a234-86378f1c3952",
        "code" => "123456",
        "created_at" => "2025-06-16T16:54:17.946514Z",
        "display_name" => "FRONT_DOOR",
        "errors" => [],
        "external_type" => "salto_ks_credential",
        "external_type_display_name" => "Salto KS Credential",
        "is_latest_desired_state_synced_with_provider" => true,
        "is_managed" => true,
        "is_multi_phone_sync_credential" => false,
        "is_one_time_use" => false,
        "latest_desired_state_synced_with_provider_at" =>
            "2025-06-18T16:54:17.946514Z",
        "starts_at" => "2025-07-10T16:54:17.946512Z",
        "warnings" => [],
        "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all credentials with access to a specified entrance.

#### Code:

```seam_cli
seam acs entrances list-credentials-with-access --acs_entrance_id "afdde789-8684-425a-b421-6031bb3df62e"
```

#### Output:

```seam_cli
[
  {
    "access_method": "code",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
    "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
    "code": "123456",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "FRONT_DOOR",
    "errors": [],
    "external_type": "salto_ks_credential",
    "external_type_display_name": "Salto KS Credential",
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": false,
    "is_one_time_use": false,
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-07-10T16:54:17.946512Z",
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  }
]
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

**`acs_entrance_id`** *String* (Required)

ID of the entrance for which you want to list all credentials that grant access.

---

**`include_if`** *Array* *of Enums*

Conditions that credentials must meet to be included in the returned list.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>visionline_metadata.is_valid</code>
</details>

---


## Response

{% hint style="success" %}
Returns:
Array of [acs\_credentials](./../credentials)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_method": "card",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
  "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
  "connected_account_id": "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
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
}
```
{% endtab %}
{% endtabs %}
