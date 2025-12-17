# List Unmanaged Access Codes

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [unmanaged access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all unmanaged access codes.

#### Code:

```javascript
await seam.accessCodes.unmanaged.list({
  device_id: "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1",
});
```

#### Output:

```javascript
[
  {
    "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
    "code": "1234",
    "created_at": "2025-06-16T16:54:17.946283Z",
    "device_id": "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1",
    "ends_at": "2025-06-23T16:54:17.946261Z",
    "errors": [],
    "is_managed": false,
    "name": "My Unmanaged Access Code",
    "starts_at": "2025-06-21T16:54:17.946261Z",
    "status": "set",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all unmanaged access codes.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/unmanaged/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1"
}
EOF
```

#### Output:

```curl
{
  "access_codes": [
    {
      "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
      "code": "1234",
      "created_at": "2025-06-16T16:54:17.946283Z",
      "device_id": "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1",
      "ends_at": "2025-06-23T16:54:17.946261Z",
      "errors": [],
      "is_managed": false,
      "name": "My Unmanaged Access Code",
      "starts_at": "2025-06-21T16:54:17.946261Z",
      "status": "set",
      "type": "time_bound",
      "warnings": [],
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all unmanaged access codes.

#### Code:

```python
seam.access_codes.unmanaged.list(device_id="d885a24c-5741-49b1-85dc-ff6d5cf2f1b1")
```

#### Output:

```python
[
    UnmanagedAccessCode(
        access_code_id="88fa1812-bef8-4108-9fb4-4855376c3edf",
        code="1234",
        created_at="2025-06-16T16:54:17.946283Z",
        device_id="d885a24c-5741-49b1-85dc-ff6d5cf2f1b1",
        ends_at="2025-06-23T16:54:17.946261Z",
        errors=[],
        is_managed=false,
        name="My Unmanaged Access Code",
        starts_at="2025-06-21T16:54:17.946261Z",
        status="set",
        type="time_bound",
        warnings=[],
        workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all unmanaged access codes.

#### Code:

```ruby
seam.access_codes.unmanaged.list(device_id: "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1")
```

#### Output:

```ruby
[
  {
    "access_code_id" => "88fa1812-bef8-4108-9fb4-4855376c3edf",
    "code" => "1234",
    "created_at" => "2025-06-16T16:54:17.946283Z",
    "device_id" => "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1",
    "ends_at" => "2025-06-23T16:54:17.946261Z",
    "errors" => [],
    "is_managed" => false,
    "name" => "My Unmanaged Access Code",
    "starts_at" => "2025-06-21T16:54:17.946261Z",
    "status" => "set",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all unmanaged access codes.

#### Code:

```php
$seam->access_codes->unmanaged->list(
    device_id: "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1",
);
```

#### Output:

```php
[
    [
        "access_code_id" => "88fa1812-bef8-4108-9fb4-4855376c3edf",
        "code" => "1234",
        "created_at" => "2025-06-16T16:54:17.946283Z",
        "device_id" => "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1",
        "ends_at" => "2025-06-23T16:54:17.946261Z",
        "errors" => [],
        "is_managed" => false,
        "name" => "My Unmanaged Access Code",
        "starts_at" => "2025-06-21T16:54:17.946261Z",
        "status" => "set",
        "type" => "time_bound",
        "warnings" => [],
        "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all unmanaged access codes.

#### Code:

```seam_cli
seam access-codes unmanaged list --device_id "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1"
```

#### Output:

```seam_cli
[
  {
    "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
    "code": "1234",
    "created_at": "2025-06-16T16:54:17.946283Z",
    "device_id": "d885a24c-5741-49b1-85dc-ff6d5cf2f1b1",
    "ends_at": "2025-06-23T16:54:17.946261Z",
    "errors": [],
    "is_managed": false,
    "name": "My Unmanaged Access Code",
    "starts_at": "2025-06-21T16:54:17.946261Z",
    "status": "set",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
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

**`device_id`** *String* (Required)

ID of the device for which you want to list unmanaged access codes.

---

**`limit`** *Number*

Numerical limit on the number of unmanaged access codes to return.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`user_identifier_key`** *String*

Your user ID for the user by which to filter unmanaged access codes.

---


## Response

{% hint style="success" %}
Returns:
**Array of [unmanaged\_access\_codes](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946283Z",
  "device_id": "b3439f17-7273-46f3-9e20-9a283d9cb5b4",
  "ends_at": "2025-06-23T16:54:17.946261Z",
  "errors": [],
  "is_managed": false,
  "name": "My Unmanaged Access Code",
  "starts_at": "2025-06-21T16:54:17.946261Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% endtabs %}
