# Set a Temperature Threshold

```
PATCH /thermostats/set_temperature_threshold ⇒ void
```

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.

## Request Parameters

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

### `lower_limit_celsius`

Type: `number`
Required: No

Lower temperature limit in in °C. Seam alerts you if the reported temperature is lower than this value. You can specify either `lower_limit` but not both.

***

### `lower_limit_fahrenheit`

Type: `number`
Required: No

Lower temperature limit in in °F. Seam alerts you if the reported temperature is lower than this value. You can specify either `lower_limit` but not both.

***

### `upper_limit_celsius`

Type: `number`
Required: No

Upper temperature limit in in °C. Seam alerts you if the reported temperature is higher than this value. You can specify either `upper_limit` but not both.

***

### `upper_limit_fahrenheit`

Type: `number`
Required: No

Upper temperature limit in in °C. Seam alerts you if the reported temperature is higher than this value. You can specify either `upper_limit` but not both.

***

## Return Type

void
