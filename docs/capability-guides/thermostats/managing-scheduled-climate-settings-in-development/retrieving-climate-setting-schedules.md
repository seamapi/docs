---
description: Learn how to retrieve climate setting schedules by device or by specific ID.
---

# Retrieving Climate Setting Schedules

## Retrieving All Climate Setting Schedules for a Device

To retrieve all [climate setting schedules](thermostats-climate-setting-schedules.md#climate-setting-schedules) for a device, include the `device_id` in the [List Climate Setting Schedules](../../../thermostats/climate-setting-schedules/list-climate-setting-schedules.md) request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_id = "518f692b-f865-4590-8c3e-3849e9984c75"
climate_setting_schedules = seam.thermostats.climate_setting_schedules.list(device=device_id)

pprint(climate_setting_schedules)
```

**Response:**

```
[ClimateSettingSchedule(automatic_heating_enabled=True,
                        automatic_cooling_enabled=True,
                        hvac_mode_setting='heat_cool',
                        cooling_set_point_celsius=25.555555555555557,
                        heating_set_point_celsius=18.333333333333336,
                        cooling_set_point_fahrenheit=78.0,
                        heating_set_point_fahrenheit=65.0,
                        manual_override_allowed=True,
                        schedule_type='time_bound',
                        name='Guest 1 Stay',
                        schedule_starts_at='2023-12-01T15:00:00.000Z',
                        schedule_ends_at='2023-12-08T11:00:00.000Z',
                        climate_setting_schedule_id='6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7',
                        is_set_on_device=False,
                        device_id='518f692b-f865-4590-8c3e-3849e9984c75',
                        created_at='2023-11-18T08:52:42.759Z'),
 ClimateSettingSchedule(automatic_heating_enabled=True,
                        automatic_cooling_enabled=True,
                        hvac_mode_setting='heat_cool',
                        cooling_set_point_celsius=25.0,
                        heating_set_point_celsius=20.0,
                        cooling_set_point_fahrenheit=77.0,
                        heating_set_point_fahrenheit=68.0,
                        manual_override_allowed=True,
                        schedule_type='time_bound',
                        name='Guest 2 Stay',
                        schedule_starts_at='2023-12-10T15:00:00.000Z',
                        schedule_ends_at='2023-12-17T11:00:00.000Z',
                        climate_setting_schedule_id='b7d5cc0c-defc-4af1-9448-85b96aff5fd6',
                        is_set_on_device=False,
                        device_id='518f692b-f865-4590-8c3e-3849e9984c75',
                        created_at='2023-11-19T09:52:36.855Z')]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/thermostats/climate_setting_schedules/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75"
}'
```

**Response:**

```json
{
  "climate_setting_schedules": [
    {
      "climate_setting_schedule_id": "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7",
      "schedule_type": "time_bound",
      "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
      "name": "Guest 1 Stay",
      "schedule_starts_at": "2023-12-01T15:00:00.000Z",
      "schedule_ends_at": "2023-12-08T11:00:00.000Z",
      "automatic_heating_enabled": true,
      "automatic_cooling_enabled": true,
      "hvac_mode_setting": "heat_cool",
      "cooling_set_point_celsius": 25.555555555555557,
      "heating_set_point_celsius": 18.333333333333336,
      "cooling_set_point_fahrenheit": 78,
      "heating_set_point_fahrenheit": 65,
      "manual_override_allowed": true,
      "is_set_on_device": false,
      "created_at": "2023-11-18T08:52:42.759Z"
    },
    {
      "climate_setting_schedule_id": "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
      "schedule_type": "time_bound",
      "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
      "name": "Guest 2 Stay",
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
      "created_at": "2023-11-19T09:52:36.855Z"
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.thermostats.climateSettingSchedules.list({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
}))
```

**Response:**

```json
[
  {
    climate_setting_schedule_id: '6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7',
    schedule_type: 'time_bound',
    device_id: '518f692b-f865-4590-8c3e-3849e9984c75',
    name: 'Guest 1 Stay',
    schedule_starts_at: '2023-12-01T15:00:00.000Z',
    schedule_ends_at: '2023-12-08T11:00:00.000Z',
    automatic_heating_enabled: true,
    automatic_cooling_enabled: true,
    hvac_mode_setting: 'heat_cool',
    cooling_set_point_celsius: 25.555555555555557,
    heating_set_point_celsius: 18.333333333333336,
    cooling_set_point_fahrenheit: 78,
    heating_set_point_fahrenheit: 65,
    manual_override_allowed: true,
    is_set_on_device: false,
    created_at: '2023-11-18T08:52:42.759Z'
  },
  {
    climate_setting_schedule_id: 'b7d5cc0c-defc-4af1-9448-85b96aff5fd6',
    schedule_type: 'time_bound',
    device_id: '518f692b-f865-4590-8c3e-3849e9984c75',
    name: 'Guest 2 Stay',
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
    created_at: '2023-11-19T09:52:36.855Z'
  }
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
List<ClimateSettingSchedule> climateSettingSchedules = seam.ClimateSettingSchedulesThermostats.List(deviceId: "518f692b-f865-4590-8c3e-3849e9984c75");
foreach (ClimateSettingSchedule climateSettingSchedule in climateSettingSchedules)
{
  Console.WriteLine(climateSettingSchedule);
}
```

**Response:**

```json
{
  "climate_setting_schedule_id": "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7",
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "name": "Guest 1 Stay",
  "schedule_starts_at": "2023-12-01T15:00:00.000Z",
  "schedule_ends_at": "2023-12-08T11:00:00.000Z",
  "created_at": "2023-11-18T08:52:42.759Z",
  "automatic_heating_enabled": true,
  "automatic_cooling_enabled": true,
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_celsius": 25.555555,
  "heating_set_point_celsius": 18.333334,
  "cooling_set_point_fahrenheit": 78.0,
  "heating_set_point_fahrenheit": 65.0,
  "manual_override_allowed": true
}
{
  "climate_setting_schedule_id": "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "name": "Guest 2 Stay",
  "schedule_starts_at": "2023-12-10T15:00:00.000Z",
  "schedule_ends_at": "2023-12-17T11:00:00.000Z",
  "created_at": "2023-11-19T09:52:36.855Z",
  "automatic_heating_enabled": true,
  "automatic_cooling_enabled": true,
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_celsius": 25.0,
  "heating_set_point_celsius": 20.0,
  "cooling_set_point_fahrenheit": 77.0,
  "heating_set_point_fahrenheit": 68.0,
  "manual_override_allowed": true
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```javascript
var deviceId = "518f692b-f865-4590-8c3e-3849e9984c75";
var climateSettingSchedules = seam.thermostats().climateSettingSchedules()
      .list(ClimateSettingSchedulesListRequest.builder()
              .deviceId(deviceId)
              .build());
System.out.println(climateSettingSchedules);
```

**Response:**

```json
{
  "climate_setting_schedules" : [ {
    "climate_setting_schedule_id" : "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7",
    "device_id" : "518f692b-f865-4590-8c3e-3849e9984c75",
    "name" : "Guest 1 Stay",
    "schedule_starts_at" : "2023-12-01T15:00:00.000Z",
    "schedule_ends_at" : "2023-12-08T11:00:00.000Z",
    "created_at" : "2023-11-18T08:52:42.759Z",
    "automatic_heating_enabled" : true,
    "automatic_cooling_enabled" : true,
    "hvac_mode_setting" : "heat_cool",
    "cooling_set_point_celsius" : 25.555555555555557,
    "heating_set_point_celsius" : 18.333333333333336,
    "cooling_set_point_fahrenheit" : 78.0,
    "heating_set_point_fahrenheit" : 65.0,
    "manual_override_allowed" : true,
    "schedule_type" : "time_bound",
    "schedule_type" : "time_bound",
    "is_set_on_device" : false
  }, {
    "climate_setting_schedule_id" : "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
    "device_id" : "518f692b-f865-4590-8c3e-3849e9984c75",
    "name" : "Guest 2 Stay",
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
  } ],
  "ok" : true
}
```
{% endtab %}
{% endtabs %}

***

## Retrieving Individual Climate Setting Schedules

To retrieve a specific [climate setting schedule](thermostats-climate-setting-schedules.md#climate-setting-schedules), include the desired `climate_setting_schedule_id` in the [Get Climate Setting Schedule](../../../thermostats/climate-setting-schedules/get-climate-setting-schedule.md) request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
climate_setting_schedule_id = "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
climate_setting_schedule = seam.thermostats.climate_setting_schedules.get(climate_setting_schedule_id)

pprint(climate_setting_schedule)
```

**Response:**

```
ClimateSettingSchedule(automatic_heating_enabled=True,
                       automatic_cooling_enabled=True,
                       hvac_mode_setting='heat_cool',
                       cooling_set_point_celsius=25.555555555555557,
                       heating_set_point_celsius=18.333333333333336,
                       cooling_set_point_fahrenheit=78.0,
                       heating_set_point_fahrenheit=65.0,
                       manual_override_allowed=True,
                       schedule_type='time_bound',
                       name='Guest 1 Stay',
                       schedule_starts_at='2023-12-01T15:00:00.000Z',
                       schedule_ends_at='2023-12-08T11:00:00.000Z',
                       climate_setting_schedule_id='6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7',
                       is_set_on_device=False,
                       device_id='518f692b-f865-4590-8c3e-3849e9984c75',
                       created_at='2023-11-18T08:52:42.759Z')
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/thermostats/climate_setting_schedules/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "climate_setting_schedule_id": "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
}'
```

**Response:**

```json
{
  "climate_setting_schedule": {
    "climate_setting_schedule_id": "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7",
    "schedule_type": "time_bound",
    "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
    "name": "Guest 1 Stay",
    "schedule_starts_at": "2023-12-01T15:00:00.000Z",
    "schedule_ends_at": "2023-12-08T11:00:00.000Z",
    "automatic_heating_enabled": true,
    "automatic_cooling_enabled": true,
    "hvac_mode_setting": "heat_cool",
    "cooling_set_point_celsius": 25.555555555555557,
    "heating_set_point_celsius": 18.333333333333336,
    "cooling_set_point_fahrenheit": 78,
    "heating_set_point_fahrenheit": 65,
    "manual_override_allowed": true,
    "is_set_on_device": false,
    "created_at": "2023-11-18T08:52:42.759Z"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.thermostats.climateSettingSchedules.get({
  climate_setting_schedule_id: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
}))
```

**Response:**

```json
{
  climate_setting_schedule_id: '6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7',
  schedule_type: 'time_bound',
  device_id: '518f692b-f865-4590-8c3e-3849e9984c75',
  name: 'Guest 1 Stay',
  schedule_starts_at: '2023-12-01T15:00:00.000Z',
  schedule_ends_at: '2023-12-08T11:00:00.000Z',
  automatic_heating_enabled: true,
  automatic_cooling_enabled: true,
  hvac_mode_setting: 'heat_cool',
  cooling_set_point_celsius: 25.555555555555557,
  heating_set_point_celsius: 18.333333333333336,
  cooling_set_point_fahrenheit: 78,
  heating_set_point_fahrenheit: 65,
  manual_override_allowed: true,
  is_set_on_device: false,
  created_at: '2023-11-18T08:52:42.759Z'
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
ClimateSettingSchedule climateSettingSchedule = seam.ClimateSettingSchedulesThermostats.Get(climateSettingScheduleId: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7");
Console.WriteLine(climateSettingSchedule);
```

**Response:**

```
{
  "climate_setting_schedule_id": "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7",
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "name": "Guest 1 Stay",
  "schedule_starts_at": "2023-12-01T15:00:00.000Z",
  "schedule_ends_at": "2023-12-08T11:00:00.000Z",
  "created_at": "2023-11-18T08:52:42.759Z",
  "automatic_heating_enabled": true,
  "automatic_cooling_enabled": true,
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_celsius": 25.555555,
  "heating_set_point_celsius": 18.333334,
  "cooling_set_point_fahrenheit": 78.0,
  "heating_set_point_fahrenheit": 65.0,
  "manual_override_allowed": true
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var climateSettingSchedule = seam.thermostats().climateSettingSchedules()
      .get(ClimateSettingSchedulesGetRequest.builder()
              .climateSettingScheduleId("6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7")
              .build());
System.out.println(climateSettingSchedule);
```

**Response:**

```json
{
  "climate_setting_schedule" : {
    "climate_setting_schedule_id" : "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7",
    "device_id" : "518f692b-f865-4590-8c3e-3849e9984c75",
    "name" : "Guest 1 Stay",
    "schedule_starts_at" : "2023-12-01T15:00:00.000Z",
    "schedule_ends_at" : "2023-12-08T11:00:00.000Z",
    "created_at" : "2023-11-18T08:52:42.759Z",
    "automatic_heating_enabled" : true,
    "automatic_cooling_enabled" : true,
    "hvac_mode_setting" : "heat_cool",
    "cooling_set_point_celsius" : 25.555555555555557,
    "heating_set_point_celsius" : 18.333333333333336,
    "cooling_set_point_fahrenheit" : 78.0,
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
