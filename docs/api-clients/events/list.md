---
description: List events emitted within your workspace
---

# List Events

{% swagger src="https://connect.getseam.com/openapi.json" path="/events/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

To access events programmatically, use `events.list`. This endpoint returns the same events that would be sent to a webhook, but `events.list` enables you to filter or see events that already took place.

### Request Body Parameters

| Parameter              | Type                                         | Description                                                                                                                                |
| ---------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `since`                | <p>String<br><em>Optional</em></p>           | <p>Timestamp since when events were generated.<br>You must include <code>since</code> or <code>between</code>.</p>                         |
| `between`              | <p>[String, String]<br><em>Optional</em></p> | <p>Lower and upper timestamps by which to filter (exclusive interval).<br>You must include <code>since</code> or <code>between</code>.</p> |
| `device_id`            | <p>String<br><em>Optional</em></p>           | ID of the devices to include.                                                                                                              |
| `device_ids`           | <p>String[]<br><em>Optional</em></p>         | IDs of the devices to include.                                                                                                             |
| `access_code_id`       | <p>String<br><em>Optional</em></p>           | ID of the access code to include.                                                                                                          |
| `access_code_ids`      | <p>String[]<br><em>Optional</em></p>         | IDs of the access codes to include.                                                                                                        |
| `connected_account_id` | <p>String<br><em>Optional</em></p>           | ID of the connected account to include.                                                                                                    |
| `connect_webview_id`   | <p>String<br><em>Optional</em></p>           | ID of the Connect Webview to include.                                                                                                      |
| `event_type`           | <p>String<br><em>Optional</em></p>           | [Type](./#event-types) of events to include.                                                                                               |
| `event_types`          | <p>String[]<br><em>Optional</em></p>         | [Types](./#event-types) of events to include.                                                                                              |
| `limit`                | <p>Number<br><em>Optional</em></p>           | <p>Limit of events to return.<br>Default: <code>500</code>.</p>                                                                            |

### Sample Request

{% tabs %}
{% tab title="JavaScript" %}
```javascript
await seam.events.list()

/*
[
  {
    event_id: '87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2',
    event_type: 'device.low_battery',
    created_at: '2022-08-24T11:23:49.459Z',
    device_id: 'a83690b2-2b70-409a-9a94-426699b84c97',
    workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
    battery_level: 0.48
  },
  {
    event_id: '2fc8d1bc-7b4d-4960-9aa4-7e6bf5dc5848',
    event_type: 'device.low_battery',
    created_at: '2022-08-24T11:23:49.335Z',
    device_id: 'a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4',
    workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
    battery_level: 0.48
  }
]
*/
```
{% endtab %}

{% tab title="Python" %}
```python
seam.events.list()

# [
#     Event(
#         event_id="87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2",
#         event_type="device.low_battery",
#         created_at="2022-08-24T11:23:49.459Z",
#         device_id="a83690b2-2b70-409a-9a94-426699b84c97",
#         workspace_id="f97073eb-c003-467a-965b-e6dba3a0131d",
#         battery_level=0.48,
#     )
# ]
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.events.list

# [<Seam::Event:0x007cd58
#   event_id="87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2",
#   event_type="device.low_battery",
#   created_at="2022-08-24T11:23:49.459Z",
#   device_id="a83690b2-2b70-409a-9a94-426699b84c97",
#   workspace_id="f97073eb-c003-467a-965b-e6dba3a0131d",
#   battery_level=>0.48>]
```
{% endtab %}

{% tab title="PHP" %}
```php
$events = $seam->events->list();

echo json_encode($events)
/*
[
  {
    event_id: '87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2',
    event_type: 'device.low_battery',
    created_at: '2022-08-24T11:23:49.459Z',
    device_id: 'a83690b2-2b70-409a-9a94-426699b84c97',
    workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
    battery_level: 0.48
  },
  {
    event_id: '2fc8d1bc-7b4d-4960-9aa4-7e6bf5dc5848',
    event_type: 'device.low_battery',
    created_at: '2022-08-24T11:23:49.335Z',
    device_id: 'a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4',
    workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
    battery_level: 0.48
  }
]
*/
```
{% endtab %}
{% endtabs %}

### Response

Returns an [events](./) array.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "events": [
    {
      "event_id": "87b2dcda-90ff-4602-8ccc-efb2f4a3d7c2",
      "event_type": "device.low_battery",
      "created_at": "2022-08-24T11:23:49.459Z",
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "battery_level": 0.48
    },
    {
      "event_id": "2fc8d1bc-7b4d-4960-9aa4-7e6bf5dc5848",
      "event_type": "device.low_battery",
      "created_at": "2022-08-24T11:23:49.335Z",
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "battery_level": 0.48
    },
    {
      "event_id": "c99b497b-5ff6-4658-854a-4ee694d35355",
      "event_type": "device.low_battery",
      "created_at": "2022-08-24T11:23:49.150Z",
      "device_id": "65803a1c-866b-45ed-94d5-496b40e4cc4d",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "battery_level": 0.48
    },
    {
      "event_id": "e52e2527-c905-43e5-b84a-87122b64cdda",
      "event_type": "device.connected",
      "created_at": "2022-08-24T11:14:37.119Z",
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d"
    },
    {
      "event_id": "5d9dce4c-9119-4888-acd6-42044c9740b0",
      "event_type": "device.connected",
      "created_at": "2022-08-24T11:14:36.981Z",
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d"
    },
    {
      "event_id": "fea998c1-e2c7-454d-9173-8a85726aff75",
      "event_type": "device.connected",
      "created_at": "2022-08-24T11:14:36.796Z",
      "device_id": "65803a1c-866b-45ed-94d5-496b40e4cc4d",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d"
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
