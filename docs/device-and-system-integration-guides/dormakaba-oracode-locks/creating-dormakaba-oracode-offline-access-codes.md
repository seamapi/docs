---
description: >-
  Learn how to create dormakaba Oracode offline access codes, including
  understanding manufacturer-specific requirements.
---

# Creating dormakaba Oracode Offline Access Codes

The Seam integration for dormakaba Oracode enables you to manage [offline access codes](../../products/smart-locks/access-codes/offline-access-codes.md) for dormakaba Oracode locks. You generate offline access (PIN) codes remotely, and the manufacturer maintains a server-based registry of synchronized encryption keys (tokens) to enable these offline codes. Then, owners or managers can share these codes with users through messaging or other similar applications, and the users do not need to install a special application to unlock the device.

To learn about the special requirements regarding offline access codes for dormakaba Oracode locks, see [Offline Access Code Requirements](creating-dormakaba-oracode-offline-access-codes.md#offline-access-code-requirements). For more information about using offline access codes, see [Offline Access Codes](../../products/smart-locks/access-codes/#offline-access-codes) and [Managing Offline Access Codes](../../products/smart-locks/access-codes/offline-access-codes.md).

***

## Offline Access Code Requirements

Seam supports daily-bound and hourly-bound [offline access codes](../../products/smart-locks/access-codes/offline-access-codes.md) for dormakaba Oracode locks. Note the following dormakaba Oracode-specific restrictions and requirements for offline access codes:

### Duration

The duration limit for a dormakaba Oracode offline access code is 31 consecutive days.

### Deletion and Access Code Limits

You cannot delete dormakaba Oracode offline access codes. Consequently, it is important to be aware of device- and installation-specific access code limits, especially if you plan to create large numbers of codes simultaneously. For more information about these limits, see the user manual for your dormakaba Oracode lock or contact your dormakaba Oracode support representative.

### User Levels

dormakaba Oracode locks use pre-programmed sets of access code time slots called "user levels" or "user prefixes." All the access codes in a specific user level have the same prefix, for example, `123` in `123456789` and `123987654`. Further, all access codes in a specific user level use the same configuration for the following characteristics:

* Check in and check out time
* Whether the access code is a one-time-use code
* Whether the access code is daily-bound (`is_24_hour`)
* Whether the access code is a biweekly code (that is, a code that is valid for two weeks)
* Whether the access code is a master code that exists indefinitely, for example, for site owners

When you create a dormakaba Oracode offline access code, you must set the duration of the code to match—exactly—one of the time slots on the device. To view a list of all available time slots for a specific device, [get the device](../../api/devices/get.md) and view the `device.properties.dormakaba_oracode_metadata.predefined_time_slots` property for the device.

```json
"predefined_time_slots": [
  {
      "name": "Guest RCI D 7am-7pm",
      "prefix": 0,
      "is_master": false,
      "is_24_hour": false,
      "is_one_shot": false,
      "check_in_time": "07:00:00[America/Los_Angeles]",
      "check_out_time": "19:00:00[America/Los_Angeles]",
      "is_biweekly_mode": false,
      "dormakaba_oracode_user_level_id": "f23721ec-6dce-4c54-8971-40d58449a366",
      "ext_dormakaba_oracode_user_level_prefix": 0
  },
  ...
]
```

### Time Zones

All time zone configuration and display for dormakaba Oracode locks occur in the local time zone of the lock, itself. When you [connect your dormakaba Oracode site to Seam](../../device-guides/dormakaba-oracode-locks.md#setup-instructions) initially, you specify the time zone in which the site is located. Consequently, when you configure an access code for a dormakaba Oracode lock, you set the `starts_at` and `ends_at` properties using a time and offset that match the local time zone of the lock.

For example, suppose that your lock includes the following user level:

```json
"check_in_time": "07:00:00[America/Los_Angeles]",
"check_out_time": "19:00:00[America/Los_Angeles]"
```

To set an access code that uses this user level, set the times for the `starts_at` and `ends_at` properties as follows:

```json
"starts_at": "2024-09-10T07:00:00-07:00",
"ends_at": "2024-09-15T19:00:00-07:00"
```

#### View the Time Zone of a dormakaba Oracode Lock

To view the local time zone of a dormakaba Oracode lock, [get the device](../../api/devices/get.md) and see the `check_in_time` and `check_out_time` within each time slot in the `device.properties.dormakaba_oracode_metadata.predefined_time_slots` property for the device. You can also see the local time zone for a dormakaba Oracode lock in the `dormakaba_oracode_device_metadata.iana_timezone` property.

### Master Codes

Seam does not currently support dormakaba Oracode master offline access codes.

### One-Time-Use Codes

Seam does not currently support dormakaba Oracode one-time-use offline access codes.

***

## Programming dormakaba Oracode Offline Access Codes

You can create hourly- and daily-bound offline access codes for dormakaba Oracode devices.

### Hourly-Bound Offline Access Codes

To [create an hourly-bound offline access code](../../products/smart-locks/access-codes/offline-access-codes.md#creating-time-bound-offline-access-codes), issue an access code creation request. Then, poll or use a webhook to confirm that the code was registered successfully in the dormakaba Oracode offline access code server.

#### 1. Create an Hourly-Bound Offline Access Code

To create an hourly-bound offline access code, provide the `device_id` of the lock for which you want to create the code and set `is_offline_access_code` to `true`. Specify the `starts_at` and `ends_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamps to define the active time window for the offline code. Make sure to set the duration of the code to match—exactly—one of the [user levels](creating-dormakaba-oracode-offline-access-codes.md#user-levels) on the device. You can also assign an optional `name` to the offline access code.

{% hint style="info" %}
Make sure to set the `starts_at` and `ends_at` times and offsets to match the local time zone of the lock, as configured when the corresponding [dormakaba Oracode site was connected to Seam](../../device-guides/dormakaba-oracode-locks.md#setup-instructions).
{% endhint %}

For more details, see the [Create Access Code endpoint](../../api/access_codes/create.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the device.
device = seam.locks.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that the device supports offline access codes.
if device.can_program_offline_access_codes:
  # Create the hourly-bound offline access code.
  seam.access_codes.create(
    device_id = device.device_id,
    name = "my hourly-bound offline code",
    # Make sure that the validity period matches
    # a user level for the device.
    starts_at = "2024-09-10T07:00:00-07:00",
    ends_at = "2024-09-15T19:00:00-07:00",
    is_offline_access_code = True
  )
```

**Response:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-777777777777',
  device_id='11111111-1111-1111-1111-444444444444',
  type='time_bound',
  starts_at='2024-09-10T14:00:00.000Z',
  ends_at='2024-09-16T02:00:00.000Z',
  name='my hourly-bound offline code',
  is_offline_access_code=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
# Get the device.
device=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-1111-444444444444"
  }')

# Confirm that the device supports offline access codes.
if  $(jq -r '.device.can_program_offline_access_codes' <<< ${device}); then \
  # Create the hourly-bound offline access code.
  # Make sure that the validity period matches
  # a user level for the device.
  curl -X 'POST' \
    'https://connect.getseam.com/access_codes/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"name\": \"my hourly-bound offline code\",
      \"starts_at\": \"2024-09-10T07:00:00-07:00\",
      \"ends_at\": \"2024-09-15T19:00:00-07:00\",
      \"is_offline_access_code\": true
  }";
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-777777777777",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "name": "my hourly-bound offline code",
    "type": "time_bound",
    "starts_at": "2024-09-10T14:00:00.000Z",
    "ends_at": "2024-09-16T02:00:00.000Z",
    "is_offline_access_code": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
// Get the device.
const device = await seam.locks.get({
  device_id: "11111111-1111-1111-1111-444444444444"
});

// Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes) {
  // Create the hourly-bound offline access code.
  await seam.accessCodes.create({
    device_id: device.device_id,
    name: "my hourly-bound offline code",
    // Make sure that the validity period matches
    // a user level for the device.
    starts_at: "2024-09-10T07:00:00-07:00",
    ends_at: "2024-09-15T19:00:00-07:00",
    is_offline_access_code: true
  })
};
```

**Response:**

```json
{
  access_code_id: '11111111-1111-1111-1111-777777777777',
  device_id: '11111111-1111-1111-1111-444444444444',
  name: 'my hourly-bound offline code',
  type: 'time_bound',
  starts_at: '2024-09-10T14:00:00.000Z',
  ends_at: '2024-09-16T02:00:00.000Z',
  is_offline_access_code: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Get the device.
device = client.locks.get(device_id: "11111111-1111-1111-1111-444444444444")

# Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes)
  # Create the hourly-bound offline access code.
  client.access_codes.create(
    device_id: device.device_id,
    name: "my hourly-bound offline code",
    # Make sure that the validity period matches
    # a user level for the device.
    starts_at: "2024-09-10T07:00:00-07:00",
    ends_at: "2024-09-15T19:00:00-07:00",
    is_offline_access_code: true
  )
end
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-777777777777"
  device_id="11111111-1111-1111-1111-444444444444"
  name="my hourly-bound offline code"
  type="time_bound"
  starts_at=2024-09-10 14:00:00 UTC
  ends_at=2024-09-16 02:00:00 UTC
  is_offline_access_code: true
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the device.
$device = $seam->locks->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if ($device->can_program_offline_access_codes) {
  // Create the hourly-bound offline access code.
  $seam->access_codes->create(
    device_id: $device->device_id,
    name: "my hourly-bound offline code",
    // Make sure that the validity period matches
    // a user level for the device.
    starts_at: "2024-09-10T07:00:00-07:00",
    ends_at: "2024-09-15T19:00:00-07:00",
    is_offline_access_code: true
  );
}
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-777777777777",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my hourly-bound offline code",
  "type": "time_bound",
  "starts_at": "2024-09-10T14:00:00.000Z",
  "ends_at": "2024-09-16T02:00:00.000Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Get the device.
Device device = seam.Locks.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if (device.CanProgramOfflineAccessCodes == true) {
  // Create the hourly-bound offline access code.
  seam.AccessCodes.Create(
    deviceId: device.DeviceId,
    name: "my hourly-bound offline code",
    // Make sure that the validity period matches
    // a user level for the device.
    startsAt: "2024-09-10T07:00:00-07:00",
    endsAt: "2024-09-15T19:00:00-07:00",
    isOfflineAccessCode: true
  );
}
```

**Response:**

```
{
  "type": "time_bound",
  "access_code_id": "11111111-1111-1111-1111-777777777777",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my hourly-bound offline code",
  "starts_at": "2024-09-10T14:00:00.000Z",
  "ends_at": "2024-09-16T02:00:00.000Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}



{% endtabs %}

#### 2. Verify Successful Time-Bound Code Registration

The [lifecycle of a time-bound access code](../../products/smart-locks/access-codes/lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that an time-bound offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](../../capability-guides/smart-locks/access-codes/creating-access-codes/#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](../../capability-guides/smart-locks/access-codes/creating-access-codes/#webhook-events-method-1).

***

### Daily-Bound Offline Access Codes

To [create a daily-bound offline access code](../../products/smart-locks/access-codes/offline-access-codes.md#creating-time-bound-offline-access-codes), first issue a creation request. Then, poll or use a webhook to confirm that the code was registered successfully in the dormakaba Oracode offline access code server.

#### 1. Create a Daily-Bound Access Code

To create a daily-bound offline access code, provide the `device_id` of the lock for which you want to create the code and set `is_offline_access_code` to `true`. Specify the `starts_at` and `ends_at` [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamps to define the active time window for the offline code. Make sure to set the duration of the code to match—exactly—one of the [user levels](creating-dormakaba-oracode-offline-access-codes.md#user-levels) on the device. For a daily-bound offline access code, you must specify the same time (but not the same date) in the `starts_at` and `ends_at` properties.

{% hint style="info" %}
Make sure to set the `starts_at` and `ends_at` times and offsets to match the local time zone of the lock, as configured when the corresponding [dormakaba Oracode site was connected to Seam](../../device-guides/dormakaba-oracode-locks.md#setup-instructions).
{% endhint %}

Because daily-bound offline access codes require day-level duration granularity, you can also set `max_time_rounding` to `1day` (or `1d`), instead of the default `1hour` (or `1h`). Note that the Seam API returns an error if `max_time_rounding` is `1hour` and the necessary rounding amount exceeds one hour.

You can also assign an optional `name` to the offline access code. For more details, see the [Create Access Code endpoint](../../api/access_codes/create.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the device.
device = seam.locks.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that the device supports offline access codes.
if device.can_program_offline_access_codes:
  # Create the daily-bound offline access code.
  seam.access_codes.create(
    device_id = device.device_id,
    name = "my daily-bound offline code",
    # Make sure that the validity period matches
    # a user level for the device.
    starts_at = "2024-09-16T00:00:00-07:00",
    ends_at = "2024-09-18T23:59:00-07:00",
    max_time_rounding = "1d",
    is_offline_access_code = True
  )
```

**Response:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-888888888888',
  device_id='11111111-1111-1111-1111-444444444444',
  type='time_bound',
  starts_at='2024-09-16T07:00:00.000Z',
  ends_at='2024-09-19T06:59:00.000Z',
  name='my daily-bound offline code',
  is_offline_access_code=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
# Get the device.
device=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-1111-444444444444"
  }')

# Confirm that the device supports offline access codes.
if  $(jq -r '.device.can_program_offline_access_codes' <<< ${device}); then \
  # Create the daily-bound offline access code.
  # Make sure that the validity period matches
  # a user level for the device.
  curl -X 'POST' \
    'https://connect.getseam.com/access_codes/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"name\": \"my daily-bound offline code\",
      \"starts_at\": \"2024-09-16T00:00:00-07:00\",
      \"ends_at\": \"2024-09-18T23:59:00-07:00\",
      \"max_time_rounding\": \"1d\",
      \"is_offline_access_code\": true
  }";
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_ACCESS_CODE",
    "action_attempt_id": "11111111-2222-3333-4444-555555555555",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-888888888888",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "name": "my daily-bound offline code",
    "type": "time_bound",
    "starts_at": "2024-09-16T07:00:00.000Z",
    "ends_at": "2024-09-19T06:59:00.000Z",
    "is_offline_access_code": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
// Get the device.
const device = await seam.locks.get({
  device_id: "11111111-1111-1111-1111-444444444444"
});

// Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes) {
  // Create the daily-bound offline access code.
  await seam.accessCodes.create({
    device_id: device.device_id,
    name: "my daily-bound offline code",
    // Make sure that the validity period matches
    // a user level for the device.
    starts_at: "2024-09-16T00:00:00-07:00",
    ends_at: "2024-09-18T23:59:00-07:00",
    max_time_rounding: "1d",
    is_offline_access_code: true
  })
};
```

**Response:**

```json
{
  access_code_id: '11111111-1111-1111-1111-888888888888',
  device_id: '11111111-1111-1111-1111-444444444444',
  name: 'my daily-bound offline code',
  type: 'time_bound',
  starts_at: '2024-09-16T07:00:00.000Z',
  ends_at: '2024-09-19T06:59:00.000Z',
  is_offline_access_code: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Get the device.
device = client.locks.get(device_id: "11111111-1111-1111-1111-444444444444")

# Confirm that the device supports offline access codes.
if (device.can_program_offline_access_codes)
  # Create the daily-bound offline access code.
  client.access_codes.create(
    device_id: device.device_id,
    name: "my daily-bound offline code",
    # Make sure that the validity period matches
    # a user level for the device.
    starts_at: "2024-09-16T00:00:00-07:00",
    ends_at: "2024-09-18T23:59:00-07:00",
    max_time_rounding: "1d",
    is_offline_access_code: true
  )
end
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-888888888888"
  device_id="11111111-1111-1111-1111-444444444444"
  name="my daily-bound offline code"
  type="time_bound"
  starts_at=2024-09-16 07:00:00.00 UTC
  ends_at=2024-09-19 06:59:00.00 UTC
  is_offline_access_code: true
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the device.
$device = $seam->locks->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if ($device->can_program_offline_access_codes) {
  // Create the daily-bound offline access code.
  $seam->access_codes->create(
    device_id: $device->device_id,
    name: "my daily-bound offline code",
    // Make sure that the validity period matches
    // a user level for the device.
    starts_at: "2024-09-16T00:00:00-07:00",
    ends_at: "2024-09-18T23:59:00-07:00",
    max_time_rounding: "1d",
    is_offline_access_code: true
  );
}
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-888888888888",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my daily-bound offline code",
  "type": "time_bound",
  "starts_at": "2024-09-16T07:00:00.000Z",
  "ends_at": "2024-09-19T06:59:00.000Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Get the device.
Device device = seam.Locks.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that the device supports offline access codes.
if (device.CanProgramOfflineAccessCodes == true) {
  // Create the daily-bound offline access code.
  seam.AccessCodes.Create(
    deviceId: device.DeviceId,
    name: "my daily-bound offline code",
    // Make sure that the validity period matches
    // a user level for the device.
    startsAt: "2024-09-16T00:00:00-07:00",
    endsAt: "2024-09-18T23:59:00-07:00",
    maxTimeRounding: "1d",
    isOfflineAccessCode: true
  );
}
```

**Response:**

```
{
  "type": "time_bound",
  "access_code_id": "11111111-1111-1111-1111-888888888888",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my daily-bound offline code",
  "starts_at": "2024-09-16T07:00:00.000Z",
  "ends_at": "2024-09-19T06:59:00.000Z",
  "is_offline_access_code": true,
  ...
}
```
{% endtab %}



{% endtabs %}

#### 2. Verify Successful Time-Bound Code Registration

The [lifecycle of a time-bound access code](../../products/smart-locks/access-codes/lifecycle-of-access-codes.md) is marked by distinct phases:

1. `Unset`: When initially created on Seam, the offline access code remains in an `unset` state, indicating that it is not yet available for use on the lock due to a configured future activation time.
2. `Setting`: As the scheduled `starts_at` time approaches, Seam initiates the process of readying the code for use on the lock, transitioning the `status` of the offline code to `setting`.
3. `Set`: Upon successful programming, the status updates to `set`, signaling that the code is ready to grant the designated user the ability to unlock the door.

There are two methods to verify that an time-bound offline access code has been registered in the offline access code server that the device manufacturer maintains:

* **Polling**: Continuously query the access code until the `status` is updated. For instructions, see [Polling Method](../../capability-guides/smart-locks/access-codes/creating-access-codes/#polling-method-1).
* **Webhook**: Wait for updates to arrive using webhook requests from the Seam API. For instructions, see [Webhook Events Method](../../capability-guides/smart-locks/access-codes/creating-access-codes/#webhook-events-method-1).
