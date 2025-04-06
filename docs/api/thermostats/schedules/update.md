# Update a Thermostat Schedule

Updates a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

{% hint style="success" %}
```
PATCH /thermostats/schedules/update ⇒ void
```
{% endhint %}

## Parameters

**`thermostat_schedule_id`** *String* (Required)

ID of the desired thermostat schedule.

---

**`climate_preset_key`** *String*

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the thermostat schedule.

---

**`ends_at`** *String*

Date and time at which the thermostat schedule ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`is_override_allowed`** *Boolean*

Indicates whether a person at the thermostat or using the API can change the thermostat's settings while the schedule is active. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`max_override_period_minutes`** *Number*

Number of minutes for which a person at the thermostat or using the API can change the thermostat's settings after the activation of the scheduled climate preset. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`name`** *String*

User-friendly name to identify the thermostat schedule.

---

**`starts_at`** *String*

Date and time at which the thermostat schedule starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

void
