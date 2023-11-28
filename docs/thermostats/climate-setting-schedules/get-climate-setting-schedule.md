# Get a Climate Setting Schedule

{% swagger src="https://connect.getseam.com/openapi.json" path="/thermostats/climate_setting_schedules/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.climate_setting_schedules.get("123e4567-e89b-12d3-a456-426614174000")

# ClimateSettingSchedule:
#    climate_setting_schedule_id: 123e4567-e89b-12d3-a456-426614174000
#    device_id: 123e4567-e89b-12d3-a456-426614174001
#    name: Guest Stay #1234  
#    schedule_starts_at: 2022-07-01T10:40:00Z    
#    schedule_ends_at: 2022-07-10T10:40:00Z     
#    created_at: 2022-07-06T23:26:42.223Z      
#    is_set_on_device: False
#    automatic_heating_enabled: True
#    automatic_cooling_enabled: True  
#    hvac_mode_setting: heat_cool
#    cooling_set_point_fahrenheit: 75 
#    heating_set_point_fahrenheit: 65
#    manual_override_allowed: True
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
seam.climateSettingSchedules.get({
  climate_setting_schedule_id: "123e4567-e89b-12d3-a456-426614174000"
})

// {
//   "climate_setting_schedule_id": "123e4567-e89b-12d3-a456-426614174000",
//   "device_id": "123e4567-e89b-12d3-a456-426614174001",
//   "name": "Guest Stay #1234",
//   "schedule_starts_at": "2022-07-01T10:40:00Z",
//   "schedule_ends_at": "2022-07-10T10:40:00Z",
//   "created_at": "2022-07-06T23:26:42.223Z",
//   "is_set_on_device": false,
//   "automatic_heating_enabled": true,
//   "automatic_cooling_enabled": true,
//   "hvac_mode_setting": "heat_cool",
//   "cooling_set_point_fahrenheit": 75,
//   "heating_set_point_fahrenheit": 65,
//   "manual_override_allowed": false
// }
```
{% endtab %}
{% endtabs %}

### Parameters

| `climate_setting_schedule_id` | type: string | ID of the Climate Setting Schedule |
| ----------------------------- | ------------ | ---------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "climate_setting_schedule": {
    "climate_setting_schedule_id": "123e4567-e89b-12d3-a456-426614174000",
    "device_id": "123e4567-e89b-12d3-a456-426614174001",
    "name": "Guest Stay #1234",
    "schedule_starts_at": "2022-07-01T10:40:00Z",
    "schedule_ends_at": "2022-07-10T10:40:00Z",
    "created_at": "2022-07-06T23:26:42.223Z",
    "is_set_on_device": false,
    "automatic_heating_enabled": true,
    "automatic_cooling_enabled": true,
    "hvac_mode_setting": "heat_cool",
    "cooling_set_point_fahrenheit": 75,
    "heating_set_point_fahrenheit": 65,
    "manual_override_allowed": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
