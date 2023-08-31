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

# Set Fan Mode

{% swagger method="post" path="/thermostats/set_fan_mode" baseUrl="https://connect.getseam.com" summary="Set Fan Mode" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="device_id" required="true" type="String" %}
ID of the Thermostat Device
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
		"action_type": "SET_FAN_MODE",
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
curl --request POST 'https://connect.getseam.com/thermostats/heat' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: 00000000-0000-0000-0000-000000000000' \
--data-raw '{
  "device_id": "11111111-1111-1111-1111-111111111111",
  "heating_set_point_celsius": 25
 }'
```
{% endtab %}
{% endtabs %}

### Parameters

<table data-header-hidden><thead><tr><th width="184"></th><th width="160.33333333333331"></th><th></th></tr></thead><tbody><tr><td><code>device_id</code></td><td>type: <code>string</code></td><td>ID of the Device of  the thermostat</td></tr><tr><td><code>fan_mode</code></td><td>type: <code>string</code></td><td><p>Fan mode of the thermostat:</p><ul><li><strong><code>on</code>:</strong> The fan continuously operates, ensuring air circulation regardless of the heating or cooling demand.</li></ul><ul><li><strong><code>auto</code>:</strong> The fan activates only when heating or cooling is on, making it a more energy-efficient choice.</li></ul></td></tr></tbody></table>

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_FAN_MODE",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
