# List Access Codes

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

Specify either `device_id` or `access_code_ids`.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all access codes.

#### Code:

```javascript
await seam.accessCodes.list({
  device_id: "f5197f50-839b-4a8e-82f3-e9ef06af93ae",
  limit: 10,
});
```

#### Output:

```javascript
[
  {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "f5197f50-839b-4a8e-82f3-e9ef06af93ae",
    "ends_at": "2025-07-04T16:54:17.946049Z",
    "errors": [],
    "is_backup": false,
    "is_backup_access_code_available": false,
    "is_external_modification_allowed": false,
    "is_managed": true,
    "is_offline_access_code": false,
    "is_one_time_use": false,
    "is_scheduled_on_device": true,
    "is_waiting_for_code_assignment": false,
    "name": "My Access Code",
    "pulled_backup_access_code_id": null,
    "starts_at": "2025-07-02T16:54:17.946049Z",
    "status": "set",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all access codes.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "f5197f50-839b-4a8e-82f3-e9ef06af93ae",
  "limit": 10
}
EOF
```

#### Output:

```curl
{
  "access_codes": [
    {
      "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
      "code": "1234",
      "common_code_key": null,
      "created_at": "2025-06-14T16:54:17.946242Z",
      "device_id": "f5197f50-839b-4a8e-82f3-e9ef06af93ae",
      "ends_at": "2025-07-04T16:54:17.946049Z",
      "errors": [],
      "is_backup": false,
      "is_backup_access_code_available": false,
      "is_external_modification_allowed": false,
      "is_managed": true,
      "is_offline_access_code": false,
      "is_one_time_use": false,
      "is_scheduled_on_device": true,
      "is_waiting_for_code_assignment": false,
      "name": "My Access Code",
      "pulled_backup_access_code_id": null,
      "starts_at": "2025-07-02T16:54:17.946049Z",
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

Returns a list of all access codes.

#### Code:

```python
seam.access_codes.list(device_id="f5197f50-839b-4a8e-82f3-e9ef06af93ae", limit=10)
```

#### Output:

```python
[
    AccessCode(
        access_code_id="e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
        code="1234",
        common_code_key=None,
        created_at="2025-06-14T16:54:17.946242Z",
        device_id="f5197f50-839b-4a8e-82f3-e9ef06af93ae",
        ends_at="2025-07-04T16:54:17.946049Z",
        errors=[],
        is_backup=false,
        is_backup_access_code_available=false,
        is_external_modification_allowed=false,
        is_managed=true,
        is_offline_access_code=false,
        is_one_time_use=false,
        is_scheduled_on_device=true,
        is_waiting_for_code_assignment=false,
        name="My Access Code",
        pulled_backup_access_code_id=None,
        starts_at="2025-07-02T16:54:17.946049Z",
        status="set",
        type="time_bound",
        warnings=[],
        workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all access codes.

#### Code:

```ruby
seam.access_codes.list(device_id: "f5197f50-839b-4a8e-82f3-e9ef06af93ae", limit: 10)
```

#### Output:

```ruby
[
  {
    "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code" => "1234",
    "common_code_key" => nil,
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "f5197f50-839b-4a8e-82f3-e9ef06af93ae",
    "ends_at" => "2025-07-04T16:54:17.946049Z",
    "errors" => [],
    "is_backup" => false,
    "is_backup_access_code_available" => false,
    "is_external_modification_allowed" => false,
    "is_managed" => true,
    "is_offline_access_code" => false,
    "is_one_time_use" => false,
    "is_scheduled_on_device" => true,
    "is_waiting_for_code_assignment" => false,
    "name" => "My Access Code",
    "pulled_backup_access_code_id" => nil,
    "starts_at" => "2025-07-02T16:54:17.946049Z",
    "status" => "set",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all access codes.

#### Code:

```php
$seam->access_codes->list(
    device_id: "f5197f50-839b-4a8e-82f3-e9ef06af93ae",
    limit: 10,
);
```

#### Output:

```php
[
    [
        "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
        "code" => "1234",
        "common_code_key" => null,
        "created_at" => "2025-06-14T16:54:17.946242Z",
        "device_id" => "f5197f50-839b-4a8e-82f3-e9ef06af93ae",
        "ends_at" => "2025-07-04T16:54:17.946049Z",
        "errors" => [],
        "is_backup" => false,
        "is_backup_access_code_available" => false,
        "is_external_modification_allowed" => false,
        "is_managed" => true,
        "is_offline_access_code" => false,
        "is_one_time_use" => false,
        "is_scheduled_on_device" => true,
        "is_waiting_for_code_assignment" => false,
        "name" => "My Access Code",
        "pulled_backup_access_code_id" => null,
        "starts_at" => "2025-07-02T16:54:17.946049Z",
        "status" => "set",
        "type" => "time_bound",
        "warnings" => [],
        "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all access codes.

#### Code:

```seam_cli
seam access-codes list --device_id "f5197f50-839b-4a8e-82f3-e9ef06af93ae" --limit 10
```

#### Output:

```seam_cli
[
  {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "f5197f50-839b-4a8e-82f3-e9ef06af93ae",
    "ends_at": "2025-07-04T16:54:17.946049Z",
    "errors": [],
    "is_backup": false,
    "is_backup_access_code_available": false,
    "is_external_modification_allowed": false,
    "is_managed": true,
    "is_offline_access_code": false,
    "is_one_time_use": false,
    "is_scheduled_on_device": true,
    "is_waiting_for_code_assignment": false,
    "name": "My Access Code",
    "pulled_backup_access_code_id": null,
    "starts_at": "2025-07-02T16:54:17.946049Z",
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

**`access_code_ids`** *Array* *of UUIDs*

IDs of the access codes that you want to retrieve. Specify either `device_id` or `access_code_ids`.

---

**`customer_key`** *String*

Customer key for which you want to list access codes.

---

**`device_id`** *String*

ID of the device for which you want to list access codes. Specify either `device_id` or `access_code_ids`.

---

**`limit`** *Number*

Numerical limit on the number of access codes to return.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`user_identifier_key`** *String*

Your user ID for the user by which to filter access codes.

---


## Response

{% hint style="success" %}
Returns:
Array of [access\_codes](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": true,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% endtabs %}
