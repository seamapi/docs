---
description: >-
  Learn about specific requirements and constraints for setting HVAC modes and
  set points on thermostats.
---

# Understanding HVAC Mode and Set Point Constraints

Some models of thermostats have specific requirements and constraints related to setting HVAC modes and set point temperatures. You can fetch the requirements by making a [Get Device](../../api-clients/devices/get-device.md) or [List Devices](../../api-clients/devices/list-devices.md) request.&#x20;

Sample set of thermostat HVAC mode and set point requirements:

```json
{
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
```

***

## Available HVAC Mode Settings

The `available_hvac_mode_settings` property includes an array of available HVAC modes. For example, if the array contains `["heat", "off"]`, it means that the thermostat can only be set to either `heat` or `off`  modes. The availability of heating or cooling options depends on the connected systems. If the thermostat is not connected to a specific system, these options may be absent. For an explanation of each mode, see [HVAC Mode](./#hvac-mode).

Example payload:

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

The `can_enable_automatic_cooling` and `can_enable_automatic_heating` settings indicate whether the thermostat supports cooling and heating modes, respectively. If `can_enable_automatic_cooling` is `true`, it means that the thermostat supports cooling. Similarly, if `can_enable_automatic_heating` is `true`, the thermostat supports heating. When both are `true`, the thermostat supports heat-cool mode (also known as "auto"). The availability of heating or cooling options depends on the connected systems. If the thermostat is not connected to a specific system, these options may be absent. For an explanation of each mode, see [HVAC Mode](./#hvac-mode).

Example payload:

```json
"can_enable_automatic_cooling": true,
"can_enable_automatic_heating": true
```

***

## Set point temperature range

The thermostat settings have restrictions on the range of set points temperatures that users can choose for both cooling and heating. For cooling, the `min_cooling_set_point_*` and `max_cooling_set_point_*` properties indicate the permissible temperature range. For heating, the `min_heating_set_point_*` and `max_heating_set_point_*` properties indicate the permissible temperature range. These properties are available in both Celsius and Fahrenheit, as the suffix indicates. Refer to these parameters to ensure that your selected set points fall within the defined operational limits of the thermostat.

Example payload:

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

The `min_heating_cooling_delta_celsius` and `min_heating_cooling_delta_fahrenheit` properties denote the minimum temperature difference—or delta—between the cooling and heating set points when in auto mode. You must always set the cooling set point higher than the heating set point by at least the specified delta. This setting helps to prevent the thermostat from rapidly switching between heating and cooling modes, thereby avoiding [short cycling](https://www.thespruce.com/what-it-means-when-furnace-is-short-cycling-5208093).

Example payload:

```json
"min_heating_cooling_delta_celsius": 2.7777777777777777,
"min_heating_cooling_delta_fahrenheit": 5
```
