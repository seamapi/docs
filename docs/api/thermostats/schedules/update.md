# Update a Climate Schedule

```
PATCH /thermostats/schedules/update ⇒ void
```

Updates a specified [climate schedule](../../../capability-guides/thermostats/creating-and-managing-climate-schedules.md).

## Request Parameters

### `climate_preset_key`

Type: `string`
Required: No

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the climate schedule.

***

### `ends_at`

Type: `string`
Required: No

Date and time at which the climate schedule ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

***

### `max_override_period_minutes`

Type: `number`
Required: No

Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled climate preset. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-climate-schedules.md#specifying-manual-override-permissions).

***

### `name`

Type: `string`
Required: No

User-friendly name to identify the climate schedule.

***

### `starts_at`

Type: `string`
Required: No

Date and time at which the climate schedule starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

***

### `thermostat_schedule_id`

Type: `string`
Required: Yes

ID of the desired climate schedule.

***

## Return Type

void