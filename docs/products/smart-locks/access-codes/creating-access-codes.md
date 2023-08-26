---
description: >-
  Learn how to program an access code onto a smart lock with a keypad, and
  ensure the code is successfully set.
---

# Creating access codes

This guide explains how to create access codes on a smart lock. With the [Access Codes](../../../api-clients/access-codes/) API, you can generate a PIN code for your door lock and share it with visitors, allowing them keyless access.&#x20;

Seam supports programming two types of access codes:

1. **Ongoing**: Ideal for residents or long-term users. Ongoing codes remain active on a device until removed.  Create one by leaving the `end_at` field empty. To remove the code, use the [Delete Access Code](../../../api-clients/access-codes/delete-an-access-code.md) endpoint.
2. **Time Bound**: Suitable for temporary access like guest visits or service appointments. These codes operate between a designated `starts_at` and `ends_at` time window, granting access only during that period.

***

# Before you begin


To confirm that Seam supports access code programming for your device, use [Get Device](../../../api-clients/devices/get-device.md) to query the device and check its `capabilities_supported` property. Ensure that `capabilities_supported` list includes `access_code`. After you've done that, come back here and keep reading.

<!-- CODE INJECT START
Get a device and print out the capability_supported property of this device

e.g. in python you could do:
```python
device = seam.devices.get("some_device_uuid")
print(device.capability_supported)
```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const device = await seam.devices.get({
  device_id: "device-uuid"
});

console.log(device.capabilities_supported);

```
{% endtab %}
{% tab title="Python" %}
```python
device = seam.devices.get("device-uuid")
print(device.capabilities_supported)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
device = seam.devices.get("device-uuid")
puts(device.capabilities_supported)
```
{% endtab %}
{% tab title="PHP" %}
```php
$device = $seam->devices->get("device-uuid");
echo json_encode($device->capabilities_supported);
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->



***

# Programming an ongoing code

## 1. Create a ongoing access code

Set an ongoing code by providing the device for which to [create an access code](../../../api-clients/access-codes/create-an-access-code.md). Assign an optional `name` to the access code for easier identification within the [Seam Console](https://console.seam.co) and smart lock app. Include an optional `starts_at` value to specify when this code should become active.

To customize the PIN code, specify a desired PIN for the `code` property. Refer to [the guide on access code requirements](access-code-requirements-for-door-locks.md) to understand any requirements specific to the door lock.



<!-- CODE INJECT START
Create an ongoing access code with a name and by providing the device reference and print out the result

e.g. in python you could do:
```python
device = seam.devices.get("some_device_uuid")
access_code = seam.access_codes.create(device=device, name="my ongoing code")
print(access_code)

# AccessCode(access_code_id='5cc206aa-c75f-4d68-b20a-983974ab3932', type='ongoing' code='2604', starts_at=None, ends_at=None, name="my ongoing code", status='setting' common_code_key=None)

```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const device = await seam.devices.get("device-uuid");
const createdAccessCode = await seam.accessCodes.create({
  device_id: device.device_id,
  name: "my ongoing code"
});
console.log(createdAccessCode);
```
{% endtab %}
{% tab title="Python" %}
```python
device = seam.devices.get("device-uuid")
created_access_code = seam.access_codes.create(
  device=device, 
  name="My Ongoing Access Code")

print(created_access_code)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
device = seam.devices.get("device-uuid")
created_access_code = seam.access_codes.create(
  device_id: device.device_id, 
  name: "my ongoing code")

puts created_access_code
```
{% endtab %}
{% tab title="PHP" %}
```php

$device = $seam->devices->get("device-uuid");
$created_access_code = $seam->access_codes->create(
  "device_id" => $device->device_id,
  "name" => "my ongoing code"
);


print($created_access_code);
```
{% endtab %}
{% tab title="Curl" %}
#### Request:

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/create' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "name": "Ongoing Access Code",
  "code": "1234"
 }'
</code></pre>

#### Response:

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "11111111-1111-1111-1111-111111111111",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "22222222-2222-2222-2222-222222222222",
    "device_id": "00000000-0000-0000-0000-000000000000",
    "name": "Ongoing Access Code",
    "code": "1234",
    "common_code_key": null,
    "type": "ongoing",
    "status": "setting",
    "created_at": "2023-01-01T00:00:00Z",
    "errors": [],
    "warnings": [],
    "is_managed": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->


## 2. Verify Successful Ongoing Code Programming

Seam might encounter some problems when setting an access code onto the lock. This could be due to weak internet connectivity, a low battery in the door lock, or someone unplugging the bridge that links the lock to the internet. **Give these potential challenges, it's essential to verify that a code has been successfully programmed on to the lock** to prevent unexpected complications later.

There are two methods to verify that an ongoing access code has been set on the device:

**Polling Method**

Use the `access_code` reference returned by the create function to call the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) function. A basic implementation would involve polling this endpoint until the `status` of the access code updates to `set`.

If the `status` remains `setting` for a very long time,  or if the `access_code` object contains any `warnings` or `errors` properties, consult [the guide on "Troubleshooting Access Code Issues"](troubleshooting-access-code-issues.md) for further guidance.

**Webhook Events Method**

To avoid polling, monitor for incoming Seam webhook events related to the code status: 

- The `access_code.set_on_device` event indicates the successful setting of the access code on the device.
- The `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events indicate a delay or failure.

In the event of delay or failure, refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance and mitigation strategies.


***

# Scheduling Time-Bound Access Codes

## 1. Create a time-bound access code

To set a time-bound code, provide the `device` reference of the smart lock on which to program the code, along with `starts_at` and `ends_at` iso8601 timestamps to define the code's active time window. For more details, refer to the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

As with ongoing codes, an optional `name` can be assigned to the access code. A clear name helps users identify the access code quickly within their smart lock app.

Similarly, to customize the PIN code, specify a desired PIN in the `code` property. Refer to [our guide on access code requirements](access-code-requirements-for-door-locks.md) to understand any requirements specific to the door lock brand.



<!-- CODE INJECT START
Create a timebound access code with a name, a starts_at and ends_at iso8601 timestamp, and by providing the device reference and print out the result. The starts_at should be 1 day in the future from now. The ends at should 2 days in the future from now.

e.g. in python you could do:
```python
from datetime import datetime, timedelta

# Starts 1 day from now
starts_at = datetime.utcnow() + timedelta(days=1)

# Ends 2 days from now
ends_at = datetime.utcnow() + timedelta(days=2)

# Convert to ISO8601 format
starts_at_iso8601 = starts_at.isoformat() + "Z"
ends_at_iso8601 = ends_at.isoformat() + "Z"

access_code = seam.access_codes.create(device=device, name="my timebound code", code="8888", starts_at=starts_at_iso8601, ends_at=ends_at_iso8601)

print(access_code)
# AccessCode(access_code_id='7a83ddc8-b9d9-4944-9457-46b31e654bdc', type='time_bound', code='8888', starts_at='2023-08-27T05:22:00.000Z', ends_at='2023-08-28T05:22:00.000Z', name='my timebound code', status='unset', common_code_key=None)


```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const ms = require('ms')
const { DateTime } = require('luxon')

const now = DateTime.utc();
const startsAt = now.plus({ days: 1 }).toISO();
const endsAt = now.plus({ days: 2 }).toISO();


const createdAccessCode = await seam.accessCodes.create({
  device_id: 'device-uuid',
  name: 'my timebound code',
  code: '8888',
  starts_at: startsAt,
  ends_at: endsAt
});

console.log(createdAccessCode);
```
{% endtab %}
{% tab title="Python" %}
```python
from datetime import datetime, timedelta

starts_at = datetime.utcnow() + timedelta(days=1)
ends_at = datetime.utcnow() + timedelta(days=2)


starts_at_iso8601 = starts_at.isoformat() + "Z"
ends_at_iso8601 = ends_at.isoformat() + "Z"


created_access_code = seam.access_codes.create(
    device_id="device-uuid", 
    name="My Time-bound Code",
    starts_at=starts_at_iso8601, ends_at=ends_at_iso8601
)


print(created_access_code)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
require 'date'

starts_at = DateTime.now.next_day(1)
ends_at = DateTime.now.next_day(2)
starts_at_iso8601 = starts_at.to_time.utc.iso8601
ends_at_iso8601 = ends_at.to_time.utc.iso8601

created_access_code = seam.access_codes.create(device_id:"device-uuid", name:"my timebound code", code:"8888", starts_at:starts_at_iso8601, ends_at:ends_at_iso8601)

puts(created_access_code)
```
{% endtab %}
{% tab title="PHP" %}
```php

$starts_at = new DateTime();
$starts_at->add(new DateInterval('P1D'));
$ends_at = new DateTime();
$ends_at->add(new DateInterval('P2D'));


$starts_at_iso8601 = $starts_at->format(DateTime::ATOM);
$ends_at_iso8601 = $ends_at->format(DateTime::ATOM);

$created_access_code = $seam->access_codes->create(
  "device-uuid",
  "my timebound code",
  "8888",
  $starts_at_iso8601,
  $ends_at_iso8601
);


print(json_encode($created_access_code));
```
{% endtab %}
{% tab title="Curl" %}
#### Request

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/create' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "name": "Temporary Access Code",
  "code": "1234",
  "starts_at": "2023-01-02T00:00:00Z",
  "ends_at": "2023-01-05T00:00:00Z"
 }'
</code></pre>

#### Response

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "11111111-1111-1111-1111-111111111111",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "22222222-2222-2222-2222-222222222222",
    "device_id": "00000000-0000-0000-0000-000000000000",
    "name": "Temporary Access Code",
    "code": "1234",
    "type": "timebound",
    "status": "unset",
    "starts_at": "2023-01-02T00:00:00Z",
    "ends_at": "2023-01-05T00:00:00Z",
    "created_at": "2023-01-01T00:00:00Z",
    "errors": [],
    "warnings": [],
    "is_managed": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->




## 2. Verify Successful Time-Bound Code Programming

The [lifecycle of a time-bound access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the access code remains in an `unset` state, indicating it has not yet been programmed onto the door lock due to its future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of programming the code onto the lock, transitioning the code's `status` to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is loaded onto the lock, and may grant the designated user the ability to unlock the door.

On door locks that support [natively scheduled](./#native-scheduling) access codes, Seam will preload the access code into the device's internal memory bank **72 hours ahead** of the `starts_at` time. Even if preloaded in memory, the access code will remain in an `unset` state ahead of the `starts_at` time and await the precise activation moment to toggle its status. When the `starts_at` time arrives, the access code becomes active and transition to a `set` status, granting the designated user the ability to utilize it for entry. If there's an issue programming the natively-scheduled code by its `starts_at` time, the code's status will display as `setting`. For more information on the lifecycle of access codes, [please refer to this guide](lifecycle-of-access-codes.md).

There are two methods to verify that a time-bound access code has been set on the device:

**Polling Method**

Use the `access_code` reference returned by the create function to call the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) function. In a basic implementation, you would poll this endpoint at the `starts_at` time to check if the access code's status is updated to `set`.

If the `status` remains `setting`, or if the `access_code` object displays any `warnings` or `errors`, refer to [the "Troubleshooting Access Code Issues" guide](troubleshooting-access-code-issues.md) for assistance.


**Webhook Events Method**

To avoid polling, monitor for incoming Seam webhook events related to the code status: 

- The `access_code.set_on_device` event indicates the successful setting of the access code on the device.
- The `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events indicate a delay or failure.

In the event of delay or failure, refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance and mitigation strategies.