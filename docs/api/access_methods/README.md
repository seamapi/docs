# Access Methods


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


