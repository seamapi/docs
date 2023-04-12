# Delete an Unmanaged Access Code

{% swagger method="delete" path="/access_codes/unmanaged/delete" baseUrl="https://connect.getseam.com" summary="Delete an Unmanaged Access Code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="access_code_id" required="true" %}
{% swagger-parameter in="query" name="device_id" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Returns an Action Attempt" %}

```javascript
{
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_ACCESS_CODE",
    "action_attempt_id": "6a5e05e3-fd92-4211-aecb-ac53f1382ea1",
    "result": null,
    "error": null
  },
  "ok": true
}
```

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}

```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Required for provided \"access_code_id\"",
    "validation_errors": {
      "_errors": [],
      "access_code_id": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "33d23234-4d59-4321-b495-01dec55ee145"
  },
  "ok": false
}
```

{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}

```javascript
{
  "error": {
    "type": "access_code_not_found",
    "message": "Could not find a device with access_code_id",
    "data": {
      "access_code_id": "a9f662a7-44fb-4b91-b7a8-22c0f996bfc1"
    },
    "request_id": "dc6427ed-b493-4cb3-b81b-b1c9a50f18fd"
  },
  "ok": false
}
```

{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}

{% tab title="Javascript" %}

```javascript
await seam.accessCodes.unmanaged.delete({
  delete_id: "1e9c85c3-77dc-481c-8fc1-3a10121ebe67",
  access_code_id: "a9f662a7-44fb-4b91-b7a8-22c0f996bfc1",
});

//{}
```

{% endtab %}
{% endtabs %}

### Parameters

| `access_code_id` | type: string | <p><br>ID of the Access Code</p> |
| ---------------- | ------------ | -------------------------------- |
| `device_id`      | type: string | <p><br>ID of the Device</p>      |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_ACCESS_CODE",
    "action_attempt_id": "6a5e05e3-fd92-4211-aecb-ac53f1382ea1",
    "result": null,
    "error": null
  },
  "ok": true
}
```

{% endtab %}
{% endtabs %}
