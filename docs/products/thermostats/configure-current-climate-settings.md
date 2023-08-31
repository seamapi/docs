---
description: Learn about how to configure the current climate settings on a thermostat.
---

# Set HVAC and fan mode settings

## Overview

Seam allows you to adjust the current heating and cooling settings, and the fan mode of a thermostat. This guide will walk you through how to do this with the API.

When you send a command to change a setting, it might take a while for Seam to confirm the action's success. To handle this, Seam provides [an "action attempt" object](../../core-concepts/action-attempts.md), which indicates whether the action was successful.

To ensure that the action has been successfully executed, we advise checking the status of the action attempt object by polling the ["Get Action Attempt" request](../../api-clients/action-attempt/get-action-attempt.md). Once Seam has successfully adjusted the thermostat setting, the action attempt's `status` will indicate `success`.

For those who prefer using webhooks to verify the success of an action, we'll soon introduce events that indicate changes to the thermostat's climate settings.

### Verifying that an thermostat setting action has succeeded

#### 1. Execute a "Heat" request (or other mode setting action)

When initiating a change in the thermostat settings, the Seam API returns an action attempt, which monitors the success or failure of the action.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```
curl --request POST "https://connect.getseam.com/thermostats/heat" \
--header "Authorization: Bearer ${API_KEY}" \
--header "Content-Type: application/json" \
--header "Seam-Workspace: ${WORKSPACE_ID}" \
--data-raw "{
  \"device_id\": \"${DEVICE_ID}\",
  \"heating_set_point_celsius\": 25
}"
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT",
    "action_attempt_id": "00000000-0000-0000-0000-000000000000",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

#### 2. Poll the "Get Action Attempt" request to verify the setting change

Use the `action_attempt_id` from the prior response to make a [Get Action Attempt request](../../api-clients/action-attempt/get-action-attempt.md). When the action attempt's `status` changes to `success`, it indicates the setting modification has been successful.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl --silent --request GET "https://connect.getseam.com/action_attempts/get" \
    --header "Authorization: Bearer ${API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Seam-Workspace: ${WORKSPACE_ID}" \
    --data-raw "{\"action_attempt_id\": \"$action_attempt_id\"}"
```

**Response:**

```
{
  "action_attempt": {
    "status": "success",
    "action_type": "SET_HEAT",
    "action_attempt_id": "00000000-0000-0000-0000-000000000000",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Set to Heat Mode

You can [set a thermostat to operate in heating mode](../../api-clients/thermostats/set-to-heat-mode.md) and specify a desired temperature. By establishing the set point, the thermostat will activate its heating system to maintain the specified  temperature.

Set the HVAC Mode to `heat` by providing the `device_id` of the thermostat and the "heating set point" in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl --request POST 'https://connect.getseam.com/thermostats/heat' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: ${WORKSPACE_ID}' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "heating_set_point_celsius": 25
 }'
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Set to Cool Mode

You can [set a thermostat to operate in cooling mode](../../api-clients/thermostats/set-to-cool-mode.md) and specify a desired temperature. By establishing the set point, the thermostat will activate its cooling system to maintain the specified  temperature.

Set the HVAC Mode to `cool` by providing the `device_id` of the thermostat and the "cooling set point" in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl --request POST 'https://connect.getseam.com/thermostats/cool' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: ${WORKSPACE_ID}' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "cooling_set_point_celsius": 25
 }'
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_COOL",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Set to Heat-Cool Mode

You can [set a thermostat to operate in heat-cool (or "auto") mode](../../api-clients/thermostats/set-to-heat-cool-auto-mode.md) and specify desired temperatures for both heating and cooling. By establishing the set points, the thermostat will activate its systems as needed to maintain the specified temperature range.

Set the HVAC Mode to `heat_cool` by providing the `device_id` of the thermostat and both the "heating set point" and "cooling set point" in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl --request POST 'https://connect.getseam.com/thermostats/heat_cool' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: ${WORKSPACE_ID}' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "cooling_set_point_celsius": 25,
  "heating_set_point_celsius": 20
 }'
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT_COOL",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Turn off heating and cooling

You can [set a thermostat to operate in "off" mode](../../api-clients/thermostats/set-to-off-mode.md), which deactivates its heating and cooling systems. In this state, the thermostat will not regulate indoor temperatures.

Set the HVAC Mode to `off` by providing the `device_id` of the thermostat.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl --request POST 'https://connect.getseam.com/thermostats/off' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: ${WORKSPACE_ID}' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000"
 }'
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_OFF",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Set the Fan Mode

You can [configure a thermostat's fan](../../api-clients/thermostats/set-fan-mode.md) to operate in either `on` or `auto` mode. In the "on" setting, the fan runs continuously, while in "auto" mode, the fan operates based on temperature needs and system demands.

Set the Fan Mode by providing the `device_id` of the thermostat and specifying the desired fan setting.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl --request POST 'https://connect.getseam.com/thermostats/off' \
--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--header 'Seam-Workspace: ${WORKSPACE_ID}' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000",
  "fan_mode": "on"
 }'
```

**Response:**

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_FAN_MODE",
    "action_attempt_id": "22222222-2222-2222-2222-222222222222",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
