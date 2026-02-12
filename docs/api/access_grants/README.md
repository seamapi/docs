# Access Grants

## The access_grant Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an Access Grant. Access Grants enable you to grant a user identity access to spaces, entrances, and devices through one or more access methods, such as mobile keys, plastic cards, and PIN codes. You can create an Access Grant for an existing user identity, or you can create a new user identity *while* creating the new Access Grant.

{% tabs %}
{% tab title="Access Grant" %}

An Access Grant resource.

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
  "ends_at": "2025-06-18T16:54:17.946606Z",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
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
  "starts_at": "2025-06-16T16:54:17.946606Z",
  "user_identity_id": "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`access_grant_id`** *UUID*

ID of the Access Grant.




---

**`access_grant_key`** *String*

Unique key for the access grant within the workspace.




---

**`access_method_ids`** *List* *of UUIDs*

IDs of the access methods created for the Access Grant.




---

**`client_session_token`** *String*

Client Session Token. Only returned if the Access Grant has a mobile_key access method.




---

**`created_at`** *Datetime*

Date and time at which the Access Grant was created.




---

**`customization_profile_id`** *UUID*

ID of the customization profile associated with the Access Grant.




---

**`display_name`** *String*

Display name of the Access Grant.




---

**`ends_at`** *Datetime*

Date and time at which the Access Grant ends.




---

[**`errors`**](./#errors) *List* *of Objects*

Errors associated with the [access grant](../../capability-guides/access-grants/README.md).




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>cannot_create_requested_access_methods</code></summary>

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>cannot_create_requested_access_methods</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`instant_key_url`** *String*

Instant Key URL. Only returned if the Access Grant has a single mobile_key access_method.




---

**`location_ids`** *List* *of UUIDs*


{% hint style="warning" %}
**Deprecated**. Use `space_ids`.
{% endhint %}



---

**`name`** *String*

Name of the Access Grant. If not provided, the display name will be computed.




---

**`requested_access_methods`** *List* *of Objects*

Access methods that the user requested for the Access Grant.



<details>
  <summary>Child Object Properties</summary>
<strong><code>code</code></strong> <i>String</i>

  Specific PIN code to use for this access method. Only applicable when mode is 'code'.

<strong><code>created_access_method_ids</code></strong> <i>List</i> <i>of UUIDs</i>

  IDs of the access methods created for the requested access method.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the requested access method was added to the Access Grant.

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

**`reservation_key`** *String*

Reservation key for the access grant.




---

**`space_ids`** *List* *of UUIDs*

IDs of the spaces to which the Access Grant gives access.




---

**`starts_at`** *Datetime*

Date and time at which the Access Grant starts.




---

**`user_identity_id`** *UUID*

ID of user identity to which the Access Grant gives access.




---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the [access grant](../../capability-guides/access-grants/README.md).




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>being_deleted</code></summary>

Indicates that the [access grant](../../capability-guides/access-grants/README.md) is being deleted.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>being_deleted</code>
  
  
</details>

---

**`workspace_id`** *UUID*

ID of the Seam workspace associated with the Access Grant.




---


## Errors

**`cannot_create_requested_access_methods`**



---


## Warnings

**`being_deleted`**

Indicates that the [access grant](../../capability-guides/access-grants/README.md) is being deleted.

---


## Events

**`access_grant.created`**

An Access Grant was created.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected Access Grant.

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

An Access Grant was deleted.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected Access Grant.

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

All access requested for an Access Grant was successfully granted.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected Access Grant.

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

Access requested as part of an Access Grant to a particular door was successfully granted.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected Access Grant.

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

Access to a particular door that was requested as part of an Access Grant was lost.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected Access Grant.

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

**`access_grant.access_times_changed`**

An Access Grant's start or end time was changed.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected Access Grant.

<strong><code>access_grant_key</code></strong> <i>String</i>

  Key of the affected Access Grant (if present).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>ends_at</code></strong> <i>String</i>

  The new end time for the access grant.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_grant.access_times_changed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>starts_at</code></strong> <i>String</i>

  The new start time for the access grant.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_grant.could_not_create_requested_access_methods`**

One or more requested access methods could not be created for an Access Grant.

<details>

<summary>Properties</summary>

<strong><code>access_grant_id</code></strong> <i>UUID</i>

  ID of the affected Access Grant.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>error_message</code></strong> <i>String</i>

  Description of why the access methods could not be created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_grant.could_not_create_requested_access_methods`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/access_grants/create`**](./create.md)

Creates a new Access Grant.


[**`/access_grants/delete`**](./delete.md)

Delete an Access Grant.


[**`/access_grants/get`**](./get.md)

Get an Access Grant.


[**`/access_grants/get_related`**](./get_related.md)

Gets all related resources for one or more Access Grants.


[**`/access_grants/list`**](./list.md)

Gets an Access Grant.


[**`/access_grants/request_access_methods`**](./request_access_methods.md)

Adds additional requested access methods to an existing Access Grant.


[**`/access_grants/update`**](./update.md)

Updates an existing Access Grant's time window.


