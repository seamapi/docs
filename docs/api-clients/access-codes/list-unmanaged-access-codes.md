---
description: Get all Unmanaged Access Codes of a Device by its ID
---

The [guide to migrating existing access codes](/docs/device-guides/migrating-existing-codes.md) provides an overview of the difference between
managed and unmanaged access codes.

{% hint style="info" %}
Not all providers support unmanaged access codes. The following providers do not support unmanaged access codes:

**Kwikset**
{% endhint %}

# List Unmanaged Access Codes

{% swagger method="get" path="/access_codes/unmanaged/list" baseUrl="https://connect.getseam.com" summary="Get list of Unmanaged Access Codes" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="device_id" required="true" %}
ID of Device connected to account
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

```javascript
{
  "access_codes": [
    {
      "code": "1988",
      "name": "Code 1",
      "status": "set",
      "created_at": "2022-08-26T12:50:17.858Z",
      "access_code_id": "26d6138c-6524-4f3c-ac96-43cc3bea0a8d"
    }
  ]
}
```

{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}

```javascript
{
  "error": {
    "type": "device_not_found",
    "message": "Device not found",
    "request_id": "0cc082c2-d1fa-4fba-b8d5-80ae1e9a7839"
  },
  "ok": false
}
```

{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Ruby" %}

```ruby
seam.access_codes.unmanaged.list("123e4567-e89b-12d3-a456-426614174000")

# [<Seam::AccessCode:0x007cd58
#   code="669781"
#   name="My first code"
#   created_at="2022-07-06T23:26:42.223Z"
#   access_code_id="f19bc8cb-15be-43af-bb52-f1a417e0ff09">]
```

{% endtab %}

{% tab title="Python" %}

<pre class="language-python"><code class="lang-python">seam.access_codes.unmanaged.list("a83690b2-2b70-409a-9a94-426699b84c97")
<strong>
</strong><strong># [AccessCode(
</strong>#   access_code_id='26d6138c-6524-4f3c-ac96-43cc3bea0a8d', 
#   type='ongoing', 
#   code='1988', 
#   name='Code 1', 
#   status='set'
#   )
#  ]
</code></pre>

{% endtab %}

{% tab title="Javascript" %}

<pre class="language-javascript"><code class="lang-javascript">await seam.accessCodes.unmanaged.list({
    device_id: "a83690b2-2b70-409a-9a94-426699b84c97",
});
<strong>
</strong><strong>/*
</strong><strong>[
</strong>  {
    code: '1988',
    name: 'Code 1',
    status: 'set',
    created_at: '2022-08-26T12:50:17.858Z',
    access_code_id: '26d6138c-6524-4f3c-ac96-43cc3bea0a8d'
  }
]
*/
</code></pre>

{% endtab %}

{% tab title="PHP" %}

```php
$seam->access_codes->unmanaged->list(
  device_id: 'a83690b2-2b70-409a-9a94-426699b84c97',
);
```

{% endtab %}
{% endtabs %}

### Parameters

| `device_id` | type: string | ID of Device connected to account |
| ----------- | ------------ | --------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}

```json
{
  "access_codes": [
    {
      "code": "1988",
      "name": "Code 1",
      "status": "set",
      "created_at": "2022-08-26T12:50:17.858Z",
      "access_code_id": "26d6138c-6524-4f3c-ac96-43cc3bea0a8d"
    }
  ],
  "ok": true
}
```

{% endtab %}
{% endtabs %}
