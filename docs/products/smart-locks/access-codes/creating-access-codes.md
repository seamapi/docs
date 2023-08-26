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

## Before you begin

To confirm that Seam supports code programming for your device, check the device's `properties` by inspecting the response from [Get Device](../../../api-clients/devices/get-device.md) or [List Devices](../../../api-clients/devices/list-devices.md). Ensure that `capabilities_supported` list includes `access_code`.

After you've done that, come back here and keep reading.

**Example Payload:**

```
{
    "device_id": "00000000-0000-0000-0000-000000000000",
    "capabilities_supported": [
        "access_code",
        ...
    ],
    ...
}
```

***

## Programming an ongoing code

### 1. Create a ongoing access code

To set an ongoing code, simply provide the `device_id` of the smart lock you wish to program when [creating an access code](../../../api-clients/access-codes/create-an-access-code.md). You have the option to assign a `name` to the access code for easier identification within the [Seam Console](https://console.seam.co) and smart lock app. You may also include a `starts_at` value to specify when you'd like the code to become active.

If you'd like to customize the PIN code, specify your desired PIN in the `code` property. Refer to [our guide on access code requirements](access-code-requirements-for-door-locks.md) to understand any requirements specific to the door lock.

{% tabs %}
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

### 2. Verify that the ongoing code has been programmed onto the door lock

Seam might encounter some problems when setting an access code onto the lock. This could be due to weak internet connectivity, a low battery in the door lock, or someone unplugging the bridge that links the lock to the internet. **Give these potential challenges, it's essential to verify that a code has been successfully programmed on to the lock** to prevent unexpected complications later.

There are two methods to verify that an ongoing access code has been set on the device:

**Polling Method**

Utilize the `access_code_id` returned in the response from the create endpoint to invoke the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) endpoint. A basic implementation would involve polling this endpoint until the `status` of the access code updates to `set`.

If the `status` remains `setting` for a very long time,  or if the `access_code` object contains any `warnings` or `errors` properties, consult [our guide on "Troubleshooting Access Code Issues"](troubleshooting-access-code-issues.md) for further guidance.

**Webhook Events Method**

Monitor the incoming events on your webhook. Be on the lookout for the `access_code.set_on_device` event, which indicates the successful setting of the access code on the device.

However, if you receive `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events, it's crucial to refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance.



***

## Scheduling Time-Bound Access Codes

### 1. Create a time-bound access code

To set a time-bound code, simply provide the `device_id` of the smart lock you wish to program, along with the `starts_at` and `ends_at` times to define the code's active duration. For more details, refer to the [Create Access Code endpoint](../../../api-clients/access-codes/create-an-access-code.md).

Optionally, you can assign a `name` to the access code. A clear name helps users identify the access code quickly within their smart lock app.

If you'd like to customize the PIN code, specify your desired PIN in the `code` property. Refer to [our guide on access code requirements](access-code-requirements-for-door-locks.md) to understand any requirements specific to the door lock.

{% tabs %}
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

### 2. Verify that a time-bound code has been programmed onto the door lock

The [lifecycle of a time-bound access code](lifecycle-of-access-codes.md) is marked by distinct phases:

1. When initially created on Seam, the access code remains in an `unset` state, indicating it has not yet been programmed onto the door lock due to its future activation time.
2. As the scheduled `starts_at` time approaches, Seam initiates the process of programming the code onto the lock, transitioning the code's `status` to `setting`.
3. Upon successful programming, the status updates to `set`, signaling that the code is loaded onto the lock, and may grant the designated user the ability to unlock the door.

On door locks that support [natively scheduled](./#native-scheduling) access codes, Seam will preload the access code onto the device **72 hours ahead** of the `starts_at` time. You will notice that the access code will remain in an `unset` state ahead of the `starts_at` time, but will await the precise activation moment. When the `starts_at` time arrives, the access code becomes active and transition to a `set` status, granting the designated user the ability to utilize it for entry. However, if there's an issue programming the natively-scheduled code by its `starts_at` time, the code's status will display as `setting`. For more information on the lifecycle of access codes, [please refer to this guide](lifecycle-of-access-codes.md).

There are two methods to verify that a time-bound access code has been set on the device:

**Polling Method**

Use the `access_code_id` provided in the response from the create endpoint to call the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) endpoint. In a basic implementation, you would poll this endpoint at the `starts_at` time to check if the access code's status is updated to `set`.

If the `status` remains `setting`, or if the `access_code` object displays any `warnings` or `errors`, refer to [our "Troubleshooting Access Code Issues" guide](troubleshooting-access-code-issues.md) for assistance.

**Webhook Events Method**

Monitor the incoming events on your webhook. Be on the lookout for the `access_code.set_on_device` event, which indicates the successful setting of the access code on the device.

However, if you receive `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events, it's crucial to refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance.



