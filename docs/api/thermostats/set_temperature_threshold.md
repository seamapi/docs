# Set a Temperature Threshold

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.

{% tabs %}
{% tab title="Signature" %}
```
PATCH /thermostats/set_temperature_threshold ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to set a temperature threshold.

---

**`lower_limit_celsius`** *Number*

Lower temperature limit in in °C. Seam alerts you if the reported temperature is lower than this value. You can specify either `lower_limit` but not both.

---

**`lower_limit_fahrenheit`** *Number*

Lower temperature limit in in °F. Seam alerts you if the reported temperature is lower than this value. You can specify either `lower_limit` but not both.

---

**`upper_limit_celsius`** *Number*

Upper temperature limit in in °C. Seam alerts you if the reported temperature is higher than this value. You can specify either `upper_limit` but not both.

---

**`upper_limit_fahrenheit`** *Number*

Upper temperature limit in in °C. Seam alerts you if the reported temperature is higher than this value. You can specify either `upper_limit` but not both.

---


## Response

void


---

## Examples

### Set a temperature threshold

Specify the `device_id` of the desired thermostat, along with the desired upper and lower limits in °C or °F.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.setTemperatureThreshold({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  lower_limit_celsius: 4,
  upper_limit_celsius: 30,
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.set_temperature_threshold(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    lower_limit_celsius=4,
    upper_limit_celsius=30,
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.set_temperature_threshold(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  lower_limit_celsius: 4,
  upper_limit_celsius: 30,
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->set_temperature_threshold(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    lower_limit_celsius: 4,
    upper_limit_celsius: 30
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam thermostats set-temperature-threshold --device_id "123e4567-e89b-12d3-a456-426614174000" --lower_limit_celsius 4 --upper_limit_celsius 30
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Code

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

#### Output

```go
nil
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/set_temperature_threshold" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "123e4567-e89b-12d3-a456-426614174000",
  "lower_limit_celsius": 4,
  "upper_limit_celsius": 30
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% endtabs %}


