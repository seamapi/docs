---
description: >-
  Learn how to set a configured climate preset as the "fallback" preset for a
  thermostat.
---

# Setting the Fallback Climate Preset

Once you have created climate presets for a thermostat, you can set one of them as the "fallback" preset. Seam applies this fallback preset whenever no other climate preset is active. It works with the Seam API's [scheduling mechanism](../creating-and-managing-thermostat-schedules.md). The fallback climate preset is only applied once, after a thermostat schedule ends. If settings are changed while the fallback climate preset is active, the thermostat will override the fallback preset with the new settings. For example, you could set a fallback "eco" climate preset for the thermostat in your short-term rental property. Then, you could schedule—in advance—a "comfort" climate preset to correspond to each upcoming guest's stay. Whenever your property is unoccupied—that is, whenever there is no scheduled climate preset—Seam activates the fallback "eco" climate preset.

To set the fallback climate preset for a device, issue a [`/thermostats/set_fallback_climate_preset`](../../../api/thermostats/set_fallback_climate_preset.md) request and specify the `climate_preset_key` of the desired climate preset.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.set_fallback_climate_preset(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key = "eco"
)
```

**Response:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/set_fallback_climate_preset' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "eco"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.setFallbackClimatePreset({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "eco"
});
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->set_fallback_climate_preset(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "eco"
);
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}
