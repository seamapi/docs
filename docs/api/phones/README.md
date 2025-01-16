# Phones

## `phone`

Represents an app user's mobile phone.

### `device_id`

Format: `ID`

ID of the `phone`.

***

### `device_type`

Format: `Enum`&#x20;

Type of phone.

Possible enum values:

* `android_phone`
* `ios_phone`

***

### `nickname`

Format: `String`

Optional nickname to describe the phone, settable through Seam.

***

### `display_name`

Format: `String`

Display name of the phone. Defaults to `nickname` (if it is set) or `properties.appearance.name` otherwise. Enables administrators and users to identify the phone easily, especially when there are numerous phones.

***

### `properties`

Format: `Object`

<details>

<summary><code>assa_abloy_credential_service_metadata</code> Format: <code>Object</code></summary>

* `has_active_endpoint` Format: `Boolean`
* `endpoints` Format: `array`
  * `endpoint_id` Format: `String`
  * `is_active` Format: `Boolean`

</details>

***

### `location`

Format: `Object`

<details>

<summary><code>location_name</code> Format: <code>String</code></summary>

Name of the device location.

</details>

<details>

<summary><code>timezone</code> Format: <code>String</code></summary>

Time zone of the device location.

</details>

***

### `workspace_id`

Format: `ID`

ID of the [workspace](../../core-concepts/workspaces/) that contains the `phone`.

***

### `errors`

Format: `List`

Errors associated with the `phone`.

***

### `warnings`

Format: `List`

Warnings associated with the `phone`.

***

### `created_at`

Format: `Datetime`

Date and time at which the `phone` was created.

***

### `is_managed`

Format: `Boolean`

Indicates whether Seam manages the device.

***

### `custom_metadata`

Format: `Object`

Optional [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) for the phone.

***

## Endpoints

### [`/phones/get`](get-a-phone.md)

Returns a specified `phone`.

### [`/phones/list`](list-phones.md)

Returns a list of all `phones`.

### [`/phones/simulate/create_sandbox_phone`](create-a-sandbox-phone.md)

Creates a simulated `phone` in a [sandbox workspace](../../core-concepts/workspaces/#sandbox-workspaces).

### [`/phones/deactivate`](list-phones.md)

Deactivates a `phone`.
