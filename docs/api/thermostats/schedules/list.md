# List Thermostat Schedules

Returns a list of all [thermostat schedules](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% hint style="success" %}
```
POST /thermostats/schedules/list ⇒ { thermostat_schedules: [thermostat_schedule, …] }
```
{% endhint %}

## Parameters

**`device_id`** *String* (Required)

ID of the desired thermostat device.

---

**`user_identifier_key`** *String*

User identifier key by which to filter the list of returned thermostat schedules.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

Array<[thermostat\_schedule](./)>
