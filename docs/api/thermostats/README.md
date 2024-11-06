# Thermostats

## Endpoints

### [`/thermostats/activate_climate_preset`](./activate_climate_preset.md)


### [`/thermostats/cool`](./cool.md)

Sets a thermostat to cooling mode. You must include a cooling set point in Celsius or Fahrenheit. See also [Setting the Current HVAC and Fan Mode Settings](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).
### [`/thermostats/create_climate_preset`](./create_climate_preset.md)


### [`/thermostats/delete_climate_preset`](./delete_climate_preset.md)


### [`/thermostats/get`](./get.md)

Returns a specific thermostat.
### [`/thermostats/heat`](./heat.md)

Sets a thermostat to heating mode. You must include a heating set point in Celsius or Fahrenheit. See also [Setting the Current HVAC and Fan Mode Settings](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).
### [`/thermostats/heat_cool`](./heat_cool.md)

Set a thermostat to heat-cool mode, also known as "auto" mode. To do so, you must include both cooling and heating set points in the payload, either in Celsius or Fahrenheit. For information about verifying the heating and cooling availability of the thermostat and validating the correct set points, see [HVAC Mode Constraints](https://docs.seam.co/latest/capability-guides/thermostats/hvac-mode#hvac-mode-constraints) and [Set Point Constraints](https://docs.seam.co/latest/capability-guides/thermostats/set-points#set-point-constraints).
### [`/thermostats/list`](./list.md)

Returns a list of thermostats connected to your workspace. If no thermostats are connected, the list will be empty.
### [`/thermostats/off`](./off.md)

Sets a thermostat to "off" mode. See also [Setting the Current HVAC and Fan Mode Settings](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).
### [`/thermostats/set_fallback_climate_preset`](./set_fallback_climate_preset.md)


### [`/thermostats/set_fan_mode`](./set_fan_mode.md)

Sets the fan mode setting for a thermostat. See also [Setting the Current HVAC and Fan Mode Settings](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings) and [Fan Mode Settings](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings).
### [`/thermostats/set_temperature_threshold`](./set_temperature_threshold.md)


### [`/thermostats/update_climate_preset`](./update_climate_preset.md)


