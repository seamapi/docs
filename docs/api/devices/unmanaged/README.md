# Unmanage Devices

## `unmanaged_device`

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

Item format: `Enum`

Collection of capabilities that the device supports when connected to Seam. Values are "access_code," which indicates that the device can manage and utilize digital PIN codes for secure access; "lock," which indicates that the device controls a door locking mechanism, enabling the remote opening and closing of doors and other entry points; "noise_detection," which indicates that the device supports monitoring and responding to ambient noise levels; "thermostat," which indicates that the device can regulate and adjust indoor temperatures; and "battery," which indicates that the device can manage battery life and health.

---

### `connected_account_id`

Format: `UUID`

Unique identifier for the account associated with the device.

---

### `created_at`

Format: `Datetime`

Date and time at which the device object was created.

---

### `device_id`

Format: `UUID`

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
- `sensi_thermostat`
- `ios_phone`
- `android_phone`

---

### [`errors`](./#errors-1)

Format: `List`

Item format: `Object`

Array of errors associated with the device. Each error object within the array contains two fields: "error_code" and "message." "error_code" is a string that uniquely identifies the type of error, enabling quick recognition and categorization of the issue. "message" provides a more detailed description of the error, offering insights into the issue and potentially how to rectify it.

The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>account_disconnected</code></summary>

Account is disconnected

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `account_disconnected`

---

**`is_connected_account_error`**
Format: `Boolean`


---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Salto site user limit reached.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `salto_ks_subscription_limit_exceeded`

---

**`is_connected_account_error`**
Format: `Boolean`


---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>device_offline</code></summary>

Device is offline

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `device_offline`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>device_removed</code></summary>

Device has been removed

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `device_removed`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>hub_disconnected</code></summary>

Hub is disconnected

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `hub_disconnected`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>device_disconnected</code></summary>

Device is disconnected

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `device_disconnected`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>empty_backup_access_code_pool</code></summary>

The backup access code pool is empty.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `empty_backup_access_code_pool`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>august_lock_not_authorized</code></summary>

User is not authorized to use the August Lock.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_lock_not_authorized`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>august_lock_missing_bridge</code></summary>

Lock is not connected to the Seam Bridge.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_lock_missing_bridge`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>ttlock_lock_not_paired_to_gateway</code></summary>

Lock is not paired with a Gateway.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `ttlock_lock_not_paired_to_gateway`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>missing_device_credentials</code></summary>

Missing device credentials.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `missing_device_credentials`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>auxiliary_heat_running</code></summary>

The auxiliary heat is running.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `auxiliary_heat_running`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>subscription_required</code></summary>

Subscription required to connect.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `subscription_required`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>invalid_credentials</code></summary>

Credentials provided were invalid.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `invalid_credentials`

---

**`is_bridge_error`**
Format: `Boolean`


---

**`is_connected_account_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `bridge_disconnected`

---

**`is_bridge_error`**
Format: `Boolean`


---

**`is_connected_account_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>

---

### `is_managed`

Format: `Boolean`

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

### `properties`

Format: `Object`

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

<summary><code>battery</code> Format: <code>Object</code></summary>

Represents the current status of the battery charge level. Values are "critical," which indicates an extremely low level, suggesting imminent shutdown or an urgent need for charging; "low," which signifies that the battery is under the preferred threshold and should be charged soon; "good," which denotes a satisfactory charge level, adequate for normal use without the immediate need for recharging; and "full," which represents a battery that is fully charged, providing the maximum duration of usage.
</details>

<details>

<summary><code>battery.level</code> Format: <code>Number</code></summary>
</details>

<details>

<summary><code>battery.status</code> Format: <code>Enum</code></summary>

Possible enum values:
- `critical`
- `low`
- `good`
- `full`
</details>

<details>

<summary><code>battery_level</code> Format: <code>Number</code></summary>

Indicates the battery level of the device as a decimal value between 0 and 1, inclusive.
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

{% hint style="warning" %}
**Deprecated**. use device.properties.model.can_connect_accessory_keypad
{% endhint %}
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

{% hint style="warning" %}
**Deprecated**. use device.display_name instead
{% endhint %}

Name of the device.
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

---

### [`warnings`](./#warnings-1)

Format: `List`

Item format: `Object`

Array of warnings associated with the device. Each warning object within the array contains two fields: "warning_code" and "message." "warning_code" is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue. "message" provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.

The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>partial_backup_access_code_pool</code></summary>

Backup access code unhealthy.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `partial_backup_access_code_pool`

</details>
<details>
<summary><code>many_active_backup_codes</code></summary>

Too many backup codes.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `many_active_backup_codes`

</details>
<details>
<summary><code>wyze_device_missing_gateway</code></summary>

Wyze Lock is not connected to a gateway.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `wyze_device_missing_gateway`

</details>
<details>
<summary><code>functional_offline_device</code></summary>

Device is offline, but has some functionality available.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `functional_offline_device`

</details>
<details>
<summary><code>third_party_integration_detected</code></summary>

Third-party integration detected.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `third_party_integration_detected`

</details>
<details>
<summary><code>nest_thermostat_in_manual_eco_mode</code></summary>

Nest thermostat in manual eco mode.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `nest_thermostat_in_manual_eco_mode`

</details>
<details>
<summary><code>ttlock_lock_gateway_unlocking_not_enabled</code></summary>

Remote Unlock feature not enabled in settings.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `ttlock_lock_gateway_unlocking_not_enabled`

</details>
<details>
<summary><code>ttlock_weak_gateway_signal</code></summary>

Gateway signal is weak.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `ttlock_weak_gateway_signal`

</details>
<details>
<summary><code>temperature_threshold_exceeded</code></summary>

Temperature threshold exceeded.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `temperature_threshold_exceeded`

</details>
<details>
<summary><code>device_communication_degraded</code></summary>

Device appears to be unresponsive.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `device_communication_degraded`

</details>
<details>
<summary><code>scheduled_maintenance_window</code></summary>

Scheduled maintenance window detected.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `scheduled_maintenance_window`

</details>
<details>
<summary><code>device_has_flaky_connection</code></summary>

Device has flaky connection.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `device_has_flaky_connection`

</details>
<details>
<summary><code>salto_ks_office_mode</code></summary>

Lock is in Office Mode. Access Codes will not unlock doors.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `salto_ks_office_mode`

</details>
<details>
<summary><code>salto_ks_privacy_mode</code></summary>

Lock is in Privacy Mode. Access Codes will not unlock doors.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `salto_ks_privacy_mode`

</details>
<details>
<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Please increase your subscription limit, or delete some users from your site to rectify this.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `salto_ks_subscription_limit_almost_reached`

</details>
<details>
<summary><code>unknown_issue_with_phone</code></summary>

An unknown issue occurred while syncing the state of this phone with the provider. This issue may affect the proper functioning of this phone.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `unknown_issue_with_phone`

</details>
<details>
<summary><code>lockly_time_zone_not_configured</code></summary>

We detected that this device does not have a time zone configured. Time bound codes may not work as expected.

**`created_at`**
Format: `Datetime`


---

**`message`**
Format: `String`


---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `lockly_time_zone_not_configured`

</details>

---

### `workspace_id`

Format: `UUID`

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

### `bridge_disconnected`

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

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

### `lockly_time_zone_not_configured`

We detected that this device does not have a time zone configured. Time bound codes may not work as expected.

---

## Endpoints

