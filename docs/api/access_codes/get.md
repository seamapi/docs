# Get an Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

You must specify either `access_code_id` or both `device_id` and `code`.


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified access code.

#### Code:

```javascript
await seam.accessCodes.get({
  access_code_id: "90a114dc-48b5-4b8b-a3d3-972344594401",
});
```

#### Output:

```javascript
{
  "access_code_id": "90a114dc-48b5-4b8b-a3d3-972344594401",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "7bce4bcc-6c35-4cc0-bbae-1c8bc5b4a5b5",
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
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified access code.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_code_id": "90a114dc-48b5-4b8b-a3d3-972344594401"
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "90a114dc-48b5-4b8b-a3d3-972344594401",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "7bce4bcc-6c35-4cc0-bbae-1c8bc5b4a5b5",
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
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified access code.

#### Code:

```python
seam.access_codes.get(access_code_id="90a114dc-48b5-4b8b-a3d3-972344594401")
```

#### Output:

```python
AccessCode(
    access_code_id="90a114dc-48b5-4b8b-a3d3-972344594401",
    code="1234",
    common_code_key=None,
    created_at="2025-06-14T16:54:17.946242Z",
    device_id="7bce4bcc-6c35-4cc0-bbae-1c8bc5b4a5b5",
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
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified access code.

#### Code:

```ruby
seam.access_codes.get(access_code_id: "90a114dc-48b5-4b8b-a3d3-972344594401")
```

#### Output:

```ruby
{
  "access_code_id" => "90a114dc-48b5-4b8b-a3d3-972344594401",
  "code" => "1234",
  "common_code_key" => nil,
  "created_at" => "2025-06-14T16:54:17.946242Z",
  "device_id" => "7bce4bcc-6c35-4cc0-bbae-1c8bc5b4a5b5",
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
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified access code.

#### Code:

```php
$seam->access_codes->get(
    access_code_id: "90a114dc-48b5-4b8b-a3d3-972344594401",
);
```

#### Output:

```php
[
    "access_code_id" => "90a114dc-48b5-4b8b-a3d3-972344594401",
    "code" => "1234",
    "common_code_key" => null,
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "7bce4bcc-6c35-4cc0-bbae-1c8bc5b4a5b5",
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
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified access code.

#### Code:

```seam_cli
seam access-codes get --access_code_id "90a114dc-48b5-4b8b-a3d3-972344594401"
```

#### Output:

```seam_cli
{
  "access_code_id": "90a114dc-48b5-4b8b-a3d3-972344594401",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "7bce4bcc-6c35-4cc0-bbae-1c8bc5b4a5b5",
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
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_code_id`** *String*

ID of the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`code`** *String*

Code of the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`device_id`** *String*

ID of the device containing the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---


## Response

{% hint style="success" %}
Returns:
**[access\_code](.)**

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
