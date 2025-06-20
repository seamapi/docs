---
description: Learn how to create, list, update, and delete climate presets for thermostats.
---

# Creating and Managing Climate Presets

You create a set of climate presets for each thermostat, customized for your—and your users'—needs. Each climate preset is a predefined configuration for a thermostat that specifies settings, such as HVAC mode, fan mode, and temperature set points. These presets make it quick and efficient for users to apply consistent climate settings tailored to different scenarios, enhancing both comfort and energy efficiency.

Once you create climate presets, you can [activate them](../../../api/thermostats/activate_climate_preset.md), add them to thermostat [schedules](../creating-and-managing-thermostat-schedules.md) and [programs](../creating-and-managing-thermostat-programs.md), and set them as the [fallback climate preset](setting-the-fallback-climate-preset.md).

***

## Climate Preset Properties

Each climate preset can contain the following properties, depending on the [capabilities](../../../products/thermostats/#thermostat-capabilities) of the thermostat:

<table><thead><tr><th width="339">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>climate_preset_key</code></td><td>(Required) Key to identify the climate preset.</td></tr><tr><td><code>name</code></td><td>(Optional) User-friendly name to identify the climate preset.</td></tr><tr><td><code>fan_mode_setting</code></td><td>Desired fan mode setting, such as <code>on</code>, <code>auto</code>, or <code>circulate</code>.</td></tr><tr><td><code>hvac_mode_setting</code></td><td>Desired <a href="../understanding-thermostat-concepts/hvac-mode.md">HVAC mode</a> setting, such as <code>heat</code>, <code>cool</code>, <code>heat_cool</code>, or <code>off</code>.</td></tr><tr><td><code>cooling_set_point_celsius</code></td><td>Temperature to which the thermostat should cool (in °C). See also <a href="../understanding-thermostat-concepts/set-points.md">Set Points</a>.</td></tr><tr><td><code>cooling_set_point_fahrenheit</code></td><td>Temperature to which the thermostat should cool (in °F).</td></tr><tr><td><code>heating_set_point_celsius</code></td><td>Temperature to which the thermostat should heat (in °C).</td></tr><tr><td><code>heating_set_point_fahrenheit</code></td><td>Temperature to which the thermostat should heat (in °F).</td></tr><tr><td><code>manual_override_allowed</code></td><td>(Optional) Indicates whether a person at the thermostat or using the API can change the thermostat's settings.<br>Deprecated. Use <code>thermostat_schedule.is_override_allowed</code> instead.</td></tr><tr><td><code>can_edit</code></td><td>Indicates whether the climate preset can be edited. There are some cases in which Seam syncs in climate presets (from the device) that cannot be modified.</td></tr><tr><td><code>can_delete</code></td><td>Indicates whether the climate preset can be deleted. There are some cases in which Seam syncs in climate presets (from the device) that cannot be deleted.</td></tr></tbody></table>

***

## Create a Climate Preset

To create a climate preset, issue a [`/thermostats/create_climate_preset`](../../../api/thermostats/create_climate_preset.md) request, providing the `device_id` of the desired thermostat. Also, include the desired settings for the climate preset and, optionally, a name.

The following example creates two climate presets with the keys `occupied` and `unoccupied`:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5"
)

# Confirm that the thermostat supports heat_cool mode
# so that the climate presets can use this mode.
if thermostat.can_hvac_heat_cool:
  # Create the climate presets.
  seam.thermostats.create_climate_preset(
    device_id = thermostat.device_id,
    climate_preset_key = "occupied",
    name = "Occupied",
    fan_mode_setting = "auto",
    hvac_mode_setting = "heat_cool",
    cooling_set_point_celsius = 25,
    heating_set_point_celsius = 20
  )
  
  seam.thermostats.create_climate_preset(
    device_id: thermostat.device_id,
    climate_preset_key = "unoccupied",
    name = "Unoccupied",
    fan_mode_setting = "auto",
    hvac_mode_setting = "heat_cool",
    cooling_set_point_celsius = 30,
    heating_set_point_celsius = 15
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
# Get the thermostat.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5"
  }')

# Confirm that the thermostat supports heat_cool mode
# so that the climate presets can use this mode.
if  $(jq -r '.device.can_hvac_heat_cool' <<< ${thermostat}); then \
  # Create the climate presets.
  curl -X 'POST' \
    'https://connect.getseam.com/thermostats/create_climate_preset' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
      \"climate_preset_key\": \"occupied\",
      \"name\": \"Occupied\",
      \"fan_mode_setting\": \"auto\",
      \"hvac_mode_setting\": \"heat_cool\",
      \"cooling_set_point_celsius\": 25,
      \"heating_set_point_celsius\": 20
  }";
  
  curl -X 'POST' \
    'https://connect.getseam.com/thermostats/create_climate_preset' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
      \"climate_preset_key\": \"unoccupied\",
      \"name\": \"Unoccupied\",
      \"fan_mode_setting\": \"auto\",
      \"hvac_mode_setting\": \"heat_cool\",
      \"cooling_set_point_celsius\": 30,
      \"heating_set_point_celsius\": 15
  }";
fi
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
// Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
});

// Confirm that the thermostat supports heat_cool mode
// so that the climate presets can use this mode.
if (thermostat.can_hvac_heat_cool) {
  // Create the climate presets.
  await seam.thermostats.createClimatePreset({
    device_id: thermostat.device_id,
    climate_preset_key: "occupied",
    name: "Occupied",
    fan_mode_setting: "auto",
    hvac_mode_setting: "heat_cool",
    cooling_set_point_celsius: 25,
    heating_set_point_celsius: 20
  });

  await seam.thermostats.createClimatePreset({
    device_id: thermostat.device_id,
    climate_preset_key: "unoccupied",
    name: "Unoccupied",
    fan_mode_setting: "auto",
    hvac_mode_setting: "heat_cool",
    cooling_set_point_celsius: 30,
    heating_set_point_celsius: 15
  });
};
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Get the thermostat.
thermostat = seam.devices.get(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
)

# Confirm that the thermostat supports heat_cool mode
# so that the climate presets can use this mode.
if (thermostat.can_hvac_heat_cool)
  # Create the climate presets.
  seam.thermostats.create_climate_preset(
    device_id: thermostat.device_id,
    climate_preset_key: "occupied",
    name: "Occupied",
    fan_mode_setting: "auto",
    hvac_mode_setting: "heat_cool",
    cooling_set_point_celsius: 25,
    heating_set_point_celsius: 20
  )

  seam.thermostats.create_climate_preset(
    device_id: thermostat.device_id,
    climate_preset_key: "unoccupied",
    name: "Unoccupied",
    fan_mode_setting: "auto",
    hvac_mode_setting: "heat_cool",
    cooling_set_point_celsius: 30,
    heating_set_point_celsius: 15
  )
end
```

**Response:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
);

// Confirm that the thermostat supports heat_cool mode
// so that the climate presets can use this mode.
if ($thermostat->can_hvac_heat_cool) {
  // Create the climate presets.
  $seam->thermostats->create_climate_preset(
    device_id: $thermostat->device_id,
    climate_preset_key: "occupied",
    name: "Occupied",
    fan_mode_setting: "auto",
    hvac_mode_setting: "heat_cool",
    cooling_set_point_celsius: 25,
    heating_set_point_celsius: 20
  );
  
  $seam->thermostats->create_climate_preset(
    device_id: $thermostat->device_id,
    climate_preset_key: "unoccupied",
    name: "Unoccupied",
    fan_mode_setting: "auto",
    hvac_mode_setting: "heat_cool",
    cooling_set_point_celsius: 30,
    heating_set_point_celsius: 15
  );  
}
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
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

***

## List All Climate Presets for a Thermostat

To list climate presets for a thermostat, issue a [`/devices/get`](../../../api-clients/devices/get.md) request, providing the `device_id` of the desired thermostat. Then, inspect the `available_climate_presets` property.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.devices.get(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5"
)
```

**Response:**

```
Device(
  device_id='2d488679-6f07-4810-aed2-e726872c1dd5',
  properties={
    'available_climate_presets': [
      {
        'climate_preset_key': 'occupied',
        'cooling_set_point_celsius': 25,
        'cooling_set_point_fahrenheit': 77,
        'display_name': 'Occupied',
        'fan_mode_setting': 'auto',
        'heating_set_point_celsius': 20,
        'heating_set_point_fahrenheit': 68,
        'hvac_mode_setting': 'heat_cool',
        'name': 'Occupied',
        ...
      },
      {
        'climate_preset_key': 'unoccupied',
        'cooling_set_point_celsius': 30,
        'cooling_set_point_fahrenheit': 86,
        'display_name': 'Unoccupied',
        'fan_mode_setting': 'auto',
        'heating_set_point_celsius': 15,
        'heating_set_point_fahrenheit': 59,
        'hvac_mode_setting': 'heat_cool',
        'name': 'Unoccupied',
        ...
      }
    ],
    ...
  },
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5"
}'
```

**Response:**

```json
{
  "device": {
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "properties": {
      "available_climate_presets": [
        {
          "climate_preset_key": "occupied",
          "name": "Occupied",
          "display_name": "Occupied",
          "fan_mode_setting": "auto",
          "hvac_mode_setting": "heat_cool",
          "cooling_set_point_celsius": 25,
          "heating_set_point_celsius": 20,
          "cooling_set_point_fahrenheit": 77,
          "heating_set_point_fahrenheit": 68,
          ...
        },
        {
          "climate_preset_key": "unoccupied",
          "name": "Unoccupied",
          "display_name": "Unoccupied",
          "fan_mode_setting": "auto",
          "hvac_mode_setting": "heat_cool",
          "cooling_set_point_celsius": 30,
          "heating_set_point_celsius": 15,
          "cooling_set_point_fahrenheit": 86,
          "heating_set_point_fahrenheit": 59,
          ...
        }
      ],
      ...
    },
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.devices.get({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
});
```

**Response:**

```json
{
  device_id: '2d488679-6f07-4810-aed2-e726872c1dd5',
  properties: {
    available_climate_presets: [
      {
        climate_preset_key: 'occupied',
        name: 'Occupied',
        display_name: 'Occupied',
        fan_mode_setting: 'auto',
        hvac_mode_setting: 'heat_cool',
        cooling_set_point_celsius: 25,
        heating_set_point_celsius: 20,
        cooling_set_point_fahrenheit: 77,
        heating_set_point_fahrenheit: 68,
        ...
      },
      {
        climate_preset_key: 'unoccupied',
        name: 'Unoccupied',
        display_name: 'Unoccupied',
        fan_mode_setting: 'auto',
        hvac_mode_setting: 'heat_cool',
        cooling_set_point_celsius: 30,
        heating_set_point_celsius: 15,
        cooling_set_point_fahrenheit: 86,
        heating_set_point_fahrenheit: 59,
        ...
      }
    ],
    ...
  },
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
seam.devices.get(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
)
```

**Response:**

```
<Seam::Resources::Device:0x005f0
  device_id="2d488679-6f07-4810-aed2-e726872c1dd5"
  properties=#<Seam::DeepHashAccessor:0x000001bf948fdbd0 @data={
    "available_climate_presets"=>[
      {
        "climate_preset_key"=>"occupied",
        "name"=>"Occupied",
        "display_name"=>"Occupied",
        "fan_mode_setting"=>"auto",
        "hvac_mode_setting"=>"heat_cool",
        "cooling_set_point_celsius"=>25,
        "heating_set_point_celsius"=>20,
        "cooling_set_point_fahrenheit"=>77,
        "heating_set_point_fahrenheit"=>68,
        ...
      },      
      {
        "climate_preset_key"=>"unoccupied",
        "name"=>"Unoccupied",
        "display_name"=>"Unoccupied",
        "fan_mode_setting"=>"auto",
        "hvac_mode_setting"=>"heat_cool",
        "manual_override_allowed"=>true,
        "cooling_set_point_celsius"=>30,
        "heating_set_point_celsius"=>15,
        "cooling_set_point_fahrenheit"=>86,
        "heating_set_point_fahrenheit"=>59,
        ...
      }
    ]
    ...
 }
 ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->devices->get(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5"
);
```

**Response:**

```json
{
  "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
  "properties": {
    "available_climate_presets": [
        {
          "climate_preset_key": "occupied",
          "cooling_set_point_celsius": 25,
          "cooling_set_point_fahrenheit": 77,
          "display_name": "Occupied",
          "fan_mode_setting": "auto",
          "heating_set_point_celsius": 20,
          "heating_set_point_fahrenheit": 68,
          "hvac_mode_setting": "heat_cool",
          "name": "Occupied",
          ...
        },
        {
          "climate_preset_key": "unoccupied",
          "cooling_set_point_celsius": 30,
          "cooling_set_point_fahrenheit": 86,
          "display_name": "Unoccupied",
          "fan_mode_setting": "auto",
          "heating_set_point_celsius": 15,
          "heating_set_point_fahrenheit": 59,
          "hvac_mode_setting": "heat_cool",
          "name": "Unoccupied",
          ...
        }
    ],
    ...
  },
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
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

***

## Update a Climate Preset

To update a climate preset, issue a [`/thermostats/update_climate_preset`](../../../api/thermostats/update_climate_preset.md) request, providing the `device_id` of the thermostat and the `climate_preset_key` of the desired climate preset. Also, include the desired updated settings for the climate preset.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.update_climate_preset(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key = "occupied",
  cooling_set_point_celsius = 24
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
  'https://connect.getseam.com/thermostats/update_climate_preset' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied",
    "cooling_set_point_celsius": 24
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
await seam.thermostats.updateClimatePreset({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "occupied",
  cooling_set_point_celsius: 24
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
seam.thermostats.update_climate_preset(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "occupied",
  cooling_set_point_celsius: 24
)
```

**Response:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->update_climate_preset(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "occupied",
  cooling_set_point_celsius: 24
);
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Java" %}
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

***

## Delete a Climate Preset

To delete a climate preset, issue a [`/thermostats/delete_climate_preset`](../../../api/thermostats/delete_climate_preset.md) request, providing the `device_id` of the thermostat and the `climate_preset_key` of the desired climate preset.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.delete_climate_preset(
  device_id = "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key = "occupied"
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
  'https://connect.getseam.com/thermostats/delete_climate_preset' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "2d488679-6f07-4810-aed2-e726872c1dd5",
    "climate_preset_key": "occupied"
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
await seam.thermostats.deleteClimatePreset({
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "occupied"
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
seam.thermostats.delete_climate_preset(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "occupied"
)
```

**Response:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->delete_climate_preset(
  device_id: "2d488679-6f07-4810-aed2-e726872c1dd5",
  climate_preset_key: "occupied"
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

{% tab title="Java" %}
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
