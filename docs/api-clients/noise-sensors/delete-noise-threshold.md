---
description: Delete a Noise Threshold on your Noise Sensor
---

# Delete Noise Threshold

## Delete Noise Threshold

<mark style="color:red;">`DELETE`</mark> `https://connect.getseam.com/noise_sensors/noise_thresholds/delete`

#### Headers

| Name                                            | Type   | Description        |
| ----------------------------------------------- | ------ | ------------------ |
| Authorization<mark style="color:red;">\*</mark> | String | Bearer \<API\_KEY> |

#### Request Body

| Name                                                   | Type   | Description                                     |
| ------------------------------------------------------ | ------ | ----------------------------------------------- |
| noise\_threshold\_id<mark style="color:red;">\*</mark> | String | Noise threshold id                              |
| device\_id<mark style="color:red;">\*</mark>           | String | Device id of a device the noise threshold is on |

{% tabs %}
{% tab title="200: OK " %}
```javascript
{
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_NOISE_THRESHOLD",
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
seam.noise_sensors.noise_thresholds.delete(
  noise_threshold_id="123e4567-e89b-12d3-a456-426614174000",
  device_id="123e4567-e89b-12d3-a456-426614174001"
)

# {
#   action_attempt_id: "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
#   action_type: "DELETE_NOISE_THRESHOLD",
#   status: "success",
#   result: {},
#   error: null,
# }
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->noise_sensors->noise_thresholds->delete(
  noise_threshold_id: "123e4567-e89b-12d3-a456-426614174000",
  device_id: "123e4567-e89b-12d3-a456-426614174001"
);

# {
#   action_attempt_id: "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
#   action_type: "DELETE_NOISE_THRESHOLD",
#   status: "success",
#   result: {},
#   error: null,
# }
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_id`          | type: string | Device id of a device to create a noise threshold on |
| -------------------- | ------------ | ---------------------------------------------------- |
| `noise_threshold_id` | string       | Noise Threshold Id                                   |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_NOISE_THRESHOLD",
    "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
