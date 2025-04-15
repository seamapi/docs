# Set the Fallback Climate Preset

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/set_fallback_climate_preset ⇒ void
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

<table>
<tr><th width="25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>climate_preset_key</code></strong> <i>String</i> (Required)</td>
<td>

Climate preset key of the desired climate preset.

---
</td></tr>
<tr><td><strong><code>device_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the desired thermostat device.

---
</td></tr>
</table>

## Response

void

---

## Examples
  
### Set the fallback climate preset

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired fallback climate preset.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.setFallbackClimatePreset({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "eco",
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
seam.thermostats.set_fallback_climate_preset(
    device_id="123e4567-e89b-12d3-a456-426614174000", climate_preset_key="eco"
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
seam.thermostats.set_fallback_climate_preset(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "eco",
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
$seam->thermostats->set_fallback_climate_preset(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key: "eco"
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
seam thermostats set-fallback-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "eco"
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
	client.Thermostats.SetFallbackClimatePreset(
		context.Background(),
		api.ThermostatsSetFallbackClimatePresetRequest{
			DeviceId:         api.String("123e4567-e89b-12d3-a456-426614174000"),
			ClimatePresetKey: api.String("eco"),
		},
	)
}
```

#### Output

```go
nil
```
{% endtab %}

{% endtabs %}


