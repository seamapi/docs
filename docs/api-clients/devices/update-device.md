---
description: Update the properties of a specified device
---

# Update a Device

Updates any of the following properties of a specified [device](../../core-concepts/devices.md) (`device` object):

* `name` (or `properties.name`)
* `is_managed`

{% swagger src="https://connect.getseam.com/openapi.json" path="/devices/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired device by including the corresponding `device_id` in the request body. In addition, in the request body, include the properties that you want to update, along with the desired replacement values.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired device.</td></tr><tr><td><code>name</code> (or <code>properties.name</code>)</td><td>String<br><em>Optional</em></td><td>Replacement name for the device.</td></tr><tr><td><code>is_managed</code></td><td>Boolean<br><em>Optional</em></td><td>Replacement value to indicate whether Seam manages the device.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
device_id = "30fd243b-3054-4384-a713-5487076a3826"
device_update = seam.devices.update(
    device = device_id,
    name = "My Lock"
)

pprint(device_update)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "30fd243b-3054-4384-a713-5487076a3826",
  "name": "My Lock"
}'
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
const deviceId = "30fd243b-3054-4384-a713-5487076a3826"
const deviceUpdate = await seam.devices.update({
  device_id: deviceId,
  name: "My Lock"
})

console.log(deviceUpdate)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
device_id = "30fd243b-3054-4384-a713-5487076a3826"
device_update = client.devices.update(
  device_id: device_id,
  name: "My Lock"
)

puts device_update.inspect
```
{% endtab %}

{% tab title="PHP" %}
<pre class="language-php"><code class="lang-php"><strong>$device_update = $seam->devices->update(
</strong>  device_id: "30fd243b-3054-4384-a713-5487076a3826",
  name: "My Lock"
)
echo json_encode($device_update, JSON_PRETTY_PRINT);
</code></pre>
{% endtab %}

{% tab title="Java" %}
```java
var deviceId = "30fd243b-3054-4384-a713-5487076a3826";

seam.devices().update(DevicesUpdateRequest.builder()
        .deviceId(deviceId)
        .name("My Lock")
        .build());
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator (with the exception of the Java SDK).

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
True
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
{ ok: true }
```
{% endtab %}

{% tab title="Ruby" %}
```
{"ok"=>true}
```
{% endtab %}

{% tab title="PHP" %}
```
true
```
{% endtab %}
{% endtabs %}
