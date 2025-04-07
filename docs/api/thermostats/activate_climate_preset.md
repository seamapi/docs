# Activate a Climate Preset

Activates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% hint style="success" %}
```
POST /thermostats/activate_climate_preset ⇒ { action_attempt }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`climate_preset_key`** *String* (Required)

Climate preset key of the desired climate preset.

---

**`device_id`** *String* (Required)

ID of the desired thermostat device.

---


## Return Type

[action\_attempt](./)

**Action attempt type: ACTIVATE_CLIMATE_PRESET**
{% tabs %}
{% tab title="JSON" %}
```json
{
  action_attempt_id: [example value],
  action_type: [example value],
  status: [example value]
}
```
{% endtab %}
{% endtabs %}

---

## Examples
  
### Activate a climate preset

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.activateClimatePreset({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
});
```

#### Output

```javascript
{
  "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
  "status": "pending",
  "action_type": "ACTIVATE_CLIMATE_PRESET"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.activate_climate_preset(
    device_id="123e4567-e89b-12d3-a456-426614174000", climate_preset_key="occupied"
)
```

#### Output

```python
ActionAttempt(
    action_attempt_id="05de2295-d1dc-4748-aae3-9931658bde20",
    status="pending",
    action_type="ACTIVATE_CLIMATE_PRESET",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.activate_climate_preset(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
)
```

#### Output

```ruby
{
  "action_attempt_id" => "05de2295-d1dc-4748-aae3-9931658bde20",
  "status" => "pending",
  "action_type" => "ACTIVATE_CLIMATE_PRESET",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->activate_climate_preset(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key: "occupied"
);
```

#### Output

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
#### Code

```seam_cli
seam thermostats activate-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "occupied"
```

#### Output

```seam_cli
{
  "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
  "status": "pending",
  "action_type": "ACTIVATE_CLIMATE_PRESET"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

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

#### Output

```go
api.ActionAttempt{ActionAttemptId: "05de2295-d1dc-4748-aae3-9931658bde20", Status: "pending", ActionType: "ACTIVATE_CLIMATE_PRESET"}
```
{% endtab %}

{% endtabs %}


