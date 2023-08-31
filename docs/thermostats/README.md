---
description: >-
  Devices that can regulate the temperature of a location, so that the
  location's temperature is maintained near a desired set point temperature.
---

# Thermostats

## Thermostat Properties

| **`temperature_fahrenheit`**       | number                                                                   | Temperature, measured in fahrenheit                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`temperature_celsius`**          | number                                                                   | Temperature, measured in celsius                                                                                                                                                   |
| **`relative_humidity`**            | number                                                                   | Relative Humidity, amount of moisture in the air compared to the maximum amount of moisture the air can hold at a given temperature. It is expressed as a percentage.              |
| **`can_enable_automatic_cooling`** | boolean                                                                  | If true, the thermostat is connected to a cooling system                                                                                                                           |
| **`can_enable_automatic_heating`** | boolean                                                                  | If true, the thermostat is connected to a heating system                                                                                                                           |
| **`available_hvac_mode_settings`** | Array\<string>                                                           | <p>A list of the available HVAC Modes for the Thermostat.<br>These can include:<br>- <code>cool</code><br>- <code>heat</code><br>- <code>heatcool</code><br>- <code>off</code></p> |
| **`current_climate_setting`**      | As seen in '[Climate Setting Properties](./#climate-setting-properties)' |                                                                                                                                                                                    |

## Climate Setting Properties

| property name                      | type                                    | Description                                                                                                                                            |
| ---------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`automatic_heating_enabled`**    | boolean                                 | Whether the thermostat has heating turned on                                                                                                           |
| **`automatic_cooling_enabled`**    | boolean                                 | Whether the thermostat has cooling turned on                                                                                                           |
| **`hvac_mode_setting`**            | `heatcool` \| `heat` \| `cool` \| `off` | The HVAC mode the thermostat is set to.                                                                                                                |
| **`cooling_set_point_fahrenheit`** | number \| null                          | The [cooling set point](./#climate-set-points) if cooling is turned on. When the ambient temperature rises above this set point, cooling will turn on. |
| **`heating_set_point_fahrenheit`** | number \| null                          | The [heating set point](./#climate-set-points) if heating is turned on. When the ambient temperature drops below this set point, heating will turn on. |
| **`manual_override_enabled`**      | boolean                                 | Whether another user can use the thermostat or API to override this climate setting                                                                    |

## Climate Set Points

When heating is turned on, you will need to set a heating set point. When the ambient temperature drops below this set point, heating will turn on.

When cooling is turned on, you will need to set a cooling set point. When the ambient temperature rises above this set point, cooling will turn on.

When you have `heatcool` turned on, where both heating and cooling systems are enabled, you will need to set heating and cooling set points. The cooling set point needs to be set to a temperature higher than that of the heating set point. On some systems, there might also be a minimum difference between the heating and cooling set points.

## List of Methods

| [Get Thermostat](get-thermostat.md)                                                             |
| ----------------------------------------------------------------------------------------------- |
| [List Thermostats](list-thermostats.md)                                                         |
| [Set Default Climate Setting](../api-clients/thermostats/lock-a-lock.md)                        |
| [Get Climate Setting Schedule](climate-setting-schedules/get-climate-setting-schedule.md)       |
| [List Climate Setting Schedules](climate-setting-schedules/list-climate-setting-schedules.md)   |
| [Create Climate Setting Schedule](climate-setting-schedules/create-climate-setting-schedule.md) |
| [Update Climate Setting Schedule](climate-setting-schedules/update-climate-setting-schedule.md) |
| [Delete Climate Setting Schedule](climate-setting-schedules/delete-climate-setting-schedule.md) |
