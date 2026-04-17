# Daily Programs

## The thermostat_daily_program Object

- [Properties](./#properties)
- [Endpoints](./#endpoints)


Represents a thermostat daily program, consisting of a set of periods, each of which has a starting time and the key that identifies the climate preset to apply at the starting time.

{% tabs %}
{% tab title="Thermostat Daily Program" %}

A thermostat daily program resource.

```json
{
  "created_at": "2025-06-14T16:54:17.946642Z",
  "device_id": "58437d45-47ac-4ee6-ab27-7b2d1f2947d1",
  "name": "Weekday Program",
  "periods": [
    { "starts_at_time": "07:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "09:00:00", "climate_preset_key": "Away" },
    { "starts_at_time": "16:00:00", "climate_preset_key": "Home" },
    { "starts_at_time": "22:30:00", "climate_preset_key": "Sleep" }
  ],
  "thermostat_daily_program_id": "ab8ef74c-c7cd-4100-aa32-0ef960c0080d",
  "workspace_id": "8da8d923-e55b-45cd-84a3-6c96b3d3d454"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`created_at`** *Datetime*

Date and time at which the thermostat daily program was created.




---

**`device_id`** *UUID*

ID of the thermostat device on which the thermostat daily program is configured.




---

**`name`** *String*

User-friendly name to identify the thermostat daily program.




---

**`periods`** *List* *of Objects*

Array of thermostat daily program periods.



<details>
  <summary>Child Object Properties</summary>
<strong><code>climate_preset_key</code></strong> <i>String</i>

  Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to activate at the `starts_at_time`.

<strong><code>starts_at_time</code></strong> <i>String</i>

  Time at which the thermostat daily program period starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

</details>

---

**`thermostat_daily_program_id`** *UUID*

ID of the thermostat daily program.




---

**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the thermostat daily program.




---

## Endpoints


[**`/thermostats/daily_programs/create`**](./create.md)

Creates a new thermostat daily program. A daily program consists of a set of periods, where each period includes a start time and the key of a configured climate preset. Once you have defined a daily program, you can assign it to one or more days within a weekly program.


[**`/thermostats/daily_programs/delete`**](./delete.md)

Deletes a thermostat daily program.


[**`/thermostats/daily_programs/update`**](./update.md)

Updates a specified thermostat daily program. The periods that you specify overwrite any existing periods for the daily program.


