# Thermostats

## Endpoints

### [`/thermostats/activate_climate_preset`](./activate_climate_preset.md)

Activates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/cool`](./cool.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [cool mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).
### [`/thermostats/create_climate_preset`](./create_climate_preset.md)

Creates a [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/delete_climate_preset`](./delete_climate_preset.md)

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/heat`](./heat.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).
### [`/thermostats/heat_cool`](./heat_cool.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat-cool ("auto") mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).
### [`/thermostats/list`](./list.md)

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/off`](./off.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).
### [`/thermostats/set_fallback_climate_preset`](./set_fallback_climate_preset.md)

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/set_fan_mode`](./set_fan_mode.md)

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/set_hvac_mode`](./set_hvac_mode.md)

Sets the [HVAC mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/set_temperature_threshold`](./set_temperature_threshold.md)

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.
### [`/thermostats/update_climate_preset`](./update_climate_preset.md)

Updates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

## Events

### `thermostat.climate_preset_activated`

A thermostat [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) was activated.

<details>
  
<summary><code>thermostat_schedule_id</code> <code>string</code></summary>

ID of the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) that prompted the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to be activated.

</details>

<details>

<summary><code>climate_preset_key</code> <code>string</code></summary>

Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) that was activated.

</details>

<details>

<summary><code>is_fallback_climate_preset</code> <code>boolean</code></summary>

Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) that was activated is the [fallback climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) for the thermostat.

</details>

---

### `thermostat.thermostat_manually_adjusted_event`

A thermostat was adjusted manually.

<details>

<summary><code>method</code> <code>enum</code></summary>

Method used to adjust the thermostat manually. `seam` indicates that the Seam API, Seam CLI, or Seam Console was used to adjust the thermostat.

Possible enum values:
- `seam`
- `external`

</details>

---

### `thermostat.temperature_threshold_exceeded`

A thermostat's temperature reading exceeded the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary><code>temperature_celsius</code> <code>number</code></summary>

Temperature, in °C, reported by the thermostat.

</details>

<details>

<summary><code>temperature_fahrenheit</code> <code>number</code></summary>

Temperature, in °F, reported by the thermostat.

</details>

<details>

<summary><code>upper_limit_celsius</code> <code>number</code></summary>

Upper temperature limit, in °C, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

</details>

<details>

<summary><code>upper_limit_fahrenheit</code> <code>number</code></summary>

Upper temperature limit, in °F, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

</details>

<details>

<summary><code>lower_limit_celsius</code> <code>number</code></summary>

Lower temperature limit, in °C, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

</details>

<details>

<summary><code>lower_limit_fahrenheit</code> <code>number</code></summary>

Lower temperature limit, in °F, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

</details>

---

### `thermostat.temperature_threshold_no_longer_exceeded`

A thermostat's temperature reading no longer exceeds the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary><code>temperature_celsius</code> <code>number</code></summary>

Temperature, in °C, reported by the thermostat.

</details>

<details>

<summary><code>temperature_fahrenheit</code> <code>number</code></summary>

Temperature, in °F, reported by the thermostat.

</details>

<details>

<summary><code>upper_limit_celsius</code> <code>number</code></summary>

Upper temperature limit, in °C, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

</details>

<details>

<summary><code>upper_limit_fahrenheit</code> <code>number</code></summary>

Upper temperature limit, in °F, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

</details>

<details>

<summary><code>lower_limit_celsius</code> <code>number</code></summary>

Lower temperature limit, in °C, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

</details>

<details>

<summary><code>lower_limit_fahrenheit</code> <code>number</code></summary>

Lower temperature limit, in °F, defined by the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

</details>

---
