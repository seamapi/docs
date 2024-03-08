---
description: Delete a Device by its ID
---

# Delete Device

## Delete a Device

{% hint style="warning" %}
Deleting a device will trigger a `device.deleted` event and remove the device and all data associated with the device from Seam: events, access codes, etc. For every deleted resource, a corresponding deleted event will be sent, but the resource will not be deleted from the provider.
For example, deleting a device with an access code will send both a `device.deleted` event and an `access_code.deleted` event,
but Seam will not remove the access code from the device.
{% endhint %}

{% swagger method="delete" path="/devices/delete" baseUrl="https://connect.getseam.com" summary="Delete a device" %}
{% swagger-description %}
Delete a single device from your workspace using a device_id
{% endswagger-description %}

{% swagger-parameter in="query" name="device_id" required="true" %}
Device id
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

```javascript
{
  "ok": true
}
```

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}

```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Invalid uuid for provided \"device_id\"",
    "validation_errors": {
      "_errors": [],
      "device_id": {
        "_errors": [
          "Invalid uuid"
        ]
      }
    },
    "request_id": "73b3bd10-365c-4bb9-927f-0202d6b06023"
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
    "message": "device not found",
    "data": {
      "device_id": "a53690b2-2b70-409a-9a94-426699b84c97"
    },
    "request_id": "e57b4b09-90f0-487a-8d50-3bec8af8792e"
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
seam.devices.delete("123e4567-e89b-12d3-a456-426614174000")

```

{% endtab %}

{% tab title="Javascript" %}

```typescript
await seam.devices.delete({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
})
```

{% endtab %}

{% tab title="PHP" %}

```php
$seam->devices->delete("123e4567-e89b-12d3-a456-426614174000")

```

{% endtab %}
{% endtabs %}
