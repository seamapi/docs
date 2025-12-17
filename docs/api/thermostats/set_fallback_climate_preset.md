# Set the Fallback Climate Preset

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Sets a specified climate preset as the "fallback" preset for a specified thermostat.

#### Code:

```javascript
await seam.thermostats.setFallbackClimatePreset({
  device_id: "9a21ddcb-8eeb-4351-8770-1835c3db8b2e",
  climate_preset_key: "Eco",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Sets a specified climate preset as the "fallback" preset for a specified thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/set_fallback_climate_preset" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "9a21ddcb-8eeb-4351-8770-1835c3db8b2e",
  "climate_preset_key": "Eco"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Sets a specified climate preset as the "fallback" preset for a specified thermostat.

#### Code:

```python
seam.thermostats.set_fallback_climate_preset(device_id="9a21ddcb-8eeb-4351-8770-1835c3db8b2e", climate_preset_key="Eco")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Sets a specified climate preset as the "fallback" preset for a specified thermostat.

#### Code:

```ruby
seam.thermostats.set_fallback_climate_preset(device_id: "9a21ddcb-8eeb-4351-8770-1835c3db8b2e", climate_preset_key: "Eco")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Sets a specified climate preset as the "fallback" preset for a specified thermostat.

#### Code:

```php
$seam->thermostats->set_fallback_climate_preset(
    device_id: "9a21ddcb-8eeb-4351-8770-1835c3db8b2e",
    climate_preset_key: "Eco",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Sets a specified climate preset as the "fallback" preset for a specified thermostat.

#### Code:

```seam_cli
seam thermostats set-fallback-climate-preset --device_id "9a21ddcb-8eeb-4351-8770-1835c3db8b2e" --climate_preset_key "Eco"
```

#### Output:

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

{% hint style="success" %}
Returns:
**void

{% endhint %}

