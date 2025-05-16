# List Thermostat Schedules

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [thermostat schedules](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/schedules/list ⇒ { thermostat_schedules: [thermostat_schedule, …] }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** ** (Required)

ID of the desired thermostat device.

---

**`user_identifier_key`** **

User identifier key by which to filter the list of returned thermostat schedules.

---


## Response

Array of [thermostat\_schedules](./)
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
  
### List thermostat schedules for a thermostat

Specify the `device_id` of the desired thermostat.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.schedules.list({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Output

```javascript
[
  {
    "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    "name": "Reservation 2",
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-10T15:00:00.000Z",
    "ends_at": "2024-11-15T12:00:00.000Z",
    "max_override_period_minutes": 90
  },
  {
    "thermostat_schedule_id": "665553d1-94f9-4e92-9739-06ac6362c959",
    "name": "Reservation 3",
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-16T15:00:00.000Z",
    "ends_at": "2024-11-18T12:00:00.000Z",
    "max_override_period_minutes": 90
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.schedules.list(device_id="123e4567-e89b-12d3-a456-426614174000")
```

#### Output

```python
[
    ThermostatSchedule(
        thermostat_schedule_id="89d3507e-60e3-4101-bd1b-ba066ec30ad4",
        name="Reservation 2",
        device_id="2d488679-6f07-4810-aed2-e726872c1dd5",
        climate_preset_key="occupied",
        starts_at="2024-11-10T15:00:00.000Z",
        ends_at="2024-11-15T12:00:00.000Z",
        max_override_period_minutes=90,
    ),
    ThermostatSchedule(
        thermostat_schedule_id="665553d1-94f9-4e92-9739-06ac6362c959",
        name="Reservation 3",
        device_id="2d488679-6f07-4810-aed2-e726872c1dd5",
        climate_preset_key="occupied",
        starts_at="2024-11-16T15:00:00.000Z",
        ends_at="2024-11-18T12:00:00.000Z",
        max_override_period_minutes=90,
    ),
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.schedules.list(device_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Output

```ruby
[
  {
    "thermostat_schedule_id" => "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    "name" => "Reservation 2",
    "device_id" => "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key" => "occupied",
    "starts_at" => "2024-11-10T15:00:00.000Z",
    "ends_at" => "2024-11-15T12:00:00.000Z",
    "max_override_period_minutes" => 90,
  },
  {
    "thermostat_schedule_id" => "665553d1-94f9-4e92-9739-06ac6362c959",
    "name" => "Reservation 3",
    "device_id" => "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key" => "occupied",
    "starts_at" => "2024-11-16T15:00:00.000Z",
    "ends_at" => "2024-11-18T12:00:00.000Z",
    "max_override_period_minutes" => 90,
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->schedules->list(
    device_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Output

```php
<?php
[
    [
        "thermostat_schedule_id" => "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
        "name" => "Reservation 2",
        "device_id" => "2d488679-6f07-4810-aed2-e726872c1dd5",
        "climate_preset_key" => "occupied",
        "starts_at" => "2024-11-10T15:00:00.000Z",
        "ends_at" => "2024-11-15T12:00:00.000Z",
        "max_override_period_minutes" => 90,
    ],
    [
        "thermostat_schedule_id" => "665553d1-94f9-4e92-9739-06ac6362c959",
        "name" => "Reservation 3",
        "device_id" => "2d488679-6f07-4810-aed2-e726872c1dd5",
        "climate_preset_key" => "occupied",
        "starts_at" => "2024-11-16T15:00:00.000Z",
        "ends_at" => "2024-11-18T12:00:00.000Z",
        "max_override_period_minutes" => 90,
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam thermostats schedules list --device_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Output

```seam_cli
[
  {
    "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    "name": "Reservation 2",
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-10T15:00:00.000Z",
    "ends_at": "2024-11-15T12:00:00.000Z",
    "max_override_period_minutes": 90
  },
  {
    "thermostat_schedule_id": "665553d1-94f9-4e92-9739-06ac6362c959",
    "name": "Reservation 3",
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-16T15:00:00.000Z",
    "ends_at": "2024-11-18T12:00:00.000Z",
    "max_override_period_minutes": 90
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"
import schedules "github.com/seamapi/go/schedules"

func main() {
	client.Thermostats.Schedules.List(
		context.Background(),
		schedules.SchedulesListRequest{
			DeviceId: api.String("123e4567-e89b-12d3-a456-426614174000"),
		},
	)
}
```

#### Output

```go
[]api.ThermostatSchedule{api.ThermostatSchedule{ThermostatScheduleId: "89d3507e-60e3-4101-bd1b-ba066ec30ad4", Name: "Reservation 2", DeviceId: "2d488679-6f07-4810-aed2-e726872c1dd5", ClimatePresetKey: "occupied", StartsAt: "2024-11-10T15:00:00.000Z", EndsAt: "2024-11-15T12:00:00.000Z", MaxOverridePeriodMinutes: 90}, api.ThermostatSchedule{ThermostatScheduleId: "665553d1-94f9-4e92-9739-06ac6362c959", Name: "Reservation 3", DeviceId: "2d488679-6f07-4810-aed2-e726872c1dd5", ClimatePresetKey: "occupied", StartsAt: "2024-11-16T15:00:00.000Z", EndsAt: "2024-11-18T12:00:00.000Z", MaxOverridePeriodMinutes: 90}}
```
{% endtab %}

{% endtabs %}


