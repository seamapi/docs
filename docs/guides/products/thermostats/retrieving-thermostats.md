---
description: Learn how to retrieve all thermostats or a specific thermostat by ID.
---

# Retrieving Thermostats

When you use the [`/thermostats/list`](../../api/thermostats/list.md) and [`/devices/get`](../../api/devices/get.md) endpoints to retrieve information about your connected thermostats, the Seam API returns the following categories of information:

<table><thead><tr><th width="250">Category</th><th>Details</th></tr></thead><tbody><tr><td>Current conditions </td><td>Current temperature in Fahrenheit and Celsius, current relative humidity, and so on. This includes such properties as <code>temperature_celsius</code>, <code>temperature_fahrenheit</code>, <code>is_cooling</code>, <code>is_heating</code>, <code>is_fan_running</code>, <code>relative_humidity</code>    </td></tr><tr><td>Current operational status</td><td>Whether the associated HVAC system is currently heating or cooling, whether the fan is currently running. These properties are named <code>current_climate_setting</code> and reflect what the thermostat is set to 'achieve'.</td></tr><tr><td>Available HVAC modes for the thermostat</td><td><code>heat</code>, <code>cool</code>, <code>heat_cool</code>, and <code>off</code>.</td></tr><tr><td>Available fan modes for the thermostat</td><td><code>on</code>, <code>auto</code>, and <code>circulate</code>.</td></tr><tr><td>Thermostat <a href="./#thermostat-capabilities">capability flags</a></td><td><p>Capabilities of the thermostat—at a granular level.</p><p>These capability flags include the following:</p><ul><li><code>device.can_hvac_heat</code></li><li><code>device.can_hvac_cool</code></li><li><code>device.can_hvac_heat_cool</code></li><li><code>device.can_turn_off_hvac</code></li></ul></td></tr><tr><td>Available climate presets</td><td>Climate presets that you can schedule on the thermostat.</td></tr><tr><td>Climate preset constraints</td><td>Constraints related to climate presets for the specific thermostat brand or model.<br>For example, a thermostat might have a minimum or maximum cooling or heating <a href="../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md">set point</a> or a <a href="../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#minimum-heating-cooling-temperature-delta">minimum delta</a> between the cooling and heating set points.</td></tr></tbody></table>

## List All Thermostats

To retrieve all [thermostats](./), issue a [`/thermostats/list`](../../api/thermostats/list.md) request. You can filter by a variety of criteria, including `connected_account_id`, `connect_webview_id`, `manufacturer`, `user_identifier_key`, and so on.

The following example retrieves all Google Nest thermostats:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.list(
  manufacturer = "nest"
)
```

**Response:**

```
[
  Device(
    can_hvac_cool=True,
    can_hvac_heat=True,
    can_hvac_heat_cool=True,
    can_turn_off_hvac=True,
    device_id='a4b775e3-feb2-4c6b-8e78-a73ec2d70b61',
    device_type='nest_thermostat',
    properties={
      'available_hvac_mode_settings': [
        'heat',
        'cool',
        'heat_cool',
        'off'
      ],
      'current_climate_setting': {
        'display_name': 'eco',
        'cooling_set_point_celsius': 25,
        'cooling_set_point_fahrenheit': 77,
        'heating_set_point_celsius': 20,
        'heating_set_point_fahrenheit': 68,
        'hvac_mode_setting': 'heat_cool',
        'manual_override_allowed': True
      },
      'is_cooling': False,
      'is_fan_running': False,
      'is_heating': False,
      'manufacturer': 'nest',
      'online': True,
      'relative_humidity': 0.46,
      'temperature_celsius': 24.64,
      'temperature_fahrenheit': 76.352,
      ...
    },
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/thermostats/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "manufacturer": "nest"
  }'
```

**Response:**

```json
{
  "thermostats": [
    {
      "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
      "device_type": "nest_thermostat",
      "properties": {
        "online": true,
        "is_cooling": false,
        "is_heating": false,
        "is_fan_running": false,
        "manufacturer": "nest",
        "relative_humidity": 0.46,
        "temperature_celsius": 24.64,
        "temperature_fahrenheit": 76.352,
        "current_climate_setting": {
          "display_name": "eco",
          "hvac_mode_setting": "heat_cool",
          "manual_override_allowed": true,
          "cooling_set_point_celsius": 25,
          "cooling_set_point_fahrenheit": 77,
          "heating_set_point_celsius": 20,
          "heating_set_point_fahrenheit": 68
        },
        "available_hvac_mode_settings": [
          "heat",
          "cool",
          "heat_cool",
          "off"
        ],
        ...
      },
      "can_hvac_cool": true,
      "can_hvac_heat": true,
      "can_turn_off_hvac": true,
      "can_hvac_heat_cool": true,
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.thermostats.list({
  manufacturer: "nest"
});
```

**Response:**

```json
[
  {
    device_id: 'a4b775e3-feb2-4c6b-8e78-a73ec2d70b61',
    device_type: 'nest_thermostat',
    properties: {
      online: true,
      is_cooling: false,
      is_heating: false,
      manufacturer: 'nest',
      is_fan_running: false,
      relative_humidity: 0.46,
      temperature_celsius: 24.64,
      temperature_fahrenheit: 76.352,
      available_hvac_mode_settings: [
        'heat',
        'cool',
        'heat_cool',
        'off'
      ],
      current_climate_setting: {
        display_name: 'eco',
        hvac_mode_setting: 'heat_cool',
        manual_override_allowed: true,
        cooling_set_point_celsius: 25,
        cooling_set_point_fahrenheit: 77,
        heating_set_point_celsius: 20,
        heating_set_point_fahrenheit: 68
      },
      ...
    },
    can_hvac_cool: true,
    can_hvac_heat: true,
    can_turn_off_hvac: true,
    can_hvac_heat_cool: true,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
seam.thermostats.list(
  manufacturer: "nest"
)
```

**Response:**

```
[
  <Seam::Resources::Device:0x005f0
    device_id="a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
    device_type="nest_thermostat"
    properties=#<Seam::DeepHashAccessor:0x0000016b1791f068 @data={
      "online"=>true,
      "is_cooling"=>false,
      "is_heating"=>false,
      "manufacturer"=>"nest",
      "is_fan_running"=>false,
      "relative_humidity"=>0.36,
      "temperature_celsius"=>21.11111111111111,
      "temperature_fahrenheit"=>70,
      "available_hvac_mode_settings"=>[
        "heat",
        "cool",
        "heat_cool",
        "off"
      ],
      "current_climate_setting"=>{
        "climate_preset_key"=>"unoccupied",
        "can_edit"=>true,
        "can_delete"=>true,
        "display_name"=>"unoccupied",
        "fan_mode_setting"=>"auto",
        "hvac_mode_setting"=>"heat_cool",
        "manual_override_allowed"=>true,
        "cooling_set_point_celsius"=>30,
        "heating_set_point_celsius"=>15,
        "cooling_set_point_fahrenheit"=>86,
        "heating_set_point_fahrenheit"=>59
      },
      ...
    }>
    can_hvac_cool=true
    can_hvac_heat=true
    can_turn_off_hvac=true
    can_hvac_heat_cool=true
    ...
  >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->list(
  manufacturer: "nest"
);
```

**Response:**

```json
[
  {
    "can_hvac_cool": true,
    "can_hvac_heat": true,
    "can_hvac_heat_cool": true,
    "can_turn_off_hvac": true,
    "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
    "device_type": "nest_thermostat",
    "properties": {
      "manufacturer": "nest",
      "online": true,
      "available_hvac_mode_settings": [
        "heat",
        "cool",
        "heat_cool",
        "off"
      ],
      "current_climate_setting": {
        "display_name": "eco",
        "cooling_set_point_celsius": 25,
        "cooling_set_point_fahrenheit": 77,
        "heating_set_point_celsius": 20,
        "heating_set_point_fahrenheit": 68,
        "hvac_mode_setting": "heat_cool",
        "manual_override_allowed": true
      },
      "is_cooling": false,
      "is_fan_running": false,
      "is_heating": false,
      "relative_humidity": 0.46,
      "temperature_celsius": 24.64,
      "temperature_fahrenheit": 76.352,
      ...
    },
    ...
  },
  ...
]
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
{% endtabs %}

***

## Get an Individual Thermostat

To get a specific [thermostat](./), issue a [`/devices/get`](../../api/devices/get.md) request, including the desired `device_id`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.devices.get(
  device_id = "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
)
```

**Response:**

```
Device(
  can_hvac_cool=True,
  can_hvac_heat=True,
  can_hvac_heat_cool=True,
  can_turn_off_hvac=True,
  device_id='a4b775e3-feb2-4c6b-8e78-a73ec2d70b61',
  device_type='nest_thermostat',
  properties={
    'available_hvac_mode_settings': [
      'heat',
      'cool',
      'heat_cool',
      'off'
    ],
    'current_climate_setting': {
      'display_name': 'eco',
      'cooling_set_point_celsius': 25,
      'cooling_set_point_fahrenheit': 77,
      'heating_set_point_celsius': 20,
      'heating_set_point_fahrenheit': 68,
      'hvac_mode_setting': 'heat_cool',
      'manual_override_allowed': True
    },
    'is_cooling': False,
    'is_fan_running': False,
    'is_heating': False,
    'manufacturer': 'nest',
    'online': True,
    'relative_humidity': 0.46,
    'temperature_celsius': 24.64,
    'temperature_fahrenheit': 76.352,
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
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
}'
```

**Response:**

```json
{
  "device": {
    "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
    "device_type": "nest_thermostat",
    "properties": {
      "online": true,
      "is_cooling": false,
      "is_heating": false,
      "is_fan_running": false,
      "manufacturer": "nest",
      "relative_humidity": 0.46,
      "temperature_celsius": 24.64,
      "temperature_fahrenheit": 76.352,
      "current_climate_setting": {
        "display_name": "eco",
        "hvac_mode_setting": "heat_cool",
        "manual_override_allowed": true,
        "cooling_set_point_celsius": 25,
        "cooling_set_point_fahrenheit": 77,
        "heating_set_point_celsius": 20,
        "heating_set_point_fahrenheit": 68
      },
      "available_hvac_mode_settings": [
        "heat",
        "cool",
        "heat_cool",
        "off"
      ],
      ...
    },
    "can_hvac_cool": true,
    "can_hvac_heat": true,
    "can_turn_off_hvac": true,
    "can_hvac_heat_cool": true,
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
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
});
```

**Response:**

```json
{
  device_id: 'a4b775e3-feb2-4c6b-8e78-a73ec2d70b61',
  device_type: 'nest_thermostat',
  properties: {
    online: true,
    is_cooling: false,
    is_heating: false,
    manufacturer: 'nest',
    is_fan_running: false,
    relative_humidity: 0.46,
    temperature_celsius: 24.64,
    temperature_fahrenheit: 76.352,
    current_climate_setting: [Object],
    available_hvac_mode_settings: [
      'heat',
      'cool',
      'heat_cool',
      'off'
    ],
    current_climate_setting: {
      display_name: 'eco',
      hvac_mode_setting: 'heat_cool',
      manual_override_allowed: true,
      cooling_set_point_celsius: 25,
      cooling_set_point_fahrenheit: 77,
      heating_set_point_celsius: 20,
      heating_set_point_fahrenheit: 68
    },
    ...
  },
  can_hvac_cool: true,
  can_hvac_heat: true,
  can_turn_off_hvac: true,
  can_hvac_heat_cool: true,
  ...
}
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
$seam->devices->get(
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
);
```

**Response:**

```json
{
  "can_hvac_cool": true,
  "can_hvac_heat": true,
  "can_hvac_heat_cool": true,
  "can_turn_off_hvac": true,
  "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
  "device_type": "nest_thermostat",
  "properties": {
    "manufacturer": "nest",
    "online": true,
    "available_hvac_mode_settings": [
      "heat",
      "cool",
      "heat_cool",
      "off"
    ],
    "current_climate_setting": {
      "display_name": "eco",
      "cooling_set_point_celsius": 25,
      "cooling_set_point_fahrenheit": 77,
      "heating_set_point_celsius": 20,
      "heating_set_point_fahrenheit": 68,
      "hvac_mode_setting": "heat_cool",
      "manual_override_allowed": true
    },
    "is_cooling": false,
    "is_fan_running": false,
    "is_heating": false,
    "relative_humidity": 0.46,
    "temperature_celsius": 24.64,
    "temperature_fahrenheit": 76.352,
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

```
// Coming soon!
```
{% endtab %}
{% endtabs %}
