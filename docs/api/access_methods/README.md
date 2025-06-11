# Access Methods
{% hint style="info" %}
**Early Access Preview.** The access methods API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

## The access_method Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


---
## Properties

**`access_method_id`** *UUID*

ID of the access method.




---

**`created_at`** *Datetime*

Date and time at which the access method was created.




---

**`display_name`** *String*

Display name of the access method.




---

**`instant_key_url`** *String*

URL of instant key for mobile key access methods.




---

**`is_card_encoding_required`** *Boolean*

Whether card encoding is required for plastic card access methods.




---

**`issued_at`** *Datetime*

Date and time at which the access method was issued.




---

**`mode`** *Enum*

Access method mode. Supported values: `code`, `card`, `mobile_key`.


<details>
<summary>Enum values</summary>

- <code>code</code>
- <code>card</code>
- <code>mobile_key</code>
</details>


---

**`workspace_id`** *UUID*

Unique identifier for the Seam workspace associated with the access grant.




---


## Events

**`access_method.issued`**

An access method was issued.

<details>

<summary>Properties</summary>

<strong><code>access_method_id</code></strong> <i>UUID</i>

  ID of the affected access method.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_method.issued`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`access_method.revoked`**

An access method was revoked.

<details>

<summary>Properties</summary>

<strong><code>access_method_id</code></strong> <i>UUID</i>

  ID of the affected access method.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_method.revoked`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`access_method.card_encoding_required`**

An access method representing a physical card requires encoding.

<details>

<summary>Properties</summary>

<strong><code>access_method_id</code></strong> <i>UUID</i>

  ID of the affected access method.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_method.card_encoding_required`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`access_method.deleted`**

An access method was deleted.

<details>

<summary>Properties</summary>

<strong><code>access_method_id</code></strong> <i>UUID</i>

  ID of the affected access method.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_method.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

## Endpoints


[**`/access_methods/delete`**](./delete.md)

Delete an access method.


[**`/access_methods/get`**](./get.md)

Get an access method.


[**`/access_methods/list`**](./list.md)

List all access methods, usually filtered by access grant.


