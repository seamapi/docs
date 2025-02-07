# HVAC Mode Adjusted

```
POST /thermostats/simulate/hvac_mode_adjusted ⇒ void
```

Simulates having adjusted the [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) for a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats). Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

## Return Type

void
