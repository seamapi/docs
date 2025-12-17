# Delete a Climate Preset

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a specified climate preset for a specified thermostat.

#### Code:

```javascript
await seam.thermostats.deleteClimatePreset({
  device_id: "88cb2f5b-b01b-43f2-b84f-81e2fa1d09c5",
  climate_preset_key: "Eco",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a specified climate preset for a specified thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/delete_climate_preset" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "88cb2f5b-b01b-43f2-b84f-81e2fa1d09c5",
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

Deletes a specified climate preset for a specified thermostat.

#### Code:

```python
seam.thermostats.delete_climate_preset(device_id="88cb2f5b-b01b-43f2-b84f-81e2fa1d09c5", climate_preset_key="Eco")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a specified climate preset for a specified thermostat.

#### Code:

```ruby
seam.thermostats.delete_climate_preset(device_id: "88cb2f5b-b01b-43f2-b84f-81e2fa1d09c5", climate_preset_key: "Eco")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a specified climate preset for a specified thermostat.

#### Code:

```php
$seam->thermostats->delete_climate_preset(
    device_id: "88cb2f5b-b01b-43f2-b84f-81e2fa1d09c5",
    climate_preset_key: "Eco",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a specified climate preset for a specified thermostat.

#### Code:

```seam_cli
seam thermostats delete-climate-preset --device_id "88cb2f5b-b01b-43f2-b84f-81e2fa1d09c5" --climate_preset_key "Eco"
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

Climate preset key of the climate preset that you want to delete.

---

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to delete a climate preset.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

