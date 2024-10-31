# Entrances

## `acs_entrance`

### Properties

#### `acs_entrance_id`

Format: `ID`

ID of the entrance.


---

#### `acs_system_id`

Format: `ID`

ID of the access control system that contains the entrance.


---

#### `assa_abloy_vostio_metadata`

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

#### `created_at`

Format: `Datetime`

Date and time at which the entrance was created.


---

#### `display_name`

Format: `String`

Display name for the entrance.


---

#### `dormakaba_community_metadata`

Format: `Object`

<details>
<summary>access_point_name <code>string</code></summary>
</details>

---

#### `errors`

Format: `List`


---

#### `latch_metadata`

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

#### `salto_ks_metadata`

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

#### `visionline_metadata`

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

## `acs_credential`

Means by which a user gains access at an entrance.

      The `acs_credential` object represents a credential that provides an ACS user access within an access control system. For each acs_credential object, you define the access method. You can also specify additional properties, such as a code.

### Properties

#### `access_method`

Format: `Enum`

Access method for the credential. Supported values: `code`, `card`, `mobile_key`.

Possible enum values:
- `code`
- `card`
- `mobile_key`


---

#### `acs_credential_id`

Format: `ID`

ID of the credential.


---

#### `acs_credential_pool_id`

Format: `ID`


---

#### `acs_system_id`

Format: `ID`

ID of the access control system that contains the credential.


---

#### `acs_user_id`

Format: `ID`

ID of the ACS user to whom the credential belongs.


---

#### `card_number`

Format: `String`


---

#### `code`

Format: `String`

Access (PIN) code for the credential.


---

#### `created_at`

Format: `Datetime`

Date and time at which the credential was created.


---

#### `display_name`

Format: `String`

Display name that corresponds to the credential type.


---

#### `ends_at`

Format: `String`

Date and time at which the credential validity ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.


---

#### `errors`

Format: `List`


---

#### `external_type`

Format: `Enum`

Brand-specific terminology for the credential type. Supported values: `pti_card`, `brivo_credential`, `hid_credential`, `visionline_card`.

Possible enum values:
- `pti_card`
- `brivo_credential`
- `hid_credential`
- `visionline_card`
- `salto_ks_credential`


---

#### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the credential type.


---

#### `is_issued`

Format: `Boolean`


---

#### `is_latest_desired_state_synced_with_provider`

Format: `Boolean`

Indicates whether the latest state of the credential has been synced from Seam to the provider.


---

#### `is_managed`

Format: `Boolean`


---

#### `is_multi_phone_sync_credential`

Format: `Boolean`

Indicates whether the credential is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).


---

#### `issued_at`

Format: `Datetime`


---

#### `latest_desired_state_synced_with_provider_at`

Format: `Datetime`

Date and time at which the state of the credential was most recently synced from Seam to the provider.


---

#### `parent_acs_credential_id`

Format: `ID`

ID of the parent credential.


---

#### `starts_at`

Format: `String`

Date and time at which the credential validity starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


---

#### `visionline_metadata`

Format: `Object`

Visionline-specific metadata for the credential.

<details>
<summary>auto_join <code>boolean</code></summary>
</details>
<details>
<summary>card_function_type <code>enum</code></summary>
</details>
<details>
<summary>card_id <code>string</code></summary>
</details>
<details>
<summary>common_acs_entrance_ids <code>list</code></summary>
</details>
<details>
<summary>credential_id <code>string</code></summary>
</details>
<details>
<summary>guest_acs_entrance_ids <code>list</code></summary>
</details>
<details>
<summary>is_valid <code>boolean</code></summary>
</details>
<details>
<summary>joiner_acs_credential_ids <code>list</code></summary>
</details>

---

#### `warnings`

Format: `List`


---

#### `workspace_id`

Format: `ID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the credential.


---

## Endpoints

### [`/acs/entrances/get`](./get.md)

Returns a specified [ACS entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).
### [`/acs/entrances/grant_access`](./grant_access.md)


### [`/acs/entrances/list`](./list.md)

Returns a list of all [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).
### [`/acs/entrances/list_credentials_with_access`](./list_credentials_with_access.md)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md) with access to a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).
