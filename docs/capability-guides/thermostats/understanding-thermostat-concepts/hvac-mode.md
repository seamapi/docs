---
description: Learn about the HVAC mode setting that you can configure for thermostats.
---

# HVAC Mode

HVAC mode (`hvac_mode_setting`) governs the operation of your heating, ventilation, and air conditioning (HVAC) system to achieve and maintain your preferred temperature. These HVAC mode options include the following:

* **Heat (`heat`):** In this mode, the thermostat activates only the heating system when the room temperature drops below the heating set point temperature.
* **Cool (`cool`):** In this mode, the thermostat activates only the cooling system when the room temperature rises above the cooling set point temperature.
* **Heat-Cool** or **Auto (`heat_cool`):** In this dual mode, the thermostat automatically switches between heating and cooling to maintain a temperature between the heating and cooling set point temperatures for maximum comfort.
* **Off (`off`):** In this mode, the thermostat is off, which turns off both the heating and cooling systems for the space.
* **Eco (`eco`):** This setting represents Google Nest's eco mode.

***

## HVAC Mode Constraints

Some models of thermostats have specific requirements and constraints related to setting the HVAC mode. You can retrieve these requirements by issuing a [Get Device](../../../api/devices/get.md) or [List Devices](../../../api/devices/list.md) request.

The following example shows a set of thermostat HVAC mode requirements:

```json
{
  "thermostat": {
    "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": [
      "thermostat"
    ],
    "properties": {
      "available_hvac_mode_settings": [
        "off",
        "cool",
        "heat",
        "heat_cool"
      ],
    },
    ...
  },
  ...
}
```

***

## Available HVAC Mode Settings

The `available_hvac_mode_settings` property includes an array of available HVAC modes. For example, if the array contains `["heat", "off"]`, it means that you can only set the thermostat to either `heat` mode or `off` mode. The availability of heating or cooling options depends on the connected systems. If the thermostat is not connected to a specific system, the corresponding options may be absent.

The following example shows a thermostat that supports both heating and cooling:

```json
"available_hvac_mode_settings": [
  "off",
  "cool",
  "heat",
  "heat_cool"
 ]
```

***
