# List Access Methods
{% hint style="info" %}
**Early Access Preview.** The access methods API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Lists all access methods, usually filtered by Access Grant.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all access methods, filtered by Access Grant.

#### Code:

```javascript
await seam.accessMethods.list({
  access_grant_id: "9072ebcd-95f3-4e4b-8f2f-10053911533b",
});
```

#### Output:

```javascript
[
  {
    "access_method_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "created_at": "2025-06-16T16:54:17.946606Z",
    "display_name": "PIN Code Credential",
    "is_card_encoding_required": false,
    "mode": "code",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  },
  {
    "access_method_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "created_at": "2025-06-16T16:54:19.946606Z",
    "display_name": "Card Credential",
    "is_card_encoding_required": true,
    "mode": "card",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  },
  {
    "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    "created_at": "2025-06-16T16:54:21.946606Z",
    "display_name": "Mobile Key Credential",
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required": false,
    "mode": "mobile_key",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all access methods, filtered by Access Grant.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_methods/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_grant_id": "9072ebcd-95f3-4e4b-8f2f-10053911533b"
}
EOF
```

#### Output:

```curl
{
  "access_methods": [
    {
      "access_method_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "PIN Code Credential",
      "is_card_encoding_required": false,
      "mode": "code",
      "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
    },
    {
      "access_method_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
      "created_at": "2025-06-16T16:54:19.946606Z",
      "display_name": "Card Credential",
      "is_card_encoding_required": true,
      "mode": "card",
      "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
    },
    {
      "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      "created_at": "2025-06-16T16:54:21.946606Z",
      "display_name": "Mobile Key Credential",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "is_card_encoding_required": false,
      "mode": "mobile_key",
      "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all access methods, filtered by Access Grant.

#### Code:

```python
seam.access_methods.list(access_grant_id="9072ebcd-95f3-4e4b-8f2f-10053911533b")
```

#### Output:

```python
[
    AccessMethod(
        access_method_id="a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        created_at="2025-06-16T16:54:17.946606Z",
        display_name="PIN Code Credential",
        is_card_encoding_required=false,
        mode="code",
        workspace_id="661025d3-c1d2-403c-83a8-af153aaedfbc",
    ),
    AccessMethod(
        access_method_id="5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        created_at="2025-06-16T16:54:19.946606Z",
        display_name="Card Credential",
        is_card_encoding_required=true,
        mode="card",
        workspace_id="661025d3-c1d2-403c-83a8-af153aaedfbc",
    ),
    AccessMethod(
        access_method_id="c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
        created_at="2025-06-16T16:54:21.946606Z",
        display_name="Mobile Key Credential",
        instant_key_url="https://ik.seam.co/ABCXYZ",
        is_card_encoding_required=false,
        mode="mobile_key",
        workspace_id="661025d3-c1d2-403c-83a8-af153aaedfbc",
    ),
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all access methods, filtered by Access Grant.

#### Code:

```ruby
seam.access_methods.list(access_grant_id: "9072ebcd-95f3-4e4b-8f2f-10053911533b")
```

#### Output:

```ruby
[
  {
    "access_method_id" => "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "created_at" => "2025-06-16T16:54:17.946606Z",
    "display_name" => "PIN Code Credential",
    "is_card_encoding_required" => false,
    "mode" => "code",
    "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
  },
  {
    "access_method_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "created_at" => "2025-06-16T16:54:19.946606Z",
    "display_name" => "Card Credential",
    "is_card_encoding_required" => true,
    "mode" => "card",
    "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
  },
  {
    "access_method_id" => "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    "created_at" => "2025-06-16T16:54:21.946606Z",
    "display_name" => "Mobile Key Credential",
    "instant_key_url" => "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required" => false,
    "mode" => "mobile_key",
    "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all access methods, filtered by Access Grant.

#### Code:

```php
$seam->access_methods->list(
    access_grant_id: "9072ebcd-95f3-4e4b-8f2f-10053911533b",
);
```

#### Output:

```php
[
    [
        "access_method_id" => "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "created_at" => "2025-06-16T16:54:17.946606Z",
        "display_name" => "PIN Code Credential",
        "is_card_encoding_required" => false,
        "mode" => "code",
        "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
    ],
    [
        "access_method_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "created_at" => "2025-06-16T16:54:19.946606Z",
        "display_name" => "Card Credential",
        "is_card_encoding_required" => true,
        "mode" => "card",
        "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
    ],
    [
        "access_method_id" => "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
        "created_at" => "2025-06-16T16:54:21.946606Z",
        "display_name" => "Mobile Key Credential",
        "instant_key_url" => "https://ik.seam.co/ABCXYZ",
        "is_card_encoding_required" => false,
        "mode" => "mobile_key",
        "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all access methods, filtered by Access Grant.

#### Code:

```seam_cli
seam access-methods list --access_grant_id "9072ebcd-95f3-4e4b-8f2f-10053911533b"
```

#### Output:

```seam_cli
[
  {
    "access_method_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "created_at": "2025-06-16T16:54:17.946606Z",
    "display_name": "PIN Code Credential",
    "is_card_encoding_required": false,
    "mode": "code",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  },
  {
    "access_method_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "created_at": "2025-06-16T16:54:19.946606Z",
    "display_name": "Card Credential",
    "is_card_encoding_required": true,
    "mode": "card",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  },
  {
    "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    "created_at": "2025-06-16T16:54:21.946606Z",
    "display_name": "Mobile Key Credential",
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required": false,
    "mode": "mobile_key",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
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

**`access_grant_id`** *String* (Required)

ID of Access Grant to list access methods for.

---

**`acs_entrance_id`** *String*

ID of the entrance for which you want to retrieve all access methods.

---

**`device_id`** *String*

ID of the device for which you want to retrieve all access methods.

---

**`space_id`** *String*

ID of the space for which you want to retrieve all access methods.

---


## Response

{% hint style="success" %}
Returns:
Array of [access\_methods](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_method_id": "27d8ad77-55c2-4e20-b5b3-43555926f0e8",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My Card",
  "is_card_encoding_required": true,
  "issued_at": "2025-06-14T16:54:17.946612Z",
  "mode": "card",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}
{% endtabs %}
