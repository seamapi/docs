# Entrances

## `acs_entrance`

Represents an [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md) within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### `acs_entrance_id`

Format: `ID`

ID of the entrance.


---

### `acs_system_id`

Format: `ID`

ID of the access control system that contains the entrance.


---

### `assa_abloy_vostio_metadata`

Format: `Object`

<details>

<summary><code>door_name</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>door_number</code> Format: <code>number</code></summary>


</details>

<details>

<summary><code>door_type</code> Format: <code>enum</code></summary>


</details>

<details>

<summary><code>pms_id</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>stand_open</code> Format: <code>boolean</code></summary>


</details>


---

### `created_at`

Format: `Datetime`

Date and time at which the entrance was created.


---

### `display_name`

Format: `String`

Display name for the entrance.


---

### `dormakaba_community_metadata`

Format: `Object`

<details>

<summary><code>access_point_name</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>common_area_number</code> Format: <code>number</code></summary>


</details>


---

### `errors`

Format: `List`


---

### `latch_metadata`

Format: `Object`

<details>

<summary><code>accessibility_type</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>door_name</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>door_type</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>is_connected</code> Format: <code>boolean</code></summary>


</details>


---

### `salto_ks_metadata`

Format: `Object`

<details>

<summary><code>battery_level</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>door_name</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>intrusion_alarm</code> Format: <code>boolean</code></summary>


</details>

<details>

<summary><code>left_open_alarm</code> Format: <code>boolean</code></summary>


</details>

<details>

<summary><code>lock_type</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>locked_state</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>online</code> Format: <code>boolean</code></summary>


</details>

<details>

<summary><code>privacy_mode</code> Format: <code>boolean</code></summary>


</details>


---

### `salto_space_metadata`

Format: `Object`

<details>

<summary><code>door_description</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>door_name</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>ext_door_id</code> Format: <code>string</code></summary>


</details>


---

### `visionline_metadata`

Format: `Object`

<details>

<summary><code>door_category</code> Format: <code>enum</code></summary>


</details>

<details>

<summary><code>door_name</code> Format: <code>string</code></summary>


</details>

<details>

<summary><code>profiles</code> Format: <code>list</code></summary>


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
