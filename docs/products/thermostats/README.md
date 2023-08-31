---
description: >-
  A smart thermostat automatically adjusts your heating and cooling systems to
  keep you comfortable.
---

# 🌡 Thermostats

### What is a Smart Thermostat?

A thermostat is a device designed to regulate the temperature of a system (typically a room or entire home) to maintain a desired set point. Traditional thermostats require manual adjustment, while smart thermostats allow users to set and adjust the temperature remotely using internet-connected devices. Smart thermostats often come equipped with features like learning capabilities, energy-saving modes, and integration with other smart home systems.

With Seam's API, you can configure the current climate on a thermostat, or program climate settings for a future date.

### **What Climate Settings are available on a Thermostat?**

When using a smart thermostat, you have a range of climate settings at your disposal:

#### **HVAC Mode**

This setting governs the operation of your Heating, Ventilation, and Air Conditioning (HVAC) system to achieve and maintain your preferred temperature. Notable settings include:

* **Heat (`heat`):** In this mode, the thermostat activates the heating system when the room temperature drops below the set point.
* **Cool (`cool`):** Here, the thermostat triggers the cooling system when the room temperature rises above the set point.
* **Heat-Cool** or **Auto (`heat_cool`):** This dual-mode allows the thermostat to automatically switch between heating and cooling based on the room's temperature and the set points.
* **Off (`off`):** This mode turns off the thermostat, halting any active heating or cooling.

#### **Fan Mode**

This controls the fan's operation within an HVAC system. Common settings include:

* **On:** The fan continuously operates, ensuring air circulation regardless of the heating or cooling demand.
* **Auto:** The fan activates only when heating or cooling is on, making it a more energy-efficient choice.

### **Use Cases**

Leverage Seam's API for the following applications:

* **Adjusting Current Settings:** Modify the current climate and fan modes based on your immediate needs, whether you're on location or away.
* **Scheduling Climate Settings for the Future:** Plan ahead by setting temperature preferences for future dates and times. For instance, if you have a guest at a rental home, you can schedule the house to warm up just before their arrival.

### **Next Steps**

To learn how to adjust current climate settings on your thermostat, check out our guide [here](configure-current-climate-settings.md). For guidance on setting up scheduled climate settings for your device, refer to our guide [here](thermostats-climate-setting-schedules.md). Additionally, you can check out our API Reference Guides for Thermostats [here](../../thermostats/).
