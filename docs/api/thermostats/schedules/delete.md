# Delete a Thermostat Schedule

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

## Authentication Methods

<style>
.auth-methods-container {
    margin: 1.5rem 0;
}

.auth-methods-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.auth-method-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eaeaea;
    font-family: system-ui, -apple-system, sans-serif;
}

.auth-method-item:last-child {
    border-bottom: none;
}

.auth-method-item::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #6366f1;
    margin-right: 1rem;
    flex-shrink: 0;
}

.auth-method-item span {
    font-size: 1rem;
    color: #374151;
}
</style>

<div class="auth-methods-container">
    <ul class="auth-methods-list">
            <li class="auth-method-item">
                <span>Client Session Token</span>
            </li>
            <li class="auth-method-item">
                <span>Personal Access Token</span>
            </li>
            <li class="auth-method-item">
                <span>Console Session Token</span>
            </li>
            <li class="auth-method-item">
                <span>API Key</span>
            </li>
    </ul>
</div>
## Request Parameters

### `thermostat_schedule_id`

Type: `string`
Required: Yes

ID of the desired thermostat schedule.

***

## Return Type

void
