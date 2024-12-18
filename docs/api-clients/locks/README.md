---
description: Devices that are able to be locked and unlocked.
---

# Locks

### List of Methods

<table data-header-hidden><thead><tr><th width="250"></th><th></th></tr></thead><tbody><tr><td><a href="lock_door.md">Lock a Lock</a></td><td>Lock a Lock</td></tr><tr><td><a href="unlock_door.md">Unlock a Lock</a></td><td>Unlock a Lock</td></tr><tr><td><a href="list.md">List Locks</a></td><td>List Locks</td></tr></tbody></table>

### Events

#### `lock.locked`

A door lock has been locked.

<details>

<summary><code>method</code> <code>enum</code></summary>

Present on `lock.locked` and `lock.unlocked` events. Specifies the method used to perform the [lock](../../products/smart-locks/lock-and-unlock#locking-a-door) or [unlock](../../products/smart-locks/lock-and-unlock#unlocking-a-door) action.

Supported values for `lock.unlocked`:
- `keycode`
- `manual`
- `unknown`
- `seamapi`

Supported values for `lock.locked`:
- `keycode`
- `manual`
- `unknown`
- `seamapi`
- `automatic` (for [Kwikset](./../device-and-system-integration-guides/kwikset-locks) and [igloohome](../../device-and-system-integration-guides/igloohome-locks) only)
</details>

<details>

<summary><code>access_code_id</code> <code>string</code></summary>

Specifies the unique identifier of the access code used to trigger this event. Seam includes this ID in the event if the affected device returns this information.
For a list of device manufacturers that send the `access_code_id` in lock events, see [Linking Unlock Events and Access Codes](../../capability-guides/smart-locks/access-codes#linking-unlock-events-and-access-codes).
</details>

#### `lock.unlocked`

A door lock has been unlocked.

<details>

<summary><code>method</code> <code>enum</code></summary>

Present on `lock.locked` and `lock.unlocked` events. Specifies the method used to perform the [lock](../../products/smart-locks/lock-and-unlock#locking-a-door) or [unlock](../../products/smart-locks/lock-and-unlock#unlocking-a-door) action.

Supported values for `lock.unlocked`:
- `keycode`
- `manual`
- `unknown`
- `seamapi`

Supported values for `lock.locked`:
- `keycode`
- `manual`
- `unknown`
- `seamapi`
- `automatic` (for [Kwikset](./../device-and-system-integration-guides/kwikset-locks) and [igloohome](../../device-and-system-integration-guides/igloohome-locks) only)
</details>

<details>

<summary><code>access_code_id</code> <code>string</code></summary>

Specifies the unique identifier of the access code used to trigger this event. Seam includes this ID in the event if the affected device returns this information.
For a list of device manufacturers that send the `access_code_id` in lock events, see [Linking Unlock Events and Access Codes](../../capability-guides/smart-locks/access-codes#linking-unlock-events-and-access-codes).
</details>

#### `lock.access_denied`

An incorrect access code was entered one or more times in a row on a device ([Kwikset](./../device-and-system-integration-guides/kwikset-locks) and [igloohome](../../device-and-system-integration-guides/igloohome-locks) only).

<details>

<summary><code>access_code_id</code> <code>string</code></summary>

Specifies the unique identifier of the access code used to trigger this event. Seam includes this ID in the event if the affected device returns this information.
For a list of device manufacturers that send the `access_code_id` in lock events, see [Linking Unlock Events and Access Codes](../../capability-guides/smart-locks/access-codes#linking-unlock-events-and-access-codes).
</details>
