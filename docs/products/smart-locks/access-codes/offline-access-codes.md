---
description: >-
  Learn how to create offline access codes for applicable smart locks with
  keypads.
---

# Offline Access Codes

## Overview

This guide explains how to create [offline access (PIN) codes](./#offline-access-codes) for smart locks that support these types of codes. Use the [Access Codes](../../../api-clients/access-codes/) API to generate a [time-bound](./#time-bound-offline-access-codes) or [one-time-use](./#one-time-use-offline-access-codes) offline access code. Note that Seam support for offline access code functions varies depending on the device manufacturer. For details, see the corresponding device guide.

* [igloohome Locks device guide](../../../device-guides/igloohome-locks.md)
* [dormakaba Oracode Locks device guide](../../../device-guides/dormakaba-oracode-locks.md)

***

## Before You Begin

To confirm that Seam supports access code programming for your device, use [Get Device](../../../api-clients/devices/get-device.md) or [Get Lock](../../../api-clients/locks/get-lock.md) to query the device and check the `capabilities_supported` and `offline_access_codes_enabled` properties for the device. Ensure that the `capabilities_supported` list includes `access_code` and that `offline_access_codes_enabled` is `true`.

Further, before creating an offline access code, it is imperative to understand any manufacturer- or device-specific constraints, such as the maximum number of access codes, any time slot or activation requirements, and so on. For details, see the corresponding device guide and any manufacturer-specific properties within the retrieved lock.

* [igloohome Locks device guide](../../../device-guides/igloohome-locks.md)
* [dormakaba Oracode Locks device guide](../../../device-guides/dormakaba-oracode-locks.md)

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.locks.get(device="9689dc30-77d8-4728-9968-b3abd0835f47"))
```

**Response:**

```
Device(device_id='9689dc30-77d8-4728-9968-b3abd0835f47',
       device_type='igloohome_lock',
       ...
       properties={...
                   'offline_access_codes_enabled': True}, // Device supports offline access codes.
       capabilities_supported=['access_code', ...], // Device supports access code actions.
       ...)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47"
}'
```

**Response:**

```json
{
  "device": {
    "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
    "device_type": "igloohome_lock",
    "capabilities_supported": [
      "access_code", // Device supports access code actions.
      ...
    ],
    "properties": {
      "offline_access_codes_enabled": true, // Device supports offline access codes.
      ...
    },
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const lock = await seam.locks.get("ea12f6c6-e63e-447d-856b-ec9e92981000")
console.log(lock)
console.log("\nPredefined time slots:")
console.log(lock.properties.dormakaba_oracode_metadata.predefined_time_slots)
```

**Response:**

```json
{
  device_id: 'ea12f6c6-e63e-447d-856b-ec9e92981000',
  device_type: 'dormakaba_oracode_door',
  capabilities_supported: [ 'access_code' ], // Device supports access code actions.
  properties: {
    ...
    dormakaba_oracode_metadata: {
      ...
      iana_timezone: 'Europe/Tirane',
      predefined_time_slots: [Array]
    },
    ...
    offline_access_codes_enabled: true, // Device supports offline access codes.
    ...
  },
  ...
}

Predefined time slots:
// Each dormakaba Oracode offline access code must adhere to one of these 
// predefined user levels (time slots).
[
  {
    name: 'User 123 D 24H',
    prefix: 123,
    is_master: false,
    is_24_hour: true,
    is_one_shot: false,
    check_in_time: '00:00:00[Europe/Tirane]',
    check_out_time: '23:59:00[Europe/Tirane]',
    is_biweekly_mode: false,
    dormakaba_oracode_user_level_id: '12e0e160-23e6-4f9b-a82a-ea93d543d1fa',
    ext_dormakaba_oracode_user_level_prefix: 123
  },
  ...
  {
    name: 'User 126 D 7am-7pm',
    prefix: 126,
    is_master: false,
    is_24_hour: false,
    is_one_shot: false,
    check_in_time: '07:00:00[Europe/Tirane]',
    check_out_time: '19:00:00[Europe/Tirane]',
    is_biweekly_mode: false,
    dormakaba_oracode_user_level_id: '3f0b3c81-fcb6-4c60-8fca-ab020e84990e',
    ext_dormakaba_oracode_user_level_prefix: 126
  }
  ...
]
```
{% endtab %}
{% endtabs %}

***

## Creating Time-Bound Offline Access Codes

For [igloohome locks](../../../device-guides/igloohome-locks.md) and [dormakaba Oracode locks](../../../device-guides/dormakaba-oracode-locks.md), you can create time-bound offline access codes with validity durations at either the hour level or the day level.

Some device manufacturers enforce a maximum duration for hourly-bound offline access codes. For example, [igloohome](../../../device-guides/igloohome-locks.md) and [dormakaba Oracode](../../../device-guides/dormakaba-oracode-locks.md) enforce the following duration rules for hourly- and daily-bound offline access codes:

| Manufacturer      | Code Type                    | Duration Rule            |
| ----------------- | ---------------------------- | ------------------------ |
| igloohome         | Hourly-bound codes           | 1 to 672 hours (28 days) |
| igloohome         | Daily-bound codes            | 29 to 367 days           |
| dormakaba Oracode | Hourly- or daily-bound codes | 1 to 31 days             |

{% hint style="info" %}
dormakaba Oracode locks also use specific access code time slots (called "user levels" or "user prefixes"). You must adhere to these time slots when you create offline access codes. For more information, see [User Levels](../../../device-guides/dormakaba-oracode-locks.md#user-levels).
{% endhint %}

To [create an hourly-bound offline access code](offline-access-codes.md#program-an-hourly-bound-offline-access-code), set `is_offline_access_code` to `true`, and specify the desired `starts_at` and `ends_at` date and time.&#x20;

To [create a daily-bound offline access code](offline-access-codes.md#1.-create-a-daily-bound-access-code), set `is_offline_access_code` to `true`, and specify the same time (but not the same date) in the `starts_at` and `ends_at` properties. Because daily-bound offline access codes must be valid for a number of days, that is, day-level granularity, you can set `max_time_rounding` to `1day` (or `1d`), instead of the default `1hour` (or `1h`). In this case, Seam rounds the time period that you specify to the nearest day.

### Program an Hourly-Bound Offline Access Code

To create an hourly-bound offline access code, first issue a creation request. Then, poll or use a webhook to confirm the successful code registration in the offline access code server that the device manufacturer maintains.

#### 1. Create an Hourly-Bound Access Code&#x20;

To create an hourly-bound offline access code, provide the `device_id` of the lock for which you want to create the code and set `is_offline_access_code` to `true`. Specify the `starts_at` and `ends_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamps to define the active time window for the offline code. You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my hourly-bound offline code",
  starts_at = "2023-11-10T00:00:00-00:00",
  ends_at = "2023-11-15T18:00:00-00:00",
  is_offline_access_code = True
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='f078dce8-3c5e-4bc4-bd08-3ad013ee8be6',
           device_id='9689dc30-77d8-4728-9968-b3abd0835f47',
           type='time_bound',
           code=None,
           created_at='2023-11-07T03:51:56.096Z',
           errors=[],
           warnings=[],
           starts_at='2023-11-10T00:00:00.000Z',
           ends_at='2023-11-15T18:00:00.000Z',
           name='my hourly-bound offline code5',
           status='unset',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=True,
           is_scheduled_on_device=False,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False,
           is_offline_access_code=True,
           is_one_time_use=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
### Request:

```sh
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
  "name": "my hourly-bound offline code",
  "starts_at": "2023-11-10T00:00:00-00:00",
  "ends_at": "2023-11-15T18:00:00-00:00",
  "is_offline_access_code": true
}'
```

### Response:

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "83f1eebf-7a1b-4487-bc90-cf342e1d10d7",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "a4960c38-fe15-4766-8647-c93e8f05f84a",
    "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
    "name": "my hourly-bound offline code",
    "appearance": null,
    "code": null,
    "is_waiting_for_code_assignment": true,
    "common_code_key": null,
    "type": "time_bound",
    "status": "unset",
    "is_scheduled_on_device": false,
    "starts_at": "2023-11-10T00:00:00.000Z",
    "ends_at": "2023-11-15T18:00:00.000Z",
    "is_backup_access_code_available": false,
    "created_at": "2023-11-07T03:53:41.971Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false,
    "is_offline_access_code": true,
    "is_one_time_use": false
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const deviceId = "ea12f6c6-e63e-447d-856b-ec9e92981000"

const createdAccessCode = await seam.accessCodes.create({
  device_id: deviceId,
  name: "my hourly-bound offline code",
  starts_at: "2023-12-22T06:00:00-00:00",
  ends_at: "2023-12-22T18:00:00-00:00",
  is_offline_access_code: true
})

console.log(createdAccessCode)
```

**Response:**

```json
{
  access_code_id: 'b4977781-7108-478a-a5ec-764b51ba2647',
  device_id: 'ea12f6c6-e63e-447d-856b-ec9e92981000',
  name: 'my hourly-bound offline code',
  appearance: null,
  code: null,
  is_waiting_for_code_assignment: true,
  common_code_key: null,
  type: 'time_bound',
  status: 'unset',
  starts_at: '2023-12-22T06:00:00.000Z',
  ends_at: '2023-12-22T18:00:00.000Z',
  is_backup_access_code_available: false,
  created_at: '2023-12-11T21:46:32.914Z',
  errors: [],
  warnings: [],
  is_managed: true,
  is_external_modification_allowed: false,
  is_offline_access_code: true,
  is_one_time_use: false
}
```
{% endtab %}
{% endtabs %}

#### 2. Verify Successful Time-Bound Code Registration

The [lifecycle of a time-bound access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that an time-bound offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](creating-access-codes.md#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](creating-access-codes.md#webhook-events-method-1).

### Program a Daily-Bound Offline Access Code

To create a daily-bound offline access code, first issue a creation request. Then, poll or use a webhook to confirm the successful code registration in the offline access code server that the device manufacturer maintains.

#### 1. Create a Daily-Bound Access Code&#x20;

To create a daily-bound offline access code, provide the `device_id` of the lock for which you want to create the code and set `is_offline_access_code` to `true`. Specify the `starts_at` and `ends_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamps to define the active time window for the offline code. For a daily-bound offline access code, you must specify the same time (but not the same date) in the `starts_at` and `ends_at` properties.

Because daily-bound offline access codes require day-level duration granularity, you can also set `max_time_rounding` to `1day` (or `1d`), instead of the default `1hour` (or `1h`). Note that the Seam API returns an error if `max_time_rounding` is `1hour` and the necessary rounding amount exceeds one hour.

You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my daily-bound offline code",
  starts_at = "2023-11-17T00:00:00-00:00",
  ends_at = "2023-12-18T00:00:00-00:00",
  max_time_rounding = "1d",
  is_offline_access_code = True
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='7cac9c2c-4313-4a94-a034-ceee2a4bd9ef',
           device_id='9689dc30-77d8-4728-9968-b3abd0835f47',
           type='time_bound',
           code=None,
           created_at='2023-11-07T04:38:45.865Z',
           errors=[],
           warnings=[],
           starts_at='2023-11-17T00:00:00.000Z',
           ends_at='2023-12-18T00:00:00.000Z',
           name='my daily-bound offline code',
           status='unset',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=True,
           is_scheduled_on_device=False,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False,
           is_offline_access_code=True,
           is_one_time_use=False)
```
{% endtab %}

{% tab title="cURL (bash)" %}
### Request:

```sh
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
  "name": "my daily-bound offline code",
  "type": "time_bound",
  "starts_at": "2023-11-17T00:00:00-00:00",
  "ends_at": "2023-12-18T00:00:00-00:00",
  "max_time_rounding": "1d",
  "is_offline_access_code": true
}'
```

### Response:

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "487a8bcc-00f0-45ff-be80-3f0e9d6fdfe5",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "08d4a763-f2a5-4544-8c90-bce5217fe7b2",
    "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
    "name": "my daily-bound offline code",
    "appearance": null,
    "code": null,
    "is_waiting_for_code_assignment": true,
    "common_code_key": null,
    "type": "time_bound",
    "status": "unset",
    "is_scheduled_on_device": false,
    "starts_at": "2023-11-17T00:00:00.000Z",
    "ends_at": "2023-12-18T00:00:00.000Z",
    "is_backup_access_code_available": false,
    "created_at": "2023-11-07T04:41:15.797Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false,
    "is_offline_access_code": true,
    "is_one_time_use": false
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const deviceId = "ea12f6c6-e63e-447d-856b-ec9e92981000"

const createdAccessCode = await seam.accessCodes.create({
  device_id: deviceId,
  name: "my daily-bound offline code",
  starts_at: "2023-12-22T23:00:00-00:00",
  ends_at: "2023-12-27T22:59:00-00:00",
  max_time_rounding: "1d",
  is_offline_access_code: true
})

console.log(createdAccessCode)
```

**Response:**

```json
{
  access_code_id: 'fb044bde-df9b-4130-bc1a-c0254ab919aa',
  device_id: 'ea12f6c6-e63e-447d-856b-ec9e92981000',
  name: 'my daily-bound offline code',
  appearance: null,
  code: null,
  is_waiting_for_code_assignment: true,
  common_code_key: null,
  type: 'time_bound',
  status: 'unset',
  starts_at: '2023-12-22T23:00:00.000Z',
  ends_at: '2023-12-27T22:59:00.000Z',
  is_backup_access_code_available: false,
  created_at: '2023-12-11T22:06:27.366Z',
  errors: [],
  warnings: [],
  is_managed: true,
  is_external_modification_allowed: false,
  is_offline_access_code: true,
  is_one_time_use: false
}
```
{% endtab %}
{% endtabs %}

#### 2. Verify Successful Time-Bound Code Registration

The [lifecycle of a time-bound access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that an time-bound offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](creating-access-codes.md#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](creating-access-codes.md#webhook-events-method-1).

***

## Creating One-Time-Use Offline Access Codes

For [igloohome locks](../../../device-guides/igloohome-locks.md), you can create one-time-use offline access codes that are valid for 24 hours from the `starts_at` date and time that you configure. These codes expire after a single use. To confirm that your device supports one-time-use offline access codes, see the corresponding [device guide](../../../device-guides/igloohome-locks.md).

To create a one-time-use offline access code, first issue a creation request. In this request, set `is_offline_access_code` and `is_one_time_use` to `true`, and specify the desired `starts_at` date and time. Then, poll or use a webhook to confirm the successful code registration in the offline access code server that the device manufacturer maintains.

### 1. Create a One-Time-Use Offline Access Code&#x20;

To create a one-time-use offline access code, provide the `device_id` of the lock for which you want to create the code. Set `is_offline_access_code` and `is_one_time_use` to `true`. Specify the `starts_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp to define the beginning of the active time window for the offline code.

You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "9689dc30-77d8-4728-9968-b3abd0835f47"

created_access_code = seam.access_codes.create(
  device = device_id,
  name = "my one-time-use offline code",
  starts_at = "2023-11-12T00:00:00-00:00",
  is_offline_access_code = True,
  is_one_time_use = True
)

pprint(created_access_code)
```

**Response:**

```
AccessCode(access_code_id='995957b0-5db5-43f2-ac64-e8ad076c09cf',
           device_id='9689dc30-77d8-4728-9968-b3abd0835f47',
           type='time_bound',
           code=None,
           created_at='2023-11-07T05:03:31.469Z',
           errors=[],
           warnings=[],
           starts_at='2023-11-12T00:00:00.000Z',
           ends_at=None,
           name='my one-time-use offline code',
           status='unset',
           common_code_key=None,
           is_managed=True,
           is_waiting_for_code_assignment=True,
           is_scheduled_on_device=False,
           pulled_backup_access_code_id=None,
           is_backup_access_code_available=False,
           is_backup=None,
           appearance=None,
           is_external_modification_allowed=False,
           is_offline_access_code=True,
           is_one_time_use=True)
```
{% endtab %}

{% tab title="cURL (bash)" %}
### Request:

```sh
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
  "name": "my one-time-use offline code",
  "starts_at": "2023-11-12T00:00:00-00:00",
  "is_offline_access_code": true,
  "is_one_time_use": true
}'
```

### Response:

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "67562d28-1e54-4faa-b5f8-057bbc6de91d",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "27000544-20d8-45ea-ba47-267480a3aaf4",
    "device_id": "9689dc30-77d8-4728-9968-b3abd0835f47",
    "name": "my one-time-use offline code",
    "appearance": null,
    "code": null,
    "is_waiting_for_code_assignment": true,
    "common_code_key": null,
    "type": "time_bound",
    "status": "unset",
    "is_scheduled_on_device": false,
    "starts_at": "2023-11-12T00:00:00.000Z",
    "is_backup_access_code_available": false,
    "created_at": "2023-11-07T05:08:03.467Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "is_external_modification_allowed": false,
    "is_offline_access_code": true,
    "is_one_time_use": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

#### 2. Verify Successful One-Time-Use Code Registration

The [lifecycle of a one-time-use access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that a one-time-use offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](creating-access-codes.md#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](creating-access-codes.md#webhook-events-method-1).
