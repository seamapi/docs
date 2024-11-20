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
<summary>door_name <code>string</code></summary>
</details>
<details>
<summary>door_number <code>number</code></summary>
</details>
<details>
<summary>door_type <code>enum</code></summary>
</details>
<details>
<summary>pms_id <code>string</code></summary>
</details>
<details>
<summary>stand_open <code>boolean</code></summary>
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
<summary>access_point_name <code>string</code></summary>
</details>

---

### `errors`

Format: `List`


---

### `latch_metadata`

Format: `Object`

<details>
<summary>accessibility_type <code>string</code></summary>
</details>
<details>
<summary>door_name <code>string</code></summary>
</details>
<details>
<summary>door_type <code>string</code></summary>
</details>
<details>
<summary>is_connected <code>boolean</code></summary>
</details>

---

### `salto_ks_metadata`

Format: `Object`

<details>
<summary>battery_level <code>string</code></summary>
</details>
<details>
<summary>door_name <code>string</code></summary>
</details>
<details>
<summary>intrusion_alarm <code>boolean</code></summary>
</details>
<details>
<summary>left_open_alarm <code>boolean</code></summary>
</details>
<details>
<summary>lock_type <code>string</code></summary>
</details>
<details>
<summary>locked_state <code>string</code></summary>
</details>
<details>
<summary>online <code>boolean</code></summary>
</details>
<details>
<summary>privacy_mode <code>boolean</code></summary>
</details>

---

### `visionline_metadata`

Format: `Object`

<details>
<summary>door_category <code>enum</code></summary>
</details>
<details>
<summary>door_name <code>string</code></summary>
</details>
<details>
<summary>profiles <code>list</code></summary>
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
