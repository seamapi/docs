# Thermostats

The Thermostats route contains the following resources:

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


