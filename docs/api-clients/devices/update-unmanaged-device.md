---
description: Update an Unmanaged Device by its ID
---

Convert an unmanaged device to a managed device to control it with Seam.

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

{% tabs %}
{% tab title="Python" %}
```python
seam.devices.unmanaged.update(is_managed=True)
```
{% endtab %}

{% tab title="Javascript" %}
```typescript
await seam.devices.unmanaged.update({ is_managed: true })
```
{% endtab %}
{% endtabs %}
