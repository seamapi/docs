# List Climate Schedules

```
POST /thermostats/schedules/list ⇒ { thermostat_schedules: [thermostat_schedule, …] }
```

Returns a list of all [climate schedules](https://docs.seam.co/latest/capability-guides/thermostats/creating-and-managing-climate-schedules) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

## Request Parameters

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

### `user_identifier_key`

Type: `string`
Required: No

User identifier key by which to filter the list of returned climate schedules.

***

## Return Type

Array<[thermostat\_schedule](./)>
