---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set to Cool Mode

Set a thermostat to cooling mode. To do so, you must include a cooling set point in the payload, either in Celsius or Fahrenheit. For information about verifying the cooling availability of the thermostat and validating the correct set points, see [HVAC Mode Constraints](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md#hvac-mode-constraints) and [Set Point Constraints](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#set-point-constraints).

{% swagger src="https://connect.getseam.com/openapi.json" path="/thermostats/cool" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Curl" %}
```bash
curl --request POST 'https://connect.getseam.com/thermostats/cool' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: 00000000-0000-0000-0000-000000000000' \
--data-raw '{
  "device_id": "11111111-1111-1111-1111-111111111111",
  "cooling_set_point_celsius": 25
 }'
```
{% endtab %}
{% endtabs %}

### Parameters

<table data-header-hidden><thead><tr><th width="331.3333333333333"></th><th width="162"></th><th></th></tr></thead><tbody><tr><td><code>device_id</code></td><td>type: <code>string</code></td><td>ID of the Device of  the thermostat</td></tr><tr><td><code>cooling_set_point_celsius</code></td><td>type: <code>number</code><br>Optional</td><td>Temperature the thermostat should cool to (in <a href="https://www.degreesymbol.net/">°</a>C). You must set one of the <code>cooling_set_point</code> parameters</td></tr><tr><td><code>cooling_set_point_fahrenheit</code></td><td>type: <code>number</code><br>Optional</td><td>Temperature the thermostat should cool to (in <a href="https://www.degreesymbol.net/">°</a>F). You must set one of the <code>cooling_set_point</code> parameters</td></tr></tbody></table>

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_COOL",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
