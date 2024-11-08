# Thermostat Schedules

## `thermostat_schedule`

### Properties

#### `climate_preset_key`

Format: `String`

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the climate schedule.


---

#### `created_at`

Format: `Datetime`

Date and time at which the climate schedule was created.


---

#### `device_id`

Format: `ID`

ID of the desired thermostat device.


---

#### `ends_at`

Format: `Datetime`

Date and time at which the climate schedule ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


---

#### `max_override_period_minutes`

Format: `Number`

Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled climate preset. See also [Specifying Manual Override Permissions](https://docs.seam.co/latest/capability-guides/thermostats/creating-and-managing-climate-schedules#specifying-manual-override-permissions).


---

#### `name`

Format: `String`

User-friendly name to identify the climate schedule.


---

#### `starts_at`

Format: `Datetime`

Date and time at which the climate schedule starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


---

#### `thermostat_schedule_id`

Format: `ID`

ID of the climate schedule.


---

## Endpoints

### [`/thermostats/schedules/create`](./create.md)

Creates a [climate schedule](https://docs.seam.co/latest/capability-guides/thermostats/creating-and-managing-climate-schedules) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/schedules/delete`](./delete.md)

Deletes a [climate schedule](https://docs.seam.co/latest/capability-guides/thermostats/creating-and-managing-climate-schedules) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/schedules/get`](./get.md)

Returns a specified [climate schedule](https://docs.seam.co/latest/capability-guides/thermostats/creating-and-managing-climate-schedules).
### [`/thermostats/schedules/list`](./list.md)

Returns a list of all [climate schedules](https://docs.seam.co/latest/capability-guides/thermostats/creating-and-managing-climate-schedules) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).
### [`/thermostats/schedules/update`](./update.md)

Updates a specified [climate schedule](https://docs.seam.co/latest/capability-guides/thermostats/creating-and-managing-climate-schedules).
