---
description: Learn how to lock and unlock a smart lock, and confirm the action's success.
---

# Lock and Unlock

## Overview

Seam allows you to remotely lock or unlock your door lock. This guide will walk you through how to do this with the API.

When you send a command to a smart lock, it might take a while for Seam to confirm the action's success. To handle this, Seam provides [an "action attempt" object](../../core-concepts/action-attempts.md), which indicates whether the action was successful.

To ensure that the action has been successfully executed, we advise checking the status of the action attempt object by polling the ["Get Action Attempt" request](../../api-clients/action-attempt/get-action-attempt.md). Once Seam has successfully confirmed the action, the action attempt's `status` will indicate `success`.

For those who prefer using webhooks to verify the success of an action, we'll soon introduce events that confirm an action's success.

***

## Before you begin

Be sure to confirm that your device has the capability to lock and unlock. You can inspect this by checking device's capabilities by looking for `lock` in the `capabilities_supported` list in [Get Device](../../api-clients/devices/get-device.md) or [List Devices](../../api-clients/devices/list-devices.md).&#x20;

**Example of Get Device Payload**

```javascript
{
    "device_id": "UUID-1"
    "capabilities_supported": [
        "lock", // Lock supports lock/unlock
        ...
    ],
    ...
}
```

***

## Locking a Door

You can lock a door using the [Lock](../../api-clients/locks/lock-a-lock.md) endpoint. To confirm the success of the action, refer to [the "Verifying a lock or unlock action's success" section](lock-and-unlock.md#verifying-a-lock-or-unlock-actions-success) below.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```
curl --request POST "https://connect.getseam.com/locks/lock_door" \
--header "Authorization: Bearer ${API_KEY}" \
--header "Content-Type: application/json" \
--header "Seam-Workspace: ${WORKSPACE_ID}" \
--data-raw "{
  \"device_id\": \"${DEVICE_ID}\"
 }"
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "00000000-0000-0000-0000-000000000000",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Unlocking a Door

You can lock a door using the [Unlock](../../api-clients/locks/unlock-a-lock.md) endpoint. To confirm the success of the action, refer to [the "Verifying a lock or unlock action's success" section](lock-and-unlock.md#verifying-a-lock-or-unlock-actions-success) below.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```
curl --request POST "https://connect.getseam.com/locks/unlock_door" \
--header "Authorization: Bearer ${API_KEY}" \
--header "Content-Type: application/json" \
--header "Seam-Workspace: ${WORKSPACE_ID}" \
--data-raw "{
  \"device_id\": \"${DEVICE_ID}\"
 }"
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UNLOCK_DOOR",
    "action_attempt_id": "00000000-0000-0000-0000-000000000000",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Python" %}
```python
seam.locks.unlock_door("august_device_1")
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.locks.unlockDoor("august_device_1")
```
{% endtab %}
{% endtabs %}

***

## Verifying the success of a lock or unlock action

### 1. Execute a "Lock" request (or other action)

When initiating a lock or unlock action, the Seam API returns an action attempt, which monitors the success or failure of the action.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```
curl --request POST "https://connect.getseam.com/locks/lock_door" \
--header "Authorization: Bearer ${API_KEY}" \
--header "Content-Type: application/json" \
--header "Seam-Workspace: ${WORKSPACE_ID}" \
--data-raw "{
  \"device_id\": \"${DEVICE_ID}\"
 }"
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "00000000-0000-0000-0000-000000000000",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

### 2. Poll the "Get Action Attempt" request to verify the action's success

Use the `action_attempt_id` from the prior response to make a [Get Action Attempt request](../../api-clients/action-attempt/get-action-attempt.md). When the action attempt's `status` changes to `success`, it indicates the action has been successful.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl --silent --request GET "https://connect.getseam.com/action_attempts/get" \
    --header "Authorization: Bearer ${API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Seam-Workspace: ${WORKSPACE_ID}" \
    --data-raw "{\"action_attempt_id\": \"$action_attempt_id\"}"
```

**Response:**

```
{
  "action_attempt": {
    "status": "success",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "00000000-0000-0000-0000-000000000000",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Checking the Locked status of a Lock

To retrieve the locked status of a specific door lock, use [the "Get Lock" endpoint](../../api-clients/locks/get-lock.md) by providing the `device_id` of the lock in question. This will return detailed information, including the current locked status.

{% tabs %}
{% tab title="Javascript" %}
```javascript
// Replace with
// const Seam = require("seamapi")
// if not using ES6 modules and/or TypeScript.
import Seam from "seamapi";

// Seam will automatically use the SEAM_API_KEY environment variable if you
// don't provide an apiKey to `new Seam()`
const seam = new Seam();

const {
  devices: [someLock],
} = await seam.locks.list();

console.log(someLock)

/*
{
  device_id: '087c535b-39a7-40cb-9633-ade3d58e5e0e',
  device_type: 'august_lock',
  capabilities_supported: [ 'access_code', 'lock' ],
  properties: {
    locked: true,       // LOCKED STATUS
    online: true,
    door_open: false,
    august_metadata: {
      lock_id: 'lock-1',
      lock_name: 'FRONT DOOR',
      house_name: 'My House'
    }
  },
  location: null,
  connected_account_id: '0c1ad2ce-7824-433c-bd85-90a32fdafb78',
  workspace_id: 'ab804f5a-7dd2-42c8-8d09-0beff4f795eb',
  created_at: '2022-02-16T06:58:50.643Z'
}
*/
```
{% endtab %}

{% tab title="Curl" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/locks/get' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000"
 }'
</code></pre>

**Response:**

```
{
  "lock": {
    "device_id": "00000000-0000-0000-0000-000000000000",
    "properties": {
      "locked": true,
      "online": true,
      "battery_level": 1,
      "name": "Door Lock",
      "battery": {
        "level": 1,
        "status": "full"
      },
      ...
    },
    ...
  },
  ...
}
```
{% endtab %}
{% endtabs %}

***

## Lock and Unlock Events

Whenever a lock is locked or unlocked, Seam will emit a `lock.locked` or `lock.unlocked` event. You can see these events by making a [List Events request](../../api-clients/events/list-events.md), or by setting up a webhook. For more information on how to set up webhooks, please refer to [our "Webhooks" guide](../../core-concepts/webhooks.md).

A lock or unlock event will look like the following:

```json
{
  "access_code_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "connected_account_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "created_at": "2023-01-09T18:54:32.737Z",
  "device_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "event_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "event_type": "lock.locked",
  "method": "keycode",
  "occurred_at": "2023-01-09T18:54:32.737Z",
  "workspace_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37"
}
```

For more information about the `lock.locked` and `lock.unlocked` attributes, please refer to[ the Events guide](../../api-clients/events/).
