---
description: List event emitted within a users workspace
---

# List Events

{% swagger method="get" path="/events/list" baseUrl="https://connect.getseam.com" summary="List Events" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="body" name="since" required="true" %}
Date since when events were generated
{% endswagger-parameter %}

{% swagger-parameter in="body" name="device_id" %}
ID of the Device
{% endswagger-parameter %}

{% swagger-parameter in="body" name="device_ids" %}
IDs of the Device
{% endswagger-parameter %}

{% swagger-parameter in="body" name="event_type" type="" %}
Get all events by type:

\


"device.connected" | "device.disconnected" | "device.tampered" | "device.low_battery" | "access_code.created" | "noise_detection.detected_noise" | "connected_account.disconnected"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="event_types" %}
Get all events by types:

\


"device.connected" | "device.disconnected" | "device.tampered" | "device.low_battery" | "access_code.created" | "noise_detection.detected_noise" | "connected_account.disconnected"
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Events are retrieved" %}
```javascript
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
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Required for provided \"since\"",
    "validation_errors": {
      "_errors": [],
      "since": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "2409f00f-b277-4e3b-be94-d5713038d821"
  },
  "ok": false
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

To programmatically access events, you can use `events.list` . This will return the same events that would be sent to a webhook, however `events.list` allows you to filter or see events that already took place.

{% tabs %}
{% tab title="Javascript" %}
<pre class="language-javascript"><code class="lang-javascript"><strong>await seam.events.list()
</strong><strong>
</strong>/*
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
</code></pre>
{% endtab %}
{% endtabs %}

### Parameters

| `since`       | <p>type: string<br>Optional</p>           | Datetime since when events were generated                                                      |
| ------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `between`     | <p>type: [string, string]<br>Optional</p> | Lower and upper datetimes to filter by (exclusive interval)                                    |
| `device_id`   | <p>type: string<br>Optional</p>           | ID of the Device                                                                               |
| `device_ids`  | <p>type: string[]<br>Optional</p>         | IDs of the Devices to include                                                                  |
| `event_type`  | <p>type: string<br>Optional</p>           | Get all events by type. See the [Events page](./#event-types) for a full list of Event types.  |
| `event_types` | <p>type: string[]<br>Optional</p>         | Get all events by types. See the [Events page](./#event-types) for a full list of Event types. |

_Exactly one of `since`, `between` must be provided._

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

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
