# Entrances

## `acs_entrance`

Represents an [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### `acs_entrance_id`

Format: `ID`

ID of the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

---

### `acs_system_id`

Format: `ID`

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

---

### `assa_abloy_vostio_metadata`

Format: `Object`

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

### `created_at`

Format: `Datetime`

Date and time at which the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) was created.

---

### `display_name`

Format: `String`

Display name for the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

---

### `dormakaba_community_metadata`

Format: `Object`

dormakaba Community-specific metadata associated with the [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

<details>

<summary><code>access_point_name</code> Format: <code>String</code></summary>

</details>

---

### `errors`

Format: `List`

Item format: `Object`

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

### `latch_metadata`

Format: `Object`

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

### `salto_ks_metadata`

Format: `Object`

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

### `salto_space_metadata`

Format: `Object`

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

### `visionline_metadata`

Format: `Object`

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


<details>

<summary><code>visionline_door_profile_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>visionline_door_profile_type</code> Format: <code>Enum</code></summary>

Possible enum values:
- `BLE`
- `commonDoor`
- `touch`

</details>
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
