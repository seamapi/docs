# Access Grants
{% hint style="info" %}
**Early Access Preview.** The access grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

## The access_grant Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an access grant. Access grants enable you to grant a user identity access to spaces, entrances, and devices through one or more access methods, such as mobile keys, plastic cards, and PIN codes. You can create an access grant for an existing user identity, or you can create a new user identity *while* creating the new access grant.

{% tabs %}
{% tab title="Access Grant" %}

An access grant resource.

```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "access_method_ids": [
    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
  ],
  "created_at": "2025-06-16T16:54:17.946606Z",
  "display_name": "My Access Grant",
  "location_ids": [
    "9e8d7c6b-5a4b-3c2d-1e0f-9a8b7c6d5e4f",
    "f0e1d2c3-b4a5-6d7e-8f90-1a2b3c4d5e6f"
  ],
  "requested_access_methods": [
    {
      "display_name": "PIN Code Credential",
      "mode": "code",
      "created_at": "2025-06-16T16:54:17.946606Z",
      "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
    },
    {
      "display_name": "Card Credential",
      "mode": "card",
      "created_at": "2025-06-16T16:54:19.946606Z",
      "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
    },
    {
      "display_name": "Mobile Key Credential",
      "mode": "mobile_key",
      "created_at": "2025-06-16T16:54:21.946606Z",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
    }
  ],
  "space_ids": [
    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
  ],
  "user_identity_id": "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`access_grant_id`** *UUID*

ID of the access grant.




---

**`access_method_ids`** *List* *of UUIDs*

IDs of the access methods created for the access grant.




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

Access methods that the user requested for the access grant.



<details>
  <summary>Child Object Properties</summary>

  <strong><code>created_access_method_ids</code></strong> <i>List</i> <i>of UUIDs</i>
  
    IDs of the access methods created for the requested access method.

  <strong><code>created_at</code></strong> <i>Datetime</i>
  
    Date and time at which the requested access method was added to the access grant.

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

IDs of the spaces to which the access grant gives access.




---

**`user_identity_id`** *UUID*

ID of user identity to which the access grant gives access.




---

**`workspace_id`** *UUID*

ID of the Seam workspace associated with the access grant.




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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
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

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
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


