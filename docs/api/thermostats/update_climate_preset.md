# Update a Climate Preset

```
PATCH /thermostats/update_climate_preset ⇒ void
```

Updates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

## Request Parameters

### `climate_preset_key`

Type: `string`
Required: Yes

Unique key to identify the climate preset.

***

### `cooling_set_point_celsius`

Type: `number`
Required: No

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

***

### `cooling_set_point_fahrenheit`

Type: `number`
Required: No

Temperature to which the thermostat should cool (in °F).

***

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

### `fan_mode_setting`

Type: `string`
Required: No

Desired fan mode setting, such as `on`, `auto`, or `circulate`.

***

### `heating_set_point_celsius`

Type: `number`
Required: No

Temperature to which the thermostat should heat (in °C).

***

### `heating_set_point_fahrenheit`

Type: `number`
Required: No

Temperature to which the thermostat should heat (in °F).

***

### `hvac_mode_setting`

Type: `string`
Required: No

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

***

### `manual_override_allowed`

Type: `boolean`
Required: Yes

Indicates whether a person at the thermostat can change the thermostat's settings.

***

### `name`

Type: `string`
Required: No

User-friendly name to identify the climate preset.

***

## Return Type

void
