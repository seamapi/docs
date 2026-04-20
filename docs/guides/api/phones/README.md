# Phones

## The phone Object

- [Properties](./#properties)
- [phone.properties](./#phone.properties)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an app user's mobile phone.

{% tabs %}
{% tab title="Phone" %}

A phone resource.

```json
{
  "created_at": "2025-06-14T16:54:17.946540Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "e452f665-a635-4c65-922b-9feab0e0f84f",
  "device_type": "ios_phone",
  "display_name": "My Phone",
  "errors": [],
  "nickname": "My Phone",
  "properties": {
    "assa_abloy_credential_service_metadata": {
      "endpoints": [
        {
          "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
          "is_active": true
        }
      ],
      "has_active_endpoint": true
    }
  },
  "warnings": [],
  "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`created_at`** *Datetime*

Date and time at which the phone was created.




---

**`custom_metadata`** *Record*

Optional [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) for the phone.




---

**`device_id`** *UUID*

ID of the phone.




---

**`device_type`** *Enum*

Device type for phones.


<details>
<summary>Enum values</summary>

- <code>ios_phone</code>
- <code>android_phone</code>
</details>


---

**`display_name`** *String*

Display name of the phone. Defaults to `nickname` (if it is set) or `properties.appearance.name`, otherwise. Enables administrators and users to identify the phone easily, especially when there are numerous phones.




---

**`errors`** *List* *of Objects*

Errors associated with the phone.



<details>
  <summary>Child Object Properties</summary>
<strong><code>error_code</code></strong> <i>String</i>

<strong><code>message</code></strong> <i>String</i>

</details>

---

**`nickname`** *String*

Optional nickname to describe the phone, settable through Seam.




---

**`warnings`** *List* *of Objects*

Warnings associated with the phone.



<details>
  <summary>Child Object Properties</summary>
<strong><code>message</code></strong> <i>String</i>

<strong><code>warning_code</code></strong> <i>String</i>

</details>

---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the phone.




---


## phone.properties

**`assa_abloy_credential_service_metadata`** *Object*

ASSA ABLOY Credential Service metadata for the phone.



<details>
  <summary>Child Properties</summary>

  - <strong><code>endpoints</code></strong> <i>List</i> <i>of Objects</i>
  
    Endpoints associated with the phone.

- <strong><code>endpoint_id</code></strong> <i>String</i>

  ID of the associated endpoint.


- <strong><code>is_active</code></strong> <i>Boolean</i>

  Indicated whether the endpoint is active.


  - <strong><code>has_active_endpoint</code></strong> <i>Boolean</i>
  
    Indicates whether the credential service has active endpoints associated with the phone.

</details>

---

**`salto_space_credential_service_metadata`** *Object*

Salto Space credential service metadata for the phone.



<details>
  <summary>Child Properties</summary>

  - <strong><code>has_active_phone</code></strong> <i>Boolean</i>
  
    Indicates whether the credential service has an active associated phone.

</details>

---


## Events

**`phone.deactivated`**

A phone device was deactivated.

<details>

<summary>Properties</summary>

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device; present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected phone device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `phone.deactivated`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/phones/deactivate`**](./deactivate.md)

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).


[**`/phones/get`**](./get.md)

Returns a specified [phone](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md).


[**`/phones/list`**](./list.md)

Returns a list of all [phones](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md). To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.


