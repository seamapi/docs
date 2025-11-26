# Pull a Backup Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Retrieves a backup access code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes). See also [Managing Backup Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).

A backup access code pool is a collection of pre-programmed access codes stored on a device, ready for use. These codes are programmed in addition to the regular access codes on Seam, serving as a safety net for any issues with the primary codes. If there's ever a complication with a primary access code—be it due to intermittent connectivity, manual removal from a device, or provider outages—a backup code can be retrieved. Its end time can then be adjusted to align with the original code, facilitating seamless and uninterrupted access.

You can pull a backup access code from the pool at any time. These backup codes are guaranteed to work immediately and automatically programmed to be removed from the device after the access code ends.

You can only pull backup access codes for time-bound access codes.

Before pulling a backup access code, make sure that the device's `properties.supports_backup_access_code_pool` is `true`. Then, to activate the backup pool, set `use_backup_access_code_pool` to `true` when creating an access code.


{% tabs %}
{% tab title="JavaScript" %}

Retrieves a backup access code for an access code.

#### Code:

```javascript
await seam.accessCodes.pullBackupAccessCode({
  access_code_id: "8e525b87-5e4b-48a5-a322-5d45262a735f",
});
```

#### Output:

```javascript
{
  "access_code_id": "8e525b87-5e4b-48a5-a322-5d45262a735f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": true,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "unset",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% tab title="cURL" %}

Retrieves a backup access code for an access code.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/pull_backup_access_code" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_code_id": "8e525b87-5e4b-48a5-a322-5d45262a735f"
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "8e525b87-5e4b-48a5-a322-5d45262a735f",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
    "ends_at": "2025-07-04T16:54:17.946049Z",
    "errors": [],
    "is_backup": false,
    "is_backup_access_code_available": true,
    "is_external_modification_allowed": false,
    "is_managed": true,
    "is_offline_access_code": false,
    "is_one_time_use": false,
    "is_scheduled_on_device": true,
    "is_waiting_for_code_assignment": false,
    "name": "My Access Code",
    "pulled_backup_access_code_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    "starts_at": "2025-07-02T16:54:17.946049Z",
    "status": "unset",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Retrieves a backup access code for an access code.

#### Code:

```python
seam.access_codes.pull_backup_access_code(
    access_code_id="8e525b87-5e4b-48a5-a322-5d45262a735f"
)
```

#### Output:

```python
AccessCode(
    access_code_id="8e525b87-5e4b-48a5-a322-5d45262a735f",
    code="1234",
    common_code_key=None,
    created_at="2025-06-14T16:54:17.946242Z",
    device_id="c9cd621d-ef0c-45c8-b608-026ebdb74615",
    ends_at="2025-07-04T16:54:17.946049Z",
    errors=[],
    is_backup=false,
    is_backup_access_code_available=true,
    is_external_modification_allowed=false,
    is_managed=true,
    is_offline_access_code=false,
    is_one_time_use=false,
    is_scheduled_on_device=true,
    is_waiting_for_code_assignment=false,
    name="My Access Code",
    pulled_backup_access_code_id="6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    starts_at="2025-07-02T16:54:17.946049Z",
    status="unset",
    type="time_bound",
    warnings=[],
    workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
)
```
{% endtab %}

{% tab title="Ruby" %}

Retrieves a backup access code for an access code.

#### Code:

```ruby
seam.access_codes.pull_backup_access_code(access_code_id: "8e525b87-5e4b-48a5-a322-5d45262a735f")
```

#### Output:

```ruby
{
  "access_code_id" => "8e525b87-5e4b-48a5-a322-5d45262a735f",
  "code" => "1234",
  "common_code_key" => nil,
  "created_at" => "2025-06-14T16:54:17.946242Z",
  "device_id" => "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at" => "2025-07-04T16:54:17.946049Z",
  "errors" => [],
  "is_backup" => false,
  "is_backup_access_code_available" => true,
  "is_external_modification_allowed" => false,
  "is_managed" => true,
  "is_offline_access_code" => false,
  "is_one_time_use" => false,
  "is_scheduled_on_device" => true,
  "is_waiting_for_code_assignment" => false,
  "name" => "My Access Code",
  "pulled_backup_access_code_id" => "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "starts_at" => "2025-07-02T16:54:17.946049Z",
  "status" => "unset",
  "type" => "time_bound",
  "warnings" => [],
  "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
}
```
{% endtab %}

{% tab title="PHP" %}

Retrieves a backup access code for an access code.

#### Code:

```php
$seam->access_codes->pull_backup_access_code(
    access_code_id: "8e525b87-5e4b-48a5-a322-5d45262a735f",
);
```

#### Output:

```php
[
    "access_code_id" => "8e525b87-5e4b-48a5-a322-5d45262a735f",
    "code" => "1234",
    "common_code_key" => null,
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "c9cd621d-ef0c-45c8-b608-026ebdb74615",
    "ends_at" => "2025-07-04T16:54:17.946049Z",
    "errors" => [],
    "is_backup" => false,
    "is_backup_access_code_available" => true,
    "is_external_modification_allowed" => false,
    "is_managed" => true,
    "is_offline_access_code" => false,
    "is_one_time_use" => false,
    "is_scheduled_on_device" => true,
    "is_waiting_for_code_assignment" => false,
    "name" => "My Access Code",
    "pulled_backup_access_code_id" => "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    "starts_at" => "2025-07-02T16:54:17.946049Z",
    "status" => "unset",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Retrieves a backup access code for an access code.

#### Code:

```seam_cli
seam access-codes pull-backup-access-code --access_code_id "8e525b87-5e4b-48a5-a322-5d45262a735f"
```

#### Output:

```seam_cli
{
  "access_code_id": "8e525b87-5e4b-48a5-a322-5d45262a735f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": true,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "unset",
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

**`access_code_id`** *String* (Required)

ID of the access code for which you want to pull a backup access code.

---


## Response

{% hint style="success" %}
Returns:
[access\_code](.)**

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
