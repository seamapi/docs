# Entrances

The Entrances route contains the following resources:

## The `acs_entrance` Resource

Represents an [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

In an access control system, an entrance is a secured door, gate, zone, or other method of entry. You can list details for all the `acs_entrance` resources in your workspace or get these details for a specific `acs_entrance`. You can also list all entrances associated with a specific credential, and you can list all credentials associated with a specific entrance.

---

## Properties

**`acs_entrance_id`** *UUID*

ID of the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


---

**`acs_system_id`** *UUID*

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


---

**`assa_abloy_vostio_metadata`** *Object*

ASSA ABLOY Vostio-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <b><code>door_name</code></b> <i>String</i>



- <b><code>door_number</code></b> <i>Number</i>



- <b><code>door_type</code></b> <i>Enum</i>


<details>

<summary>Enum values:</summary>

  - `CommonDoor`
  - `EntranceDoor`
  - `GuestDoor`
  - `Elevator`
</details>



- <b><code>pms_id</code></b> <i>String</i>



- <b><code>stand_open</code></b> <i>Boolean</i>


</details>


---

**`created_at`** *Datetime*

Date and time at which the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) was created.


---

**`display_name`** *String*

Display name for the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


---

**`dormakaba_community_metadata`** *Object*

dormakaba Community-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <b><code>access_point_name</code></b> <i>String</i>


</details>


---

**`errors`** *List* *of Objects*

Errors associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Object Properties</summary>

- <b><code>error_code</code></b> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.



- <b><code>message</code></b> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.


</details>


---

**`latch_metadata`** *Object*

Latch-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <b><code>accessibility_type</code></b> <i>String</i>



- <b><code>door_name</code></b> <i>String</i>



- <b><code>door_type</code></b> <i>String</i>



- <b><code>is_connected</code></b> <i>Boolean</i>


</details>


---

**`salto_ks_metadata`** *Object*

Salto KS-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <b><code>battery_level</code></b> <i>String</i>



- <b><code>door_name</code></b> <i>String</i>



- <b><code>intrusion_alarm</code></b> <i>Boolean</i>



- <b><code>left_open_alarm</code></b> <i>Boolean</i>



- <b><code>lock_type</code></b> <i>String</i>



- <b><code>locked_state</code></b> <i>String</i>



- <b><code>online</code></b> <i>Boolean</i>



- <b><code>privacy_mode</code></b> <i>Boolean</i>


</details>


---

**`salto_space_metadata`** *Object*

Salto Space-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <b><code>door_description</code></b> <i>String</i>



- <b><code>door_name</code></b> <i>String</i>



- <b><code>ext_door_id</code></b> <i>String</i>


</details>


---

**`visionline_metadata`** *Object*

Visionline-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <b><code>door_category</code></b> <i>Enum</i>


<details>

<summary>Enum values:</summary>

  - `entrance`
  - `guest`
  - `elevator reader`
  - `common`
  - `common (PMS)`
</details>



- <b><code>door_name</code></b> <i>String</i>



- <b><code>profiles</code></b> <i>List</i> <i>of Objects</i>


- <b><code>visionline_door_profile_id</code></b> <i>String</i>



- <b><code>visionline_door_profile_type</code></b> <i>Enum</i>


<details>

<summary>Enum values:</summary>

  - `BLE`
  - `commonDoor`
  - `touch`
</details>



</details>


---


## Events

**`acs_entrance.added`**

An [ACS entrance](https://docs.seam.co/latest/capability-guides/retrieving-entrance-details) was added.

<details>

<summary>Properties</summary>

- <b><code>acs_entrance_id</code></b> <i>UUID</i>



- <b><code>acs_system_id</code></b> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <b><code>connected_account_id</code></b> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <b><code>created_at</code></b> <i>Datetime</i>

  Date and time at which the event was created.



- <b><code>event_id</code></b> <i>UUID</i>

  ID of the event.



- <b><code>event_type</code></b> <i>String</i>



- <b><code>occurred_at</code></b> <i>Datetime</i>

  Date and time at which the event occurred.



- <b><code>workspace_id</code></b> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

**`acs_entrance.removed`**

An [ACS entrance](https://docs.seam.co/latest/capability-guides/retrieving-entrance-details) was removed.

<details>

<summary>Properties</summary>

- <b><code>acs_entrance_id</code></b> <i>UUID</i>



- <b><code>acs_system_id</code></b> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <b><code>connected_account_id</code></b> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <b><code>created_at</code></b> <i>Datetime</i>

  Date and time at which the event was created.



- <b><code>event_id</code></b> <i>UUID</i>

  ID of the event.



- <b><code>event_type</code></b> <i>String</i>



- <b><code>occurred_at</code></b> <i>Datetime</i>

  Date and time at which the event occurred.



- <b><code>workspace_id</code></b> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

## Endpoints


[**`/acs/entrances/get`**](./get.md)

Returns a specified [ACS entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


[**`/acs/entrances/grant_access`**](./grant_access.md)




[**`/acs/entrances/list`**](./list.md)

Returns a list of all [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).


[**`/acs/entrances/list_credentials_with_access`**](./list_credentials_with_access.md)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md) with access to a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


