# Connect Webviews

## The connect_webview Object

- [Properties](./#properties)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [Connect Webview](../../core-concepts/connect-webviews/README.md).

Connect Webviews are fully-embedded client-side components that you add to your app. Your users interact with your embedded Connect Webviews to link their IoT device or system accounts to Seam. That is, Connect Webviews walk your users through the process of logging in to their device or system accounts. Seam handles all the authentication steps, and—once your user has completed the authorization through your app—you can access and control their devices or systems using the Seam API.

Connect Webviews perform credential validation, multifactor authentication (when applicable), and error handling for each brand that Seam supports. Further, Connect Webviews work across all modern browsers and platforms, including Chrome, Safari, and Firefox.

To enable a user to connect their device or system account to Seam through your app, first create a `connect_webview`. Once created, this `connect_webview` includes a URL that you can use to open an [iframe](https://www.w3schools.com/html/html_iframe.asp) or new window containing the Connect Webview for your user.

When you create a Connect Webview, specify the desired provider category key in the `provider_category` parameter. Alternately, to specify a list of providers explicitly, use the `accepted_providers` parameter with a list of device provider keys.

To list all providers within a category, use `/devices/list_device_providers` with the desired `provider_category` filter. To list all provider keys, use `/devices/list_device_providers` with no filters.

{% tabs %}
{% tab title="Connect Webview" %}

A connect webview resource.

```json
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["schlage", "kwikset", "yale", "smartthings"],
  "any_device_allowed": false,
  "any_provider_allowed": false,
  "authorized_at": "2025-06-14T16:54:17.946323Z",
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": "5d2fe05f-4f5b-4b91-909c-96e2601dccbe",
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "single",
  "login_successful": true,
  "selected_provider": "schlage",
  "status": "authorized",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=2r2Rn8V5QUtxE79gNsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`accepted_capabilities`** *List* *of Enums*

High-level device capabilities that the Connect Webview can accept. When creating a Connect Webview, you can specify the types of devices that it can connect to Seam. If you do not set custom `accepted_capabilities`, Seam uses a default set of `accepted_capabilities` for each provider. For example, if you create a Connect Webview that accepts SmartThing devices, without specifying `accepted_capabilities`, Seam accepts only SmartThings locks. To connect SmartThings thermostats and locks to Seam, create a Connect Webview and include both `thermostat` and `lock` in the `accepted_capabilities`.




---

**`accepted_providers`** *List* *of Strings*

List of accepted [provider keys](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).




---

**`any_provider_allowed`** *Boolean*

Indicates whether any provider is allowed.




---

**`authorized_at`** *Datetime*

Date and time at which the user authorized (through the Connect Webview) the management of their devices.




---

**`automatically_manage_new_devices`** *Boolean*

Indicates whether Seam should [import all new devices](../../core-concepts/connect-webviews/customizing-connect-webviews.md#automatically_manage_new_devices) for the connected account to make these devices available for use and management by the Seam API.




---

**`connect_webview_id`** *UUID*

ID of the Connect Webview.




---

**`connected_account_id`** *UUID*

ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the Connect Webview.




---

**`created_at`** *Datetime*

Date and time at which the Connect Webview was created.




---

**`custom_metadata`** *Record*

Set of key:value pairs. Adding custom metadata to a resource, such as a [Connect Webview](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), [connected account](../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md), or [device](../../core-concepts/devices/adding-custom-metadata-to-a-device.md), enables you to store custom information, like customer details or internal IDs from your application.




---

**`custom_redirect_failure_url`** *String*

URL to which the Connect Webview should redirect when an unexpected error occurs.




---

**`custom_redirect_url`** *String*

URL to which the Connect Webview should redirect when the user successfully pairs a device or system. If you do not set the `custom_redirect_failure_url`, the Connect Webview redirects to the `custom_redirect_url` when an unexpected error occurs.




---

**`customer_key`** *String*

The customer key associated with this webview, if any.




---

**`device_selection_mode`** *Enum*



<details>
<summary>Enum values</summary>

- <code>none</code>
- <code>single</code>
- <code>multiple</code>
</details>


---

**`login_successful`** *Boolean*

Indicates whether the user logged in successfully using the Connect Webview.




---

**`selected_provider`** *String*

Selected provider of the Connect Webview, one of the [provider keys](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).




---

**`status`** *Enum*

Status of the Connect Webview. `authorized` indicates that the user has successfully logged into their device or system account, thereby completing the Connect Webview.


<details>
<summary>Enum values</summary>

- <code>pending</code>
- <code>failed</code>
- <code>authorized</code>
</details>


---

**`url`** *String*

URL for the Connect Webview. You use the URL to display the Connect Webview flow to your user.




---

**`wait_for_device_creation`** *Boolean*

Indicates whether Seam should [finish syncing all devices](../../core-concepts/connect-webviews/customizing-connect-webviews.md#wait_for_device_creation) in a newly-connected account before completing the associated Connect Webview.




---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the Connect Webview.




---


## Events

**`connect_webview.login_succeeded`**

A [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) login succeeded.

<details>

<summary>Properties</summary>

<strong><code>connect_webview_id</code></strong> <i>UUID</i>

  ID of the affected [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews).

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account; present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>customer_key</code></strong> <i>String</i>

  The customer key associated with this connect webview, if any.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connect_webview.login_succeeded`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`connect_webview.login_failed`**

A [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) login failed.

<details>

<summary>Properties</summary>

<strong><code>connect_webview_id</code></strong> <i>UUID</i>

  ID of the affected [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `connect_webview.login_failed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/connect_webviews/create`**](./create.md)

Creates a new [Connect Webview](../../core-concepts/connect-webviews/README.md).


[**`/connect_webviews/delete`**](./delete.md)

Deletes a [Connect Webview](../../core-concepts/connect-webviews/README.md).


[**`/connect_webviews/get`**](./get.md)

Returns a specified [Connect Webview](../../core-concepts/connect-webviews/README.md).


[**`/connect_webviews/list`**](./list.md)

Returns a list of all [Connect Webviews](../../core-concepts/connect-webviews/README.md).


