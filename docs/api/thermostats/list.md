# List Thermostats

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).

{% hint style="success" %}
```
POST /thermostats/list ⇒ { devices: [device, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`connect_webview_id`** *String*

ID of the Connect Webview by which to filter devices.

---

**`connected_account_id`** *String*

ID of the connected account by which to filter.

---

**`connected_account_ids`** *Array* *of UUIDs*

Array of IDs of the connected accounts by which to filter devices.

---

**`created_before`** *String*

Date threshold for devices to return. If specified, returns only devices created before the specified date.

---

**`custom_metadata_has`** *Object*

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs by which you want to filter devices.

---

**`device_ids`** *Array* *of UUIDs*

Array of device IDs by which to filter devices.

---

**`device_type`** *String*

Device type by which to filter devices.

---

**`device_types`** *Array* *of Enums*

Array of device types by which to filter devices.
<details>

<summary>Enum values</summary>

Possible enum values:
- `akuvox_lock`
- `august_lock`
- `brivo_access_point`
- `butterflymx_panel`
- `avigilon_alta_entry`
- `doorking_lock`
- `genie_door`
- `igloo_lock`
- `linear_lock`
- `lockly_lock`
- `kwikset_lock`
- `nuki_lock`
- `salto_lock`
- `schlage_lock`
- `seam_relay`
- `smartthings_lock`
- `wyze_lock`
- `yale_lock`
- `two_n_intercom`
- `controlbyweb_device`
- `ttlock_lock`
- `igloohome_lock`
- `hubitat_lock`
- `four_suites_door`
- `dormakaba_oracode_door`
- `tedee_lock`
- `akiles_lock`
- `noiseaware_activity_zone`
- `minut_sensor`
- `ecobee_thermostat`
- `nest_thermostat`
- `honeywell_resideo_thermostat`
- `tado_thermostat`
- `ios_phone`
- `android_phone`
</details>

---

**`limit`** *Number*

Numerical limit on the number of devices to return.

---

**`manufacturer`** *String*

Manufacturer by which to filter devices.

---

**`user_identifier_key`** *String*

Your own internal user ID for the user by which to filter devices.

---


## Return Type

Array of [devices](./)
devices

---

## Examples
  
### List thermostats

To filter the list of returned thermostats, specify the desired parameters.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.list();
```

#### Output

```javascript
[
  {
    "device_id": "123e4567-e89b-12d3-a456-426614174000",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": "true,",
      "relative_humidity": 0.36,
      "temperature_farenheit": 70,
      "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
      "current_climate_setting": {
        "hvac_mode_setting": "heat_cool",
        "cooling_set_point_farenheit": 75,
        "heating_set_point_farenheit": 65,
        "manual_override_allowed": false
      },
      "location": null,
      "connected_account_id": "123e4567-e89b-12d3-a456-426614174000",
      "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-04-05T07:57:05.323Z"
    }
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.list()
```

#### Output

```python
[
    Device(
        device_id="123e4567-e89b-12d3-a456-426614174000",
        device_type="ecobee_thermostat",
        capabilities_supported=["thermostat"],
        properties={
            "name": "Entryway",
            "online": "true,",
            "relative_humidity": 0.36,
            "temperature_farenheit": 70,
            "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
            "current_climate_setting": {
                "hvac_mode_setting": "heat_cool",
                "cooling_set_point_farenheit": 75,
                "heating_set_point_farenheit": 65,
                "manual_override_allowed": false,
            },
            "location": null,
            "connected_account_id": "123e4567-e89b-12d3-a456-426614174000",
            "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
            "created_at": "2024-04-05T07:57:05.323Z",
        },
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.list()
```

#### Output

```ruby
[
  {
    "device_id" => "123e4567-e89b-12d3-a456-426614174000",
    "device_type" => "ecobee_thermostat",
    "capabilities_supported" => ["thermostat"],
    "properties" => {
      name: "Entryway",
      online: "true,",
      relative_humidity: 0.36,
      temperature_farenheit: 70,
      available_hvac_mode_settings: %w[cool heat heat_cool off],
      current_climate_setting: {
        hvac_mode_setting: "heat_cool",
        cooling_set_point_farenheit: 75,
        heating_set_point_farenheit: 65,
        manual_override_allowed: false,
      },
      location: null,
      connected_account_id: "123e4567-e89b-12d3-a456-426614174000",
      workspace_id: "123e4567-e89b-12d3-a456-426614174000",
      created_at: "2024-04-05T07:57:05.323Z",
    },
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->list();
```

#### Output

```php
<?php
[
    [
        "device_id" => "123e4567-e89b-12d3-a456-426614174000",
        "device_type" => "ecobee_thermostat",
        "capabilities_supported" => ["thermostat"],
        "properties" => [
            "name" => "Entryway",
            "online" => "true,",
            "relative_humidity" => 0.36,
            "temperature_farenheit" => 70,
            "available_hvac_mode_settings" => [
                "cool",
                "heat",
                "heat_cool",
                "off",
            ],
            "current_climate_setting" => [
                "hvac_mode_setting" => "heat_cool",
                "cooling_set_point_farenheit" => 75,
                "heating_set_point_farenheit" => 65,
                "manual_override_allowed" => false,
            ],
            "location" => null,
            "connected_account_id" => "123e4567-e89b-12d3-a456-426614174000",
            "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
            "created_at" => "2024-04-05T07:57:05.323Z",
        ],
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam thermostats list
```

#### Output

```seam_cli
[
  {
    "device_id": "123e4567-e89b-12d3-a456-426614174000",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": "true,",
      "relative_humidity": 0.36,
      "temperature_farenheit": 70,
      "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
      "current_climate_setting": {
        "hvac_mode_setting": "heat_cool",
        "cooling_set_point_farenheit": 75,
        "heating_set_point_farenheit": 65,
        "manual_override_allowed": false
      },
      "location": null,
      "connected_account_id": "123e4567-e89b-12d3-a456-426614174000",
      "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-04-05T07:57:05.323Z"
    }
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

func main() {
	client.Thermostats.List(context.Background())
}
```

#### Output

```go
[]api.Device{api.Device{DeviceId: "123e4567-e89b-12d3-a456-426614174000", DeviceType: "ecobee_thermostat", CapabilitiesSupported: []string{"thermostat"}, Properties: api.DeviceProperties{Name: "Entryway", Online: "true,", RelativeHumidity: 0.36, TemperatureFarenheit: 70, AvailableHvacModeSettings: []string{"cool", "heat", "heat_cool", "off"}, CurrentClimateSetting: api.DevicePropertiesCurrentClimateSetting{HvacModeSetting: "heat_cool", CoolingSetPointFarenheit: 75, HeatingSetPointFarenheit: 65, ManualOverrideAllowed: false}, Location: nil, ConnectedAccountId: "123e4567-e89b-12d3-a456-426614174000", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z"}}}
```
{% endtab %}

{% endtabs %}


