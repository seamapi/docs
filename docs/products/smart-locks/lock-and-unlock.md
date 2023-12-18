---
description: Learn how to lock and unlock a smart lock, and confirm the action's success.
---

# Lock and Unlock

## Overview

Seam enables you to lock or unlock your door lock remotely. This guide walks you through how to perform these actions using the Seam API.

When you send a command to a smart lock, it might take a while for Seam to confirm the action's success. To handle this, Seam provides [an "action attempt" object](../../core-concepts/action-attempts.md), which indicates whether the action was successful.

To ensure that the action has been successfully executed, we advise checking the status of the action attempt object by polling the ["Get Action Attempt" request](../../api-clients/action-attempt/get-action-attempt.md). Once Seam has successfully confirmed the action, the action attempt's `status` will indicate `success`.

For those who prefer using webhooks to verify the success of an action, we'll soon introduce events that confirm an action's success.

***

## Before You Begin

Be sure to confirm that your device has the capability to lock and unlock. You can inspect this by checking the device's capabilities by looking for `lock` in the `enabled_capabilities` list in [Get Device](../../api-clients/devices/get-device.md) or [List Devices](../../api-clients/devices/list-devices.md) (or [Get Lock](../../api-clients/locks/get-lock.md) or [List Locks](../../api-clients/locks/list-locks.md)).&#x20;

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.locks.get(device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```
Device(device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
       .
       .
       .
       enabled_capabilities=[
              'lock', // Device supports lock and unlock actions.
              .
              .
              .
              ],
       .
       .
       .
       )
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/locks/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}'
```

**Response:**

```json
{
  "lock": {
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    .
    .
    .
    "enabled_capabilities": [
      "lock", // Device supports lock and unlock actions.
      .
      .
      .
    ],
    .
    .
    .
  },
  .
  .
  .
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.locks.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```json
{
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  .
  .
  .
  enabled_capabilities: [
    'lock', // Device supports lock and unlock actions.
    .
    .
    .
    ],
  .
  .
  .
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.locks.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
```

**Response:**

```
<Seam::Device:0x00438
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  .
  .
  .
  enabled_capabilities=[
    "lock", // Device supports lock and unlock actions.
    .
    .
    .
    ]
  .
  .
  .
  >
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$device = $seam->devices->get("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
echo json_encode($device->enabled_capabilities, JSON_PRETTY_PRINT);
```

**Response:**

```
[
    "lock", // Device supports lock and unlock actions.
    .
    .
    .
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var device = seam.Devices.Get("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
  Console.WriteLine("Device ID: " + device.DeviceId);
  Console.WriteLine("Capabilities:");
  foreach (var capability in device.CapabilitiesSupported)
  {
    Console.WriteLine(capability);
  }
```

**Response:**

```
Device ID: 6aae9d08-fed6-4ca5-8328-e36849ab48fe
Capabilities:
Lock // Device supports lock and unlock actions.
.
.
.
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
Device lock = seam.locks()
        .get(LocksGetRequest.builder()
                .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
                .build());
System.out.println(lock);
```

**Response:**

```json
{
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  .
  .
  .
  "enabled_capabilities" : [ 
    "lock", // Device supports lock and unlock actions.
    .
    .
    .
  ],
  .
  .
  .
}
```
{% endtab %}
{% endtabs %}

***

## Locking a Door

You can lock a door using the [Lock](../../api-clients/locks/lock-a-lock.md) endpoint. To confirm the success of the action, see [Verifying the success of a lock or unlock action](lock-and-unlock.md#verifying-the-success-of-a-lock-or-unlock-action).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.locks.lock_door(device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```
ActionAttempt(action_attempt_id='47f2ba20-a2e5-4f3d-9add-e5ac33a415a3',
              action_type='LOCK_DOOR',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>curl -X 'POST' \
</strong>  'https://connect.getseam.com/locks/lock_door' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}'
</code></pre>

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "092f16c1-37d3-4377-83a8-4da8b1ceffc9",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.locks.lockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '99537f1c-31c3-43ba-a981-3dd005615b0c',
    action_type: 'LOCK_DOOR',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.locks.lock_door("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="pending"
  action_type="LOCK_DOOR"
  action_attempt_id="f16b6775-7f74-4c06-ae88-ed30703cbb74"
  result=nil>
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var attempt = seam.Locks.LockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
Type t = attempt.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
}
```

**Response:**

```
Status: pending
ActionType: LOCK_DOOR
ActionAttemptId: 114c135a-e7f4-4f22-80f9-0fb879f20543
Result: 
Error: 
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ActionAttempt attempt = seam.locks()
        .lockDoor(LocksLockDoorRequest.builder()
                .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
                .build());
System.out.println(attempt.getPending());
```

**Response:**

```json
Optional[{
  "action_type" : "LOCK_DOOR",
  "action_attempt_id" : "47c1f198-66a6-4e5e-80a2-7846d218eca6",
  "status" : "pending"
}]
```
{% endtab %}
{% endtabs %}

***

## Unlocking a Door

You can lock a door using the [Unlock](../../api-clients/locks/unlock-a-lock.md) endpoint. To confirm the success of the action, see [Verifying the success of a lock or unlock action](lock-and-unlock.md#verifying-the-success-of-a-lock-or-unlock-action).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.locks.unlock_door(device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```
ActionAttempt(action_attempt_id='a34cf3e7-42ad-481a-9edf-80be46c5b9d4',
              action_type='UNLOCK_DOOR',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/locks/unlock_door' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UNLOCK_DOOR",
    "action_attempt_id": "1d7e1abd-923e-4b7e-9ea4-7ef6a005eab8",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.locks.unlockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: 'd70355b2-aa48-4069-88f1-6678c5ba6ec4',
    action_type: 'UNLOCK_DOOR',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.locks.unlock_door("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="pending"
  action_type="UNLOCK_DOOR"
  action_attempt_id="a79f5f99-ca57-4438-bf98-feab919808ba"
  result=nil>
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var attempt = seam.Locks.UnlockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
Type t = attempt.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
}
```

**Response:**

```
Status: pending
ActionType: UNLOCK_DOOR
ActionAttemptId: edfafcf9-81d1-4c08-aea6-ab1456f7ead2
Result: 
Error: 
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ActionAttempt attempt = seam.locks()
        .unlockDoor(LocksUnlockDoorRequest.builder()
                .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
                .build());
System.out.println(attempt.getPending());
```

**Response:**

```json
Optional[{
  "action_type" : "UNLOCK_DOOR",
  "action_attempt_id" : "0319bced-1216-4d44-b3f3-5ffb96bc118e",
  "status" : "pending"
}]
```
{% endtab %}
{% endtabs %}

***

## Verifying the Success of a Lock or Unlock Action

### 1. Execute a Lock request (or other action)

When initiating a lock or unlock action, the Seam API returns an action attempt, which monitors the success or failure of the action.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.locks.lock_door(device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```
ActionAttempt(action_attempt_id='47f2ba20-a2e5-4f3d-9add-e5ac33a415a3',
              action_type='LOCK_DOOR',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

<pre class="language-bash"><code class="lang-bash"><strong>curl -X 'POST' \
</strong>  'https://connect.getseam.com/locks/lock_door' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}'
</code></pre>

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "LOCK_DOOR",
    "action_attempt_id": "092f16c1-37d3-4377-83a8-4da8b1ceffc9",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.locks.lockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '99537f1c-31c3-43ba-a981-3dd005615b0c',
    action_type: 'LOCK_DOOR',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.locks.lock_door("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="pending"
  action_type="LOCK_DOOR"
  action_attempt_id="f16b6775-7f74-4c06-ae88-ed30703cbb74"
  result=nil>
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var attempt = seam.Locks.LockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
Type t = attempt.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
}
```

**Response:**

```
Status: pending
ActionType: LOCK_DOOR
ActionAttemptId: 114c135a-e7f4-4f22-80f9-0fb879f20543
Result: 
Error: 
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ActionAttempt attempt = seam.locks()
        .lockDoor(LocksLockDoorRequest.builder()
                .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
                .build());
System.out.println(attempt.getPending());
```

**Response:**

```json
Optional[{
  "action_type" : "LOCK_DOOR",
  "action_attempt_id" : "47c1f198-66a6-4e5e-80a2-7846d218eca6",
  "status" : "pending"
}]
```
{% endtab %}
{% endtabs %}

### 2. Poll the Action Attempt to Verify the Success of the Action

Use the `action_attempt_id` from the prior response to make a [Get Action Attempt request](../../api-clients/action-attempt/get-action-attempt.md). When the action attempt's `status` changes to `success`, it indicates the action has been successful.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.action_attempts.get(action_attempt="47f2ba20-a2e5-4f3d-9add-e5ac33a415a3"))
```

**Response:**

```
ActionAttempt(action_attempt_id='47f2ba20-a2e5-4f3d-9add-e5ac33a415a3',
              action_type='LOCK_DOOR',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/action_attempts/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "action_attempt_id": "092f16c1-37d3-4377-83a8-4da8b1ceffc9"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "success",
    "action_attempt_id": "092f16c1-37d3-4377-83a8-4da8b1ceffc9",
    "action_type": "LOCK_DOOR",
    "result": {},
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.actionAttempts.get("99537f1c-31c3-43ba-a981-3dd005615b0c"))
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '99537f1c-31c3-43ba-a981-3dd005615b0c',
  action_type: 'LOCK_DOOR',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.action_attempts.get("f16b6775-7f74-4c06-ae88-ed30703cbb74").inspect
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="success"
  action_attempt_id="f16b6775-7f74-4c06-ae88-ed30703cbb74"
  action_type="LOCK_DOOR"
  result={}>
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var attempt = seam.ActionAttempts.Get("114c135a-e7f4-4f22-80f9-0fb879f20543");
Type t = attempt.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
}
```

**Response:**

```
Status: success
ActionType: LOCK_DOOR
ActionAttemptId: 114c135a-e7f4-4f22-80f9-0fb879f20543
Result: {}
Error: 
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ActionAttempt attempt = seam.actionAttempts()
        .get(ActionAttemptsGetRequest.builder()
                .actionAttemptId("19eb6b25-51b5-4398-82e1-666bba616774")
                .build());
System.out.println(attempt.isSuccess());
```

**Response:**

```
true
```
{% endtab %}
{% endtabs %}

***

## Checking the Locked Status of a Lock

To retrieve the locked status of a specific door lock, use the ["Get Lock" endpoint](../../api-clients/locks/get-lock.md) (or ["Get Device" endpoint](../../api-clients/devices/get-device.md) for C#) by providing the `device_id` of the lock in question. This will return detailed information, including the current locked status.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.locks.get(device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```
Device(device_id='6aae9d08-fed6-4ca5-8328-e36849ab48fe',
       device_type='august_lock',
       location={'location_name': 'My House',
                 'timezone': 'America/Los_Angeles'},
       properties={
                   .
                   .
                   .
                   'locked': True,
                   .
                   .
                   .
                   },
       .
       .
       .
       )
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/locks/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
}'
```

**Response:**

```json
{
  "lock": {
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "device_type": "august_lock",
    "enabled_capabilities": [
      "access_code",
      "lock"
    ],
    "properties": {
      "locked": true,
      "online": true,
      "door_open": false,
      "manufacturer": "august",
      .
      .
      .
  },
  .
  .
  .
  "ok": true
}
```
{% endtab %}

{% tab title="Javascript" %}
**Request:**

```javascript
console.log(await seam.locks.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
```

**Response:**

```json
{
  device_id: '6aae9d08-fed6-4ca5-8328-e36849ab48fe',
  device_type: 'august_lock',
  enabled_capabilities: [ 'access_code', 'lock' ],
  properties: {
    locked: true,
    online: true,
    door_open: false,
    manufacturer: 'august',
    .
    .
    .
  },
  .
  .
  .
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.locks.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
```

**Response:**

```
<Seam::Device:0x00438
  device_id="6aae9d08-fed6-4ca5-8328-e36849ab48fe"
  device_type="august_lock"
  enabled_capabilities=["access_code", "lock"]
  properties={"locked"=>true, "online"=>true, "door_open"=>false, ...}
  .
  .
  .
  >
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var device = seam.Devices.Get("6aae9d08-fed6-4ca5-8328-e36849ab48fe");
Console.WriteLine("Device ID: " + device.DeviceId);
Console.WriteLine("Device Name: " + device.Properties.Name);
Console.WriteLine("Locked: " + device.Properties.Locked);
```

**Response:**

```
Device ID: 6aae9d08-fed6-4ca5-8328-e36849ab48fe
Device Name: FRONT DOOR
Locked: True
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
Device lock = seam.locks()
        .get(LocksGetRequest.builder()
                .deviceId("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
                .build());
System.out.println(lock);
```

**Response:**

```json
{
  "device_id" : "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
  "device_type" : "august_lock",
  "enabled_capabilities" : [ "access_code", "lock" ],
  "properties" : {
    .
    .
    .
    "locked" : true,
    .
    .
    .
  },
  .
  .
  .
}
```
{% endtab %}
{% endtabs %}

***

## Lock and Unlock Events

Whenever a lock is locked or unlocked, Seam emits a `lock.locked` or `lock.unlocked` event. You can see these events by making a [List Events request](../../api-clients/events/list-events.md) or by setting up a webhook. For more information on how to set up webhooks, see the [Webhooks guide](../../core-concepts/webhooks.md).

A lock or unlock event looks like the following:

```json
{
  "event": {
    "event_id": "fb81969c-cf9f-4566-918d-94f1563af2b7",
    "device_id": "6aae9d08-fed6-4ca5-8328-e36849ab48fe",
    "event_type": "lock.locked",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2023-10-13T15:10:18.443Z",
    "occurred_at": "2023-10-13T15:09:08.531Z",
    "method": "unknown",
    "connected_account_id": "f4140589-ef32-4086-a4c8-256b7b535d5a"
  },
  "ok": true
}
```

For more information about the `lock.locked` and `lock.unlocked` attributes, please refer to[ the Events guide](../../api-clients/events/).
