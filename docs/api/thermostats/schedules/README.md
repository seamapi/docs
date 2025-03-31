# Thermostat Schedules

The Thermostat Schedules route contains the following resources:

## The `thermostat_schedule` Resource

Represents a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) that activates a configured [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) on a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) at a specified starting time and deactivates the climate preset at a specified ending time.

---

## Properties

**`climate_preset_key`** *String*

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


---

**`created_at`** *Datetime*

Date and time at which the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) was created.


---

**`device_id`** *UUID*

ID of the desired [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) device.


---

**`ends_at`** *Datetime*

Date and time at which the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


---

**`errors`** *List* *of Objects*

Errors associated with the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

<details>

<summary>Child Object Properties</summary>

- <code><b>error_code</b></code> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.



- <code><b>message</b></code> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.


</details>


---

**`max_override_period_minutes`** *Number*

Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md). See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).


---

**`name`** *String*

User-friendly name to identify the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


---

**`starts_at`** *Datetime*

Date and time at which the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


---

**`thermostat_schedule_id`** *UUID*

ID of the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


---

## Endpoints


[**`/thermostats/schedules/create`**](./create.md)

Creates a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/schedules/delete`**](./delete.md)

Deletes a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/schedules/get`**](./get.md)

Returns a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


[**`/thermostats/schedules/list`**](./list.md)

Returns a list of all [thermostat schedules](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/schedules/update`**](./update.md)

Updates a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


