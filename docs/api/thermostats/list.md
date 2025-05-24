# List Thermostats

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/list ⇒ { devices: [device, …] }
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

**`connect_webview_id`** *string*

ID of the Connect Webview for which you want to list devices.

---

**`connected_account_id`** *string*

ID of the connected account for which you want to list devices.

---

**`connected_account_ids`** *array* *of UUIDs*

Array of IDs of the connected accounts for which you want to list devices.

---

**`created_before`** *string*

Timestamp by which to limit returned devices. Returns devices created before this timestamp.

---

**`custom_metadata_has`** *object*

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs for which you want to list devices.

---

**`customer_ids`** *array* *of UUIDs*

---

**`device_ids`** *array* *of UUIDs*

Array of device IDs for which you want to list devices.

---

**`device_type`** *string*

Device type by which to filter thermostat devices.

---

**`device_types`** *array* *of Enums*

Array of device types by which to filter thermostat devices.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>ecobee_thermostat</code>
- <code>nest_thermostat</code>
- <code>honeywell_resideo_thermostat</code>
- <code>tado_thermostat</code>
- <code>sensi_thermostat</code>
- <code>smartthings_thermostat</code>
</details>

---

**`limit`** *number*

Numerical limit on the number of devices to return.

---

**`manufacturer`** *string*

Manufacturer by which to filter thermostat devices.

---

**`page_cursor`** *string*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`user_identifier_key`** *string*

Your own internal user ID for the user for which you want to list devices.

---


## Response

Array of [devices](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of device
}
```
{% endtab %}
{% endtabs %}

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

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{
  "devices": [
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
}
```
{% endtab %}

{% endtabs %}


