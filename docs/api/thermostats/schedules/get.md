# Get a Thermostat Schedule

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

```javascript
await seam.thermostats.schedules.get({
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
});
```

#### Output

```javascript
{
  "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  "name": "Reservation 2",
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key": "occupied",
  "starts_at": "2024-11-10T15:00:00.000Z",
  "ends_at": "2024-11-15T12:00:00.000Z",
  "max_override_period_minutes": 90
}
```
{% endtab %}

{% tab title="cURL" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
}
EOF
```

#### Output

```curl
{
  "thermostat_schedule": {
    "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    "name": "Reservation 2",
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "starts_at": "2024-11-10T15:00:00.000Z",
    "ends_at": "2024-11-15T12:00:00.000Z",
    "max_override_period_minutes": 90
  }
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

```python
seam.thermostats.schedules.get(
    thermostat_schedule_id="89d3507e-60e3-4101-bd1b-ba066ec30ad4"
)
```

#### Output

```python
ThermostatSchedule(
    thermostat_schedule_id="89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    name="Reservation 2",
    device_id="2d488679-6f07-4810-aed2-e726872c1dd5",
    climate_preset_key="occupied",
    starts_at="2024-11-10T15:00:00.000Z",
    ends_at="2024-11-15T12:00:00.000Z",
    max_override_period_minutes=90,
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

```ruby
seam.thermostats.schedules.get(thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4")
```

#### Output

```ruby
{
  "thermostat_schedule_id" => "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  "name" => "Reservation 2",
  "device_id" => "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key" => "occupied",
  "starts_at" => "2024-11-10T15:00:00.000Z",
  "ends_at" => "2024-11-15T12:00:00.000Z",
  "max_override_period_minutes" => 90,
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

```php
<?php
$seam->thermostats->schedules->get(
    thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
);
```

#### Output

```php
<?php
[
    "thermostat_schedule_id" => "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    "name" => "Reservation 2",
    "device_id" => "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key" => "occupied",
    "starts_at" => "2024-11-10T15:00:00.000Z",
    "ends_at" => "2024-11-15T12:00:00.000Z",
    "max_override_period_minutes" => 90,
];
```
{% endtab %}

{% tab title="Go" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

```go
package main

import api "github.com/seamapi/go"
import schedules "github.com/seamapi/go/schedules"

func main() {
	client.Thermostats.Schedules.Get(
		context.Background(),
		schedules.SchedulesGetRequest{
			ThermostatScheduleId: api.String("89d3507e-60e3-4101-bd1b-ba066ec30ad4"),
		},
	)
}
```

#### Output

```go
api.ThermostatSchedule{ThermostatScheduleId: "89d3507e-60e3-4101-bd1b-ba066ec30ad4", Name: "Reservation 2", DeviceId: "2d488679-6f07-4810-aed2-e726872c1dd5", ClimatePresetKey: "occupied", StartsAt: "2024-11-10T15:00:00.000Z", EndsAt: "2024-11-15T12:00:00.000Z", MaxOverridePeriodMinutes: 90}
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

```seam_cli
seam thermostats schedules get --thermostat_schedule_id "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
```

#### Output

```seam_cli
{
  "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  "name": "Reservation 2",
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "climate_preset_key": "occupied",
  "starts_at": "2024-11-10T15:00:00.000Z",
  "ends_at": "2024-11-15T12:00:00.000Z",
  "max_override_period_minutes": 90
}
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

**`thermostat_schedule_id`** *String* (Required)

ID of the desired thermostat schedule.

---


## Response

[thermostat\_schedule](./)


---

## Examples

