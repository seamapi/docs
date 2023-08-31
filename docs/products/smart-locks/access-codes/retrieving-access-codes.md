---
description: >-
  Learn how to retrieve access codes using various filters or by referencing
  their specific IDs
---

# Retrieving access codes

## Retrieving all access codes for a device

To retrieve all access codes for a device, include the `device_id` in the [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request.

{% tabs %}
{% tab title="Javascript" %}
```javascript
const deviceId = "77208078-6dd7-44e5-a3e4-a2ed3a34efc9"

const accessCodes = await seam.accessCodes.list({
    device_id: deviceId
  })
  
console.log(accessCodes)

/*
[
  {
    access_code_id: 'ddf217cb-3fee-48be-ad4d-e8af16ea6bb0',
    device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
    name: 'my time-bound code',
    appearance: null,
    code: '3857',
    common_code_key: null,
    type: 'time_bound',
    status: 'unset',
    is_scheduled_on_device: false,
    starts_at: '2025-01-01T16:00:00.000Z',
    ends_at: '2025-01-22T12:00:00.000Z',
    is_backup_access_code_available: false,
    created_at: '2023-08-29T05:02:21.812Z',
    errors: [],
    warnings: [],
    is_managed: true
  },
  {
    access_code_id: 'aa5a89e6-fe68-4082-ae16-d192b0759670',
    device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
    name: 'my ongoing code',
    appearance: {
      name: 'seam-my ongoing code seam_aa5a89e6-fe68-4082-ae16-d192b0759670',
      last_name: 'seam_aa5a89e6-fe68-4082-ae16-d192b0759670',
      first_name: 'seam-my ongoing code'
    },
    code: '4456',
    common_code_key: null,
    type: 'ongoing',
    status: 'set',
    is_backup_access_code_available: false,
    created_at: '2023-08-29T05:01:07.435Z',
    errors: [],
    warnings: [],
    is_managed: true
  }
]
*/

```
{% endtab %}

{% tab title="Python" %}
```python
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"
access_codes = seam.access_codes.list(device=device_id)

print(access_codes)

# [AccessCode(access_code_id='fb61e71c-d165-40a4-a65f-1a9ee44f8774',
#             type='time_bound',
#             code='4747',
#             starts_at='2025-01-01T16:00:00.000Z',
#             ends_at='2025-01-22T12:00:00.000Z',
#             name='my time-bound code',
#             status='unset',
#             common_code_key=None),
#  AccessCode(access_code_id='0cf60b3a-2364-4d21-924e-64c7cb20bb62',
#             type='ongoing',
#             code='9846',
#             starts_at=None,
#             ends_at=None,
#             name='my ongoing code',
#             status='set',
#             common_code_key=None),
#  AccessCode(access_code_id='48ff2fd3-4adf-41fd-9e4d-c14f22f2afd2',
#             type='ongoing',
#             code='7032',
#             starts_at=None,
#             ends_at=None,
#             name='my ongoing code',
#             status='set',
#             common_code_key=None)]

```
{% endtab %}

{% tab title="Ruby" %}
```ruby
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"
access_code_list = seam.access_codes.list(device_id)

puts access_code_list.inspect
# [<Seam::AccessCode:0x00438
#   access_code_id="043a9ac6-105e-4d15-b4b7-072f9b54b448"
#   name="my time-bound code"
#   code="2262"
#   type="time_bound"
#   starts_at=2025-01-01 16:00:00 UTC
#   ends_at=2025-01-22 12:00:00 UTC
#   errors=[]
#   warnings=[]>, <Seam::AccessCode:0x00460
#   access_code_id="0e2e1d48-c694-4430-8a4f-2dc98b6ec570"
#   name="my ongoing code"
#   code="1275"
#   type="ongoing"
#   errors=[]
#   warnings=[]>]

```
{% endtab %}

{% tab title="PHP" %}
```php
$device_access_codes = $seam->access_codes->list([
  'device_id' => "7a83ddc8-b9d9-4944-9457-46b31e654bdc"
]);

echo json_encode($device_access_codes);
```
{% endtab %}

{% tab title="Curl" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/list' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000"
 }'
</code></pre>

**Response:**

```
{
  "access_codes": [
    {
      "access_code_id": "11111111-1111-1111-1111-111111111111",
      "device_id": "00000000-0000-0000-0000-000000000000",
      "name": "Access Code",
      "code": "1234",
      "common_code_key": null,
      "type": "ongoing",
      "status": "set",
      "created_at": "2023-01-01T00:00:00Z",
      "errors": [],
      "warnings": [],
      "is_managed": true
    },
    ...
  ]
}
```
{% endtab %}
{% endtabs %}

***

## Retrieving access codes using their IDs

To retrieve access codes by their IDs, include their `access_code_ids` in the [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request.

{% tabs %}
{% tab title="Javascript" %}
```javascript
const accessCodeIds = ['ddf217cb-3fee-48be-ad4d-e8af16ea6bb0', 'aa5a89e6-fe68-4082-ae16-d192b0759670']
const accessCodes = await seam.accessCodes.list({
    device_id: deviceId,
    access_code_ids: accessCodeIds
})

console.log(accessCodes)

/*
[
  {
    access_code_id: 'ddf217cb-3fee-48be-ad4d-e8af16ea6bb0',
    device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
    name: 'my time-bound code',
    appearance: null,
    code: '3857',
    common_code_key: null,
    type: 'time_bound',
    status: 'unset',
    is_scheduled_on_device: false,
    starts_at: '2025-01-01T16:00:00.000Z',
    ends_at: '2025-01-22T12:00:00.000Z',
    is_backup_access_code_available: false,
    created_at: '2023-08-29T05:02:21.812Z',
    errors: [],
    warnings: [],
    is_managed: true
  },
  {
    access_code_id: 'aa5a89e6-fe68-4082-ae16-d192b0759670',
    device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
    name: 'my ongoing code',
    appearance: {
      name: 'seam-my ongoing code seam_aa5a89e6-fe68-4082-ae16-d192b0759670',
      last_name: 'seam_aa5a89e6-fe68-4082-ae16-d192b0759670',
      first_name: 'seam-my ongoing code'
    },
    code: '4456',
    common_code_key: null,
    type: 'ongoing',
    status: 'set',
    is_backup_access_code_available: false,
    created_at: '2023-08-29T05:01:07.435Z',
    errors: [],
    warnings: [],
    is_managed: true
  }
]
*/
```
{% endtab %}

{% tab title="Python" %}
```python
# not yet implemented
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# not yet implemented; contact us if you need immediate support
```
{% endtab %}

{% tab title="PHP" %}
```php
/** not implemented; contact us if you need immediate support **/
```
{% endtab %}

{% tab title="Curl" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/list' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_ids": [
    "00000000-0000-0000-0000-000000000000",
    "11111111-1111-1111-1111-111111111111"
  ]
 }'
</code></pre>

**Response:**

```
{
  "access_codes": [
    {
      "access_code_id": "00000000-0000-0000-0000-000000000000",
      "device_id": "22222222-2222-2222-2222-222222222222",
      "name": "Access Code 0",
      "code": "1234",
      "common_code_key": null,
      "type": "ongoing",
      "status": "set",
      "created_at": "2023-01-01T00:00:00Z",
      "errors": [],
      "warnings": [],
      "is_managed": true
    },
    {
      "access_code_id": "11111111-1111-1111-1111-111111111111",
      "device_id": "33333333-3333-3333-3333-333333333333",
      "name": "Access Code 1",
      "code": "1111",
      "common_code_key": null,
      "type": "ongoing",
      "status": "set",
      "created_at": "2023-01-01T00:00:00Z",
      "errors": [],
      "warnings": [],
      "is_managed": true
    },
  ]
}
```
{% endtab %}
{% endtabs %}

***

## Retrieving individual access codes

To retrieve a specific access code, include its `access_code_id` in the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) request.

{% tabs %}
{% tab title="Javascript" %}
```javascript
const accessCodeId = 'ddf217cb-3fee-48be-ad4d-e8af16ea6bb0'
const accessCode = await seam.accessCodes.get({
    access_code_id: accessCodeId
})

console.log(accessCode)
```
{% endtab %}

{% tab title="Python" %}
```python
access_code_id = "0cf60b3a-2364-4d21-924e-64c7cb20bb62"
access_code = seam.access_codes.get(access_code_id)

# AccessCode(access_code_id='0cf60b3a-2364-4d21-924e-64c7cb20bb62',
#            type='ongoing',
#            code='9846',
#            starts_at=None,
#            ends_at=None,
#            name='my ongoing code',
#            status='set',
#            common_code_key=None)

print(access_code)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
access_code = seam.access_codes.get("043a9ac6-105e-4d15-b4b7-072f9b54b448")
puts access_code.inspect
# <Seam::AccessCode:0x00488
#   access_code_id="043a9ac6-105e-4d15-b4b7-072f9b54b448"
#   name="my time-bound code"
#   code="2262"
#   type="time_bound"
#   starts_at=2025-01-01 16:00:00 UTC
#   ends_at=2025-01-22 12:00:00 UTC
#   errors=[]
#   warnings=[]>

```
{% endtab %}

{% tab title="PHP" %}
```php
$access_code = $seam->access_codes->get("ed4a1f62-9070-4379-8c46-ea30a99e4d74");
```
{% endtab %}

{% tab title="Curl" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/get' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_id": "00000000-0000-0000-0000-000000000000"
 }'
</code></pre>

**Response:**

```
{
  "access_code": {
    "access_code_id": "00000000-0000-0000-0000-000000000000",
    "device_id": "11111111-1111-1111-1111-111111111111",
    "name": "Access Code",
    "code": "1234",
    "common_code_key": null,
    "type": "ongoing",
    "status": "set",
    "created_at": "2023-01-01T00:00:00Z",
    "errors": [],
    "warnings": [],
    "is_managed": true
  }
}
```
{% endtab %}
{% endtabs %}
