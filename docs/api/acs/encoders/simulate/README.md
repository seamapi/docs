# Encoders

## `acs_encoder`

### `acs_encoder_id`

Format: `ID`

ID of the `acs_encoder`.


---

### `acs_system_id`

Format: `ID`

ID of the access control system that contains the `acs_encoder`.


---

### `created_at`

Format: `Datetime`

Date and time at which the `acs_encoder` was created.


---

### `display_name`

Format: `String`

Display name for the `acs_encoder`.


---

### `errors`

Format: `List`

Errors associated with the `acs_encoder`.


---

### `workspace_id`

Format: `ID`

ID of the [workspace](../../../../core-concepts/workspaces/README.md) that contains the `acs_system`.


---

## Endpoints

### [`/acs/encoders/simulate/next_credential_encode_will_fail`](./next_credential_encode_will_fail.md)

Simulates that the next attempt to encode a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will fail. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).
### [`/acs/encoders/simulate/next_credential_encode_will_succeed`](./next_credential_encode_will_succeed.md)

Simulates that the next attempt to encode a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will succeed. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).
### [`/acs/encoders/simulate/next_credential_scan_will_fail`](./next_credential_scan_will_fail.md)

Simulates that the next attempt to scan a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will fail. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).
### [`/acs/encoders/simulate/next_credential_scan_will_succeed`](./next_credential_scan_will_succeed.md)

Simulates that the next attempt to scan a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will succeed. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).

## Events

### `acs_encoder.added`

An [ACS encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) was added.

<details>

<summary><code>acs_encoder_id</code> Format: <code>ID</code></summary>

ID of the [ACS encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

</details>

<details>

<summary><code>acs_system_id</code> Format: <code>ID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>event_id</code> Format: <code>ID</code></summary>

ID of the event.

</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.

</details>

<details>

<summary><code>workspace_id</code> Format: <code>ID</code></summary>

ID of the [workspace](../../../../core-concepts/workspaces/README.md).

</details>

---

### `acs_encoder.removed`

An [ACS encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) was removed.

<details>

<summary><code>acs_encoder_id</code> Format: <code>ID</code></summary>

ID of the [ACS encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

</details>

<details>

<summary><code>acs_system_id</code> Format: <code>ID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>event_id</code> Format: <code>ID</code></summary>

ID of the event.

</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.

</details>

<details>

<summary><code>workspace_id</code> Format: <code>ID</code></summary>

ID of the [workspace](../../../../core-concepts/workspaces/README.md).

</details>

---

