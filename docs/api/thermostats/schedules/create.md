# Create a Thermostat Schedule

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/schedules/create ⇒ { thermostat_schedule }
```
{% endtab %}
{% endtabs %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`climate_preset_key`** *String* (Required)

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the thermostat schedule.

---

**`device_id`** *String* (Required)

ID of the desired thermostat device.

---

**`ends_at`** *String* (Required)

Date and time at which the thermostat schedule ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`starts_at`** *String* (Required)

Date and time at which the thermostat schedule starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`is_override_allowed`** *Boolean*

Indicates whether a person at the thermostat or using the API can change the thermostat's settings while the schedule is active. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`max_override_period_minutes`** *Number*

Number of minutes for which a person at the thermostat or using the API can change the thermostat's settings after the activation of the scheduled climate preset. See also [Specifying Manual Override Permissions](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`name`** *String*

User-friendly name to identify the thermostat schedule.

---


## Response

[thermostat\_schedule](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of thermostat_schedule
}
```
{% endtab %}
{% endtabs %}

---

## Examples
  
### Create a thermostat schedule

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset, as well as the desired `starts_at` and `ends_at` times.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.schedules.create({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Reservation 1",
  climate_preset_key: "occupied",
  starts_at: "2024-11-01T15:00:00Z",
  ends_at: "2024-11-05T12:00:00Z",
  max_override_period_minutes: 90,
});
```

#### Output

```javascript
{
  "thermostat_schedule_id": "56d29fcf-0674-4db5-8e03-b2370a77460a",
  "name": "Reservation 1",
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key": "occupied",
  "starts_at": "2024-11-01T15:00:00.000Z",
  "ends_at": "2024-11-05T12:00:00.000Z",
  "max_override_period_minutes": 90
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.schedules.create(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    name="Reservation 1",
    climate_preset_key="occupied",
    starts_at="2024-11-01T15:00:00Z",
    ends_at="2024-11-05T12:00:00Z",
    max_override_period_minutes=90,
)
```

#### Output

```python
ThermostatSchedule(
    thermostat_schedule_id="56d29fcf-0674-4db5-8e03-b2370a77460a",
    name="Reservation 1",
    device_id="2d488679-6f07-4810-aed2-e726872c1dd5",
    climate_preset_key="occupied",
    starts_at="2024-11-01T15:00:00.000Z",
    ends_at="2024-11-05T12:00:00.000Z",
    max_override_period_minutes=90,
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.schedules.create(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Reservation 1",
  climate_preset_key: "occupied",
  starts_at: "2024-11-01T15:00:00Z",
  ends_at: "2024-11-05T12:00:00Z",
  max_override_period_minutes: 90,
)
```

#### Output

```ruby
{
  "thermostat_schedule_id" => "56d29fcf-0674-4db5-8e03-b2370a77460a",
  "name" => "Reservation 1",
  "device_id" => "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key" => "occupied",
  "starts_at" => "2024-11-01T15:00:00.000Z",
  "ends_at" => "2024-11-05T12:00:00.000Z",
  "max_override_period_minutes" => 90,
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->schedules->create(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Reservation 1",
    climate_preset_key: "occupied",
    starts_at: "2024-11-01T15:00:00Z",
    ends_at: "2024-11-05T12:00:00Z",
    max_override_period_minutes: 90
);
```

#### Output

```php
<?php
[
    "thermostat_schedule_id" => "56d29fcf-0674-4db5-8e03-b2370a77460a",
    "name" => "Reservation 1",
    "device_id" => "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key" => "occupied",
    "starts_at" => "2024-11-01T15:00:00.000Z",
    "ends_at" => "2024-11-05T12:00:00.000Z",
    "max_override_period_minutes" => 90,
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam thermostats schedules create --device_id "123e4567-e89b-12d3-a456-426614174000" --name "Reservation 1" --climate_preset_key "occupied" --starts_at "2024-11-01T15:00:00Z" --ends_at "2024-11-05T12:00:00Z" --max_override_period_minutes 90
```

#### Output

```seam_cli
{
  "thermostat_schedule_id": "56d29fcf-0674-4db5-8e03-b2370a77460a",
  "name": "Reservation 1",
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key": "occupied",
  "starts_at": "2024-11-01T15:00:00.000Z",
  "ends_at": "2024-11-05T12:00:00.000Z",
  "max_override_period_minutes": 90
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"
import schedules "github.com/seamapi/go/schedules"

func main() {
	client.Thermostats.Schedules.Create(
		context.Background(),
		schedules.SchedulesCreateRequest{
			DeviceId:                 api.String("123e4567-e89b-12d3-a456-426614174000"),
			Name:                     api.String("Reservation 1"),
			ClimatePresetKey:         api.String("occupied"),
			StartsAt:                 api.String("2024-11-01T15:00:00Z"),
			EndsAt:                   api.String("2024-11-05T12:00:00Z"),
			MaxOverridePeriodMinutes: api.Float64(90),
		},
	)
}
```

#### Output

```go
api.ThermostatSchedule{ThermostatScheduleId: "56d29fcf-0674-4db5-8e03-b2370a77460a", Name: "Reservation 1", DeviceId: "2d488679-6f07-4810-aed2-e726872c1dd5", ClimatePresetKey: "occupied", StartsAt: "2024-11-01T15:00:00.000Z", EndsAt: "2024-11-05T12:00:00.000Z", MaxOverridePeriodMinutes: 90}
```
{% endtab %}

{% endtabs %}


