# Connect Webviews

## `connect_webview`

### `accepted_devices`

{% hint style="warning" %}
**Deprecated**. Unused. Will be removed.
{% endhint %}

Format: `List`

Item format: `String`

---

### `accepted_providers`

Format: `List`

Item format: `String`

---

### `any_device_allowed`

{% hint style="warning" %}
**Deprecated**. Unused. Will be removed.
{% endhint %}

Format: `Boolean`

---

### `any_provider_allowed`

Format: `Boolean`

---

### `authorized_at`

Format: `Datetime`

---

### `automatically_manage_new_devices`

Format: `Boolean`

---

### `connect_webview_id`

Format: `UUID`

---

### `connected_account_id`

Format: `UUID`

---

### `created_at`

Format: `Datetime`

---

### `custom_metadata`

Format: `Record`

---

### `custom_redirect_failure_url`

Format: `String`

---

### `custom_redirect_url`

Format: `String`

---

### `device_selection_mode`

Format: `Enum`

Possible enum values:
- `none`
- `single`
- `multiple`

---

### `login_successful`

Format: `Boolean`

---

### `selected_provider`

Format: `String`

---

### `status`

Format: `Enum`

Possible enum values:
- `pending`
- `failed`
- `authorized`

---

### `url`

Format: `String`

---

### `wait_for_device_creation`

Format: `Boolean`

---

### `workspace_id`

Format: `UUID`

---

## Endpoints


---

## Events

### `connect_webview.login_succeeded`

A [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) login succeeded.

<details>

<summary><code>connect_webview_id</code> Format: <code>UUID</code></summary>

ID of the [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
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

Value: `connect_webview.login_succeeded`
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

### `connect_webview.login_failed`

A [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) login failed.

<details>

<summary><code>connect_webview_id</code> Format: <code>UUID</code></summary>

ID of the [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews).
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

Value: `connect_webview.login_failed`
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

