# Delete a Climate Preset

```
POST /thermostats/delete_climate_preset ⇒ void
```

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

## Request Parameters

### `climate_preset_key`

Type: `string`
Required: Yes

Climate preset key of the desired climate preset.

***

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

## Return Type

void
