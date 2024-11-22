---
description: >-
  Learn about managing smart thermostats that automatically adjust and program
  your users' heating and cooling systems for comfort and cost savings.
---

# 🌡️ Thermostats

<figure><img src="../../.gitbook/assets/thermostats-cover.png" alt="The Seam API provides flexible and robust functionality that enables you to control your users&#x27; thermostats."><figcaption></figcaption></figure>

## What Is a Smart Thermostat?

A smart thermostat is a device that enables you to control your heating and air conditioning system remotely. An evolution of the traditional thermostat, smart thermostats provide enhanced functions that leverage technology for convenience, efficiency, and energy savings. Smart thermostats often come equipped with features like learning capabilities, energy-saving modes, and integration with other smart home systems.

***

## The Seam Thermostats API

The Seam API provides flexible and robust functionality that enables you to control your users' thermostats. Our Intuitive API provides the flexibility and power to meet your needs. In addition to monitoring a thermostat and making immediate changes to its climate settings, with the Seam API, you can create and schedule climate setting presets.

The Seam API's thermostat features enable PMSs to satisfy a variety of scenarios for their customers, including the following and many more:

* If you're a short-term rental host, you can synchronize the thermostat automatically for occupancy, using reservation data.
* If you're a short-term rental host, you can get your property ready for arriving guests by enabling comfortable temperature settings in advance of your guests' arrival. Then, you can minimize costs and maximize efficiency by scheduling your property's thermostats to return to energy savings settings when your guests leave.
* If you're a resident of a single- or multifamily home, you can use your community home app to set your thermostat to an energy-saving vacation mode when you're away.
* If you're a multifamily property manager, you can set unoccupied units' thermostats to energy saving settings and also schedule comfortable climates for unit tours, maintenance, and cleaners. Further, when a unit becomes occupied, you can pass control of the unit's thermostats to the new residents.
* If you're a short-term rental host or property manager, you can configure Seam to help you monitor your thermostats proactively. In this way, reported temperatures outside acceptable thresholds automatically alert you to potential HVAC system issues.

***

## Managing Thermostats with Seam

First, connect your users' thermostats to Seam using the [Seam Console](../../core-concepts/seam-console/) or [Connect Webviews](../../core-concepts/connect-webviews/). Connect Webviews provide authorization flows that enable your users to connect their own thermostats to Seam. Then, to control your users' thermostats with Seam, use the following feature sets in the Seam HTTP API or any of the Seam SDKs:

### Learn and Monitor

Retrieve and monitor your users' thermostats using the [`/thermostats/list`](../../api/thermostats/list.md) and [`/devices/get`](../../api-clients/devices/get.md) endpoints. The Seam API returns robust, up-to-date information about your connected thermostats. In addition, you can use these endpoints to learn the capabilities of each thermostat.

Further, you can use the [`/thermostats/set_temperature_threshold`](../../api/thermostats/set\_temperature\_threshold.md) endpoint to set upper and lower acceptable temperature bounds. If the thermostat reports a temperature outside this range, Seam emits a [`thermostat.temperature_threshold_exceeded` event](../../api-clients/events/#event-types).

### Perform Remote Management

Manage your users' thermostats remotely using "imperative" endpoints. That is, depending on the capabilities of a thermostat, you can use the Seam API to set the thermostat to heat mode, cool mode, heat/cool (auto) mode, or off. In addition, you can set the thermostat's fan mode setting to `on`, `auto`, or `circulate`.

### Create Climate Presets

Create named climate presets, such as "occupied," "eco," "unoccupied," "vacation mode," and so on. In each of these custom climate presets, and depending on each thermostat's capabilities, you can define the desired heating and cooling set points, as well as the fan mode setting. These presets make it quick and efficient for users to apply consistent climate settings tailored to different scenarios, enhancing both comfort and energy efficiency.

### Set the Fallback Preset

You can set one of the configured climate presets as the fallback. Whenever another climate preset is not active, Seam reverts the thermostat back to the fallback climate preset.

### Create Thermostat Schedules

Schedule the climate presets that you have created. Simply specify the key of the climate preset, along with a starting and ending timestamp. You can also indicate whether a person at the thermostat or using the API can change the thermostat's settings for the duration of the thermostat schedule. Further, you can set the maximum override period in minutes. At the end of this override period, Seam sets the thermostat back to the climate preset defined by the thermostat schedule.

You can schedule multiple climate presets to meet your needs. Seam handles the prioritization of scheduled climate presets.

Note that, in addition to scheduling named climate presets, you can also activate a climate preset immediately.

***

## Thermostat Capabilities

Seam decomposes the ensemble of features that a thermostat provides into one or more capabilities, as follows:

* `device.can_hvac_heat`
* `device.can_hvac_cool`
* `device.can_hvac_heat_cool`
* `device.can_turn_off_hvac`

For detailed information about these capabilities, see [Device and System Capabilities](../../capability-guides/device-and-system-capabilities.md).

***

## Supported Devices

Seam supports integration with the following smart thermostat manufacturers:

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>ecobee Thermostats</strong></td><td></td><td></td><td><a href="../../device-guides/ecobee-thermostats.md">ecobee-thermostats.md</a></td><td><a href="../../.gitbook/assets/ecobee-logo.png">ecobee-logo.png</a></td></tr><tr><td></td><td><strong>Google Nest Thermostats</strong></td><td></td><td></td><td><a href="../../device-guides/google-nest-thermostats/">google-nest-thermostats</a></td><td><a href="../../.gitbook/assets/nest-logo.png">nest-logo.png</a></td></tr><tr><td></td><td><strong>Honeywell Resideo Thermostats</strong></td><td></td><td></td><td><a href="../../device-and-system-integration-guides/honeywell-thermostats/">honeywell-thermostats</a></td><td><a href="../../.gitbook/assets/honeywell_logo.png">honeywell_logo.png</a></td></tr></tbody></table>

***

## Next Steps

To learn how to manage thermostats, see the following guides:

* [Understanding Thermostat Concepts](../../capability-guides/thermostats/understanding-thermostat-concepts/)
* [Retrieving Thermostats](retrieving-thermostats.md)
* [Setting and Monitoring Temperature Thresholds](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md)
* [Setting the Current HVAC and Fan Mode Settings](configure-current-climate-settings.md)
* [Creating and Managing Climate Presets](../../capability-guides/thermostats/creating-and-managing-climate-presets/)
* [Setting the Fallback Climate Preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md)
* [Activating a Climate Preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/activating-a-climate-preset.md)
* [Creating and Managing Thermostat Schedules](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md)
