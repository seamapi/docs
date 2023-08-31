---
description: Issue a lock command on the Device by its Device ID
---

# Lock a Lock

{% swagger method="post" path="/locks/lock_door" baseUrl="https://connect.getseam.com" summary="Lock Door for Device" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="body" name="device_id" required="false" %}
ID of Device to be Locked
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "7e700856-a7d5-4aba-bffe-eb7dd6e9f265",
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
    "message": "Required for provided \"device_id\"",
    "validation_errors": {
      "_errors": [],
      "device_id": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "87ff554d-e27f-474d-b0f9-200c38ac3ab4"
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
    "message": "Device not found",
    "request_id": "cda51712-7c52-482b-910d-04bc93fb4782"
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
seam.locks.lock_door("123e4567-e89b-12d3-a456-426614174000")

#<Seam::ActionAttempt:0x00438
#  status="pending"
#  action_type="LOCK_DOOR"
#  action_attempt_id="31709a8a-8799-4098-90b8-fe1bc251e983"
#  result=nil>
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.locks.lockDoor(
  "a83690b-2b70-409a-9a94-426699b84c97"
);

//{}
```
{% endtab %}

{% tab title="Python" %}
```python
seam.locks.lock_door("a83690b2-2b70-409a-9a94-426699b84c97")

# <Seam::ActionAttempt:0x008f6b0                                                         
#   status="success"                                                                     
#   action_type="LOCK_DOOR"
#   action_attempt_id="4c3f9e12-5c9e-474e-92c4-719f72e13496"
#   result={}>
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_id` | type: string                     | <p><br>Device ID</p> |
| ----------- | -------------------------------- | -------------------- |
| `sync`      | <p>type: boolean<br>Optional</p> |                      |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "4a11bcaf-c930-41d8-85f0-be375c93096f",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

<table data-header-hidden><thead><tr><th width="236"></th><th width="175"></th><th></th></tr></thead><tbody><tr><td><code>status</code></td><td>"success" | "error" | "pending"</td><td><code>success</code> determines a completed action performed on the device.<br><code>error</code> determines an unsuccessful action performed on the device.<br><code>pending</code> determines Seam is still trying to perform the action on the device</td></tr><tr><td><code>action_type</code></td><td>"LOCK_DOOR"</td><td>Determines the type of action performed on the device</td></tr><tr><td><code>action_attempt_id</code></td><td>String</td><td>ID of the action attempt</td></tr><tr><td><code>result</code></td><td>String</td><td><code>result</code> only exists for the <code>success</code> status describing the event</td></tr><tr><td><code>error</code></td><td>Object</td><td><code>error</code> only exists for the <code>error</code> status describing the event. It is an object with <code>type</code> and <code>message</code>. Where <code>type</code> determines type of error and <code>message</code> describes the error</td></tr></tbody></table>
