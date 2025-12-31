# Connected Accounts

## The connected_account Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [connected account](../../core-concepts/connected-accounts/README.md). A connected account is an external third-party account to which your user has authorized Seam to get access, for example, an August account with a list of door locks.

{% tabs %}
{% tab title="Connected Account" %}

A connected account resource.

```json
{
  "account_type": "salto_space",
  "account_type_display_name": "Salto Space",
  "display_name": "j**n@example.com",
  "automatically_manage_new_devices": true,
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at": "2025-06-15T16:54:17.946329Z",
  "custom_metadata": { "id": "internalId1" },
  "errors": [],
  "user_identifier": {
    "api_url": "https://example.com/api",
    "email": "jane_doe@example.com",
    "exclusive": true,
    "phone": "+1555551004",
    "username": "jane_doe"
  },
  "warnings": [],
  "accepted_capabilities": ["lock"]
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`accepted_capabilities`** *List* *of Enums*

List of capabilities that were accepted during the account connection process.




---

**`account_type`** *String*

Type of connected account.




---

**`account_type_display_name`** *String*

Display name for the connected account type.




---

**`automatically_manage_new_devices`** *Boolean*

Indicates whether Seam should [import all new devices](../../core-concepts/connect-webviews/customizing-connect-webviews.md#automatically_manage_new_devices) for the connected account to make these devices available for management by the Seam API.




---

**`connected_account_id`** *UUID*

ID of the connected account.




---

**`created_at`** *Datetime*

Date and time at which the connected account was created.




---

**`custom_metadata`** *Record*

Set of key:value pairs. Adding custom metadata to a resource, such as a [Connect Webview](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), [connected account](../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md), or [device](../../core-concepts/devices/adding-custom-metadata-to-a-device.md), enables you to store custom information, like customer details or internal IDs from your application.




---

**`customer_key`** *String*

Your unique key for the customer associated with this connected account.




---

**`display_name`** *String*

Display name for the connected account.




---

[**`errors`**](./#errors) *List* *of Objects*

Errors associated with the connected account.




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>account_disconnected</code></summary>

Indicates that the account is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>account_disconnected</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  Indicates whether the error is related to [Seam Bridge](../../capability-guides/seam-bridge.md).
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates whether the error is related specifically to the connected account.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>bridge_disconnected</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  Indicates whether the error is related to [Seam Bridge](../../capability-guides/seam-bridge.md).
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates whether the error is related specifically to the connected account.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_exceeded</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  Indicates whether the error is related to [Seam Bridge](../../capability-guides/seam-bridge.md).
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates whether the error is related specifically to the connected account.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`salto_ks_metadata`** *Object*
  
  
  Salto KS metadata associated with the connected account that has an error.
  
  Child Properties
  
  - <strong><code>sites</code></strong> <i>List</i> <i>of Objects</i>
    
      Salto sites associated with the connected account that has an error.
  
  - <strong><code>site_id</code></strong> <i>String</i>
  
    ID of a Salto site associated with the connected account that has an error.
  
  
  - <strong><code>site_name</code></strong> <i>String</i>
  
    Name of a Salto site associated with the connected account that has an error.
  
  
  - <strong><code>site_user_subscription_limit</code></strong> <i>Number</i>
  
    Subscription limit of site users for a Salto site associated with the connected account that has an error.
  
  
  - <strong><code>subscribed_site_user_count</code></strong> <i>Number</i>
  
    Count of subscribed site users for a Salto site associated with the connected account that has an error.
  
  
  
</details>

---

**`user_identifier`** *Object*

User identifier associated with the connected account.

{% hint style="warning" %}
**Deprecated**. Use `display_name` instead.
{% endhint %}


<details>
  <summary>Child Properties</summary>

  - <strong><code>api_url</code></strong> <i>String</i>
  
    API URL for the user identifier associated with the connected account.

  - <strong><code>email</code></strong> <i>String</i>
  
    Email address of the user identifier associated with the connected account.

  - <strong><code>exclusive</code></strong> <i>Boolean</i>
  
    Indicates whether the user identifier associated with the connected account is exclusive.

  - <strong><code>phone</code></strong> <i>String</i>
  
    Phone number of the user identifier associated with the connected account.

  - <strong><code>username</code></strong> <i>String</i>
  
    Username of the user identifier associated with the connected account.

</details>

---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the connected account.




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>scheduled_maintenance_window</code></summary>

Indicates that scheduled downtime is planned for the connected account.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>scheduled_maintenance_window</code>
  
  
</details>
<details>
<summary><code>unknown_issue_with_connected_account</code></summary>

Indicates that an unknown issue occurred while syncing the state of the connected account with the provider. This issue may affect the proper functioning of one or more resources in the account.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>unknown_issue_with_connected_account</code>
  
  
</details>
<details>
<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`salto_ks_metadata`** *Object*
  
  
  Salto KS metadata associated with the connected account that has a warning.
  
  Child Properties
  
  - <strong><code>sites</code></strong> <i>List</i> <i>of Objects</i>
    
      Salto sites associated with the connected account that has a warning.
  
  - <strong><code>site_id</code></strong> <i>String</i>
  
    ID of a Salto site associated with the connected account that has a warning.
  
  
  - <strong><code>site_name</code></strong> <i>String</i>
  
    Name of a Salto site associated with the connected account that has a warning.
  
  
  - <strong><code>site_user_subscription_limit</code></strong> <i>Number</i>
  
    Subscription limit of site users for a Salto site associated with the connected account that has a warning.
  
  
  - <strong><code>subscribed_site_user_count</code></strong> <i>Number</i>
  
    Count of subscribed site users for a Salto site associated with the connected account that has a warning.
  
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_almost_reached</code>
  
  
</details>
<details>
<summary><code>account_reauthorization_requested</code></summary>

Indicates that the Connected Account requires reauthorization using a new Connect Webview. The account is still connected, but cannot access new features. Delaying reauthorization too long will eventually cause the Connected Account to become disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>account_reauthorization_requested</code>
  
  
</details>

---


## Errors

**`account_disconnected`**

Indicates that the account is disconnected.

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

---


## Warnings

**`account_reauthorization_requested`**

Indicates that the Connected Account requires reauthorization using a new Connect Webview. The account is still connected, but cannot access new features. Delaying reauthorization too long will eventually cause the Connected Account to become disconnected.

---

**`salto_ks_subscription_limit_almost_reached`**

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

---

**`scheduled_maintenance_window`**

Indicates that scheduled downtime is planned for the connected account.

---

**`unknown_issue_with_connected_account`**

Indicates that an unknown issue occurred while syncing the state of the connected account with the provider. This issue may affect the proper functioning of one or more resources in the account.

---


## Events

**`connected_account.connected`**

A [connected account](../../core-concepts/connected-accounts/README.md) was connected for the first time or was reconnected after being disconnected.

<details>

<summary>Properties</summary>

<strong><code>connect_webview_id</code></strong> <i>UUID</i>

  ID of the [Connect Webview](../../core-concepts/connect-webviews/README.md) associated with the event.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the affected [connected account](../../core-concepts/connected-accounts/README.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>customer_key</code></strong> <i>String</i>

  The customer key associated with this connected account, if any.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connected_account.connected`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`connected_account.created`**

A [connected account](../../core-concepts/connected-accounts/README.md) was created.

<details>

<summary>Properties</summary>

<strong><code>connect_webview_id</code></strong> <i>UUID</i>

  ID of the [Connect Webview](../../core-concepts/connect-webviews/README.md) associated with the event.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the affected [connected account](../../core-concepts/connected-accounts/README.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connected_account.created`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`connected_account.successful_login`**

A [connected account](../../core-concepts/connected-accounts/README.md) had a successful login using a [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews).

<details>

<summary>Properties</summary>

<strong><code>connect_webview_id</code></strong> <i>UUID</i>

  ID of the [Connect Webview](../../core-concepts/connect-webviews/README.md) associated with the event.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the affected [connected account](../../core-concepts/connected-accounts/README.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connected_account.successful_login`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`connected_account.disconnected`**

A [connected account](../../core-concepts/connected-accounts/README.md) was disconnected.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the affected [connected account](../../core-concepts/connected-accounts/README.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connected_account.disconnected`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`connected_account.completed_first_sync`**

A [connected account](../../core-concepts/connected-accounts/README.md) completed the first sync with Seam, and the corresponding devices or systems are now available.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the affected [connected account](../../core-concepts/connected-accounts/README.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connected_account.completed_first_sync`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`connected_account.deleted`**

A [connected account](../../core-concepts/connected-accounts/README.md) was deleted.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the affected [connected account](../../core-concepts/connected-accounts/README.md).

<strong><code>connected_account_type</code></strong> <i>String</i>

  undocumented: Unreleased.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>customer_key</code></strong> <i>String</i>

  The customer key associated with this connected account, if any.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connected_account.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`connected_account.completed_first_sync_after_reconnection`**

A [connected account](../../core-concepts/connected-accounts/README.md) completed the first sync after reconnection with Seam, and the corresponding devices or systems are now available.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the affected [connected account](../../core-concepts/connected-accounts/README.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connected_account.completed_first_sync_after_reconnection`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`connected_account.reauthorization_requested`**

A [connected account](../../core-concepts/connected-accounts/README.md) requires reauthorization using a new Connect Webview. The account is still connected, but cannot access new features. Delaying reauthorization too long will eventually cause the Connected Account to become disconnected.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the affected [connected account](../../core-concepts/connected-accounts/README.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connected_account.reauthorization_requested`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/connected_accounts/delete`**](./delete.md)

Deletes a specified [connected account](../../core-concepts/connected-accounts/README.md).


[**`/connected_accounts/get`**](./get.md)

Returns a specified [connected account](../../core-concepts/connected-accounts/README.md).


[**`/connected_accounts/list`**](./list.md)

Returns a list of all [connected accounts](../../core-concepts/connected-accounts/README.md).


[**`/connected_accounts/sync`**](./sync.md)

Request a [connected account](../../core-concepts/connected-accounts/README.md) sync attempt for the specified `connected_account_id`.


[**`/connected_accounts/update`**](./update.md)

Updates a [connected account](../../core-concepts/connected-accounts/README.md).


