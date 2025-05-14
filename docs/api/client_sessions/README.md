# Client Sessions

## `client_session`

### `client_session_id`

Format: `UUID`

---

### `connect_webview_ids`

Format: `List`

Item format: `UUID`

---

### `connected_account_ids`

Format: `List`

Item format: `UUID`

---

### `created_at`

Format: `Datetime`

---

### `device_count`

Format: `Number`

---

### `expires_at`

Format: `Datetime`

---

### `token`

Format: `String`

---

### `user_identifier_key`

Format: `String`

---

### `user_identity_ids`

Format: `List`

Item format: `UUID`

---

### `workspace_id`

Format: `UUID`

---

## Endpoints


---

## Events

### `client_session.deleted`

A [client session](../../core-concepts/authentication/client-session-tokens/README.md) was deleted.

<details>

<summary><code>client_session_id</code> Format: <code>UUID</code></summary>

ID of the [client session](../../core-concepts/authentication/client-session-tokens/README.md).
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

Value: `client_session.deleted`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

