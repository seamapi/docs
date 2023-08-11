# Thermostats 

## Overview
A thermostat is a device that regulates the ambient temperature of a
space by adjusting the heating or cooling systems to maintain a set
temperature. Our API allows developers to seamlessly integrate control
over thermostat settings, providing both immediate adjustments and the
capability to schedule temperature changes for future times.

### HVAC Mode
The HVAC mode determines how the system operates, whether heating or
cooling be used to maintain desired indoor conditions.

- "Cool": Uses the air conditioner to lower the indoor temperature.
- "Heat": Activates the heater to raise the indoor temperature.
- "Heat-cool" or "Auto": Automatically switches between heating and
  cooling based on desired temperature.
- "Off": All heating, cooling functions are turned off.

### Fan Mode
- "On": means that the fan is kept on.
- "Auto": means the fan will turn on when heating or cooling is
  activated.

## Adjusting the current climate

type ClimateSetting = {
  automatic_heating_enabled: boolean
  automatic_cooling_enabled: boolean
  hvac_mode_setting: "off" | "heat" | "cool" | "heat_cool"
  cooling_set_point_celsius?: number
  heating_set_point_celsius?: number
  cooling_set_point_fahrenheit?: number
  heating_set_point_fahrenheit?: number
}

`/thermostats/heat` - Set thermostat to heat mode w/ set point
`/thermostats/cool` - Set thermostat to heat mode w/ set point
`/thermostats/heat_cool` - Set thermostat to heat_cool mode w/ set point(s)
`/thermostats/off` - Set thermostat to off mode
`/thermostats/set_fan_mode` - Set thermostat fan mode
`/thermostats/set_current_climate_setting` - Set thermostat current climate setting

### `/thermostats/heat`
Sets the the thermostat mode to heat with the provided set point.

```ts
type HeatRequestBody = {
  device_id: string
  heating_set_point_fahrenheit?: number
  heating_set_point_celsius?: number
}
Either the `_fahrenheit` set point or the `_celsius` set point need to be set.

interface HeatResponseBody {
  action_attempt: ActionAttempt
}
```

### `/thermostats/cool`

Sets the the thermostat mode to cool with the provided set point.

```ts
type CoolRequestBody = {
  device_id: string
  cooling_set_point_fahrenheit?: number
  cooling_set_point_celsius?: number
}
Either the `_fahrenheit` set point or the `_celsius` set point need to be set.

interface CoolResponseBody {
  action_attempt: ActionAttempt
}
```

### `/thermostats/heat_cool`

Sets the the thermostat mode to `heat_cool` with the provided set points.

```ts
type HeatCoolRequestBody = {
  device_id: string
  cooling_set_point_fahrenheit?: number
  cooling_set_point_celsius?: number
  heating_set_point_fahrenheit?: number
  heating_set_point_celsius?: number
}
Either the `_fahrenheit` set point or the `_celsius` set points need to be set.

interface HeatCoolResponseBody {
  action_attempt: ActionAttempt
}
```

### `/thermostats/off`

Sets the the thermostat mode to off.

```ts
type OffRequestBody = {
  device_id: string
}

interface OffResponseBody {
  action_attempt: ActionAttempt
}
```

### `/thermostats/set_fan_mode`

Sets the fan mode on the device.

```ts
type SetFanModeRequestBody = {
  device_id: string
  fan_mode: "on" | "auto"
}

interface SetFanModeResponseBody {
  action_attempt: ActionAttempt
}
```

### `/thermostats/set_current_climate_setting`

Sets the thermostat settings to the provided climate setting. Since this is imperative, `manual_override_allowed` isn't a option here.

```ts
type SetCurrentClimateSettingRequestBody = {
  device_id: string
  automatic_heating_enabled: boolean
  automatic_cooling_enabled: boolean
  hvac_mode_setting: "off" | "heat" | "cool" | "heat_cool"
  cooling_set_point_celsius?: number
  heating_set_point_celsius?: number
  cooling_set_point_fahrenheit?: number
  heating_set_point_fahrenheit?: number
}

interface SetCurrentClimateSettingResponse {
  action_attempt: ActionAttempt
}
```

## Creating Scheduled Climate Setting Schedules

[See docs here](https://docs.seam.co/latest/core-concepts/thermostats-climate-setting-schedules)

## Configuring features via the Console

[ If applicable, what are some settings or pages for managing this
feature? Please include step-by-step instructions for navigating the
Console and configuring settings. ]

## How would a user incorporate this feature into their Dashboard?

WIP

## Suggested Improvements
- [ ] Add `status` to Climate Setting Schedule for showing whether or not a schedule got
programmed on the thermostat or not

