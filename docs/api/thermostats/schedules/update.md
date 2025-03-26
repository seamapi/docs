# Update a Thermostat Schedule

```
PATCH /thermostats/schedules/update ⇒ void
```

Updates a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

## Update a thermostat schedule

Specify the `thermostat_schedule_id` of the desired thermostat schedule, along with the desired updated settings for the thermostat schedule.

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.schedules.update({
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  ends_at: "2024-11-15T15:00:00Z",
});
```

#### Response

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.schedules.update(
    thermostat_schedule_id="89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    ends_at="2024-11-15T15:00:00Z",
)
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.schedules.update(
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  ends_at: "2024-11-15T15:00:00Z",
)
```

#### Response

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->schedules->update(
    thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    ends_at: "2024-11-15T15:00:00Z"
);
```

#### Response

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats schedules update --thermostat_schedule_id "89d3507e-60e3-4101-bd1b-ba066ec30ad4" --ends_at "2024-11-15T15:00:00Z"
```

#### Response

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import schedules "github.com/seamapi/go/schedules"

func main() {
	client.Thermostats.Schedules.Update(
		context.Background(),
		schedules.SchedulesUpdateRequest{
			ThermostatScheduleId: api.String("89d3507e-60e3-4101-bd1b-ba066ec30ad4"),
			EndsAt:               api.String("2024-11-15T15:00:00Z"),
		},
	)
}
```

#### Response

```go
nil
```
{% endtab %}

{% endtabs %}
## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `thermostat_schedule_id`

Type: `string`
Required: Yes

ID of the desired thermostat schedule.

***

### `climate_preset_key`

Type: `string`
Required: No

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the thermostat schedule.

***

### `ends_at`

Type: `string`
Required: No

Date and time at which the thermostat schedule ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

***

### `is_override_allowed`

Type: `boolean`
Required: No

Indicates whether a person at the thermostat or using the API can change the thermostat's settings while the schedule is active. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

***

### `max_override_period_minutes`

Type: `number`
Required: No

Number of minutes for which a person at the thermostat or using the API can change the thermostat's settings after the activation of the scheduled climate preset. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

***

### `name`

Type: `string`
Required: No

User-friendly name to identify the thermostat schedule.

***

### `starts_at`

Type: `string`
Required: No

Date and time at which the thermostat schedule starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

***

## Return Type

void
