# Access Grants
{% hint style="info" %}
**Early Access Preview.** The access grants API is available for early access. Check it out and send us your feedback at [support@seam.co](mailto:support@seam.co).
{% endhint %}

## The access_grant Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


---
## Properties

**`access_grant_id`** *UUID*

ID of the access grant.




---

**`access_method_ids`** *List* *of UUIDs*

IDs of the access methods that were created for this access grant.




---

**`created_at`** *Datetime*

Date and time at which the access grant was created.




---

**`display_name`** *String*

Display name of the access grant.




---

**`location_ids`** *List* *of UUIDs*


{% hint style="warning" %}
**Deprecated**. Use `space_ids`.
{% endhint %}



---

**`requested_access_methods`** *List* *of Objects*

Access methods that the user requested for this access grant.



<details>
  <summary>Child Object Properties</summary>

  <strong><code>created_access_method_ids</code></strong> <i>List</i> <i>of UUIDs</i>
  
    IDs of the access methods that were created for this requested access method.

  <strong><code>created_at</code></strong> <i>Datetime</i>
  
    Date and time at which the requested access method was added to this access grant.

  <strong><code>display_name</code></strong> <i>String</i>
  
    Display name of the access method.

  <strong><code>mode</code></strong> <i>Enum</i>
  
    Access method mode. Supported values: `code`, `card`, `mobile_key`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>code</code>
      - <code>card</code>
      - <code>mobile_key</code>
  </details>
</details>

---

**`space_ids`** *List* *of UUIDs*

IDs of the spaces to which access is being given.




---

**`user_identity_id`** *UUID*

ID of user identity to which access is being granted.




---

**`workspace_id`** *UUID*

Unique identifier for the Seam workspace associated with the access grant.




---


## Events

**`access_grant.created`**

An access grant was created.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected access grant.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_grant.created`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`access_grant.deleted`**

An access grant was deleted.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected access grant.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_grant.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`access_grant.access_granted_to_all_doors`**

All access requested for an access grant was successfully granted.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected access grant.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_grant.access_granted_to_all_doors`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`access_grant.access_granted_to_door`**

Access requested as part of an access grant to a particular door was successfully granted.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected access grant.

<strong><code>acs_entrance_id</code></strong> <i>UUID</i>

  ID of the affected [entrance](https://docs.seam.co/latest/capability-guides/retrieving-entrance-details).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_grant.access_granted_to_door`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`access_grant.access_to_door_lost`**

Access to a particular door that was requested as part of an access grant was lost.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected access grant.

<strong><code>acs_entrance_id</code></strong> <i>UUID</i>

  ID of the affected [entrance](https://docs.seam.co/latest/capability-guides/retrieving-entrance-details).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_grant.access_to_door_lost`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

## Endpoints


[**`/access_grants/create`**](./create.md)

Creates a new access grant.


[**`/access_grants/delete`**](./delete.md)

Delete an access grant.


[**`/access_grants/get`**](./get.md)

Get an access grant.


[**`/access_grants/list`**](./list.md)

Get an access grant.


