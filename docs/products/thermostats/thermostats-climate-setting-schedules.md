---
description: >-
  Learn how to configure climate setting schedules to set an HVAC mode setting
  and the desired temperature profile for a period of time in the future.
---

# Creating Climate Setting Schedules

Seam enables you to create [climate setting schedules](./#climate-setting-schedules) on a smart thermostat. This functionality enables you to set future schedules for controlling the climate in users' homes or businesses automatically based on their needs. For example, a short-term-rental host can create—for each guest stay—a climate setting schedule that programs their thermostat with comfortable heating and cooling set points for the duration of the guest's stay.

Before you can create any climate setting schedules, you must first set the [default climate setting](./#default-climate-setting) for a thermostat.

You can create as many climate setting schedules as desired, as long and none of the schedules overlap. That is, only one climate setting schedule can be active at a time.

To create a climate setting schedule, issue a [Create Climate Setting Schedule](../../api-clients/thermostats/update-a-thermostat.md) request. In the body of the request, specify the following parameters:

<table><thead><tr><th width="301">Parameter</th><th width="103">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>schedule_type</code></td><td>Enum<br><em>Optional</em></td><td>Schedule type<br>Default: <code>time_bound</code></td></tr><tr><td><code>device_id</code></td><td>String<br><em>Required</em></td><td>ID of the thermostat for which to create the new climate setting schedule</td></tr><tr><td><code>name</code></td><td>String<br><em>Optional</em></td><td>Name of the climate setting schedule</td></tr><tr><td><code>schedule_starts_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the climate setting schedule becomes active, as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> timestamp</td></tr><tr><td><code>schedule_ends_at</code></td><td>String<br><em>Required</em></td><td>Date and time after which the climate setting schedule becomes inactive, as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> timestamp</td></tr><tr><td><code>automatic_heating_enabled</code></td><td>Boolean</td><td>Indicates whether the automatic heating system is enabled during the scheduled period<br>If you specify <code>automatic_heating_enabled</code>, you must also specify <code>heating_set_point_celsius</code> or <code>heating_set_point_fahrenheit</code>.<br>Also, if you specify <code>automatic_heating_enabled</code>, Seam automatically sets <code>hvac_mode_setting</code> accordingly.</td></tr><tr><td><code>automatic_cooling_enabled</code></td><td>Boolean</td><td>Indicates whether the automatic cooling system is enabled during the scheduled period<br>If you specify <code>automatic_cooling_enabled</code>, you must also specify <code>cooling_set_point_celsius</code> or <code>cooling_set_point_fahrenheit</code>.<br>Also, if you specify <code>automatic_cooling_enabled</code>, Seam automatically sets <code>hvac_mode_setting</code> accordingly.</td></tr><tr><td><code>hvac_mode_setting</code></td><td>Enum</td><td><p><a href="hvac-mode.md">HVAC mode</a> for the scheduled period</p><p>Values are <code>heat</code>, <code>cool</code>, <code>heat_cool</code>, and <code>off</code>.<br>If you specify <code>hvac_mode_setting</code>, you must also specify one or more of <code>cooling_set_point_celsius</code>, <code>heating_set_point_celsius</code>, <code>cooling_set_point_fahrenheit</code>, and <code>heating_set_point_fahrenheit</code>, depending on the HVAC mode.<br>Also, if you specify <code>hvac_mode_setting</code>, Seam automatically sets <code>automatic_heating_enabled</code> and <code>automatic_cooling_enabled</code> accordingly.</p></td></tr><tr><td><code>cooling_set_point_celsius</code></td><td>Number</td><td>Cooling <a href="set-points.md">set point</a> in Celsius for the scheduled period</td></tr><tr><td><code>heating_set_point_celsius</code></td><td>Number</td><td>Heating <a href="set-points.md">set point</a> in Celsius for the scheduled period</td></tr><tr><td><code>cooling_set_point_fahrenheit</code></td><td>Number</td><td>Cooling <a href="set-points.md">set point</a> in Fahrenheit for the scheduled period</td></tr><tr><td><code>heating_set_point_fahrenheit</code></td><td>Number</td><td>Heating <a href="set-points.md">set point</a> in Fahrenheit for the scheduled period</td></tr><tr><td><code>manual_override_allowed</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether to allow manual overrides of these settings during the scheduled period<br>If <code>true</code>, a person can override the climate setting by making adjustments from the thermostat itself or from their app.<br>If <code>false</code>, Seam makes sure that the climate setting is set on the thermostat every ten minutes.</td></tr></tbody></table>

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
climate_setting_schedule = seam.thermostats.climate_setting_schedules.create(
    device = "518f692b-f865-4590-8c3e-3849e9984c75",
    name = "Guest 1 Stay",
    schedule_starts_at = "2023-12-10T15:00:00.000Z",
    schedule_ends_at = "2023-12-17T11:00:00.000Z",
    hvac_mode_setting = "heat_cool",
    cooling_set_point_celsius = 25,
    heating_set_point_celsius = 20,
    manual_override_allowed = True
)

pprint(climate_setting_schedule)
```

**Response:**

```
ClimateSettingSchedule(automatic_heating_enabled=True,
                       automatic_cooling_enabled=True,
                       hvac_mode_setting='heat_cool',
                       cooling_set_point_celsius=25.0,
                       heating_set_point_celsius=20.0,
                       cooling_set_point_fahrenheit=77.0,
                       heating_set_point_fahrenheit=68.0,
                       manual_override_allowed=True,
                       schedule_type='time_bound',
                       name='Guest 1 Stay',
                       schedule_starts_at='2023-12-10T15:00:00.000Z',
                       schedule_ends_at='2023-12-17T11:00:00.000Z',
                       climate_setting_schedule_id='b0a7fb2b-ef0a-43f5-908a-0564d2e86a67',
                       is_set_on_device=False,
                       device_id='518f692b-f865-4590-8c3e-3849e9984c75',
                       created_at='2023-11-19T09:15:25.107Z')
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/climate_setting_schedules/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "name": "Guest 1 Stay",
  "schedule_starts_at": "2023-12-10T15:00:00.000Z",
  "schedule_ends_at": "2023-12-17T11:00:00.000Z",
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_celsius": 25,
  "heating_set_point_celsius": 20,
  "manual_override_allowed": true
}'
```

**Response:**

```json
{
  "climate_setting_schedule": {
    "climate_setting_schedule_id": "c17d606a-fe7c-4345-a6d7-1bb4ab9b77f0",
    "schedule_type": "time_bound",
    "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
    "name": "Guest 1 Stay",
    "schedule_starts_at": "2023-12-10T15:00:00.000Z",
    "schedule_ends_at": "2023-12-17T11:00:00.000Z",
    "automatic_heating_enabled": true,
    "automatic_cooling_enabled": true,
    "hvac_mode_setting": "heat_cool",
    "cooling_set_point_celsius": 25,
    "heating_set_point_celsius": 20,
    "cooling_set_point_fahrenheit": 77,
    "heating_set_point_fahrenheit": 68,
    "manual_override_allowed": true,
    "is_set_on_device": false,
    "created_at": "2023-11-19T09:10:17.395Z"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const climate_setting_schedule = await seam.thermostats.climateSettingSchedules.create({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
  name: "Guest 1 Stay",
  schedule_starts_at: "2023-12-10T15:00:00.000Z",
  schedule_ends_at: "2023-12-17T11:00:00.000Z",
  hvac_mode_setting: "heat_cool",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
  manual_override_allowed: true
})

console.log(climate_setting_schedule)
```

**Response:**

```json
{
  climate_setting_schedule_id: '0232b54d-368b-483c-9b4e-36f139455e15',
  schedule_type: 'time_bound',
  device_id: '518f692b-f865-4590-8c3e-3849e9984c75',
  name: 'Guest 1 Stay',
  schedule_starts_at: '2023-12-10T15:00:00.000Z',
  schedule_ends_at: '2023-12-17T11:00:00.000Z',
  automatic_heating_enabled: true,
  automatic_cooling_enabled: true,
  hvac_mode_setting: 'heat_cool',
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
  cooling_set_point_fahrenheit: 77,
  heating_set_point_fahrenheit: 68,
  manual_override_allowed: true,
  is_set_on_device: false,
  created_at: '2023-11-19T09:23:12.979Z'
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
ClimateSettingSchedule climateSettingSchedule = seam.ClimateSettingSchedulesThermostats.Create(
      deviceId: deviceId,
      name: "Guest 1 Stay",
      scheduleStartsAt: "2023-12-10T15:00:00.000Z",
      scheduleEndsAt: "2023-12-17T11:00:00.000Z",
      hvacModeSetting: Seam.Api.ClimateSettingSchedulesThermostats.CreateRequest.HvacModeSettingEnum.HeatCool,
      coolingSetPointCelsius: 25,
      heatingSetPointCelsius: 20,
      manualOverrideAllowed: true
);
Console.WriteLine(climateSettingSchedule);
```

**Response:**

```json
{
  "climate_setting_schedule_id": "c5da2ce6-7c72-45ee-9823-8f7ffd5f141a",
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "name": "Guest 1 Stay",
  "schedule_starts_at": "2023-12-10T15:00:00.000Z",
  "schedule_ends_at": "2023-12-17T11:00:00.000Z",
  "created_at": "2023-11-20T07:19:06.862Z",
  "automatic_heating_enabled": true,
  "automatic_cooling_enabled": true,
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_celsius": 25,
  "heating_set_point_celsius": 20,
  "cooling_set_point_fahrenheit": 77,
  "heating_set_point_fahrenheit": 68,
  "manual_override_allowed": true
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
var climateSettingSchedule = seam.thermostats().climateSettingSchedules()
            .create(ClimateSettingSchedulesCreateRequest.builder()
                    .deviceId(deviceId)
                    .scheduleStartsAt("2023-12-10T15:00:00.000Z")
                    .scheduleEndsAt("2023-12-17T11:00:00.000Z")
                    .hvacModeSetting(HvacModeSetting.HEAT_COOL)
                    .coolingSetPointCelsius(25.0)
                    .heatingSetPointCelsius(20.0)
                    .manualOverrideAllowed(true)
                    .name("Guest 1 Stay")
                    .build());
System.out.println(climateSettingSchedule);
```

**Response:**

```json
{
  "climate_setting_schedule" : {
    "climate_setting_schedule_id" : "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
    "device_id" : "518f692b-f865-4590-8c3e-3849e9984c75",
    "name" : "Guest 1 Stay",
    "schedule_starts_at" : "2023-12-10T15:00:00.000Z",
    "schedule_ends_at" : "2023-12-17T11:00:00.000Z",
    "created_at" : "2023-11-19T09:52:36.855Z",
    "automatic_heating_enabled" : true,
    "automatic_cooling_enabled" : true,
    "hvac_mode_setting" : "heat_cool",
    "cooling_set_point_celsius" : 25.0,
    "heating_set_point_celsius" : 20.0,
    "cooling_set_point_fahrenheit" : 77.0,
    "heating_set_point_fahrenheit" : 68.0,
    "manual_override_allowed" : true,
    "schedule_type" : "time_bound",
    "schedule_type" : "time_bound",
    "is_set_on_device" : false
  },
  "ok" : true
}
```
{% endtab %}
{% endtabs %}
