---
description: Learn how to update your climate setting schedules.
---

# Modifying Climate Setting Schedules

You can update any upcoming or active [climate setting schedule](thermostats-climate-setting-schedules.md#climate-setting-schedules) using the [Update Climate Setting Schedule](../../../thermostats/climate-setting-schedules/update-climate-setting-schedule.md) request.

When modifying a climate setting schedule, adjust any of the following properties of the climate setting schedule to the new desired values:

* `name`
* `schedule_starts_at`
* `schedule_ends_at`
* `hvac_mode_setting`
* `automatic_heating_enabled`
* `automatic_cooling_enabled`
* `cooling_set_point_celsius`
* `heating_set_point_celsius`
* `cooling_set_point_fahrenheit`
* `heating_set_point_fahrenheit`
* `manual_override_allowed`

For more information about how these properties interact, see [Settings in a Climate Setting Schedule](thermostats-climate-setting-schedules.md#settings-in-a-climate-setting-schedule).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
updated_schedule = seam.thermostats.climate_setting_schedules.update(
    climate_setting_schedule="b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
    schedule_ends_at="2023-12-18T11:00:00.000Z",
    hvac_mode_setting="heat_cool",
    cooling_set_point_fahrenheit=75,
    heating_set_point_fahrenheit=65
)

pprint(updated_schedule)
```

**Response:**

```
ClimateSettingSchedule(automatic_heating_enabled=True,
                       automatic_cooling_enabled=True,
                       hvac_mode_setting='heat_cool',
                       cooling_set_point_celsius=23.88888888888889,
                       heating_set_point_celsius=18.333333333333336,
                       cooling_set_point_fahrenheit=75.0,
                       heating_set_point_fahrenheit=65.0,
                       manual_override_allowed=True,
                       schedule_type='time_bound',
                       name='Guest 2 Stay',
                       schedule_starts_at='2023-12-10T15:00:00.000Z',
                       schedule_ends_at='2023-12-18T11:00:00.000Z',
                       climate_setting_schedule_id='b7d5cc0c-defc-4af1-9448-85b96aff5fd6',
                       is_set_on_device=False,
                       device_id='518f692b-f865-4590-8c3e-3849e9984c75',
                       created_at='2023-11-19T09:52:36.855Z')
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/climate_setting_schedules/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "climate_setting_schedule_id": "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
  "schedule_ends_at": "2023-12-18T11:00:00.000Z",
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_fahrenheit": 75,
  "heating_set_point_fahrenheit": 65
}'
```

**Response:**

```json
{
  "climate_setting_schedule": {
    "climate_setting_schedule_id": "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
    "schedule_type": "time_bound",
    "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
    "name": "Guest 2 Stay",
    "schedule_starts_at": "2023-12-10T15:00:00.000Z",
    "schedule_ends_at": "2023-12-18T11:00:00.000Z",
    "automatic_heating_enabled": true,
    "automatic_cooling_enabled": true,
    "hvac_mode_setting": "heat_cool",
    "cooling_set_point_celsius": 23.88888888888889,
    "heating_set_point_celsius": 20,
    "cooling_set_point_fahrenheit": 75,
    "heating_set_point_fahrenheit": 65,
    "manual_override_allowed": true,
    "is_set_on_device": false,
    "created_at": "2023-11-19T09:52:36.855Z"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const updated_schedule = await seam.thermostats.climateSettingSchedules.update({
  climate_setting_schedule_id: "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
  schedule_ends_at: "2023-12-18T11:00:00.000Z",
  hvac_mode_setting: "heat_cool",
  cooling_set_point_fahrenheit: 75,
  heating_set_point_fahrenheit: 65
})

console.log(updated_schedule)
```

**Response:**

```json
{
  climate_setting_schedule_id: 'b7d5cc0c-defc-4af1-9448-85b96aff5fd6',
  schedule_type: 'time_bound',
  device_id: '518f692b-f865-4590-8c3e-3849e9984c75',
  name: 'Guest 2 Stay',
  schedule_starts_at: '2023-12-10T15:00:00.000Z',
  schedule_ends_at: '2023-12-18T11:00:00.000Z',
  automatic_heating_enabled: true,
  automatic_cooling_enabled: true,
  hvac_mode_setting: 'heat_cool',
  cooling_set_point_celsius: 23.88888888888889,
  heating_set_point_celsius: 18.333333333333336,
  cooling_set_point_fahrenheit: 75,
  heating_set_point_fahrenheit: 65,
  manual_override_allowed: true,
  is_set_on_device: false,
  created_at: '2023-11-19T09:52:36.855Z'
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var climateSettingScheduleId = "b7d5cc0c-defc-4af1-9448-85b96aff5fd6";
ClimateSettingSchedule updatedSchedule = seam.ClimateSettingSchedulesThermostats.Update(
      climateSettingScheduleId: climateSettingScheduleId,
      scheduleEndsAt: "2023-12-18T11:00:00.000Z",
      hvacModeSetting: Seam.Api.ClimateSettingSchedulesThermostats.UpdateRequest.HvacModeSettingEnum.HeatCool,
      coolingSetPointFahrenheit: 75,
      heatingSetPointFahrenheit: 65
);
Console.WriteLine(updatedSchedule);
```

**Response:**

```json
{
  "climate_setting_schedule_id": "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "name": "Guest 2 Stay",
  "schedule_starts_at": "2023-12-10T15:00:00.000Z",
  "schedule_ends_at": "2023-12-18T11:00:00.000Z",
  "created_at": "2023-11-19T09:52:36.855Z",
  "automatic_heating_enabled": true,
  "automatic_cooling_enabled": true,
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_celsius": 23.88889,
  "heating_set_point_celsius": 18.333334,
  "cooling_set_point_fahrenheit": 75.0,
  "heating_set_point_fahrenheit": 65.0,
  "manual_override_allowed": true
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var climateSettingScheduleId = "b7d5cc0c-defc-4af1-9448-85b96aff5fd6";
var updatedSchedule = seam.thermostats().climateSettingSchedules()
            .update(ClimateSettingSchedulesUpdateRequest.builder()
                    .climateSettingScheduleId(climateSettingScheduleId)
                    .scheduleEndsAt("2023-12-18T11:00:00.000Z")
                    .hvacModeSetting(HvacModeSetting.HEAT_COOL)
                    .coolingSetPointFahrenheit(75.0)
                    .heatingSetPointFahrenheit(65.0)
                    .build());
System.out.println(updatedSchedule);
```

**Response:**

```json
{
  "climate_setting_schedule" : {
    "climate_setting_schedule_id" : "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
    "device_id" : "518f692b-f865-4590-8c3e-3849e9984c75",
    "name" : "Guest 2 Stay",
    "schedule_starts_at" : "2023-12-10T15:00:00.000Z",
    "schedule_ends_at" : "2023-12-18T11:00:00.000Z",
    "created_at" : "2023-11-19T09:52:36.855Z",
    "automatic_heating_enabled" : true,
    "automatic_cooling_enabled" : true,
    "hvac_mode_setting" : "heat_cool",
    "cooling_set_point_celsius" : 23.88888888888889,
    "heating_set_point_celsius" : 18.333333333333336,
    "cooling_set_point_fahrenheit" : 75.0,
    "heating_set_point_fahrenheit" : 65.0,
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
