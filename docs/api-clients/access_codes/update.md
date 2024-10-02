---
description: Update an Access Code for a Device by its ID
---

# Update an Access Code

{% swagger method="put" path="/access_codes/update" baseUrl="https://connect.getseam.com" summary="Update an Access Code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="access_code_id" required="true" %}
Access code id
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" required="false" %}
Access code name
{% endswagger-parameter %}

{% swagger-parameter in="body" name="code" required="false" %}
Access code
{% endswagger-parameter %}

{% swagger-parameter in="body" name="starts_at" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="ends_at" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Successfully update access code" %}
```javascript
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_ACCESS_CODE",
    "action_attempt_id": "bbb8a07d-a91d-4564-b002-8172f7cdadc4",
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
    "request_id": "ec56770c-b45e-4faa-9614-d987d793d684"
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
    "request_id": "7330bdd3-b263-4a5d-8282-9a64012ccbd4"
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
seam.access_codes.update(
    access_code_id: "123e4567-e89b-12d3-a456-426614174000",
    code: "1112",
    name: 'New name'
)

# <Seam::ActionAttempt:0x00c7998
#   status="success"
#   action_type="UPDATE_ACCESS_CODE"
#   action_attempt_id="2da52c27-9487-4a55-9379-60690a653b4e"
#   result={
#     "access_code"=>{
#       "code"=>"1112",
#       "name"=>"New name",
#       "type"=>"ongoing",
#       "status"=>"setting",
#       "created_at"=>"2022-07-06T16:01:18.063Z",
#       "access_code_id"=>"123e4567-e89b-12d3-a456-426614174000"}}>
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.accessCodes.update({
    access_code_id: "cd706212-ec14-499a-abd5-ba04123ee65e",
    code: "1111"
});

/*
{
  code: '1111',
  name: 'My first code',
  type: 'ongoing',
  status: 'setting',
  created_at: '2022-08-31T17:27:33.324Z',
  access_code_id: 'cd706212-ec14-499a-abd5-ba04123ee65e'
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
seam.access_codes.update(
"cd706212-ec14-499a-abd5-ba04123ee65e",
None, None, 4321)

# AccessCode(
#     access_code_id='cd706212-ec14-499a-abd5-ba04123ee65e', 
#     type='ongoing', 
#     code='4321', 
#     starts_at=None, 
#     ends_at=None, 
#     name='My first code', 
#     status='setting'
#     )

```
{% endtab %}
{% endtabs %}

### Parameters

| `access_code_id` | type:string                     | ID of the Access Code       |
| ---------------- | ------------------------------- | --------------------------- |
| `device_id`      | <p>type: string<br>Optional</p> | ID of the Device            |
| `name`           | <p>type: string<br>Optional</p> | Name of Access Code         |
| `starts_at`      | <p>type: string<br>Optional</p> | From when is the code valid |
| `ends_at`        | <p>type: string<br>Optional</p> | Code expiry                 |
| `code`           | <p>type: string<br>Optional</p> | Access code of Device       |

###

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_ACCESS_CODE",
    "action_attempt_id": "bbb8a07d-a91d-4564-b002-8172f7cdadc4",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
