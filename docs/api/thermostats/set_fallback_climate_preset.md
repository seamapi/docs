# Set the Fallback Climate Preset

```
POST /thermostats/set_fallback_climate_preset ⇒ void
```

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.setFallbackClimatePreset({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "eco",
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
seam.thermostats.set_fallback_climate_preset(
    device_id="123e4567-e89b-12d3-a456-426614174000", climate_preset_key="eco"
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
seam.thermostats.set_fallback_climate_preset(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "eco",
)
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
$seam->thermostats->set_fallback_climate_preset(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key: "eco"
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
seam thermostats set-fallback-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "eco"
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
	client.Thermostats.SetFallbackClimatePreset(
		context.Background(),
		api.ThermostatsSetFallbackClimatePresetRequest{
			DeviceId:         api.String("123e4567-e89b-12d3-a456-426614174000"),
			ClimatePresetKey: api.String("eco"),
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

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `climate_preset_key`

Format: `String`
Required: Yes

Climate preset key of the desired climate preset.

***

### `device_id`

Format: `UUID`
Required: Yes

ID of the desired thermostat device.

***

## Return Type

void
