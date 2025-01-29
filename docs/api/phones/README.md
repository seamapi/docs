# Phones

## `phone`

### `can_hvac_cool`

Format: `Boolean`


---

### `can_hvac_heat`

Format: `Boolean`


---

### `can_hvac_heat_cool`

Format: `Boolean`


---

### `can_program_offline_access_codes`

Format: `Boolean`


---

### `can_program_online_access_codes`

Format: `Boolean`


---

### `can_remotely_lock`

Format: `Boolean`


---

### `can_remotely_unlock`

Format: `Boolean`


---

### `can_simulate_connection`

Format: `Boolean`


---

### `can_simulate_disconnection`

Format: `Boolean`


---

### `can_simulate_removal`

Format: `Boolean`


---

### `can_turn_off_hvac`

Format: `Boolean`


---

### `capabilities_supported`

Format: `List`

Collection of capabilities that the device supports when connected to Seam. Values are "access_code," which indicates that the device can manage and utilize digital PIN codes for secure access; "lock," which indicates that the device controls a door locking mechanism, enabling the remote opening and closing of doors and other entry points; "noise_detection," which indicates that the device supports monitoring and responding to ambient noise levels; "thermostat," which indicates that the device can regulate and adjust indoor temperatures; and "battery," which indicates that the device can manage battery life and health.


---

### `created_at`

Format: `Datetime`

Date and time at which the device object was created.


---

### `custom_metadata`

Format: `Record`


---

### `device_id`

Format: `ID`

Unique identifier for the device.


---

### `device_type`

Format: `Enum`

Possible enum values:
- `android_phone`
- `ios_phone`


---

### `display_name`

Format: `String`

Display name of the device, defaults to nickname (if it is set) or properties.appearance.name otherwise. Enables administrators and users to identify the device easily, especially when there are numerous devices.


---

### `errors`

Format: `List`

Array of errors associated with the device. Each error object within the array contains two fields: "error_code" and "message." "error_code" is a string that uniquely identifies the type of error, enabling quick recognition and categorization of the issue. "message" provides a more detailed description of the error, offering insights into the issue and potentially how to rectify it.


---

### `is_managed`

Format: `Boolean`

Indicates whether Seam manages the device.


---

### `location`

Format: `Object`

Location information for the device.

<details>

<summary><code>location_name</code> Format: <code>String</code></summary>

Name of the device location.

</details>

<details>

<summary><code>timezone</code> Format: <code>String</code></summary>

Time zone of the device location.

</details>


---

### `nickname`

Format: `String`

Optional nickname to describe the device, settable through Seam


---

### `properties`

Format: `Object`

<details>

<summary><code>assa_abloy_credential_service_metadata</code> Format: <code>Object</code></summary>


</details>

<details>

<summary><code>assa_abloy_credential_service_metadata.endpoints</code> Format: <code>List</code></summary>


</details>

<details>

<summary><code>assa_abloy_credential_service_metadata.has_active_endpoint</code> Format: <code>Boolean</code></summary>


</details>


---

### `warnings`

Format: `List`

Array of warnings associated with the device. Each warning object within the array contains two fields: "warning_code" and "message." "warning_code" is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue. "message" provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.


---

### `workspace_id`

Format: `ID`

Unique identifier for the Seam workspace associated with the device.


---

## Endpoints


## Events

### `phone.deactivated`

A phone device was deactivated.

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).

</details>

<details>

<summary><code>event_id</code> Format: <code>ID</code></summary>

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

<summary><code>workspace_id</code> Format: <code>ID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).

</details>

---

