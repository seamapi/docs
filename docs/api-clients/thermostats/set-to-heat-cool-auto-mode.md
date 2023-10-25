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

# Set to Heat-Cool (Auto) Mode

Set a thermostat to heat-cool mode, also known as "auto" mode. To do so, you must include both cooling and heating set points in the payload, either in Celsius or Fahrenheit. For information on verifying the thermostat's heating availability and validating the correct set points, please refer to [our guide on HVAC mode and set point constraints](../../products/thermostats/understanding-hvac-mode-and-set-point-constraints.md).

{% swagger method="post" path="/thermostats/heat_cool" baseUrl="https://connect.getseam.com" summary="Set HVAC to Heat-Cool Mode" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="device_id" required="true" type="String" %}
ID of the Thermostat Device
{% endswagger-parameter %}

{% swagger-parameter in="query" name="cooling_set_point_celsius" type="Number" %}
Temperature to cool to in celsius
{% endswagger-parameter %}

{% swagger-parameter in="query" name="cooling_set_point_fahrenheit" type="Number" %}
Temperature to cool to in fahrenheit
{% endswagger-parameter %}

{% swagger-parameter in="query" name="heating_set_point_celsius" type="Number" %}
Temperature to heat to in celsius
{% endswagger-parameter %}

{% swagger-parameter in="query" name="heating_set_point_fahrenheit" type="Number" %}
Temperature to heat to in fahrenheit
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
{
	"action_attempt": {
		"status": "pending",
		"action_type": "SET_HEAT_COOL",
		"action_attempt_id": "00000000-0000-0000-0000-000000000000",
		"result": null,
		"error": null
	},
	"ok": true
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Curl" %}
```bash
curl --request POST 'https://connect.getseam.com/thermostats/heat_cool' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: 00000000-0000-0000-0000-000000000000' \
--data-raw '{
  "device_id": "11111111-1111-1111-1111-111111111111",
  "cooling_set_point_celsius": 25,
  "heating_set_point_celsius": 20
 }'
```
{% endtab %}
{% endtabs %}

### Parameters

<table data-header-hidden><thead><tr><th width="331.3333333333333"></th><th width="162"></th><th></th></tr></thead><tbody><tr><td><code>device_id</code></td><td>type: <code>string</code></td><td>ID of the Device of  the thermostat</td></tr><tr><td><code>cooling_set_point_celsius</code></td><td>type: <code>number</code><br>Optional</td><td>Temperature the thermostat should cool to (in <a href="https://www.degreesymbol.net/">°</a>C). You must set one of the <code>cooling_set_point</code> parameters.</td></tr><tr><td><code>cooling_set_point_fahrenheit</code></td><td>type: <code>number</code><br>Optional</td><td>Temperature the thermostat should cool to (in <a href="https://www.degreesymbol.net/">°</a>F). You must set one of the <code>cooling_set_point</code> parameters.</td></tr><tr><td><code>heating_set_point_celsius</code></td><td>type: <code>number</code><br>Optional</td><td>Temperature the thermostat should heat to (in <a href="https://www.degreesymbol.net/">°</a>C).<br>You must set one of the <code>heating_set_point</code> parameters.</td></tr><tr><td><code>heating_set_point_fahrenheit</code></td><td>type: <code>number</code><br>Optional</td><td>Temperature the thermostat should heat to (in <a href="https://www.degreesymbol.net/">°</a>F).<br>You must set one of the <code>heating_set_point</code> parameters.</td></tr></tbody></table>

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT_COOL",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
