# Phones

The Phones route contains the following resources:

## The `phone` Resource

Represents an app user's mobile phone.

---

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

<summary>Enum values</summary>

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

<summary>Child Object Properties</summary>

- <strong><code>error_code</code></strong> <i>String</i>



- <strong><code>message</code></strong> <i>String</i>


</details>


---

**`nickname`** *String*

Optional nickname to describe the phone, settable through Seam.


---

**`properties`** *Object*

Properties of the phone.

<details>

<summary>Child Properties</summary>

- <strong><code>assa_abloy_credential_service_metadata</code></strong> <i>Object</i>

  ASSA ABLOY Credential Service metadata for the phone.



- <strong><code>assa_abloy_credential_service_metadata.endpoints</code></strong> <i>List</i> <i>of Objects</i>

  Endpoints associated with the phone.


- <strong><code>endpoint_id</code></strong> <i>String</i>

  ID of the associated endpoint.



- <strong><code>is_active</code></strong> <i>Boolean</i>

  Indicated whether the endpoint is active.




- <strong><code>assa_abloy_credential_service_metadata.has_active_endpoint</code></strong> <i>Boolean</i>

  Indicates whether the credential service has active endpoints associated with the phone.



- <strong><code>salto_space_credential_service_metadata</code></strong> <i>Object</i>

  Salto Space credential service metadata for the phone.



- <strong><code>salto_space_credential_service_metadata.has_active_phone</code></strong> <i>Boolean</i>

  Indicates whether the credential service has an active associated phone.


</details>


---

**`warnings`** *List* *of Objects*

Warnings associated with the `phone`.

<details>

<summary>Child Object Properties</summary>

- <strong><code>message</code></strong> <i>String</i>



- <strong><code>warning_code</code></strong> <i>String</i>


</details>


---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the `phone`.


---


## Events

**`phone.deactivated`**

A phone device was deactivated.

<details>

<summary>Properties</summary>

- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

## Endpoints


[**`/phones/deactivate`**](./deactivate.md)

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).


[**`/phones/get`**](./get.md)

Returns a single phone entry matching the provided `device_id`.


[**`/phones/list`**](./list.md)

Returns a list of all phones. To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.


