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

# Set to Off Mode

Set a thermostat to "off" mode.

{% swagger method="post" path="/thermostats/off" baseUrl="https://connect.getseam.com" summary="Set HVAC to Off Mode" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="device_id" required="true" type="String" %}
ID of the Thermostat Device
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
{
	"action_attempt": {
		"status": "pending",
		"action_type": "SET_OFF",
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
curl --request POST 'https://connect.getseam.com/thermostats/off' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: 00000000-0000-0000-0000-000000000000' \
--data-raw '{
  "device_id": "11111111-1111-1111-1111-111111111111"
 }'
```
{% endtab %}
{% endtabs %}

### Parameters

<table data-header-hidden><thead><tr><th width="312.3333333333333"></th><th width="162"></th><th></th></tr></thead><tbody><tr><td><code>device_id</code></td><td>type: <code>string</code></td><td>ID of the Device of  the thermostat</td></tr></tbody></table>

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_OFF",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
