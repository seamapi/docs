# Access Grants


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


