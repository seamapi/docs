# List Thermostat Schedules

```
POST /thermostats/schedules/list ⇒ { thermostat_schedules: [thermostat_schedule, …] }
```

Returns a list of all [thermostat schedules](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.schedules.list({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Response

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
#### Request

```python
seam.thermostats.schedules.list(device_id="123e4567-e89b-12d3-a456-426614174000")
```

#### Response

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
#### Request

```ruby
seam.thermostats.schedules.list(device_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Response

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
#### Request

```php
<?php
$seam->thermostats->schedules->list(
    device_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Response

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
#### Request

```seam_cli
seam thermostats schedules list --device_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Response

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
#### Request

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

#### Response

```go
[]api.ThermostatSchedule{api.ThermostatSchedule{ThermostatScheduleId: "89d3507e-60e3-4101-bd1b-ba066ec30ad4", Name: "Reservation 2", DeviceId: "2d488679-6f07-4810-aed2-e726872c1dd5", ClimatePresetKey: "occupied", StartsAt: "2024-11-10T15:00:00.000Z", EndsAt: "2024-11-15T12:00:00.000Z", MaxOverridePeriodMinutes: 90}, api.ThermostatSchedule{ThermostatScheduleId: "665553d1-94f9-4e92-9739-06ac6362c959", Name: "Reservation 3", DeviceId: "2d488679-6f07-4810-aed2-e726872c1dd5", ClimatePresetKey: "occupied", StartsAt: "2024-11-16T15:00:00.000Z", EndsAt: "2024-11-18T12:00:00.000Z", MaxOverridePeriodMinutes: 90}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Format: `UUID`
Required: Yes

ID of the desired thermostat device.

***

### `user_identifier_key`

Format: `String`
Required: No

User identifier key by which to filter the list of returned thermostat schedules.

***

## Return Type

Array<[thermostat\_schedule](./)>
