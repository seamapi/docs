# List Thermostats

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

To filter the list of returned thermostats, specify the desired parameters.

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

{% tab title="cURL" %}

To filter the list of returned thermostats, specify the desired parameters.

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

{% tab title="Python" %}

To filter the list of returned thermostats, specify the desired parameters.

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

To filter the list of returned thermostats, specify the desired parameters.

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

To filter the list of returned thermostats, specify the desired parameters.

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

To filter the list of returned thermostats, specify the desired parameters.

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

**`connect_webview_id`** *String*

ID of the Connect Webview for which you want to list devices.

---

**`connected_account_id`** *String*

ID of the connected account for which you want to list devices.

---

**`connected_account_ids`** *Array* *of UUIDs*

Array of IDs of the connected accounts for which you want to list devices.

---

**`created_before`** *String*

Timestamp by which to limit returned devices. Returns devices created before this timestamp.

---

**`custom_metadata_has`** *Object*

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs for which you want to list devices.

---

**`customer_ids`** *Array* *of UUIDs*

---

**`device_ids`** *Array* *of UUIDs*

Array of device IDs for which you want to list devices.

---

**`device_type`** *String*

Device type by which you want to filter thermostat devices.

---

**`device_types`** *Array* *of Enums*

Array of device types by which you want to filter thermostat devices.
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

**`limit`** *Number*

Numerical limit on the number of devices to return.

---

**`manufacturer`** *String*

Manufacturer by which you want to filter thermostat devices.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`space_id`** *String*

ID of the space for which you want to list devices.

---

**`unstable_location_id`** *String*

---

**`user_identifier_key`** *String*

Your own internal user ID for the user for which you want to list devices.

---


## Response

Array of [devices](./)

