---
description: >-
  Climate setting schedules are used to set an HVAC mode setting (heating,
  cooling, or off) and desired temperature profile for a period of time.
---

# Thermostats - Climate Setting Schedules

## What is a Climate Setting Schedule?

A Climate Setting Schedule programs a thermostat with a desired temperature profile for a period of time. It allows users to set schedules for controlling the climate in their homes or businesses automatically based on their needs.

For example, a short-term-rental host may create a climate setting schedule that programs their thermostat with comfortable heating and cooling set points for the duration of a guest's stay.

## What Climate Settings can you create?

There are four different types of HVAC system settings:

* **ongoing**: This is the default access code that is created if you don't specify any options other than the `device_id`. This code will be set on the device and Seam will ensure it is set until you explicitly remove it (with `/access_codes/delete`).
* **time\_bound**: Time Bound codes are codes where you provide a `starts_at` or `ends_at` time. The code will be added to the device at the `starts_at` time and removed at the `ends_at` time.



### Manual Override Allowed

If enabled, a person can override the Climate Setting by making adjustments from the thermostat or from their app.



* Overview of different types of Climate Settings
* Climate Setting Schedules cannot intersect; only one can be active at a time.
* If heating is enabled, you need to set a heating set point
* If cooling is enabled, you need to set a cooling set point
* There is data used for validating the thermostat set points (min, max, min delta)

## What happens when a Climate Setting Schedule ends?

When there are no active Climate Setting Schedules, the thermostat will fallback to its [Default Climate Setting](../thermostats/climate-setting-schedules/lock-a-lock.md). For example, if you are a short-term-rental host, you have configure a more energy-saving temperature setting here (i.e. Heat to 45°C).

```
// Some code
```
