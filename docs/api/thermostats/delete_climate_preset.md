# Delete a Climate Preset

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/delete_climate_preset ⇒ void
```
{% endtab %}
{% endtabs %}

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.deleteClimatePreset({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
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
seam.thermostats.delete_climate_preset(
    device_id="123e4567-e89b-12d3-a456-426614174000", climate_preset_key="occupied"
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
seam.thermostats.delete_climate_preset(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
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
$seam->thermostats->delete_climate_preset(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key: "occupied"
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
seam thermostats delete-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "occupied"
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
	client.Thermostats.DeleteClimatePreset(
		context.Background(),
		api.ThermostatsDeleteClimatePresetRequest{
			DeviceId:         api.String("123e4567-e89b-12d3-a456-426614174000"),
			ClimatePresetKey: api.String("occupied"),
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

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `climate_preset_key`

Type: `string`
Required: Yes

Climate preset key of the desired climate preset.

---

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

---


## Return Type

void
