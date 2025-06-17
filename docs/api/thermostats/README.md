# Thermostats

## The device Object

- [Properties](./#properties)
- [`device.properties`](./#device.properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [device](../../core-concepts/devices/README.md) that has been connected to Seam.

---
## Properties


---
## `device.properties`

## Thermostats
**`active_thermostat_schedule`** *Object*

Active [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).



<details>
  <summary>Child Properties</summary>

  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

  - <strong><code>created_at</code></strong> <i>Datetime</i>
  
    Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) was created.

  - <strong><code>device_id</code></strong> <i>UUID</i>
  
    ID of the desired [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) device.

  - <strong><code>ends_at</code></strong> <i>Datetime</i>
  
    Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

  - <strong><code>errors</code></strong> <i>List</i> <i>of Objects</i>
  
    Errors associated with the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

- <strong><code>error_code</code></strong> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.


- <strong><code>message</code></strong> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.


  - <strong><code>is_override_allowed</code></strong> <i>Boolean</i>
  
    Indicates whether a person at the thermostat can change the thermostat's settings after the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts.

  - <strong><code>max_override_period_minutes</code></strong> <i>Number</i>
  
    Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md). See also [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

  - <strong><code>name</code></strong> <i>String</i>
  
    User-friendly name to identify the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

  - <strong><code>starts_at</code></strong> <i>Datetime</i>
  
    Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

  - <strong><code>thermostat_schedule_id</code></strong> <i>UUID</i>
  
    ID of the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

  - <strong><code>workspace_id</code></strong> <i>UUID</i>
  
    ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the thermostat schedule.

</details>

---

**`available_climate_presets`** *List* *of Objects*

Available [climate presets](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for the thermostat.



<details>
  <summary>Child Object Properties</summary>

  <strong><code>can_delete</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

  <strong><code>can_edit</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

  <strong><code>can_program</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

  <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  <strong><code>fan_mode_setting</code></strong> <i>Enum</i>
  
    Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>auto</code>
      - <code>on</code>
      - <code>circulate</code>
  </details>

  <strong><code>heating_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  <strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  <strong><code>hvac_mode_setting</code></strong> <i>Enum</i>
  
    Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>off</code>
      - <code>heat</code>
      - <code>cool</code>
      - <code>heat_cool</code>
  </details>

  <strong><code>manual_override_allowed</code></strong> <i>Boolean</i>
  
    Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).
  
    {% hint style="warning" %}
    **Deprecated**. Use 'thermostat_schedule.is_override_allowed'
    {% endhint %}

  <strong><code>name</code></strong> <i>String</i>
  
    User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).
</details>

---

**`available_fan_mode_settings`** *List* *of Enums*

Fan mode settings that the thermostat supports.




---

**`available_hvac_mode_settings`** *List* *of Enums*

HVAC mode settings that the thermostat supports.




---

**`current_climate_setting`** *Object*

Current climate setting.



<details>
  <summary>Child Properties</summary>

  - <strong><code>can_delete</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

  - <strong><code>can_edit</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

  - <strong><code>can_program</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>fan_mode_setting</code></strong> <i>Enum</i>
  
    Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>auto</code>
      - <code>on</code>
      - <code>circulate</code>
  </details>

  - <strong><code>heating_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>hvac_mode_setting</code></strong> <i>Enum</i>
  
    Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>off</code>
      - <code>heat</code>
      - <code>cool</code>
      - <code>heat_cool</code>
  </details>

  - <strong><code>manual_override_allowed</code></strong> <i>Boolean</i>
  
    Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).
  
    {% hint style="warning" %}
    **Deprecated**. Use 'thermostat_schedule.is_override_allowed'
    {% endhint %}

  - <strong><code>name</code></strong> <i>String</i>
  
    User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

---

**`default_climate_setting`** *Object*


{% hint style="warning" %}
**Deprecated**. use fallback_climate_preset_key to specify a fallback climate preset instead.
{% endhint %}


<details>
  <summary>Child Properties</summary>

  - <strong><code>can_delete</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

  - <strong><code>can_edit</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

  - <strong><code>can_program</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>fan_mode_setting</code></strong> <i>Enum</i>
  
    Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>auto</code>
      - <code>on</code>
      - <code>circulate</code>
  </details>

  - <strong><code>heating_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>hvac_mode_setting</code></strong> <i>Enum</i>
  
    Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>off</code>
      - <code>heat</code>
      - <code>cool</code>
      - <code>heat_cool</code>
  </details>

  - <strong><code>manual_override_allowed</code></strong> <i>Boolean</i>
  
    Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).
  
    {% hint style="warning" %}
    **Deprecated**. Use 'thermostat_schedule.is_override_allowed'
    {% endhint %}

  - <strong><code>name</code></strong> <i>String</i>
  
    User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

---

**`fallback_climate_preset_key`** *String*

Key of the [fallback climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) for the thermostat.




---

**`fan_mode_setting`** *Enum*


{% hint style="warning" %}
**Deprecated**. Use `current_climate_setting.fan_mode_setting` instead.
{% endhint %}

<details>
<summary>Enum values</summary>

- <code>auto</code>
- <code>on</code>
- <code>circulate</code>
</details>


---

**`is_cooling`** *Boolean*

Indicates whether the connected HVAC system is currently cooling, as reported by the thermostat.




---

**`is_fan_running`** *Boolean*

Indicates whether the fan in the connected HVAC system is currently running, as reported by the thermostat.




---

**`is_heating`** *Boolean*

Indicates whether the connected HVAC system is currently heating, as reported by the thermostat.




---

**`is_temporary_manual_override_active`** *Boolean*

Indicates whether the current thermostat settings differ from the most recent active program or schedule that Seam activated. For this condition to occur, `current_climate_setting.manual_override_allowed` must also be `true`.




---

**`max_cooling_set_point_celsius`** *Number*

Maximum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °C.




---

**`max_cooling_set_point_fahrenheit`** *Number*

Maximum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °F.




---

**`max_heating_set_point_celsius`** *Number*

Maximum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °C.




---

**`max_heating_set_point_fahrenheit`** *Number*

Maximum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °F.




---

**`min_cooling_set_point_celsius`** *Number*

Minimum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °C.




---

**`min_cooling_set_point_fahrenheit`** *Number*

Minimum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °F.




---

**`min_heating_cooling_delta_celsius`** *Number*

Minimum [temperature difference](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#minimum-heating-cooling-temperature-delta) in °C between the cooling and heating set points when in heat-cool (auto) mode.




---

**`min_heating_cooling_delta_fahrenheit`** *Number*

Minimum [temperature difference](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#minimum-heating-cooling-temperature-delta) in °F between the cooling and heating set points when in heat-cool (auto) mode.




---

**`min_heating_set_point_celsius`** *Number*

Minimum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °C.




---

**`min_heating_set_point_fahrenheit`** *Number*

Minimum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °F.




---

**`relative_humidity`** *Number*

Reported relative humidity, as a value between 0 and 1, inclusive.




---

**`temperature_celsius`** *Number*

Reported temperature in °C.




---

**`temperature_fahrenheit`** *Number*

Reported temperature in °F.




---

**`temperature_threshold`** *Object*

Current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.



<details>
  <summary>Child Properties</summary>

  - <strong><code>lower_limit_celsius</code></strong> <i>Number</i>
  
    Lower limit in °C within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

  - <strong><code>lower_limit_fahrenheit</code></strong> <i>Number</i>
  
    Lower limit in °F within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

  - <strong><code>upper_limit_celsius</code></strong> <i>Number</i>
  
    Upper limit in °C within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

  - <strong><code>upper_limit_fahrenheit</code></strong> <i>Number</i>
  
    Upper limit in °F within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

</details>

---

**`thermostat_daily_programs`** *List* *of Objects*

Configured [daily programs](../../capability-guides/thermostats/creating-and-managing-thermostat-programs.md) for the thermostat.



<details>
  <summary>Child Object Properties</summary>

  <strong><code>created_at</code></strong> <i>Datetime</i>
  
    Date and time at which the thermostat daily program was created.

  <strong><code>device_id</code></strong> <i>UUID</i>
  
    ID of the thermostat device on which the thermostat daily program is configured.

  <strong><code>name</code></strong> <i>String</i>
  
    User-friendly name to identify the thermostat daily program.

  <strong><code>periods</code></strong> <i>List</i> <i>of Objects</i>
  
    Array of thermostat daily program periods.
  
  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to activate at the `starts_at_time`.
  
  
  - <strong><code>starts_at_time</code></strong> <i>String</i>
  
    Time at which the thermostat daily program period starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
  

  <strong><code>thermostat_daily_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program.

  <strong><code>workspace_id</code></strong> <i>UUID</i>
  
    ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the thermostat daily program.
</details>

---

**`thermostat_weekly_program`** *Object*

Current [weekly program](../../capability-guides/thermostats/creating-and-managing-thermostat-programs.md) for the thermostat.



<details>
  <summary>Child Properties</summary>

  - <strong><code>created_at</code></strong> <i>Datetime</i>
  
    Date and time at which the thermostat weekly program was created.

  - <strong><code>friday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Fridays.

  - <strong><code>monday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Mondays.

  - <strong><code>saturday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Saturdays.

  - <strong><code>sunday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Sundays.

  - <strong><code>thursday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Thursdays.

  - <strong><code>tuesday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Tuesdays.

  - <strong><code>wednesday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Wednesdays.

</details>

---


## Errors

**`account_disconnected`**

Account is disconnected

---

**`salto_ks_subscription_limit_exceeded`**

Salto site user limit reached.

---

**`device_offline`**

Device is offline

---

**`device_removed`**

Device has been removed

---

**`hub_disconnected`**

Hub is disconnected

---

**`device_disconnected`**

Device is disconnected

---

**`empty_backup_access_code_pool`**

The backup access code pool is empty.

---

**`august_lock_not_authorized`**

User is not authorized to use the August Lock.

---

**`august_lock_missing_bridge`**

Lock is not connected to the Seam Bridge.

---

**`ttlock_lock_not_paired_to_gateway`**

Lock is not paired with a Gateway.

---

**`missing_device_credentials`**

Missing device credentials.

---

**`auxiliary_heat_running`**

The auxiliary heat is running.

---

**`subscription_required`**

Subscription required to connect.

---

**`lockly_missing_wifi_bridge`**

Lockly lock is not connected to a Wi-Fi bridge.

---

**`invalid_credentials`**

Credentials provided were invalid.

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---


## Warnings

**`partial_backup_access_code_pool`**

Backup access code unhealthy.

---

**`many_active_backup_codes`**

Too many backup codes.

---

**`wyze_device_missing_gateway`**

Wyze Lock is not connected to a gateway.

---

**`functional_offline_device`**

Device is offline, but has some functionality available.

---

**`third_party_integration_detected`**

Third-party integration detected.

---

**`nest_thermostat_in_manual_eco_mode`**

Nest thermostat in manual eco mode.

---

**`ttlock_lock_gateway_unlocking_not_enabled`**

Remote Unlock feature not enabled in settings.

---

**`ttlock_weak_gateway_signal`**

Gateway signal is weak.

---

**`temperature_threshold_exceeded`**

Temperature threshold exceeded.

---

**`device_communication_degraded`**

Device appears to be unresponsive.

---

**`scheduled_maintenance_window`**

Scheduled maintenance window detected.

---

**`device_has_flaky_connection`**

Device has flaky connection.

---

**`salto_ks_office_mode`**

Lock is in Office Mode. Access Codes will not unlock doors.

---

**`salto_ks_privacy_mode`**

Lock is in Privacy Mode. Access Codes will not unlock doors.

---

**`salto_ks_subscription_limit_almost_reached`**

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Please increase your subscription limit, or delete some users from your site to rectify this.

---

**`unknown_issue_with_phone`**

An unknown issue occurred while syncing the state of this phone with the provider. This issue may affect the proper functioning of this phone.

---

**`lockly_time_zone_not_configured`**

We detected that this device does not have a time zone configured. Time bound codes may not work as expected.

---


## Events

**`thermostat.climate_preset_activated`**

A thermostat [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) was activated.

<details>

<summary>Properties</summary>

<strong><code>climate_preset_key</code></strong> <i>String</i>

  Key of the climate preset that was activated.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.climate_preset_activated`

<strong><code>is_fallback_climate_preset</code></strong> <i>Boolean</i>

  Indicates whether the climate preset that was activated is the fallback climate preset for the thermostat.

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>thermostat_schedule_id</code></strong> <i>UUID</i>

  ID of the thermostat schedule that prompted the affected climate preset to be activated.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`thermostat.manually_adjusted`**

A [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) was adjusted manually.

<details>

<summary>Properties</summary>

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account associated with the event.

<strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.manually_adjusted`

<strong><code>fan_mode_setting</code></strong> <i>Enum</i>

  Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
<details>
    <summary>Enum values:</summary>

    - <code>auto</code>
    - <code>on</code>
    - <code>circulate</code>
</details>

<strong><code>heating_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>hvac_mode_setting</code></strong> <i>Enum</i>

  Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
<details>
    <summary>Enum values:</summary>

    - <code>off</code>
    - <code>heat</code>
    - <code>cool</code>
    - <code>heat_cool</code>
</details>

<strong><code>method</code></strong> <i>Enum</i>

  Method used to adjust the affected thermostat manually. `seam` indicates that the Seam API, Seam CLI, or Seam Console was used to adjust the thermostat.
<details>
    <summary>Enum values:</summary>

    - <code>seam</code>
    - <code>external</code>
</details>

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`thermostat.temperature_threshold_exceeded`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading exceeded the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary>Properties</summary>

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_threshold_exceeded`

<strong><code>lower_limit_celsius</code></strong> <i>Number</i>

  Lower temperature limit, in °C, defined by the set threshold.

<strong><code>lower_limit_fahrenheit</code></strong> <i>Number</i>

  Lower temperature limit, in °F, defined by the set threshold.

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the affected thermostat.

<strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the affected thermostat.

<strong><code>upper_limit_celsius</code></strong> <i>Number</i>

  Upper temperature limit, in °C, defined by the set threshold.

<strong><code>upper_limit_fahrenheit</code></strong> <i>Number</i>

  Upper temperature limit, in °F, defined by the set threshold.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`thermostat.temperature_threshold_no_longer_exceeded`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading no longer exceeds the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary>Properties</summary>

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_threshold_no_longer_exceeded`

<strong><code>lower_limit_celsius</code></strong> <i>Number</i>

  Lower temperature limit, in °C, defined by the set threshold.

<strong><code>lower_limit_fahrenheit</code></strong> <i>Number</i>

  Lower temperature limit, in °F, defined by the set threshold.

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the affected thermostat.

<strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the affected thermostat.

<strong><code>upper_limit_celsius</code></strong> <i>Number</i>

  Upper temperature limit, in °C, defined by the set threshold.

<strong><code>upper_limit_fahrenheit</code></strong> <i>Number</i>

  Upper temperature limit, in °F, defined by the set threshold.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`thermostat.temperature_reached_set_point`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading is within 1 °C of the configured cooling or heating [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<details>

<summary>Properties</summary>

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>desired_temperature_celsius</code></strong> <i>Number</i>

  Desired temperature, in °C, defined by the affected thermostat's cooling or heating set point.

<strong><code>desired_temperature_fahrenheit</code></strong> <i>Number</i>

  Desired temperature, in °F, defined by the affected thermostat's cooling or heating set point.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_reached_set_point`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the affected thermostat.

<strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the affected thermostat.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

**`thermostat.temperature_changed`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) reported temperature changed by at least 1 °C.

<details>

<summary>Properties</summary>

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_changed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the affected thermostat.

<strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the affected thermostat.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the workspace associated with the event.
</details>

---

## Endpoints


[**`/thermostats/activate_climate_preset`**](./activate_climate_preset.md)

Activates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/cool`**](./cool.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [cool mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


[**`/thermostats/create_climate_preset`**](./create_climate_preset.md)

Creates a [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/delete_climate_preset`**](./delete_climate_preset.md)

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/heat`**](./heat.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


[**`/thermostats/heat_cool`**](./heat_cool.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat-cool ("auto") mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


[**`/thermostats/list`**](./list.md)

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/off`**](./off.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


[**`/thermostats/set_fallback_climate_preset`**](./set_fallback_climate_preset.md)

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/set_fan_mode`**](./set_fan_mode.md)

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/set_hvac_mode`**](./set_hvac_mode.md)

Sets the [HVAC mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/set_temperature_threshold`**](./set_temperature_threshold.md)

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.


[**`/thermostats/update_climate_preset`**](./update_climate_preset.md)

Updates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/update_weekly_program`**](./update_weekly_program.md)

Updates the thermostat weekly program for a thermostat device. To configure a weekly program, specify the ID of the daily program that you want to use for each day of the week. When you update a weekly program, the set of programs that you specify overwrites any previous weekly program for the thermostat.


