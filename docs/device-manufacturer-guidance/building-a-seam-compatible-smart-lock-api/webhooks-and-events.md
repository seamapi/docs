# Webhooks & Events

How to send real-time device updates to Seam through a single webhook endpoint. Seam uses webhook events to keep device state accurate without polling and to correlate lock actions, access-code changes, and connectivity updates.

***

## Webhook registration

Seam registers one webhook URL per environment (production, staging, or development).

Your API should deliver all events to the provided URL.

Correct behavior:

* one webhook URL per Seam environment
* no per-user or per-account webhook registration
* Seam maps each incoming event to the correct connected account internally

Your API should allow Seam to register this URL and specify which event types it wants to receive.

#### Webhook registration request

`POST https://devicecloud.example.com/webhooks`

```json
{
  "url": "https://webhooks.seam.co/provider_events",
  "events": [
    "device.added",
    "device.removed",
    "device.online",
    "device.offline",
    "device.low_battery",
    "lock.action_completed",
    "access_code.created",
    "access_code.updated",
    "access_code.deleted",
    "access_code.used",
    "access_code.incorrect_attempt"
  ]
}
```

#### Webhook registration response

```json
{
  "webhook_id": "wh_11828",
  "status": "active"
}
```

***

## Event Delivery

Your API should POST events to the registered webhook URL as they occur.

#### Example delivery

`POST https://webhooks.seam.co/provider_events`

```json
{
  "event_type": "device.online",
  "device_id": "lock_491829",
  "timestamp": "2025-05-22T10:48:18Z"
}
```

A 2xx response means the event was accepted.

### Retry behavior

Your API should retry event delivery when Seam returns a non-2xx status.

#### Recommended approach

* Exponential backoff
* Retries for at least 24 hours
* Payload unchanged
* Maintain chronological order when possible

***

## Event Examples

### Device connectivity events

#### Device online

```json
{
  "event_type": "device.online",
  "device_id": "lock_491829",
  "timestamp": "2025-05-22T10:48:18Z"
}
```

#### Device offline

```json
{
  "event_type": "device.offline",
  "device_id": "lock_491829",
  "timestamp": "2025-05-22T10:45:01Z"
}
```

#### Bridge or hub offline

```json
{
  "event_type": "bridge.offline",
  "bridge_id": "bridge_99211",
  "timestamp": "2025-05-22T10:45:01Z"
}
```

#### Device time is wrong

```json
{
  "event_type": "device.time_wrong",
  "device_id": "lock_491829",
  "timestamp": "2025-05-22T10:45:01Z"
}
```

***

### Lock action events

#### Successful action

```json
{
  "event_type": "lock.action_completed",
  "device_id": "lock_491829",
  "action_id": "act_39102",
  "action": "unlock",
  "status": "success",
  "performed_via": "pin_code",
  "timestamp": "2025-05-22T10:45:12Z"
}
```

#### Failed action

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

***

### Access code lifecycle events

#### Code created

```json
{
  "event_type": "access_code.created",
  "device_id": "lock_491829",
  "access_code_id": "ac_55301",
  "code": "4829",
  "status": "success",
  "starts_at": "2025-05-22T15:00:00Z",
  "ends_at": "2025-05-25T11:00:00Z",
  "timestamp": "2025-05-22T14:59:12Z"
}
```

#### Code updated

```json
{
  "event_type": "access_code.updated",
  "access_code_id": "ac_55301",
  "status": "success",
  "timestamp": "2025-05-22T16:01:12Z"
}
```

#### Code deleted

```json
{
  "event_type": "access_code.deleted",
  "access_code_id": "ac_55301",
  "status": "success",
  "timestamp": "2025-05-25T11:02:44Z"
}
```

***

### Access code usage events

#### Successful usage

```json
{
  "event_type": "access_code.used",
  "device_id": "lock_491829",
  "access_code_id": "ac_55301",
  "timestamp": "2025-05-23T08:15:32Z"
}
```

#### Incorrect PIN attempt

```json
{
  "event_type": "access_code.incorrect_attempt",
  "device_id": "lock_491829",
  "timestamp": "2025-05-23T08:16:02Z"
}
```

***

## Event format consistency

All events should follow a standard shape:

```json
{
  "event_type": "string",
  "device_id": "string or null",
  "timestamp": "ISO-8601 timestamp",
  "data": { }
}
```

***
