# Entrances

The Entrances route contains the following resources:

## The `acs_entrance` Resource

Represents an [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

In an access control system, an entrance is a secured door, gate, zone, or other method of entry. You can list details for all the `acs_entrance` resources in your workspace or get these details for a specific `acs_entrance`. You can also list all entrances associated with a specific credential, and you can list all credentials associated with a specific entrance.

## Properties

`acs_entrance_id` *UUID*

ID of the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


---
`acs_system_id` *UUID*

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


---
`assa_abloy_vostio_metadata` *Object*

ASSA ABLOY Vostio-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


<details>

<summary><code>door_name</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>door_number</code> Format: <code>Number</code></summary>
</details>
<details>

<summary><code>door_type</code> Format: <code>Enum</code></summary>

Possible enum values:
- `CommonDoor`
- `EntranceDoor`
- `GuestDoor`
- `Elevator`
</details>
<details>

<summary><code>pms_id</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>stand_open</code> Format: <code>Boolean</code></summary>
</details>
---
`created_at` *Datetime*

Date and time at which the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) was created.


---
`display_name` *String*

Display name for the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


---
`dormakaba_community_metadata` *Object*

dormakaba Community-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


<details>

<summary><code>access_point_name</code> Format: <code>String</code></summary>
</details>
---
`errors` *List* *of Objects*

Errors associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


<details>

<summary><code>error_code</code> Format: <code>String</code></summary>

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
</details>
<details>

<summary><code>message</code> Format: <code>String</code></summary>

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
</details>
---
`latch_metadata` *Object*

Latch-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


<details>

<summary><code>accessibility_type</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>door_name</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>door_type</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>is_connected</code> Format: <code>Boolean</code></summary>
</details>
---
`salto_ks_metadata` *Object*

Salto KS-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


<details>

<summary><code>battery_level</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>door_name</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>intrusion_alarm</code> Format: <code>Boolean</code></summary>
</details>
<details>

<summary><code>left_open_alarm</code> Format: <code>Boolean</code></summary>
</details>
<details>

<summary><code>lock_type</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>locked_state</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>online</code> Format: <code>Boolean</code></summary>
</details>
<details>

<summary><code>privacy_mode</code> Format: <code>Boolean</code></summary>
</details>
---
`salto_space_metadata` *Object*

Salto Space-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


<details>

<summary><code>door_description</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>door_name</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>ext_door_id</code> Format: <code>String</code></summary>
</details>
---
`visionline_metadata` *Object*

Visionline-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


<details>

<summary><code>door_category</code> Format: <code>Enum</code></summary>

Possible enum values:
- `entrance`
- `guest`
- `elevator reader`
- `common`
- `common (PMS)`
</details>
<details>

<summary><code>door_name</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>profiles</code> Format: <code>List</code> Item format: <code>Object</code></summary>

- <code>visionline_door_profile_id</code> Format: <code>String</code>


- <code>visionline_door_profile_type</code> Format: <code>Enum</code>

  Possible enum values:
  - `BLE`
  - `commonDoor`
  - `touch`

</details>
---
## Endpoints

### [`/acs/entrances/get`](./get.md)

Returns a specified [ACS entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).
### [`/acs/entrances/grant_access`](./grant_access.md)


### [`/acs/entrances/list`](./list.md)

Returns a list of all [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).
### [`/acs/entrances/list_credentials_with_access`](./list_credentials_with_access.md)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md) with access to a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

---

## Events

### `acs_entrance.added`

An [ACS entrance](https://docs.seam.co/latest/capability-guides/retrieving-entrance-details) was added.

<details>

<summary><code>acs_entrance_id</code> Format: <code>UUID</code></summary>
</details>
<details>

<summary><code>acs_system_id</code> Format: <code>UUID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).
</details>
---

### `acs_entrance.removed`

An [ACS entrance](https://docs.seam.co/latest/capability-guides/retrieving-entrance-details) was removed.

<details>

<summary><code>acs_entrance_id</code> Format: <code>UUID</code></summary>
</details>
<details>

<summary><code>acs_system_id</code> Format: <code>UUID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).
</details>
---

