# Entrances

## The acs_entrance Object

- [Properties](./#properties)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

In an access control system, an entrance is a secured door, gate, zone, or other method of entry. You can list details for all the `acs_entrance` resources in your workspace or get these details for a specific `acs_entrance`. You can also list all entrances associated with a specific credential, and you can list all credentials associated with a specific entrance.

{% tabs %}
{% tab title="ACS Entrance" %}

An access system entrance resource.

```json
{
  "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
  "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
  "created_at": "2025-06-15T16:54:17.946495Z",
  "display_name": "Main Entrance",
  "errors": [],
  "space_ids": [],
  "visionline_metadata": {
    "door_category": "guest",
    "door_name": "Main Entrance",
    "profiles": [
      {
        "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "visionline_door_profile_type": "BLE"
      }
    ]
  },
  "warnings": []
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`acs_entrance_id`** *UUID*

ID of the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).




---

**`acs_system_id`** *UUID*

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).




---

**`assa_abloy_vostio_metadata`** *Object*

ASSA ABLOY Vostio-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Name of the door in the Vostio access system.

  - <strong><code>door_number</code></strong> <i>Number</i>
  
    Number of the door in the Vostio access system.

  - <strong><code>door_type</code></strong> <i>Enum</i>
  
    Type of the door in the Vostio access system.
  <details>
      <summary>Enum values:</summary>
  
      - <code>CommonDoor</code>
      - <code>EntranceDoor</code>
      - <code>GuestDoor</code>
      - <code>Elevator</code>
  </details>

  - <strong><code>pms_id</code></strong> <i>String</i>
  
    PMS ID of the door in the Vostio access system.

  - <strong><code>stand_open</code></strong> <i>Boolean</i>
  
    Indicates whether keys are allowed to set the door in stand open mode in the Vostio access system.

</details>

---

**`avigilon_alta_metadata`** *Object*

Avigilon Alta-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>entry_name</code></strong> <i>String</i>
  
    Entry name for an Avigilon Alta system.

  - <strong><code>entry_relays_total_count</code></strong> <i>Number</i>
  
    Total count of entry relays for an Avigilon Alta system.

  - <strong><code>org_name</code></strong> <i>String</i>
  
    Organization name for an Avigilon Alta system.

  - <strong><code>site_id</code></strong> <i>Number</i>
  
    Site ID for an Avigilon Alta system.

  - <strong><code>site_name</code></strong> <i>String</i>
  
    Site name for an Avigilon Alta system.

  - <strong><code>zone_id</code></strong> <i>Number</i>
  
    Zone ID for an Avigilon Alta system.

  - <strong><code>zone_name</code></strong> <i>String</i>
  
    Zone name for an Avigilon Alta system.

</details>

---

**`brivo_metadata`** *Object*

Brivo-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>access_point_id</code></strong> <i>String</i>
  
    ID of the access point in the Brivo access system.

  - <strong><code>site_id</code></strong> <i>Number</i>
  
    ID of the site that the access point belongs to.

  - <strong><code>site_name</code></strong> <i>String</i>
  
    Name of the site that the access point belongs to.

</details>

---

**`can_belong_to_reservation`** *Boolean*

Indicates whether the ACS entrance can belong to a reservation via an access_grant.reservation_key.




---

**`can_unlock_with_card`** *Boolean*

Indicates whether the ACS entrance can be unlocked with card credentials.




---

**`can_unlock_with_cloud_key`** *Boolean*

Indicates whether the ACS entrance can be unlocked with cloud key credentials.




---

**`can_unlock_with_code`** *Boolean*

Indicates whether the ACS entrance can be unlocked with pin codes.




---

**`can_unlock_with_mobile_key`** *Boolean*

Indicates whether the ACS entrance can be unlocked with mobile key credentials.




---

**`connected_account_id`** *UUID*

ID of the [connected account](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details) associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).




---

**`created_at`** *Datetime*

Date and time at which the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details) was created.




---

**`display_name`** *String*

Display name for the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).




---

**`dormakaba_ambiance_metadata`** *Object*

dormakaba Ambiance-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>access_point_name</code></strong> <i>String</i>
  
    Name of the access point in the dormakaba Ambiance access system.

</details>

---

**`dormakaba_community_metadata`** *Object*

dormakaba Community-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>access_point_profile</code></strong> <i>String</i>
  
    Type of access point profile in the dormakaba Community access system.

</details>

---

**`errors`** *List* *of Objects*

Errors associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Object Properties</summary>
<strong><code>error_code</code></strong> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

<strong><code>message</code></strong> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

---

**`hotek_metadata`** *Object*

Hotek-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>common_area_name</code></strong> <i>String</i>
  
    Display name of the entrance.

  - <strong><code>common_area_number</code></strong> <i>String</i>
  
    Display name of the entrance.

  - <strong><code>room_number</code></strong> <i>String</i>
  
    Room number of the entrance.

</details>

---

**`is_locked`** *Boolean*

Indicates whether the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details) is currently locked.




---

**`latch_metadata`** *Object*

Latch-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>accessibility_type</code></strong> <i>String</i>
  
    Accessibility type in the Latch access system.

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Name of the door in the Latch access system.

  - <strong><code>door_type</code></strong> <i>String</i>
  
    Type of the door in the Latch access system.

  - <strong><code>is_connected</code></strong> <i>Boolean</i>
  
    Indicates whether the entrance is connected.

</details>

---

**`salto_ks_metadata`** *Object*

Salto KS-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>battery_level</code></strong> <i>String</i>
  
    Battery level of the door access device.

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Name of the door in the Salto KS access system.

  - <strong><code>intrusion_alarm</code></strong> <i>Boolean</i>
  
    Indicates whether an intrusion alarm is active on the door.

  - <strong><code>left_open_alarm</code></strong> <i>Boolean</i>
  
    Indicates whether the door is left open.

  - <strong><code>lock_type</code></strong> <i>String</i>
  
    Type of the lock in the Salto KS access system.

  - <strong><code>locked_state</code></strong> <i>String</i>
  
    Locked state of the door in the Salto KS access system.

  - <strong><code>online</code></strong> <i>Boolean</i>
  
    Indicates whether the door access device is online.

  - <strong><code>privacy_mode</code></strong> <i>Boolean</i>
  
    Indicates whether privacy mode is enabled for the lock.

</details>

---

**`salto_space_metadata`** *Object*

Salto Space-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>audit_on_keys</code></strong> <i>Boolean</i>
  
    Indicates whether AuditOnKeys is enabled for the door in the Salto Space access system.

  - <strong><code>door_description</code></strong> <i>String</i>
  
    Description of the door in the Salto Space access system.

  - <strong><code>door_id</code></strong> <i>String</i>
  
    Door ID in the Salto Space access system.

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Name of the door in the Salto Space access system.

  - <strong><code>room_description</code></strong> <i>String</i>
  
    Description of the room in the Salto Space access system.

  - <strong><code>room_name</code></strong> <i>String</i>
  
    Name of the room in the Salto Space access system.

</details>

---

**`space_ids`** *List* *of UUIDs*

IDs of the spaces that the entrance is in.




---

**`visionline_metadata`** *Object*

Visionline-specific metadata associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).



<details>
  <summary>Child Properties</summary>

  - <strong><code>door_category</code></strong> <i>Enum</i>
  
    Category of the door in the Visionline access system.
  <details>
      <summary>Enum values:</summary>
  
      - <code>entrance</code>
      - <code>guest</code>
      - <code>elevator reader</code>
      - <code>common</code>
      - <code>common (PMS)</code>
  </details>

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Name of the door in the Visionline access system.

  - <strong><code>profiles</code></strong> <i>List</i> <i>of Objects</i>
  
    Profile for the door in the Visionline access system.

- <strong><code>visionline_door_profile_id</code></strong> <i>String</i>

  Door profile ID in the Visionline access system.


- <strong><code>visionline_door_profile_type</code></strong> <i>Enum</i>

  Door profile type in the Visionline access system.
<details>
    <summary>Enum values:</summary>

    - <code>BLE</code>
    - <code>commonDoor</code>
    - <code>touch</code>
</details>


</details>

---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>salto_ks_entrance_access_code_support_removed</code></summary>

Indicates that a change in the reported device model has been detected for this Salto KS entrance, which may occur after an IQ hub reset. Access code support may be affected. See https://help.getseam.com/articles/5098842588-salto-ks-lock-loses-access-code-support for troubleshooting steps.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_entrance_access_code_support_removed</code>
  
  
</details>
<details>
<summary><code>entrance_shares_zone</code></summary>

Indicates that this entrance shares a zone with other entrances in Avigilon Alta and cannot be added to an access group individually.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>entrance_shares_zone</code>
  
  
</details>
<details>
<summary><code>entrance_setup_required</code></summary>

Indicates that this entrance requires additional configuration in the access control system before Seam can fully manage it.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>entrance_setup_required</code>
  
  
</details>
<details>
<summary><code>salto_ks_privacy_mode</code></summary>

Indicates that this entrance is in privacy mode. When privacy mode is enabled, access codes, mobile keys, and remote unlocks will not work unless the user has admin access.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_privacy_mode</code>
  
  
</details>

---


## Warnings

**`entrance_setup_required`**

Indicates that this entrance requires additional configuration in the access control system before Seam can fully manage it.

---

**`entrance_shares_zone`**

Indicates that this entrance shares a zone with other entrances in Avigilon Alta and cannot be added to an access group individually.

---

**`salto_ks_entrance_access_code_support_removed`**

Indicates that a change in the reported device model has been detected for this Salto KS entrance, which may occur after an IQ hub reset. Access code support may be affected. See https://help.getseam.com/articles/5098842588-salto-ks-lock-loses-access-code-support for troubleshooting steps.

---

**`salto_ks_privacy_mode`**

Indicates that this entrance is in privacy mode. When privacy mode is enabled, access codes, mobile keys, and remote unlocks will not work unless the user has admin access.

---


## Events

**`acs_entrance.added`**

An [access system entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details) was added.

<details>

<summary>Properties</summary>

<strong><code>acs_entrance_id</code></strong> <i>UUID</i>

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_entrance.added`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](https://docs.seam.co/latest/core-concepts/workspaces) associated with the event.
</details>

---

**`acs_entrance.removed`**

An [access system entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details) was removed.

<details>

<summary>Properties</summary>

<strong><code>acs_entrance_id</code></strong> <i>UUID</i>

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_entrance.removed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](https://docs.seam.co/latest/core-concepts/workspaces) associated with the event.
</details>

---

## Endpoints


[**`/acs/entrances/get`**](./get.md)

Returns a specified [access system entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).


[**`/acs/entrances/grant_access`**](./grant_access.md)

Grants a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) access to a specified [access system entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).


[**`/acs/entrances/list`**](./list.md)

Returns a list of all [access system entrances](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).


[**`/acs/entrances/list_credentials_with_access`**](./list_credentials_with_access.md)

Returns a list of all [credentials](https://docs.seam.co/latest/capability-guides/access-systems/managing-credentials) with access to a specified [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details).


[**`/acs/entrances/unlock`**](./unlock.md)

Remotely unlocks a specified [entrance](https://docs.seam.co/latest/capability-guides/access-systems/retrieving-entrance-details) using a cloud_key credential. Returns an action attempt that tracks the progress of the unlock operation.


