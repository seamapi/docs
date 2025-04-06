# Get a Thermostat Schedule

Returns a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

{% hint style="success" %}
```
POST /thermostats/schedules/get ⇒ { thermostat_schedule }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`thermostat_schedule_id`** *string*
Required: Yes

ID of the desired thermostat schedule.

---


## Return Type

[thermostat\_schedule](./)
