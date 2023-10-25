---
description: >-
  Learn about specific requirements and constraints for setting HVAC modes and
  set points on thermostats.
---

# Understanding HVAC mode and set point constraints

Some models of thermostats have specific requirements and constraints when it comes to setting HVAC modes and set point temperatures. The requirements can be fetched by making a [Get Device](../../api-clients/devices/get-device.md) or [List Devices](../../api-clients/devices/list-devices.md) request.&#x20;

Sample set of thermostat HVAC mode and set point requirements:

<pre class="language-json"><code class="lang-json">{
  "thermostat": {
    "device_id": "00000000-0000-0000-0000-000000000000",
    "properties": {
      "available_hvac_mode_settings": [
        "off",
        "cool",
        "heat",
        "heat_cool"
      ],
      "can_enable_automatic_cooling": true,
      "can_enable_automatic_heating": true,
      "max_cooling_set_point_celsius": 33.333333333333336,
      "max_heating_set_point_celsius": 26.11111111111111,
      "min_cooling_set_point_celsius": 18.333333333333336,
      "min_heating_set_point_celsius": 7.222222222222222,
      "min_heating_cooling_delta_celsius": 2.7777777777777777,
      "min_heating_set_point_fahrenheit": 45,
      "max_heating_set_point_fahrenheit": 79,
      "min_cooling_set_point_fahrenheit": 65,
      "max_cooling_set_point_fahrenheit": 92,
      "min_heating_cooling_delta_fahrenheit": 5,
      ...
    },
    ...
  },
  ...
}
<strong>
</strong></code></pre>

***

## Available HVAC Mode Settings

This property is denoted as `available_hvac_mode_settings` and includes an array of available HVAC modes. For example, if the array contains `["heat", "off"]`, it means the thermostat can only be set to either `heat` or `off`  modes. The availability of heating or cooling options depends on the connected systems; if the thermostat isn't connected to a specific system, those options may be absent. For an explanation of each mode, read the ["What are HVAC modes?" guide](broken-reference).

**Example Payload:**

```json
"available_hvac_mode_settings": [
  "off",
  "cool",
  "heat",
  "heat_cool"
 ]
```

***

## Can enable heating / cooling

The settings `can_enable_automatic_cooling` and `can_enable_automatic_heating` indicate whether the thermostat supports cooling or heating modes respectively. If `can_enable_automatic_cooling` is `true`, it means the thermostat supports cooling. Similarly, if `can_enable_automatic_heating` is `true`, the thermostat supports heating. When both are true, the thermostat supports heat-cool mode (also known as "auto"). The availability of heating or cooling options depends on the connected systems; if the thermostat isn't connected to a specific system, those options may be absent. For an explanation of each mode, read the ["What are HVAC modes?" guide](broken-reference).

**Example Payload:**

```json
"can_enable_automatic_cooling": true,
"can_enable_automatic_heating": true
```

***

## Set point temperature range

The thermostat settings have restrictions on the range of set points temperatures users can choose for both cooling and heating. For cooling, the permissible temperature range is indicated in the `min_cooling_set_point_*` and `max_cooling_set_point_*` properties. For heating, the permissible temperature range is indicated in the `min_heating_set_point_*` and `max_heating_set_point_*` properties. These properties are available in both Celsius and Fahrenheit, as indicated by the suffix. Users should refer to these parameters to ensure their selected set points fall within the thermostat's defined operational limits.

**Example Payload:**

```json
"max_cooling_set_point_celsius": 33.333333333333336,
"min_cooling_set_point_celsius": 18.333333333333336,
"max_heating_set_point_celsius": 26.11111111111111,
"min_heating_set_point_celsius": 7.222222222222222,
"min_cooling_set_point_fahrenheit": 65,
"max_cooling_set_point_fahrenheit": 92,
"min_heating_set_point_fahrenheit": 45,
"max_heating_set_point_fahrenheit": 79
```

***

## Minimum heating cooling delta temperature

The properties `min_heating_cooling_delta_celsius` and `min_heating_cooling_delta_fahrenheit` denote the minimum temperature difference, or delta, between the cooling and heating set points when in Auto mode. The cooling set point must always be set higher than the heating one by at least the specified delta. This setting helps prevent the thermostat from rapidly switching between heating and cooling modes, thereby avoiding [short cycling](https://www.thespruce.com/what-it-means-when-furnace-is-short-cycling-5208093).

**Example Payload:**

```json
"min_heating_cooling_delta_celsius": 2.7777777777777777,
"min_heating_cooling_delta_fahrenheit": 5
```
