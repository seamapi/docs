# Action Attempts

## The action_attempt Object

- [Properties](./#properties)
- [Events](./#events)


Represents an attempt to perform an action against a device.

---
## Properties

**`action_attempt_id`** *UUID*

ID of the action attempt.




---

**`status`** *Enum*

Status of the action attempt.


<details>
<summary>Enum values</summary>

- <code>pending</code>
- <code>success</code>
- <code>error</code>
</details>


---

**`action_type`** *Enum*

Type of the action attempt.


<details>
<summary>Enum values</summary>

- <code>LOCK_DOOR</code>
- <code>UNLOCK_DOOR</code>
- <code>SCAN_CREDENTIAL</code>
- <code>ENCODE_CREDENTIAL</code>
- <code>RESET_SANDBOX_WORKSPACE</code>
- <code>SET_FAN_MODE</code>
- <code>SET_HVAC_MODE</code>
- <code>ACTIVATE_CLIMATE_PRESET</code>
- <code>SIMULATE_KEYPAD_CODE_ENTRY</code>
- <code>SIMULATE_MANUAL_LOCK_VIA_KEYPAD</code>
- <code>PUSH_THERMOSTAT_PROGRAMS</code>
</details>


---

**`error`** *Object*

Error associated with the action attempt. Null for pending and successful action attempts.




---

**`result`** *Object*

Result of the action attempt. Null for pending and errored action attempts.




---


## Events

**`action_attempt.lock_door.succeeded`**

A lock door [action attempt](../../core-concepts/action-attempts.md) succeeded.

<details>

<summary>Properties</summary>

<strong><code>action_attempt_id</code></strong> <i>UUID</i>

  ID of the affected action attempt.

<strong><code>action_type</code></strong> <i>String</i>

  Type of the action.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `action_attempt.lock_door.succeeded`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>status</code></strong> <i>String</i>

  Status of the action.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`action_attempt.lock_door.failed`**

A lock door [action attempt](../../core-concepts/action-attempts.md) failed.

<details>

<summary>Properties</summary>

<strong><code>action_attempt_id</code></strong> <i>UUID</i>

  ID of the affected action attempt.

<strong><code>action_type</code></strong> <i>String</i>

  Type of the action.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `action_attempt.lock_door.failed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>status</code></strong> <i>String</i>

  Status of the action.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`action_attempt.unlock_door.succeeded`**

An unlock door [action attempt](../../core-concepts/action-attempts.md) succeeded.

<details>

<summary>Properties</summary>

<strong><code>action_attempt_id</code></strong> <i>UUID</i>

  ID of the affected action attempt.

<strong><code>action_type</code></strong> <i>String</i>

  Type of the action.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `action_attempt.unlock_door.succeeded`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>status</code></strong> <i>String</i>

  Status of the action.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`action_attempt.unlock_door.failed`**

An unlock door [action attempt](../../core-concepts/action-attempts.md) failed.

<details>

<summary>Properties</summary>

<strong><code>action_attempt_id</code></strong> <i>UUID</i>

  ID of the affected action attempt.

<strong><code>action_type</code></strong> <i>String</i>

  Type of the action.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `action_attempt.unlock_door.failed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>status</code></strong> <i>String</i>

  Status of the action.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/action_attempts/get`**](./get.md)

Returns a specified [action attempt](../../core-concepts/action-attempts.md).


[**`/action_attempts/list`**](./list.md)

Returns a list of the [action attempts](../../core-concepts/action-attempts.md) that you specify as an array of `action_attempt_id`s.


