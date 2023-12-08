---
description: Learn how to configure the current climate settings on a thermostat.
---

# Setting the Current HVAC and Fan Mode Settings

Seam enables you to adjust the [current heating and cooling settings](configure-current-climate-settings.md#current-climate-setting) on a smart thermostat, including the [HVAC mode](hvac-mode.md) and its corresponding [set points](set-points.md). It also enables you to configure the [fan mode](configure-current-climate-settings.md#fan-mode). This guide explains how to use the Seam API to perform these actions.

When you send a command to change a setting on a thermostat, it might take a while for Seam to confirm the success of the action. To handle this potential delay, Seam provides an[ action attempt ](../../core-concepts/action-attempts.md)object that tracks the status of the action, indicating whether the action was successful.

To ensure that the action has executed successfully, poll the status of the action attempt object using the [Get Action Attempt](../../api-clients/action-attempt/get-action-attempt.md) request. Once Seam has successfully adjusted the thermostat setting, the `status` of the action attempt indicates `success`.

***

## Current Climate Setting

The set of current heating, ventilation, and air conditioning (HVAC) settings on a thermostat includes the following:

* The [HVAC mode](hvac-mode.md)
* The corresponding [set points](set-points.md) in Fahrenheit or Celsius

To set the HVAC mode and set points, issue a thermostat [`heat`](configure-current-climate-settings.md#set-a-thermostat-to-heat-mode), [`cool`](configure-current-climate-settings.md#set-a-thermostat-to-cool-mode), [`heat_cool`](configure-current-climate-settings.md#set-a-thermostat-to-heat-cool-mode), or [`off`](configure-current-climate-settings.md#turn-off-heating-and-cooling) request and include the desired set points in the body of the request. When you issue one of these commands, Seam sets the `hvac_mode_setting` accordingly.

***

## Fan Mode

The fan mode includes the following options:

* **`on`:** The fan continuously operates, ensuring air circulation, regardless of the heating or cooling demand.
* **`auto`:** The fan activates only when heating or cooling is on, making this setting a more energy-efficient choice.

Seam supports a single ongoing fan mode setting.

***

## Before You Begin

To confirm that Seam supports thermostat programming for your device, use [Get Device](../../api-clients/devices/get-device.md) or [Get Thermostat](../../thermostats/get-thermostat.md) to query the device and check its `capabilities_supported` property. Ensure that the `capabilities_supported` list includes `thermostat`. For more information, see [Retrieving Individual Thermostats](retrieving-thermostats.md#retrieving-individual-thermostats).

***

## Process Overview

To configure and then verify a climate setting on a thermostat, perform the following steps:

### 1. Execute the Climate Setting Request

Issue one of the following requests:

<table><thead><tr><th width="250">Climate Setting Request</th><th>Description</th></tr></thead><tbody><tr><td><a href="configure-current-climate-settings.md#set-a-thermostat-to-heat-mode">Heat</a></td><td>Set the thermostat to heat mode.</td></tr><tr><td><a href="configure-current-climate-settings.md#set-a-thermostat-to-cool-mode">Cool</a></td><td>Set the thermostat to cool mode.</td></tr><tr><td><a href="configure-current-climate-settings.md#set-a-thermostat-to-heat-cool-mode">Heat-Cool</a></td><td>Set the thermostat to dual heat-cool (auto) mode.</td></tr><tr><td><a href="configure-current-climate-settings.md#turn-off-heating-and-cooling">Off</a></td><td>Turn off the thermostat.</td></tr><tr><td><a href="configure-current-climate-settings.md#set-the-fan-mode">Fan Mode</a></td><td>Set the fan mode to <code>on</code> or <code>off</code>.</td></tr></tbody></table>

The Seam API returns an action attempt ([`action_attempt`](../../api-clients/action-attempt/) object) that monitors the status of the action.

The following example issues a request to set a specific thermostat to heat mode with a heating set point of 20° C:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
heat_request = seam.thermostats.heat(
  device = "518f692b-f865-4590-8c3e-3849e9984c75",
  heating_set_point_celsius = 20
)

pprint(heat_request)
```

**Response:**

```
ActionAttempt(action_attempt_id='97125745-15d9-4970-b5be-c34ec3ce1c81',
              action_type='SET_HEAT',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/heat' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "heating_set_point_celsius": 20
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT",
    "action_attempt_id": "7f7f6e18-2c50-46bb-9ace-f52d05069db4",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const heat_request = await seam.thermostats.heat({
      device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
      heating_set_point_celsius: 20
})

console.log(heat_request)
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '38c06dba-99b1-4c10-b542-f98e2963cb52',
    action_type: 'SET_HEAT',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
seam.thermostats().heat(ThermostatsHeatRequest.builder()
                .deviceId(deviceId)
                .heatingSetPointCelsius(20.0)
                .build());
Device thermostat = seam.thermostats()
        .get(ThermostatsGetRequest.builder()
                .deviceId(deviceId)
                .build());
System.out.println("Thermostat ID: " + thermostat.getDeviceId());
System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
System.out.println("Heating set point (Celsius): " +
  thermostat.getProperties().getCurrentClimateSetting().get().getHeatingSetPointCelsius());
```

**Response:**

```
Thermostat ID: 518f692b-f865-4590-8c3e-3849e9984c75
Mode: Optional[heat]
Heating set point (Celsius): Optional[20.0]
```
{% endtab %}
{% endtabs %}

### 2. Poll the Action Attempt to Verify the Setting Change

Use the `action_attempt_id` from the previous response to poll the associated action attempt using the [Get Action Attempt](../../api-clients/action-attempt/get-action-attempt.md) request. When the setting modification completes successfully, the `status` of the action attempt changes to `success`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.action_attempts.get(action_attempt="4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"))
```

**Response:**

```
ActionAttempt(action_attempt_id='4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90',
              action_type='SET_HEAT',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/action_attempts/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "action_attempt_id": "4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"
}'
```

**Response:**

```
{
  "action_attempt": {
    "status": "success",
    "action_attempt_id": "4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90",
    "action_type": "SET_HEAT",
    "result": {},
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.actionAttempts.get("4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"))
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90',
  action_type: 'SET_HEAT',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
ActionAttempt attempt = seam.actionAttempts()
        .get(ActionAttemptsGetRequest.builder()
                .actionAttemptId("4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90")
                .build());
System.out.println(attempt.isSuccess());
```

**Response:**

```json
true
```
{% endtab %}
{% endtabs %}

***

## Set the Current HVAC and Fan Mode Settings

The following sections describe how to se the current climate settings on a thermostat:

### Set a Thermostat to Heat Mode

You can [set a thermostat to operate in heating mode](../../api-clients/thermostats/set-to-heat-mode.md) and specify a desired heating set point temperature. By establishing the set point, the thermostat activates the associated heating system to maintain the specified temperature.

Set the HVAC mode to `heat` by providing the `device_id` of the thermostat and the heating set point in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
heat_request = seam.thermostats.heat(
  device = "518f692b-f865-4590-8c3e-3849e9984c75",
  heating_set_point_celsius = 20
)

pprint(heat_request)
```

**Response:**

```
ActionAttempt(action_attempt_id='97125745-15d9-4970-b5be-c34ec3ce1c81',
              action_type='SET_HEAT',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/heat' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "heating_set_point_celsius": 20
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT",
    "action_attempt_id": "7f7f6e18-2c50-46bb-9ace-f52d05069db4",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const heat_request = await seam.thermostats.heat({
      device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
      heating_set_point_celsius: 20
})

console.log(heat_request)
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '38c06dba-99b1-4c10-b542-f98e2963cb52',
    action_type: 'SET_HEAT',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
seam.thermostats().heat(ThermostatsHeatRequest.builder()
                .deviceId(deviceId)
                .heatingSetPointCelsius(20.0)
                .build());
Device thermostat = seam.thermostats()
        .get(ThermostatsGetRequest.builder()
                .deviceId(deviceId)
                .build());
System.out.println("Thermostat ID: " + thermostat.getDeviceId());
System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
System.out.println("Heating set point (Celsius): " +
  thermostat.getProperties().getCurrentClimateSetting().get().getHeatingSetPointCelsius());
```

**Response:**

```json
Thermostat ID: 518f692b-f865-4590-8c3e-3849e9984c75
Mode: Optional[heat]
Heating set point (Celsius): Optional[20.0]
```
{% endtab %}
{% endtabs %}

***

### Set a Thermostat to Cool Mode

You can [set a thermostat to operate in cooling mode](../../api-clients/thermostats/set-to-cool-mode.md) and specify a desired cooling set point temperature. By establishing the set point, the thermostat activates the associated cooling system to maintain the specified temperature.

Set the HVAC mode to `cool` by providing the `device_id` of the thermostat and the cooling set point in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
cool_request = seam.thermostats.cool(
  device = "518f692b-f865-4590-8c3e-3849e9984c75",
  cooling_set_point_celsius = 25
)

pprint(cool_request)
```

**Response:**

```
ActionAttempt(action_attempt_id='87478724-0e30-4fed-9f2a-456971b7b04f',
              action_type='SET_COOL',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/cool' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "cooling_set_point_celsius": 25
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_COOL",
    "action_attempt_id": "6c5fa5eb-aece-4258-9eeb-24cd24c44a8c",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const cool_request = await seam.thermostats.cool({
      device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
      cooling_set_point_celsius: 25
})

console.log(cool_request)
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '3ef9ff5a-0d50-40a4-9ef4-94f44e923e6e',
    action_type: 'SET_COOL',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
seam.thermostats().update(ThermostatsUpdateRequest.builder()
                .deviceId(deviceId)
                .defaultClimateSetting(ThermostatsUpdateRequestDefaultClimateSetting.builder()
                        .hvacModeSetting(HvacModeSetting.COOL)
                        .coolingSetPointCelsius(25.0)
                        .manualOverrideAllowed(true)
                        .build())
                .build());
Device thermostat = seam.thermostats()
        .get(ThermostatsGetRequest.builder()
                .deviceId(deviceId)
                .build());
System.out.println("Thermostat ID: " + thermostat.getDeviceId());
System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
System.out.println("Cooling set point (Celsius): " +
  thermostat.getProperties().getCurrentClimateSetting().get().getCoolingSetPointCelsius());
```

**Response:**

```json
Thermostat ID: 518f692b-f865-4590-8c3e-3849e9984c75
Mode: Optional[cool]
Cooling set point (Celsius): Optional[25.0]
```
{% endtab %}
{% endtabs %}

***

### Set a Thermostat to Heat-Cool Mode

You can [set a thermostat to operate in heat-cool (also known as "auto") mode](../../api-clients/thermostats/set-to-heat-cool-auto-mode.md) and specify desired set point temperatures for both heating and cooling. By establishing the set points, the thermostat activates the associated heating and cooling systems as needed to maintain the specified temperature range.

Set the HVAC mode to `heat_cool` by providing the `device_id` of the thermostat and both the heating set point and the cooling set point in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
heat_and_cool_request = seam.thermostats.heat_cool(
  device = "518f692b-f865-4590-8c3e-3849e9984c75",
  heating_set_point_celsius = 20,
  cooling_set_point_celsius = 25
)

pprint(heat_and_cool_request)
```

**Response:**

```
ActionAttempt(action_attempt_id='8050ec59-7f29-4d0d-9842-dedaf304740d',
              action_type='SET_HEAT_COOL',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/heat_cool' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "heating_set_point_celsius": 20,
  "cooling_set_point_celsius": 25
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT_COOL",
    "action_attempt_id": "961b93c0-0397-4737-b96b-1379f6715a2f",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const heat_cool_request = await seam.thermostats.heatCool({
      device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
      heating_set_point_celsius: 20,
      cooling_set_point_celsius: 25,
})
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '13229a60-38ce-4fec-bd93-85674e2257ff',
    action_type: 'SET_HEAT_COOL',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
seam.thermostats().update(ThermostatsUpdateRequest.builder()
                .deviceId(deviceId)
                .defaultClimateSetting(ThermostatsUpdateRequestDefaultClimateSetting.builder()
                        .hvacModeSetting(HvacModeSetting.HEAT_COOL)
                        .heatingSetPointCelsius(20.0)
                        .coolingSetPointCelsius(25.0)
                        .manualOverrideAllowed(true)
                        .build())
                .build());
Device thermostat = seam.thermostats()
        .get(ThermostatsGetRequest.builder()
                .deviceId(deviceId)
                .build());
System.out.println("Thermostat ID: " + thermostat.getDeviceId());
System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
System.out.println("Heating set point (Celsius): " +
  thermostat.getProperties().getCurrentClimateSetting().get().getHeatingSetPointCelsius());
System.out.println("Cooling set point (Celsius): " +
  thermostat.getProperties().getCurrentClimateSetting().get().getCoolingSetPointCelsius());
```

**Response:**

```json
Thermostat ID: 518f692b-f865-4590-8c3e-3849e9984c75
Mode: Optional[heat_cool]
Heating set point (Celsius): Optional[20.0]
Cooling set point (Celsius): Optional[25.0]
```
{% endtab %}
{% endtabs %}

***

### Turn off Heating and Cooling

You can [set a thermostat to operate in "off" mode](../../api-clients/thermostats/set-to-off-mode.md), which deactivates the associated heating and cooling systems. In this state, the thermostat does not regulate indoor temperatures.

Set the HVAC mode to `off` by providing the `device_id` of the thermostat.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
off_request = seam.thermostats.off(
  device = "518f692b-f865-4590-8c3e-3849e9984c75"
)

pprint(off_request)
```

**Response:**

```
ActionAttempt(action_attempt_id='ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd',
              action_type='SET_THERMOSTAT_OFF',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/off' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_THERMOSTAT_OFF",
    "action_attempt_id": "724563fb-d8a4-46b3-81ce-5cbf26008c83",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const off_request = await seam.thermostats.off({
      device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
})

console.log(off_request)
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: 'fffbe81e-f098-4c5f-b4a2-410dd036ae5b',
    action_type: 'SET_THERMOSTAT_OFF',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
seam.thermostats().update(ThermostatsUpdateRequest.builder()
                .deviceId(deviceId)
                .defaultClimateSetting(ThermostatsUpdateRequestDefaultClimateSetting.builder()
                        .hvacModeSetting(HvacModeSetting.OFF)
                        .build())
                .build());
Device thermostat = seam.thermostats()
        .get(ThermostatsGetRequest.builder()
                .deviceId(deviceId)
                .build());
System.out.println("Thermostat ID: " + thermostat.getDeviceId());
System.out.println("Mode: " + thermostat.getProperties().getCurrentClimateSetting().get().getHvacModeSetting());
```

**Response:**

```json
Thermostat ID: 518f692b-f865-4590-8c3e-3849e9984c75
Mode: Optional[off]
```
{% endtab %}
{% endtabs %}

***

### Set the Fan Mode

You can [configure the fan associated with a thermostat](../../api-clients/thermostats/set-fan-mode.md) to operate in either `on` or `auto` mode. In the `on` setting, the fan runs continuously, while in the `auto` setting, the fan operates based on temperature needs and system demands.

Set the fan mode by providing the `device_id` of the thermostat and specifying the desired fan mode setting.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
fan_on_request = seam.thermostats.set_fan_mode(
  device = "518f692b-f865-4590-8c3e-3849e9984c75",
  fan_mode = "on"
)

pprint(fan_on_request)
```

**Response:**

```
ActionAttempt(action_attempt_id='9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
              action_type='SET_FAN_MODE',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/set_fan_mode' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "fan_mode": "on"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_FAN_MODE",
    "action_attempt_id": "fb621149-ddcb-4672-84f5-55562dbfdb0b",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const fan_on_request = await seam.thermostats.setFanMode({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
  fan_mode_setting: "on"
})

console.log(fan_on_request)
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: 'fca8cb4f-6e0c-4c37-878b-ebe17df46456',
    action_type: 'SET_FAN_MODE',
    result: {},
    error: null
  }
}
```
{% endtab %}
{% endtabs %}
