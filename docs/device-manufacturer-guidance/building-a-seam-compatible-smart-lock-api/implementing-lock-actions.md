---
description: >-
  How to process lock and unlock requests and send events that confirm the final
  outcome.
---

# Implementing Lock Actions

Seam must be able to send lock and unlock commands and receive clear confirmation of what happened. Your API should execute commands quickly, return an immediate status, and emit events that describe how the action occurred.

#### Lock/unlock command request

Seam calls your API to initiate a lock or unlock operation.

`POST https://devicecloud.example.com/locks/<LOCK_ID>/actions`

```json
{
  "action": "unlock",
  "custom_id": "req_98aa221" // optional but recommended, allow custom ID to be included.
}
```

#### Expected synchronous response

Your API should return an immediate success or failure result indicating whether the command was accepted on your end.

```json
{
  "action_id": "act_23423",
  "custom_id": "req_98aa221",
  "status": "pending",
  "lock_id": "lock_491829",
  "action": "unlock"
}
```

If the command is rejected immediately due to a known condition:

```json
{
  "error_code": "DEVICE_OFFLINE",
  "message": "The device is currently offline and cannot accept commands."
}
```

***

### Action completion events

After the device processes the command, your platform should send an event confirming the final result.

#### Successful unlock event

```json
{
  "event_type": "lock.action_completed",
  "device_id": "lock_491829",
  "action_id": "act_39102",
  "custom_id": "req_39102",  // be able to trace the action to the event
  "action": "unlock",
  "status": "success",
  "performed_via": "pin_code",
  "timestamp": "2025-05-22T10:45:12Z"
}
```

#### Successful lock event

```json
{
  "event_type": "lock.action_completed",
  "device_id": "lock_491829",
  "action_id": "act_99921",
  "custom_id": "req_39102",  // be able to trace the action to the event
  "action": "lock",
  "status": "success",
  "performed_via": "mobile_app",
  "timestamp": "2025-05-22T10:50:31Z"
}
```

***

### Action attribution

Each event should specify how the operation was performed. This makes it possible to correlate user intent with actual device behavior.

Common values for `performed_via`:

* `pin_code`
* `mobile_app`
* `remote_api`
* `bluetooth_key`
* `fob_card`
* `manual_turn`

#### Example:

```json
{
  "performed_via": "fob_card"
}
```

***

### Failure modes

Your API should clearly represent lock failures when the device cannot complete the action.

#### Examples of device-side failures

* lock jammed
* bolt obstruction
* bolt not fully extended
* mechanism error
* firmware unable to accept commands

#### Failure event example

```json
{
  "event_type": "lock.action_completed",
  "device_id": "lock_491829",
  "action_id": "act_39102",
  "action": "unlock",
  "status": "failed",
  "error_code": "LOCK_JAMMED",
  "message": "The deadbolt could not retract.",
  "timestamp": "2025-05-22T10:46:02Z"
}
```

#### Synchronous error example

If the failure is detected immediately:

```json
{
  "error_code": "BOLT_OBSTRUCTED",
  "message": "The lock mechanism is obstructed."
}
```
