---
description: >-
  The Climate Setting Schedules feature allows users to program customized
  temperature control schedules for their thermostat.
---

# Climate Setting Schedules

A Climate Setting Schedule allows you to set up a thermostat HVAC mode setting (heating, cooling, or off) and desired temperature set points during a time frame.

For instance, if you are a short-term-rental host who has a guest staying from Jan 1st - Jan 7th, you can create a Climate Setting Schedule that sets the thermostat to a climate setting (i.e. Heat to 70°C) throughout that guest's stay.

When there are no active Climate Setting Schedules, the thermostat will fallback to its [Default Climate Setting](lock-a-lock.md). For example, if you are a short-term-rental host, you have configure a more energy-saving temperature setting here (i.e. Heat to 45°C).



## Climate Setting Schedule Properties

|                                    |                                               |                                                                                                                       |
| ---------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **`climate_setting_schedule_id`**  | string                                        | ID of the Climate Setting Schedule                                                                                    |
| **`device_id`**                    | string                                        | ID of thermostat the Climate Setting Schedule is programmed on                                                        |
| **`name`**                         | string                                        | Name of the Climate Setting Schedule                                                                                  |
| **`schedule_starts_at`**           | ISO8601 date string                           | Date time when the Climate Setting Schedule will start                                                                |
| **`schedule_ends_at`**             | ISO8601 date string                           | Date time when the Climate Setting Schedule will end                                                                  |
| **`created_at`**                   | ISO8601 date string                           | Date time when the Climate Setting Schedule was created                                                               |
| **`is_set_on_device`**             | <p>boolean<br>Readonly</p>                    | If true, the climate setting schedule is currently active on the device.                                              |
| **`automatic_heating_enabled`**    | <p>boolean<br>Default: <code>false</code></p> | Whether the thermostat has heating turned on                                                                          |
| **`automatic_cooling_enabled`**    | <p>boolean<br>Default: <code>false</code></p> | Whether the thermostat has cooling turned on                                                                          |
| **`hvac_mode_setting`**            | `heatcool` \| `heat` \| `cool` \| `off`       | The HVAC mode the thermostat is set to.                                                                               |
| **`cooling_set_point_fahrenheit`** | number \| null                                | When `automatic_cooling_enabled` is `true`, the thermostat will start cooling to maintain this temperature set point. |
| **`heating_set_point_fahrenheit`** | number \| null                                | When `automatic_heating_enabled` is `true`, the thermostat will start heating to maintain this temperature set point. |
| **`manual_override_enabled`**      | <p>boolean<br>Default: <code>true</code></p>  | Whether another user can use the thermostat or API to override this climate setting                                   |



