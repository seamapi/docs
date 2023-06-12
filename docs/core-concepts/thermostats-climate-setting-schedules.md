---
description: >-
  Climate setting schedules are used to set an HVAC mode setting (heating,
  cooling, or off) and desired temperature profile for a period of time.
---

# Thermostats - Climate Setting Schedules

## What is a Climate Setting Schedule?

A Climate Setting Schedule programs a thermostat with a desired temperature profile for a period of time. It allows users to set schedules for controlling the climate in their homes or businesses automatically based on their needs.

For example, a short-term-rental host may create a climate setting schedule that programs their thermostat with comfortable heating and cooling set points for the duration of a guest's stay.

{% hint style="info" %}
Note: the time ranges of Climate Setting Schedules cannot overlap, as only one Climate Setting Schedule can be active at a time.
{% endhint %}

<figure><img src="../.gitbook/assets/Thermo rule.png" alt=""><figcaption><p>Our Seam Component for configuring a Climate Setting Schedule</p></figcaption></figure>

## What Climate Settings can you create?

The main Climate Settings on a thermostat control the HVAC system mode:

* **Heat:** Only activates the heating system to heat the space. The system will heat the system to the heating set point temperature.
* **Cool:** Only activates the cooling system to cool the space. The system will cool the system to the cooling set point temperature.
* **Heat/Cool or Auto:** Automatically chooses between heating or cooling to maintain a temperature between the heating and cooling set points for maximum comfort.
* **Off:** Turns off both the heating and cooling systems for the space.



On our climate setting schedule, this is how the `hvac_mode_setting` attribute maps to the `automatic_heating_enabled` and `automatic_cooling_enabled` attributes.

You can set either the `hvac_mode_setting` property or the `automatic_*` properties.

<table><thead><tr><th width="260.3333333333333">hvac_mode_setting</th><th width="244">automatic_heating_enabled</th><th>automatic_cooling_enabled</th></tr></thead><tbody><tr><td><strong><code>heat</code></strong></td><td><code>true</code></td><td><code>false</code></td></tr><tr><td><strong><code>cool</code></strong></td><td><code>false</code></td><td><code>true</code></td></tr><tr><td><strong><code>heatcool</code></strong></td><td><code>true</code></td><td><code>true</code></td></tr><tr><td><strong><code>off</code></strong></td><td><code>false</code></td><td><code>false</code></td></tr></tbody></table>

### Configuring temperature set points

Temperature set points for a thermostat control the target temperatures that the thermostat will activate the heating or cooling system to reach.

For heating, the heating set point is the target temperature the thermostat will turn on the furnace or heating system to reach. Once the space reaches that temperature, the thermostat will turn off the heating system until the space temperature drops below the set point again.

<figure><img src="../.gitbook/assets/Screen Shot 2023-06-12 at 4.04.38 PM.png" alt="" width="563"><figcaption></figcaption></figure>

For cooling, the cooling set point is the target temperature the thermostat will turn on the air conditioner or cooling system to reach. Once that space reaches that temperature, the thermostat will turn off cooling until the space temperature rises above the set point again.

<figure><img src="../.gitbook/assets/Screen Shot 2023-06-12 at 4.04.54 PM.png" alt="" width="563"><figcaption></figcaption></figure>

In heat/cool mode, the thermostat will use the heating set point as the target temperature for turning on the heating system, and the cooling set point as the target temperature for turning on the cooling system. It will activate heating or cooling as needed to keep the space temperature between those two set points for maximum comfort.

<figure><img src="../.gitbook/assets/Screen Shot 2023-06-12 at 4.04.21 PM.png" alt="" width="563"><figcaption></figcaption></figure>

So in summary, the temperature set points define the precise temperatures that the thermostat will strive to maintain in the space for heating, cooling, or automatic heat/cool operation. Choosing appropriate set points for a space is important for energy efficiency and comfort.

### Manual Override Allowed

If enabled, a person can override the Climate Setting by making adjustments from the thermostat or from their app.

If disabled, Seam will make sure the Climate Setting is set on the thermostat every ten minutes.

## What happens when a Climate Setting Schedule ends?

When there are no active Climate Setting Schedules, the thermostat will fallback to its [Default Climate Setting](../thermostats/climate-setting-schedules/lock-a-lock.md). For example, if you are a short-term-rental host, you have configure a more energy-saving temperature setting here (i.e. Heat to 45°C).

{% hint style="info" %}
A Default Climate Setting must be set, before Climate Setting Schedules can be created.
{% endhint %}
