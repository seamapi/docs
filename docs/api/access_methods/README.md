# Access Methods
{% hint style="info" %}
**Early Access Preview.** The access methods API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

## The access_method Object

- [Properties](./#properties)
- [Events](./#events)



Represents an access method for an access grant. Access methods describe the modes of access, such as PIN codes, plastic cards, and mobile keys. For a mobile key, the access method also stores the URL for the associated Instant Key.

{% tabs %}
{% tab title="Card Access Method" %}

A card access method resource.

```json
{
  "access_method_id": "27d8ad77-55c2-4e20-b5b3-43555926f0e8",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My Card",
  "is_card_encoding_required": true,
  "issued_at": "2025-06-14T16:54:17.946612Z",
  "mode": "card",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}
{% tab title="Mobile Key Access Method" %}

A mobile key access method resource.

```json
{
  "access_method_id": "27d8ad77-55c2-4e20-b5b3-43555926f0e8",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My Mobile Key",
  "instant_key_url": "https://se.am/1234",
  "is_card_encoding_required": false,
  "mode": "mobile_key",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}
{% tab title="PIN Code Access Method" %}

A PIN code access method resource.

```json
{
  "access_method_id": "27d8ad77-55c2-4e20-b5b3-43555926f0e8",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My PIN Code",
  "is_card_encoding_required": false,
  "mode": "code",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}
{% endtabs %}

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

URL of the Instant Key for mobile key access methods.




---

**`is_encoding_required`** *Boolean*

Indicates whether encoding with an card encoder is required to issue or reissue the plastic card associated with the access method.




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

ID of the Seam workspace associated with the access method.




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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_method.reissued`**

An access method was reissued due to an access grant update.

<details>

<summary>Properties</summary>

<strong><code>access_method_id</code></strong> <i>UUID</i>

  ID of the affected access method.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_method.reissued`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/access_methods/delete`**](./delete.md)

Delete an access method.


[**`/access_methods/encode`**](./encode.md)

Encodes an existing [credential](../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


[**`/access_methods/get`**](./get.md)

Get an access method.


[**`/access_methods/list`**](./list.md)

List all access methods, usually filtered by access grant.


