---
description: >-
  Learn how to program an access code onto a smart lock with a keypad, and
  ensure the code is successfully set.
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Creating Access Codes

## Overview

This guide explains how to create access codes on a smart lock. With the [Access Codes](../../../api-clients/access-codes/) API, generate PIN codes on a door lock and share it with visitors, allowing them keyless access.

Seam supports programming two types of access codes:

1. **Ongoing**: Ideal for residents or long-term users. Ongoing codes remain active on a device until removed. Create one by leaving the `end_at` field empty. To remove the code, use the [Delete Access Code](../../../api-clients/access-codes/delete-an-access-code.md) endpoint.
2. **Time Bound**: Suitable for temporary access like guest visits or service appointments. These codes operate between a designated `starts_at` and `ends_at` time window, granting access only during that period.

***

## Before You Begin

To confirm that Seam supports access code programming for your device, use [Get Device](../../../api-clients/devices/get-device.md) to query the device and check its `capabilities_supported` property. Ensure that `capabilities_supported` list includes `access_code`. After you've done that, come back here and keep reading.

<!-- CODE INJECT START
Get a device and print out the capability_supported property of this device. Please use "7a83ddc8-b9d9-4944-9457-46b31e654bdc" for the device_id.
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const device = await seam.devices.get({
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc"
})

console.log(device.properties.capabilities_supported)
```
{% endtab %}

{% tab title="Python" %}
```python
device = seam.devices.get("7a83ddc8-b9d9-4944-9457-46b31e654bdc")
print(device.properties.capabilities_supported)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby

device = seam.devices.get('7a83ddc8-b9d9-4944-9457-46b31e654bdc')

print(device.properties.capabilities_supported)
```
{% endtab %}

{% tab title="PHP" %}
```php
$device = $seam->devices->get('7a83ddc8-b9d9-4944-9457-46b31e654bdc');
echo json_encode($device->capabilities_supported);
```
{% endtab %}
{% endtabs %}

***

## Programming an Ongoing Code

<!-- TODO: create illutation of what an ongoing code is -->

## 1. Create an Ongoing Access Code

Set an ongoing code by providing the `device_id` of the smart lock on which you want to [create an access code](../../../api-clients/access-codes/create-an-access-code.md). Assign an optional `name` to the access code for easier identification within the [Seam Console](https://console.seam.co) and smart lock app. Include an optional `starts_at` value to specify when this code should become active.

To customize the PIN code, specify a desired PIN for the `code` property. Refer to [the guide on access code requirements](access-code-requirements-for-door-locks.md) to understand any requirements specific to the door lock.

<!-- CODE INJECT START
Create an ongoing access code on a device using its device id, and give the code a name. Please use "7a83ddc8-b9d9-4944-9457-46b31e654bdc" for the device_id. Please use  "my ongoing code" for the code name.
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const createdAccessCode = await seam.accessCodes.create({
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc",
  name: "my ongoing code"
})

console.log(createdAccessCode)
```
{% endtab %}

{% tab title="Python" %}
```python
created_access_code = seam.access_codes.create(
  device_id="7a83ddc8-b9d9-4944-9457-46b31e654bdc",
  name="my ongoing code"
)

print(created_access_code)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby

client = Seam::Client.new(api_key: "your_api_key")


created_access_code = client.access_codes.create(
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc",
  name: "my ongoing code",
)


puts created_access_code
```
{% endtab %}

{% tab title="PHP" %}
```php
$created_access_code = $seam->access_codes->create([
  'device_id' => '7a83ddc8-b9d9-4944-9457-46b31e654bdc',
  'name' => 'my ongoing code',
]);

echo json_encode($created_access_code);
```
{% endtab %}

{% tab title="Curl" %}
## Request: 
```sh
$ curl --request POST 'https://connect.getseam.com/access_codes/create' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "name": "Ongoing Access Code",
  "code": "1234"
 }'
```

## Response:
```sh
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

### 2. Verify Successful Ongoing Code Programming

Seam may encounter some problems when setting an access code onto the lock. This could be due to weak internet connectivity, a low battery in the door lock, or someone unplugging the bridge that links the lock to the internet. **Given these potential challenges, it's essential to verify that a code has been successfully programmed on to the lock** to prevent unexpected complications later.

There are two methods to verify that an ongoing access code has been set on the device:

* **Polling**: continuously query the access code until its `status` is updated
* **Webhook**: wait for updates to arrive via webhook requests from the Seam API

### **Polling Method**

Use the `access_code` reference returned by the create function to call the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) function. A basic implementation would involve polling this endpoint until the `status` of the access code updates to `set`.

If the `status` remains `setting` for a very long time, or if the `access_code` object contains any `warnings` or `errors` properties, consult [the guide on "Troubleshooting Access Code Issues"](troubleshooting-access-code-issues.md) for further guidance.

### **Webhook Events Method**

To avoid polling, monitor for incoming Seam webhook events related to the code status:

* The `access_code.set_on_device` event indicates the successful setting of the access code on the device.
* The `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events indicate a delay or failure.

In the event of delay or failure, refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance and mitigation strategies.

***

## Scheduling Time-Bound Access Codes

### 1. Create a Time-Bound Access Code

To set a time-bound code, provide the `device_id` of the smart lock you wish to program a code on, along with `starts_at` and `ends_at` iso8601 timestamps to define the code's active time window. For more details, refer to the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

As with ongoing codes, an optional `name` can be assigned to the access code. A clear name helps users identify the access code quickly within their smart lock app.

Similarly, to customize the PIN code, specify a desired PIN in the `code` property. Refer to [our guide on access code requirements](access-code-requirements-for-door-locks.md) to understand any requirements specific to the door lock brand.

<!-- CODE INJECT START
Create a timebound access code on a device using its device_id and pass the create code funtion a name, a starts_at and ends_at iso8601 timestamp. Please use "7a83ddc8-b9d9-4944-9457-46b31e654bdc" for the device_id. Please use  "my time-bound code" for the code name. Please make the starts_at date January 1st, 2025 at 4pm utc. Please make the ends_at date January 22nd, 2025 at 12pm utc.
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const accessCode = await seam.accessCodes.create({
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc",
  name: "my time-bound code",
  starts_at: new Date("2025-01-01T16:00:00Z").toISOString(),
  ends_at: new Date("2025-01-22T12:00:00Z").toISOString()
})

console.log(accessCode);
```
{% endtab %}

{% tab title="Python" %}
```python
created_access_code = seam.access_codes.create(
  device_id="7a83ddc8-b9d9-4944-9457-46b31e654bdc",
  name="my time-bound code",
  starts_at="2025-01-01T16:00:00Z",
  ends_at="2025-01-22T12:00:00Z"
)

print(created_access_code)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
created_access_code = seam.access_codes.create(
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc",
  name: "my time-bound code",
  starts_at: "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z"
)

print(created_access_code)
```
{% endtab %}

{% tab title="PHP" %}
```php
$timebound_access_code = $seam->access_codes->create([
    "device_id" => "7a83ddc8-b9d9-4944-9457-46b31e654bdc",
    "name" => "My Timebound Access Code",
    "starts_at" => "2025-01-01T16:00:00Z",
    "ends_at" => "2025-01-22T12:00:00Z"
]);

print(json_encode($timebound_access_code));
```
{% endtab %}

{% tab title="Curl" %}
## Request: 
```sh
$ curl --request POST 'https://connect.getseam.com/access_codes/create' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "name": "Temporary Access Code",
  "code": "1234",
  "starts_at": "2023-01-02T00:00:00Z",
  "ends_at": "2023-01-05T00:00:00Z"
 }'
```

## Response:
```sh
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

### 2. Verify Successful Time-Bound Code Programming

The [lifecycle of a time-bound access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the access code remains in an `unset` state, indicating it has not yet been programmed onto the door lock due to its future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of programming the code onto the lock, transitioning the code's `status` to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is loaded onto the lock, and may grant the designated user the ability to unlock the door.

On door locks that support [natively scheduled](./#native-scheduling) access codes, Seam will preload the access code into the device's internal memory bank **72 hours ahead** of the `starts_at` time. Even if preloaded in memory, the access code will remain in an `unset` state ahead of the `starts_at` time and await the precise activation moment to toggle its status. When the `starts_at` time arrives, the access code becomes active and transition to a `set` status, granting the designated user the ability to utilize it for entry. If there's an issue programming the natively-scheduled code by its `starts_at` time, the code's status will display as `setting`. For more information on the lifecycle of access codes, [please refer to this guide](lifecycle-of-access-codes.md).

There are two methods to verify that an time-bound access code has been set on the device:

* **Polling**: continuously query the access code until its `status` is updated
* **Webhook**: wait for updates to arrive via webhook requests from the Seam API



### **Polling Method**

Use the `access_code` reference returned by the create function to call the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) function. In a basic implementation, you would poll this endpoint at the `starts_at` time to check if the access code's status is updated to `set`.

If the `status` remains `setting`, or if the `access_code` object displays any `warnings` or `errors`, refer to [the "Troubleshooting Access Code Issues" guide](troubleshooting-access-code-issues.md) for assistance.

### **Webhook Events Method**

To avoid polling, monitor for incoming Seam webhook events related to the code status:

* The `access_code.set_on_device` event indicates the successful setting of the access code on the device.
* The `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events indicate a delay or failure.

In the event of delay or failure, refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance and mitigation strategies.
