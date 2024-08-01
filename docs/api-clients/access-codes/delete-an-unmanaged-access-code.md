---
description: Delete an Unmanaged Access Code of a Device using its Access Code ID
---

# Delete an Unmanaged Access Code

<mark style="color:red;">`DELETE`</mark> `https://connect.getseam.com/access_codes/unmanaged/delete`

## Request

### Request Parameters

| Name                                               | Type   | Description            |
| -------------------------------------------------- | ------ | ---------------------- |
| access\_code\_id<mark style="color:red;">\*</mark> | String | ID of the access code. |

### Sample Request

{% tabs %}
{% tab title="JavaScript" %}
```javascript
await seam.accessCodes.unmanaged.delete({
  access_code_id: "a9f662a7-44fb-4b91-b7a8-22c0f996bfc1",
});
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->access_codes->unmanaged->delete(
  access_code_id: '26d6138c-6524-4f3c-ac96-43cc3bea0a8d',
);
```
{% endtab %}
{% endtabs %}

## Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

### **Sample Response**

{% tabs %}
{% tab title="JSON" %}
```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}
