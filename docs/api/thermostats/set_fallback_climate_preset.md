# Set the Fallback Climate Preset

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired fallback climate preset.

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

{% tab title="cURL" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired fallback climate preset.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/set_fallback_climate_preset" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "123e4567-e89b-12d3-a456-426614174000",
  "climate_preset_key": "eco"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired fallback climate preset.

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

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired fallback climate preset.

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

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired fallback climate preset.

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

{% tab title="Go" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired fallback climate preset.

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

{% tab title="Seam CLI" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired fallback climate preset.

#### Code

```seam_cli
seam thermostats set-fallback-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "eco"
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`climate_preset_key`** *String* (Required)

Climate preset key of the climate preset that you want to set as the fallback climate preset.

---

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to set the fallback climate preset.

---


## Response

void

