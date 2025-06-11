# Delete a Thermostat Schedule

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deletes a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

#### Code

```javascript
await seam.thermostats.schedules.delete({
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/schedules/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "thermostat_schedule_id": "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

#### Code

```python
seam.thermostats.schedules.delete(
    thermostat_schedule_id="89d3507e-60e3-4101-bd1b-ba066ec30ad4"
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

#### Code

```ruby
seam.thermostats.schedules.delete(thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4")
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

#### Code

```php
<?php
$seam->thermostats->schedules->delete(
    thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Go" %}

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

#### Code

```go
package main

import api "github.com/seamapi/go"
import schedules "github.com/seamapi/go/schedules"

func main() {
	client.Thermostats.Schedules.Delete(
		context.Background(),
		schedules.SchedulesDeleteRequest{
			ThermostatScheduleId: api.String("89d3507e-60e3-4101-bd1b-ba066ec30ad4"),
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

Specify the `thermostat_schedule_id` of the desired thermostat schedule.

#### Code

```seam_cli
seam thermostats schedules delete --thermostat_schedule_id "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
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


## Response

void


---

## Examples

