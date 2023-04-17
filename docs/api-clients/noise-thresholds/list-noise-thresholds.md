---
description: List all Noise Thresholds on your Noise Sensor
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
      "starts_daily_at": "06:00:00[America/Los _Angeles]",
      "ends_daily_at": "22:00:00[America/Los_Angeles]",
    },
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
seam.noise_sensors.noise_thresholds.list("123e4567-e89b-12d3-a456-426614174000")

# [
    # {
    #     "noise_threshold_id": "792263f8-1660-4cf9-a6c6-054d23b78d86",
    #     "device_id": "123e4567-e89b-12d3-a456-426614174000",
    #     "name": "builtin_quiet_hours",
    #     "noise_threshold_decibels": 70,
    #     "starts_daily_at": "22:00:00[America/Los_Angeles]",
    #     "ends_daily_at": "06:00:00[America/Los_Angeles]",
    # },
    # {
    #     "noise_threshold_id": "678ccd98-7036-402f-a42c-e66f55575566",
    #     "device_id": "123e4567-e89b-12d3-a456-426614174000",
    #     "name": "builtin_normal_hours",
    #     "noise_threshold_decibels": 75,
    #     "starts_daily_at": "06:00:00[America/Los _Angeles]",
    #     "ends_daily_at": "22:00:00[America/Los_Angeles]",
    # },
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
      "ends_daily_at": "06:00:00[America/Los_Angeles]"
    },
    {
      "noise_threshold_id": "678ccd98-7036-402f-a42c-e66f55575566",
      "device_id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "builtin_normal_hours",
      "noise_threshold_decibels": 75,
      "starts_daily_at": "06:00:00[America/Los_Angeles]",
      "ends_daily_at": "22:00:00[America/Los_Angeles]"
    }
  ]
}
```

{% endtab %}
{% endtabs %}
