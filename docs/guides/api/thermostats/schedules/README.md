# Thermostat Schedules

## The thermostat_schedule Object

- [Properties](./#properties)
- [Endpoints](./#endpoints)


Represents a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) that activates a configured [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) on a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) at a specified starting time and deactivates the climate preset at a specified ending time.

{% tabs %}
{% tab title="Thermostat Schedule" %}

A thermostat schedule resource.

```json
{
  "climate_preset_key": "eco",
  "created_at": "2025-06-14T16:54:17.946316Z",
  "device_id": "dc1dfc4b-8082-453f-a953-276941af8650",
  "ends_at": "2025-07-14T16:54:17.946313Z",
  "errors": [],
  "is_override_allowed": true,
  "max_override_period_minutes": 90,
  "name": "My Thermostat Schedule",
  "starts_at": "2025-07-12T16:54:17.946313Z",
  "thermostat_schedule_id": "af2cb7f7-9f28-40da-a0a0-e7a008ef7a35",
  "workspace_id": "58419b36-6103-44e5-aa83-2163e90cce01"
}
```
{% endtab %}
{% endtabs %}

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
<strong><code>error_code</code></strong> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

<strong><code>message</code></strong> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

---

**`is_override_allowed`** *Boolean*

Indicates whether a person at the thermostat can change the thermostat's settings after the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts.




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

**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the thermostat schedule.




---

## Endpoints


[**`/thermostats/schedules/create`**](./create.md)

Creates a new [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/schedules/delete`**](./delete.md)

Deletes a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/schedules/get`**](./get.md)

Returns a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


[**`/thermostats/schedules/list`**](./list.md)

Returns a list of all [thermostat schedules](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/schedules/update`**](./update.md)

Updates a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


