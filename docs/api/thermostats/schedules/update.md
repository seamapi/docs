# Update a Thermostat Schedule

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates a specified [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule, along with the desired updated settings for the thermostat schedule.

```javascript
await seam.thermostats.schedules.update({
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  ends_at: "2024-11-15T15:00:00Z",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule, along with the desired updated settings for the thermostat schedule.

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  "ends_at": "2024-11-15T15:00:00Z"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule, along with the desired updated settings for the thermostat schedule.

```python
seam.thermostats.schedules.update(
    thermostat_schedule_id="89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    ends_at="2024-11-15T15:00:00Z",
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule, along with the desired updated settings for the thermostat schedule.

```ruby
seam.thermostats.schedules.update(
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
  ends_at: "2024-11-15T15:00:00Z",
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule, along with the desired updated settings for the thermostat schedule.

```php
<?php
$seam->thermostats->schedules->update(
    thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
    ends_at: "2024-11-15T15:00:00Z"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Go" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule, along with the desired updated settings for the thermostat schedule.

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

#### Output

```go
nil
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

Specify the `thermostat_schedule_id` of the desired thermostat schedule, along with the desired updated settings for the thermostat schedule.

```seam_cli
seam thermostats schedules update --thermostat_schedule_id "89d3507e-60e3-4101-bd1b-ba066ec30ad4" --ends_at "2024-11-15T15:00:00Z"
```

#### Output

```seam_cli
{}
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

**`climate_preset_key`** *String*

Key of the [climate preset](../../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the thermostat schedule.

---

**`ends_at`** *String*

Date and time at which the thermostat schedule ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

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

**`starts_at`** *String*

Date and time at which the thermostat schedule starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---


## Response

void


---

## Examples

