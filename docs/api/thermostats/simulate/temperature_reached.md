# Temperature Reached

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) reaching a specified temperature. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the thermostat device that you want to simulate reaching a specified temperature.

---

**`temperature_celsius`** *Number*

Temperature in °C that you want simulate the thermostat reaching. You must set `temperature_celsius` or `temperature_fahrenheit`.

---

**`temperature_fahrenheit`** *Number*

Temperature in °F that you want simulate the thermostat reaching. You must set `temperature_fahrenheit` or `temperature_celsius`.

---


## Response

void

