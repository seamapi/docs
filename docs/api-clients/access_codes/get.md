---
description: Get Access Code of a Device by its Access Code ID
---

# Get an Access Code

{% swagger method="get" path="/access_codes/get" baseUrl="https://connect.getseam.com" summary="Get an Access Code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="access_code_id" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "access_code": {
    "code": "1988",
    "type": "ongoing",
    "status": "setting",
    "created_at": "2022-08-26T12:50:17.858Z",
    "access_code_id": "26d6138c-6524-4f3c-ac96-43cc3bea0a8d"
  },
  "ok": true
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "internal_server_error",
    "message": "Undefined binding(s) detected when compiling FIRST. Undefined column(s): [device_id] query: select \"device_id\" from \"seam\".\"device\" where \"workspace_id\" = ? and \"device_id\" = ? limit ?",
    "request_id": "cd32ef1e-6e14-4bcb-ab34-b88bfb5c1a1b"
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
    "request_id": "bf6643a3-a102-4f3b-b4c3-bd8cd1119ba2"
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
seam.access_codes.get("123e4567-e89b-12d3-a456-426614174000")

# <Seam::AccessCode:0x007cd58                                       
#   code="669781"                                                   
#   name="My first code"                                            
#   type="ongoing"                                                  
#   created_at="2022-07-06T23:26:42.223Z"                           
#   access_code_id="f19bc8cb-15be-43af-bb52-f1a417e0ff09">
```
{% endtab %}

{% tab title="Python" %}
```python
seam.access_codes.get("26d6138c-6524-4f3c-ac96-43cc3bea0a8d")

# AccessCode(
#   access_code_id='26d6138c-6524-4f3c-ac96-43cc3bea0a8d', 
#   type='ongoing', 
#   code='1988', 
#   starts_at=None, 
#   ends_at=None, 
#   name='', 
#   status='setting'
#   )
#  
```
{% endtab %}
{% endtabs %}

### Parameters

| `access_code_id` | type: string | <p><br>ID of the Access Code</p> |
| ---------------- | ------------ | -------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "access_code": {
    "code": "1988",
    "type": "ongoing",
    "status": "setting",
    "created_at": "2022-08-26T12:50:17.858Z",
    "access_code_id": "26d6138c-6524-4f3c-ac96-43cc3bea0a8d"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
