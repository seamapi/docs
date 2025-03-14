# Devices

## `device`

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

### `connected_account_id`

Format: `ID`

Unique identifier for the account associated with the device.

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

Type of the device.

Possible enum values:
- `akuvox_lock`
- `august_lock`
- `brivo_access_point`
- `butterflymx_panel`
- `avigilon_alta_entry`
- `doorking_lock`
- `genie_door`
- `igloo_lock`
- `linear_lock`
- `lockly_lock`
- `kwikset_lock`
- `nuki_lock`
- `salto_lock`
- `schlage_lock`
- `seam_relay`
- `smartthings_lock`
- `wyze_lock`
- `yale_lock`
- `two_n_intercom`
- `controlbyweb_device`
- `ttlock_lock`
- `igloohome_lock`
- `hubitat_lock`
- `four_suites_door`
- `dormakaba_oracode_door`
- `tedee_lock`
- `akiles_lock`
- `noiseaware_activity_zone`
- `minut_sensor`
- `ecobee_thermostat`
- `nest_thermostat`
- `honeywell_resideo_thermostat`
- `tado_thermostat`
- `ios_phone`
- `android_phone`

---

### `display_name`

Format: `String`

Display name of the device, defaults to nickname (if it is set) or properties.appearance.name otherwise. Enables administrators and users to identify the device easily, especially when there are numerous devices.

---

### [`errors`](./#errors-1)

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

Properties of the device.

<details>

<summary><code>accessory_keypad</code> Format: <code>Object</code></summary>

Represents the accessory keypad state.

</details>

<details>

<summary><code>accessory_keypad.battery</code> Format: <code>Object</code></summary>

Indicates if the keypad battery properties.

</details>

<details>

<summary><code>accessory_keypad.battery.level</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>accessory_keypad.is_connected</code> Format: <code>Boolean</code></summary>

Indicates if the accessory_keypad is connected to the device.

</details>

<details>

<summary><code>appearance</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>appearance.name</code> Format: <code>String</code></summary>

Name of the device as seen from the provider API and application, not settable through Seam.

</details>

<details>

<summary><code>battery</code> Format: <code>Object</code></summary>

Represents the current status of the battery charge level. Values are "critical," which indicates an extremely low level, suggesting imminent shutdown or an urgent need for charging; "low," which signifies that the battery is under the preferred threshold and should be charged soon; "good," which denotes a satisfactory charge level, adequate for normal use without the immediate need for recharging; and "full," which represents a battery that is fully charged, providing the maximum duration of usage.

</details>

<details>

<summary><code>battery.level</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>battery.status</code> Format: <code>Enum</code></summary>

</details>

<details>

<summary><code>battery_level</code> Format: <code>Number</code></summary>

Indicates the battery level of the device as a decimal value between 0 and 1, inclusive.

</details>

<details>

<summary><code>currently_triggering_noise_threshold_ids</code> Format: <code>List</code></summary>

Array of noise threshold IDs that are currently triggering.

</details>

<details>

<summary><code>has_direct_power</code> Format: <code>Boolean</code></summary>

Indicates whether the device has direct power.

</details>

<details>

<summary><code>image_alt_text</code> Format: <code>String</code></summary>

Alt text for the device image.

</details>

<details>

<summary><code>image_url</code> Format: <code>String</code></summary>

Image URL for the device.

</details>

<details>

<summary><code>manufacturer</code> Format: <code>String</code></summary>

Manufacturer of the device.

</details>

<details>

<summary><code>model</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>model.accessory_keypad_supported</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>model.can_connect_accessory_keypad</code> Format: <code>Boolean</code></summary>

Indicates whether the device can connect a accessory keypad.

</details>

<details>

<summary><code>model.display_name</code> Format: <code>String</code></summary>

Display name of the device model.

</details>

<details>

<summary><code>model.has_built_in_keypad</code> Format: <code>Boolean</code></summary>

Indicates whether the device has a built in accessory keypad.

</details>

<details>

<summary><code>model.manufacturer_display_name</code> Format: <code>String</code></summary>

Display name that corresponds to the manufacturer-specific terminology for the device.

</details>

<details>

<summary><code>model.offline_access_codes_supported</code> Format: <code>Boolean</code></summary>

Indicates whether the device supports offline access codes.

</details>

<details>

<summary><code>model.online_access_codes_supported</code> Format: <code>Boolean</code></summary>

Indicates whether the device supports online access codes.

</details>

<details>

<summary><code>name</code> Format: <code>String</code></summary>

Name of the device.

</details>

<details>

<summary><code>noise_level_decibels</code> Format: <code>Number</code></summary>

Indicates current noise level in decibels, if the device supports noise detection.

</details>

<details>

<summary><code>offline_access_codes_enabled</code> Format: <code>Boolean</code></summary>

Indicates whether it is currently possible to use offline access codes for the device.

</details>

<details>

<summary><code>online</code> Format: <code>Boolean</code></summary>

Indicates whether the device is online.

</details>

<details>

<summary><code>online_access_codes_enabled</code> Format: <code>Boolean</code></summary>

Indicates whether it is currently possible to use online access codes for the device.

</details>

<details>

<summary><code>serial_number</code> Format: <code>String</code></summary>

Serial number of the device.

</details>

<details>

<summary><code>supports_accessory_keypad</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>supports_offline_access_codes</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>assa_abloy_credential_service_metadata</code> Format: <code>Object</code></summary>

ASSA ABLOY Credential Service metadata for the phone.

</details>

<details>

<summary><code>assa_abloy_credential_service_metadata.endpoints</code> Format: <code>List</code></summary>

Endpoints associated with the phone.

</details>

<details>

<summary><code>assa_abloy_credential_service_metadata.has_active_endpoint</code> Format: <code>Boolean</code></summary>

Indicates whether the credential service has active endpoints associated with the phone.

</details>

<details>

<summary><code>salto_space_credential_service_metadata</code> Format: <code>Object</code></summary>

Salto Space credential service metadata for the phone.

</details>

<details>

<summary><code>salto_space_credential_service_metadata.has_active_phone</code> Format: <code>Boolean</code></summary>

Indicates whether the credential service has an active associated phone.

</details>

<details>

<summary><code>akiles_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>akiles_metadata._member_group_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>akiles_metadata.gadget_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>akiles_metadata.gadget_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>akiles_metadata.product_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>assa_abloy_vostio_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>assa_abloy_vostio_metadata.encoder_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>august_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>august_metadata.has_keypad</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>august_metadata.house_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>august_metadata.house_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>august_metadata.keypad_battery_level</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>august_metadata.lock_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>august_metadata.lock_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>august_metadata.model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>avigilon_alta_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>avigilon_alta_metadata.entry_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>avigilon_alta_metadata.entry_relays_total_count</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>avigilon_alta_metadata.org_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>avigilon_alta_metadata.site_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>avigilon_alta_metadata.site_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>avigilon_alta_metadata.zone_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>avigilon_alta_metadata.zone_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>brivo_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>brivo_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>controlbyweb_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>controlbyweb_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>controlbyweb_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>controlbyweb_metadata.relay_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>dormakaba_oracode_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>dormakaba_oracode_metadata.device_id</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>dormakaba_oracode_metadata.door_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>dormakaba_oracode_metadata.door_is_wireless</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>dormakaba_oracode_metadata.door_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>dormakaba_oracode_metadata.iana_timezone</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>dormakaba_oracode_metadata.predefined_time_slots</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>dormakaba_oracode_metadata.site_id</code> Format: <code>Number</code></summary>

@DEPRECATED

</details>

<details>

<summary><code>dormakaba_oracode_metadata.site_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>ecobee_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>ecobee_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>ecobee_metadata.ecobee_device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>four_suites_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>four_suites_metadata.device_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>four_suites_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>four_suites_metadata.reclose_delay_in_seconds</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>genie_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>genie_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>genie_metadata.door_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>honeywell_resideo_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>honeywell_resideo_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>honeywell_resideo_metadata.honeywell_resideo_device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>hubitat_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>hubitat_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>hubitat_metadata.device_label</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>hubitat_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>igloo_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>igloo_metadata.bridge_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>igloo_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>igloo_metadata.model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>igloohome_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>igloohome_metadata.bridge_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>igloohome_metadata.bridge_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>igloohome_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>igloohome_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>igloohome_metadata.keypad_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>kwikset_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>kwikset_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>kwikset_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>kwikset_metadata.model_number</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>lockly_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>lockly_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>lockly_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>lockly_metadata.model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>minut_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>minut_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>minut_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.accelerometer_z</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.accelerometer_z.time</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.accelerometer_z.value</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.humidity</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.humidity.time</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.humidity.value</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.pressure</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.pressure.time</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.pressure.value</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.sound</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.sound.time</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.sound.value</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.temperature</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.temperature.time</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>minut_metadata.latest_sensor_values.temperature.value</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>nest_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>nest_metadata.device_custom_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>nest_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>nest_metadata.display_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>nest_metadata.nest_device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>noiseaware_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>noiseaware_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>noiseaware_metadata.device_model</code> Format: <code>Enum</code></summary>

</details>

<details>

<summary><code>noiseaware_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>noiseaware_metadata.noise_level_decibel</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>noiseaware_metadata.noise_level_nrs</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>nuki_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>nuki_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>nuki_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>nuki_metadata.keypad_2_paired</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>nuki_metadata.keypad_battery_critical</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>nuki_metadata.keypad_paired</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>salto_ks_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>salto_ks_metadata.battery_level</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_ks_metadata.customer_reference</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_ks_metadata.lock_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_ks_metadata.lock_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_ks_metadata.locked_state</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_ks_metadata.model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_metadata</code> Format: <code>Object</code></summary>


    ---
    deprecated: Use `salto_ks_metadata ` instead.
    

</details>

<details>

<summary><code>salto_metadata.battery_level</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_metadata.customer_reference</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_metadata.lock_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_metadata.lock_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_metadata.locked_state</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>salto_metadata.model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>schlage_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>schlage_metadata.access_code_length</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>schlage_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>schlage_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>schlage_metadata.model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>seam_bridge_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>seam_bridge_metadata.device_num</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>seam_bridge_metadata.name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>seam_bridge_metadata.unlock_method</code> Format: <code>Enum</code></summary>

</details>

<details>

<summary><code>smartthings_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>smartthings_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>smartthings_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>smartthings_metadata.location_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>smartthings_metadata.model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>tado_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>tado_metadata.device_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>tado_metadata.serial_no</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>tedee_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>tedee_metadata.bridge_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>tedee_metadata.bridge_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>tedee_metadata.device_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>tedee_metadata.device_model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>tedee_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>tedee_metadata.keypad_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>tedee_metadata.serial_number</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>ttlock_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.feature_value</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.features</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.features.incomplete_keyboard_passcode</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.features.lock_command</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.features.passcode</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.features.passcode_management</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.features.unlock_via_gateway</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.has_gateway</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.lock_alias</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.lock_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>ttlock_metadata.wireless_keypads</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>two_n_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>two_n_metadata.device_id</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>two_n_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>visionline_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>visionline_metadata.encoder_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>wyze_metadata</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>wyze_metadata.device_id</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>wyze_metadata.device_info_model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>wyze_metadata.device_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>wyze_metadata.keypad_uuid</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>wyze_metadata.locker_status_hardlock</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>wyze_metadata.product_model</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>wyze_metadata.product_name</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>wyze_metadata.product_type</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>_experimental_supported_code_from_access_codes_lengths</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>code_constraints</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>door_open</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>has_native_entry_events</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>keypad_battery</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>keypad_battery.level</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>locked</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>max_active_codes_supported</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>supported_code_lengths</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>supports_backup_access_code_pool</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>active_thermostat_schedule</code> Format: <code>Object</code></summary>

Represents a [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) that activates a configured [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) on a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) at a specified starting time and deactivates the climate preset at a specified ending time.

</details>

<details>

<summary><code>active_thermostat_schedule.climate_preset_key</code> Format: <code>String</code></summary>

Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

</details>

<details>

<summary><code>active_thermostat_schedule.created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) was created.

</details>

<details>

<summary><code>active_thermostat_schedule.device_id</code> Format: <code>ID</code></summary>

ID of the desired [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) device.

</details>

<details>

<summary><code>active_thermostat_schedule.ends_at</code> Format: <code>Datetime</code></summary>

Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

<details>

<summary><code>active_thermostat_schedule.errors</code> Format: <code>List</code></summary>

Errors associated with the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

</details>

<details>

<summary><code>active_thermostat_schedule.max_override_period_minutes</code> Format: <code>Number</code></summary>

Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md). See also [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

</details>

<details>

<summary><code>active_thermostat_schedule.name</code> Format: <code>String</code></summary>

User-friendly name to identify the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

</details>

<details>

<summary><code>active_thermostat_schedule.starts_at</code> Format: <code>Datetime</code></summary>

Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

<details>

<summary><code>active_thermostat_schedule.thermostat_schedule_id</code> Format: <code>ID</code></summary>

ID of the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

</details>

<details>

<summary><code>available_climate_presets</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>available_fan_mode_settings</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>available_hvac_mode_settings</code> Format: <code>List</code></summary>

</details>

<details>

<summary><code>current_climate_setting</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>current_climate_setting.can_delete</code> Format: <code>Boolean</code></summary>

Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

</details>

<details>

<summary><code>current_climate_setting.can_edit</code> Format: <code>Boolean</code></summary>

Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

</details>

<details>

<summary><code>current_climate_setting.climate_preset_key</code> Format: <code>String</code></summary>

Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

<details>

<summary><code>current_climate_setting.cooling_set_point_celsius</code> Format: <code>Number</code></summary>

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

</details>

<details>

<summary><code>current_climate_setting.cooling_set_point_fahrenheit</code> Format: <code>Number</code></summary>

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

</details>

<details>

<summary><code>current_climate_setting.display_name</code> Format: <code>String</code></summary>

Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

<details>

<summary><code>current_climate_setting.fan_mode_setting</code> Format: <code>Enum</code></summary>

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.

</details>

<details>

<summary><code>current_climate_setting.heating_set_point_celsius</code> Format: <code>Number</code></summary>

Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

</details>

<details>

<summary><code>current_climate_setting.heating_set_point_fahrenheit</code> Format: <code>Number</code></summary>

Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

</details>

<details>

<summary><code>current_climate_setting.hvac_mode_setting</code> Format: <code>Enum</code></summary>

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

</details>

<details>

<summary><code>current_climate_setting.manual_override_allowed</code> Format: <code>Boolean</code></summary>

Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

</details>

<details>

<summary><code>current_climate_setting.name</code> Format: <code>String</code></summary>

User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

<details>

<summary><code>default_climate_setting</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>default_climate_setting.can_delete</code> Format: <code>Boolean</code></summary>

Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

</details>

<details>

<summary><code>default_climate_setting.can_edit</code> Format: <code>Boolean</code></summary>

Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

</details>

<details>

<summary><code>default_climate_setting.climate_preset_key</code> Format: <code>String</code></summary>

Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

<details>

<summary><code>default_climate_setting.cooling_set_point_celsius</code> Format: <code>Number</code></summary>

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

</details>

<details>

<summary><code>default_climate_setting.cooling_set_point_fahrenheit</code> Format: <code>Number</code></summary>

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

</details>

<details>

<summary><code>default_climate_setting.display_name</code> Format: <code>String</code></summary>

Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

<details>

<summary><code>default_climate_setting.fan_mode_setting</code> Format: <code>Enum</code></summary>

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.

</details>

<details>

<summary><code>default_climate_setting.heating_set_point_celsius</code> Format: <code>Number</code></summary>

Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

</details>

<details>

<summary><code>default_climate_setting.heating_set_point_fahrenheit</code> Format: <code>Number</code></summary>

Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

</details>

<details>

<summary><code>default_climate_setting.hvac_mode_setting</code> Format: <code>Enum</code></summary>

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

</details>

<details>

<summary><code>default_climate_setting.manual_override_allowed</code> Format: <code>Boolean</code></summary>

Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

</details>

<details>

<summary><code>default_climate_setting.name</code> Format: <code>String</code></summary>

User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

<details>

<summary><code>fallback_climate_preset_key</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>fan_mode_setting</code> Format: <code>Enum</code></summary>

</details>

<details>

<summary><code>is_cooling</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>is_fan_running</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>is_heating</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>is_temporary_manual_override_active</code> Format: <code>Boolean</code></summary>

</details>

<details>

<summary><code>max_cooling_set_point_celsius</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>max_cooling_set_point_fahrenheit</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>max_heating_set_point_celsius</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>max_heating_set_point_fahrenheit</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>min_cooling_set_point_celsius</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>min_cooling_set_point_fahrenheit</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>min_heating_cooling_delta_celsius</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>min_heating_cooling_delta_fahrenheit</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>min_heating_set_point_celsius</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>min_heating_set_point_fahrenheit</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>relative_humidity</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>temperature_celsius</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>temperature_fahrenheit</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>temperature_threshold</code> Format: <code>Object</code></summary>

</details>

<details>

<summary><code>temperature_threshold.lower_limit_celsius</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>temperature_threshold.lower_limit_fahrenheit</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>temperature_threshold.upper_limit_celsius</code> Format: <code>Number</code></summary>

</details>

<details>

<summary><code>temperature_threshold.upper_limit_fahrenheit</code> Format: <code>Number</code></summary>

</details>

---

### [`warnings`](./#warnings-1)

Format: `List`

Array of warnings associated with the device. Each warning object within the array contains two fields: "warning_code" and "message." "warning_code" is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue. "message" provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.

---

### `workspace_id`

Format: `ID`

Unique identifier for the Seam workspace associated with the device.

---

## Errors

### `account_disconnected`

Account is disconnected

---

### `salto_ks_subscription_limit_exceeded`

Salto site user limit reached.

---

### `device_offline`

Device is offline

---

### `device_removed`

Device has been removed

---

### `hub_disconnected`

Hub is disconnected

---

### `device_disconnected`

Device is disconnected

---

### `empty_backup_access_code_pool`

The backup access code pool is empty.

---

### `august_lock_not_authorized`

User is not authorized to use the August Lock.

---

### `august_lock_missing_bridge`

Lock is not connected to the Seam Bridge.

---

### `ttlock_lock_not_paired_to_gateway`

Lock is not paired with a Gateway.

---

### `missing_device_credentials`

Missing device credentials.

---

### `auxiliary_heat_running`

The auxiliary heat is running.

---

### `subscription_required`

Subscription required to connect.

---

### `invalid_credentials`

Credentials provided were invalid.

---

## Warnings

### `partial_backup_access_code_pool`

Backup access code unhealthy.

---

### `many_active_backup_codes`

Too many backup codes.

---

### `wyze_device_missing_gateway`

Wyze Lock is not connected to a gateway.

---

### `functional_offline_device`

Device is offline, but has some functionality available.

---

### `third_party_integration_detected`

Third-party integration detected.

---

### `nest_thermostat_in_manual_eco_mode`

Nest thermostat in manual eco mode.

---

### `ttlock_lock_gateway_unlocking_not_enabled`

Remote Unlock feature not enabled in settings.

---

### `ttlock_weak_gateway_signal`

Gateway signal is weak.

---

### `temperature_threshold_exceeded`

Temperature threshold exceeded.

---

### `device_communication_degraded`

Device appears to be unresponsive.

---

### `scheduled_maintenance_window`

Scheduled maintenance window detected.

---

### `device_has_flaky_connection`

Device has flaky connection.

---

### `salto_ks_office_mode`

Lock is in Office Mode. Access Codes will not unlock doors.

---

### `salto_ks_privacy_mode`

Lock is in Privacy Mode. Access Codes will not unlock doors.

---

### `salto_ks_subscription_limit_almost_reached`

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Please increase your subscription limit, or delete some users from your site to rectify this.

---

### `unknown_issue_with_phone`

An unknown issue occurred while syncing the state of this phone with the provider. This issue may affect the proper functioning of this phone.

---

## Endpoints

### [`/devices/list`](./list.md)

Returns a list of all [devices](../../core-concepts/devices/README.md).

---

## Events

### `device.connected`

The status of a [device](../../core-concepts/devices/README.md) changed from offline to online. That is, the `device.properties.online` property changed from `false` to `true`. Note that some devices operate entirely in offline mode, so Seam never emits a `device.connected` event for these devices.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.added`

A [device](../../core-concepts/devices/README.md) was added to Seam or was re-added to Seam after having been removed.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.converted_to_unmanaged`

A managed device was successfully converted to an [unmanaged device](../../core-concepts/devices/managed-and-unmanaged-devices.md).

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.unmanaged.converted_to_managed`

An [unmanaged device](../../core-concepts/devices/managed-and-unmanaged-devices.md) was successfully converted to a managed device.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.unmanaged.connected`

The status of an [unmanaged device](../../core-concepts/devices/managed-and-unmanaged-devices.md) changed from offline to online. That is, the `device.properties.online` property changed from `false` to `true`.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.disconnected`

The status of a [device](../../core-concepts/devices/README.md) changed from online to offline. That is, the `device.properties.online` property changed from `true` to `false`.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

</details>

<details>

<summary><code>error_code</code> Format: <code>Enum</code></summary>

Error code associated with the disconnection event, if any.

Possible enum values:
- `account_disconnected`
- `hub_disconnected`
- `device_disconnected`

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

### `device.unmanaged.disconnected`

The status of an [unmanaged device](../../core-concepts/devices/managed-and-unmanaged-devices.md) changed from online to offline. That is, the `device.properties.online` property changed from `true` to `false`.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

</details>

<details>

<summary><code>error_code</code> Format: <code>Enum</code></summary>

Error code associated with the disconnection event, if any.

Possible enum values:
- `account_disconnected`
- `hub_disconnected`
- `device_disconnected`

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

### `device.tampered`

A [device](../../core-concepts/devices/README.md) detected that it was tampered with, for example, opened or moved.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.low_battery`

A [device](../../core-concepts/devices/README.md) battery level dropped below the low threshold.

<details>

<summary><code>battery_level</code> Format: <code>Number</code></summary>

Number in the range 0 to 1.0 indicating the amount of battery in the device, as reported by the device.

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.battery_status_changed`

A [device](../../core-concepts/devices/README.md) battery status changed since the last `battery_status_changed` event.

<details>

<summary><code>battery_level</code> Format: <code>Number</code></summary>

Number in the range 0 to 1.0 indicating the amount of battery in the device, as reported by the device.

</details>

<details>

<summary><code>battery_status</code> Format: <code>Enum</code></summary>

Battery status of the device, calculated from the numeric `battery_level` value.

Possible enum values:
- `critical`
- `low`
- `good`
- `full`

</details>

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.removed`

A [device](../../core-concepts/devices/README.md) was removed externally from the [connected account](../../core-concepts/connected-accounts/README.md).

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.deleted`

A [device](../../core-concepts/devices/README.md) was deleted.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.third_party_integration_detected`

Seam detected that a [device](../../core-concepts/devices/README.md) is using a third-party integration that will interfere with Seam device management.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.third_party_integration_no_longer_detected`

Seam detected that a [device](../../core-concepts/devices/README.md) is no longer using a third-party integration that was interfering with Seam device management.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.salto.privacy_mode_activated`

A [Salto device](https://docs.seam.co/latest/device-and-system-integration-guides/salto-locks) activated privacy mode.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.salto.privacy_mode_deactivated`

A [Salto device](https://docs.seam.co/latest/device-and-system-integration-guides/salto-locks) deactivated privacy mode.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.connection_became_flaky`

Seam detected a flaky [device](../../core-concepts/devices/README.md) connection.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.connection_stabilized`

Seam detected that a previously-flaky [device](../../core-concepts/devices/README.md) connection stabilized.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.error.subscription_required`

A third-party subscription is required to use all [device](../../core-concepts/devices/README.md) features.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.error.subscription_required.resolved`

A third-party subscription is active or no longer required to use all [device](../../core-concepts/devices/README.md) features.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.accessory_keypad_connected`

An accessory keypad was connected to a [device](../../core-concepts/devices/README.md).

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.accessory_keypad_disconnected`

An accessory keypad was disconnected from a [device](../../core-concepts/devices/README.md).

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

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

### `device.name_changed`

The name of a [device](../../core-concepts/devices/README.md) was changed.

<details>

<summary><code>connected_account_id</code> Format: <code>ID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).

</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.

</details>

<details>

<summary><code>device_id</code> Format: <code>ID</code></summary>

ID of the device.

</details>

<details>

<summary><code>device_name</code> Format: <code>String</code></summary>

The new name of the device.

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

