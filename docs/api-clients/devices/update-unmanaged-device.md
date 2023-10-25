---
description: Update an Unmanaged Device by its ID
---

An unmanaged device has a limited set of visible properties, a subset of supported events, and may not be controlled.
Any access codes on an unmanaged device will be unmanaged.
Convert it to a managed device to control it with Seam.

# Update Unmanaged Device

{% swagger method="post" path="/devices/unmanaged/update" baseUrl="https://connect.getseam.com" summary="Update unmanaged device" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="device_id" required="true" %}
ID of Device
{% endswagger-parameter %}

{% swagger-parameter in="body" name="is_managed" %}
Set to true to manage the device with Seam.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

```javascript
{
  "ok": true
}
```

{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}

```javascript
{
  "error": {
    "type": "device_not_found",
    "message": "device not found",
    "data": {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97"
    },
    "request_id": "32239a33-c0d5-435c-816b-4a9274a5e66d"
  },
  "ok": false
}
```

{% endswagger-response %}
{% endswagger %}

### Code Example

<!-- CODE INJECT START
Get an unmanaged device and convert it to a managed device

e.g. in python you could do:
```python
unmanaged_device = seam.devices.unmanaged.get("some_device_uuid")
seam.devices.unmanaged.update(device=unmanaged_device, is_managed=True)
```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
await seam.devices.unmanaged.update({
  device_id: unmanaged_device.deviceId, 
  is_managed: true
})

```
{% endtab %}
{% tab title="Python" %}
```python
seam.devices.unmanaged.update(device=unmanaged_device, is_managed=True)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
seam.devices.unmanaged.update(device: unmanaged_device, is_managed: true)
```
{% endtab %}
{% tab title="PHP" %}
```php
$managed_device = $seam->access_codes->unmanaged->update(
  access_code_id: $unmanaged_device->access_code_id,
  is_managed: True
);
```
{% endtab %}
{% endtabs %}