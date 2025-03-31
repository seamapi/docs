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

- <code><b>door_name</b></code> <i>String</i>



- <code><b>door_number</b></code> <i>Number</i>



- <code><b>door_type</b></code> <i>Enum</i>


<details>

<summary>Enum values:</summary>

  - `CommonDoor`
  - `EntranceDoor`
  - `GuestDoor`
  - `Elevator`
</details>



- <code><b>pms_id</b></code> <i>String</i>



- <code><b>stand_open</b></code> <i>Boolean</i>


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

- <code><b>access_point_name</b></code> <i>String</i>


</details>


---

**`errors`** *List* *of Objects*

Errors associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Object Properties</summary>

- <code><b>error_code</b></code> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.



- <code><b>message</b></code> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.


</details>


---

**`latch_metadata`** *Object*

Latch-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <code><b>accessibility_type</b></code> <i>String</i>



- <code><b>door_name</b></code> <i>String</i>



- <code><b>door_type</b></code> <i>String</i>



- <code><b>is_connected</b></code> <i>Boolean</i>


</details>


---

**`salto_ks_metadata`** *Object*

Salto KS-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <code><b>battery_level</b></code> <i>String</i>



- <code><b>door_name</b></code> <i>String</i>



- <code><b>intrusion_alarm</b></code> <i>Boolean</i>



- <code><b>left_open_alarm</b></code> <i>Boolean</i>



- <code><b>lock_type</b></code> <i>String</i>



- <code><b>locked_state</b></code> <i>String</i>



- <code><b>online</b></code> <i>Boolean</i>



- <code><b>privacy_mode</b></code> <i>Boolean</i>


</details>


---

**`salto_space_metadata`** *Object*

Salto Space-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <code><b>door_description</b></code> <i>String</i>



- <code><b>door_name</b></code> <i>String</i>



- <code><b>ext_door_id</b></code> <i>String</i>


</details>


---

**`visionline_metadata`** *Object*

Visionline-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <code><b>door_category</b></code> <i>Enum</i>


<details>

<summary>Enum values:</summary>

  - `entrance`
  - `guest`
  - `elevator reader`
  - `common`
  - `common (PMS)`
</details>



- <code><b>door_name</b></code> <i>String</i>



- <code><b>profiles</b></code> <i>List</i> <i>of Objects</i>


- <code><b>visionline_door_profile_id</b></code> <i>String</i>



- <code><b>visionline_door_profile_type</b></code> <i>Enum</i>


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

- <code><b>acs_entrance_id</b></code> <i>UUID</i>



- <code><b>acs_system_id</b></code> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <code><b>connected_account_id</b></code> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <code><b>created_at</b></code> <i>Datetime</i>

  Date and time at which the event was created.



- <code><b>event_id</b></code> <i>UUID</i>

  ID of the event.



- <code><b>event_type</b></code> <i>String</i>



- <code><b>occurred_at</b></code> <i>Datetime</i>

  Date and time at which the event occurred.



- <code><b>workspace_id</b></code> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

**`acs_entrance.removed`**

An [ACS entrance](https://docs.seam.co/latest/capability-guides/retrieving-entrance-details) was removed.

<details>

<summary>Properties</summary>

- <code><b>acs_entrance_id</b></code> <i>UUID</i>



- <code><b>acs_system_id</b></code> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <code><b>connected_account_id</b></code> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <code><b>created_at</b></code> <i>Datetime</i>

  Date and time at which the event was created.



- <code><b>event_id</b></code> <i>UUID</i>

  ID of the event.



- <code><b>event_type</b></code> <i>String</i>



- <code><b>occurred_at</b></code> <i>Datetime</i>

  Date and time at which the event occurred.



- <code><b>workspace_id</b></code> <i>UUID</i>

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


