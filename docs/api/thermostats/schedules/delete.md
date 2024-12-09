# Delete a Thermostat Schedule

{% hint style="info" %}
**Authentication Methods:** `client_session_token`, `personal_access_token`, `console_session_token`, `api_key`
{% endhint %}

```
POST /thermostats/schedules/delete ⇒ void
```

Deletes a [thermostat schedule](../../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.schedules.delete({
  thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4",
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
seam.thermostats.schedules.delete(
    thermostat_schedule_id="89d3507e-60e3-4101-bd1b-ba066ec30ad4"
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
seam.thermostats.schedules.delete(thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4")
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
$seam->thermostats->schedules->delete(
    thermostat_schedule_id: "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
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
seam thermostats schedules delete --thermostat_schedule_id "89d3507e-60e3-4101-bd1b-ba066ec30ad4"
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
	client.Thermostats.Schedules.Delete(
		context.Background(),
		schedules.SchedulesDeleteRequest{
			ThermostatScheduleId: api.String("89d3507e-60e3-4101-bd1b-ba066ec30ad4"),
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

## Request Parameters

### `thermostat_schedule_id`

Type: `string`
Required: Yes

ID of the desired thermostat schedule.

***

## Return Type

void
