# Delete a Climate Preset

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% hint style="success" %}
```
POST /thermostats/delete_climate_preset ⇒ void
```
{% endhint %}

## Parameters

**`climate_preset_key`** ** (Required)

Climate preset key of the desired climate preset.

---

**`device_id`** ** (Required)

ID of the desired thermostat device.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

void
