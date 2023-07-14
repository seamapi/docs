---
description: Update a Device by its ID
---

# Update Device

{% swagger method="post" path="/devices/update" baseUrl="https://connect.getseam.com" summary="Update device" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="device_id" required="true" %}
ID of Device
{% endswagger-parameter %}

{% swagger-parameter in="body" name="is_managed" %}
Set to false to unmanage the device with Seam.
Unmanaging a device will unmanage all of its access codes.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="properties" type="{name: String}" %}
Name of Property
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" %}
Name of Property
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
seam.devices.update(
  device=some_device, 
  name="My Lock")
```

{% endtab %}

{% tab title="Javascript" %}

```typescript
await seam.devices.update({ 
  device_id: "64640ab4-fa90-4818-b455-1336b78c951a", 
  name: "My Lock" 
})
```

{% endtab %}

{% tab title="Ruby" %}

```ruby
seam.devices.update(
  device_id: "64640ab4-fa90-4818-b455-1336b78c951a", 
  name: "My Lock"
)
```

{% endtab %}

{% tab title="PHP" %}

```php
$seam->devices->update(
  device_id: "64640ab4-fa90-4818-b455-1336b78c951a",
  name: "My Lock"
)
```

{% endtab %}
{% endtabs %}
