---
description: >-
  How to structure your device schema and expose the endpoints Seam uses to list
  and sync a user’s locks.
---

# Implementing your Device Model & Discovery

A clean, predictable device model helps Seam present accurate information to end users and orchestrate smart-lock behavior across hospitality, multifamily, STR, and coworking environments. The fields listed below form the baseline for a Seam-compatible integration.

***

### Device Object Schema

Your API should expose a device resource with a stable, predictable structure. This lets Seam identify devices, correlate events, and display meaningful details to the user.

A typical device object includes:

* `device_id`: unique, stable identifier
* `device_type`: smart\_lock, hub, or bridge
* `device_model`: hardware model identifier
* `online`: whether your cloud can reach the device
* `battery_level`: percentage 0–100
* `signal_quality`: optional, recommended
* `location`: latitude/longitude if available
* `timezone`: IANA timezone string
* `bridge_id`: parent hub/bridge if applicable
* `lock_state`: locked, unlocked, or unknown
* `door_state`: open, closed, or ajar (if supported)

#### Device example

```json
{
  "device_id": "lock_491829",
  "device_type": "smart_lock",
  "device_model": "LockPro X200",
  "online": true,
  "battery_level": 72,
  "signal_quality": -68,
  "location": { "latitude": 37.7859, "longitude": -122.4011 },
  "timezone": "America/Los_Angeles",
  "bridge_id": "bridge_99211",
  "lock_state": "locked",
  "door_state": "closed",
  "device_time": "2025-05-22T10:35:12Z",
  "updated_at": "2025-05-22T10:35:12Z"
}
```

***

### Listing door locks

After a lock owner logs in through OAuth, Seam lists all locks associated with their account so the user can select which devices to connect. Your API should return a JSON list of all accessible locks.

#### List All Locks Example

`GET https://devicecloud.example.com/locks`

```json
{
  "locks": [
    {
      "lock_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
      "name": "Office Front Door",
      "model": "example_model",
      "address": "123 Amy Lane, CA, 94110, United States"
    },
    {
      "lock_id": "1c33d4cf-e178-4c06-8a9a-aadd6dc5a804",
      "name": "Back Door",
      "model": "example_model",
      "address": "999 Louis Lane, CA, 94110, United States"
    }
  ]
}
```

***

### Getting a single lock

Seam may request information about a specific lock to display full details or perform deeper synchronization.

#### Get a Lock Example

`GET https://devicecloud.example.com/locks/<LOCK_ID>`

```json
{
  "lock_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
  "name": "Office Front Door",
  "model": "example_model",
  "address": "123 Amy Lane, CA, 94110, United States"
}
```

***

### Connectivity reporting

To keep device state fresh, your platform should send webhook events whenever connectivity changes.

* Send an event when the device goes offline
* Send another when it comes back online
* Report hub or bridge status separately

#### Online event example

```
{
  "event_type": "device.online",
  "device_id": "lock_491829",
  "timestamp": "2025-05-22T10:48:18Z"
}
```

#### Offline event example

```
{
  "event_type": "device.offline",
  "device_id": "lock_491829",
  "timestamp": "2025-05-22T10:45:01Z"
}
```

***

### Power & battery reporting



Your API should report battery percentage and emit events when power levels change.

#### Battery level example

```
{
  "battery_level": 72
}
```

#### Low-battery event

```
{
  "event_type": "battery.low",
  "device_id": "lock_491829",
  "battery_level": 15,
  "timestamp": "2025-05-22T11:02:44Z"
}
```

#### Battery replaced / charged

```
{
  "event_type": "battery.replaced",
  "device_id": "lock_491829",
  "battery_level": 100,
  "timestamp": "2025-05-22T12:10:15Z"
}
```

***

### Time & timezone reporting

Accurate time lets Seam validate access-code schedules and align audit logs. Accurate timezone data is especially important during daylight-savings transitions.

#### Required fields

* `device_time`: the current time reported by the device
* `timezone`: an IANA timezone string

#### Device-time example

```
{
  "created_at": "2025-05-22T10:30:12Z",
  "device_time": "2025-05-22T10:31:47Z",
  "timezone": "America/Los_Angeles",
  "device_model": "LockPro X200"
}
```

Seam compares `device_time` with server time to detect clock drift and identify devices that may evaluate schedules incorrectly.

#### Guidance for manufacturers

If scheduling is evaluated on-device, the reported device time and timezone must be kept accurate and updated reliably.

***

***

