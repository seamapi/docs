# Get a Phone

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [phone](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified phone.

#### Code:

```javascript
await seam.phones.get({ device_id: "2c39adb7-ba99-4b60-927d-9b796952c8e8" });
```

#### Output:

```javascript
{
  "created_at": "2025-06-14T16:54:17.946540Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "2c39adb7-ba99-4b60-927d-9b796952c8e8",
  "device_type": "ios_phone",
  "display_name": "My Phone",
  "errors": [],
  "nickname": "My Phone",
  "properties": {
    "assa_abloy_credential_service_metadata": {
      "endpoints": [
        {
          "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
          "is_active": true
        }
      ],
      "has_active_endpoint": true
    }
  },
  "warnings": [],
  "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified phone.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/phones/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "2c39adb7-ba99-4b60-927d-9b796952c8e8"
}
EOF
```

#### Output:

```curl
{
  "phone": {
    "created_at": "2025-06-14T16:54:17.946540Z",
    "custom_metadata": { "id": "internalId1" },
    "device_id": "2c39adb7-ba99-4b60-927d-9b796952c8e8",
    "device_type": "ios_phone",
    "display_name": "My Phone",
    "errors": [],
    "nickname": "My Phone",
    "properties": {
      "assa_abloy_credential_service_metadata": {
        "endpoints": [
          {
            "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
            "is_active": true
          }
        ],
        "has_active_endpoint": true
      }
    },
    "warnings": [],
    "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified phone.

#### Code:

```python
seam.phones.get(device_id="2c39adb7-ba99-4b60-927d-9b796952c8e8")
```

#### Output:

```python
Phone(created_at="2025-06-14T16:54:17.946540Z", custom_metadata={"id":"internalId1"}, device_id="2c39adb7-ba99-4b60-927d-9b796952c8e8", device_type="ios_phone", display_name="My Phone", errors=[], nickname="My Phone", properties={"assa_abloy_credential_service_metadata":{"endpoints":[{"endpoint_id":"c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f","is_active":true}],"has_active_endpoint":true}}, warnings=[], workspace_id="da8639a4-28a2-4884-a4f9-b7691f4cf336")
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified phone.

#### Code:

```ruby
seam.phones.get(device_id: "2c39adb7-ba99-4b60-927d-9b796952c8e8")
```

#### Output:

```ruby
{"created_at" => "2025-06-14T16:54:17.946540Z","custom_metadata" => {"id":"internalId1"},"device_id" => "2c39adb7-ba99-4b60-927d-9b796952c8e8","device_type" => "ios_phone","display_name" => "My Phone","errors" => [],"nickname" => "My Phone","properties" => {"assa_abloy_credential_service_metadata":{"endpoints":[{"endpoint_id":"c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f","is_active":true}],"has_active_endpoint":true}},"warnings" => [],"workspace_id" => "da8639a4-28a2-4884-a4f9-b7691f4cf336"}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified phone.

#### Code:

```php
$seam->phones->get(device_id: "2c39adb7-ba99-4b60-927d-9b796952c8e8");
```

#### Output:

```php
[
    "created_at" => "2025-06-14T16:54:17.946540Z",
    "custom_metadata" => ["id" => "internalId1"],
    "device_id" => "2c39adb7-ba99-4b60-927d-9b796952c8e8",
    "device_type" => "ios_phone",
    "display_name" => "My Phone",
    "errors" => [],
    "nickname" => "My Phone",
    "properties" => [
        "assa_abloy_credential_service_metadata" => [
            "endpoints" => [
                [
                    "endpoint_id" => "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
                    "is_active" => true,
                ],
            ],
            "has_active_endpoint" => true,
        ],
    ],
    "warnings" => [],
    "workspace_id" => "da8639a4-28a2-4884-a4f9-b7691f4cf336",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified phone.

#### Code:

```seam_cli
seam phones get --device_id "2c39adb7-ba99-4b60-927d-9b796952c8e8"
```

#### Output:

```seam_cli
{
  "created_at": "2025-06-14T16:54:17.946540Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "2c39adb7-ba99-4b60-927d-9b796952c8e8",
  "device_type": "ios_phone",
  "display_name": "My Phone",
  "errors": [],
  "nickname": "My Phone",
  "properties": {
    "assa_abloy_credential_service_metadata": {
      "endpoints": [
        {
          "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
          "is_active": true
        }
      ],
      "has_active_endpoint": true
    }
  },
  "warnings": [],
  "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
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

**`device_id`** *String* (Required)

Device ID of the phone that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[phone](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "created_at": "2025-06-14T16:54:17.946540Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "e452f665-a635-4c65-922b-9feab0e0f84f",
  "device_type": "ios_phone",
  "display_name": "My Phone",
  "errors": [],
  "nickname": "My Phone",
  "properties": {
    "assa_abloy_credential_service_metadata": {
      "endpoints": [
        {
          "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
          "is_active": true
        }
      ],
      "has_active_endpoint": true
    }
  },
  "warnings": [],
  "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
}
```
{% endtab %}
{% endtabs %}
