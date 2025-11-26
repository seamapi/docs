# List Phones

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [phones](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md). To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all phones, using the owner's user identity ID.

#### Code:

```javascript
await seam.phones.list({
  owner_user_identity_id: "6bc848b0-0e7f-4d4c-8ea1-004ccda0b0a4",
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all phones, using the owner's user identity ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/phones/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "owner_user_identity_id": "6bc848b0-0e7f-4d4c-8ea1-004ccda0b0a4"
}
EOF
```

#### Output:

```curl
{
  "phones": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all phones, using the owner's user identity ID.

#### Code:

```python
seam.phones.list(owner_user_identity_id="6bc848b0-0e7f-4d4c-8ea1-004ccda0b0a4")
```

#### Output:

```python
[
    Phone(
        created_at="2025-06-14T16:54:17.946540Z",
        custom_metadata={"id": "internalId1"},
        device_id="e452f665-a635-4c65-922b-9feab0e0f84f",
        device_type="ios_phone",
        display_name="My Phone",
        errors=[],
        nickname="My Phone",
        properties={
            "assa_abloy_credential_service_metadata": {
                "endpoints": [
                    {
                        "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
                        "is_active": true,
                    }
                ],
                "has_active_endpoint": true,
            }
        },
        warnings=[],
        workspace_id="da8639a4-28a2-4884-a4f9-b7691f4cf336",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all phones, using the owner's user identity ID.

#### Code:

```ruby
seam.phones.list(owner_user_identity_id: "6bc848b0-0e7f-4d4c-8ea1-004ccda0b0a4")
```

#### Output:

```ruby
[
  {
    "created_at" => "2025-06-14T16:54:17.946540Z",
    "custom_metadata" => {
      id: "internalId1",
    },
    "device_id" => "e452f665-a635-4c65-922b-9feab0e0f84f",
    "device_type" => "ios_phone",
    "display_name" => "My Phone",
    "errors" => [],
    "nickname" => "My Phone",
    "properties" => {
      assa_abloy_credential_service_metadata: {
        endpoints: [{ endpoint_id: "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f", is_active: true }],
        has_active_endpoint: true,
      },
    },
    "warnings" => [],
    "workspace_id" => "da8639a4-28a2-4884-a4f9-b7691f4cf336",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all phones, using the owner's user identity ID.

#### Code:

```php
$seam->phones->list(
    owner_user_identity_id: "6bc848b0-0e7f-4d4c-8ea1-004ccda0b0a4",
);
```

#### Output:

```php
[
    [
        "created_at" => "2025-06-14T16:54:17.946540Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "e452f665-a635-4c65-922b-9feab0e0f84f",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all phones, using the owner's user identity ID.

#### Code:

```seam_cli
seam phones list --owner_user_identity_id "6bc848b0-0e7f-4d4c-8ea1-004ccda0b0a4"
```

#### Output:

```seam_cli
[
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
]
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

**`acs_credential_id`** *String*

ID of the [credential](../../capability-guides/access-systems/managing-credentials.md) by which you want to filter the list of returned phones.

---

**`owner_user_identity_id`** *String*

ID of the user identity that represents the owner by which you want to filter the list of returned phones.

---


## Response

{% hint style="success" %}
Returns:
Array of [phones](.)**

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

---

## Examples


### List phones for a credential

Returns a list of all phones, using the credential ID.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.phones.list({
  acs_credential_id: "6617f81a-d601-4e33-9052-f44bf1b4ed2b",
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/phones/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "6617f81a-d601-4e33-9052-f44bf1b4ed2b"
}
EOF
```

#### Output:

```curl
{
  "phones": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.phones.list(acs_credential_id="6617f81a-d601-4e33-9052-f44bf1b4ed2b")
```

#### Output:

```python
[
    Phone(
        created_at="2025-06-14T16:54:17.946540Z",
        custom_metadata={"id": "internalId1"},
        device_id="e452f665-a635-4c65-922b-9feab0e0f84f",
        device_type="ios_phone",
        display_name="My Phone",
        errors=[],
        nickname="My Phone",
        properties={
            "assa_abloy_credential_service_metadata": {
                "endpoints": [
                    {
                        "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
                        "is_active": true,
                    }
                ],
                "has_active_endpoint": true,
            }
        },
        warnings=[],
        workspace_id="da8639a4-28a2-4884-a4f9-b7691f4cf336",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.phones.list(acs_credential_id: "6617f81a-d601-4e33-9052-f44bf1b4ed2b")
```

#### Output:

```ruby
[
  {
    "created_at" => "2025-06-14T16:54:17.946540Z",
    "custom_metadata" => {
      id: "internalId1",
    },
    "device_id" => "e452f665-a635-4c65-922b-9feab0e0f84f",
    "device_type" => "ios_phone",
    "display_name" => "My Phone",
    "errors" => [],
    "nickname" => "My Phone",
    "properties" => {
      assa_abloy_credential_service_metadata: {
        endpoints: [{ endpoint_id: "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f", is_active: true }],
        has_active_endpoint: true,
      },
    },
    "warnings" => [],
    "workspace_id" => "da8639a4-28a2-4884-a4f9-b7691f4cf336",
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->phones->list(acs_credential_id: "6617f81a-d601-4e33-9052-f44bf1b4ed2b");
```

#### Output:

```php
[
    [
        "created_at" => "2025-06-14T16:54:17.946540Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "e452f665-a635-4c65-922b-9feab0e0f84f",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam phones list --acs_credential_id "6617f81a-d601-4e33-9052-f44bf1b4ed2b"
```

#### Output:

```seam_cli
[
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
]
```
{% endtab %}

{% endtabs %}
