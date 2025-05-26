# Temperature Reached

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) reaching a specified temperature. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/simulate/temperature_reached ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the desired thermostat device.

---

**`temperature_celsius`** *Number*

Desired simulated temperature in °C. You must set `temperature_celsius` or `temperature_fahrenheit`.

---

**`temperature_fahrenheit`** *Number*

Desired simulated temperature in °F. You must set `temperature_fahrenheit` or `temperature_celsius`.

---


## Response

void
