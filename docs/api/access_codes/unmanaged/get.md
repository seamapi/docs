# Get an Unmanaged Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

You must specify either `access_code_id` or both `device_id` and `code`.


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified unmanaged access code.

#### Code:

```javascript
await seam.accessCodes.unmanaged.get({
  access_code_id: "41b984ec-1b74-48cd-ba68-16660cd792b6",
});
```

#### Output:

```javascript
{
  "access_code_id": "41b984ec-1b74-48cd-ba68-16660cd792b6",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946283Z",
  "device_id": "6047cb40-73e5-4517-85c2-2664c2e4eca1",
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

{% tab title="cURL" %}

Returns a specified unmanaged access code.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/unmanaged/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_code_id": "41b984ec-1b74-48cd-ba68-16660cd792b6"
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "41b984ec-1b74-48cd-ba68-16660cd792b6",
    "code": "1234",
    "created_at": "2025-06-16T16:54:17.946283Z",
    "device_id": "6047cb40-73e5-4517-85c2-2664c2e4eca1",
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
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified unmanaged access code.

#### Code:

```python
seam.access_codes.unmanaged.get(access_code_id="41b984ec-1b74-48cd-ba68-16660cd792b6")
```

#### Output:

```python
UnmanagedAccessCode(
    access_code_id="41b984ec-1b74-48cd-ba68-16660cd792b6",
    code="1234",
    created_at="2025-06-16T16:54:17.946283Z",
    device_id="6047cb40-73e5-4517-85c2-2664c2e4eca1",
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
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified unmanaged access code.

#### Code:

```ruby
seam.access_codes.unmanaged.get(access_code_id: "41b984ec-1b74-48cd-ba68-16660cd792b6")
```

#### Output:

```ruby
{
  "access_code_id" => "41b984ec-1b74-48cd-ba68-16660cd792b6",
  "code" => "1234",
  "created_at" => "2025-06-16T16:54:17.946283Z",
  "device_id" => "6047cb40-73e5-4517-85c2-2664c2e4eca1",
  "ends_at" => "2025-06-23T16:54:17.946261Z",
  "errors" => [],
  "is_managed" => false,
  "name" => "My Unmanaged Access Code",
  "starts_at" => "2025-06-21T16:54:17.946261Z",
  "status" => "set",
  "type" => "time_bound",
  "warnings" => [],
  "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified unmanaged access code.

#### Code:

```php
$seam->access_codes->unmanaged->get(
    access_code_id: "41b984ec-1b74-48cd-ba68-16660cd792b6"
);
```

#### Output:

```php
[
    "access_code_id" => "41b984ec-1b74-48cd-ba68-16660cd792b6",
    "code" => "1234",
    "created_at" => "2025-06-16T16:54:17.946283Z",
    "device_id" => "6047cb40-73e5-4517-85c2-2664c2e4eca1",
    "ends_at" => "2025-06-23T16:54:17.946261Z",
    "errors" => [],
    "is_managed" => false,
    "name" => "My Unmanaged Access Code",
    "starts_at" => "2025-06-21T16:54:17.946261Z",
    "status" => "set",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified unmanaged access code.

#### Code:

```seam_cli
seam access-codes unmanaged get --access_code_id "41b984ec-1b74-48cd-ba68-16660cd792b6"
```

#### Output:

```seam_cli
{
  "access_code_id": "41b984ec-1b74-48cd-ba68-16660cd792b6",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946283Z",
  "device_id": "6047cb40-73e5-4517-85c2-2664c2e4eca1",
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


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_code_id`** *String*

ID of the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`code`** *String*

Code of the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`device_id`** *String*

ID of the device containing the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---


## Response

{% hint style="success" %}
**Returns:**
[unmanaged\_access\_code](.)

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
