---
description: >-
  Learn about managing smart thermostats that automatically adjust your heating
  and cooling systems to keep you comfortable.
---

# 🌡 Thermostats

## What Is a Smart Thermostat?

A thermostat is a device designed to regulate the temperature of a system (typically a room or entire home) to maintain a desired set point. Traditional thermostats require manual adjustment, while smart thermostats enable users to set and adjust the temperature remotely using internet-connected devices. Smart thermostats often come equipped with features like learning capabilities, energy-saving modes, and integration with other smart home systems.

Leverage the Seam API for the following smart thermostat-related applications:

* **Adjusting current settings:** Modify the current climate and fan modes based on your immediate needs, whether you are on location or away.
* **Scheduling climate settings for the future:** Plan ahead by setting temperature preferences for future dates and times. For example, if you plan to have a guest at a rental home, you can schedule the house to warm up just before their arrival.

***

## **Climate Settings**

Using the Seam API, you can configure the following groups of climate settings on a thermostat:

* [Current climate setting](./#current-climate-setting)
* [Fan mode](./#fan-mode)
* [Default climate setting](./#default-climate-setting)
* [Climate setting schedules](./#climate-setting-schedules)

***

### Current Climate Setting

[Configure the current heating, ventilation, and air conditioning (HVAC) settings](configure-current-climate-settings.md) on the thermostat. This group of settings includes the following:

* The [HVAC mode](hvac-mode.md) (`hvac_mode_setting`)
* The corresponding [set points](set-points.md) in Fahrenheit or Celsius (`heating_set_point_fahrenheit`, `heating_set_point_celsius`, `cooling_set_point_fahrenheit`, and `cooling_set_point_celsius`)

If `allow_manual_override` is true, a user can override the current climate setting. In addition, any [climate setting schedules](./#climate-setting-schedules) override the current climate setting.

To set the HVAC mode and set points, issue a thermostat [`heat`](configure-current-climate-settings.md#set-a-thermostat-to-heat-mode), [`cool`](configure-current-climate-settings.md#set-a-thermostat-to-cool-mode), [`heat_cool`](configure-current-climate-settings.md#set-a-thermostat-to-heat-cool-mode), or [`off`](configure-current-climate-settings.md#turn-off-heating-and-cooling) request and include the desired set points in the body of the request. When you issue one of these commands, Seam sets the `hvac_mode_setting` accordingly.

For more information, see [Setting Current HVAC and Fan Mode Settings](configure-current-climate-settings.md).

***

### Fan Mode

[Configure the fan mode](configure-current-climate-settings.md#set-the-fan-mode) (`fan_mode_setting`) to `on` or `auto`, as follows:

* **`on`:** The fan continuously operates, ensuring air circulation, regardless of the heating or cooling demand.
* **`auto`:** The fan activates only when heating or cooling is on, making this setting a more energy-efficient choice.

Seam supports a single ongoing fan mode setting.

For more information, see [Setting Current HVAC and Fan Mode Settings](configure-current-climate-settings.md).

***

### Default Climate Setting

[Configure the default HVAC settings](setting-the-default-climate-setting.md) on the thermostat. This group of default climate settings applies whenever there are no other active climate settings, such as when the room, unit, or home is vacant. For example, a short-term-rental host may want to configure a more energy-saving temperature setting (for example, heat to 45° F) for when the unit is vacant.

The default HVAC settings include the following:

* The [HVAC mode](hvac-mode.md) (`hvac_mode_setting`)
* Whether the automatic heating system is enabled (`automatic_heating_enabled`)
* Whether the automatic cooling system is enabled (`automatic_cooling_enabled`)
* The corresponding [set points](set-points.md) in Fahrenheit or Celsius  (`heating_set_point_fahrenheit`, `heating_set_point_celsius`, `cooling_set_point_fahrenheit`, and `cooling_set_point_celsius`)

You can also indicate whether to allow manual overrides of these settings (`manual_override_allowed`), as follows:

* If enabled, a person can override the climate setting by making adjustments from the thermostat itself or from their app.
* If disabled, Seam makes sure that the climate setting is set on the thermostat every ten minutes.

In addition, any [climate setting schedules](./#climate-setting-schedules) override the default climate setting.

Note that you configure either `hvac_mode_setting` or `automatic_heating_enabled` and `automatic_cooling_enabled`. When you configure `hvac_mode_setting`, Seam automatically configures `automatic_heating_enabled` and `automatic_cooling_enabled` correspondingly. Conversely, when you configure `automatic_heating_enabled` and `automatic_cooling_enabled`, Seam automatically configures `hvac_mode_setting` correspondingly. The following table shows this automatic mapping:

<table><thead><tr><th width="212.47326076668242">hvac_mode_setting</th><th width="272">automatic_heating_enabled</th><th>automatic_cooling_enabled</th></tr></thead><tbody><tr><td><code>heat</code></td><td><code>true</code></td><td><code>false</code></td></tr><tr><td><code>cool</code></td><td><code>false</code></td><td><code>true</code></td></tr><tr><td><code>heat_cool</code></td><td><code>true</code></td><td><code>true</code></td></tr><tr><td><code>off</code></td><td><code>false</code></td><td><code>false</code></td></tr></tbody></table>

For more information, see [Setting the Default Climate Setting](setting-the-default-climate-setting.md).

***

### Climate Setting Schedules

You can [create climate setting schedules](thermostats-climate-setting-schedules.md) for periods of time in the future. This functionality enables you to set schedules for controlling the climate in users' homes or businesses automatically based on their needs. For example, a short-term-rental host can create—for each guest stay—a climate setting schedule that programs their thermostat with comfortable heating and cooling set points for the duration of the guest's stay.

<figure><img src="../../.gitbook/assets/Thermo rule.png" alt="The Seam Component for configuring a climate setting schedule" width="280"><figcaption></figcaption></figure>

When a climate setting schedule becomes active, it overrides the [default climate setting](./#default-climate-setting) and [current climate setting](./#current-climate-setting).

#### Settings in a Climate Setting Schedule

Climate setting schedules include a starting and ending date and time, as well as all the following climate settings:

* The [HVAC mode](hvac-mode.md) (`hvac_mode_setting`)
* Whether the automatic heating system is enabled (`automatic_heating_enabled`)
* Whether the automatic cooling system is enabled (`automatic_cooling_enabled`)
* The corresponding [set points](set-points.md) in Fahrenheit or Celsius  (`heating_set_point_fahrenheit`, `heating_set_point_celsius`, `cooling_set_point_fahrenheit`, and `cooling_set_point_celsius`)

You can also indicate whether to allow manual overrides of these settings (`manual_override_allowed`), as follows:

* If enabled, a person can override the climate setting by making adjustments from the thermostat itself or from their app. We recommend setting `manual_override_allowed` to `true` to enable guests to change the thermostat settings.
* If disabled, Seam makes sure that the climate setting is set on the thermostat every ten minutes.

Note that you configure either `hvac_mode_setting` or `automatic_heating_enabled` and `automatic_cooling_enabled`. When you configure `hvac_mode_setting`, Seam automatically configures `automatic_heating_enabled` and `automatic_cooling_enabled` correspondingly. Conversely, when you configure `automatic_heating_enabled` and `automatic_cooling_enabled`, Seam automatically configures `hvac_mode_setting` correspondingly. The following table shows this automatic mapping:

<table><thead><tr><th width="212.47326076668242">hvac_mode_setting</th><th width="272">automatic_heating_enabled</th><th>automatic_cooling_enabled</th></tr></thead><tbody><tr><td><code>heat</code></td><td><code>true</code></td><td><code>false</code></td></tr><tr><td><code>cool</code></td><td><code>false</code></td><td><code>true</code></td></tr><tr><td><code>heat_cool</code></td><td><code>true</code></td><td><code>true</code></td></tr><tr><td><code>off</code></td><td><code>false</code></td><td><code>false</code></td></tr></tbody></table>

#### Climate Setting Schedule Constraints

Note the following constraints regarding climate setting schedules:

* Before you can create any climate setting schedules, you must first configure a [default climate setting](./#default-climate-setting).
* You can create as many climate setting schedules as desired, as long and none of the schedules overlap. That is, only one climate setting schedule can be active at a time.
* When there are no active climate setting schedules, the thermostat falls back to the configured default climate setting.

For more information, see [Creating Climate Setting Schedules](thermostats-climate-setting-schedules.md).
