# List Noise Sensors

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [noise sensors](https://docs.seam.co/latest/capability-guides/noise-sensors).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all noise sensors. For additional filter parameters, see /devices/list.

#### Code

```javascript
await seam.noiseSensors.list({ limit: 10 });
```

#### Output

```javascript
[
  {
    "capabilities_supported": ["noise_detection"],
    "connected_account_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    "created_at": "2025-05-16T16:54:17.946049Z",
    "custom_metadata": { "id": "internalId1" },
    "device_id": "f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f",
    "device_type": "minut_sensor",
    "display_name": "Living Room",
    "errors": [],
    "is_managed": true,
    "location": {
      "location_name": "Jane's Test Home",
      "timezone": "America/Los_Angeles"
    },
    "nickname": "Living Room",
    "properties": {
      "appearance": { "name": "Living Room" },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "currently_triggering_noise_threshold_ids": [],
      "image_alt_text": "Minut Sensor",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/minut_gen-3_front.png&q=75&w=128",
      "manufacturer": "minut",
      "minut_metadata": {
        "device_id": "770cd3153deca3dee0fe0614",
        "device_location": { "latitude": 0, "longitude": 0 },
        "device_name": "Living Room",
        "home_address": {
          "city": "San Francisco",
          "country": "US",
          "notes": "string",
          "post_code": "44210",
          "region": "San Francisco County",
          "street_name1": "2258 24th Street",
          "street_name2": ""
        },
        "home_id": "2978b6d5dba395ec08300e46",
        "home_location": { "latitude": 0, "longitude": 0 },
        "home_name": "Jane's Test Home",
        "latest_sensor_values": {
          "accelerometer_z": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": -1.00390625
          },
          "humidity": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": 31.110000610351562
          },
          "pressure": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": 101923
          },
          "sound": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": 47.7117919921875
          },
          "temperature": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": 21.270000457763672
          }
        }
      },
      "model": {
        "display_name": "Noise Sensor",
        "manufacturer_display_name": "Minut"
      },
      "name": "Living Room",
      "noise_level_decibels": 47.7117919921875,
      "online": true
    },
    "warnings": [],
    "workspace_id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all noise sensors. For additional filter parameters, see /devices/list.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/noise_sensors/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "limit": 10
}
EOF
```

#### Output

```curl
{
  "devices": [
    {
      "capabilities_supported": ["noise_detection"],
      "connected_account_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
      "created_at": "2025-05-16T16:54:17.946049Z",
      "custom_metadata": { "id": "internalId1" },
      "device_id": "f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f",
      "device_type": "minut_sensor",
      "display_name": "Living Room",
      "errors": [],
      "is_managed": true,
      "location": {
        "location_name": "Jane's Test Home",
        "timezone": "America/Los_Angeles"
      },
      "nickname": "Living Room",
      "properties": {
        "appearance": { "name": "Living Room" },
        "battery": { "level": 1, "status": "full" },
        "battery_level": 1,
        "currently_triggering_noise_threshold_ids": [],
        "image_alt_text": "Minut Sensor",
        "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/minut_gen-3_front.png&q=75&w=128",
        "manufacturer": "minut",
        "minut_metadata": {
          "device_id": "770cd3153deca3dee0fe0614",
          "device_location": { "latitude": 0, "longitude": 0 },
          "device_name": "Living Room",
          "home_address": {
            "city": "San Francisco",
            "country": "US",
            "notes": "string",
            "post_code": "44210",
            "region": "San Francisco County",
            "street_name1": "2258 24th Street",
            "street_name2": ""
          },
          "home_id": "2978b6d5dba395ec08300e46",
          "home_location": { "latitude": 0, "longitude": 0 },
          "home_name": "Jane's Test Home",
          "latest_sensor_values": {
            "accelerometer_z": {
              "time": "2025-06-16T16:54:17.946049Z",
              "value": -1.00390625
            },
            "humidity": {
              "time": "2025-06-16T16:54:17.946049Z",
              "value": 31.110000610351562
            },
            "pressure": {
              "time": "2025-06-16T16:54:17.946049Z",
              "value": 101923
            },
            "sound": {
              "time": "2025-06-16T16:54:17.946049Z",
              "value": 47.7117919921875
            },
            "temperature": {
              "time": "2025-06-16T16:54:17.946049Z",
              "value": 21.270000457763672
            }
          }
        },
        "model": {
          "display_name": "Noise Sensor",
          "manufacturer_display_name": "Minut"
        },
        "name": "Living Room",
        "noise_level_decibels": 47.7117919921875,
        "online": true
      },
      "warnings": [],
      "workspace_id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all noise sensors. For additional filter parameters, see /devices/list.

#### Code

```python
seam.noise_sensors.list(limit=10)
```

#### Output

```python
[
    Device(
        capabilities_supported=["noise_detection"],
        connected_account_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
        created_at="2025-05-16T16:54:17.946049Z",
        custom_metadata={"id": "internalId1"},
        device_id="f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f",
        device_type="minut_sensor",
        display_name="Living Room",
        errors=[],
        is_managed=true,
        location={
            "location_name": "Jane's Test Home",
            "timezone": "America/Los_Angeles",
        },
        nickname="Living Room",
        properties={
            "appearance": {"name": "Living Room"},
            "battery": {"level": 1, "status": "full"},
            "battery_level": 1,
            "currently_triggering_noise_threshold_ids": [],
            "image_alt_text": "Minut Sensor",
            "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/minut_gen-3_front.png&q=75&w=128",
            "manufacturer": "minut",
            "minut_metadata": {
                "device_id": "770cd3153deca3dee0fe0614",
                "device_location": {"latitude": 0, "longitude": 0},
                "device_name": "Living Room",
                "home_address": {
                    "city": "San Francisco",
                    "country": "US",
                    "notes": "string",
                    "post_code": "44210",
                    "region": "San Francisco County",
                    "street_name1": "2258 24th Street",
                    "street_name2": "",
                },
                "home_id": "2978b6d5dba395ec08300e46",
                "home_location": {"latitude": 0, "longitude": 0},
                "home_name": "Jane's Test Home",
                "latest_sensor_values": {
                    "accelerometer_z": {
                        "time": "2025-06-16T16:54:17.946049Z",
                        "value": -1.00390625,
                    },
                    "humidity": {
                        "time": "2025-06-16T16:54:17.946049Z",
                        "value": 31.110000610351562,
                    },
                    "pressure": {
                        "time": "2025-06-16T16:54:17.946049Z",
                        "value": 101923,
                    },
                    "sound": {
                        "time": "2025-06-16T16:54:17.946049Z",
                        "value": 47.7117919921875,
                    },
                    "temperature": {
                        "time": "2025-06-16T16:54:17.946049Z",
                        "value": 21.270000457763672,
                    },
                },
            },
            "model": {
                "display_name": "Noise Sensor",
                "manufacturer_display_name": "Minut",
            },
            "name": "Living Room",
            "noise_level_decibels": 47.7117919921875,
            "online": true,
        },
        warnings=[],
        workspace_id="1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all noise sensors. For additional filter parameters, see /devices/list.

#### Code

```ruby
seam.noise_sensors.list(limit: 10)
```

#### Output

```ruby
[
  {
    "capabilities_supported" => ["noise_detection"],
    "connected_account_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    "created_at" => "2025-05-16T16:54:17.946049Z",
    "custom_metadata" => {
      id: "internalId1",
    },
    "device_id" => "f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f",
    "device_type" => "minut_sensor",
    "display_name" => "Living Room",
    "errors" => [],
    "is_managed" => true,
    "location" => {
      location_name: "Jane's Test Home",
      timezone: "America/Los_Angeles",
    },
    "nickname" => "Living Room",
    "properties" => {
      appearance: {
        name: "Living Room",
      },
      battery: {
        level: 1,
        status: "full",
      },
      battery_level: 1,
      currently_triggering_noise_threshold_ids: [],
      image_alt_text: "Minut Sensor",
      image_url:
        "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/minut_gen-3_front.png&q=75&w=128",
      manufacturer: "minut",
      minut_metadata: {
        device_id: "770cd3153deca3dee0fe0614",
        device_location: {
          latitude: 0,
          longitude: 0,
        },
        device_name: "Living Room",
        home_address: {
          city: "San Francisco",
          country: "US",
          notes: "string",
          post_code: "44210",
          region: "San Francisco County",
          street_name1: "2258 24th Street",
          street_name2: "",
        },
        home_id: "2978b6d5dba395ec08300e46",
        home_location: {
          latitude: 0,
          longitude: 0,
        },
        home_name: "Jane's Test Home",
        latest_sensor_values: {
          accelerometer_z: {
            time: "2025-06-16T16:54:17.946049Z",
            value: -1.00390625,
          },
          humidity: {
            time: "2025-06-16T16:54:17.946049Z",
            value: 31.110000610351562,
          },
          pressure: {
            time: "2025-06-16T16:54:17.946049Z",
            value: 101_923,
          },
          sound: {
            time: "2025-06-16T16:54:17.946049Z",
            value: 47.7117919921875,
          },
          temperature: {
            time: "2025-06-16T16:54:17.946049Z",
            value: 21.270000457763672,
          },
        },
      },
      model: {
        display_name: "Noise Sensor",
        manufacturer_display_name: "Minut",
      },
      name: "Living Room",
      noise_level_decibels: 47.7117919921875,
      online: true,
    },
    "warnings" => [],
    "workspace_id" => "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all noise sensors. For additional filter parameters, see /devices/list.

#### Code

```php
$seam->noise_sensors->list(limit: 10);
```

#### Output

```php
[
    [
        "capabilities_supported" => ["noise_detection"],
        "connected_account_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
        "created_at" => "2025-05-16T16:54:17.946049Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f",
        "device_type" => "minut_sensor",
        "display_name" => "Living Room",
        "errors" => [],
        "is_managed" => true,
        "location" => [
            "location_name" => "Jane's Test Home",
            "timezone" => "America/Los_Angeles",
        ],
        "nickname" => "Living Room",
        "properties" => [
            "appearance" => ["name" => "Living Room"],
            "battery" => ["level" => 1, "status" => "full"],
            "battery_level" => 1,
            "currently_triggering_noise_threshold_ids" => [],
            "image_alt_text" => "Minut Sensor",
            "image_url" =>
                "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/minut_gen-3_front.png&q=75&w=128",
            "manufacturer" => "minut",
            "minut_metadata" => [
                "device_id" => "770cd3153deca3dee0fe0614",
                "device_location" => ["latitude" => 0, "longitude" => 0],
                "device_name" => "Living Room",
                "home_address" => [
                    "city" => "San Francisco",
                    "country" => "US",
                    "notes" => "string",
                    "post_code" => "44210",
                    "region" => "San Francisco County",
                    "street_name1" => "2258 24th Street",
                    "street_name2" => "",
                ],
                "home_id" => "2978b6d5dba395ec08300e46",
                "home_location" => ["latitude" => 0, "longitude" => 0],
                "home_name" => "Jane's Test Home",
                "latest_sensor_values" => [
                    "accelerometer_z" => [
                        "time" => "2025-06-16T16:54:17.946049Z",
                        "value" => -1.00390625,
                    ],
                    "humidity" => [
                        "time" => "2025-06-16T16:54:17.946049Z",
                        "value" => 31.110000610351562,
                    ],
                    "pressure" => [
                        "time" => "2025-06-16T16:54:17.946049Z",
                        "value" => 101923,
                    ],
                    "sound" => [
                        "time" => "2025-06-16T16:54:17.946049Z",
                        "value" => 47.7117919921875,
                    ],
                    "temperature" => [
                        "time" => "2025-06-16T16:54:17.946049Z",
                        "value" => 21.270000457763672,
                    ],
                ],
            ],
            "model" => [
                "display_name" => "Noise Sensor",
                "manufacturer_display_name" => "Minut",
            ],
            "name" => "Living Room",
            "noise_level_decibels" => 47.7117919921875,
            "online" => true,
        ],
        "warnings" => [],
        "workspace_id" => "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all noise sensors. For additional filter parameters, see /devices/list.

#### Code

```seam_cli
seam noise-sensors list --limit 10
```

#### Output

```seam_cli
[
  {
    "capabilities_supported": ["noise_detection"],
    "connected_account_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    "created_at": "2025-05-16T16:54:17.946049Z",
    "custom_metadata": { "id": "internalId1" },
    "device_id": "f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f",
    "device_type": "minut_sensor",
    "display_name": "Living Room",
    "errors": [],
    "is_managed": true,
    "location": {
      "location_name": "Jane's Test Home",
      "timezone": "America/Los_Angeles"
    },
    "nickname": "Living Room",
    "properties": {
      "appearance": { "name": "Living Room" },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "currently_triggering_noise_threshold_ids": [],
      "image_alt_text": "Minut Sensor",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/minut_gen-3_front.png&q=75&w=128",
      "manufacturer": "minut",
      "minut_metadata": {
        "device_id": "770cd3153deca3dee0fe0614",
        "device_location": { "latitude": 0, "longitude": 0 },
        "device_name": "Living Room",
        "home_address": {
          "city": "San Francisco",
          "country": "US",
          "notes": "string",
          "post_code": "44210",
          "region": "San Francisco County",
          "street_name1": "2258 24th Street",
          "street_name2": ""
        },
        "home_id": "2978b6d5dba395ec08300e46",
        "home_location": { "latitude": 0, "longitude": 0 },
        "home_name": "Jane's Test Home",
        "latest_sensor_values": {
          "accelerometer_z": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": -1.00390625
          },
          "humidity": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": 31.110000610351562
          },
          "pressure": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": 101923
          },
          "sound": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": 47.7117919921875
          },
          "temperature": {
            "time": "2025-06-16T16:54:17.946049Z",
            "value": 21.270000457763672
          }
        }
      },
      "model": {
        "display_name": "Noise Sensor",
        "manufacturer_display_name": "Minut"
      },
      "name": "Living Room",
      "noise_level_decibels": 47.7117919921875,
      "online": true
    },
    "warnings": [],
    "workspace_id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"
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

Device type of the noise sensors that you want to list.

---

**`device_types`** *Array* *of Enums*

Device types of the noise sensors that you want to list.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>noiseaware_activity_zone</code>
- <code>minut_sensor</code>
</details>

---

**`limit`** *Number*

Numerical limit on the number of devices to return.

---

**`manufacturer`** *String*

Manufacturers of the noise sensors that you want to list.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`search`** *String*

String for which to search. Filters returned devices to include all records that satisfy a partial match using `device_id`, `display_name`, `custom_metadata` or `location.location_name`.

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

Array of [devices](./../devices)


{% tabs %}
{% tab title="JSON" %}



```json
{
  "can_program_online_access_codes": true,
  "can_remotely_lock": true,
  "can_remotely_unlock": true,
  "capabilities_supported": ["access_code", "lock"],
  "connected_account_id": "8e3a4f1b-2c7d-4a9e-8b5f-3d2c1a0b9e8f",
  "created_at": "2025-03-27T02:08:16.418Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "a69569e1-133b-4a9d-b883-018641bfe543",
  "device_type": "schlage_lock",
  "display_name": "FRONT DOOR",
  "errors": [],
  "is_managed": true,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
  "nickname": "Front Door",
  "properties": {
    "appearance": { "name": "FRONT DOOR" },
    "battery": { "level": 0.48, "status": "good" },
    "battery_level": 0.48,
    "code_constraints": [{ "constraint_type": "name_length", "max_length": 9 }],
    "has_native_entry_events": true,
    "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
    "locked": false,
    "manufacturer": "schlage",
    "model": {
      "accessory_keypad_supported": false,
      "can_connect_accessory_keypad": false,
      "display_name": "Encode",
      "has_built_in_keypad": true,
      "manufacturer_display_name": "Schlage",
      "offline_access_codes_supported": false,
      "online_access_codes_supported": true
    },
    "name": "FRONT DOOR",
    "offline_access_codes_enabled": false,
    "online": true,
    "online_access_codes_enabled": true,
    "schlage_metadata": {
      "device_id": "a69569e1-133b-4a9d-b883-018641bfe543",
      "device_name": "FRONT DOOR",
      "model": "Encode"
    },
    "serial_number": "34000000000531e0",
    "supported_code_lengths": [4, 5, 6, 7, 8],
    "supports_backup_access_code_pool": true,
    "supports_offline_access_codes": false
  },
  "warnings": [],
  "workspace_id": "5d7f2e1a-9c8b-4f3e-8d2c-1a0b9e8f7c6d"
}
```
{% endtab %}
{% endtabs %}
