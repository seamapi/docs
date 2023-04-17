---
description: Delete a Noise Threshold on your Noise Sensor
---

# Delete Noise Threshold

{% swagger method="delete" path="/noise_sensors/noise_thresholds/delete" baseUrl="https://connect.getseam.com" summary="Delete Noise Threshold" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" required="true" name="noise_threshold_id" %}
Noise threshold id
{% endswagger-parameter %}

{% swagger-parameter in="body" required="true" name="device_id" %}
Device id of a device the noise threshold is on
{% endswagger-parameter %}

{% swagger-parameter in="body" name="sync" type="boolean" %}
Set this to true to receive updated

`noise_threshold`

object in the

`result`
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

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

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}

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

{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}

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

{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}

```python
seam.noise_sensors.noise_thresholds.delete(
  noise_threshold_id="123e4567-e89b-12d3-a456-426614174000",
  device_id="123e4567-e89b-12d3-a456-426614174001"
)

# {
#   "status": "pending",
#   "action_type": "DELETE_NOISE_THRESHOLD",
#   "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
#   "result": null,
#   "error": null
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
