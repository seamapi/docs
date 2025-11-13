# Unmanaged Devices

## The unmanaged\_device Object

* [Properties](./#properties)
* [unmanaged\_device.properties](./#unmanaged_device.properties)
* [Errors](./#errors)
* [Warnings](./#warnings)
* [Events](./#events)
* [Endpoints](./#endpoints)

Represents an [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md). An unmanaged device has a limited set of visible properties and a subset of supported events. You cannot control an unmanaged device. Any [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) on an unmanaged device are unmanaged. To control an unmanaged device with Seam, [convert it to a managed device](../../../core-concepts/devices/managed-and-unmanaged-devices.md#convert-an-unmanaged-device-to-managed).

{% tabs %}
{% tab title="Unmanaged Device" %}
An unmanaged device resource.

```json
{
  "can_program_offline_access_codes": false,
  "can_program_online_access_codes": true,
  "can_remotely_lock": true,
  "can_remotely_unlock": true,
  "can_simulate_connection": false,
  "can_simulate_disconnection": true,
  "can_simulate_removal": true,
  "capabilities_supported": ["access_code", "lock"],
  "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
  "created_at": "2025-06-16T16:54:17.946342Z",
  "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
  "device_type": "schlage_lock",
  "errors": [],
  "is_managed": false,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
  "custom_metadata": { "id": "internalId1" },
  "properties": {
    "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
    "battery": { "level": 1, "status": "full" },
    "battery_level": 1,
    "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
    "manufacturer": "schlage",
    "model": {
      "accessory_keypad_supported": true,
      "can_connect_accessory_keypad": true,
      "display_name": "Front Door",
      "has_built_in_keypad": false,
      "manufacturer_display_name": "Schlage",
      "offline_access_codes_supported": false,
      "online_access_codes_supported": true
    },
    "name": "Front Door",
    "offline_access_codes_enabled": false,
    "online": true,
    "online_access_codes_enabled": true
  },
  "warnings": [],
  "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
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

Collection of capabilities that the device supports when connected to Seam. Values are `access_code`, which indicates that the device can manage and utilize digital PIN codes for secure access; `lock`, which indicates that the device controls a door locking mechanism, enabling the remote opening and closing of doors and other entry points; `noise_detection`, which indicates that the device supports monitoring and responding to ambient noise levels; `thermostat`, which indicates that the device can regulate and adjust indoor temperatures; `battery`, which indicates that the device can manage battery life and health; and `phone`, which indicates that the device is a mobile device, such as a smartphone. **Important:** Superseded by [capability flags](../../../capability-guides/device-and-system-capabilities.md#capability-flags).

***

**`connected_account_id`** _UUID_

Unique identifier for the account associated with the device.

***

**`created_at`** _Datetime_

Date and time at which the device object was created.

***

**`custom_metadata`** _Record_

Set of key:value pairs. Adding custom metadata to a resource, such as a [Connect Webview](../../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), [connected account](../../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md), or [device](../../../core-concepts/devices/adding-custom-metadata-to-a-device.md), enables you to store custom information, like customer details or internal IDs from your application.

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

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `bridge_disconnected`

***

**`is_bridge_error`** _Boolean_

Indicates whether the error is related to [Seam Bridge](../../../capability-guides/seam-bridge.md).

***

**`is_connected_account_error`** _Boolean_

Indicates whether the error is related specifically to the connected account.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

***

**`is_managed`** _Boolean_

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

## Hardware

**`location`** _Object_

Location information for the device.

<details>

<summary>Child Properties</summary>

*   **`location_name`** _String_

    Name of the device location.
*   **`timezone`** _String_

    Time zone of the device location.

</details>

***

## unmanaged\_device.properties

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

**`online`** _Boolean_

Indicates whether the device is online.

***

## access codes

**`offline_access_codes_enabled`** _Boolean_

Indicates whether it is currently possible to use offline access codes for the device.

{% hint style="warning" %}
**Deprecated**. use device.can\_program\_offline\_access\_codes
{% endhint %}

***

**`online_access_codes_enabled`** _Boolean_

Indicates whether it is currently possible to use online access codes for the device.

{% hint style="warning" %}
**Deprecated**. use device.can\_program\_online\_access\_codes
{% endhint %}

***

## hardware

**`accessory_keypad`** _Object_

Accessory keypad properties and state.

<details>

<summary>Child Properties</summary>

*   **`battery`** _Object_

    Keypad battery properties.
* **`battery.level`** _Number_
*   **`is_connected`** _Boolean_

    Indicates if an accessory keypad is connected to the device.

</details>

***

**`battery`** _Object_

Represents the current status of the battery charge level.

<details>

<summary>Child Properties</summary>

*   **`level`** _Number_

    Battery charge level as a value between 0 and 1, inclusive.
*   **`status`** _Enum_

    Represents the current status of the battery charge level. Values are `critical`, which indicates an extremely low level, suggesting imminent shutdown or an urgent need for charging; `low`, which signifies that the battery is under the preferred threshold and should be charged soon; `good`, which denotes a satisfactory charge level, adequate for normal use without the immediate need for recharging; and `full`, which represents a battery that is fully charged, providing the maximum duration of usage.

</details>

***

**`battery_level`** _Number_

Indicates the battery level of the device as a decimal value between 0 and 1, inclusive.

***

**`image_alt_text`** _String_

Alt text for the device image.

***

**`image_url`** _String_

Image URL for the device.

***

**`manufacturer`** _String_

Manufacturer of the device. When a device, such as a smart lock, is connected through a smart hub, the manufacturer of the device might be different from that of the smart hub.

***

## Errors

**`account_disconnected`**

Indicates that the account is disconnected.

***

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

***

**`device_disconnected`**

Indicates that the device is disconnected.

***

**`device_offline`**

Indicates that the device is offline.

***

**`device_removed`**

Indicates that the device has been removed.

***

**`hub_disconnected`**

Indicates that the hub is disconnected.

***

**`lockly_missing_wifi_bridge`**

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

***

**`missing_device_credentials`**

Indicates that device credentials are missing.

***

**`subscription_required`**

Indicates that a subscription is required to connect.

***

**`ttlock_lock_not_paired_to_gateway`**

Indicates that the lock is not paired with a gateway.

***

### Access Codes

**`empty_backup_access_code_pool`**

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

***

### Locks

**`august_lock_missing_bridge`**

Indicates that the lock is not connected to a bridge.

***

**`august_lock_not_authorized`**

Indicates that the user is not authorized to use the August lock.

***

**`salto_ks_subscription_limit_exceeded`**

Indicates that the Salto site user limit has been reached.

***

### Thermostats

**`auxiliary_heat_running`**

Indicates that the auxiliary heat is running.

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

**`lockly_time_zone_not_configured`**

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

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

**`ttlock_weak_gateway_signal`**

Indicates that the gateway signal is weak.

***

**`wyze_device_missing_gateway`**

Indicates that the Wyze Lock is not connected to a gateway.

***

### Access Codes

**`many_active_backup_codes`**

Indicates that there are too many backup codes.

***

**`partial_backup_access_code_pool`**

Indicates that the backup access code is unhealthy.

***

**`salto_ks_office_mode`**

Indicates that the Salto KS lock is in Office Mode. Access Codes will not unlock doors.

***

**`salto_ks_privacy_mode`**

Indicates that the Salto KS lock is in Privacy Mode. Access Codes will not unlock doors.

***

### Locks

**`hub_required_for_addtional_capabilities`**

Indicates that a hub or relay must be connected to unlock additional capabilities such as remote unlock.

***

**`power_saving_mode`**

Indicates that the device is in power saving mode and may have limited functionality.

***

**`ttlock_lock_gateway_unlocking_not_enabled`**

Indicates that the Remote Unlock feature is not enabled in the settings."

***

### Phones

**`unknown_issue_with_phone`**

Indicates that an unknown issue occurred while syncing the state of the phone with the provider. This issue may affect the proper functioning of the phone.

***

### Thermostats

**`temperature_threshold_exceeded`**

Indicates that the temperature threshold has been exceeded.

***

## Events

**`device.unmanaged.converted_to_managed`**

An [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md) was successfully converted to a managed device.

<details>

<summary>Properties</summary>

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `device.unmanaged.converted_to_managed`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) associated with the event.

</details>

***

**`device.unmanaged.connected`**

The status of an [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md) changed from offline to online. That is, the `device.properties.online` property changed from `false` to `true`.

<details>

<summary>Properties</summary>

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `device.unmanaged.connected`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) associated with the event.

</details>

***

**`device.unmanaged.disconnected`**

The status of an [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md) changed from online to offline. That is, the `device.properties.online` property changed from `true` to `false`.

<details>

<summary>Properties</summary>

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`error_code`** _Enum_

Error code associated with the disconnection event, if any.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `device.unmanaged.disconnected`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) associated with the event.

</details>

***

## Endpoints

[**`/devices/unmanaged/get`**](get.md)

Returns a specified [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md).

[**`/devices/unmanaged/list`**](list.md)

Returns a list of all [unmanaged devices](../../../core-concepts/devices/managed-and-unmanaged-devices.md).

[**`/devices/unmanaged/update`**](update.md)

Updates a specified [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md). To convert an unmanaged device to managed, set `is_managed` to `true`.
