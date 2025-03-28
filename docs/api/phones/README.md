# Phones

The Phones route contains the following resources:

## The `phone` Resource

Represents an app user's mobile phone.

## Properties

`created_at` *Datetime*

Date and time at which the `phone` was created.

---
`custom_metadata` *Record*

Optional [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) for the phone.

---
`device_id` *UUID*

ID of the `phone`.

---
`device_type` *Enum*

Type of phone.

<details>
<summary>Possible enum values:</summary>
- `ios_phone`
- `android_phone`
</details>

---
`display_name` *String*

Display name of the phone. Defaults to `nickname` (if it is set) or `properties.appearance.name` otherwise. Enables administrators and users to identify the phone easily, especially when there are numerous phones.

---
`errors` *List* *of Objects*

Errors associated with the `phone`.


<details>

<summary><code>error_code</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>message</code> Format: <code>String</code></summary>
</details>---
`nickname` *String*

Optional nickname to describe the phone, settable through Seam.

---
`properties` *Object*

Properties of the phone.


<details>

<summary><code>assa_abloy_credential_service_metadata</code> Format: <code>Object</code></summary>

ASSA ABLOY Credential Service metadata for the phone.
</details>
<details>

<summary><code>assa_abloy_credential_service_metadata.endpoints</code> Format: <code>List</code> Item format: <code>Object</code></summary>

Endpoints associated with the phone.

- <code>endpoint_id</code> Format: <code>String</code>

  ID of the associated endpoint.


- <code>is_active</code> Format: <code>Boolean</code>

  Indicated whether the endpoint is active.

</details>
<details>

<summary><code>assa_abloy_credential_service_metadata.has_active_endpoint</code> Format: <code>Boolean</code></summary>

Indicates whether the credential service has active endpoints associated with the phone.
</details>
<details>

<summary><code>salto_space_credential_service_metadata</code> Format: <code>Object</code></summary>

Salto Space credential service metadata for the phone.
</details>
<details>

<summary><code>salto_space_credential_service_metadata.has_active_phone</code> Format: <code>Boolean</code></summary>

Indicates whether the credential service has an active associated phone.
</details>---
`warnings` *List* *of Objects*

Warnings associated with the `phone`.


<details>

<summary><code>message</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>warning_code</code> Format: <code>String</code></summary>
</details>---
`workspace_id` *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the `phone`.

---
## Endpoints

### [`/phones/deactivate`](./deactivate.md)

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).
### [`/phones/get`](./get.md)

Returns a single phone entry matching the provided `device_id`.
### [`/phones/list`](./list.md)

Returns a list of all phones. To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.

---

## Events

### `phone.deactivated`

A phone device was deactivated.

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
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

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

