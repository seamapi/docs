# Create Multiple Linked Access Codes

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates new [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.

Users with more than one door lock in a property may want to create groups of linked access codes, all of which have the same code (PIN). For example, a short-term rental host may want to provide guests the same PIN for both a front door lock and a back door lock.

If you specify a custom code, Seam assigns this custom code to each of the resulting access codes. However, in this case, Seam does not link these access codes together with a `common_code_key`. That is, `common_code_key` remains null for these access codes.

If you want to change these access codes that are not linked by a `common_code_key`, you cannot use `/access_codes/update_multiple`. However, you can update each of these access codes individually, using `/access_codes/update`.

See also [Creating and Updating Multiple Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md).


{% tabs %}
{% tab title="JavaScript" %}

Creates new access codes that share a common code across multiple devices.

#### Code:

```javascript
await seam.accessCodes.createMultiple({
  device_ids: [
    "d9717800-fa73-401a-b66b-03f0ef950e2a",
    "550e8400-e29b-41d4-a716-446655440000",
  ],
  behavior_when_code_cannot_be_shared: "throw",
  preferred_code_length: 4,
  name: "My Linked Access Code",
  starts_at: "2025-06-19T01:41:56.000Z",
  ends_at: "2025-06-22T16:40:40.000Z",
});
```

#### Output:

```javascript
[
  {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
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
    "name": "My Linked Access Code",
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

Creates new access codes that share a common code across multiple devices.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/create_multiple" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_ids": [
    "d9717800-fa73-401a-b66b-03f0ef950e2a",
    "550e8400-e29b-41d4-a716-446655440000"
  ],
  "behavior_when_code_cannot_be_shared": "throw",
  "preferred_code_length": 4,
  "name": "My Linked Access Code",
  "starts_at": "2025-06-19T01:41:56.000Z",
  "ends_at": "2025-06-22T16:40:40.000Z"
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
      "common_code_key": "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
      "created_at": "2025-06-14T16:54:17.946242Z",
      "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
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
      "name": "My Linked Access Code",
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

Creates new access codes that share a common code across multiple devices.

#### Code:

```python
seam.access_codes.create_multiple(
    device_ids=[
        "d9717800-fa73-401a-b66b-03f0ef950e2a",
        "550e8400-e29b-41d4-a716-446655440000",
    ],
    behavior_when_code_cannot_be_shared="throw",
    preferred_code_length=4,
    name="My Linked Access Code",
    starts_at="2025-06-19T01:41:56.000Z",
    ends_at="2025-06-22T16:40:40.000Z",
)
```

#### Output:

```python
[
    AccessCode(
        access_code_id="e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
        code="1234",
        common_code_key="auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
        created_at="2025-06-14T16:54:17.946242Z",
        device_id="c9cd621d-ef0c-45c8-b608-026ebdb74615",
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
        name="My Linked Access Code",
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

Creates new access codes that share a common code across multiple devices.

#### Code:

```ruby
seam.access_codes.create_multiple(
  device_ids: %w[d9717800-fa73-401a-b66b-03f0ef950e2a 550e8400-e29b-41d4-a716-446655440000],
  behavior_when_code_cannot_be_shared: "throw",
  preferred_code_length: 4,
  name: "My Linked Access Code",
  starts_at: "2025-06-19T01:41:56.000Z",
  ends_at: "2025-06-22T16:40:40.000Z",
)
```

#### Output:

```ruby
[
  {
    "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code" => "1234",
    "common_code_key" => "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
    "created_at" => "2025-06-14T16:54:17.946242Z",
    "device_id" => "c9cd621d-ef0c-45c8-b608-026ebdb74615",
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
    "name" => "My Linked Access Code",
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

Creates new access codes that share a common code across multiple devices.

#### Code:

```php
$seam->access_codes->create_multiple(
    device_ids: [
        "d9717800-fa73-401a-b66b-03f0ef950e2a",
        "550e8400-e29b-41d4-a716-446655440000",
    ],
    behavior_when_code_cannot_be_shared: "throw",
    preferred_code_length: 4,
    name: "My Linked Access Code",
    starts_at: "2025-06-19T01:41:56.000Z",
    ends_at: "2025-06-22T16:40:40.000Z"
);
```

#### Output:

```php
[
    [
        "access_code_id" => "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
        "code" => "1234",
        "common_code_key" =>
            "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
        "created_at" => "2025-06-14T16:54:17.946242Z",
        "device_id" => "c9cd621d-ef0c-45c8-b608-026ebdb74615",
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
        "name" => "My Linked Access Code",
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

Creates new access codes that share a common code across multiple devices.

#### Code:

```seam_cli
seam access-codes create-multiple --device_ids ["d9717800-fa73-401a-b66b-03f0ef950e2a","550e8400-e29b-41d4-a716-446655440000"] --behavior_when_code_cannot_be_shared "throw" --preferred_code_length 4 --name "My Linked Access Code" --starts_at "2025-06-19T01:41:56.000Z" --ends_at "2025-06-22T16:40:40.000Z"
```

#### Output:

```seam_cli
[
  {
    "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
    "code": "1234",
    "common_code_key": "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
    "created_at": "2025-06-14T16:54:17.946242Z",
    "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
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
    "name": "My Linked Access Code",
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

**`device_ids`** *Array* *of UUIDs* (Required)

IDs of the devices for which you want to create the new access codes.

---

**`allow_external_modification`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed. Default: `false`.

---

**`attempt_for_offline_device`** *Boolean*

---

**`behavior_when_code_cannot_be_shared`** *String*

Desired behavior if any device cannot share a code. If `throw` (default), no access codes will be created if any device cannot share a code. If `create_random_code`, a random code will be created on devices that cannot share a code.

---

**`code`** *String*

Code to be used for access.

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
**Array of [access\_codes](.)**

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
