# Get a Credential

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified credential.

#### Code:

```javascript
await seam.acs.credentials.get({
  acs_credential_id: "f2b8eaa6-5e6d-433f-87cc-a283f4df688d",
});
```

#### Output:

```javascript
{
  "access_method": "code",
  "acs_credential_id": "f2b8eaa6-5e6d-433f-87cc-a283f4df688d",
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
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified credential.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "f2b8eaa6-5e6d-433f-87cc-a283f4df688d"
}
EOF
```

#### Output:

```curl
{
  "acs_credential": {
    "access_method": "code",
    "acs_credential_id": "f2b8eaa6-5e6d-433f-87cc-a283f4df688d",
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
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified credential.

#### Code:

```python
seam.acs.credentials.get(acs_credential_id="f2b8eaa6-5e6d-433f-87cc-a283f4df688d")
```

#### Output:

```python
AcsCredential(
    access_method="code",
    acs_credential_id="f2b8eaa6-5e6d-433f-87cc-a283f4df688d",
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
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified credential.

#### Code:

```ruby
seam.acs.credentials.get(acs_credential_id: "f2b8eaa6-5e6d-433f-87cc-a283f4df688d")
```

#### Output:

```ruby
{
  "access_method" => "code",
  "acs_credential_id" => "f2b8eaa6-5e6d-433f-87cc-a283f4df688d",
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
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified credential.

#### Code:

```php
$seam->acs->credentials->get(
    acs_credential_id: "f2b8eaa6-5e6d-433f-87cc-a283f4df688d",
);
```

#### Output:

```php
[
    "access_method" => "code",
    "acs_credential_id" => "f2b8eaa6-5e6d-433f-87cc-a283f4df688d",
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
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified credential.

#### Code:

```seam_cli
seam acs credentials get --acs_credential_id "f2b8eaa6-5e6d-433f-87cc-a283f4df688d"
```

#### Output:

```seam_cli
{
  "access_method": "code",
  "acs_credential_id": "f2b8eaa6-5e6d-433f-87cc-a283f4df688d",
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

**`acs_credential_id`** *String* (Required)

ID of the credential that you want to get.

---


## Response

{% hint style="success" %}
Returns:
[acs\_credential](.)**

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
