# Activate a Climate Preset

- [Request Parameters](#request-parameters)
- [Response](#response)

Activates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Activates a specified climate preset for a specified thermostat.

#### Code:

```javascript
await seam.thermostats.activateClimatePreset({
  device_id: "52b88155-5b81-47d2-b04d-28a802bd7395",
  climate_preset_key: "Eco",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "action_type": "ACTIVATE_CLIMATE_PRESET",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Activates a specified climate preset for a specified thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/activate_climate_preset" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "52b88155-5b81-47d2-b04d-28a802bd7395",
  "climate_preset_key": "Eco"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "action_type": "ACTIVATE_CLIMATE_PRESET",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Activates a specified climate preset for a specified thermostat.

#### Code:

```python
seam.thermostats.activate_climate_preset(
    device_id="52b88155-5b81-47d2-b04d-28a802bd7395", climate_preset_key="Eco"
)
```

#### Output:

```python
ActionAttempt(
    action_attempt_id="f47ac10b-58cc-4372-a567-0e02b2c3d479",
    action_type="ACTIVATE_CLIMATE_PRESET",
    error=None,
    result={},
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Activates a specified climate preset for a specified thermostat.

#### Code:

```ruby
seam.thermostats.activate_climate_preset(
  device_id: "52b88155-5b81-47d2-b04d-28a802bd7395",
  climate_preset_key: "Eco",
)
```

#### Output:

```ruby
{
  "action_attempt_id" => "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "action_type" => "ACTIVATE_CLIMATE_PRESET",
  "error" => nil,
  "result" => {
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Activates a specified climate preset for a specified thermostat.

#### Code:

```php
$seam->thermostats->activate_climate_preset(
    device_id: "52b88155-5b81-47d2-b04d-28a802bd7395",
    climate_preset_key: "Eco",
);
```

#### Output:

```php
[
    "action_attempt_id" => "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "action_type" => "ACTIVATE_CLIMATE_PRESET",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Activates a specified climate preset for a specified thermostat.

#### Code:

```seam_cli
seam thermostats activate-climate-preset --device_id "52b88155-5b81-47d2-b04d-28a802bd7395" --climate_preset_key "Eco"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "action_type": "ACTIVATE_CLIMATE_PRESET",
  "error": null,
  "result": {},
  "status": "success"
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

{% hint style="success" %}
Returns:
[action\_attempt](./)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "action_type": "ACTIVATE_CLIMATE_PRESET",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
