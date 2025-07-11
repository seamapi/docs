---
description: Retrieve an Action Attempt using its ID.
---

# Get Action Attempt

{% swagger method="get" path="/action_attempts/get" baseUrl="https://connect.getseam.com" summary="Get an Action Attempt" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="action_attempt_id" required="true" %}
ID of the Action Attempt to be retrieved
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Action Attempt retrieved" %}
```javascript
{
  "action_attempt": {
    "status": "success",
    "action_attempt_id": "f7d02670-128a-49f1-b615-b44a2808e5c4",
    "action_type": "UNLOCK_DOOR",
    "result": {},
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
    "message": "Required for provided \"action_attempt_id\"",
    "validation_errors": {
      "_errors": [],
      "action_attempt_id": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "315d5b5f-1dde-433f-9f01-ad780bbd4687"
  },
  "ok": false
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="Action Attempt not found" %}
```javascript
{
  "error": {
    "type": "action_attempt_not_found",
    "message": "action_attempt not found",
    "data": {
      "action_attempt_id": "f7d02670-123a-49f1-b615-b44a2808e5c4"
    },
    "request_id": "27fa9e5d-485f-42ad-99d3-6d07006f00f5"
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
seam.action_attempts.get("")

# ActionAttempt(
#   action_attempt_id='f7d02670-128a-49f1-b615-b44a2808e5c4', 
#   action_type='UNLOCK_DOOR', 
#   status='success', 
#   result={}, 
#   error=None
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.actionAttempts.get(
    "f7d02670-128a-49f1-b615-b44a2808e5c4"
);

// {
//   status: 'success',
//   action_attempt_id: 'f7d02670-128a-49f1-b615-b44a2808e5c4',
//   action_type: 'UNLOCK_DOOR',
//   result: {},
//   error: null
// }
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.action_attempts.get(action_attempt_id: "f7d02670-128a-49f1-b615-b44a2808e5c4")
```
{% endtab %}
{% endtabs %}

### Parameters

| `action_attempt_id` | type: string | ID of the Action Attempt to be retrieved |
| ------------------- | ------------ | ---------------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "success",
    "action_attempt_id": "f7d02670-128a-49f1-b615-b44a2808e5c4",
    "action_type": "UNLOCK_DOOR",
    "result": {},
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
