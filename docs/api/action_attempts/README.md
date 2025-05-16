# Action Attempts

## `action_attempt`

Represents an attempt to perform an action against a device.

### `action_attempt_id`

Format: `UUID`

ID of the action attempt.

---

### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

### `action_type`

Format: `String`

Type of the action attempt.

Possible enum values:
- `LOCK_DOOR`
- `UNLOCK_DOOR`
- `SCAN_CREDENTIAL`
- `ENCODE_ACCESS_METHOD`
- `ENCODE_CREDENTIAL`
- `RESET_SANDBOX_WORKSPACE`
- `SET_FAN_MODE`
- `SET_HVAC_MODE`
- `ACTIVATE_CLIMATE_PRESET`
- `SIMULATE_KEYPAD_CODE_ENTRY`
- `SIMULATE_MANUAL_LOCK_VIA_KEYPAD`
- `PUSH_THERMOSTAT_PROGRAMS`
- `SYNC_ACCESS_CODES`
- `CREATE_ACCESS_CODE`
- `DELETE_ACCESS_CODE`
- `UPDATE_ACCESS_CODE`
- `CREATE_NOISE_THRESHOLD`
- `DELETE_NOISE_THRESHOLD`
- `UPDATE_NOISE_THRESHOLD`

---

### `error`

Format: `Object`

Errors associated with the action attempt. Null for pending action attempts.

---

### `result`

Format: `Object`

Result of the action attempt. Null for pending action attempts.

---

## Endpoints


---

## Events

### `action_attempt.lock_door.succeeded`

A lock door [action attempt](../../core-concepts/action-attempts.md) succeeded.

<details>

<summary><code>action_attempt_id</code> Format: <code>UUID</code></summary>

ID of the [action attempt](../../core-concepts/action-attempts.md).
</details>
<details>

<summary><code>action_type</code> Format: <code>String</code></summary>

Type of action.
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `action_attempt.lock_door.succeeded`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>status</code> Format: <code>String</code></summary>

Status of the action.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `action_attempt.lock_door.failed`

A lock door [action attempt](../../core-concepts/action-attempts.md) failed.

<details>

<summary><code>action_attempt_id</code> Format: <code>UUID</code></summary>

ID of the [action attempt](../../core-concepts/action-attempts.md).
</details>
<details>

<summary><code>action_type</code> Format: <code>String</code></summary>

Type of action.
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `action_attempt.lock_door.failed`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>status</code> Format: <code>String</code></summary>

Status of the action.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `action_attempt.unlock_door.succeeded`

An unlock door [action attempt](../../core-concepts/action-attempts.md) succeeded.

<details>

<summary><code>action_attempt_id</code> Format: <code>UUID</code></summary>

ID of the [action attempt](../../core-concepts/action-attempts.md).
</details>
<details>

<summary><code>action_type</code> Format: <code>String</code></summary>

Type of action.
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `action_attempt.unlock_door.succeeded`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>status</code> Format: <code>String</code></summary>

Status of the action.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `action_attempt.unlock_door.failed`

An unlock door [action attempt](../../core-concepts/action-attempts.md) failed.

<details>

<summary><code>action_attempt_id</code> Format: <code>UUID</code></summary>

ID of the [action attempt](../../core-concepts/action-attempts.md).
</details>
<details>

<summary><code>action_type</code> Format: <code>String</code></summary>

Type of action.
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `action_attempt.unlock_door.failed`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>status</code> Format: <code>String</code></summary>

Status of the action.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

