---
description: >-
  Learn how to bullet proof your access code implementation with back up access
  codes.
---

# Backup access codes

A backup access code pool is a collection of pre-programmed access codes stored on a device, ready for use. These codes are programmed in addition to the regular access codes on Seam, serving as a safety net for any issues with the primary codes.

If there's ever a complication with a primary access code—be it due to intermittent connectivity, manual removal from a device, or provider outages—a backup code can be retrieved. Its end time can then be adjusted to align with the original code, facilitating seamless and uninterrupted access.

To bulletproof your implementation of access codes, it's essential to maintain a pool of backup access codes for each device. Seam provides a robust implementation of this backup pool system, and this article will help you learn how to use our backup access pool system.

***

## Before you begin

To confirm that Seam supports back up code pools for your device, check the device's `properties` by inspecting the response from [Get Device](../../../api-clients/devices/get-device.md) or [List Devices](../../../api-clients/devices/list-devices.md). Ensure that the device's `properties.supports_backup_access_code_pool` is `true`.

After you've done that, come back here and keep reading.

**Example Payload:**

```
{
    "device_id": "00000000-0000-0000-0000-000000000000",
    "properties": {
        "supports_backup_access_code_pool": true,
        ...
    },
    ...
}
```

{% tabs %}
{% tab title="Javascript" %}
```javascript
const device = await seam.devices.get({
  device_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74"
})

// log the device and look for supports_backup_access_code_pool
console.log(device.properties)

/*
{
  locked: false,
  online: true,
  manufacturer: 'nuki',
  battery_level: 0.86,
  nuki_metadata: {
    device_id: '545636389',
    device_name: 'Office Lock',
    keypad_battery_critical: false
  },
  keypad_battery: { level: 1 },
  supported_code_lengths: [ 6 ],
  has_native_entry_events: true,
  name: 'Office Lock',
  model: { display_name: 'Lock', manufacturer_display_name: 'Nuki' },
  battery: { level: 0.86, status: 'full' },
  image_url: 'https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png',
  image_alt_text: 'Nuki Smart Lock 3.0 Pro Black, Front',
  code_constraints: [
    { constraint_type: 'cannot_start_with_12' },
    { constraint_type: 'no_zeros' },
    { constraint_type: 'name_length', max_length: 20 }
  ],
  supports_backup_access_code_pool: true <====== HERE
}

*/
```
{% endtab %}

{% tab title="Python" %}
```python
device = seam.devices.get("ed4a1f62-9070-4379-8c46-ea30a99e4d74")
print(device.properties.supports_backup_access_code_pool)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
device = seam.devices.get("ed4a1f62-9070-4379-8c46-ea30a99e4d74")
puts device.properties.supports_backup_access_code_pool
```
{% endtab %}

{% tab title="PHP" %}
```php
$device = $seam->devices->get("ed4a1f62-9070-4379-8c46-ea30a99e4d74");
echo json_encode($device->properties->supports_backup_access_code_pool);
```
{% endtab %}

{% tab title="Curl" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/devices/get' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000"
 }'
</code></pre>

**Response:**

```json
{
    "device_id": "00000000-0000-0000-0000-000000000000",
    "properties": {
        "supports_backup_access_code_pool": true,
        ...
    },
    ...
}
```
{% endtab %}
{% endtabs %}

***

## Enabling and retrieving back up codes

### 1. Activate the Backup Access Code Pool

To activate the backup pool, set `use_backup_access_code_pool` to `true` when [creating an access code](../../../api-clients/access-codes/create-an-access-code.md). After activation, the backup access code pool cannot be turned off for that device. However, if you unmanage the device, any backup access codes will be removed.

This activation is a one-time process for each device. Once initiated, Seam will consistently maintain a backup code pool for that device. All access codes associated with the device will utilize the same backup code pool.

{% hint style="info" %}
In the smart lock app, backup access codes will appear as "Backup {CODE\_ID} (Seam)".
{% endhint %}

{% tabs %}
{% tab title="Javascript" %}
```javascript
const createdAccessCode = await seam.accessCodes.create({
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc",
  name: "my time-bound code",
  starts_at: new Date("2025-01-01T16:00:00Z").toISOString(),
  ends_at: new Date("2025-01-22T12:00:00Z").toISOString(),
  use_backup_access_code_pool: true,
  sync: true // use the sync flag to block until action completes
})

console.log(createdAccessCode)

/*
{
  access_code_id: '6fb09b64-11a6-4dcb-afa5-9f95d257f753',
  device_id: '55072d5d-9a4f-4cba-8de2-1782df307899',
  name: 'my time-bound code',
  appearance: null,
  code: '545364',
  common_code_key: null,
  type: 'time_bound',
  status: 'unset',
  starts_at: '2025-01-01T16:00:00.000Z',
  ends_at: '2025-01-22T12:00:00.000Z',
  pulled_backup_access_code_id: null,
  is_backup_access_code_available: true,
  created_at: '2023-08-29T05:38:15.699Z',
  errors: [],
  warnings: [],
  is_managed: true
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
# not implemented
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
access_code = seam.access_codes.create(
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc",
  name: "my time-bound code",
  starts_at: "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z",
  use_backup_access_code_pool: true
)

print(access_code)
```
{% endtab %}

{% tab title="PHP" %}
```php
$created_access_code = $seam->access_codes->create([
    "device_id" => "7a83ddc8-b9d9-4944-9457-46b31e654bdc",
    "name" => "my time-bound code",
    "starts_at" => "2025-01-01T16:00:00Z",
    "ends_at" => "2025-01-22T12:00:00Z",
    "use_backup_access_code_pool" => true
]);

echo $created_access_code;
```
{% endtab %}

{% tab title="Curl" %}
<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/create' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "name": "Use Backup Pool Access Code",
  "use_backup_access_code_pool": true,
  "starts_at": "2023-01-01T00:00:00Z",
  "end_at": "2023-01-03T00:00:00Z"
}'
</code></pre>
{% endtab %}
{% endtabs %}

### 2. Detect when an access code has failed to program

When you receive an `access_code.failed_to_set_on_device` event via your Webhook, or notice a `failed_to_set_on_device` error on the access code object, that means that the access code has failed to program.

You can retrieve a back up access code to use instead.

### 3. Confirm the availability of a backup access code

To confirm that a backup access code is available for retrieval, check the `is_backup_access_code_available` property on the access code by inspecting the response from [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) or [List Access Codes](../../../api-clients/access-codes/list-access-codes.md). If the backup code pool has been exhausted, this property will return `false`.

{% hint style="info" %}
Note that, we only support pull back up codes for `time_bound` codes at this time.
{% endhint %}

{% tabs %}
{% tab title="Javascript" %}
```javascript

const accessCode = await seam.accessCodes.get({
  access_code_id: "6fb09b64-11a6-4dcb-afa5-9f95d257f753"
})

console.log(accessCode.is_backup_access_code_available)
// true

// or console log the code and look for the is_backup_access_code_available key
console.log(accessCode)
/*
{
  access_code_id: '6fb09b64-11a6-4dcb-afa5-9f95d257f753',
  device_id: '55072d5d-9a4f-4cba-8de2-1782df307899',
  name: 'my time-bound code',
  appearance: null,
  code: '545364',
  common_code_key: null,
  type: 'time_bound',
  status: 'unset',
  starts_at: '2025-01-01T16:00:00.000Z',
  ends_at: '2025-01-22T12:00:00.000Z',
  pulled_backup_access_code_id: null,
  is_backup_access_code_available: true,
  created_at: '2023-08-29T05:38:15.699Z',
  errors: [],
  warnings: [],
  is_managed: true
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
# not implemented
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
access_code = client.access_codes.get("7a83ddc8-b9d9-4944-9457-46b31e654bdc")
puts access_code.is_backup_access_code_available
```
{% endtab %}

{% tab title="PHP" %}
```php
$access_code = $seam->access_codes->get('7a83ddc8-b9d9-4944-9457-46b31e654bdc');
print($access_code->is_backup_access_code_available);
```
{% endtab %}

{% tab title="Curl" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request GET 'https://connect.getseam.com/access_codes/get' \
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
    "is_backup_access_code_available": true,
    ...
  }
}
```
{% endtab %}
{% endtabs %}

### 4. Retrieve a back up access code

To retrieve a backup access code for an access code, include the `access_code_id` in the [Pull Backup Access Codes](../../../api-clients/access-codes/pull-backup-access-code.md) request. In the response, you'll receive the new back up access code. Be sure to share the new backup PIN code with the user of the original access code.

Upon executing this action, Seam will:

* Mark the backup access code as pulled (`"pulled": true`), meaning that it's been removed from the pool.
* Associate the backup access code with the original access code, ensuring that any future requests to the [Pull Backup Access Code](../../../api-clients/access-codes/pull-backup-access-code.md) request will return the same backup access code.
* Update the backup access code's `ends_at` date to match that of the original access code.
* Attempt to refill the backup access code pool with a new back up code.

{% tabs %}
{% tab title="Javascript" %}
```javascript
const accessCodeId = "6fb09b64-11a6-4dcb-afa5-9f95d257f753"

// pull the backup code for this access code
const backupAccessCode = await seam.accessCodes.pullBackupAccessCode({
    access_code_id: accessCodeId
})

console.log(backupAccessCode)
/*
{
  access_code_id: 'f38a32ae-dc36-461c-8c2e-48787ffd3f19',
  device_id: '55072d5d-9a4f-4cba-8de2-1782df307899',
  name: 'Backup f38a32ae-dc36-461c-8c2e-48787ffd3f19 (Seam)',
  appearance: { name: 'Backup f38a32ae-dc36' },
  code: '178645',
  common_code_key: null,
  type: 'time_bound',
  status: 'set',
  starts_at: '2023-08-29T05:41:30.672Z',
  ends_at: '2025-01-22T12:00:00.000Z',
  is_backup: true,
  is_backup_access_code_available: false,
  created_at: '2023-08-29T05:38:19.937Z',
  errors: [],
  warnings: [],
  is_managed: true
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
# not implemented
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
backup_access_code = seam.access_codes.pull_backup_access_code("7a83ddc8-b9d9-4944-9457-46b31e654bdc")

puts backup_access_code.code
```
{% endtab %}

{% tab title="PHP" %}
```php
$access_code_id = "7a83ddc8-b9d9-4944-9457-46b31e654bdc";
$backup_access_code = $seam->access_codes->pull_backup_access_code($access_code_id);

echo "Backup Access Code: ", $backup_access_code->code;
```
{% endtab %}

{% tab title="Curl" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/pull_backup_access_code' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_id": "00000000-0000-0000-0000-000000000000"
 }'
</code></pre>

**Response:**

```
{
  "backup_access_code": {
    "access_code_id": "00000000-0000-0000-0000-000000000000",
    "code": "1111",
    "pulled": true,
    ...
  }
}
```
{% endtab %}
{% endtabs %}

***

## Troubleshooting

When you have the backup access code pool feature enabled for a device, be on the lookout for the following warnings and errors on the device:

### Warning: `many_active_backup_codes`

Multiple back up codes have been pulled from the device. This usually indicates that Seam is having issues programming access codes onto the device. Check if the device is offline or if there are other issues.

### Warning: `partial_backup_access_code_pool`

Seam is having trouble refilling the back up access code pool. This could result from device connection issues or from the device running out of space for new codes.

### Error: `empty_backup_access_code_pool`

There are no more back up codes available in the pool. This can happen when you've just enabled the back up pool feature, or when all of the backup access codes have been used.

***

## Supported Brands

All door locks with the `access_code` capability are expected to support this feature, with the exception of Lockly and Salto locks.
