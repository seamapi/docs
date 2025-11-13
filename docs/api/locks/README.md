# Locks

## The device Object for Locks

* [Properties](./#properties)
* [device.properties](./#device.properties)
* [Errors](./#errors)
* [Warnings](./#warnings)
* [Events](./#events)
* [Endpoints](./#endpoints)

Represents a [lock](https://docs.seam.co/latest/capability-guides/thermostats).

The Seam API enables you to control connected smart locks from a wide variety of manufacturers, including locks that provide online and offline [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) programming.

Depending on the smart lock brand and model, actions that you can perform include remote unlock, remote lock, and programming access codes. You can also view a lock's properties, capabilities, and status. Further, you can monitor for unlock and lock events.

See also [Webhooks](https://docs.seam.co/latest/developer-tools/webhooks).

{% tabs %}
{% tab title="Lock Device" %}
A lock device resource.

```json
{
  "can_program_online_access_codes": true,
  "can_remotely_lock": true,
  "can_remotely_unlock": true,
  "capabilities_supported": ["access_code", "lock"],
  "connected_account_id": "8e3a4f1b-2c7d-4a9e-8b5f-3d2c1a0b9e8f",
  "created_at": "2025-03-27T02:08:16.418Z",
  "space_ids": [],
  "custom_metadata": { "id": "internalId1" },
  "device_id": "a69569e1-133b-4a9d-b883-018641bfe543",
  "device_type": "schlage_lock",
  "display_name": "FRONT DOOR",
  "errors": [],
  "is_managed": true,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
  "nickname": "Front Door",
  "properties": {
    "appearance": { "name": "FRONT DOOR" },
    "battery": { "level": 0.48, "status": "good" },
    "battery_level": 0.48,
    "code_constraints": [{ "constraint_type": "name_length", "max_length": 9 }],
    "has_native_entry_events": true,
    "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
    "locked": false,
    "manufacturer": "schlage",
    "model": {
      "accessory_keypad_supported": false,
      "can_connect_accessory_keypad": false,
      "display_name": "Encode",
      "has_built_in_keypad": true,
      "manufacturer_display_name": "Schlage",
      "offline_access_codes_supported": false,
      "online_access_codes_supported": true
    },
    "name": "FRONT DOOR",
    "offline_access_codes_enabled": false,
    "online": true,
    "online_access_codes_enabled": true,
    "schlage_metadata": {
      "device_id": "a69569e1-133b-4a9d-b883-018641bfe543",
      "device_name": "FRONT DOOR",
      "model": "Encode"
    },
    "serial_number": "34000000000531e0",
    "supported_code_lengths": [4, 5, 6, 7, 8],
    "supports_backup_access_code_pool": true,
    "supports_offline_access_codes": false
  },
  "warnings": [],
  "workspace_id": "5d7f2e1a-9c8b-4f3e-8d2c-1a0b9e8f7c6d"
}
```
{% endtab %}
{% endtabs %}

***

## Properties

**`can_hvac_cool`** _Boolean_

***

**`can_hvac_heat`** _Boolean_

***

**`can_hvac_heat_cool`** _Boolean_

***

**`can_program_offline_access_codes`** _Boolean_

***

**`can_program_online_access_codes`** _Boolean_

***

**`can_program_thermostat_programs_as_different_each_day`** _Boolean_

***

**`can_program_thermostat_programs_as_same_each_day`** _Boolean_

***

**`can_program_thermostat_programs_as_weekday_weekend`** _Boolean_

***

**`can_remotely_lock`** _Boolean_

***

**`can_remotely_unlock`** _Boolean_

***

**`can_run_thermostat_programs`** _Boolean_

***

**`can_simulate_connection`** _Boolean_

***

**`can_simulate_disconnection`** _Boolean_

***

**`can_simulate_hub_connection`** _Boolean_

***

**`can_simulate_hub_disconnection`** _Boolean_

***

**`can_simulate_paid_subscription`** _Boolean_

***

**`can_simulate_removal`** _Boolean_

***

**`can_turn_off_hvac`** _Boolean_

***

**`can_unlock_with_code`** _Boolean_

***

**`capabilities_supported`** _List_ _of Enums_

Collection of capabilities that the device supports when connected to Seam. Values are `access_code`, which indicates that the device can manage and utilize digital PIN codes for secure access; `lock`, which indicates that the device controls a door locking mechanism, enabling the remote opening and closing of doors and other entry points; `noise_detection`, which indicates that the device supports monitoring and responding to ambient noise levels; `thermostat`, which indicates that the device can regulate and adjust indoor temperatures; `battery`, which indicates that the device can manage battery life and health; and `phone`, which indicates that the device is a mobile device, such as a smartphone. **Important:** Superseded by [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags).

***

**`connected_account_id`** _UUID_

Unique identifier for the account associated with the device.

***

**`created_at`** _Datetime_

Date and time at which the device object was created.

***

**`custom_metadata`** _Record_

Set of key:value pairs. Adding custom metadata to a resource, such as a [Connect Webview](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), [connected account](../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md), or [device](../../core-concepts/devices/adding-custom-metadata-to-a-device.md), enables you to store custom information, like customer details or internal IDs from your application.

***

**`device_id`** _UUID_

ID of the device.

***

**`device_type`** _Enum_

Type of the device.

<details>

<summary>Enum values</summary>

* `akuvox_lock`
* `august_lock`
* `brivo_access_point`
* `butterflymx_panel`
* `avigilon_alta_entry`
* `doorking_lock`
* `genie_door`
* `igloo_lock`
* `linear_lock`
* `lockly_lock`
* `kwikset_lock`
* `nuki_lock`
* `salto_lock`
* `schlage_lock`
* `seam_relay`
* `smartthings_lock`
* `wyze_lock`
* `yale_lock`
* `two_n_intercom`
* `controlbyweb_device`
* `ttlock_lock`
* `igloohome_lock`
* `hubitat_lock`
* `four_suites_door`
* `dormakaba_oracode_door`
* `tedee_lock`
* `akiles_lock`
* `ultraloq_lock`
* `keynest_key`
* `noiseaware_activity_zone`
* `minut_sensor`
* `ecobee_thermostat`
* `nest_thermostat`
* `honeywell_resideo_thermostat`
* `tado_thermostat`
* `sensi_thermostat`
* `smartthings_thermostat`
* `ios_phone`
* `android_phone`

</details>

***

**`display_name`** _String_

Display name of the device, defaults to nickname (if it is set) or `properties.appearance.name`, otherwise. Enables administrators and users to identify the device easily, especially when there are numerous devices.

***

[**`errors`**](./#errors) _List_ _of Objects_

Array of errors associated with the device. Each error object within the array contains two fields: `error_code` and `message`. `error_code` is a string that uniquely identifies the type of error, enabling quick recognition and categorization of the issue. `message` provides a more detailed description of the error, offering insights into the issue and potentially how to rectify it.

The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:

<details>

<summary><code>account_disconnected</code></summary>

Indicates that the account is disconnected.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `account_disconnected`

***

**`is_connected_account_error`** _Boolean_

Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.

***

**`is_device_error`** _Boolean_

Indicates that the error is not a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the Salto site user limit has been reached.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_subscription_limit_exceeded`

***

**`is_connected_account_error`** _Boolean_

Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.

***

**`is_device_error`** _Boolean_

Indicates that the error is not a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>device_offline</code></summary>

Indicates that the device is offline.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `device_offline`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>device_removed</code></summary>

Indicates that the device has been removed.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `device_removed`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>hub_disconnected</code></summary>

Indicates that the hub is disconnected.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `hub_disconnected`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>device_disconnected</code></summary>

Indicates that the device is disconnected.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `device_disconnected`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>empty_backup_access_code_pool</code></summary>

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `empty_backup_access_code_pool`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>august_lock_not_authorized</code></summary>

Indicates that the user is not authorized to use the August lock.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `august_lock_not_authorized`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>august_lock_missing_bridge</code></summary>

Indicates that the lock is not connected to a bridge.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `august_lock_missing_bridge`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>ttlock_lock_not_paired_to_gateway</code></summary>

Indicates that the lock is not paired with a gateway.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `ttlock_lock_not_paired_to_gateway`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>missing_device_credentials</code></summary>

Indicates that device credentials are missing.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `missing_device_credentials`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>auxiliary_heat_running</code></summary>

Indicates that the auxiliary heat is running.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `auxiliary_heat_running`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>subscription_required</code></summary>

Indicates that a subscription is required to connect.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `subscription_required`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>lockly_missing_wifi_bridge</code></summary>

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `lockly_missing_wifi_bridge`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge/), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `bridge_disconnected`

***

**`is_bridge_error`** _Boolean_

Indicates whether the error is related to [Seam Bridge](../../capability-guides/seam-bridge/).

***

**`is_connected_account_error`** _Boolean_

Indicates whether the error is related specifically to the connected account.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

***

**`is_managed`** _Boolean_

Indicates whether Seam manages the device. See also [Managed and Unmanaged Devices](../../core-concepts/devices/managed-and-unmanaged-devices.md).

***

**`nickname`** _String_

Optional nickname to describe the device, settable through Seam.

***

**`space_ids`** _List_ _of UUIDs_

IDs of the spaces the device is in.

***

[**`warnings`**](./#warnings) _List_ _of Objects_

Array of warnings associated with the device. Each warning object within the array contains two fields: `warning_code` and `message`. `warning_code` is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue. `message` provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.

The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:

<details>

<summary><code>partial_backup_access_code_pool</code></summary>

Indicates that the backup access code is unhealthy.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `partial_backup_access_code_pool`

</details>

<details>

<summary><code>many_active_backup_codes</code></summary>

Indicates that there are too many backup codes.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `many_active_backup_codes`

</details>

<details>

<summary><code>wyze_device_missing_gateway</code></summary>

Indicates that the Wyze Lock is not connected to a gateway.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `wyze_device_missing_gateway`

</details>

<details>

<summary><code>functional_offline_device</code></summary>

Indicates that the device is offline but has some functionality available.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `functional_offline_device`

</details>

<details>

<summary><code>third_party_integration_detected</code></summary>

Indicates that a third-party integration has been detected.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `third_party_integration_detected`

</details>

<details>

<summary><code>ttlock_lock_gateway_unlocking_not_enabled</code></summary>

Indicates that the Remote Unlock feature is not enabled in the settings."

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `ttlock_lock_gateway_unlocking_not_enabled`

</details>

<details>

<summary><code>ttlock_weak_gateway_signal</code></summary>

Indicates that the gateway signal is weak.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `ttlock_weak_gateway_signal`

</details>

<details>

<summary><code>power_saving_mode</code></summary>

Indicates that the device is in power saving mode and may have limited functionality.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `power_saving_mode`

</details>

<details>

<summary><code>temperature_threshold_exceeded</code></summary>

Indicates that the temperature threshold has been exceeded.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `temperature_threshold_exceeded`

</details>

<details>

<summary><code>device_communication_degraded</code></summary>

Indicates that the device appears to be unresponsive.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `device_communication_degraded`

</details>

<details>

<summary><code>scheduled_maintenance_window</code></summary>

Indicates that a scheduled maintenance window has been detected.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `scheduled_maintenance_window`

</details>

<details>

<summary><code>device_has_flaky_connection</code></summary>

Indicates that the device has a flaky connection.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `device_has_flaky_connection`

</details>

<details>

<summary><code>salto_ks_office_mode</code></summary>

Indicates that the Salto KS lock is in Office Mode. Access Codes will not unlock doors.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_office_mode`

</details>

<details>

<summary><code>salto_ks_privacy_mode</code></summary>

Indicates that the Salto KS lock is in Privacy Mode. Access Codes will not unlock doors.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_privacy_mode`

</details>

<details>

<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_subscription_limit_almost_reached`

</details>

<details>

<summary><code>unknown_issue_with_phone</code></summary>

Indicates that an unknown issue occurred while syncing the state of the phone with the provider. This issue may affect the proper functioning of the phone.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `unknown_issue_with_phone`

</details>

<details>

<summary><code>lockly_time_zone_not_configured</code></summary>

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `lockly_time_zone_not_configured`

</details>

<details>

<summary><code>hub_required_for_addtional_capabilities</code></summary>

Indicates that a hub or relay must be connected to unlock additional capabilities such as remote unlock.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `hub_required_for_addtional_capabilities`

</details>

***

**`workspace_id`** _UUID_

Unique identifier for the Seam workspace associated with the device.

***

## device.properties

**`akiles_metadata`** _Object_

Metadata for an Akiles device.

<details>

<summary>Child Properties</summary>

*   **`_member_group_id`** _String_

    Group ID to which to add users for an Akiles device.
*   **`gadget_id`** _String_

    Gadget ID for an Akiles device.
*   **`gadget_name`** _String_

    Gadget name for an Akiles device.
*   **`product_name`** _String_

    Product name for an Akiles device.

</details>

***

**`assa_abloy_credential_service_metadata`** _Object_

ASSA ABLOY Credential Service metadata for the phone.

<details>

<summary>Child Properties</summary>

*   **`endpoints`** _List_ _of Objects_

    Endpoints associated with the phone.
*   **`endpoint_id`** _String_

    ID of the associated endpoint.
*   **`is_active`** _Boolean_

    Indicated whether the endpoint is active.

    *   **`has_active_endpoint`** _Boolean_

        Indicates whether the credential service has active endpoints associated with the phone.

</details>

***

**`assa_abloy_vostio_metadata`** _Object_

Metadata for an ASSA ABLOY Vostio system.

<details>

<summary>Child Properties</summary>

*   **`encoder_name`** _String_

    Encoder name for an ASSA ABLOY Vostio system.

</details>

***

**`august_metadata`** _Object_

Metadata for an August device.

<details>

<summary>Child Properties</summary>

*   **`has_keypad`** _Boolean_

    Indicates whether an August device has a keypad.
*   **`house_id`** _String_

    House ID for an August device.
*   **`house_name`** _String_

    House name for an August device.
*   **`keypad_battery_level`** _String_

    Keypad battery level for an August device.
*   **`lock_id`** _String_

    Lock ID for an August device.
*   **`lock_name`** _String_

    Lock name for an August device.
*   **`model`** _String_

    Model for an August device.

</details>

***

**`avigilon_alta_metadata`** _Object_

Metadata for an Avigilon Alta system.

<details>

<summary>Child Properties</summary>

*   **`entry_name`** _String_

    Entry name for an Avigilon Alta system.
*   **`entry_relays_total_count`** _Number_

    Total count of entry relays for an Avigilon Alta system.
*   **`org_name`** _String_

    Organization name for an Avigilon Alta system.
*   **`site_id`** _Number_

    Site ID for an Avigilon Alta system.
*   **`site_name`** _String_

    Site name for an Avigilon Alta system.
*   **`zone_id`** _Number_

    Zone ID for an Avigilon Alta system.
*   **`zone_name`** _String_

    Zone name for an Avigilon Alta system.

</details>

***

**`brivo_metadata`** _Object_

Metadata for a Brivo device.

<details>

<summary>Child Properties</summary>

*   **`activation_enabled`** _Boolean_

    Indicates whether the Brivo access point has activation (remote unlock) enabled.
*   **`device_name`** _String_

    Device name for a Brivo device.

</details>

***

**`code_constraints`** _List_ _of Objects_

Constraints on access codes for the device. Seam represents each constraint as an object with a `constraint_type` property. Depending on the constraint type, there may also be additional properties. Note that some constraints are manufacturer- or device-specific.

<details>

<summary>Child Object Properties</summary>

**`constraint_type`** _Enum_

**`max_length`** _Number_

Maximum name length constraint for access codes.

**`min_length`** _Number_

Minimum name length constraint for access codes.

</details>

***

**`controlbyweb_metadata`** _Object_

Metadata for a ControlByWeb device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a ControlByWeb device.
*   **`device_name`** _String_

    Device name for a ControlByWeb device.
*   **`relay_name`** _String_

    Relay name for a ControlByWeb device.

</details>

***

**`door_open`** _Boolean_

Indicates whether the door is open.

***

**`dormakaba_oracode_metadata`** _Object_

Metadata for a dormakaba Oracode device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _Object_

    Device ID for a dormakaba Oracode device.
*   **`door_id`** _Number_

    Door ID for a dormakaba Oracode device.
*   **`door_is_wireless`** _Boolean_

    Indicates whether a door is wireless for a dormakaba Oracode device.
*   **`door_name`** _String_

    Door name for a dormakaba Oracode device.
*   **`iana_timezone`** _String_

    IANA time zone for a dormakaba Oracode device.
*   **`predefined_time_slots`** _List_ _of Objects_

    Predefined time slots for a dormakaba Oracode device.
*   **`check_in_time`** _String_

    Check in time for a time slot for a dormakaba Oracode device.
*   **`check_out_time`** _String_

    Checkout time for a time slot for a dormakaba Oracode device.
*   **`dormakaba_oracode_user_level_id`** _UUID_

    ID of a user level for a dormakaba Oracode device.
*   **`ext_dormakaba_oracode_user_level_prefix`** _Number_

    Prefix for a user level for a dormakaba Oracode device.
*   **`is_24_hour`** _Boolean_

    Indicates whether a time slot for a dormakaba Oracode device is a 24-hour time slot.
*   **`is_biweekly_mode`** _Boolean_

    Indicates whether a time slot for a dormakaba Oracode device is in biweekly mode.
*   **`is_master`** _Boolean_

    Indicates whether a time slot for a dormakaba Oracode device is a master time slot.
*   **`is_one_shot`** _Boolean_

    Indicates whether a time slot for a dormakaba Oracode device is a one-shot time slot.
*   **`name`** _String_

    Name of a time slot for a dormakaba Oracode device.
*   **`prefix`** _Number_

    Prefix for a time slot for a dormakaba Oracode device.

    *   **`site_id`** _Number_

        Site ID for a dormakaba Oracode device.

{% hint style="warning" %}
**Deprecated**. Previously marked as "@DEPRECATED."
{% endhint %}

*   **`site_name`** _String_

    Site name for a dormakaba Oracode device.

</details>

***

**`ecobee_metadata`** _Object_

Metadata for an ecobee device.

<details>

<summary>Child Properties</summary>

*   **`device_name`** _String_

    Device name for an ecobee device.
*   **`ecobee_device_id`** _String_

    Device ID for an ecobee device.

</details>

***

**`four_suites_metadata`** _Object_

Metadata for a 4SUITES device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _Number_

    Device ID for a 4SUITES device.
*   **`device_name`** _String_

    Device name for a 4SUITES device.
*   **`reclose_delay_in_seconds`** _Number_

    Reclose delay, in seconds, for a 4SUITES device.

</details>

***

**`genie_metadata`** _Object_

Metadata for a Genie device.

<details>

<summary>Child Properties</summary>

*   **`device_name`** _String_

    Lock name for a Genie device.
*   **`door_name`** _String_

    Door name for a Genie device.

</details>

***

**`has_native_entry_events`** _Boolean_

Indicates whether the device supports native entry events.

***

**`honeywell_resideo_metadata`** _Object_

Metadata for a Honeywell Resideo device.

<details>

<summary>Child Properties</summary>

*   **`device_name`** _String_

    Device name for a Honeywell Resideo device.
*   **`honeywell_resideo_device_id`** _String_

    Device ID for a Honeywell Resideo device.

</details>

***

**`hubitat_metadata`** _Object_

Metadata for a Hubitat device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Hubitat device.
*   **`device_label`** _String_

    Device label for a Hubitat device.
*   **`device_name`** _String_

    Device name for a Hubitat device.

</details>

***

**`igloo_metadata`** _Object_

Metadata for an igloo device.

<details>

<summary>Child Properties</summary>

*   **`bridge_id`** _String_

    Bridge ID for an igloo device.
*   **`device_id`** _String_

    Device ID for an igloo device.
*   **`model`** _String_

    Model for an igloo device.

</details>

***

**`igloohome_metadata`** _Object_

Metadata for an igloohome device.

<details>

<summary>Child Properties</summary>

*   **`bridge_id`** _String_

    Bridge ID for an igloohome device.
*   **`bridge_name`** _String_

    Bridge name for an igloohome device.
*   **`device_id`** _String_

    Device ID for an igloohome device.
*   **`device_name`** _String_

    Device name for an igloohome device.
*   **`is_keypad_linked_to_bridge`** _Boolean_

    Indicates whether a keypad is linked to a bridge for an igloohome device.
*   **`keypad_id`** _String_

    Keypad ID for an igloohome device.

</details>

***

**`keynest_metadata`** _Object_

Metadata for a KeyNest device.

<details>

<summary>Child Properties</summary>

*   **`address`** _String_

    Address for a KeyNest device.
*   **`current_or_last_store_id`** _Number_

    Current or last store ID for a KeyNest device.
*   **`current_status`** _String_

    Current status for a KeyNest device.
*   **`current_user_company`** _String_

    Current user company for a KeyNest device.
*   **`current_user_email`** _String_

    Current user email for a KeyNest device.
*   **`current_user_name`** _String_

    Current user name for a KeyNest device.
*   **`current_user_phone_number`** _String_

    Current user phone number for a KeyNest device.
*   **`default_office_id`** _Number_

    Default office ID for a KeyNest device.
*   **`device_name`** _String_

    Device name for a KeyNest device.
*   **`fob_id`** _Number_

    Fob ID for a KeyNest device.
*   **`handover_method`** _String_

    Handover method for a KeyNest device.
*   **`has_photo`** _Boolean_

    Whether the KeyNest device has a photo.
*   **`key_id`** _String_

    Key ID for a KeyNest device.
*   **`key_notes`** _String_

    Key notes for a KeyNest device.
*   **`keynest_app_user`** _String_

    KeyNest app user for a KeyNest device.
*   **`last_movement`** _String_

    Last movement timestamp for a KeyNest device.
*   **`property_id`** _String_

    Property ID for a KeyNest device.
*   **`property_postcode`** _String_

    Property postcode for a KeyNest device.
*   **`status_type`** _String_

    Status type for a KeyNest device.
*   **`subscription_plan`** _String_

    Subscription plan for a KeyNest device.

</details>

***

**`keypad_battery`** _Object_

Keypad battery status.

<details>

<summary>Child Properties</summary>

*   **`level`** _Number_

    Keypad battery charge level.

</details>

***

**`kwikset_metadata`** _Object_

Metadata for a Kwikset device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Kwikset device.
*   **`device_name`** _String_

    Device name for a Kwikset device.
*   **`model_number`** _String_

    Model number for a Kwikset device.

</details>

***

**`locked`** _Boolean_

Indicates whether the lock is locked.

***

**`lockly_metadata`** _Object_

Metadata for a Lockly device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Lockly device.
*   **`device_name`** _String_

    Device name for a Lockly device.
*   **`model`** _String_

    Model for a Lockly device.

</details>

***

**`max_active_codes_supported`** _Number_

Maximum number of active access codes that the device supports.

***

**`minut_metadata`** _Object_

Metadata for a Minut device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Minut device.
*   **`device_name`** _String_

    Device name for a Minut device.
*   **`latest_sensor_values`** _Object_

    Latest sensor values for a Minut device.
*   **`latest_sensor_values.accelerometer_z`** _Object_

    Latest accelerometer Z-axis reading for a Minut device.
*   **`latest_sensor_values.accelerometer_z.time`** _String_

    Time of latest accelerometer Z-axis reading for a Minut device.
*   **`latest_sensor_values.accelerometer_z.value`** _Number_

    Value of latest accelerometer Z-axis reading for a Minut device.
*   **`latest_sensor_values.humidity`** _Object_

    Latest humidity reading for a Minut device.
*   **`latest_sensor_values.humidity.time`** _String_

    Time of latest humidity reading for a Minut device.
*   **`latest_sensor_values.humidity.value`** _Number_

    Value of latest humidity reading for a Minut device.
*   **`latest_sensor_values.pressure`** _Object_

    Latest pressure reading for a Minut device.
*   **`latest_sensor_values.pressure.time`** _String_

    Time of latest pressure reading for a Minut device.
*   **`latest_sensor_values.pressure.value`** _Number_

    Value of latest pressure reading for a Minut device.
*   **`latest_sensor_values.sound`** _Object_

    Latest sound reading for a Minut device.
*   **`latest_sensor_values.sound.time`** _String_

    Time of latest sound reading for a Minut device.
*   **`latest_sensor_values.sound.value`** _Number_

    Value of latest sound reading for a Minut device.
*   **`latest_sensor_values.temperature`** _Object_

    Latest temperature reading for a Minut device.
*   **`latest_sensor_values.temperature.time`** _String_

    Time of latest temperature reading for a Minut device.
*   **`latest_sensor_values.temperature.value`** _Number_

    Value of latest temperature reading for a Minut device.

</details>

***

**`model`** _Object_

Device model-related properties.

<details>

<summary>Child Properties</summary>

* **`accessory_keypad_supported`** _Boolean_

{% hint style="warning" %}
**Deprecated**. use device.properties.model.can\_connect\_accessory\_keypad
{% endhint %}

*   **`can_connect_accessory_keypad`** _Boolean_

    Indicates whether the device can connect a accessory keypad.
*   **`display_name`** _String_

    Display name of the device model.
*   **`has_built_in_keypad`** _Boolean_

    Indicates whether the device has a built in accessory keypad.
*   **`manufacturer_display_name`** _String_

    Display name that corresponds to the manufacturer-specific terminology for the device.
* **`offline_access_codes_supported`** _Boolean_

{% hint style="warning" %}
**Deprecated**. use device.can\_program\_offline\_access\_codes.
{% endhint %}

* **`online_access_codes_supported`** _Boolean_

{% hint style="warning" %}
**Deprecated**. use device.can\_program\_online\_access\_codes.
{% endhint %}

</details>

***

**`name`** _String_

Name of the device.

{% hint style="warning" %}
**Deprecated**. use device.display\_name instead
{% endhint %}

***

**`nest_metadata`** _Object_

Metadata for a Google Nest device.

<details>

<summary>Child Properties</summary>

*   **`device_custom_name`** _String_

    Custom device name for a Google Nest device. The device owner sets this value.
*   **`device_name`** _String_

    Device name for a Google Nest device. Google sets this value.
*   **`display_name`** _String_

    Display name for a Google Nest device.
*   **`nest_device_id`** _String_

    Device ID for a Google Nest device.

</details>

***

**`noiseaware_metadata`** _Object_

Metadata for a NoiseAware device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a NoiseAware device.
*   **`device_model`** _Enum_

    Device model for a NoiseAware device.
*   **`device_name`** _String_

    Device name for a NoiseAware device.
*   **`noise_level_decibel`** _Number_

    Noise level, in decibels, for a NoiseAware device.
*   **`noise_level_nrs`** _Number_

    Noise level, expressed as a Noise Risk Score (NRS), for a NoiseAware device.

</details>

***

**`nuki_metadata`** _Object_

Metadata for a Nuki device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Nuki device.
*   **`device_name`** _String_

    Device name for a Nuki device.
*   **`keypad_2_paired`** _Boolean_

    Indicates whether keypad 2 is paired for a Nuki device.
*   **`keypad_battery_critical`** _Boolean_

    Indicates whether the keypad battery is in a critical state for a Nuki device.
*   **`keypad_paired`** _Boolean_

    Indicates whether the keypad is paired for a Nuki device.

</details>

***

**`offline_access_codes_enabled`** _Boolean_

Indicates whether it is currently possible to use offline access codes for the device.

{% hint style="warning" %}
**Deprecated**. use device.can\_program\_offline\_access\_codes
{% endhint %}

***

**`online`** _Boolean_

Indicates whether the device is online.

***

**`online_access_codes_enabled`** _Boolean_

Indicates whether it is currently possible to use online access codes for the device.

{% hint style="warning" %}
**Deprecated**. use device.can\_program\_online\_access\_codes
{% endhint %}

***

**`salto_ks_metadata`** _Object_

Metadata for a Salto KS device.

<details>

<summary>Child Properties</summary>

*   **`battery_level`** _String_

    Battery level for a Salto KS device.
*   **`customer_reference`** _String_

    Customer reference for a Salto KS device.
*   **`lock_id`** _String_

    Lock ID for a Salto KS device.
*   **`lock_type`** _String_

    Lock type for a Salto KS device.
*   **`locked_state`** _String_

    Locked state for a Salto KS device.
*   **`model`** _String_

    Model for a Salto KS device.

</details>

***

**`salto_metadata`** _Object_

Metada for a Salto device.

{% hint style="warning" %}
**Deprecated**. Use `salto_ks_metadata` instead.
{% endhint %}

<details>

<summary>Child Properties</summary>

*   **`battery_level`** _String_

    Battery level for a Salto device.
*   **`customer_reference`** _String_

    Customer reference for a Salto device.
*   **`lock_id`** _String_

    Lock ID for a Salto device.
*   **`lock_type`** _String_

    Lock type for a Salto device.
*   **`locked_state`** _String_

    Locked state for a Salto device.
*   **`model`** _String_

    Model for a Salto device.

</details>

***

**`salto_space_credential_service_metadata`** _Object_

Salto Space credential service metadata for the phone.

<details>

<summary>Child Properties</summary>

*   **`has_active_phone`** _Boolean_

    Indicates whether the credential service has an active associated phone.

</details>

***

**`schlage_metadata`** _Object_

Metadata for a Schlage device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Schlage device.
*   **`device_name`** _String_

    Device name for a Schlage device.
*   **`model`** _String_

    Model for a Schlage device.

</details>

***

**`seam_bridge_metadata`** _Object_

Metadata for Seam Bridge.

<details>

<summary>Child Properties</summary>

*   **`device_num`** _Number_

    Device number for Seam Bridge.
*   **`name`** _String_

    Name for Seam Bridge.
*   **`unlock_method`** _Enum_

    Unlock method for Seam Bridge.

</details>

***

**`sensi_metadata`** _Object_

Metadata for a Sensi device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Sensi device.
*   **`device_name`** _String_

    Device name for a Sensi device.
*   **`product_type`** _String_

    Product type for a Sensi device.

</details>

***

**`smartthings_metadata`** _Object_

Metadata for a SmartThings device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a SmartThings device.
*   **`device_name`** _String_

    Device name for a SmartThings device.
*   **`location_id`** _String_

    Location ID for a SmartThings device.
*   **`model`** _String_

    Model for a SmartThings device.

</details>

***

**`supported_code_lengths`** _List_ _of Numbers_

Supported code lengths for access codes.

***

**`supports_accessory_keypad`** _Boolean_

{% hint style="warning" %}
**Deprecated**. use device.properties.model.can\_connect\_accessory\_keypad
{% endhint %}

***

**`supports_backup_access_code_pool`** _Boolean_

Indicates whether the device supports a [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).

***

**`supports_offline_access_codes`** _Boolean_

{% hint style="warning" %}
**Deprecated**. use offline\_access\_codes\_enabled
{% endhint %}

***

**`tado_metadata`** _Object_

Metadata for a tado° device.

<details>

<summary>Child Properties</summary>

*   **`device_type`** _String_

    Device type for a tado° device.
*   **`serial_no`** _String_

    Serial number for a tado° device.

</details>

***

**`tedee_metadata`** _Object_

Metadata for a Tedee device.

<details>

<summary>Child Properties</summary>

*   **`bridge_id`** _Number_

    Bridge ID for a Tedee device.
*   **`bridge_name`** _String_

    Bridge name for a Tedee device.
*   **`device_id`** _Number_

    Device ID for a Tedee device.
*   **`device_model`** _String_

    Device model for a Tedee device.
*   **`device_name`** _String_

    Device name for a Tedee device.
*   **`keypad_id`** _Number_

    Keypad ID for a Tedee device.
*   **`serial_number`** _String_

    Serial number for a Tedee device.

</details>

***

**`ttlock_metadata`** _Object_

Metadata for a TTLock device.

<details>

<summary>Child Properties</summary>

*   **`feature_value`** _String_

    Feature value for a TTLock device.
*   **`features`** _Object_

    Features for a TTLock device.
*   **`features.incomplete_keyboard_passcode`** _Boolean_

    Indicates whether a TTLock device supports an incomplete keyboard passcode.
*   **`features.lock_command`** _Boolean_

    Indicates whether a TTLock device supports the lock command.
*   **`features.passcode`** _Boolean_

    Indicates whether a TTLock device supports a passcode.
*   **`features.passcode_management`** _Boolean_

    Indicates whether a TTLock device supports passcode management.
*   **`features.unlock_via_gateway`** _Boolean_

    Indicates whether a TTLock device supports unlock via gateway.
*   **`features.wifi`** _Boolean_

    Indicates whether a TTLock device supports Wi-Fi.
*   **`has_gateway`** _Boolean_

    Indicates whether a TTLock device has a gateway.
*   **`lock_alias`** _String_

    Lock alias for a TTLock device.
*   **`lock_id`** _Number_

    Lock ID for a TTLock device.
*   **`wireless_keypads`** _List_ _of Objects_

    Wireless keypads for a TTLock device.
*   **`wireless_keypad_id`** _Number_

    ID for a wireless keypad for a TTLock device.
*   **`wireless_keypad_name`** _String_

    Name for a wireless keypad for a TTLock device.

</details>

***

**`two_n_metadata`** _Object_

Metadata for a 2N device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _Number_

    Device ID for a 2N device.
*   **`device_name`** _String_

    Device name for a 2N device.

</details>

***

**`ultraloq_metadata`** _Object_

Metadata for an Ultraloq device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for an Ultraloq device.
*   **`device_name`** _String_

    Device name for an Ultraloq device.
*   **`device_type`** _String_

    Device type for an Ultraloq device.

</details>

***

**`visionline_metadata`** _Object_

Metadata for an ASSA ABLOY Visionline system.

<details>

<summary>Child Properties</summary>

*   **`encoder_id`** _String_

    Encoder ID for an ASSA ABLOY Visionline system.

</details>

***

**`wyze_metadata`** _Object_

Metadata for a Wyze device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Wyze device.
*   **`device_info_model`** _String_

    Device information model for a Wyze device.
*   **`device_name`** _String_

    Device name for a Wyze device.
*   **`keypad_uuid`** _String_

    Keypad UUID for a Wyze device.
*   **`locker_status_hardlock`** _Number_

    Locker status (hardlock) for a Wyze device.
*   **`product_model`** _String_

    Product model for a Wyze device.
*   **`product_name`** _String_

    Product name for a Wyze device.
*   **`product_type`** _String_

    Product type for a Wyze device.

</details>

***

## Errors

**`salto_ks_subscription_limit_exceeded`**

Indicates that the Salto site user limit has been reached.

***

**`august_lock_not_authorized`**

Indicates that the user is not authorized to use the August lock.

***

**`august_lock_missing_bridge`**

Indicates that the lock is not connected to a bridge.

***

**`empty_backup_access_code_pool`**

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

***

**`ttlock_lock_not_paired_to_gateway`**

Indicates that the lock is not paired with a gateway.

***

**`subscription_required`**

Indicates that a subscription is required to connect.

***

**`missing_device_credentials`**

Indicates that device credentials are missing.

***

**`lockly_missing_wifi_bridge`**

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

***

**`hub_disconnected`**

Indicates that the hub is disconnected.

***

**`device_removed`**

Indicates that the device has been removed.

***

**`device_offline`**

Indicates that the device is offline.

***

**`device_disconnected`**

Indicates that the device is disconnected.

***

**`account_disconnected`**

Indicates that the account is disconnected.

***

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge/), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

***

## Warnings

**`device_communication_degraded`**

Indicates that the device appears to be unresponsive.

***

**`device_has_flaky_connection`**

Indicates that the device has a flaky connection.

***

**`functional_offline_device`**

Indicates that the device is offline but has some functionality available.

***

**`hub_required_for_addtional_capabilities`**

Indicates that a hub or relay must be connected to unlock additional capabilities such as remote unlock.

***

**`lockly_time_zone_not_configured`**

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

***

**`many_active_backup_codes`**

Indicates that there are too many backup codes.

***

**`partial_backup_access_code_pool`**

Indicates that the backup access code is unhealthy.

***

**`power_saving_mode`**

Indicates that the device is in power saving mode and may have limited functionality.

***

**`salto_ks_office_mode`**

Indicates that the Salto KS lock is in Office Mode. Access Codes will not unlock doors.

***

**`salto_ks_privacy_mode`**

Indicates that the Salto KS lock is in Privacy Mode. Access Codes will not unlock doors.

***

**`salto_ks_subscription_limit_almost_reached`**

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

***

**`scheduled_maintenance_window`**

Indicates that a scheduled maintenance window has been detected.

***

**`third_party_integration_detected`**

Indicates that a third-party integration has been detected.

***

**`ttlock_lock_gateway_unlocking_not_enabled`**

Indicates that the Remote Unlock feature is not enabled in the settings."

***

**`ttlock_weak_gateway_signal`**

Indicates that the gateway signal is weak.

***

**`wyze_device_missing_gateway`**

Indicates that the Wyze Lock is not connected to a gateway.

***

## Events

**`lock.locked`**

A [lock](https://docs.seam.co/latest/capability-guides/smart-locks) was locked.

<details>

<summary>Properties</summary>

**`access_code_id`** _UUID_

ID of the access code that was used to lock the device.

**`action_attempt_id`** _UUID_

ID of the action attempt associated with the lock action.

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `lock.locked`

**`method`** _Enum_

Method by which the affected lock device was locked. When the method is `keycode`, the `access_code_id` indicates the access code that was used, if reported by the device.

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

**`lock.unlocked`**

A [lock](https://docs.seam.co/latest/capability-guides/smart-locks) was unlocked.

<details>

<summary>Properties</summary>

**`access_code_id`** _UUID_

ID of the access code that was used to unlock the affected device.

**`action_attempt_id`** _UUID_

ID of the action attempt associated with the unlock action.

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `lock.unlocked`

**`method`** _Enum_

Method by which the affected lock device was unlocked. When the method is `keycode`, the `access_code_id` indicates the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that was used, if reported by the device.

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

**`lock.access_denied`**

The [lock](https://docs.seam.co/latest/capability-guides/smart-locks) denied access to a user after one or more consecutive invalid attempts to unlock the device.

<details>

<summary>Properties</summary>

**`access_code_id`** _UUID_

ID of the access code that was used in the unlock attempts.

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `lock.access_denied`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

## Endpoints

[**`/locks/get`**](get.md)

Returns a specified [lock](https://docs.seam.co/latest/capability-guides/smart-locks).

[**`/locks/list`**](list.md)

Returns a list of all [locks](https://docs.seam.co/latest/capability-guides/smart-locks).

[**`/locks/lock_door`**](lock_door.md)

Locks a [lock](https://docs.seam.co/latest/capability-guides/smart-locks). See also [Locking and Unlocking Smart Locks](https://docs.seam.co/latest/capability-guides/smart-locks/lock-and-unlock).

[**`/locks/unlock_door`**](unlock_door.md)

Unlocks a [lock](https://docs.seam.co/latest/capability-guides/smart-locks). See also [Locking and Unlocking Smart Locks](https://docs.seam.co/latest/capability-guides/smart-locks/lock-and-unlock).
