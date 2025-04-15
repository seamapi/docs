# Entrances

## The `acs_entrance` Resource

Represents an [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

In an access control system, an entrance is a secured door, gate, zone, or other method of entry. You can list details for all the `acs_entrance` resources in your workspace or get these details for a specific `acs_entrance`. You can also list all entrances associated with a specific credential, and you can list all credentials associated with a specific entrance.

{% tabs %}
{% tab title="JSON" %}
```json
{
  acs_entrance_id: [example value],
  acs_system_id: [example value],
  assa_abloy_vostio_metadata: [example value],
  created_at: [example value],
  display_name: [example value],
  dormakaba_community_metadata: [example value],
  errors: [example value],
  latch_metadata: [example value],
  salto_ks_metadata: [example value],
  salto_space_metadata: [example value],
  visionline_metadata: [example value]
}
```
{% endtab %}
{% endtabs %}

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

- <strong><code>door_name</code></strong> <i>String</i>



- <strong><code>door_number</code></strong> <i>Number</i>



- <strong><code>door_type</code></strong> <i>Enum</i>


<details>

<summary>Enum values:</summary>

  - `CommonDoor`
  - `EntranceDoor`
  - `GuestDoor`
  - `Elevator`
</details>



- <strong><code>pms_id</code></strong> <i>String</i>



- <strong><code>stand_open</code></strong> <i>Boolean</i>


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

- <strong><code>access_point_name</code></strong> <i>String</i>


</details>


---

**`errors`** *List* *of Objects*

Errors associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Object Properties</summary>

- <strong><code>error_code</code></strong> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.



- <strong><code>message</code></strong> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.


</details>


---

**`latch_metadata`** *Object*

Latch-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <strong><code>accessibility_type</code></strong> <i>String</i>



- <strong><code>door_name</code></strong> <i>String</i>



- <strong><code>door_type</code></strong> <i>String</i>



- <strong><code>is_connected</code></strong> <i>Boolean</i>


</details>


---

**`salto_ks_metadata`** *Object*

Salto KS-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <strong><code>battery_level</code></strong> <i>String</i>



- <strong><code>door_name</code></strong> <i>String</i>



- <strong><code>intrusion_alarm</code></strong> <i>Boolean</i>



- <strong><code>left_open_alarm</code></strong> <i>Boolean</i>



- <strong><code>lock_type</code></strong> <i>String</i>



- <strong><code>locked_state</code></strong> <i>String</i>



- <strong><code>online</code></strong> <i>Boolean</i>



- <strong><code>privacy_mode</code></strong> <i>Boolean</i>


</details>


---

**`salto_space_metadata`** *Object*

Salto Space-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <strong><code>door_description</code></strong> <i>String</i>



- <strong><code>door_name</code></strong> <i>String</i>



- <strong><code>ext_door_id</code></strong> <i>String</i>


</details>


---

**`visionline_metadata`** *Object*

Visionline-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary>Child Properties</summary>

- <strong><code>door_category</code></strong> <i>Enum</i>


<details>

<summary>Enum values:</summary>

  - `entrance`
  - `guest`
  - `elevator reader`
  - `common`
  - `common (PMS)`
</details>



- <strong><code>door_name</code></strong> <i>String</i>



- <strong><code>profiles</code></strong> <i>List</i> <i>of Objects</i>


- <strong><code>visionline_door_profile_id</code></strong> <i>String</i>



- <strong><code>visionline_door_profile_type</code></strong> <i>Enum</i>


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

- <strong><code>acs_entrance_id</code></strong> <i>UUID</i>



- <strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

**`acs_entrance.removed`**

An [ACS entrance](https://docs.seam.co/latest/capability-guides/retrieving-entrance-details) was removed.

<details>

<summary>Properties</summary>

- <strong><code>acs_entrance_id</code></strong> <i>UUID</i>



- <strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

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


