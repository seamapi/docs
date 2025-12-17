# Create an Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Creates a new [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new ongoing online access code.

#### Code:

```javascript
await seam.accessCodes.create({
  device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
  name: "My Ongoing Online Access Code",
  code: "1234",
});
```

#### Output:

```javascript
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Ongoing Online Access Code",
  "pulled_backup_access_code_id": null,
  "status": "set",
  "type": "ongoing",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new ongoing online access code.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "name": "My Ongoing Online Access Code",
  "code": "1234"
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "errors": [],
    "is_backup": false,
    "is_backup_access_code_available": false,
    "is_external_modification_allowed": false,
    "is_managed": true,
    "is_offline_access_code": false,
    "is_one_time_use": false,
    "is_scheduled_on_device": true,
    "is_waiting_for_code_assignment": false,
    "name": "My Ongoing Online Access Code",
    "pulled_backup_access_code_id": null,
    "status": "set",
    "type": "ongoing",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new ongoing online access code.

#### Code:

```python
seam.access_codes.create(device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", name="My Ongoing Online Access Code", code="1234")
```

#### Output:

```python
AccessCode(access_code_id="e9cf6dd6-89aa-477f-a701-c08f3de13c1f", code="1234", common_code_key=None, created_at="2025-06-14T16:54:17.946242Z", device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", errors=[], is_backup=false, is_backup_access_code_available=false, is_external_modification_allowed=false, is_managed=true, is_offline_access_code=false, is_one_time_use=false, is_scheduled_on_device=true, is_waiting_for_code_assignment=false, name="My Ongoing Online Access Code", pulled_backup_access_code_id=None, status="set", type="ongoing", warnings=[], workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7")
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new ongoing online access code.

#### Code:

```ruby
seam.access_codes.create(device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730", name: "My Ongoing Online Access Code", code: "1234")
```

#### Output:

```ruby
{"access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f","code" => "1234","common_code_key" => nil,"created_at" => "2025-06-14T16:54:17.946242Z","device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730","errors" => [],"is_backup" => false,"is_backup_access_code_available" => false,"is_external_modification_allowed" => false,"is_managed" => true,"is_offline_access_code" => false,"is_one_time_use" => false,"is_scheduled_on_device" => true,"is_waiting_for_code_assignment" => false,"name" => "My Ongoing Online Access Code","pulled_backup_access_code_id" => nil,"status" => "set","type" => "ongoing","warnings" => [],"workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new ongoing online access code.

#### Code:

```php
$seam->access_codes->create(
    device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
    name: "My Ongoing Online Access Code",
    code: "1234",
);
```

#### Output:

```php
[
    "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code" => "1234",
    "common_code_key" => null,
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "errors" => [],
    "is_backup" => false,
    "is_backup_access_code_available" => false,
    "is_external_modification_allowed" => false,
    "is_managed" => true,
    "is_offline_access_code" => false,
    "is_one_time_use" => false,
    "is_scheduled_on_device" => true,
    "is_waiting_for_code_assignment" => false,
    "name" => "My Ongoing Online Access Code",
    "pulled_backup_access_code_id" => null,
    "status" => "set",
    "type" => "ongoing",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new ongoing online access code.

#### Code:

```seam_cli
seam access-codes create --device_id "a5036385-adcb-41b5-88c2-dd8a702a0730" --name "My Ongoing Online Access Code" --code "1234"
```

#### Output:

```seam_cli
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Ongoing Online Access Code",
  "pulled_backup_access_code_id": null,
  "status": "set",
  "type": "ongoing",
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

**`device_id`** *String* (Required)

ID of the device for which you want to create the new access code.

---

**`allow_external_modification`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed. Default: `false`.

---

**`attempt_for_offline_device`** *Boolean*

---

**`code`** *String*

Code to be used for access.

---

**`common_code_key`** *String*

Key to identify access codes that should have the same code. Any two access codes with the same `common_code_key` are guaranteed to have the same `code`. See also [Creating and Updating Multiple Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md).

---

**`ends_at`** *String*

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`is_external_modification_allowed`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed. Default: `false`.

---

**`is_offline_access_code`** *Boolean*

Indicates whether the access code is an [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes).

---

**`is_one_time_use`** *Boolean*

Indicates whether the [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) is a single-use access code.

---

**`max_time_rounding`** *String*

Maximum rounding adjustment. To create a daily-bound [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) for devices that support this feature, set this parameter to `1d`.

---

**`name`** *String*

Name of the new access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.

Note that the name provided on Seam is used to identify the code on Seam and is not necessarily the name that will appear in the lock provider's app or on the device. This is because lock providers may have constraints on names, such as length, uniqueness, or characters that can be used. In addition, some lock providers may break down names into components such as `first_name` and `last_name`.

To provide a consistent experience, Seam identifies the code on Seam by its name but may modify the name that appears on the lock provider's app or on the device. For example, Seam may add additional characters or truncate the name to meet provider constraints.

To help your users identify codes set by Seam, Seam provides the name exactly as it appears on the lock provider's app or on the device as a separate property called `appearance`. This is an object with a `name` property and, optionally, `first_name` and `last_name` properties (for providers that break down a name into components).

---

**`prefer_native_scheduling`** *Boolean*

Indicates whether [native scheduling](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) should be used for time-bound codes when supported by the provider. Default: `true`.

---

**`preferred_code_length`** *Number*

Preferred code length. Only applicable if you do not specify a `code`. If the affected device does not support the preferred code length, Seam reverts to using the shortest supported code length.

---

**`starts_at`** *String*

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`use_backup_access_code_pool`** *Boolean*

Indicates whether to use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. If `true`, you can use [`/access_codes/pull_backup_access_code`](https://docs.seam.co/latest/api/access_codes/pull_backup_access_code).

---

**`use_offline_access_code`** *Boolean*

{% hint style="warning" %}
**Deprecated**. Use `is_offline_access_code` instead.
{% endhint %}

---


## Response

{% hint style="success" %}
Returns:
**[access\_code](.)

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

---

## Examples


### Create a time-bound online access code

Creates a new time-bound online access code.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.accessCodes.create({
  device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
  name: "My Time-Bound Online Access Code",
  starts_at: "2025-06-20T06:49:21.000Z",
  ends_at: "2025-06-22T12:08:26.000Z",
  code: "1234",
});
```

#### Output:

```javascript
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Time-Bound Online Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-06-20T06:49:21.000Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "name": "My Time-Bound Online Access Code",
  "starts_at": "2025-06-20T06:49:21.000Z",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "code": "1234"
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "ends_at": "2025-06-22T12:08:26.000Z",
    "errors": [],
    "is_backup": false,
    "is_backup_access_code_available": false,
    "is_external_modification_allowed": false,
    "is_managed": true,
    "is_offline_access_code": false,
    "is_one_time_use": false,
    "is_scheduled_on_device": true,
    "is_waiting_for_code_assignment": false,
    "name": "My Time-Bound Online Access Code",
    "pulled_backup_access_code_id": null,
    "starts_at": "2025-06-20T06:49:21.000Z",
    "status": "set",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.access_codes.create(device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", name="My Time-Bound Online Access Code", starts_at="2025-06-20T06:49:21.000Z", ends_at="2025-06-22T12:08:26.000Z", code="1234")
```

#### Output:

```python
AccessCode(access_code_id="e9cf6dd6-89aa-477f-a701-c08f3de13c1f", code="1234", common_code_key=None, created_at="2025-06-14T16:54:17.946242Z", device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", ends_at="2025-06-22T12:08:26.000Z", errors=[], is_backup=false, is_backup_access_code_available=false, is_external_modification_allowed=false, is_managed=true, is_offline_access_code=false, is_one_time_use=false, is_scheduled_on_device=true, is_waiting_for_code_assignment=false, name="My Time-Bound Online Access Code", pulled_backup_access_code_id=None, starts_at="2025-06-20T06:49:21.000Z", status="set", type="time_bound", warnings=[], workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7")
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.access_codes.create(device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730", name: "My Time-Bound Online Access Code", starts_at: "2025-06-20T06:49:21.000Z", ends_at: "2025-06-22T12:08:26.000Z", code: "1234")
```

#### Output:

```ruby
{"access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f","code" => "1234","common_code_key" => nil,"created_at" => "2025-06-14T16:54:17.946242Z","device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730","ends_at" => "2025-06-22T12:08:26.000Z","errors" => [],"is_backup" => false,"is_backup_access_code_available" => false,"is_external_modification_allowed" => false,"is_managed" => true,"is_offline_access_code" => false,"is_one_time_use" => false,"is_scheduled_on_device" => true,"is_waiting_for_code_assignment" => false,"name" => "My Time-Bound Online Access Code","pulled_backup_access_code_id" => nil,"starts_at" => "2025-06-20T06:49:21.000Z","status" => "set","type" => "time_bound","warnings" => [],"workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->access_codes->create(
    device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
    name: "My Time-Bound Online Access Code",
    starts_at: "2025-06-20T06:49:21.000Z",
    ends_at: "2025-06-22T12:08:26.000Z",
    code: "1234",
);
```

#### Output:

```php
[
    "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code" => "1234",
    "common_code_key" => null,
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "ends_at" => "2025-06-22T12:08:26.000Z",
    "errors" => [],
    "is_backup" => false,
    "is_backup_access_code_available" => false,
    "is_external_modification_allowed" => false,
    "is_managed" => true,
    "is_offline_access_code" => false,
    "is_one_time_use" => false,
    "is_scheduled_on_device" => true,
    "is_waiting_for_code_assignment" => false,
    "name" => "My Time-Bound Online Access Code",
    "pulled_backup_access_code_id" => null,
    "starts_at" => "2025-06-20T06:49:21.000Z",
    "status" => "set",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam access-codes create --device_id "a5036385-adcb-41b5-88c2-dd8a702a0730" --name "My Time-Bound Online Access Code" --starts_at "2025-06-20T06:49:21.000Z" --ends_at "2025-06-22T12:08:26.000Z" --code "1234"
```

#### Output:

```seam_cli
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Time-Bound Online Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-06-20T06:49:21.000Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% endtabs %}

---


### Create a time-bound offline access code

Creates a new time-bound offline access code.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.accessCodes.create({
  device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
  name: "My Time-Bound Offline Access Code",
  starts_at: "2025-06-20T06:49:21.000Z",
  ends_at: "2025-06-22T12:08:26.000Z",
  attempt_for_offline_device: true,
  preferred_code_length: 4,
  use_offline_access_code: true,
  is_offline_access_code: true,
  max_time_rounding: "1h",
});
```

#### Output:

```javascript
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Time-Bound Offline Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-06-20T06:49:21.000Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "name": "My Time-Bound Offline Access Code",
  "starts_at": "2025-06-20T06:49:21.000Z",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "attempt_for_offline_device": true,
  "preferred_code_length": 4,
  "use_offline_access_code": true,
  "is_offline_access_code": true,
  "max_time_rounding": "1h"
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "ends_at": "2025-06-22T12:08:26.000Z",
    "errors": [],
    "is_backup": false,
    "is_backup_access_code_available": false,
    "is_external_modification_allowed": false,
    "is_managed": true,
    "is_offline_access_code": true,
    "is_one_time_use": false,
    "is_scheduled_on_device": true,
    "is_waiting_for_code_assignment": false,
    "name": "My Time-Bound Offline Access Code",
    "pulled_backup_access_code_id": null,
    "starts_at": "2025-06-20T06:49:21.000Z",
    "status": "set",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.access_codes.create(device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", name="My Time-Bound Offline Access Code", starts_at="2025-06-20T06:49:21.000Z", ends_at="2025-06-22T12:08:26.000Z", attempt_for_offline_device=true, preferred_code_length=4, use_offline_access_code=true, is_offline_access_code=true, max_time_rounding="1h")
```

#### Output:

```python
AccessCode(access_code_id="e9cf6dd6-89aa-477f-a701-c08f3de13c1f", code="1234", common_code_key=None, created_at="2025-06-14T16:54:17.946242Z", device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", ends_at="2025-06-22T12:08:26.000Z", errors=[], is_backup=false, is_backup_access_code_available=false, is_external_modification_allowed=false, is_managed=true, is_offline_access_code=true, is_one_time_use=false, is_scheduled_on_device=true, is_waiting_for_code_assignment=false, name="My Time-Bound Offline Access Code", pulled_backup_access_code_id=None, starts_at="2025-06-20T06:49:21.000Z", status="set", type="time_bound", warnings=[], workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7")
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.access_codes.create(device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730", name: "My Time-Bound Offline Access Code", starts_at: "2025-06-20T06:49:21.000Z", ends_at: "2025-06-22T12:08:26.000Z", attempt_for_offline_device: true, preferred_code_length: 4, use_offline_access_code: true, is_offline_access_code: true, max_time_rounding: "1h")
```

#### Output:

```ruby
{"access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f","code" => "1234","common_code_key" => nil,"created_at" => "2025-06-14T16:54:17.946242Z","device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730","ends_at" => "2025-06-22T12:08:26.000Z","errors" => [],"is_backup" => false,"is_backup_access_code_available" => false,"is_external_modification_allowed" => false,"is_managed" => true,"is_offline_access_code" => true,"is_one_time_use" => false,"is_scheduled_on_device" => true,"is_waiting_for_code_assignment" => false,"name" => "My Time-Bound Offline Access Code","pulled_backup_access_code_id" => nil,"starts_at" => "2025-06-20T06:49:21.000Z","status" => "set","type" => "time_bound","warnings" => [],"workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->access_codes->create(
    device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
    name: "My Time-Bound Offline Access Code",
    starts_at: "2025-06-20T06:49:21.000Z",
    ends_at: "2025-06-22T12:08:26.000Z",
    attempt_for_offline_device: true,
    preferred_code_length: 4,
    use_offline_access_code: true,
    is_offline_access_code: true,
    max_time_rounding: "1h",
);
```

#### Output:

```php
[
    "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code" => "1234",
    "common_code_key" => null,
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "ends_at" => "2025-06-22T12:08:26.000Z",
    "errors" => [],
    "is_backup" => false,
    "is_backup_access_code_available" => false,
    "is_external_modification_allowed" => false,
    "is_managed" => true,
    "is_offline_access_code" => true,
    "is_one_time_use" => false,
    "is_scheduled_on_device" => true,
    "is_waiting_for_code_assignment" => false,
    "name" => "My Time-Bound Offline Access Code",
    "pulled_backup_access_code_id" => null,
    "starts_at" => "2025-06-20T06:49:21.000Z",
    "status" => "set",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam access-codes create --device_id "a5036385-adcb-41b5-88c2-dd8a702a0730" --name "My Time-Bound Offline Access Code" --starts_at "2025-06-20T06:49:21.000Z" --ends_at "2025-06-22T12:08:26.000Z" --attempt_for_offline_device true --preferred_code_length 4 --use_offline_access_code true --is_offline_access_code true --max_time_rounding "1h"
```

#### Output:

```seam_cli
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Time-Bound Offline Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-06-20T06:49:21.000Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% endtabs %}

---


### Create a one-time-use offline access code

Creates a new one-time-use offline access code.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.accessCodes.create({
  device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
  name: "My One-Time-Use Offline Access Code",
  starts_at: "2025-06-20T06:49:21.000Z",
  ends_at: "2025-06-22T12:08:26.000Z",
  attempt_for_offline_device: true,
  preferred_code_length: 4,
  use_offline_access_code: true,
  is_offline_access_code: true,
  is_one_time_use: true,
});
```

#### Output:

```javascript
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": true,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My One-Time-Use Offline Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-06-20T06:49:21.000Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "name": "My One-Time-Use Offline Access Code",
  "starts_at": "2025-06-20T06:49:21.000Z",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "attempt_for_offline_device": true,
  "preferred_code_length": 4,
  "use_offline_access_code": true,
  "is_offline_access_code": true,
  "is_one_time_use": true
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "ends_at": "2025-06-22T12:08:26.000Z",
    "errors": [],
    "is_backup": false,
    "is_backup_access_code_available": false,
    "is_external_modification_allowed": false,
    "is_managed": true,
    "is_offline_access_code": true,
    "is_one_time_use": true,
    "is_scheduled_on_device": true,
    "is_waiting_for_code_assignment": false,
    "name": "My One-Time-Use Offline Access Code",
    "pulled_backup_access_code_id": null,
    "starts_at": "2025-06-20T06:49:21.000Z",
    "status": "set",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.access_codes.create(device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", name="My One-Time-Use Offline Access Code", starts_at="2025-06-20T06:49:21.000Z", ends_at="2025-06-22T12:08:26.000Z", attempt_for_offline_device=true, preferred_code_length=4, use_offline_access_code=true, is_offline_access_code=true, is_one_time_use=true)
```

#### Output:

```python
AccessCode(access_code_id="e9cf6dd6-89aa-477f-a701-c08f3de13c1f", code="1234", common_code_key=None, created_at="2025-06-14T16:54:17.946242Z", device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", ends_at="2025-06-22T12:08:26.000Z", errors=[], is_backup=false, is_backup_access_code_available=false, is_external_modification_allowed=false, is_managed=true, is_offline_access_code=true, is_one_time_use=true, is_scheduled_on_device=true, is_waiting_for_code_assignment=false, name="My One-Time-Use Offline Access Code", pulled_backup_access_code_id=None, starts_at="2025-06-20T06:49:21.000Z", status="set", type="time_bound", warnings=[], workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7")
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.access_codes.create(device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730", name: "My One-Time-Use Offline Access Code", starts_at: "2025-06-20T06:49:21.000Z", ends_at: "2025-06-22T12:08:26.000Z", attempt_for_offline_device: true, preferred_code_length: 4, use_offline_access_code: true, is_offline_access_code: true, is_one_time_use: true)
```

#### Output:

```ruby
{"access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f","code" => "1234","common_code_key" => nil,"created_at" => "2025-06-14T16:54:17.946242Z","device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730","ends_at" => "2025-06-22T12:08:26.000Z","errors" => [],"is_backup" => false,"is_backup_access_code_available" => false,"is_external_modification_allowed" => false,"is_managed" => true,"is_offline_access_code" => true,"is_one_time_use" => true,"is_scheduled_on_device" => true,"is_waiting_for_code_assignment" => false,"name" => "My One-Time-Use Offline Access Code","pulled_backup_access_code_id" => nil,"starts_at" => "2025-06-20T06:49:21.000Z","status" => "set","type" => "time_bound","warnings" => [],"workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->access_codes->create(
    device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
    name: "My One-Time-Use Offline Access Code",
    starts_at: "2025-06-20T06:49:21.000Z",
    ends_at: "2025-06-22T12:08:26.000Z",
    attempt_for_offline_device: true,
    preferred_code_length: 4,
    use_offline_access_code: true,
    is_offline_access_code: true,
    is_one_time_use: true,
);
```

#### Output:

```php
[
    "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code" => "1234",
    "common_code_key" => null,
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "ends_at" => "2025-06-22T12:08:26.000Z",
    "errors" => [],
    "is_backup" => false,
    "is_backup_access_code_available" => false,
    "is_external_modification_allowed" => false,
    "is_managed" => true,
    "is_offline_access_code" => true,
    "is_one_time_use" => true,
    "is_scheduled_on_device" => true,
    "is_waiting_for_code_assignment" => false,
    "name" => "My One-Time-Use Offline Access Code",
    "pulled_backup_access_code_id" => null,
    "starts_at" => "2025-06-20T06:49:21.000Z",
    "status" => "set",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam access-codes create --device_id "a5036385-adcb-41b5-88c2-dd8a702a0730" --name "My One-Time-Use Offline Access Code" --starts_at "2025-06-20T06:49:21.000Z" --ends_at "2025-06-22T12:08:26.000Z" --attempt_for_offline_device true --preferred_code_length 4 --use_offline_access_code true --is_offline_access_code true --is_one_time_use true
```

#### Output:

```seam_cli
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": true,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My One-Time-Use Offline Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-06-20T06:49:21.000Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% endtabs %}

---


### Create a time-bound online access code with a backup access code pool

Creates a new time-bound online access code with a backup access code pool.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.accessCodes.create({
  device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
  name: "My Time-Bound Access Code",
  starts_at: "2025-06-20T06:49:21.000Z",
  ends_at: "2025-06-22T12:08:26.000Z",
  code: "1234",
  use_backup_access_code_pool: true,
});
```

#### Output:

```javascript
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": true,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Time-Bound Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-06-20T06:49:21.000Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "name": "My Time-Bound Access Code",
  "starts_at": "2025-06-20T06:49:21.000Z",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "code": "1234",
  "use_backup_access_code_pool": true
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": null,
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "ends_at": "2025-06-22T12:08:26.000Z",
    "errors": [],
    "is_backup": false,
    "is_backup_access_code_available": true,
    "is_external_modification_allowed": false,
    "is_managed": true,
    "is_offline_access_code": false,
    "is_one_time_use": false,
    "is_scheduled_on_device": true,
    "is_waiting_for_code_assignment": false,
    "name": "My Time-Bound Access Code",
    "pulled_backup_access_code_id": null,
    "starts_at": "2025-06-20T06:49:21.000Z",
    "status": "set",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.access_codes.create(device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", name="My Time-Bound Access Code", starts_at="2025-06-20T06:49:21.000Z", ends_at="2025-06-22T12:08:26.000Z", code="1234", use_backup_access_code_pool=true)
```

#### Output:

```python
AccessCode(access_code_id="e9cf6dd6-89aa-477f-a701-c08f3de13c1f", code="1234", common_code_key=None, created_at="2025-06-14T16:54:17.946242Z", device_id="a5036385-adcb-41b5-88c2-dd8a702a0730", ends_at="2025-06-22T12:08:26.000Z", errors=[], is_backup=false, is_backup_access_code_available=true, is_external_modification_allowed=false, is_managed=true, is_offline_access_code=false, is_one_time_use=false, is_scheduled_on_device=true, is_waiting_for_code_assignment=false, name="My Time-Bound Access Code", pulled_backup_access_code_id=None, starts_at="2025-06-20T06:49:21.000Z", status="set", type="time_bound", warnings=[], workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7")
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.access_codes.create(device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730", name: "My Time-Bound Access Code", starts_at: "2025-06-20T06:49:21.000Z", ends_at: "2025-06-22T12:08:26.000Z", code: "1234", use_backup_access_code_pool: true)
```

#### Output:

```ruby
{"access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f","code" => "1234","common_code_key" => nil,"created_at" => "2025-06-14T16:54:17.946242Z","device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730","ends_at" => "2025-06-22T12:08:26.000Z","errors" => [],"is_backup" => false,"is_backup_access_code_available" => true,"is_external_modification_allowed" => false,"is_managed" => true,"is_offline_access_code" => false,"is_one_time_use" => false,"is_scheduled_on_device" => true,"is_waiting_for_code_assignment" => false,"name" => "My Time-Bound Access Code","pulled_backup_access_code_id" => nil,"starts_at" => "2025-06-20T06:49:21.000Z","status" => "set","type" => "time_bound","warnings" => [],"workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->access_codes->create(
    device_id: "a5036385-adcb-41b5-88c2-dd8a702a0730",
    name: "My Time-Bound Access Code",
    starts_at: "2025-06-20T06:49:21.000Z",
    ends_at: "2025-06-22T12:08:26.000Z",
    code: "1234",
    use_backup_access_code_pool: true,
);
```

#### Output:

```php
[
    "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code" => "1234",
    "common_code_key" => null,
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "a5036385-adcb-41b5-88c2-dd8a702a0730",
    "ends_at" => "2025-06-22T12:08:26.000Z",
    "errors" => [],
    "is_backup" => false,
    "is_backup_access_code_available" => true,
    "is_external_modification_allowed" => false,
    "is_managed" => true,
    "is_offline_access_code" => false,
    "is_one_time_use" => false,
    "is_scheduled_on_device" => true,
    "is_waiting_for_code_assignment" => false,
    "name" => "My Time-Bound Access Code",
    "pulled_backup_access_code_id" => null,
    "starts_at" => "2025-06-20T06:49:21.000Z",
    "status" => "set",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam access-codes create --device_id "a5036385-adcb-41b5-88c2-dd8a702a0730" --name "My Time-Bound Access Code" --starts_at "2025-06-20T06:49:21.000Z" --ends_at "2025-06-22T12:08:26.000Z" --code "1234" --use_backup_access_code_pool true
```

#### Output:

```seam_cli
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "a5036385-adcb-41b5-88c2-dd8a702a0730",
  "ends_at": "2025-06-22T12:08:26.000Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": true,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Time-Bound Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-06-20T06:49:21.000Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% endtabs %}
