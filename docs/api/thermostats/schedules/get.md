# Get a Thermostat Schedule

Returns a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

{% hint style="success" %}
```
POST /thermostats/schedules/get ⇒ { thermostat_schedule }
```
{% endhint %}

## Parameters

**`thermostat_schedule_id`** ** (Required)

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

[thermostat\_schedule](./)
