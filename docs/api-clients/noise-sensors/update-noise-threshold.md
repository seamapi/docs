---
description: Update a Noise Threshold on your Noise Sensor
---

# Update Noise Threshold

## Update Noise Threshold

<mark style="color:orange;">`PUT`</mark> `https://connect.getseam.com/noise_sensors/noise_thresholds/update`

#### Headers

| Name                                            | Type   | Description        |
| ----------------------------------------------- | ------ | ------------------ |
| Authorization<mark style="color:red;">\*</mark> | String | Bearer \<API\_KEY> |

#### Request Body

| Name                                                   | Type   | Description                                                                             |
| ------------------------------------------------------ | ------ | --------------------------------------------------------------------------------------- |
| noise\_threshold\_id<mark style="color:red;">\*</mark> | String | Noise threshold id                                                                      |
| device\_id<mark style="color:red;">\*</mark>           | String | Device id of a device the noise threshold is on                                         |
| name                                                   | String | Name of the Noise Threshold                                                             |
| starts\_daily\_at                                      | String | Time when noise threshold becomes active daily                                          |
| ends\_daily\_at                                        | String | Time when noise threshold becomes inactive daily                                        |
| noise\_threshold\_decibels                             | String | Noise level in decibels                                                                 |
| noise\_threshold\_nrs                                  | String | Noise level in Noiseaware Noise Risk Score (NRS) (only relevant for Noiseaware sensors) |

{% tabs %}
{% tab title="200: OK " %}
```javascript
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_NOISE_THRESHOLD",
    "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="400: Bad Request " %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Required for provided \"noise_threshold_id\"",
    "validation_errors": {
      "_errors": [],
      "device_id": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "9f3e59f1-cfb5-4e48-93df-0a988554eb0b"
  },
  "ok": false
}
```
{% endtab %}

{% tab title="404: Not Found " %}
```javascript
{
  "error": {
    "type": "device_not_found",
    "message": "Device not found",
    "request_id": "552c8cf1-3dbc-4920-adc6-047328e39369"
  },
  "ok": false
}
```
{% endtab %}
{% endtabs %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.noise_sensors.noise_thresholds.update(
  noise_threshold_id="792263f8-1660-4cf9-a6c6-054d23b78d86",
  device_id="123e4567-e89b-12d3-a456-426614174000",
  noise_threshold_decibels=75
)

# {
#   "noise_threshold_id": "792263f8-1660-4cf9-a6c6-054d23b78d86",
#   "device_id": "123e4567-e89b-12d3-a456-426614174000",
#   "name": "builtin_quiet_hours",
#   "noise_threshold_decibels": 75,
#   "starts_daily_at": "22:00:00[America/Los_Angeles]",
#   "ends_daily_at": "06:00:00[America/Los_Angeles]",
# }
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->noise_sensors->noise_thresholds->update(
  noise_threshold_id: "792263f8-1660-4cf9-a6c6-054d23b78d86",
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  noise_threshold_decibels: 75
)

# {
#   "noise_threshold_id": "792263f8-1660-4cf9-a6c6-054d23b78d86",
#   "device_id": "123e4567-e89b-12d3-a456-426614174000",
#   "name": "builtin_quiet_hours",
#   "noise_threshold_decibels": 75,
#   "starts_daily_at": "22:00:00[America/Los_Angeles]",
#   "ends_daily_at": "06:00:00[America/Los_Angeles]",
# }
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_id`                | type: string                                            | Device id of a device to create a noise threshold on                                    |
| -------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `noise_threshold_id`       | string                                                  | Noise Threshold Id                                                                      |
| `name`                     | string                                                  | Name of the Noise Threshold                                                             |
| `starts_daily_at`          | [Seam Time of Day](https://github.com/seamapi/seam-tod) | Timestamp of when the Noise Threshold becomes active daily                              |
| `ends_daily_at`            | [Seam Time of Day](https://github.com/seamapi/seam-tod) | Timestamp of when the Noise Threshold becomes inactive daily                            |
| `noise_threshold_decibels` | number                                                  | The noise level in decibels                                                             |
| `noise_threshold_nrs`      | number, optional                                        | Noise Level in Noiseaware Noise Risk Score (NRS) (only relevant for Noiseaware sensors) |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_NOISE_THRESHOLD",
    "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
