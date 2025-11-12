# Locks

## The device Object for Locks

- [Properties](./#properties)
- [device.properties](./#device.properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)

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

Collection of capabilities that the device supports when connected to Seam. Values are `access_code`, which indicates that the device can manage and utilize digital PIN codes for secure access; `lock`, which indicates that the device controls a door locking mechanism, enabling the remote opening and closing of doors and other entry points; `noise_detection`, which indicates that the device supports monitoring and responding to ambient noise levels; `thermostat`, which indicates that the device can regulate and adjust indoor temperatures; `battery`, which indicates that the device can manage battery life and health; and `phone`, which indicates that the device is a mobile device, such as a smartphone. **Important:** Superseded by [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags).




---

**`connected_account_id`** *UUID*

Unique identifier for the account associated with the device.




---

**`created_at`** *Datetime*

Date and time at which the device object was created.




---

**`custom_metadata`** *Record*

Set of key:value pairs. Adding custom metadata to a resource, such as a [Connect Webview](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), [connected account](../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md), or [device](../../core-concepts/devices/adding-custom-metadata-to-a-device.md), enables you to store custom information, like customer details or internal IDs from your application.




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

**`display_name`** *String*

Display name of the device, defaults to nickname (if it is set) or `properties.appearance.name`, otherwise. Enables administrators and users to identify the device easily, especially when there are numerous devices.




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

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>bridge_disconnected</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  Indicates whether the error is related to [Seam Bridge](../../capability-guides/seam-bridge.md).
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates whether the error is related specifically to the connected account.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`is_managed`** *Boolean*

Indicates whether Seam manages the device. See also [Managed and Unmanaged Devices](../../core-concepts/devices/managed-and-unmanaged-devices.md).




---

**`nickname`** *String*

Optional nickname to describe the device, settable through Seam.




---

**`space_ids`** *List* *of UUIDs*

IDs of the spaces the device is in.




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
<summary><code>functional_offline_device</code></summary>

Indicates that the device is offline but has some functionality available.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>functional_offline_device</code>
  
  
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

---

**`workspace_id`** *UUID*

Unique identifier for the Seam workspace associated with the device.




---


## device.properties

**`akiles_metadata`** *Object*

Metadata for an Akiles device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>_member_group_id</code></strong> <i>String</i>
  
    Group ID to which to add users for an Akiles device.

  - <strong><code>gadget_id</code></strong> <i>String</i>
  
    Gadget ID for an Akiles device.

  - <strong><code>gadget_name</code></strong> <i>String</i>
  
    Gadget name for an Akiles device.

  - <strong><code>product_name</code></strong> <i>String</i>
  
    Product name for an Akiles device.

</details>

---

**`assa_abloy_credential_service_metadata`** *Object*

ASSA ABLOY Credential Service metadata for the phone.



<details>
  <summary>Child Properties</summary>

  - <strong><code>endpoints</code></strong> <i>List</i> <i>of Objects</i>
  
    Endpoints associated with the phone.

- <strong><code>endpoint_id</code></strong> <i>String</i>

  ID of the associated endpoint.


- <strong><code>is_active</code></strong> <i>Boolean</i>

  Indicated whether the endpoint is active.


  - <strong><code>has_active_endpoint</code></strong> <i>Boolean</i>
  
    Indicates whether the credential service has active endpoints associated with the phone.

</details>

---

**`assa_abloy_vostio_metadata`** *Object*

Metadata for an ASSA ABLOY Vostio system.



<details>
  <summary>Child Properties</summary>

  - <strong><code>encoder_name</code></strong> <i>String</i>
  
    Encoder name for an ASSA ABLOY Vostio system.

</details>

---

**`august_metadata`** *Object*

Metadata for an August device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>has_keypad</code></strong> <i>Boolean</i>
  
    Indicates whether an August device has a keypad.

  - <strong><code>house_id</code></strong> <i>String</i>
  
    House ID for an August device.

  - <strong><code>house_name</code></strong> <i>String</i>
  
    House name for an August device.

  - <strong><code>keypad_battery_level</code></strong> <i>String</i>
  
    Keypad battery level for an August device.

  - <strong><code>lock_id</code></strong> <i>String</i>
  
    Lock ID for an August device.

  - <strong><code>lock_name</code></strong> <i>String</i>
  
    Lock name for an August device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for an August device.

</details>

---

**`avigilon_alta_metadata`** *Object*

Metadata for an Avigilon Alta system.



<details>
  <summary>Child Properties</summary>

  - <strong><code>entry_name</code></strong> <i>String</i>
  
    Entry name for an Avigilon Alta system.

  - <strong><code>entry_relays_total_count</code></strong> <i>Number</i>
  
    Total count of entry relays for an Avigilon Alta system.

  - <strong><code>org_name</code></strong> <i>String</i>
  
    Organization name for an Avigilon Alta system.

  - <strong><code>site_id</code></strong> <i>Number</i>
  
    Site ID for an Avigilon Alta system.

  - <strong><code>site_name</code></strong> <i>String</i>
  
    Site name for an Avigilon Alta system.

  - <strong><code>zone_id</code></strong> <i>Number</i>
  
    Zone ID for an Avigilon Alta system.

  - <strong><code>zone_name</code></strong> <i>String</i>
  
    Zone name for an Avigilon Alta system.

</details>

---

**`brivo_metadata`** *Object*

Metadata for a Brivo device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>activation_enabled</code></strong> <i>Boolean</i>
  
    Indicates whether the Brivo access point has activation (remote unlock) enabled.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Brivo device.

</details>

---

**`code_constraints`** *List* *of Objects*

Constraints on access codes for the device. Seam represents each constraint as an object with a `constraint_type` property. Depending on the constraint type, there may also be additional properties. Note that some constraints are manufacturer- or device-specific.



<details>
  <summary>Child Object Properties</summary>
<strong><code>constraint_type</code></strong> <i>Enum</i>
<details>
    <summary>Enum values:</summary>

    - <code>no_zeros</code>
    - <code>cannot_start_with_12</code>
    - <code>no_triple_consecutive_ints</code>
    - <code>cannot_specify_pin_code</code>
    - <code>pin_code_matches_existing_set</code>
    - <code>start_date_in_future</code>
    - <code>no_ascending_or_descending_sequence</code>
    - <code>at_least_three_unique_digits</code>
    - <code>cannot_contain_089</code>
    - <code>cannot_contain_0789</code>
    - <code>unique_first_four_digits</code>
    - <code>name_length</code>
    - <code>name_must_be_unique</code>
</details>

<strong><code>max_length</code></strong> <i>Number</i>

  Maximum name length constraint for access codes.

<strong><code>min_length</code></strong> <i>Number</i>

  Minimum name length constraint for access codes.

</details>

---

**`controlbyweb_metadata`** *Object*

Metadata for a ControlByWeb device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a ControlByWeb device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a ControlByWeb device.

  - <strong><code>relay_name</code></strong> <i>String</i>
  
    Relay name for a ControlByWeb device.

</details>

---

**`door_open`** *Boolean*

Indicates whether the door is open.




---

**`dormakaba_oracode_metadata`** *Object*

Metadata for a dormakaba Oracode device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>Object</i>
  
    Device ID for a dormakaba Oracode device.

  - <strong><code>door_id</code></strong> <i>Number</i>
  
    Door ID for a dormakaba Oracode device.

  - <strong><code>door_is_wireless</code></strong> <i>Boolean</i>
  
    Indicates whether a door is wireless for a dormakaba Oracode device.

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Door name for a dormakaba Oracode device.

  - <strong><code>iana_timezone</code></strong> <i>String</i>
  
    IANA time zone for a dormakaba Oracode device.

  - <strong><code>predefined_time_slots</code></strong> <i>List</i> <i>of Objects</i>
  
    Predefined time slots for a dormakaba Oracode device.

- <strong><code>check_in_time</code></strong> <i>String</i>

  Check in time for a time slot for a dormakaba Oracode device.


- <strong><code>check_out_time</code></strong> <i>String</i>

  Checkout time for a time slot for a dormakaba Oracode device.


- <strong><code>dormakaba_oracode_user_level_id</code></strong> <i>UUID</i>

  ID of a user level for a dormakaba Oracode device.


- <strong><code>ext_dormakaba_oracode_user_level_prefix</code></strong> <i>Number</i>

  Prefix for a user level for a dormakaba Oracode device.


- <strong><code>is_24_hour</code></strong> <i>Boolean</i>

  Indicates whether a time slot for a dormakaba Oracode device is a 24-hour time slot.


- <strong><code>is_biweekly_mode</code></strong> <i>Boolean</i>

  Indicates whether a time slot for a dormakaba Oracode device is in biweekly mode.


- <strong><code>is_master</code></strong> <i>Boolean</i>

  Indicates whether a time slot for a dormakaba Oracode device is a master time slot.


- <strong><code>is_one_shot</code></strong> <i>Boolean</i>

  Indicates whether a time slot for a dormakaba Oracode device is a one-shot time slot.


- <strong><code>name</code></strong> <i>String</i>

  Name of a time slot for a dormakaba Oracode device.


- <strong><code>prefix</code></strong> <i>Number</i>

  Prefix for a time slot for a dormakaba Oracode device.


  - <strong><code>site_id</code></strong> <i>Number</i>
  
    Site ID for a dormakaba Oracode device.
  
  {% hint style="warning" %}
  **Deprecated**. Previously marked as "@DEPRECATED."
  {% endhint %}

  - <strong><code>site_name</code></strong> <i>String</i>
  
    Site name for a dormakaba Oracode device.

</details>

---

**`ecobee_metadata`** *Object*

Metadata for an ecobee device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for an ecobee device.

  - <strong><code>ecobee_device_id</code></strong> <i>String</i>
  
    Device ID for an ecobee device.

</details>

---

**`four_suites_metadata`** *Object*

Metadata for a 4SUITES device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>Number</i>
  
    Device ID for a 4SUITES device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a 4SUITES device.

  - <strong><code>reclose_delay_in_seconds</code></strong> <i>Number</i>
  
    Reclose delay, in seconds, for a 4SUITES device.

</details>

---

**`genie_metadata`** *Object*

Metadata for a Genie device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Lock name for a Genie device.

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Door name for a Genie device.

</details>

---

**`has_native_entry_events`** *Boolean*

Indicates whether the device supports native entry events.




---

**`honeywell_resideo_metadata`** *Object*

Metadata for a Honeywell Resideo device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Honeywell Resideo device.

  - <strong><code>honeywell_resideo_device_id</code></strong> <i>String</i>
  
    Device ID for a Honeywell Resideo device.

</details>

---

**`hubitat_metadata`** *Object*

Metadata for a Hubitat device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Hubitat device.

  - <strong><code>device_label</code></strong> <i>String</i>
  
    Device label for a Hubitat device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Hubitat device.

</details>

---

**`igloo_metadata`** *Object*

Metadata for an igloo device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>bridge_id</code></strong> <i>String</i>
  
    Bridge ID for an igloo device.

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for an igloo device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for an igloo device.

</details>

---

**`igloohome_metadata`** *Object*

Metadata for an igloohome device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>bridge_id</code></strong> <i>String</i>
  
    Bridge ID for an igloohome device.

  - <strong><code>bridge_name</code></strong> <i>String</i>
  
    Bridge name for an igloohome device.

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for an igloohome device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for an igloohome device.

  - <strong><code>is_keypad_linked_to_bridge</code></strong> <i>Boolean</i>
  
    Indicates whether a keypad is linked to a bridge for an igloohome device.

  - <strong><code>keypad_id</code></strong> <i>String</i>
  
    Keypad ID for an igloohome device.

</details>

---

**`keynest_metadata`** *Object*

Metadata for a KeyNest device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>address</code></strong> <i>String</i>
  
    Address for a KeyNest device.

  - <strong><code>current_or_last_store_id</code></strong> <i>Number</i>
  
    Current or last store ID for a KeyNest device.

  - <strong><code>current_status</code></strong> <i>String</i>
  
    Current status for a KeyNest device.

  - <strong><code>current_user_company</code></strong> <i>String</i>
  
    Current user company for a KeyNest device.

  - <strong><code>current_user_email</code></strong> <i>String</i>
  
    Current user email for a KeyNest device.

  - <strong><code>current_user_name</code></strong> <i>String</i>
  
    Current user name for a KeyNest device.

  - <strong><code>current_user_phone_number</code></strong> <i>String</i>
  
    Current user phone number for a KeyNest device.

  - <strong><code>default_office_id</code></strong> <i>Number</i>
  
    Default office ID for a KeyNest device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a KeyNest device.

  - <strong><code>fob_id</code></strong> <i>Number</i>
  
    Fob ID for a KeyNest device.

  - <strong><code>handover_method</code></strong> <i>String</i>
  
    Handover method for a KeyNest device.

  - <strong><code>has_photo</code></strong> <i>Boolean</i>
  
    Whether the KeyNest device has a photo.

  - <strong><code>key_id</code></strong> <i>String</i>
  
    Key ID for a KeyNest device.

  - <strong><code>key_notes</code></strong> <i>String</i>
  
    Key notes for a KeyNest device.

  - <strong><code>keynest_app_user</code></strong> <i>String</i>
  
    KeyNest app user for a KeyNest device.

  - <strong><code>last_movement</code></strong> <i>String</i>
  
    Last movement timestamp for a KeyNest device.

  - <strong><code>property_id</code></strong> <i>String</i>
  
    Property ID for a KeyNest device.

  - <strong><code>property_postcode</code></strong> <i>String</i>
  
    Property postcode for a KeyNest device.

  - <strong><code>status_type</code></strong> <i>String</i>
  
    Status type for a KeyNest device.

  - <strong><code>subscription_plan</code></strong> <i>String</i>
  
    Subscription plan for a KeyNest device.

</details>

---

**`keypad_battery`** *Object*

Keypad battery status.



<details>
  <summary>Child Properties</summary>

  - <strong><code>level</code></strong> <i>Number</i>
  
    Keypad battery charge level.

</details>

---

**`kwikset_metadata`** *Object*

Metadata for a Kwikset device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Kwikset device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Kwikset device.

  - <strong><code>model_number</code></strong> <i>String</i>
  
    Model number for a Kwikset device.

</details>

---

**`locked`** *Boolean*

Indicates whether the lock is locked.




---

**`lockly_metadata`** *Object*

Metadata for a Lockly device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Lockly device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Lockly device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a Lockly device.

</details>

---

**`max_active_codes_supported`** *Number*

Maximum number of active access codes that the device supports.




---

**`minut_metadata`** *Object*

Metadata for a Minut device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Minut device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Minut device.

  - <strong><code>latest_sensor_values</code></strong> <i>Object</i>
  
    Latest sensor values for a Minut device.

  - <strong><code>latest_sensor_values.accelerometer_z</code></strong> <i>Object</i>
  
    Latest accelerometer Z-axis reading for a Minut device.

  - <strong><code>latest_sensor_values.accelerometer_z.time</code></strong> <i>String</i>
  
    Time of latest accelerometer Z-axis reading for a Minut device.

  - <strong><code>latest_sensor_values.accelerometer_z.value</code></strong> <i>Number</i>
  
    Value of latest accelerometer Z-axis reading for a Minut device.

  - <strong><code>latest_sensor_values.humidity</code></strong> <i>Object</i>
  
    Latest humidity reading for a Minut device.

  - <strong><code>latest_sensor_values.humidity.time</code></strong> <i>String</i>
  
    Time of latest humidity reading for a Minut device.

  - <strong><code>latest_sensor_values.humidity.value</code></strong> <i>Number</i>
  
    Value of latest humidity reading for a Minut device.

  - <strong><code>latest_sensor_values.pressure</code></strong> <i>Object</i>
  
    Latest pressure reading for a Minut device.

  - <strong><code>latest_sensor_values.pressure.time</code></strong> <i>String</i>
  
    Time of latest pressure reading for a Minut device.

  - <strong><code>latest_sensor_values.pressure.value</code></strong> <i>Number</i>
  
    Value of latest pressure reading for a Minut device.

  - <strong><code>latest_sensor_values.sound</code></strong> <i>Object</i>
  
    Latest sound reading for a Minut device.

  - <strong><code>latest_sensor_values.sound.time</code></strong> <i>String</i>
  
    Time of latest sound reading for a Minut device.

  - <strong><code>latest_sensor_values.sound.value</code></strong> <i>Number</i>
  
    Value of latest sound reading for a Minut device.

  - <strong><code>latest_sensor_values.temperature</code></strong> <i>Object</i>
  
    Latest temperature reading for a Minut device.

  - <strong><code>latest_sensor_values.temperature.time</code></strong> <i>String</i>
  
    Time of latest temperature reading for a Minut device.

  - <strong><code>latest_sensor_values.temperature.value</code></strong> <i>Number</i>
  
    Value of latest temperature reading for a Minut device.

</details>

---

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

**`nest_metadata`** *Object*

Metadata for a Google Nest device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_custom_name</code></strong> <i>String</i>
  
    Custom device name for a Google Nest device. The device owner sets this value.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Google Nest device. Google sets this value.

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for a Google Nest device.

  - <strong><code>nest_device_id</code></strong> <i>String</i>
  
    Device ID for a Google Nest device.

</details>

---

**`noiseaware_metadata`** *Object*

Metadata for a NoiseAware device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a NoiseAware device.

  - <strong><code>device_model</code></strong> <i>Enum</i>
  
    Device model for a NoiseAware device.
  <details>
      <summary>Enum values:</summary>
  
      - <code>indoor</code>
      - <code>outdoor</code>
  </details>

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a NoiseAware device.

  - <strong><code>noise_level_decibel</code></strong> <i>Number</i>
  
    Noise level, in decibels, for a NoiseAware device.

  - <strong><code>noise_level_nrs</code></strong> <i>Number</i>
  
    Noise level, expressed as a Noise Risk Score (NRS), for a NoiseAware device.

</details>

---

**`nuki_metadata`** *Object*

Metadata for a Nuki device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Nuki device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Nuki device.

  - <strong><code>keypad_2_paired</code></strong> <i>Boolean</i>
  
    Indicates whether keypad 2 is paired for a Nuki device.

  - <strong><code>keypad_battery_critical</code></strong> <i>Boolean</i>
  
    Indicates whether the keypad battery is in a critical state for a Nuki device.

  - <strong><code>keypad_paired</code></strong> <i>Boolean</i>
  
    Indicates whether the keypad is paired for a Nuki device.

</details>

---

**`offline_access_codes_enabled`** *Boolean*

Indicates whether it is currently possible to use offline access codes for the device.

{% hint style="warning" %}
**Deprecated**. use device.can_program_offline_access_codes
{% endhint %}



---

**`online`** *Boolean*

Indicates whether the device is online.




---

**`online_access_codes_enabled`** *Boolean*

Indicates whether it is currently possible to use online access codes for the device.

{% hint style="warning" %}
**Deprecated**. use device.can_program_online_access_codes
{% endhint %}



---

**`salto_ks_metadata`** *Object*

Metadata for a Salto KS device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>battery_level</code></strong> <i>String</i>
  
    Battery level for a Salto KS device.

  - <strong><code>customer_reference</code></strong> <i>String</i>
  
    Customer reference for a Salto KS device.

  - <strong><code>lock_id</code></strong> <i>String</i>
  
    Lock ID for a Salto KS device.

  - <strong><code>lock_type</code></strong> <i>String</i>
  
    Lock type for a Salto KS device.

  - <strong><code>locked_state</code></strong> <i>String</i>
  
    Locked state for a Salto KS device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a Salto KS device.

</details>

---

**`salto_metadata`** *Object*

Metada for a Salto device.

{% hint style="warning" %}
**Deprecated**. Use `salto_ks_metadata ` instead.
{% endhint %}


<details>
  <summary>Child Properties</summary>

  - <strong><code>battery_level</code></strong> <i>String</i>
  
    Battery level for a Salto device.

  - <strong><code>customer_reference</code></strong> <i>String</i>
  
    Customer reference for a Salto device.

  - <strong><code>lock_id</code></strong> <i>String</i>
  
    Lock ID for a Salto device.

  - <strong><code>lock_type</code></strong> <i>String</i>
  
    Lock type for a Salto device.

  - <strong><code>locked_state</code></strong> <i>String</i>
  
    Locked state for a Salto device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a Salto device.

</details>

---

**`salto_space_credential_service_metadata`** *Object*

Salto Space credential service metadata for the phone.



<details>
  <summary>Child Properties</summary>

  - <strong><code>has_active_phone</code></strong> <i>Boolean</i>
  
    Indicates whether the credential service has an active associated phone.

</details>

---

**`schlage_metadata`** *Object*

Metadata for a Schlage device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Schlage device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Schlage device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a Schlage device.

</details>

---

**`seam_bridge_metadata`** *Object*

Metadata for Seam Bridge.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_num</code></strong> <i>Number</i>
  
    Device number for Seam Bridge.

  - <strong><code>name</code></strong> <i>String</i>
  
    Name for Seam Bridge.

  - <strong><code>unlock_method</code></strong> <i>Enum</i>
  
    Unlock method for Seam Bridge.
  <details>
      <summary>Enum values:</summary>
  
      - <code>bridge</code>
      - <code>doorking</code>
  </details>

</details>

---

**`sensi_metadata`** *Object*

Metadata for a Sensi device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Sensi device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Sensi device.

  - <strong><code>product_type</code></strong> <i>String</i>
  
    Product type for a Sensi device.

</details>

---

**`smartthings_metadata`** *Object*

Metadata for a SmartThings device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a SmartThings device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a SmartThings device.

  - <strong><code>location_id</code></strong> <i>String</i>
  
    Location ID for a SmartThings device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a SmartThings device.

</details>

---

**`supported_code_lengths`** *List* *of Numbers*

Supported code lengths for access codes.




---

**`supports_accessory_keypad`** *Boolean*


{% hint style="warning" %}
**Deprecated**. use device.properties.model.can_connect_accessory_keypad
{% endhint %}



---

**`supports_backup_access_code_pool`** *Boolean*

Indicates whether the device supports a [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).




---

**`supports_offline_access_codes`** *Boolean*


{% hint style="warning" %}
**Deprecated**. use offline_access_codes_enabled
{% endhint %}



---

**`tado_metadata`** *Object*

Metadata for a tado° device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_type</code></strong> <i>String</i>
  
    Device type for a tado° device.

  - <strong><code>serial_no</code></strong> <i>String</i>
  
    Serial number for a tado° device.

</details>

---

**`tedee_metadata`** *Object*

Metadata for a Tedee device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>bridge_id</code></strong> <i>Number</i>
  
    Bridge ID for a Tedee device.

  - <strong><code>bridge_name</code></strong> <i>String</i>
  
    Bridge name for a Tedee device.

  - <strong><code>device_id</code></strong> <i>Number</i>
  
    Device ID for a Tedee device.

  - <strong><code>device_model</code></strong> <i>String</i>
  
    Device model for a Tedee device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Tedee device.

  - <strong><code>keypad_id</code></strong> <i>Number</i>
  
    Keypad ID for a Tedee device.

  - <strong><code>serial_number</code></strong> <i>String</i>
  
    Serial number for a Tedee device.

</details>

---

**`ttlock_metadata`** *Object*

Metadata for a TTLock device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>feature_value</code></strong> <i>String</i>
  
    Feature value for a TTLock device.

  - <strong><code>features</code></strong> <i>Object</i>
  
    Features for a TTLock device.

  - <strong><code>features.incomplete_keyboard_passcode</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports an incomplete keyboard passcode.

  - <strong><code>features.lock_command</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports the lock command.

  - <strong><code>features.passcode</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports a passcode.

  - <strong><code>features.passcode_management</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports passcode management.

  - <strong><code>features.unlock_via_gateway</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports unlock via gateway.

  - <strong><code>features.wifi</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports Wi-Fi.

  - <strong><code>has_gateway</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device has a gateway.

  - <strong><code>lock_alias</code></strong> <i>String</i>
  
    Lock alias for a TTLock device.

  - <strong><code>lock_id</code></strong> <i>Number</i>
  
    Lock ID for a TTLock device.

  - <strong><code>wireless_keypads</code></strong> <i>List</i> <i>of Objects</i>
  
    Wireless keypads for a TTLock device.

- <strong><code>wireless_keypad_id</code></strong> <i>Number</i>

  ID for a wireless keypad for a TTLock device.


- <strong><code>wireless_keypad_name</code></strong> <i>String</i>

  Name for a wireless keypad for a TTLock device.


</details>

---

**`two_n_metadata`** *Object*

Metadata for a 2N device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>Number</i>
  
    Device ID for a 2N device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a 2N device.

</details>

---

**`ultraloq_metadata`** *Object*

Metadata for an Ultraloq device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for an Ultraloq device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for an Ultraloq device.

</details>

---

**`visionline_metadata`** *Object*

Metadata for an ASSA ABLOY Visionline system.



<details>
  <summary>Child Properties</summary>

  - <strong><code>encoder_id</code></strong> <i>String</i>
  
    Encoder ID for an ASSA ABLOY Visionline system.

</details>

---

**`wyze_metadata`** *Object*

Metadata for a Wyze device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Wyze device.

  - <strong><code>device_info_model</code></strong> <i>String</i>
  
    Device information model for a Wyze device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Wyze device.

  - <strong><code>keypad_uuid</code></strong> <i>String</i>
  
    Keypad UUID for a Wyze device.

  - <strong><code>locker_status_hardlock</code></strong> <i>Number</i>
  
    Locker status (hardlock) for a Wyze device.

  - <strong><code>product_model</code></strong> <i>String</i>
  
    Product model for a Wyze device.

  - <strong><code>product_name</code></strong> <i>String</i>
  
    Product name for a Wyze device.

  - <strong><code>product_type</code></strong> <i>String</i>
  
    Product type for a Wyze device.

</details>

---


## Errors

**`salto_ks_subscription_limit_exceeded`**

Indicates that the Salto site user limit has been reached.

---

**`august_lock_not_authorized`**

Indicates that the user is not authorized to use the August lock.

---

**`august_lock_missing_bridge`**

Indicates that the lock is not connected to a bridge.

---

**`empty_backup_access_code_pool`**

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

---

**`ttlock_lock_not_paired_to_gateway`**

Indicates that the lock is not paired with a gateway.

---

**`subscription_required`**

Indicates that a subscription is required to connect.

---

**`missing_device_credentials`**

Indicates that device credentials are missing.

---

**`lockly_missing_wifi_bridge`**

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

---

**`hub_disconnected`**

Indicates that the hub is disconnected.

---

**`device_removed`**

Indicates that the device has been removed.

---

**`device_offline`**

Indicates that the device is offline.

---

**`device_disconnected`**

Indicates that the device is disconnected.

---

**`account_disconnected`**

Indicates that the account is disconnected.

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---


## Warnings

**`device_communication_degraded`**

Indicates that the device appears to be unresponsive.

---

**`device_has_flaky_connection`**

Indicates that the device has a flaky connection.

---

**`functional_offline_device`**

Indicates that the device is offline but has some functionality available.

---

**`hub_required_for_addtional_capabilities`**

Indicates that a hub or relay must be connected to unlock additional capabilities such as remote unlock.

---

**`lockly_time_zone_not_configured`**

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

---

**`many_active_backup_codes`**

Indicates that there are too many backup codes.

---

**`partial_backup_access_code_pool`**

Indicates that the backup access code is unhealthy.

---

**`power_saving_mode`**

Indicates that the device is in power saving mode and may have limited functionality.

---

**`salto_ks_office_mode`**

Indicates that the Salto KS lock is in Office Mode. Access Codes will not unlock doors.

---

**`salto_ks_privacy_mode`**

Indicates that the Salto KS lock is in Privacy Mode. Access Codes will not unlock doors.

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

**`ttlock_lock_gateway_unlocking_not_enabled`**

Indicates that the Remote Unlock feature is not enabled in the settings."

---

**`ttlock_weak_gateway_signal`**

Indicates that the gateway signal is weak.

---

**`wyze_device_missing_gateway`**

Indicates that the Wyze Lock is not connected to a gateway.

---


## Events

**`lock.locked`**

A [lock](https://docs.seam.co/latest/capability-guides/smart-locks) was locked.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the access code that was used to lock the device.

<strong><code>action_attempt_id</code></strong> <i>UUID</i>

  ID of the action attempt associated with the lock action.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `lock.locked`

<strong><code>method</code></strong> <i>Enum</i>

  Method by which the affected lock device was locked. When the method is `keycode`, the `access_code_id` indicates the access code that was used, if reported by the device.
<details>
    <summary>Enum values:</summary>

    - <code>keycode</code>
    - <code>manual</code>
    - <code>automatic</code>
    - <code>unknown</code>
    - <code>seamapi</code>
</details>

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`lock.unlocked`**

A [lock](https://docs.seam.co/latest/capability-guides/smart-locks) was unlocked.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the access code that was used to unlock the affected device.

<strong><code>action_attempt_id</code></strong> <i>UUID</i>

  ID of the action attempt associated with the unlock action.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `lock.unlocked`

<strong><code>method</code></strong> <i>Enum</i>

  Method by which the affected lock device was unlocked. When the method is `keycode`, the `access_code_id` indicates the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that was used, if reported by the device.
<details>
    <summary>Enum values:</summary>

    - <code>keycode</code>
    - <code>manual</code>
    - <code>automatic</code>
    - <code>unknown</code>
    - <code>seamapi</code>
</details>

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`lock.access_denied`**

The [lock](https://docs.seam.co/latest/capability-guides/smart-locks) denied access to a user after one or more consecutive invalid attempts to unlock the device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the access code that was used in the unlock attempts.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `lock.access_denied`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/locks/get`**](./get.md)

Returns a specified [lock](https://docs.seam.co/latest/capability-guides/smart-locks).


[**`/locks/list`**](./list.md)

Returns a list of all [locks](https://docs.seam.co/latest/capability-guides/smart-locks).


[**`/locks/lock_door`**](./lock_door.md)

Locks a [lock](https://docs.seam.co/latest/capability-guides/smart-locks). See also [Locking and Unlocking Smart Locks](https://docs.seam.co/latest/capability-guides/smart-locks/lock-and-unlock).


[**`/locks/unlock_door`**](./unlock_door.md)

Unlocks a [lock](https://docs.seam.co/latest/capability-guides/smart-locks). See also [Locking and Unlocking Smart Locks](https://docs.seam.co/latest/capability-guides/smart-locks/lock-and-unlock).


