---
description: Create an Access Code for a Device by its ID
---

# Create an Access Code

### Code Examples

{% swagger method="post" path="/access_codes/create" baseUrl="https://connect.getseam.com" summary="Create an Access Code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="device_id" required="true" %}
Device ID
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" required="false" %}
Name of the Access Code
{% endswagger-parameter %}

{% swagger-parameter in="body" name="starts_at" required="false" type="ISO8601 string" %}
Start Time of the Access Code
{% endswagger-parameter %}

{% swagger-parameter in="body" name="ends_at" required="false" type="ISO8601 string" %}
End Time of the Access Code
{% endswagger-parameter %}

{% swagger-parameter in="body" name="code" required="false" type="string" %}
Pin code to be programmed.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="prefer_native_scheduling" required="false" type="boolean" %}
Whether native scheduling should be used for time-bound codes if supported by the provider. Defaults to true.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="use_backup_access_code_pool" required="false" type="boolean" %}
Whether to opt-in to Seam's 

[backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes)

. Defaults to false. Can only be used with time_bound codes.
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="body" name="sync" type="boolean" required="false" %}
Set this to true to receive the

`access_code`

object in the

`result`
{% endswagger-parameter %}

{% swagger-response status="201: Created" description="" %}
```javascript
{
	"action_attempt": {
		"status": "pending",
		"action_type": "CREATE_ACCESS_CODE",
		"action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
		"result": null,
		"error": null
	},
	"access_code": {
		"access_code_id": "12525e70-9474-4bb6-a7f6-12bbe4166f36",
		"device_id": "1c459b4c-0008-4752-befc-bc18521247d4",
		"name": "My code",
		"code": "1988",
		"common_code_key": null,
		"type": "ongoing",
		"status": "setting",
		"created_at": "2023-05-11T11:16:10.359Z",
		"errors": [],
		"warnings": [],
		"is_managed": true
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
    "request_id": "9f3e59f1-cfb5-4e48-93df-0a988554eb0b"
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
    "request_id": "552c8cf1-3dbc-4920-adc6-047328e39369"
  },
  "ok": false
}
```
{% endswagger-response %}
{% endswagger %}

#### Creating an Ongoing Access Code

{% tabs %}
{% tab title="Ruby" %}
```ruby
seam.access_codes.create(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  name: 'My first code'
)

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
seam.access_codes.create("a83690b2-2b70-409a-9a94-426699b84c97")

# AccessCode(
#   access_code_id='a9f66aa7-44fb-4b91-b7a8-22c0f996bfc1',
#   type='ongoing', code='7732',
#   starts_at=None,
#   ends_at=None,
#   name='',
#   status='setting'
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.accessCodes.create({
  device_id: "a83690b2-2b70-409a-9a94-426699b84c97",
})

/*
{
  code: '9913',
  type: 'ongoing',
  status: 'setting',
  created_at: '2022-08-26T11:08:24.161Z',
  access_code_id: 'e0e31756-9385-408b-89f8-9f5ea43f9adf'
}
*/
```
{% endtab %}
{% endtabs %}

#### Creating a Time Bound Access Code

{% tabs %}
{% tab title="Ruby" %}
```ruby
access_code = seam.access_codes.create(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  name: 'My first code',
  starts_at: "2022-08-12T19:23:42+0000",
  ends_at: "2022-08-13T19:23:42+0000"
)

puts access_code
# <Seam::AccessCode:0x007cd58
#   code="669781"
#   name="My first code"
#   type="timebound"
#   starts_at="2022-08-12T19:23:42+0000"
#   ends_at="2022-08-13T19:23:42+0000"
#   created_at="2022-07-06T23:26:42.223Z"
#   access_code_id="f19bc8cb-15be-43af-bb52-f1a417e0ff09">
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.accessCodes.create({
  device_id: "898f45c1-2fa1-4515-93a6-860d71d3c33c",
  name: "My first code",
  starts_at: "2022-11-12T19:23:42+0000",
  ends_at: "2022-11-13T19:23:42+0000",
})

/*
{
  code: '4687',
  name: 'My first code',
  type: 'time_bound',
  status: 'unset',
  ends_at: '2022-11-13T19:24:00.000Z',
  starts_at: '2022-11-12T19:24:00.000Z',
  created_at: '2022-08-30T18:25:34.921Z',
  access_code_id: '8cfa71c4-5203-47ab-85e4-93dec16d6072'
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
seam.access_codes.create(
"898f45c1-2fa1-4515-93a6-860d71d3c33c",
'My first code',
"1234",
"2022-08-12T19:23:42+0000",
"2022-08-13T19:23:42+0000"
)

# AccessCode(
#     access_code_id='8960ca22-c325-4772-8a0c-53f0dc8ccd66',
#     type='time_bound',
#     code='1234',
#     starts_at='2022-08-12T19:24:00.000Z',
#     ends_at='2022-08-13T19:24:00.000Z',
#     name='My first code',
#     status='unset'
# )
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_id`                   | type: string                     | <p><br>ID of the Device</p>                                                                                                                                                                                                                                                    |
| ----------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                        | <p>type: string<br>Optional</p>  | Name of Access Code                                                                                                                                                                                                                                                            |
| `starts_at`                   | <p>type: string<br>Optional</p>  | From when is the code valid                                                                                                                                                                                                                                                    |
| `ends_at`                     | <p>type: string<br>Optional</p>  | Code expiry                                                                                                                                                                                                                                                                    |
| `code`                        | <p>type: string<br>Optional</p>  | Access code of Device                                                                                                                                                                                                                                                          |
| `use_backup_access_code_pool` | <p>type: boolean<br>Optional</p> | Use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. This allows you to use [/access\_codes/pull\_backup\_access\_code](https://docs.seam.co/latest/api-clients/access-codes/pull-backup-access-code) |
| `common_code_key`             | <p>type: string<br>Optional</p>  | any two access codes with the same `common_code_key` are guaranteed to have the same code                                                                                                                                                                                      |
| `prefer_native_scheduling`    | <p>type: string<br>Optional</p>  | Whether [native scheduling](../../products/smart-locks/access-codes/#native-scheduling) should be used for time-bound codes when supported by the provider (defaults to true)                                                                                                  |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "12525e70-9474-4bb6-a7f6-12bbe4166f36",
    "device_id": "1c459b4c-0008-4752-befc-bc18521247d4",
    "name": "My code",
    "code": "1988",
    "common_code_key": null,
    "type": "ongoing",
    "status": "setting",
    "created_at": "2023-05-11T11:16:10.359Z",
    "errors": [],
    "warnings": [],
    "is_managed": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
