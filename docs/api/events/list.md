# List Events

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all events. This endpoint returns the same events that would be sent to a [webhook](https://docs.seam.co/latest/developer-tools/webhooks), but it enables you to filter or see events that already took place.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of events for a specified device.

#### Code:

```javascript
await seam.events.list({
  device_id: "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
  since: "2025-05-15T00:00:00.000Z",
  limit: 10,
});
```

#### Output:

```javascript
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of events for a specified device.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
  "since": "2025-05-15T00:00:00.000Z",
  "limit": 10
}
EOF
```

#### Output:

```curl
{
  "events": [
    {
      "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
      "created_at": "2025-06-15T16:54:18.000000Z",
      "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
      "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
      "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      "event_type": "device.connected",
      "occurred_at": "2025-06-15T16:54:17.946329Z",
      "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of events for a specified device.

#### Code:

```python
seam.events.list(device_id="b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2", since="2025-05-15T00:00:00.000Z", limit=10)
```

#### Output:

```python
[SeamEvent(connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", created_at="2025-06-15T16:54:18.000000Z", device_id="b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2", event_description="The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.", event_id="6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a", event_type="device.connected", occurred_at="2025-06-15T16:54:17.946329Z", workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d")]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of events for a specified device.

#### Code:

```ruby
seam.events.list(device_id: "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2", since: "2025-05-15T00:00:00.000Z", limit: 10)
```

#### Output:

```ruby
[{"connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b","created_at" => "2025-06-15T16:54:18.000000Z","device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2","event_description" => "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.","event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","event_type" => "device.connected","occurred_at" => "2025-06-15T16:54:17.946329Z","workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of events for a specified device.

#### Code:

```php
$seam->events->list(
    device_id: "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    since: "2025-05-15T00:00:00.000Z",
    limit: 10,
);
```

#### Output:

```php
[
    [
        "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
        "created_at" => "2025-06-15T16:54:18.000000Z",
        "device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
        "event_description" =>
            "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
        "event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "event_type" => "device.connected",
        "occurred_at" => "2025-06-15T16:54:17.946329Z",
        "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of events for a specified device.

#### Code:

```seam_cli
seam events list --device_id "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2" --since "2025-05-15T00:00:00.000Z" --limit 10
```

#### Output:

```seam_cli
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
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

**`access_code_id`** *String*

ID of the access code for which you want to list events.

---

**`access_code_ids`** *Array* *of UUIDs*

IDs of the access codes for which you want to list events.

---

**`acs_system_id`** *String*

ID of the access system for which you want to list events.

---

**`acs_system_ids`** *Array* *of UUIDs*

IDs of the access systems for which you want to list events.

---

**`between`** *Array* *of Objects*

Lower and upper timestamps to define an exclusive interval containing the events that you want to list. You must include `since` or `between`.

---

**`connect_webview_id`** *String*

ID of the Connect Webview for which you want to list events.

---

**`connected_account_id`** *String*

ID of the connected account for which you want to list events.

---

**`customer_key`** *String*

Customer key for which you want to list events.

---

**`device_id`** *String*

ID of the device for which you want to list events.

---

**`device_ids`** *Array* *of UUIDs*

IDs of the devices for which you want to list events.

---

**`event_ids`** *Array* *of UUIDs*

IDs of the events that you want to list.

---

**`event_type`** *String*

Type of the events that you want to list.

---

**`event_types`** *Array* *of Enums*

Types of the events that you want to list.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>access_code.created</code>
- <code>access_code.changed</code>
- <code>access_code.scheduled_on_device</code>
- <code>access_code.set_on_device</code>
- <code>access_code.removed_from_device</code>
- <code>access_code.delay_in_setting_on_device</code>
- <code>access_code.failed_to_set_on_device</code>
- <code>access_code.deleted</code>
- <code>access_code.delay_in_removing_from_device</code>
- <code>access_code.failed_to_remove_from_device</code>
- <code>access_code.modified_external_to_seam</code>
- <code>access_code.deleted_external_to_seam</code>
- <code>access_code.backup_access_code_pulled</code>
- <code>access_code.unmanaged.converted_to_managed</code>
- <code>access_code.unmanaged.failed_to_convert_to_managed</code>
- <code>access_code.unmanaged.created</code>
- <code>access_code.unmanaged.removed</code>
- <code>access_grant.created</code>
- <code>access_grant.deleted</code>
- <code>access_grant.access_granted_to_all_doors</code>
- <code>access_grant.access_granted_to_door</code>
- <code>access_grant.access_to_door_lost</code>
- <code>access_grant.access_times_changed</code>
- <code>access_method.issued</code>
- <code>access_method.revoked</code>
- <code>access_method.card_encoding_required</code>
- <code>access_method.deleted</code>
- <code>access_method.reissued</code>
- <code>acs_system.connected</code>
- <code>acs_system.added</code>
- <code>acs_system.disconnected</code>
- <code>acs_credential.deleted</code>
- <code>acs_credential.issued</code>
- <code>acs_credential.reissued</code>
- <code>acs_credential.invalidated</code>
- <code>acs_user.created</code>
- <code>acs_user.deleted</code>
- <code>acs_encoder.added</code>
- <code>acs_encoder.removed</code>
- <code>acs_access_group.deleted</code>
- <code>acs_entrance.added</code>
- <code>acs_entrance.removed</code>
- <code>client_session.deleted</code>
- <code>connected_account.connected</code>
- <code>connected_account.created</code>
- <code>connected_account.successful_login</code>
- <code>connected_account.disconnected</code>
- <code>connected_account.completed_first_sync</code>
- <code>connected_account.deleted</code>
- <code>connected_account.completed_first_sync_after_reconnection</code>
- <code>connected_account.reauthorization_requested</code>
- <code>action_attempt.lock_door.succeeded</code>
- <code>action_attempt.lock_door.failed</code>
- <code>action_attempt.unlock_door.succeeded</code>
- <code>action_attempt.unlock_door.failed</code>
- <code>connect_webview.login_succeeded</code>
- <code>connect_webview.login_failed</code>
- <code>device.connected</code>
- <code>device.added</code>
- <code>device.converted_to_unmanaged</code>
- <code>device.unmanaged.converted_to_managed</code>
- <code>device.unmanaged.connected</code>
- <code>device.disconnected</code>
- <code>device.unmanaged.disconnected</code>
- <code>device.tampered</code>
- <code>device.low_battery</code>
- <code>device.battery_status_changed</code>
- <code>device.removed</code>
- <code>device.deleted</code>
- <code>device.third_party_integration_detected</code>
- <code>device.third_party_integration_no_longer_detected</code>
- <code>device.salto.privacy_mode_activated</code>
- <code>device.salto.privacy_mode_deactivated</code>
- <code>device.connection_became_flaky</code>
- <code>device.connection_stabilized</code>
- <code>device.error.subscription_required</code>
- <code>device.error.subscription_required.resolved</code>
- <code>device.accessory_keypad_connected</code>
- <code>device.accessory_keypad_disconnected</code>
- <code>noise_sensor.noise_threshold_triggered</code>
- <code>lock.locked</code>
- <code>lock.unlocked</code>
- <code>lock.access_denied</code>
- <code>thermostat.climate_preset_activated</code>
- <code>thermostat.manually_adjusted</code>
- <code>thermostat.temperature_threshold_exceeded</code>
- <code>thermostat.temperature_threshold_no_longer_exceeded</code>
- <code>thermostat.temperature_reached_set_point</code>
- <code>thermostat.temperature_changed</code>
- <code>device.name_changed</code>
- <code>enrollment_automation.deleted</code>
- <code>phone.deactivated</code>
- <code>space.device_membership_changed</code>
</details>

---

**`limit`** *Number*

Numerical limit on the number of events to return.

---

**`since`** *String*

Timestamp to indicate the beginning generation time for the events that you want to list. You must include `since` or `between`.

---

**`unstable_offset`** *Number*

Offset for the events that you want to list.

---


## Response

{% hint style="success" %}
Returns:
**Array of [events](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at": "2025-06-15T16:54:18.000000Z",
  "device_id": "b3c4d5e6-f7a8-49bc-def1-23456789abcd",
  "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
  "event_type": "device.connected",
  "occurred_at": "2025-06-15T16:54:17.946329Z",
  "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### List events for a customer

Returns a list of events for a specified customer.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.events.list({
  customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"],
  between: ["2025-05-15T00:00:00.000Z", "2025-06-20T23:59:59.999Z"],
  limit: 10,
});
```

#### Output:

```javascript
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "customer_ids": [
    "e387e15f-be27-47ad-881f-4a6fc5460c57"
  ],
  "between": [
    "2025-05-15T00:00:00.000Z",
    "2025-06-20T23:59:59.999Z"
  ],
  "limit": 10
}
EOF
```

#### Output:

```curl
{
  "events": [
    {
      "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
      "created_at": "2025-06-15T16:54:18.000000Z",
      "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
      "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
      "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      "event_type": "device.connected",
      "occurred_at": "2025-06-15T16:54:17.946329Z",
      "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.events.list(customer_ids=["e387e15f-be27-47ad-881f-4a6fc5460c57"], between=["2025-05-15T00:00:00.000Z","2025-06-20T23:59:59.999Z"], limit=10)
```

#### Output:

```python
[SeamEvent(connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", created_at="2025-06-15T16:54:18.000000Z", device_id="b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2", event_description="The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.", event_id="6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a", event_type="device.connected", occurred_at="2025-06-15T16:54:17.946329Z", workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.events.list(customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"], between: ["2025-05-15T00:00:00.000Z","2025-06-20T23:59:59.999Z"], limit: 10)
```

#### Output:

```ruby
[{"connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b","created_at" => "2025-06-15T16:54:18.000000Z","device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2","event_description" => "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.","event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","event_type" => "device.connected","occurred_at" => "2025-06-15T16:54:17.946329Z","workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->events->list(
    customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"],
    between: ["2025-05-15T00:00:00.000Z", "2025-06-20T23:59:59.999Z"],
    limit: 10,
);
```

#### Output:

```php
[
    [
        "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
        "created_at" => "2025-06-15T16:54:18.000000Z",
        "device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
        "event_description" =>
            "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
        "event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "event_type" => "device.connected",
        "occurred_at" => "2025-06-15T16:54:17.946329Z",
        "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam events list --customer_ids ["e387e15f-be27-47ad-881f-4a6fc5460c57"] --between ["2025-05-15T00:00:00.000Z","2025-06-20T23:59:59.999Z"] --limit 10
```

#### Output:

```seam_cli
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List events for an access system

Returns a list of events for a specified access system.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.events.list({
  acs_system_id: "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099",
  since: "2025-05-15T00:00:00.000Z",
  limit: 10,
});
```

#### Output:

```javascript
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "acs_system_id": "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099",
    "event_description": "An access system was connected.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "acs_system.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_system_id": "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099",
  "since": "2025-05-15T00:00:00.000Z",
  "limit": 10
}
EOF
```

#### Output:

```curl
{
  "events": [
    {
      "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
      "created_at": "2025-06-15T16:54:18.000000Z",
      "acs_system_id": "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099",
      "event_description": "An access system was connected.",
      "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      "event_type": "acs_system.connected",
      "occurred_at": "2025-06-15T16:54:17.946329Z",
      "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.events.list(acs_system_id="5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099", since="2025-05-15T00:00:00.000Z", limit=10)
```

#### Output:

```python
[SeamEvent(connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", created_at="2025-06-15T16:54:18.000000Z", acs_system_id="5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099", event_description="An access system was connected.", event_id="6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a", event_type="acs_system.connected", occurred_at="2025-06-15T16:54:17.946329Z", workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.events.list(acs_system_id: "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099", since: "2025-05-15T00:00:00.000Z", limit: 10)
```

#### Output:

```ruby
[{"connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b","created_at" => "2025-06-15T16:54:18.000000Z","acs_system_id" => "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099","event_description" => "An access system was connected.","event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","event_type" => "acs_system.connected","occurred_at" => "2025-06-15T16:54:17.946329Z","workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->events->list(
    acs_system_id: "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099",
    since: "2025-05-15T00:00:00.000Z",
    limit: 10,
);
```

#### Output:

```php
[
    [
        "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
        "created_at" => "2025-06-15T16:54:18.000000Z",
        "acs_system_id" => "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099",
        "event_description" => "An access system was connected.",
        "event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "event_type" => "acs_system.connected",
        "occurred_at" => "2025-06-15T16:54:17.946329Z",
        "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam events list --acs_system_id "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099" --since "2025-05-15T00:00:00.000Z" --limit 10
```

#### Output:

```seam_cli
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "acs_system_id": "5d92d231-cea4-4ceb-b9f6-1ff9cb9c5099",
    "event_description": "An access system was connected.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "acs_system.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List events for an access code

Returns a list of events for a specified access code.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.events.list({
  access_code_id: "37ba4a46-c9a7-47a2-b761-f63d02acbea4",
  since: "2025-05-15T00:00:00.000Z",
  limit: 10,
});
```

#### Output:

```javascript
[
  {
    "access_code_id": "37ba4a46-c9a7-47a2-b761-f63d02acbea4",
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "An access code was created.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "access_code.created",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "access_code_id": "37ba4a46-c9a7-47a2-b761-f63d02acbea4",
  "since": "2025-05-15T00:00:00.000Z",
  "limit": 10
}
EOF
```

#### Output:

```curl
{
  "events": [
    {
      "access_code_id": "37ba4a46-c9a7-47a2-b761-f63d02acbea4",
      "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
      "created_at": "2025-06-15T16:54:18.000000Z",
      "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
      "event_description": "An access code was created.",
      "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      "event_type": "access_code.created",
      "occurred_at": "2025-06-15T16:54:17.946329Z",
      "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.events.list(access_code_id="37ba4a46-c9a7-47a2-b761-f63d02acbea4", since="2025-05-15T00:00:00.000Z", limit=10)
```

#### Output:

```python
[SeamEvent(access_code_id="37ba4a46-c9a7-47a2-b761-f63d02acbea4", connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", created_at="2025-06-15T16:54:18.000000Z", device_id="b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2", event_description="An access code was created.", event_id="6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a", event_type="access_code.created", occurred_at="2025-06-15T16:54:17.946329Z", workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.events.list(access_code_id: "37ba4a46-c9a7-47a2-b761-f63d02acbea4", since: "2025-05-15T00:00:00.000Z", limit: 10)
```

#### Output:

```ruby
[{"access_code_id" => "37ba4a46-c9a7-47a2-b761-f63d02acbea4","connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b","created_at" => "2025-06-15T16:54:18.000000Z","device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2","event_description" => "An access code was created.","event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","event_type" => "access_code.created","occurred_at" => "2025-06-15T16:54:17.946329Z","workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->events->list(
    access_code_id: "37ba4a46-c9a7-47a2-b761-f63d02acbea4",
    since: "2025-05-15T00:00:00.000Z",
    limit: 10,
);
```

#### Output:

```php
[
    [
        "access_code_id" => "37ba4a46-c9a7-47a2-b761-f63d02acbea4",
        "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
        "created_at" => "2025-06-15T16:54:18.000000Z",
        "device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
        "event_description" => "An access code was created.",
        "event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "event_type" => "access_code.created",
        "occurred_at" => "2025-06-15T16:54:17.946329Z",
        "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam events list --access_code_id "37ba4a46-c9a7-47a2-b761-f63d02acbea4" --since "2025-05-15T00:00:00.000Z" --limit 10
```

#### Output:

```seam_cli
[
  {
    "access_code_id": "37ba4a46-c9a7-47a2-b761-f63d02acbea4",
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "An access code was created.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "access_code.created",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List events of a specific type

Returns a list of events of a specified type.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.events.list({
  event_type: "device.connected",
  since: "2025-05-15T00:00:00.000Z",
  limit: 10,
});
```

#### Output:

```javascript
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "event_type": "device.connected",
  "since": "2025-05-15T00:00:00.000Z",
  "limit": 10
}
EOF
```

#### Output:

```curl
{
  "events": [
    {
      "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
      "created_at": "2025-06-15T16:54:18.000000Z",
      "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
      "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
      "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      "event_type": "device.connected",
      "occurred_at": "2025-06-15T16:54:17.946329Z",
      "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.events.list(event_type="device.connected", since="2025-05-15T00:00:00.000Z", limit=10)
```

#### Output:

```python
[SeamEvent(connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", created_at="2025-06-15T16:54:18.000000Z", device_id="b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2", event_description="The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.", event_id="6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a", event_type="device.connected", occurred_at="2025-06-15T16:54:17.946329Z", workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.events.list(event_type: "device.connected", since: "2025-05-15T00:00:00.000Z", limit: 10)
```

#### Output:

```ruby
[{"connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b","created_at" => "2025-06-15T16:54:18.000000Z","device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2","event_description" => "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.","event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","event_type" => "device.connected","occurred_at" => "2025-06-15T16:54:17.946329Z","workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->events->list(
    event_type: "device.connected",
    since: "2025-05-15T00:00:00.000Z",
    limit: 10,
);
```

#### Output:

```php
[
    [
        "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
        "created_at" => "2025-06-15T16:54:18.000000Z",
        "device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
        "event_description" =>
            "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
        "event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "event_type" => "device.connected",
        "occurred_at" => "2025-06-15T16:54:17.946329Z",
        "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam events list --event_type "device.connected" --since "2025-05-15T00:00:00.000Z" --limit 10
```

#### Output:

```seam_cli
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List events for a connected account

Returns a list of events for a specified connected account.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.events.list({
  connected_account_id: "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  since: "2025-05-15T00:00:00.000Z",
  limit: 10,
});
```

#### Output:

```javascript
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "A connected account was connected for the first time or was reconnected after being disconnected.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "connected_account.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "since": "2025-05-15T00:00:00.000Z",
  "limit": 10
}
EOF
```

#### Output:

```curl
{
  "events": [
    {
      "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
      "created_at": "2025-06-15T16:54:18.000000Z",
      "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
      "event_description": "A connected account was connected for the first time or was reconnected after being disconnected.",
      "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      "event_type": "connected_account.connected",
      "occurred_at": "2025-06-15T16:54:17.946329Z",
      "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.events.list(connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", since="2025-05-15T00:00:00.000Z", limit=10)
```

#### Output:

```python
[SeamEvent(connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", created_at="2025-06-15T16:54:18.000000Z", device_id="b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2", event_description="A connected account was connected for the first time or was reconnected after being disconnected.", event_id="6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a", event_type="connected_account.connected", occurred_at="2025-06-15T16:54:17.946329Z", workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.events.list(connected_account_id: "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", since: "2025-05-15T00:00:00.000Z", limit: 10)
```

#### Output:

```ruby
[{"connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b","created_at" => "2025-06-15T16:54:18.000000Z","device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2","event_description" => "A connected account was connected for the first time or was reconnected after being disconnected.","event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","event_type" => "connected_account.connected","occurred_at" => "2025-06-15T16:54:17.946329Z","workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->events->list(
    connected_account_id: "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    since: "2025-05-15T00:00:00.000Z",
    limit: 10,
);
```

#### Output:

```php
[
    [
        "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
        "created_at" => "2025-06-15T16:54:18.000000Z",
        "device_id" => "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
        "event_description" =>
            "A connected account was connected for the first time or was reconnected after being disconnected.",
        "event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "event_type" => "connected_account.connected",
        "occurred_at" => "2025-06-15T16:54:17.946329Z",
        "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam events list --connected_account_id "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b" --since "2025-05-15T00:00:00.000Z" --limit 10
```

#### Output:

```seam_cli
[
  {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "b2ebca6c-d6d1-47dd-8dae-e9fa06f060b2",
    "event_description": "A connected account was connected for the first time or was reconnected after being disconnected.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "connected_account.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List events for a Connect Webview

Returns a list of events for a specified Connect Webview.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.events.list({
  connect_webview_id: "775bc894-c51a-47e8-b7ac-f92292c62d63",
  since: "2025-05-15T00:00:00.000Z",
  limit: 10,
});
```

#### Output:

```javascript
[
  {
    "connect_webview_id": "775bc894-c51a-47e8-b7ac-f92292c62d63",
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "event_description": "A Connect Webview login succeeded.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "connect_webview.login_succeeded",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "connect_webview_id": "775bc894-c51a-47e8-b7ac-f92292c62d63",
  "since": "2025-05-15T00:00:00.000Z",
  "limit": 10
}
EOF
```

#### Output:

```curl
{
  "events": [
    {
      "connect_webview_id": "775bc894-c51a-47e8-b7ac-f92292c62d63",
      "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
      "created_at": "2025-06-15T16:54:18.000000Z",
      "event_description": "A Connect Webview login succeeded.",
      "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      "event_type": "connect_webview.login_succeeded",
      "occurred_at": "2025-06-15T16:54:17.946329Z",
      "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.events.list(connect_webview_id="775bc894-c51a-47e8-b7ac-f92292c62d63", since="2025-05-15T00:00:00.000Z", limit=10)
```

#### Output:

```python
[SeamEvent(connect_webview_id="775bc894-c51a-47e8-b7ac-f92292c62d63", connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b", created_at="2025-06-15T16:54:18.000000Z", event_description="A Connect Webview login succeeded.", event_id="6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a", event_type="connect_webview.login_succeeded", occurred_at="2025-06-15T16:54:17.946329Z", workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.events.list(connect_webview_id: "775bc894-c51a-47e8-b7ac-f92292c62d63", since: "2025-05-15T00:00:00.000Z", limit: 10)
```

#### Output:

```ruby
[{"connect_webview_id" => "775bc894-c51a-47e8-b7ac-f92292c62d63","connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b","created_at" => "2025-06-15T16:54:18.000000Z","event_description" => "A Connect Webview login succeeded.","event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","event_type" => "connect_webview.login_succeeded","occurred_at" => "2025-06-15T16:54:17.946329Z","workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->events->list(
    connect_webview_id: "775bc894-c51a-47e8-b7ac-f92292c62d63",
    since: "2025-05-15T00:00:00.000Z",
    limit: 10,
);
```

#### Output:

```php
[
    [
        "connect_webview_id" => "775bc894-c51a-47e8-b7ac-f92292c62d63",
        "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
        "created_at" => "2025-06-15T16:54:18.000000Z",
        "event_description" => "A Connect Webview login succeeded.",
        "event_id" => "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "event_type" => "connect_webview.login_succeeded",
        "occurred_at" => "2025-06-15T16:54:17.946329Z",
        "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam events list --connect_webview_id "775bc894-c51a-47e8-b7ac-f92292c62d63" --since "2025-05-15T00:00:00.000Z" --limit 10
```

#### Output:

```seam_cli
[
  {
    "connect_webview_id": "775bc894-c51a-47e8-b7ac-f92292c62d63",
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "event_description": "A Connect Webview login succeeded.",
    "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    "event_type": "connect_webview.login_succeeded",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
]
```
{% endtab %}

{% endtabs %}
