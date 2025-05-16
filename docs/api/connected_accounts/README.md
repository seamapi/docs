# Connected Accounts

## `connected_account`

### `account_type`

Format: `String`

---

### `account_type_display_name`

Format: `String`

---

### `automatically_manage_new_devices`

Format: `Boolean`

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

### [`errors`](./#errors-1)

Format: `List`

Item format: `Object`

The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>account_disconnected</code></summary>

Account is disconnected.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `account_disconnected`

---

**`is_bridge_error`**
Format: `Boolean`


---

**`is_connected_account_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>invalid_credentials</code></summary>

Credentials provided were invalid.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `invalid_credentials`

---

**`is_bridge_error`**
Format: `Boolean`


---

**`is_connected_account_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `bridge_disconnected`

---

**`is_bridge_error`**
Format: `Boolean`


---

**`is_connected_account_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `salto_ks_subscription_limit_exceeded`

---

**`is_bridge_error`**
Format: `Boolean`


---

**`is_connected_account_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


---

**`salto_ks_metadata`**
Format: `Object`


</details>

---

### `user_identifier`

Format: `Object`

<details>

<summary><code>api_url</code> Format: <code>String</code></summary>
</details>

<details>

<summary><code>email</code> Format: <code>String</code></summary>
</details>

<details>

<summary><code>exclusive</code> Format: <code>Boolean</code></summary>
</details>

<details>

<summary><code>phone</code> Format: <code>String</code></summary>
</details>

<details>

<summary><code>username</code> Format: <code>String</code></summary>
</details>

---

### [`warnings`](./#warnings-1)

Format: `List`

Item format: `Object`

The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>scheduled_maintenance_window</code></summary>

Scheduled downtime for account planned.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `scheduled_maintenance_window`

</details>
<details>
<summary><code>unknown_issue_with_connected_account</code></summary>

An unknown issue occurred while syncing the state of this connected account with the provider. This issue may affect the proper functioning of one or more resources in this account.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `unknown_issue_with_connected_account`

</details>
<details>
<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Please increase your subscription limit, or delete some users from your site to rectify this.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


---

**`salto_ks_metadata`**
Format: `Object`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `salto_ks_subscription_limit_almost_reached`

</details>

---

## Errors

### `account_disconnected`

Account is disconnected.

---

### `invalid_credentials`

Credentials provided were invalid.

---

### `bridge_disconnected`

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

### `salto_ks_subscription_limit_exceeded`

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

---

## Warnings

### `scheduled_maintenance_window`

Scheduled downtime for account planned.

---

### `unknown_issue_with_connected_account`

An unknown issue occurred while syncing the state of this connected account with the provider. This issue may affect the proper functioning of one or more resources in this account.

---

### `salto_ks_subscription_limit_almost_reached`

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Please increase your subscription limit, or delete some users from your site to rectify this.

---

## Endpoints


---

## Events

### `connected_account.connected`

A [connected account](../../core-concepts/connected-accounts/README.md) was connected for the first time or was reconnected after being disconnected.

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

Value: `connected_account.connected`
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

### `connected_account.created`

A [connected account](../../core-concepts/connected-accounts/README.md) was created.

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

Value: `connected_account.created`
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

### `connected_account.successful_login`

A [connected account](../../core-concepts/connected-accounts/README.md) had a successful login using a [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews).

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

Value: `connected_account.successful_login`
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

### `connected_account.disconnected`

A [connected account](../../core-concepts/connected-accounts/README.md) was disconnected.

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

Value: `connected_account.disconnected`
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

### `connected_account.completed_first_sync`

A [connected account](../../core-concepts/connected-accounts/README.md) completed the first sync with Seam, and the corresponding devices or systems are now available.

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

Value: `connected_account.completed_first_sync`
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

### `connected_account.deleted`

A [connected account](../../core-concepts/connected-accounts/README.md) was deleted.

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

Value: `connected_account.deleted`
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

### `connected_account.completed_first_sync_after_reconnection`

A [connected account](../../core-concepts/connected-accounts/README.md) completed the first sync after reconnection with Seam, and the corresponding devices or systems are now available.

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

Value: `connected_account.completed_first_sync_after_reconnection`
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

