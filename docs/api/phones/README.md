# Phones

The Phones route contains the following resources:

## The `phone` Resource

Represents an app user's mobile phone.

## Properties

**`created_at`** *Datetime*

Date and time at which the `phone` was created.


---
**`custom_metadata`** *Record*

Optional [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) for the phone.


---
**`device_id`** *UUID*

ID of the `phone`.


---
**`device_type`** *Enum*

Type of phone.

<details>

<summary>Enum values:</summary>

- `ios_phone`
- `android_phone`
</details>


---
**`display_name`** *String*

Display name of the phone. Defaults to `nickname` (if it is set) or `properties.appearance.name` otherwise. Enables administrators and users to identify the phone easily, especially when there are numerous phones.


---
**`errors`** *List* *of Objects*

Errors associated with the `phone`.


<details>

<summary><b><code>error_code</code></b> <i>String</i></summary>
PROPERTY COLLAPSIBLE
</details>

<details>

<summary><b><code>message</code></b> <i>String</i></summary>
PROPERTY COLLAPSIBLE
</details>

---
**`nickname`** *String*

Optional nickname to describe the phone, settable through Seam.


---
**`properties`** *Object*

Properties of the phone.

<details>

<summary>Child Properties</summary>

<details>

<summary><b><code>assa_abloy_credential_service_metadata</code></b> <i>Object</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

ASSA ABLOY Credential Service metadata for the phone.
</details>

<details>

<summary><b><code>assa_abloy_credential_service_metadata.endpoints</code></b> <i>List</i> <i>of Objects</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

Endpoints associated with the phone.

- <b><code>endpoint_id</code></b> <i>String</i>
PROPERTY NESTED
PROPERTY NESTED INTERNAL

  ID of the associated endpoint.



- <b><code>is_active</code></b> <i>Boolean</i>
PROPERTY NESTED
PROPERTY NESTED INTERNAL

  Indicated whether the endpoint is active.


</details>

<details>

<summary><b><code>assa_abloy_credential_service_metadata.has_active_endpoint</code></b> <i>Boolean</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

Indicates whether the credential service has active endpoints associated with the phone.
</details>

<details>

<summary><b><code>salto_space_credential_service_metadata</code></b> <i>Object</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

Salto Space credential service metadata for the phone.
</details>

<details>

<summary><b><code>salto_space_credential_service_metadata.has_active_phone</code></b> <i>Boolean</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

Indicates whether the credential service has an active associated phone.
</details>
</details>

---
**`warnings`** *List* *of Objects*

Warnings associated with the `phone`.


<details>

<summary><b><code>message</code></b> <i>String</i></summary>
PROPERTY COLLAPSIBLE
</details>

<details>

<summary><b><code>warning_code</code></b> <i>String</i></summary>
PROPERTY COLLAPSIBLE
</details>

---
**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the `phone`.


---
## Endpoints

[**`/phones/deactivate`**](./deactivate.md)

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).
[**`/phones/get`**](./get.md)

Returns a single phone entry matching the provided `device_id`.
[**`/phones/list`**](./list.md)

Returns a list of all phones. To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.

---

## Events

**`phone.deactivated`**

A phone device was deactivated.

<details>

<summary><b><code>created_at</code></b> <i>Datetime</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

Date and time at which the event was created.
</details>

<details>

<summary><b><code>device_id</code></b> <i>UUID</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

ID of the [device](../../core-concepts/devices/README.md).
</details>

<details>

<summary><b><code>event_id</code></b> <i>UUID</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

ID of the event.
</details>

<details>

<summary><b><code>event_type</code></b> <i>String</i></summary>
PROPERTY COLLAPSIBLE
</details>

<details>

<summary><b><code>occurred_at</code></b> <i>Datetime</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

Date and time at which the event occurred.
</details>

<details>

<summary><b><code>workspace_id</code></b> <i>UUID</i></summary>
PROPERTY COLLAPSIBLE
PROPERTY CONTENT

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>

---

