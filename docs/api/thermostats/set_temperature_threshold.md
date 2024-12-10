# Set a Temperature Threshold

```
PATCH /thermostats/set_temperature_threshold ⇒ void
```

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.setTemperatureThreshold({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  lower_limit_celsius: 4,
  upper_limit_celsius: 30,
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
seam.thermostats.set_temperature_threshold(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    lower_limit_celsius=4,
    upper_limit_celsius=30,
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
seam.thermostats.set_temperature_threshold(device_id: "123e4567-e89b-12d3-a456-426614174000", lower_limit_celsius: 4, upper_limit_celsius: 30)
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
$seam->thermostats->set_temperature_threshold(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    lower_limit_celsius: 4,
    upper_limit_celsius: 30
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
seam thermostats set-temperature-threshold --device_id "123e4567-e89b-12d3-a456-426614174000" --lower_limit_celsius 4 --upper_limit_celsius 30
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

func main() {
	client.Thermostats.SetTemperatureThreshold(
		context.Background(),
		api.ThermostatsSetTemperatureThresholdRequest{
			DeviceId:          api.String("123e4567-e89b-12d3-a456-426614174000"),
			LowerLimitCelsius: api.Float64(4),
			UpperLimitCelsius: api.Float64(30),
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
                <span>API Key</span>
            </li>
            <li class="auth-method-item">
                <span>Personal Access Token</span>
            </li>
            <li class="auth-method-item">
                <span>Console Session Token</span>
            </li>
    </ul>
</div>
## Request Parameters

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

### `lower_limit_celsius`

Type: `number`
Required: No

Lower temperature limit in in °C. Seam alerts you if the reported temperature is lower than this value. You can specify either `lower_limit` but not both.

***

### `lower_limit_fahrenheit`

Type: `number`
Required: No

Lower temperature limit in in °F. Seam alerts you if the reported temperature is lower than this value. You can specify either `lower_limit` but not both.

***

### `upper_limit_celsius`

Type: `number`
Required: No

Upper temperature limit in in °C. Seam alerts you if the reported temperature is higher than this value. You can specify either `upper_limit` but not both.

***

### `upper_limit_fahrenheit`

Type: `number`
Required: No

Upper temperature limit in in °C. Seam alerts you if the reported temperature is higher than this value. You can specify either `upper_limit` but not both.

***

## Return Type

void
