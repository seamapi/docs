# Delete a Climate Preset

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

{% tab title="cURL" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/delete_climate_preset" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "123e4567-e89b-12d3-a456-426614174000",
  "climate_preset_key": "occupied"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

{% tab title="Go" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

{% tab title="Seam CLI" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

#### Code

```seam_cli
seam thermostats delete-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "occupied"
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
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`climate_preset_key`** *String* (Required)

Climate preset key of the climate preset that you want to delete.

---

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to delete a climate preset.

---


## Response

void


---

## Examples

