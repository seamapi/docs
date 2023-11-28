# Delete a Climate Setting Schedule

{% swagger src="https://connect.getseam.com/openapi.json" path="/thermostats/climate_setting_schedules/delete" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.climate_setting_schedules.delete("123e4567-e89b-12d3-a456-426614174000")

# None
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.climateSettingSchedules.delete({
    climate_setting_schedule_id: "123e4567-e89b-12d3-a456-426614174000",
});

//undefined
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
  "ok": true
}
```
{% endtab %}
{% endtabs %}
