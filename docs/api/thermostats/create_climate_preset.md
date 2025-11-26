# Create a Climate Preset

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Creates a climate preset for a specified thermostat.

#### Code:

```javascript
await seam.thermostats.createClimatePreset({
  device_id: "ba9b816d-c255-46b9-a16d-971e6f535dd3",
  manual_override_allowed: true,
  climate_preset_key: "Occupied",
  name: "Occupied",
  fan_mode_setting: "auto",
  hvac_mode_setting: "heat_cool",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Creates a climate preset for a specified thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/create_climate_preset" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "ba9b816d-c255-46b9-a16d-971e6f535dd3",
  "manual_override_allowed": true,
  "climate_preset_key": "Occupied",
  "name": "Occupied",
  "fan_mode_setting": "auto",
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_celsius": 25,
  "heating_set_point_celsius": 20
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Creates a climate preset for a specified thermostat.

#### Code:

```python
seam.thermostats.create_climate_preset(
    device_id="ba9b816d-c255-46b9-a16d-971e6f535dd3",
    manual_override_allowed=true,
    climate_preset_key="Occupied",
    name="Occupied",
    fan_mode_setting="auto",
    hvac_mode_setting="heat_cool",
    cooling_set_point_celsius=25,
    heating_set_point_celsius=20,
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Creates a climate preset for a specified thermostat.

#### Code:

```ruby
seam.thermostats.create_climate_preset(
  device_id: "ba9b816d-c255-46b9-a16d-971e6f535dd3",
  manual_override_allowed: true,
  climate_preset_key: "Occupied",
  name: "Occupied",
  fan_mode_setting: "auto",
  hvac_mode_setting: "heat_cool",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Creates a climate preset for a specified thermostat.

#### Code:

```php
$seam->thermostats->create_climate_preset(
    device_id: "ba9b816d-c255-46b9-a16d-971e6f535dd3",
    manual_override_allowed: true,
    climate_preset_key: "Occupied",
    name: "Occupied",
    fan_mode_setting: "auto",
    hvac_mode_setting: "heat_cool",
    cooling_set_point_celsius: 25,
    heating_set_point_celsius: 20,
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a climate preset for a specified thermostat.

#### Code:

```seam_cli
seam thermostats create-climate-preset --device_id "ba9b816d-c255-46b9-a16d-971e6f535dd3" --manual_override_allowed true --climate_preset_key "Occupied" --name "Occupied" --fan_mode_setting "auto" --hvac_mode_setting "heat_cool" --cooling_set_point_celsius 25 --heating_set_point_celsius 20
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
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`climate_preset_key`** *String* (Required)

Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

---

**`device_id`** *String* (Required)

ID of the thermostat device for which you want create a climate preset.

---

**`climate_preset_mode`** *String*

The climate preset mode for the thermostat, based on the available climate preset modes reported by the device.

---

**`cooling_set_point_celsius`** *Number*

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`cooling_set_point_fahrenheit`** *Number*

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`ecobee_metadata`** *Object*

Metadata specific to the Ecobee climate, if applicable.

<details>

<summary><b><code>climate_ref</code></b> <i>String</i></summary>

Reference to the Ecobee climate, if applicable.

</details>

---



<details>

<summary><b><code>is_optimized</code></b> <i>Boolean</i></summary>

Indicates if the climate preset is optimized by Ecobee.

</details>

---



<details>

<summary><b><code>owner</code></b> <i>Enum</i></summary>

Indicates whether the climate preset is owned by the user or the system.

Enum values:

- <code>user</code>
- <code>system</code>

</details>

---


**`fan_mode_setting`** *String*

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.

---

**`heating_set_point_celsius`** *Number*

Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`heating_set_point_fahrenheit`** *Number*

Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`hvac_mode_setting`** *String*

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

---

**`manual_override_allowed`** *Boolean*

Indicates whether a person at the thermostat or using the API can change the thermostat's settings.

{% hint style="warning" %}
**Deprecated**. Use 'thermostat_schedule.is_override_allowed'
{% endhint %}

---

**`name`** *String*

User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

