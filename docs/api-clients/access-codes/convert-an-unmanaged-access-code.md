---
description: Convert an Unmanaged Access Code to Managed
---

{% hint style="info" %}
Not all providers support unmanaged access codes. The following providers do not support unmanaged access codes:

**Kwikset**
{% endhint %}


An unmanaged access code has a limited set of operations that can be performed on it: view, delete, or convert to managed.
Converting an unmanaged access code to a managed one allows it to be controlled with Seam, and have the full set of operations
and lifecycle events available for it. Note that not all device providers support this operation.

# Convert Unmanaged Access Code

{% swagger method="post" path="/access_codes/unmanaged/update" baseUrl="https://connect.getseam.com" summary="Convert unmanaged access code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="access_code_id" required="true" %}
ID of Unmanaged Access Code
{% endswagger-parameter %}

{% swagger-parameter in="body" name="is_managed" required="true" %}
Set to true to manage the access code with Seam.
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
    "type": "unsupported_device",
    "message": "Converting unmanaged access codes to managed is not supported for this device",
    "request_id": "32239a33-c0d5-435c-816b-4a9274a5e66d"
  },
  "ok": false
}
```

{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}

{% tab title="Javascript" %}

```typescript
await seam.accessCodes.unmanaged.update({
  access_code_id: "26d6138c-6524-4f3c-ac96-43cc3bea0a8d",
  is_managed: true,
});
```

{% endtab %}

{% tab title="PHP" %}

```php
$seam->access_codes->unmanaged->update(
  access_code_id: '26d6138c-6524-4f3c-ac96-43cc3bea0a8d',
  is_managed: true
);
```

{% endtab %}
{% endtabs %}
