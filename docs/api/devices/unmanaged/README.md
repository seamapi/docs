# Unmanaged Devices

## The unmanaged_device Object

- [Properties](./#properties)
- [unmanaged_device.properties](./#unmanaged_device.properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


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

---
## Properties

**`can_hvac_cool`** *Boolean*





---

**`can_hvac_heat`** *Boolean*





---

**`can_hvac_heat_cool`** *Boolean*





---

**`can_program_offline_access_codes`** *Boolean*





---

**`can_program_online_access_codes`** *Boolean*





---

**`can_program_thermostat_programs_as_different_each_day`** *Boolean*





---

**`can_program_thermostat_programs_as_same_each_day`** *Boolean*





---

**`can_program_thermostat_programs_as_weekday_weekend`** *Boolean*





---

**`can_remotely_lock`** *Boolean*





---

**`can_remotely_unlock`** *Boolean*





---

**`can_run_thermostat_programs`** *Boolean*





---

**`can_simulate_connection`** *Boolean*





---

**`can_simulate_disconnection`** *Boolean*





---

**`can_simulate_hub_connection`** *Boolean*





---

**`can_simulate_hub_disconnection`** *Boolean*





---

**`can_simulate_paid_subscription`** *Boolean*





---

**`can_simulate_removal`** *Boolean*





---

**`can_turn_off_hvac`** *Boolean*





---

**`can_unlock_with_code`** *Boolean*





---

**`capabilities_supported`** *List* *of Enums*

Collection of capabilities that the device supports when connected to Seam. Values are `access_code`, which indicates that the device can manage and utilize digital PIN codes for secure access; `lock`, which indicates that the device controls a door locking mechanism, enabling the remote opening and closing of doors and other entry points; `noise_detection`, which indicates that the device supports monitoring and responding to ambient noise levels; `thermostat`, which indicates that the device can regulate and adjust indoor temperatures; `battery`, which indicates that the device can manage battery life and health; and `phone`, which indicates that the device is a mobile device, such as a smartphone. **Important:** Superseded by [capability flags](../../../capability-guides/device-and-system-capabilities.md#capability-flags).




---

**`connected_account_id`** *UUID*

Unique identifier for the account associated with the device.




---

**`created_at`** *Datetime*

Date and time at which the device object was created.




---

**`custom_metadata`** *Record*

Set of key:value pairs. Adding custom metadata to a resource, such as a [Connect Webview](../../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), [connected account](../../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md), or [device](../../../core-concepts/devices/adding-custom-metadata-to-a-device.md), enables you to store custom information, like customer details or internal IDs from your application.




---

**`device_id`** *UUID*

ID of the device.




---

**`device_type`** *Enum*

Type of the device.


<details>
<summary>Enum values</summary>

- <code>akuvox_lock</code>
- <code>august_lock</code>
- <code>brivo_access_point</code>
- <code>butterflymx_panel</code>
- <code>avigilon_alta_entry</code>
- <code>doorking_lock</code>
- <code>genie_door</code>
- <code>igloo_lock</code>
- <code>linear_lock</code>
- <code>lockly_lock</code>
- <code>kwikset_lock</code>
- <code>nuki_lock</code>
- <code>salto_lock</code>
- <code>schlage_lock</code>
- <code>seam_relay</code>
- <code>smartthings_lock</code>
- <code>wyze_lock</code>
- <code>yale_lock</code>
- <code>two_n_intercom</code>
- <code>controlbyweb_device</code>
- <code>ttlock_lock</code>
- <code>igloohome_lock</code>
- <code>hubitat_lock</code>
- <code>four_suites_door</code>
- <code>dormakaba_oracode_door</code>
- <code>tedee_lock</code>
- <code>akiles_lock</code>
- <code>ultraloq_lock</code>
- <code>keynest_key</code>
- <code>noiseaware_activity_zone</code>
- <code>minut_sensor</code>
- <code>ecobee_thermostat</code>
- <code>nest_thermostat</code>
- <code>honeywell_resideo_thermostat</code>
- <code>tado_thermostat</code>
- <code>sensi_thermostat</code>
- <code>smartthings_thermostat</code>
- <code>ios_phone</code>
- <code>android_phone</code>
</details>


---

[**`errors`**](./#errors) *List* *of Objects*

Array of errors associated with the device. Each error object within the array contains two fields: `error_code` and `message`. `error_code` is a string that uniquely identifies the type of error, enabling quick recognition and categorization of the issue. `message` provides a more detailed description of the error, offering insights into the issue and potentially how to rectify it.




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>account_disconnected</code></summary>

Indicates that the account is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>account_disconnected</code>
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is not a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the Salto site user limit has been reached.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_exceeded</code>
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is not a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_offline</code></summary>

Indicates that the device is offline.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_offline</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_removed</code></summary>

Indicates that the device has been removed.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_removed</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>hub_disconnected</code></summary>

Indicates that the hub is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>hub_disconnected</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_disconnected</code></summary>

Indicates that the device is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_disconnected</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>empty_backup_access_code_pool</code></summary>

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>empty_backup_access_code_pool</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_not_authorized</code></summary>

Indicates that the user is not authorized to use the August lock.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_not_authorized</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_missing_bridge</code></summary>

Indicates that the lock is not connected to a bridge.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_missing_bridge</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>ttlock_lock_not_paired_to_gateway</code></summary>

Indicates that the lock is not paired with a gateway.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ttlock_lock_not_paired_to_gateway</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>missing_device_credentials</code></summary>

Indicates that device credentials are missing.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>missing_device_credentials</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>auxiliary_heat_running</code></summary>

Indicates that the auxiliary heat is running.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>auxiliary_heat_running</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>subscription_required</code></summary>

Indicates that a subscription is required to connect.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>subscription_required</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>lockly_missing_wifi_bridge</code></summary>

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>lockly_missing_wifi_bridge</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>bridge_disconnected</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  Indicates whether the error is related to [Seam Bridge](../../../capability-guides/seam-bridge.md).
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates whether the error is related specifically to the connected account.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`is_managed`** *Boolean*





---

[**`warnings`**](./#warnings) *List* *of Objects*

Array of warnings associated with the device. Each warning object within the array contains two fields: `warning_code` and `message`. `warning_code` is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue. `message` provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>partial_backup_access_code_pool</code></summary>

Indicates that the backup access code is unhealthy.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>partial_backup_access_code_pool</code>
  
  
</details>
<details>
<summary><code>many_active_backup_codes</code></summary>

Indicates that there are too many backup codes.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>many_active_backup_codes</code>
  
  
</details>
<details>
<summary><code>wyze_device_missing_gateway</code></summary>

Indicates that the Wyze Lock is not connected to a gateway.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>wyze_device_missing_gateway</code>
  
  
</details>
<details>
<summary><code>third_party_integration_detected</code></summary>

Indicates that a third-party integration has been detected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>third_party_integration_detected</code>
  
  
</details>
<details>
<summary><code>ttlock_lock_gateway_unlocking_not_enabled</code></summary>

Indicates that the Remote Unlock feature is not enabled in the settings."

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ttlock_lock_gateway_unlocking_not_enabled</code>
  
  
</details>
<details>
<summary><code>ttlock_weak_gateway_signal</code></summary>

Indicates that the gateway signal is weak.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ttlock_weak_gateway_signal</code>
  
  
</details>
<details>
<summary><code>power_saving_mode</code></summary>

Indicates that the device is in power saving mode and may have limited functionality.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>power_saving_mode</code>
  
  
</details>
<details>
<summary><code>temperature_threshold_exceeded</code></summary>

Indicates that the temperature threshold has been exceeded.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>temperature_threshold_exceeded</code>
  
  
</details>
<details>
<summary><code>device_communication_degraded</code></summary>

Indicates that the device appears to be unresponsive.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_communication_degraded</code>
  
  
</details>
<details>
<summary><code>scheduled_maintenance_window</code></summary>

Indicates that a scheduled maintenance window has been detected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>scheduled_maintenance_window</code>
  
  
</details>
<details>
<summary><code>device_has_flaky_connection</code></summary>

Indicates that the device has a flaky connection.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_has_flaky_connection</code>
  
  
</details>
<details>
<summary><code>salto_ks_office_mode</code></summary>

Indicates that the Salto KS lock is in Office Mode. Access Codes will not unlock doors.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_office_mode</code>
  
  
</details>
<details>
<summary><code>salto_ks_privacy_mode</code></summary>

Indicates that the Salto KS lock is in Privacy Mode. Access Codes will not unlock doors.

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
<details>
<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_almost_reached</code>
  
  
</details>
<details>
<summary><code>unknown_issue_with_phone</code></summary>

Indicates that an unknown issue occurred while syncing the state of the phone with the provider. This issue may affect the proper functioning of the phone.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>unknown_issue_with_phone</code>
  
  
</details>
<details>
<summary><code>lockly_time_zone_not_configured</code></summary>

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>lockly_time_zone_not_configured</code>
  
  
</details>
<details>
<summary><code>ultraloq_time_zone_unknown</code></summary>

Indicates that Seam does not know the time zone of the Ultraloq device. Set a time zone to enable time-bound access codes.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ultraloq_time_zone_unknown</code>
  
  
</details>
<details>
<summary><code>hub_required_for_addtional_capabilities</code></summary>

Indicates that a hub or relay must be connected to unlock additional capabilities such as remote unlock.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>hub_required_for_addtional_capabilities</code>
  
  
</details>
<details>
<summary><code>keynest_unsupported_locker</code></summary>

Indicates that the key is in a locker that does not support the access codes API.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>keynest_unsupported_locker</code>
  
  
</details>
<details>
<summary><code>accessory_keypad_setup_required</code></summary>

Indicates that the accessory keypad exists, but is not linked to the Igloohome Bridge. Online access code programming will fail until the keypad is linked to the Igloohome Bridge in the Igloohome app.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>accessory_keypad_setup_required</code>
  
  
</details>

---

**`workspace_id`** *UUID*

Unique identifier for the Seam workspace associated with the device.




---

## Hardware
**`location`** *Object*

Location information for the device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>location_name</code></strong> <i>String</i>
  
    Name of the device location.

  - <strong><code>timezone</code></strong> <i>String</i>
  
    Time zone of the device location.

</details>

---


## unmanaged_device.properties

**`model`** *Object*

Device model-related properties.



<details>
  <summary>Child Properties</summary>

  - <strong><code>accessory_keypad_supported</code></strong> <i>Boolean</i>
  
  {% hint style="warning" %}
  **Deprecated**. use device.properties.model.can_connect_accessory_keypad
  {% endhint %}

  - <strong><code>can_connect_accessory_keypad</code></strong> <i>Boolean</i>
  
    Indicates whether the device can connect a accessory keypad.

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name of the device model.

  - <strong><code>has_built_in_keypad</code></strong> <i>Boolean</i>
  
    Indicates whether the device has a built in accessory keypad.

  - <strong><code>manufacturer_display_name</code></strong> <i>String</i>
  
    Display name that corresponds to the manufacturer-specific terminology for the device.

  - <strong><code>offline_access_codes_supported</code></strong> <i>Boolean</i>
  
  {% hint style="warning" %}
  **Deprecated**. use device.can_program_offline_access_codes.
  {% endhint %}

  - <strong><code>online_access_codes_supported</code></strong> <i>Boolean</i>
  
  {% hint style="warning" %}
  **Deprecated**. use device.can_program_online_access_codes.
  {% endhint %}

</details>

---

**`name`** *String*

Name of the device.

{% hint style="warning" %}
**Deprecated**. use device.display_name instead
{% endhint %}



---

**`online`** *Boolean*

Indicates whether the device is online.




---

## access codes
**`offline_access_codes_enabled`** *Boolean*

Indicates whether it is currently possible to use offline access codes for the device.

{% hint style="warning" %}
**Deprecated**. use device.can_program_offline_access_codes
{% endhint %}



---

**`online_access_codes_enabled`** *Boolean*

Indicates whether it is currently possible to use online access codes for the device.

{% hint style="warning" %}
**Deprecated**. use device.can_program_online_access_codes
{% endhint %}



---

## hardware
**`accessory_keypad`** *Object*

Accessory keypad properties and state.



<details>
  <summary>Child Properties</summary>

  - <strong><code>battery</code></strong> <i>Object</i>
  
    Keypad battery properties.

  - <strong><code>battery.level</code></strong> <i>Number</i>

  - <strong><code>is_connected</code></strong> <i>Boolean</i>
  
    Indicates if an accessory keypad is connected to the device.

</details>

---

**`battery`** *Object*

Represents the current status of the battery charge level.



<details>
  <summary>Child Properties</summary>

  - <strong><code>level</code></strong> <i>Number</i>
  
    Battery charge level as a value between 0 and 1, inclusive.

  - <strong><code>status</code></strong> <i>Enum</i>
  
    Represents the current status of the battery charge level. Values are `critical`, which indicates an extremely low level, suggesting imminent shutdown or an urgent need for charging; `low`, which signifies that the battery is under the preferred threshold and should be charged soon; `good`, which denotes a satisfactory charge level, adequate for normal use without the immediate need for recharging; and `full`, which represents a battery that is fully charged, providing the maximum duration of usage.
  <details>
      <summary>Enum values:</summary>
  
      - <code>critical</code>
      - <code>low</code>
      - <code>good</code>
      - <code>full</code>
  </details>

</details>

---

**`battery_level`** *Number*

Indicates the battery level of the device as a decimal value between 0 and 1, inclusive.




---

**`image_alt_text`** *String*

Alt text for the device image.




---

**`image_url`** *String*

Image URL for the device.




---

**`manufacturer`** *String*

Manufacturer of the device. When a device, such as a smart lock, is connected through a smart hub, the manufacturer of the device might be different from that of the smart hub.




---


## Errors

**`account_disconnected`**

Indicates that the account is disconnected.

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

**`device_disconnected`**

Indicates that the device is disconnected.

---

**`device_offline`**

Indicates that the device is offline.

---

**`device_removed`**

Indicates that the device has been removed.

---

**`hub_disconnected`**

Indicates that the hub is disconnected.

---

**`lockly_missing_wifi_bridge`**

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

---

**`missing_device_credentials`**

Indicates that device credentials are missing.

---

**`subscription_required`**

Indicates that a subscription is required to connect.

---

**`ttlock_lock_not_paired_to_gateway`**

Indicates that the lock is not paired with a gateway.

---

### Access Codes
**`empty_backup_access_code_pool`**

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

---

### Locks
**`august_lock_missing_bridge`**

Indicates that the lock is not connected to a bridge.

---

**`august_lock_not_authorized`**

Indicates that the user is not authorized to use the August lock.

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the Salto site user limit has been reached.

---

### Thermostats
**`auxiliary_heat_running`**

Indicates that the auxiliary heat is running.

---


## Warnings

**`device_communication_degraded`**

Indicates that the device appears to be unresponsive.

---

**`device_has_flaky_connection`**

Indicates that the device has a flaky connection.

---

**`lockly_time_zone_not_configured`**

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

---

**`salto_ks_subscription_limit_almost_reached`**

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

---

**`scheduled_maintenance_window`**

Indicates that a scheduled maintenance window has been detected.

---

**`third_party_integration_detected`**

Indicates that a third-party integration has been detected.

---

**`ttlock_weak_gateway_signal`**

Indicates that the gateway signal is weak.

---

**`ultraloq_time_zone_unknown`**

Indicates that Seam does not know the time zone of the Ultraloq device. Set a time zone to enable time-bound access codes.

---

**`wyze_device_missing_gateway`**

Indicates that the Wyze Lock is not connected to a gateway.

---

### Access Codes
**`many_active_backup_codes`**

Indicates that there are too many backup codes.

---

**`partial_backup_access_code_pool`**

Indicates that the backup access code is unhealthy.

---

**`salto_ks_office_mode`**

Indicates that the Salto KS lock is in Office Mode. Access Codes will not unlock doors.

---

**`salto_ks_privacy_mode`**

Indicates that the Salto KS lock is in Privacy Mode. Access Codes will not unlock doors.

---

### Locks
**`accessory_keypad_setup_required`**

Indicates that the accessory keypad exists, but is not linked to the Igloohome Bridge. Online access code programming will fail until the keypad is linked to the Igloohome Bridge in the Igloohome app.

---

**`hub_required_for_addtional_capabilities`**

Indicates that a hub or relay must be connected to unlock additional capabilities such as remote unlock.

---

**`keynest_unsupported_locker`**

Indicates that the key is in a locker that does not support the access codes API.

---

**`power_saving_mode`**

Indicates that the device is in power saving mode and may have limited functionality.

---

**`ttlock_lock_gateway_unlocking_not_enabled`**

Indicates that the Remote Unlock feature is not enabled in the settings."

---

### Phones
**`unknown_issue_with_phone`**

Indicates that an unknown issue occurred while syncing the state of the phone with the provider. This issue may affect the proper functioning of the phone.

---

### Thermostats
**`temperature_threshold_exceeded`**

Indicates that the temperature threshold has been exceeded.

---


## Events

**`device.unmanaged.converted_to_managed`**

An [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md) was successfully converted to a managed device.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `device.unmanaged.converted_to_managed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`device.unmanaged.connected`**

The status of an [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md) changed from offline to online. That is, the `device.properties.online` property changed from `false` to `true`.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `device.unmanaged.connected`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`device.unmanaged.disconnected`**

The status of an [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md) changed from online to offline. That is, the `device.properties.online` property changed from `true` to `false`.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>error_code</code></strong> <i>Enum</i>

  Error code associated with the disconnection event, if any.
<details>
    <summary>Enum values:</summary>

    - <code>account_disconnected</code>
    - <code>hub_disconnected</code>
    - <code>device_disconnected</code>
</details>

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `device.unmanaged.disconnected`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/devices/unmanaged/get`**](./get.md)

Returns a specified [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md).


[**`/devices/unmanaged/list`**](./list.md)

Returns a list of all [unmanaged devices](../../../core-concepts/devices/managed-and-unmanaged-devices.md).


[**`/devices/unmanaged/update`**](./update.md)

Updates a specified [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md). To convert an unmanaged device to managed, set `is_managed` to `true`.


