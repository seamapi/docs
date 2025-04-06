# Set the Fallback Climate Preset

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% hint style="success" %}
```
POST /thermostats/set_fallback_climate_preset ⇒ void
```
{% endhint %}

## Parameters

**`climate_preset_key`** *String* (Required)

Climate preset key of the desired climate preset.

---

**`device_id`** *String* (Required)

ID of the desired thermostat device.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

void
