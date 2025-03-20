# Activate a Climate Preset

```
POST /thermostats/activate_climate_preset ⇒ { action_attempt }
```

Activates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.activateClimatePreset({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
});
```

#### Response

```javascript
{
  "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
  "status": "pending",
  "action_type": "ACTIVATE_CLIMATE_PRESET"
}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.activate_climate_preset(
    device_id="123e4567-e89b-12d3-a456-426614174000", climate_preset_key="occupied"
)
```

#### Response

```python
ActionAttempt(
    action_attempt_id="05de2295-d1dc-4748-aae3-9931658bde20",
    status="pending",
    action_type="ACTIVATE_CLIMATE_PRESET",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.activate_climate_preset(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
)
```

#### Response

```ruby
{
  "action_attempt_id" => "05de2295-d1dc-4748-aae3-9931658bde20",
  "status" => "pending",
  "action_type" => "ACTIVATE_CLIMATE_PRESET",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->activate_climate_preset(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key: "occupied"
);
```

#### Response

```php
<?php
[
    "action_attempt_id" => "05de2295-d1dc-4748-aae3-9931658bde20",
    "status" => "pending",
    "action_type" => "ACTIVATE_CLIMATE_PRESET",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats activate-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "occupied"
```

#### Response

```seam_cli
{
  "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
  "status": "pending",
  "action_type": "ACTIVATE_CLIMATE_PRESET"
}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.ActivateClimatePreset(
		context.Background(),
		api.ThermostatsActivateClimatePresetRequest{
			DeviceId:         api.String("123e4567-e89b-12d3-a456-426614174000"),
			ClimatePresetKey: api.String("occupied"),
		},
	)
}
```

#### Response

```go
api.ActionAttempt{ActionAttemptId: "05de2295-d1dc-4748-aae3-9931658bde20", Status: "pending", ActionType: "ACTIVATE_CLIMATE_PRESET"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `climate_preset_key`

Type: `string`
Required: Yes

Climate preset key of the desired climate preset.

***

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

## Return Type

[action\_attempt](./)

### `ACTIVATE_CLIMATE_PRESET`

Activating climate preset.

#### `action_attempt_id`

Format: `UUID`

The ID of the action attempt.

---

#### `action_type`

Format: `String`

---

#### `error`

Format: `Object`

<details>

<summary><code>message</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>type</code> Format: <code>String</code></summary>

</details>

---

#### `result`

Format: `Object`

This object has no properties.

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

