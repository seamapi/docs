# Thermostat Schedules

## The thermostat_schedule Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) that activates a configured [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) on a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) at a specified starting time and deactivates the climate preset at a specified ending time.

{% tabs %}
{% tab title="JSON" %}
```json
{
  climate_preset_key: [example value],
  created_at: [example value],
  device_id: [example value],
  ends_at: [example value],
  errors: [example value],
  max_override_period_minutes: [example value],
  name: [example value],
  starts_at: [example value],
  thermostat_schedule_id: [example value]
}
```
{% endtab %}
{% endtabs %}

---

## Properties

<table>
<tr><th style="width:25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>climate_preset_key</code></strong> <i>String</i></td>
<td>
Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


</td></tr>

<tr><td><strong><code>created_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) was created.


</td></tr>

<tr><td><strong><code>device_id</code></strong> <i>UUID</i></td>
<td>
ID of the desired [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) device.


</td></tr>

<tr><td><strong><code>ends_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


</td></tr>

<tr><td><strong><code>errors</code></strong> <i>List</i> <i>of Objects</i></td>
<td>
Errors associated with the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

<details>

<summary>Child Object Properties</summary>

- <strong><code>error_code</code></strong> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.



- <strong><code>message</code></strong> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.


</details>


</td></tr>

<tr><td><strong><code>max_override_period_minutes</code></strong> <i>Number</i></td>
<td>
Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md). See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).


</td></tr>

<tr><td><strong><code>name</code></strong> <i>String</i></td>
<td>
User-friendly name to identify the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


</td></tr>

<tr><td><strong><code>starts_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


</td></tr>

<tr><td><strong><code>thermostat_schedule_id</code></strong> <i>UUID</i></td>
<td>
ID of the [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


</td></tr>

</table>
</table>

## Endpoints

<table>
<tr><th width="25%">Endpoint</th><th>Description</th></tr>

<tr><td><a href="./create.md"><strong><code>/thermostats/schedules/create</code></strong></a></td>

<td>Creates a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).</td></tr>


<tr><td><a href="./delete.md"><strong><code>/thermostats/schedules/delete</code></strong></a></td>

<td>Deletes a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).</td></tr>


<tr><td><a href="./get.md"><strong><code>/thermostats/schedules/get</code></strong></a></td>

<td>Returns a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).</td></tr>


<tr><td><a href="./list.md"><strong><code>/thermostats/schedules/list</code></strong></a></td>

<td>Returns a list of all [thermostat schedules](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).</td></tr>


<tr><td><a href="./update.md"><strong><code>/thermostats/schedules/update</code></strong></a></td>

<td>Updates a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).</td></tr>

</table>
