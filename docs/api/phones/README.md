# Phones

## The phone Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an app user's mobile phone.

{% tabs %}
{% tab title="JSON" %}
```json
{
  created_at: [example value],
  custom_metadata: [example value],
  device_id: [example value],
  device_type: [example value],
  display_name: [example value],
  errors: [example value],
  nickname: [example value],
  warnings: [example value],
  workspace_id: [example value]
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

Display name of the phone. Defaults to `nickname` (if it is set) or `properties.appearance.name` otherwise. Enables administrators and users to identify the phone easily, especially when there are numerous phones.
  




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


## Events

**`phone.deactivated`**

A phone device was deactivated.

<details>

<summary>Properties</summary>

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected phone device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `phone.deactivated`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

## Endpoints


[**`/phones/deactivate`**](./deactivate.md)

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).


[**`/phones/get`**](./get.md)

Returns a single phone entry matching the provided `device_id`.


[**`/phones/list`**](./list.md)

Returns a list of all phones. To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.


