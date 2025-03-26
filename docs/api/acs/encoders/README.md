# Encoders

The Encoders route contains the following resources:

## The `acs_encoder` Resource

Represents a hardware device that encodes [credential](../../../capability-guides/access-systems/managing-credentials.md) data onto physical cards within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems). See also [Working with Card Encoders and Scanners](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

### Properties

### `acs_encoder_id`

Format: `UUID`

ID of the [encoder](https://docs.seam.co/latest/capability-guides/access-systems/working-with-card-encoders-and-scanners.

---

### `acs_system_id`

Format: `UUID`

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

---

### `created_at`

Format: `Datetime`

Date and time at which the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) was created.

---

### `display_name`

Format: `String`

Display name for the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

---

### `errors`

Format: `List`

Item format: `Object`

Errors associated with the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which Seam created the error.

</details>

<details>

<summary><code>error_code</code> Format: <code>String</code></summary>

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

</details>

<details>

<summary><code>message</code> Format: <code>String</code></summary>

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

---

### `workspace_id`

Format: `UUID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

---

## Endpoints

### [`/acs/encoders/encode_credential`](./encode_credential.md)

Encodes an existing [credential](../../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).
### [`/acs/encoders/list`](./list.md)

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).
### [`/acs/encoders/scan_credential`](./scan_credential.md)

Scans an encoded [acs_credential](../../../capability-guides/access-systems/managing-credentials.md) from a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

---

## Events

### `acs_encoder.added`

An [ACS encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) was added.

<details>

<summary><code>acs_encoder_id</code> Format: <code>UUID</code></summary>

ID of the [ACS encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

</details>

<details>

<summary><code>acs_system_id</code> Format: <code>UUID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).

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

<summary><code>event_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.

</details>

<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

### `acs_encoder.removed`

An [ACS encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) was removed.

<details>

<summary><code>acs_encoder_id</code> Format: <code>UUID</code></summary>

ID of the [ACS encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

</details>

<details>

<summary><code>acs_system_id</code> Format: <code>UUID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).

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

<summary><code>event_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.

</details>

<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

