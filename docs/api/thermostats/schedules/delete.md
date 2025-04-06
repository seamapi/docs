# Delete a Thermostat Schedule

Deletes a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% hint style="success" %}
```
POST /thermostats/schedules/delete ⇒ void
```
{% endhint %}

## Parameters

**`thermostat_schedule_id`** *String* (Required)

ID of the desired thermostat schedule.

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
