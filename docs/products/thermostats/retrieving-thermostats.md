---
description: Learn how to retrieve all thermostats or a specific thermostat by ID.
---

# Retrieving Thermostats

## Retrieving All Thermostats

To retrieve all [thermostats](./), issue a [List Thermostats](../../thermostats/list-thermostats.md) request. For filtering options, see the [request body parameters](../../thermostats/list-thermostats.md#request-body-parameters) for the List Thermostats request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.list()
```

**Response:**

<pre><code><strong>[Device(
</strong>    device_id='518f692b-f865-4590-8c3e-3849e9984c75',
    device_type='ecobee_thermostat',
    location=None,
    properties={
        'available_hvac_mode_settings': ['off', 'cool', 'heat', 'heat_cool'],
        'current_climate_setting': {
            'cooling_set_point_celsius': 25,
            'cooling_set_point_fahrenheit': 77,
            'heating_set_point_celsius': 20,
            'heating_set_point_fahrenheit': 68,
            'hvac_mode_setting': 'heat_cool',
            'manual_override_allowed': True
        },
        'ecobee_metadata': {
            'device_name': 'Thermostat 1',
            'ecobee_device_id': 'a64074f3-a0aa-4dbb-bbd3-f17f61701602'
        },
        'fan_mode_setting': 'auto',
        'has_direct_power': True,
        'image_alt_text': 'Ecobee 3 Lite Thermostat',
        'image_url': 'https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png',
        'is_cooling': False,
        'is_fan_running': False,
        'is_heating': False,
        'is_temporary_manual_override_active': False,
        'manufacturer': 'ecobee',
        'max_cooling_set_point_celsius': 33.333333333333336,
        'max_cooling_set_point_fahrenheit': 92,
        'max_heating_set_point_celsius': 26.11111111111111,
        'max_heating_set_point_fahrenheit': 79,
        'min_cooling_set_point_celsius': 18.333333333333336,
        'min_cooling_set_point_fahrenheit': 65,
        'min_heating_cooling_delta_celsius': 2.7777777777777777,
        'min_heating_cooling_delta_fahrenheit': 5,
        'min_heating_set_point_celsius': 7.222222222222222,
        'min_heating_set_point_fahrenheit': 45,
        'model': {
            'accessory_keypad_supported': False,
            'display_name': 'Thermostat',
            'manufacturer_display_name': 'Ecobee',
            'offline_access_codes_supported': False,
            'online_access_codes_supported': True
        },
        'name': 'Thermostat 1',
        'online': True,
        'relative_humidity': 0.36,
        'temperature_celsius': 21.11111111111111,
        'temperature_fahrenheit': 70
    },
    capabilities_supported=['thermostat'],
    errors=[],
    warnings=[],
    connected_account_id='2c00bc71-bca5-42c2-a1c5-74fd93ffcba1',
    workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at='2023-10-30T10:36:18.387Z',
    is_managed=True
)]
</code></pre>
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/thermostats/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response:**

```json
{
  "thermostats": [
    {
      "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
      "device_type": "ecobee_thermostat",
      "capabilities_supported": [
        "thermostat"
      ],
      "properties": {
        "online": true,
        "is_cooling": false,
        "is_heating": false,
        "manufacturer": "ecobee",
        "is_fan_running": false,
        "ecobee_metadata": {
          "device_name": "Thermostat 1",
          "ecobee_device_id": "a64074f3-a0aa-4dbb-bbd3-f17f61701602"
        },
        "fan_mode_setting": "auto",
        "has_direct_power": true,
        "relative_humidity": 0.36,
        "temperature_celsius": 21.11111111111111,
        "temperature_fahrenheit": 70,
        "current_climate_setting": {
          "hvac_mode_setting": "heat_cool",
          "manual_override_allowed": true,
          "cooling_set_point_celsius": 25,
          "heating_set_point_celsius": 20,
          "cooling_set_point_fahrenheit": 77,
          "heating_set_point_fahrenheit": 68
        },
        "available_hvac_mode_settings": [
          "off",
          "cool",
          "heat",
          "heat_cool"
        ],
        "offline_access_codes_enabled": false,
        "max_cooling_set_point_celsius": 33.333333333333336,
        "max_heating_set_point_celsius": 26.11111111111111,
        "min_cooling_set_point_celsius": 18.333333333333336,
        "min_heating_set_point_celsius": 7.222222222222222,
        "min_heating_cooling_delta_celsius": 2.7777777777777777,
        "is_temporary_manual_override_active": false,
        "name": "Thermostat 1",
        "model": {
          "display_name": "Thermostat",
          "manufacturer_display_name": "Ecobee",
          "accessory_keypad_supported": false,
        },
        "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
        "image_alt_text": "Ecobee 3 Lite Thermostat",
        "min_heating_set_point_fahrenheit": 45,
        "max_heating_set_point_fahrenheit": 79,
        "min_cooling_set_point_fahrenheit": 65,
        "max_cooling_set_point_fahrenheit": 92,
        "min_heating_cooling_delta_fahrenheit": 5
      },
      "location": null,
      "connected_account_id": "2c00bc71-bca5-42c2-a1c5-74fd93ffcba1",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2023-10-30T10:36:18.387Z",
      "errors": [],
      "warnings": [],
      "is_managed": true
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.thermostats.list())
```

**Response:**

```json
[
  {
    device_id: '518f692b-f865-4590-8c3e-3849e9984c75',
    device_type: 'ecobee_thermostat',
    capabilities_supported: [ 'thermostat' ],
    properties: {
      online: true,
      is_cooling: false,
      is_heating: false,
      manufacturer: 'ecobee',
      is_fan_running: false,
      ecobee_metadata: [Object],
      fan_mode_setting: 'auto',
      has_direct_power: true,
      relative_humidity: 0.36,
      temperature_celsius: 21.11111111111111,
      temperature_fahrenheit: 70,
      current_climate_setting: [Object],
      available_hvac_mode_settings: [Array],
      max_cooling_set_point_celsius: 33.333333333333336,
      max_heating_set_point_celsius: 26.11111111111111,
      min_cooling_set_point_celsius: 18.333333333333336,
      min_heating_set_point_celsius: 7.222222222222222,
      min_heating_cooling_delta_celsius: 2.7777777777777777,
      is_temporary_manual_override_active: false,
      name: 'Thermostat 1',
      model: [Object],
      image_url: 'https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png',
      image_alt_text: 'Ecobee 3 Lite Thermostat',
      min_heating_set_point_fahrenheit: 45,
      max_heating_set_point_fahrenheit: 79,
      min_cooling_set_point_fahrenheit: 65,
      max_cooling_set_point_fahrenheit: 92,
      min_heating_cooling_delta_fahrenheit: 5
    },
    location: null,
    connected_account_id: '2c00bc71-bca5-42c2-a1c5-74fd93ffcba1',
    workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at: '2023-10-30T10:36:18.387Z',
    errors: [],
    warnings: [],
    is_managed: true
  }
]
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$thermostats = $seam->thermostats->list();
echo json_encode($thermostats, JSON_PRETTY_PRINT);
```

**Response:**

```
[
    {
        "device_id": "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
        "device_type": "ecobee_thermostat",
        "capabilities_supported": [
            "thermostat"
        ],
        "properties": {
            "online": true,
            "name": "Thermostat_1",
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Ecobee",
                "offline_access_codes_supported": null,
                "online_access_codes_supported": null,
                "accessory_keypad_supported": false
            },
            "has_direct_power": true,
            "battery_level": null,
            "battery": null,
            "manufacturer": "ecobee",
            "image_url": "https:\/\/connect.getseam.com\/assets\/images\/devices\/ecobee_3-lite_front.png",
            "image_alt_text": "Ecobee 3 Lite Thermostat",
            "serial_number": null,
            ...
            "ecobee_metadata": {
                "ecobee_device_id": "c44f7f6a-97c6-4317-99a1-dae14fe20bb5",
                "device_name": "Thermostat_1"
            },
            ...
            "temperature_fahrenheit": 70,
            "temperature_celsius": 21.11111111111111,
            "relative_humidity": 0.36,
            "available_hvac_mode_settings": [
                "off",
                "cool",
                "heat",
                "heat_cool"
            ],
            "is_heating": false,
            "is_cooling": false,
            "is_fan_running": false,
            "fan_mode_setting": "auto",
            "is_temporary_manual_override_active": false,
            "current_climate_setting": {
                "hvac_mode_setting": "heat_cool",
                "cooling_set_point_celsius": 23.88888888888889,
                "heating_set_point_celsius": 18.333333333333336,
                "cooling_set_point_fahrenheit": 75,
                "heating_set_point_fahrenheit": 65,
                "manual_override_allowed": true
            },
            "min_cooling_set_point_celsius": 18.333333333333336,
            "min_cooling_set_point_fahrenheit": 65,
            "max_cooling_set_point_celsius": 33.333333333333336,
            "max_cooling_set_point_fahrenheit": 92,
            "min_heating_set_point_celsius": 7.222222222222222,
            "min_heating_set_point_fahrenheit": 45,
            "max_heating_set_point_celsius": 26.11111111111111,
            "max_heating_set_point_fahrenheit": 79,
            "min_heating_cooling_delta_celsius": 2.7777777777777777,
            "min_heating_cooling_delta_fahrenheit": 5,
            "assa_abloy_credential_service_metadata": null
        },
        "location": null,
        "connected_account_id": "aaf37f42-f5a1-4223-a7db-2b61700bf2a9",
        "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        "errors": [],
        "warnings": [],
        "created_at": "2024-02-29T21:24:29.792Z",
        "is_managed": true,
        "custom_metadata": {}
    },...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var thermostats = seam.Thermostats.List();
foreach (var thermostat in thermostats)
{
  Console.WriteLine(thermostat);
}
```

**Response:**

```json
{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "device_type": "ecobee_thermostat",
  "capabilities_supported": [
    "thermostat"
  ],
  "properties": {
    "online": true,
    "name": "Thermostat 1",
    "model": {
      "display_name": "Thermostat",
      "manufacturer_display_name": "Ecobee",
      "accessory_keypad_supported": false
    },
    "has_direct_power": true,
    "manufacturer": "ecobee",
    "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
    "image_alt_text": "Ecobee 3 Lite Thermostat",
    "ecobee_metadata": {
      "ecobee_device_id": "a64074f3-a0aa-4dbb-bbd3-f17f61701602",
      "device_name": "Thermostat 1"
    }
  },
  "connected_account_id": "2c00bc71-bca5-42c2-a1c5-74fd93ffcba1",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "errors": [],
  "warnings": [],
  "created_at": "2023-10-30T10:36:18.387Z",
  "is_managed": true
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```javascript
var thermostats = seam.thermostats().list();
System.out.println(thermostats);
```

**Response:**

```json
{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "device_type": "ecobee_thermostat",
  "capabilities_supported": [
    "thermostat"
  ],
  "properties": {
    "online": true,
    "name": "Thermostat 1",
    "model": {
      "display_name": "Thermostat",
      "manufacturer_display_name": "Ecobee",
      "accessory_keypad_supported": false
    },
    "has_direct_power": true,
    "manufacturer": "ecobee",
    "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
    "image_alt_text": "Ecobee 3 Lite Thermostat",
    "ecobee_metadata": {
      "ecobee_device_id": "a64074f3-a0aa-4dbb-bbd3-f17f61701602",
      "device_name": "Thermostat 1"
    }
  },
  "connected_account_id": "2c00bc71-bca5-42c2-a1c5-74fd93ffcba1",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "errors": [],
  "warnings": [],
  "created_at": "2023-10-30T10:36:18.387Z",
  "is_managed": true
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
thermostats, uErr := client.Thermostats.List(context.Background(), nil)

if uErr != nil {
    return uErr
}

fmt.Println(thermostats)
return nil
```

**Response:**

```json
[{
  "device_id": "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  "device_type": "ecobee_thermostat",
  "capabilities_supported": [
    "thermostat"
  ],
  "properties": {
    "online": true,
    "is_cooling": false,
    "is_heating": false,
    "manufacturer": "ecobee",
    "is_fan_running": false,
    "ecobee_metadata": {
      "device_name": "Thermostat_1",
      "ecobee_device_id": "c44f7f6a-97c6-4317-99a1-dae14fe20bb5"
    },
    "fan_mode_setting": "auto",
    "has_direct_power": true,
    "relative_humidity": 0.36,
    "temperature_celsius": 21.11111111111111,
    "temperature_fahrenheit": 70,
    "current_climate_setting": {
      "hvac_mode_setting": "heat_cool",
      "manual_override_allowed": true,
      "cooling_set_point_celsius": 23.88888888888889,
      "heating_set_point_celsius": 18.333333333333336,
      "cooling_set_point_fahrenheit": 75,
      "heating_set_point_fahrenheit": 65
    },
    "available_hvac_mode_settings": [
      "off",
      "cool",
      "heat",
      "heat_cool"
    ],
    "max_cooling_set_point_celsius": 33.333333333333336,
    "max_heating_set_point_celsius": 26.11111111111111,
    "min_cooling_set_point_celsius": 18.333333333333336,
    "min_heating_set_point_celsius": 7.222222222222222,
    "min_heating_cooling_delta_celsius": 2.7777777777777777,
    "is_temporary_manual_override_active": false,
    "name": "Thermostat_1",
    "model": {
      "display_name": "Thermostat",
      "manufacturer_display_name": "Ecobee",
      "accessory_keypad_supported": false
    },
    "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
    "image_alt_text": "Ecobee 3 Lite Thermostat",
    "min_heating_set_point_fahrenheit": 45,
    "max_heating_set_point_fahrenheit": 79,
    "min_cooling_set_point_fahrenheit": 65,
    "max_cooling_set_point_fahrenheit": 92,
    "min_heating_cooling_delta_fahrenheit": 5
  },
  "location": null,
  "connected_account_id": "aaf37f42-f5a1-4223-a7db-2b61700bf2a9",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at": "2024-02-29T21:24:29.792Z",
  "errors": [],
  "warnings": [],
  "is_managed": true,
  "custom_metadata": {}
}...]
```
{% endtab %}
{% endtabs %}

***

## Retrieving Individual Thermostats

To retrieve a specific [thermostat](./), include the desired `device_id` in the [Get Device](../../api-clients/devices/get.md) request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.devices.get(
  device_id="518f692b-f865-4590-8c3e-3849e9984c75"
)
```

**Response:**

```
Device(
    device_id='518f692b-f865-4590-8c3e-3849e9984c75',
    device_type='ecobee_thermostat',
    location=None,
    properties={
        'available_hvac_mode_settings': ['off', 'cool', 'heat', 'heat_cool'],
        'current_climate_setting': {
            'cooling_set_point_celsius': 25,
            'cooling_set_point_fahrenheit': 77,
            'heating_set_point_celsius': 20,
            'heating_set_point_fahrenheit': 68,
            'hvac_mode_setting': 'heat_cool',
            'manual_override_allowed': True
        },
        'ecobee_metadata': {
            'device_name': 'Thermostat 1',
            'ecobee_device_id': 'a64074f3-a0aa-4dbb-bbd3-f17f61701602'
        },
        'fan_mode_setting': 'auto',
        'has_direct_power': True,
        'image_alt_text': 'Ecobee 3 Lite Thermostat',
        'image_url': 'https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png',
        'is_cooling': False,
        'is_fan_running': False,
        'is_heating': False,
        'is_temporary_manual_override_active': False,
        'manufacturer': 'ecobee',
        'max_cooling_set_point_celsius': 33.333333333333336,
        'max_cooling_set_point_fahrenheit': 92,
        'max_heating_set_point_celsius': 26.11111111111111,
        'max_heating_set_point_fahrenheit': 79,
        'min_cooling_set_point_celsius': 18.333333333333336,
        'min_cooling_set_point_fahrenheit': 65,
        'min_heating_cooling_delta_celsius': 2.7777777777777777,
        'min_heating_cooling_delta_fahrenheit': 5,
        'min_heating_set_point_celsius': 7.222222222222222,
        'min_heating_set_point_fahrenheit': 45,
        'model': {
            'accessory_keypad_supported': False,
            'display_name': 'Thermostat',
            'manufacturer_display_name': 'Ecobee',
            'offline_access_codes_supported': False,
            'online_access_codes_supported': True
        },
        'name': 'Thermostat 1',
        'online': True,
        'relative_humidity': 0.36,
        'temperature_celsius': 21.11111111111111,
        'temperature_fahrenheit': 70
    },
    capabilities_supported=['thermostat'],
    errors=[],
    warnings=[],
    connected_account_id='2c00bc71-bca5-42c2-a1c5-74fd93ffcba1',
    workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at='2023-10-30T10:36:18.387Z',
    is_managed=True
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
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75"
}'
```

**Response:**

```json
{
  "thermostat": {
    "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": [
      "thermostat"
    ],
    "properties": {
      "online": true,
      "is_cooling": false,
      "is_heating": false,
      "manufacturer": "ecobee",
      "is_fan_running": false,
      "ecobee_metadata": {
        "device_name": "Thermostat 1",
        "ecobee_device_id": "a64074f3-a0aa-4dbb-bbd3-f17f61701602"
      },
      "fan_mode_setting": "auto",
      "has_direct_power": true,
      "relative_humidity": 0.36,
      "temperature_celsius": 21.11111111111111,
      "temperature_fahrenheit": 70,
      "current_climate_setting": {
        "hvac_mode_setting": "heat_cool",
        "manual_override_allowed": true,
        "cooling_set_point_celsius": 25,
        "heating_set_point_celsius": 20,
        "cooling_set_point_fahrenheit": 77,
        "heating_set_point_fahrenheit": 68
      },
      "available_hvac_mode_settings": [
        "off",
        "cool",
        "heat",
        "heat_cool"
      ],
      "max_cooling_set_point_celsius": 33.333333333333336,
      "max_heating_set_point_celsius": 26.11111111111111,
      "min_cooling_set_point_celsius": 18.333333333333336,
      "min_heating_set_point_celsius": 7.222222222222222,
      "min_heating_cooling_delta_celsius": 2.7777777777777777,
      "is_temporary_manual_override_active": false,
      "name": "Thermostat 1",
      "model": {
        "display_name": "Thermostat",
        "manufacturer_display_name": "Ecobee",
        "accessory_keypad_supported": false
      },
      "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
      "image_alt_text": "Ecobee 3 Lite Thermostat",
      "min_heating_set_point_fahrenheit": 45,
      "max_heating_set_point_fahrenheit": 79,
      "min_cooling_set_point_fahrenheit": 65,
      "max_cooling_set_point_fahrenheit": 92,
      "min_heating_cooling_delta_fahrenheit": 5
    },
    "location": null,
    "connected_account_id": "2c00bc71-bca5-42c2-a1c5-74fd93ffcba1",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2023-10-30T10:36:18.387Z",
    "errors": [],
    "warnings": [],
    "is_managed": true
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.devices.get({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
});
```

**Response:**

```json
{
  device_id: '518f692b-f865-4590-8c3e-3849e9984c75',
  device_type: 'ecobee_thermostat',
  capabilities_supported: [ 'thermostat' ],
  properties: {
    online: true,
    is_cooling: false,
    is_heating: false,
    manufacturer: 'ecobee',
    is_fan_running: false,
    ecobee_metadata: {
      device_name: 'Thermostat 1',
      ecobee_device_id: 'a64074f3-a0aa-4dbb-bbd3-f17f61701602'
    },
    fan_mode_setting: 'auto',
    has_direct_power: true,
    relative_humidity: 0.36,
    temperature_celsius: 21.11111111111111,
    temperature_fahrenheit: 70,
    current_climate_setting: {
      hvac_mode_setting: 'heat_cool',
      manual_override_allowed: true,
      cooling_set_point_celsius: 25,
      heating_set_point_celsius: 20,
      cooling_set_point_fahrenheit: 77,
      heating_set_point_fahrenheit: 68
    },
    available_hvac_mode_settings: [ 'off', 'cool', 'heat', 'heat_cool' ],
    max_cooling_set_point_celsius: 33.333333333333336,
    max_heating_set_point_celsius: 26.11111111111111,
    min_cooling_set_point_celsius: 18.333333333333336,
    min_heating_set_point_celsius: 7.222222222222222,
    min_heating_cooling_delta_celsius: 2.7777777777777777,
    is_temporary_manual_override_active: false,
    name: 'Thermostat 1',
    model: {
      display_name: 'Thermostat',
      manufacturer_display_name: 'Ecobee',
      accessory_keypad_supported: false
    },
    image_url: 'https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png',
    image_alt_text: 'Ecobee 3 Lite Thermostat',
    min_heating_set_point_fahrenheit: 45,
    max_heating_set_point_fahrenheit: 79,
    min_cooling_set_point_fahrenheit: 65,
    max_cooling_set_point_fahrenheit: 92,
    min_heating_cooling_delta_fahrenheit: 5
  },
  location: null,
  connected_account_id: '2c00bc71-bca5-42c2-a1c5-74fd93ffcba1',
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  created_at: '2023-10-30T10:36:18.387Z',
  errors: [],
  warnings: [],
  is_managed: true
}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->devices->get(
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7"
);
```

**Response:**

```
{
    "device_id": "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": [
        "thermostat"
    ],
    "properties": {
        "online": true,
        "name": "Thermostat_1",
        "model": {
            "display_name": "Thermostat",
            "manufacturer_display_name": "Ecobee",
            "offline_access_codes_supported": null,
            "online_access_codes_supported": null,
            "accessory_keypad_supported": false
        },
        "has_direct_power": true,
        "battery_level": null,
        "battery": null,
        "manufacturer": "ecobee",
        "image_url": "https:\/\/connect.getseam.com\/assets\/images\/devices\/ecobee_3-lite_front.png",
        "image_alt_text": "Ecobee 3 Lite Thermostat",
        "serial_number": null,
        ...
        "ecobee_metadata": {
            "ecobee_device_id": "c44f7f6a-97c6-4317-99a1-dae14fe20bb5",
            "device_name": "Thermostat_1"
        },
        ...
        "temperature_fahrenheit": 70,
        "temperature_celsius": 21.11111111111111,
        "relative_humidity": 0.36,
        "available_hvac_mode_settings": [
            "off",
            "cool",
            "heat",
            "heat_cool"
        ],
        "is_heating": false,
        "is_cooling": false,
        "is_fan_running": false,
        "fan_mode_setting": "auto",
        "is_temporary_manual_override_active": false,
        "current_climate_setting": {
            "hvac_mode_setting": "heat_cool",
            "cooling_set_point_celsius": 23.88888888888889,
            "heating_set_point_celsius": 18.333333333333336,
            "cooling_set_point_fahrenheit": 75,
            "heating_set_point_fahrenheit": 65,
            "manual_override_allowed": true
        },
        "min_cooling_set_point_celsius": 18.333333333333336,
        "min_cooling_set_point_fahrenheit": 65,
        "max_cooling_set_point_celsius": 33.333333333333336,
        "max_cooling_set_point_fahrenheit": 92,
        "min_heating_set_point_celsius": 7.222222222222222,
        "min_heating_set_point_fahrenheit": 45,
        "max_heating_set_point_celsius": 26.11111111111111,
        "max_heating_set_point_fahrenheit": 79,
        "min_heating_cooling_delta_celsius": 2.7777777777777777,
        "min_heating_cooling_delta_fahrenheit": 5,
        "assa_abloy_credential_service_metadata": null
    },
    "location": null,
    "connected_account_id": "aaf37f42-f5a1-4223-a7db-2b61700bf2a9",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "errors": [],
    "warnings": [],
    "created_at": "2024-02-29T21:24:29.792Z",
    "is_managed": true,
    "custom_metadata": {}
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.Devices.Get(
  deviceId: "518f692b-f865-4590-8c3e-3849e9984c75"
);
```

**Response:**

```
{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "device_type": "ecobee_thermostat",
  "capabilities_supported": [
    "thermostat"
  ],
  "properties": {
    "online": true,
    "name": "Thermostat 1",
    "model": {
      "display_name": "Thermostat",
      "manufacturer_display_name": "Ecobee",
      "accessory_keypad_supported": false
    },
    "has_direct_power": true,
    "manufacturer": "ecobee",
    "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
    "image_alt_text": "Ecobee 3 Lite Thermostat",
    "ecobee_metadata": {
      "ecobee_device_id": "a64074f3-a0aa-4dbb-bbd3-f17f61701602",
      "device_name": "Thermostat 1"
    }
  },
  "connected_account_id": "2c00bc71-bca5-42c2-a1c5-74fd93ffcba1",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "errors": [],
  "warnings": [],
  "created_at": "2023-10-30T10:36:18.387Z",
  "is_managed": true
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.devices().get(DevicesGetRequest.builder()
  .deviceId("518f692b-f865-4590-8c3e-3849e9984c75")
  .build());
```

**Response:**

```json
{
  "device_id" : "518f692b-f865-4590-8c3e-3849e9984c75",
  "device_type" : "ecobee_thermostat",
  "capabilities_supported" : [ "thermostat" ],
  "properties" : {
    "online" : true,
    "name" : "Thermostat 1",
    "model" : {
      "display_name" : "Thermostat",
      "online_access_codes_supported" : true,
      "accessory_keypad_supported" : false,
      "manufacturer_display_name" : "Ecobee"
    },
    "current_climate_setting" : {
      "hvac_mode_setting" : "heat_cool",
      "cooling_set_point_celsius" : 25.0,
      "heating_set_point_celsius" : 20.0,
      "cooling_set_point_fahrenheit" : 77.0,
      "heating_set_point_fahrenheit" : 68.0,
      "manual_override_allowed" : true
    },
    "temperature_celsius" : 21.11111111111111,
    "min_heating_set_point_celsius" : 7.222222222222222,
    "max_cooling_set_point_fahrenheit" : 92,
    "is_heating" : false,
    "is_cooling" : false,
    "manufacturer" : "ecobee",
    "max_heating_set_point_celsius" : 26.11111111111111,
    "max_cooling_set_point_celsius" : 33.333333333333336,
    "is_temporary_manual_override_active" : false,
    "min_heating_cooling_delta_fahrenheit" : 5,
    "available_hvac_mode_settings" : [ "off", "cool", "heat", "heat_cool" ],
    "has_direct_power" : true,
    "min_cooling_set_point_fahrenheit" : 65,
    "min_heating_cooling_delta_celsius" : 2.7777777777777777,
    "min_cooling_set_point_celsius" : 18.333333333333336,
    "max_heating_set_point_fahrenheit" : 79,
    "image_url" : "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
    "is_fan_running" : false,
    "image_alt_text" : "Ecobee 3 Lite Thermostat",
    "min_heating_set_point_fahrenheit" : 45,
    "ecobee_metadata" : {
      "device_name" : "Thermostat 1",
      "ecobee_device_id" : "a64074f3-a0aa-4dbb-bbd3-f17f61701602"
    },
    "fan_mode_setting" : "auto",
    "relative_humidity" : 0.36,
    "temperature_fahrenheit" : 70,
  },
  "connected_account_id" : "2c00bc71-bca5-42c2-a1c5-74fd93ffcba1",
  "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at" : "2023-10-30T10:36:18.387Z",
  "is_managed" : true
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
thermostat, uErr := client.Devices.Get(context.Background(), &api.DevicesGetRequest{
      DeviceId: api.String("5ce2cd35-09b1-458c-bb08-51ee83c35be7"),
  })

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "device_id": "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  "device_type": "ecobee_thermostat",
  "capabilities_supported": [
    "thermostat"
  ],
  "properties": {
    "online": true,
    "is_cooling": false,
    "is_heating": false,
    "manufacturer": "ecobee",
    "is_fan_running": false,
    "ecobee_metadata": {
      "device_name": "Thermostat_1",
      "ecobee_device_id": "c44f7f6a-97c6-4317-99a1-dae14fe20bb5"
    },
    "fan_mode_setting": "auto",
    "has_direct_power": true,
    "relative_humidity": 0.36,
    "temperature_celsius": 21.11111111111111,
    "temperature_fahrenheit": 70,
    "current_climate_setting": {
      "hvac_mode_setting": "heat_cool",
      "manual_override_allowed": true,
      "cooling_set_point_celsius": 23.88888888888889,
      "heating_set_point_celsius": 18.333333333333336,
      "cooling_set_point_fahrenheit": 75,
      "heating_set_point_fahrenheit": 65
    },
    "available_hvac_mode_settings": [
      "off",
      "cool",
      "heat",
      "heat_cool"
    ],
    "max_cooling_set_point_celsius": 33.333333333333336,
    "max_heating_set_point_celsius": 26.11111111111111,
    "min_cooling_set_point_celsius": 18.333333333333336,
    "min_heating_set_point_celsius": 7.222222222222222,
    "min_heating_cooling_delta_celsius": 2.7777777777777777,
    "is_temporary_manual_override_active": false,
    "name": "Thermostat_1",
    "model": {
      "display_name": "Thermostat",
      "manufacturer_display_name": "Ecobee",
      "accessory_keypad_supported": false
    },
    "image_url": "https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png",
    "image_alt_text": "Ecobee 3 Lite Thermostat",
    "min_heating_set_point_fahrenheit": 45,
    "max_heating_set_point_fahrenheit": 79,
    "min_cooling_set_point_fahrenheit": 65,
    "max_cooling_set_point_fahrenheit": 92,
    "min_heating_cooling_delta_fahrenheit": 5
  },
  "location": null,
  "connected_account_id": "aaf37f42-f5a1-4223-a7db-2b61700bf2a9",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at": "2024-02-29T21:24:29.792Z",
  "errors": [],
  "warnings": [],
  "is_managed": true,
  "custom_metadata": {}
}
```
{% endtab %}
{% endtabs %}
