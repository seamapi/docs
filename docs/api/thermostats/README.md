# Thermostats


## Events

**`thermostat.climate_preset_activated`**

A thermostat [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) was activated.

<details>

<summary>Properties</summary>

- <strong><code>climate_preset_key</code></strong> <i>String</i>

  Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) that was activated.


- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.climate_preset_activated`


- <strong><code>is_fallback_climate_preset</code></strong> <i>Boolean</i>

  Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) that was activated is the [fallback climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) for the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>thermostat_schedule_id</code></strong> <i>UUID</i>

  ID of the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) that prompted the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to be activated.


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).

</details>

---

**`thermostat.manually_adjusted`**

A [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) was adjusted manually.

<details>

<summary>Properties</summary>

- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).


- <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).


- <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.manually_adjusted`


- <strong><code>fan_mode_setting</code></strong> <i>Enum</i>

  Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
<details>
    <summary>Enum values:</summary>
    - `auto`
    - `on`
    - `circulate`
</details>


- <strong><code>heating_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).


- <strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).


- <strong><code>hvac_mode_setting</code></strong> <i>Enum</i>

  Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
<details>
    <summary>Enum values:</summary>
    - `off`
    - `heat`
    - `cool`
    - `heat_cool`
</details>


- <strong><code>method</code></strong> <i>Enum</i>

  Method used to adjust the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) manually. `seam` indicates that the Seam API, Seam CLI, or Seam Console was used to adjust the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
<details>
    <summary>Enum values:</summary>
    - `seam`
    - `external`
</details>


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).

</details>

---

**`thermostat.temperature_threshold_exceeded`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading exceeded the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary>Properties</summary>

- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_threshold_exceeded`


- <strong><code>lower_limit_celsius</code></strong> <i>Number</i>

  Lower temperature limit, in °C, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).


- <strong><code>lower_limit_fahrenheit</code></strong> <i>Number</i>

  Lower temperature limit, in °F, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>upper_limit_celsius</code></strong> <i>Number</i>

  Upper temperature limit, in °C, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).


- <strong><code>upper_limit_fahrenheit</code></strong> <i>Number</i>

  Upper temperature limit, in °F, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).

</details>

---

**`thermostat.temperature_threshold_no_longer_exceeded`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading no longer exceeds the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary>Properties</summary>

- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_threshold_no_longer_exceeded`


- <strong><code>lower_limit_celsius</code></strong> <i>Number</i>

  Lower temperature limit, in °C, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).


- <strong><code>lower_limit_fahrenheit</code></strong> <i>Number</i>

  Lower temperature limit, in °F, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>upper_limit_celsius</code></strong> <i>Number</i>

  Upper temperature limit, in °C, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).


- <strong><code>upper_limit_fahrenheit</code></strong> <i>Number</i>

  Upper temperature limit, in °F, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).

</details>

---

**`thermostat.temperature_reached_set_point`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading is within 1 °C of the configured cooling or heating [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<details>

<summary>Properties</summary>

- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>desired_temperature_celsius</code></strong> <i>Number</i>

  Desired temperature, in °C, defined by the [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) cooling or heating [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).


- <strong><code>desired_temperature_fahrenheit</code></strong> <i>Number</i>

  Desired temperature, in °F, defined by the [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) cooling or heating [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).


- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_reached_set_point`


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).

</details>

---

**`thermostat.temperature_changed`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) reported temperature changed by at least 1 °C.

<details>

<summary>Properties</summary>

- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_changed`


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).

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


