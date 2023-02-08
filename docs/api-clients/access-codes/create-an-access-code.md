---
description: Create an Access Code for a Device by its ID
---

# Create an Access Code

### Code Examples

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
});

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
});

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

| `device_id`       | type: string                    | <p><br>ID of the Device</p>                                                               |
| ----------------- | ------------------------------- | ----------------------------------------------------------------------------------------- |
| `name`            | <p>type: string<br>Optional</p> | Name of Access Code                                                                       |
| `starts_at`       | <p>type: string<br>Optional</p> | From when is the code valid                                                               |
| `ends_at`         | <p>type: string<br>Optional</p> | Code expiry                                                                               |
| `code`            | <p>type: string<br>Optional</p> | Access code of Device                                                                     |
| `common_code_key` | <p>type: string<br>Optional</p> | any two access codes with the same `common_code_key` are guaranteed to have the same code |

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
  "ok": true
}
```
{% endtab %}
{% endtabs %}
