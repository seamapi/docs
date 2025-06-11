# Activate a Climate Preset
{% hint style="info" %}
**Alpha**. This API is in Alpha, please give us feedback.
{% endhint %}

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Activates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

{% tab title="cURL" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/activate_climate_preset" \
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
{
  "action_attempt": {
    "action_attempt_id": "05de2295-d1dc-4748-aae3-9931658bde20",
    "status": "pending",
    "action_type": "ACTIVATE_CLIMATE_PRESET"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

{% tab title="Go" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

{% tab title="Seam CLI" %}

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset.

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

Climate preset key of the climate preset that you want to activate.

---

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to activate a climate preset.

---


## Response

[action\_attempt](./)


---

## Examples

