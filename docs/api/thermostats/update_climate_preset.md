# Update a Climate Preset

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified climate preset for a specified thermostat.

#### Code

```javascript
await seam.thermostats.updateClimatePreset();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified climate preset for a specified thermostat.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/update_climate_preset" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified climate preset for a specified thermostat.

#### Code

```python
seam.thermostats.update_climate_preset()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified climate preset for a specified thermostat.

#### Code

```ruby
seam.thermostats.update_climate_preset()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified climate preset for a specified thermostat.

#### Code

```php
<?php
$seam->thermostats->update_climate_preset();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified climate preset for a specified thermostat.

#### Code

```seam_cli
seam thermostats update-climate-preset
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

Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

---

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to update a climate preset.

---

**`cooling_set_point_celsius`** *Number*

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`cooling_set_point_fahrenheit`** *Number*

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

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

Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`name`** *String*

User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

---


## Response

void

