---
description: >-
  Learn how to set the default HVAC settings that apply whenever a climate
  setting schedule ends.
---

# Setting the Default Climate Setting

Seam enables you to configure the [default HVAC settings](setting-the-default-climate-setting.md#default-climate-setting) on a smart thermostat. The default climate settings applies when a [climate setting schedule](thermostats-climate-setting-schedules.md) ends.

For example, a short-term-rental host may want to configure a more energy-saving temperature setting (for example, heat to 45° F) for when the unit is vacant.

{% hint style="info" %}
You must set the default climate setting for a thermostat, before you can create any climate setting schedules.
{% endhint %}

***

## Default Climate Setting

The set of default HVAC settings on a thermostat applies when a [climate setting schedule](thermostats-climate-setting-schedules.md) ends—such as when the room, unit, or home becomes vacant. For example, a short-term-rental host may want to configure a more energy-saving temperature setting (for example, heat to 45° F) for when the unit is vacant.

The default HVAC settings include the following:

* The [HVAC mode](../../../products/thermostats/hvac-mode.md)
* Whether the automatic heating system is enabled
* Whether the automatic cooling system is enabled
* The corresponding [set points](../../../products/thermostats/set-points.md) in Fahrenheit or Celsius
* Whether to allow manual overrides of these settings

***

## Before You Begin

To confirm that Seam supports thermostat programming for your device, use [Get Device](../../../api-clients/devices/get-device.md) or [Get Thermostat](../../../thermostats/get-thermostat.md) to query the device and check its `capabilities_supported` property. Ensure that the `capabilities_supported` list includes `thermostat`. For more information, see [Retrieving Individual Thermostats](../../../products/thermostats/retrieving-thermostats.md#retrieving-individual-thermostats).

***

## Set the Default Climate Setting

To set the default climate setting, issue an [Update Thermostat](../../../api-clients/thermostats/update-a-thermostat.md) request. In the body of the request, specify the `device_id` of the thermostat, as well as a [`default_climate_setting`](../../../thermostats/#climate-setting-properties) object containing the following parameters:

<table><thead><tr><th width="301">Parameter</th><th width="95">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>automatic_heating_enabled</code></td><td>Boolean</td><td>Indicates whether the automatic heating system is enabled<br>If you specify <code>automatic_heating_enabled</code>, you must also specify <code>heating_set_point_celsius</code> or <code>heating_set_point_fahrenheit</code>.<br>Also, if you specify <code>automatic_heating_enabled</code>, Seam automatically sets <code>hvac_mode_setting</code> accordingly.</td></tr><tr><td><code>automatic_cooling_enabled</code></td><td>Boolean</td><td>Indicates whether the automatic cooling system is enabled<br>If you specify <code>automatic_cooling_enabled</code>, you must also specify <code>cooling_set_point_celsius</code> or <code>cooling_set_point_fahrenheit</code>.<br>Also, if you specify <code>automatic_cooling_enabled</code>, Seam automatically sets <code>hvac_mode_setting</code> accordingly.</td></tr><tr><td><code>hvac_mode_setting</code></td><td>Enum</td><td><p>Default <a href="../../../products/thermostats/hvac-mode.md">HVAC mode</a></p><p>Values are <code>heat</code>, <code>cool</code>, <code>heat_cool</code>, and <code>off</code>.<br>If you specify <code>hvac_mode_setting</code>, you must also specify one or more of <code>cooling_set_point_celsius</code>, <code>heating_set_point_celsius</code>, <code>cooling_set_point_fahrenheit</code>, and <code>heating_set_point_fahrenheit</code>, depending on the HVAC mode.<br>Also, if you specify <code>hvac_mode_setting</code>, Seam automatically sets <code>automatic_heating_enabled</code> and <code>automatic_cooling_enabled</code> accordingly.</p></td></tr><tr><td><code>cooling_set_point_celsius</code></td><td>Number</td><td>Cooling <a href="../../../products/thermostats/set-points.md">set point</a> in Celsius<br>This set point is relevant when hvac_mode_setting is <code>cool</code> or <code>heat_cool</code> (that is, when <code>automatic_cooling_enabled</code> is <code>true</code>).</td></tr><tr><td><code>heating_set_point_celsius</code></td><td>Number</td><td>Heating <a href="../../../products/thermostats/set-points.md">set point</a> in Celsius<br>This set point is relevant when hvac_mode_setting is <code>heat</code> or <code>heat_cool</code> (that is, when <code>automatic_heating_enabled</code> is <code>true</code>).</td></tr><tr><td><code>cooling_set_point_fahrenheit</code></td><td>Number</td><td>Cooling <a href="../../../products/thermostats/set-points.md">set point</a> in Fahrenheit<br>This set point is relevant when hvac_mode_setting is <code>cool</code> or <code>heat_cool</code> (that is, when <code>automatic_cooling_enabled</code> is <code>true</code>).</td></tr><tr><td><code>heating_set_point_fahrenheit</code></td><td>Number</td><td>Heating <a href="../../../products/thermostats/set-points.md">set point</a> in Fahrenheit<br>This set point is relevant when hvac_mode_setting is <code>heat</code> or <code>heat_cool</code> (that is, when <code>automatic_heating_enabled</code> is <code>true</code>).</td></tr><tr><td><code>manual_override_allowed</code></td><td>Boolean</td><td>Indicates whether to allow manual overrides of these settings<br>If <code>true</code>, a person can override the climate setting by making adjustments from the thermostat itself or from their app. We recommend setting <code>manual_override_allowed</code> to <code>true</code>, unless you do not want anyone to change this thermostat setting.<br>If <code>false</code>, Seam makes sure that the climate setting is set on the thermostat every ten minutes.</td></tr></tbody></table>

Note that you configure either `hvac_mode_setting` or `automatic_heating_enabled` and `automatic_cooling_enabled`. When you configure `hvac_mode_setting`, Seam automatically configures `automatic_heating_enabled` and `automatic_cooling_enabled` correspondingly. Conversely, when you configure `automatic_heating_enabled` and `automatic_cooling_enabled`, Seam automatically configures `hvac_mode_setting` correspondingly. The following table shows this automatic mapping:

<table><thead><tr><th width="212.47326076668242">hvac_mode_setting</th><th width="272">automatic_heating_enabled</th><th>automatic_cooling_enabled</th></tr></thead><tbody><tr><td><code>heat</code></td><td><code>true</code></td><td><code>false</code></td></tr><tr><td><code>cool</code></td><td><code>false</code></td><td><code>true</code></td></tr><tr><td><code>heat_cool</code></td><td><code>true</code></td><td><code>true</code></td></tr><tr><td><code>off</code></td><td><code>false</code></td><td><code>false</code></td></tr></tbody></table>

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
update = seam.thermostats.update(
    device = "518f692b-f865-4590-8c3e-3849e9984c75",
    default_climate_setting = {
      "hvac_mode_setting": "heat_cool",
      "cooling_set_point_celsius": 25,
      "heating_set_point_celsius": 20,
      "manual_override_allowed": True
    }
)

pprint(update)
```

**Response:**

```
True
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "default_climate_setting": {
    "hvac_mode_setting": "heat_cool",
    "cooling_set_point_celsius": 25,
    "heating_set_point_celsius": 20,
    "manual_override_allowed": true
  }
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const update = await seam.thermostats.update({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
  default_climate_setting: {
    "hvac_mode_setting": "heat_cool",
    "cooling_set_point_celsius": 25,
    "heating_set_point_celsius": 20,
    "manual_override_allowed": true
  }
})

console.log(update)
```

**Response:**

```json
{ ok: true }
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
                        .coolingSetPointCelsius(25.0)
                        .heatingSetPointCelsius(20.0)
                        .manualOverrideAllowed(true)
                        .build())
                .build());
var thermostat = seam.thermostats()
        .get(ThermostatsGetRequest.builder()
                .deviceId(deviceId)
                .build());
System.out.println(thermostat);
```

**Response:**

```json
{
  "device_id" : "518f692b-f865-4590-8c3e-3849e9984c75",
  "device_type" : "ecobee_thermostat",
  "capabilities_supported" : [ "thermostat" ],
  "properties" : {
    ...
    "default_climate_setting" : {
      "hvac_mode_setting" : "heat_cool",
      "manual_override_allowed" : true,
      "automatic_cooling_enabled" : true,
      "automatic_heating_enabled" : true,
      "cooling_set_point_celsius" : 25,
      "heating_set_point_celsius" : 20,
      "cooling_set_point_fahrenheit" : 77,
      "heating_set_point_fahrenheit" : 68
    },
    ...
  },
  ...
}
```
{% endtab %}
{% endtabs %}
