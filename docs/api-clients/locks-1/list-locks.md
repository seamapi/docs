---
description: Get all Locks on your Account
---

# List Noise Thresholds

{% swagger method="get" path="/noise_sensors/noise_thresholds/list" baseUrl="https://connect.getseam.com" summary="List Noise Thresholds set on Device" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" required="true" name="device_id" %}
Device id of a device the noise thresholds are set on
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "locks": [
    {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-3",
          "device_name": "GARAGE"
        },
        "name": "Front Door"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:37.116Z",
      "errors": []
    },
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-2",
          "device_name": "BACK DOOR"
        },
        "name": "BACK DOOR"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.978Z",
      "errors": []
    },
    {
      "device_id": "65803a1c-866b-45ed-94d5-496b40e4cc4d",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-1",
          "device_name": "FRONT DOOR"
        },
        "name": "FRONT DOOR"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.792Z",
      "errors": []
    }
  ],
  "devices": [
    {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-3",
          "device_name": "GARAGE"
        },
        "name": "Front Door"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:37.116Z",
      "errors": []
    },
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-2",
          "device_name": "BACK DOOR"
        },
        "name": "BACK DOOR"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.978Z",
      "errors": []
    },
    {
      "device_id": "65803a1c-866b-45ed-94d5-496b40e4cc4d",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-1",
          "device_name": "FRONT DOOR"
        },
        "name": "FRONT DOOR"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.792Z",
      "errors": []
    }
  ],
  "ok": true
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.noise_thresholds.list("123e4567-e89b-12d3-a456-426614174000")

# [
#     {
#         "noise_threshold_id": "792263f8-1660-4cf9-a6c6-054d23b78d86",
#         "device_id": "123e4567-e89b-12d3-a456-426614174000",
#         "name": "builtin_quiet_hours",
#         "noise_threshold_decibels": 70,
#         "starts_daily_at": "22:00:00[America/Los_Angeles]",
#         "ends_daily_at": "06:00:00[America/Los_Angeles]",
#     },
#     {
#         "noise_threshold_id": "678ccd98-7036-402f-a42c-e66f55575566",
#         "device_id": "123e4567-e89b-12d3-a456-426614174000",
#         "name": "builtin_normal_hours",
#         "noise_threshold_decibels": 75,
#         "starts_daily_at": "06:00:00[America/Los _Angeles]",
#         "ends_daily_at": "22:00:00[America/Los_Angeles]",
#     },
# ]
```
{% endtab %}
{% endtabs %}



### Parameters

| `device_id` | type: string | <p><br>ID of the Device the Noise Thresholds are set on</p> |
| ----------- | ------------ | ----------------------------------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "noise_thresholds": [
    {
      "noise_threshold_id": "792263f8-1660-4cf9-a6c6-054d23b78d86",
      "device_id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "builtin_quiet_hours",
      "noise_threshold_decibels": 70,
      "starts_daily_at": "22:00:00[America/Los_Angeles]",
      "ends_daily_at": "06:00:00[America/Los_Angeles]",
    },
    {
      "noise_threshold_id": "678ccd98-7036-402f-a42c-e66f55575566",
      "device_id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "builtin_normal_hours",
      "noise_threshold_decibels": 75,
      "starts_daily_at": "06:00:00[America/Los_Angeles]",
      "ends_daily_at": "22:00:00[America/Los_Angeles]",
    },
  ],
}
```
{% endtab %}
{% endtabs %}
