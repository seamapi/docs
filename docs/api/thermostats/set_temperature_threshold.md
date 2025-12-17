# Set a Temperature Threshold

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.


{% tabs %}
{% tab title="JavaScript" %}

Sets a temperature threshold for a specified thermostat.

#### Code:

```javascript
await seam.thermostats.setTemperatureThreshold({
  device_id: "a9b52627-e6e2-4beb-9168-964749f7bbae",
  lower_limit_fahrenheit: 60,
  upper_limit_fahrenheit: 80,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Sets a temperature threshold for a specified thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/set_temperature_threshold" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "a9b52627-e6e2-4beb-9168-964749f7bbae",
  "lower_limit_fahrenheit": 60,
  "upper_limit_fahrenheit": 80
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Sets a temperature threshold for a specified thermostat.

#### Code:

```python
seam.thermostats.set_temperature_threshold(
    device_id="a9b52627-e6e2-4beb-9168-964749f7bbae",
    lower_limit_fahrenheit=60,
    upper_limit_fahrenheit=80,
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Sets a temperature threshold for a specified thermostat.

#### Code:

```ruby
seam.thermostats.set_temperature_threshold(
  device_id: "a9b52627-e6e2-4beb-9168-964749f7bbae",
  lower_limit_fahrenheit: 60,
  upper_limit_fahrenheit: 80,
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Sets a temperature threshold for a specified thermostat.

#### Code:

```php
$seam->thermostats->set_temperature_threshold(
    device_id: "a9b52627-e6e2-4beb-9168-964749f7bbae",
    lower_limit_fahrenheit: 60,
    upper_limit_fahrenheit: 80,
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Sets a temperature threshold for a specified thermostat.

#### Code:

```seam_cli
seam thermostats set-temperature-threshold --device_id "a9b52627-e6e2-4beb-9168-964749f7bbae" --lower_limit_fahrenheit 60 --upper_limit_fahrenheit 80
```

#### Output:

```seam_cli
{}
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

{% hint style="success" %}
Returns:
**void

{% endhint %}

