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

***

## Enabling and retrieving back up codes

### 1. Activate the Backup Access Code Pool

To activate the backup pool, set `use_backup_access_code_pool` to `true` when [creating an access code](../../../api-clients/access-codes/create-an-access-code.md). After activation, the backup access code pool cannot be turned off for that device. However, if you unmanage the device, any backup access codes will be removed.

This activation is a one-time process for each device. Once initiated, Seam will consistently maintain a backup code pool for that device. All access codes associated with the device will utilize the same backup code pool.

{% hint style="info" %}
In the smart lock app, backup access codes will appear as "Backup {CODE\_ID} (Seam)".
{% endhint %}

{% tabs %}
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

* Mark the backup access code as pulled (`"pulled": true`), meaning that it's been removed from the pool.&#x20;
* Associate the backup access code with the original access code, ensuring that any future requests to the [Pull Backup Access Code](../../../api-clients/access-codes/pull-backup-access-code.md) request will return the same backup access code.
* Update the backup access code's `ends_at` date to match that of the original access code.
* Attempt to refill the backup access code pool with a new back up code.

{% tabs %}
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
