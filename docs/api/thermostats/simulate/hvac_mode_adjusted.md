# HVAC Mode Adjusted

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates having adjusted the [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) for a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats). Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/simulate/hvac_mode_adjusted ⇒ void
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
<tr><th style="width:25%">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>device_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the desired thermostat device.
</td></tr>
<tr><td><strong><code>hvac_mode</code></strong> <i>String</i> (Required)</td>
<td>

Desired [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) to simulate.
</td></tr>
<tr><td><strong><code>cooling_set_point_celsius</code></strong> <i>Number</i></td>
<td>

Desired simulated cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set `cooling_set_point_celsius` or `cooling_set_point_fahrenheit`.
</td></tr>
<tr><td><strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i></td>
<td>

Desired simulated cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set `cooling_set_point_fahrenheit` or `cooling_set_point_celsius`.
</td></tr>
<tr><td><strong><code>heating_set_point_celsius</code></strong> <i>Number</i></td>
<td>

Desired simulated heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set `heating_set_point_celsius` or `heating_set_point_fahrenheit`.
</td></tr>
<tr><td><strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i></td>
<td>

Desired simulated heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set `heating_set_point_fahrenheit` or `heating_set_point_celsius`.
</td></tr>
</table>

## Response

void
