# Set a Temperature Threshold

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.

{% hint style="success" %}
```
PATCH /thermostats/set_temperature_threshold ⇒ void
```
{% endhint %}

## Parameters

**`device_id`** ** (Required)

ID of the desired thermostat device.

---

**`lower_limit_celsius`** **

Lower temperature limit in in °C. Seam alerts you if the reported temperature is lower than this value. You can specify either `lower_limit` but not both.

---

**`lower_limit_fahrenheit`** **

Lower temperature limit in in °F. Seam alerts you if the reported temperature is lower than this value. You can specify either `lower_limit` but not both.

---

**`upper_limit_celsius`** **

Upper temperature limit in in °C. Seam alerts you if the reported temperature is higher than this value. You can specify either `upper_limit` but not both.

---

**`upper_limit_fahrenheit`** **

Upper temperature limit in in °C. Seam alerts you if the reported temperature is higher than this value. You can specify either `upper_limit` but not both.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

void
