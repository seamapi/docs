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

<table>
<tr><th width="250">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>device_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the desired thermostat device.
</td></tr>
<tr><td><strong><code>temperature_celsius</code></strong> <i>Number</i></td>
<td>

Desired simulated temperature in °C. You must set `temperature_celsius` or `temperature_fahrenheit`.
</td></tr>
<tr><td><strong><code>temperature_fahrenheit</code></strong> <i>Number</i></td>
<td>

Desired simulated temperature in °F. You must set `temperature_fahrenheit` or `temperature_celsius`.
</td></tr>
</table>

## Response

void
