# List Unmanaged Devices

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [unmanaged devices](../../../core-concepts/devices/managed-and-unmanaged-devices.md).

An unmanaged device has a limited set of visible properties and a subset of supported events. You cannot control an unmanaged device. Any [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) on an unmanaged device are unmanaged. To control an unmanaged device with Seam, [convert it to a managed device](../../../core-concepts/devices/managed-and-unmanaged-devices.md#convert-an-unmanaged-device-to-managed).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all unmanaged devices for a specified customer ID.

#### Code:

```javascript
await seam.devices.unmanaged.list({
  customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"],
});
```

#### Output:

```javascript
[
  {
    "can_program_offline_access_codes": false,
    "can_program_online_access_codes": true,
    "can_remotely_lock": true,
    "can_remotely_unlock": true,
    "can_simulate_connection": false,
    "can_simulate_disconnection": true,
    "can_simulate_removal": true,
    "capabilities_supported": ["access_code", "lock"],
    "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    "created_at": "2025-06-16T16:54:17.946342Z",
    "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
    "device_type": "schlage_lock",
    "errors": [],
    "is_managed": false,
    "location": {
      "location_name": "Front Door",
      "timezone": "America/New_York"
    },
    "properties": {
      "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
      "manufacturer": "schlage",
      "model": {
        "accessory_keypad_supported": true,
        "can_connect_accessory_keypad": true,
        "display_name": "Front Door",
        "has_built_in_keypad": false,
        "manufacturer_display_name": "Schlage",
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      },
      "name": "Front Door",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all unmanaged devices for a specified customer ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/unmanaged/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "customer_ids": [
    "e387e15f-be27-47ad-881f-4a6fc5460c57"
  ]
}
EOF
```

#### Output:

```curl
{
  "devices": [
    {
      "can_program_offline_access_codes": false,
      "can_program_online_access_codes": true,
      "can_remotely_lock": true,
      "can_remotely_unlock": true,
      "can_simulate_connection": false,
      "can_simulate_disconnection": true,
      "can_simulate_removal": true,
      "capabilities_supported": ["access_code", "lock"],
      "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
      "created_at": "2025-06-16T16:54:17.946342Z",
      "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
      "device_type": "schlage_lock",
      "errors": [],
      "is_managed": false,
      "location": {
        "location_name": "Front Door",
        "timezone": "America/New_York"
      },
      "properties": {
        "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
        "battery": { "level": 1, "status": "full" },
        "battery_level": 1,
        "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
        "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
        "manufacturer": "schlage",
        "model": {
          "accessory_keypad_supported": true,
          "can_connect_accessory_keypad": true,
          "display_name": "Front Door",
          "has_built_in_keypad": false,
          "manufacturer_display_name": "Schlage",
          "offline_access_codes_supported": false,
          "online_access_codes_supported": true
        },
        "name": "Front Door",
        "offline_access_codes_enabled": false,
        "online": true,
        "online_access_codes_enabled": true
      },
      "warnings": [],
      "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all unmanaged devices for a specified customer ID.

#### Code:

```python
seam.devices.unmanaged.list(customer_ids=["e387e15f-be27-47ad-881f-4a6fc5460c57"])
```

#### Output:

```python
[UnmanagedDevice(can_program_offline_access_codes=false, can_program_online_access_codes=true, can_remotely_lock=true, can_remotely_unlock=true, can_simulate_connection=false, can_simulate_disconnection=true, can_simulate_removal=true, capabilities_supported=["access_code","lock"], connected_account_id="c1a3967f-24a1-4220-a9c7-7fa97c1d5603", created_at="2025-06-16T16:54:17.946342Z", device_id="f4f40e75-86fc-4896-b958-e1c7e092b2cf", device_type="schlage_lock", errors=[], is_managed=false, location={"location_name":"Front Door","timezone":"America/New_York"}, properties={"accessory_keypad":{"battery":{"level":1},"is_connected":true},"battery":{"level":1,"status":"full"},"battery_level":1,"image_alt_text":"Schlage Sense Smart Deadbolt with Camelot Trim, Front","image_url":"https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128","manufacturer":"schlage","model":{"accessory_keypad_supported":true,"can_connect_accessory_keypad":true,"display_name":"Front Door","has_built_in_keypad":false,"manufacturer_display_name":"Schlage","offline_access_codes_supported":false,"online_access_codes_supported":true},"name":"Front Door","offline_access_codes_enabled":false,"online":true,"online_access_codes_enabled":true}, warnings=[], workspace_id="3cd6ba1c-8a60-4c24-b487-07bf6c0b755b")]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all unmanaged devices for a specified customer ID.

#### Code:

```ruby
seam.devices.unmanaged.list(customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"])
```

#### Output:

```ruby
[{"can_program_offline_access_codes" => false,"can_program_online_access_codes" => true,"can_remotely_lock" => true,"can_remotely_unlock" => true,"can_simulate_connection" => false,"can_simulate_disconnection" => true,"can_simulate_removal" => true,"capabilities_supported" => ["access_code","lock"],"connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603","created_at" => "2025-06-16T16:54:17.946342Z","device_id" => "f4f40e75-86fc-4896-b958-e1c7e092b2cf","device_type" => "schlage_lock","errors" => [],"is_managed" => false,"location" => {"location_name":"Front Door","timezone":"America/New_York"},"properties" => {"accessory_keypad":{"battery":{"level":1},"is_connected":true},"battery":{"level":1,"status":"full"},"battery_level":1,"image_alt_text":"Schlage Sense Smart Deadbolt with Camelot Trim, Front","image_url":"https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128","manufacturer":"schlage","model":{"accessory_keypad_supported":true,"can_connect_accessory_keypad":true,"display_name":"Front Door","has_built_in_keypad":false,"manufacturer_display_name":"Schlage","offline_access_codes_supported":false,"online_access_codes_supported":true},"name":"Front Door","offline_access_codes_enabled":false,"online":true,"online_access_codes_enabled":true},"warnings" => [],"workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all unmanaged devices for a specified customer ID.

#### Code:

```php
$seam->devices->unmanaged->list(
    customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"],
);
```

#### Output:

```php
[
    [
        "can_program_offline_access_codes" => false,
        "can_program_online_access_codes" => true,
        "can_remotely_lock" => true,
        "can_remotely_unlock" => true,
        "can_simulate_connection" => false,
        "can_simulate_disconnection" => true,
        "can_simulate_removal" => true,
        "capabilities_supported" => ["access_code", "lock"],
        "connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
        "created_at" => "2025-06-16T16:54:17.946342Z",
        "device_id" => "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
        "device_type" => "schlage_lock",
        "errors" => [],
        "is_managed" => false,
        "location" => [
            "location_name" => "Front Door",
            "timezone" => "America/New_York",
        ],
        "properties" => [
            "accessory_keypad" => [
                "battery" => ["level" => 1],
                "is_connected" => true,
            ],
            "battery" => ["level" => 1, "status" => "full"],
            "battery_level" => 1,
            "image_alt_text" =>
                "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
            "image_url" =>
                "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
            "manufacturer" => "schlage",
            "model" => [
                "accessory_keypad_supported" => true,
                "can_connect_accessory_keypad" => true,
                "display_name" => "Front Door",
                "has_built_in_keypad" => false,
                "manufacturer_display_name" => "Schlage",
                "offline_access_codes_supported" => false,
                "online_access_codes_supported" => true,
            ],
            "name" => "Front Door",
            "offline_access_codes_enabled" => false,
            "online" => true,
            "online_access_codes_enabled" => true,
        ],
        "warnings" => [],
        "workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all unmanaged devices for a specified customer ID.

#### Code:

```seam_cli
seam devices unmanaged list --customer_ids ["e387e15f-be27-47ad-881f-4a6fc5460c57"]
```

#### Output:

```seam_cli
[
  {
    "can_program_offline_access_codes": false,
    "can_program_online_access_codes": true,
    "can_remotely_lock": true,
    "can_remotely_unlock": true,
    "can_simulate_connection": false,
    "can_simulate_disconnection": true,
    "can_simulate_removal": true,
    "capabilities_supported": ["access_code", "lock"],
    "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    "created_at": "2025-06-16T16:54:17.946342Z",
    "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
    "device_type": "schlage_lock",
    "errors": [],
    "is_managed": false,
    "location": {
      "location_name": "Front Door",
      "timezone": "America/New_York"
    },
    "properties": {
      "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
      "manufacturer": "schlage",
      "model": {
        "accessory_keypad_supported": true,
        "can_connect_accessory_keypad": true,
        "display_name": "Front Door",
        "has_built_in_keypad": false,
        "manufacturer_display_name": "Schlage",
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      },
      "name": "Front Door",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
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

Set of key:value [custom metadata](../../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs for which you want to list devices.

---

**`customer_key`** *String*

Customer key for which you want to list devices.

---

**`device_ids`** *Array* *of UUIDs*

Array of device IDs for which you want to list devices.

---

**`device_type`** *String*

Device type for which you want to list devices.

---

**`device_types`** *Array* *of Enums*

Array of device types for which you want to list devices.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>akuvox_lock</code>
- <code>august_lock</code>
- <code>brivo_access_point</code>
- <code>butterflymx_panel</code>
- <code>avigilon_alta_entry</code>
- <code>doorking_lock</code>
- <code>genie_door</code>
- <code>igloo_lock</code>
- <code>linear_lock</code>
- <code>lockly_lock</code>
- <code>kwikset_lock</code>
- <code>nuki_lock</code>
- <code>salto_lock</code>
- <code>schlage_lock</code>
- <code>seam_relay</code>
- <code>smartthings_lock</code>
- <code>wyze_lock</code>
- <code>yale_lock</code>
- <code>two_n_intercom</code>
- <code>controlbyweb_device</code>
- <code>ttlock_lock</code>
- <code>igloohome_lock</code>
- <code>hubitat_lock</code>
- <code>four_suites_door</code>
- <code>dormakaba_oracode_door</code>
- <code>tedee_lock</code>
- <code>akiles_lock</code>
- <code>ultraloq_lock</code>
- <code>keynest_key</code>
- <code>noiseaware_activity_zone</code>
- <code>minut_sensor</code>
- <code>ecobee_thermostat</code>
- <code>nest_thermostat</code>
- <code>honeywell_resideo_thermostat</code>
- <code>tado_thermostat</code>
- <code>sensi_thermostat</code>
- <code>smartthings_thermostat</code>
- <code>ios_phone</code>
- <code>android_phone</code>
</details>

---

**`limit`** *Number*

Numerical limit on the number of devices to return.

---

**`manufacturer`** *String*

Manufacturer for which you want to list devices.

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

{% hint style="warning" %}
**Deprecated**. Use `space_id`.
{% endhint %}

---

**`user_identifier_key`** *String*

Your own internal user ID for the user for which you want to list devices.

---


## Response

{% hint style="success" %}
Returns:
**Array of [unmanaged\_devices](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "can_program_offline_access_codes": false,
  "can_program_online_access_codes": true,
  "can_remotely_lock": true,
  "can_remotely_unlock": true,
  "can_simulate_connection": false,
  "can_simulate_disconnection": true,
  "can_simulate_removal": true,
  "capabilities_supported": ["access_code", "lock"],
  "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
  "created_at": "2025-06-16T16:54:17.946342Z",
  "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
  "device_type": "schlage_lock",
  "errors": [],
  "is_managed": false,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
  "custom_metadata": { "id": "internalId1" },
  "properties": {
    "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
    "battery": { "level": 1, "status": "full" },
    "battery_level": 1,
    "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
    "manufacturer": "schlage",
    "model": {
      "accessory_keypad_supported": true,
      "can_connect_accessory_keypad": true,
      "display_name": "Front Door",
      "has_built_in_keypad": false,
      "manufacturer_display_name": "Schlage",
      "offline_access_codes_supported": false,
      "online_access_codes_supported": true
    },
    "name": "Front Door",
    "offline_access_codes_enabled": false,
    "online": true,
    "online_access_codes_enabled": true
  },
  "warnings": [],
  "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### List unmanaged devices for a specific connected account

Returns a list of all unmanaged devices for a specified connected account ID.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.unmanaged.list({
  connected_account_id: "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
});
```

#### Output:

```javascript
[
  {
    "can_program_offline_access_codes": false,
    "can_program_online_access_codes": true,
    "can_remotely_lock": true,
    "can_remotely_unlock": true,
    "can_simulate_connection": false,
    "can_simulate_disconnection": true,
    "can_simulate_removal": true,
    "capabilities_supported": ["access_code", "lock"],
    "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    "created_at": "2025-06-16T16:54:17.946342Z",
    "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
    "device_type": "schlage_lock",
    "errors": [],
    "is_managed": false,
    "location": {
      "location_name": "Front Door",
      "timezone": "America/New_York"
    },
    "properties": {
      "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
      "manufacturer": "schlage",
      "model": {
        "accessory_keypad_supported": true,
        "can_connect_accessory_keypad": true,
        "display_name": "Front Door",
        "has_built_in_keypad": false,
        "manufacturer_display_name": "Schlage",
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      },
      "name": "Front Door",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/unmanaged/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603"
}
EOF
```

#### Output:

```curl
{
  "devices": [
    {
      "can_program_offline_access_codes": false,
      "can_program_online_access_codes": true,
      "can_remotely_lock": true,
      "can_remotely_unlock": true,
      "can_simulate_connection": false,
      "can_simulate_disconnection": true,
      "can_simulate_removal": true,
      "capabilities_supported": ["access_code", "lock"],
      "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
      "created_at": "2025-06-16T16:54:17.946342Z",
      "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
      "device_type": "schlage_lock",
      "errors": [],
      "is_managed": false,
      "location": {
        "location_name": "Front Door",
        "timezone": "America/New_York"
      },
      "properties": {
        "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
        "battery": { "level": 1, "status": "full" },
        "battery_level": 1,
        "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
        "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
        "manufacturer": "schlage",
        "model": {
          "accessory_keypad_supported": true,
          "can_connect_accessory_keypad": true,
          "display_name": "Front Door",
          "has_built_in_keypad": false,
          "manufacturer_display_name": "Schlage",
          "offline_access_codes_supported": false,
          "online_access_codes_supported": true
        },
        "name": "Front Door",
        "offline_access_codes_enabled": false,
        "online": true,
        "online_access_codes_enabled": true
      },
      "warnings": [],
      "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.unmanaged.list(connected_account_id="c1a3967f-24a1-4220-a9c7-7fa97c1d5603")
```

#### Output:

```python
[UnmanagedDevice(can_program_offline_access_codes=false, can_program_online_access_codes=true, can_remotely_lock=true, can_remotely_unlock=true, can_simulate_connection=false, can_simulate_disconnection=true, can_simulate_removal=true, capabilities_supported=["access_code","lock"], connected_account_id="c1a3967f-24a1-4220-a9c7-7fa97c1d5603", created_at="2025-06-16T16:54:17.946342Z", device_id="f4f40e75-86fc-4896-b958-e1c7e092b2cf", device_type="schlage_lock", errors=[], is_managed=false, location={"location_name":"Front Door","timezone":"America/New_York"}, properties={"accessory_keypad":{"battery":{"level":1},"is_connected":true},"battery":{"level":1,"status":"full"},"battery_level":1,"image_alt_text":"Schlage Sense Smart Deadbolt with Camelot Trim, Front","image_url":"https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128","manufacturer":"schlage","model":{"accessory_keypad_supported":true,"can_connect_accessory_keypad":true,"display_name":"Front Door","has_built_in_keypad":false,"manufacturer_display_name":"Schlage","offline_access_codes_supported":false,"online_access_codes_supported":true},"name":"Front Door","offline_access_codes_enabled":false,"online":true,"online_access_codes_enabled":true}, warnings=[], workspace_id="3cd6ba1c-8a60-4c24-b487-07bf6c0b755b")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.unmanaged.list(connected_account_id: "c1a3967f-24a1-4220-a9c7-7fa97c1d5603")
```

#### Output:

```ruby
[{"can_program_offline_access_codes" => false,"can_program_online_access_codes" => true,"can_remotely_lock" => true,"can_remotely_unlock" => true,"can_simulate_connection" => false,"can_simulate_disconnection" => true,"can_simulate_removal" => true,"capabilities_supported" => ["access_code","lock"],"connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603","created_at" => "2025-06-16T16:54:17.946342Z","device_id" => "f4f40e75-86fc-4896-b958-e1c7e092b2cf","device_type" => "schlage_lock","errors" => [],"is_managed" => false,"location" => {"location_name":"Front Door","timezone":"America/New_York"},"properties" => {"accessory_keypad":{"battery":{"level":1},"is_connected":true},"battery":{"level":1,"status":"full"},"battery_level":1,"image_alt_text":"Schlage Sense Smart Deadbolt with Camelot Trim, Front","image_url":"https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128","manufacturer":"schlage","model":{"accessory_keypad_supported":true,"can_connect_accessory_keypad":true,"display_name":"Front Door","has_built_in_keypad":false,"manufacturer_display_name":"Schlage","offline_access_codes_supported":false,"online_access_codes_supported":true},"name":"Front Door","offline_access_codes_enabled":false,"online":true,"online_access_codes_enabled":true},"warnings" => [],"workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->unmanaged->list(
    connected_account_id: "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
);
```

#### Output:

```php
[
    [
        "can_program_offline_access_codes" => false,
        "can_program_online_access_codes" => true,
        "can_remotely_lock" => true,
        "can_remotely_unlock" => true,
        "can_simulate_connection" => false,
        "can_simulate_disconnection" => true,
        "can_simulate_removal" => true,
        "capabilities_supported" => ["access_code", "lock"],
        "connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
        "created_at" => "2025-06-16T16:54:17.946342Z",
        "device_id" => "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
        "device_type" => "schlage_lock",
        "errors" => [],
        "is_managed" => false,
        "location" => [
            "location_name" => "Front Door",
            "timezone" => "America/New_York",
        ],
        "properties" => [
            "accessory_keypad" => [
                "battery" => ["level" => 1],
                "is_connected" => true,
            ],
            "battery" => ["level" => 1, "status" => "full"],
            "battery_level" => 1,
            "image_alt_text" =>
                "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
            "image_url" =>
                "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
            "manufacturer" => "schlage",
            "model" => [
                "accessory_keypad_supported" => true,
                "can_connect_accessory_keypad" => true,
                "display_name" => "Front Door",
                "has_built_in_keypad" => false,
                "manufacturer_display_name" => "Schlage",
                "offline_access_codes_supported" => false,
                "online_access_codes_supported" => true,
            ],
            "name" => "Front Door",
            "offline_access_codes_enabled" => false,
            "online" => true,
            "online_access_codes_enabled" => true,
        ],
        "warnings" => [],
        "workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices unmanaged list --connected_account_id "c1a3967f-24a1-4220-a9c7-7fa97c1d5603"
```

#### Output:

```seam_cli
[
  {
    "can_program_offline_access_codes": false,
    "can_program_online_access_codes": true,
    "can_remotely_lock": true,
    "can_remotely_unlock": true,
    "can_simulate_connection": false,
    "can_simulate_disconnection": true,
    "can_simulate_removal": true,
    "capabilities_supported": ["access_code", "lock"],
    "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    "created_at": "2025-06-16T16:54:17.946342Z",
    "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
    "device_type": "schlage_lock",
    "errors": [],
    "is_managed": false,
    "location": {
      "location_name": "Front Door",
      "timezone": "America/New_York"
    },
    "properties": {
      "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
      "manufacturer": "schlage",
      "model": {
        "accessory_keypad_supported": true,
        "can_connect_accessory_keypad": true,
        "display_name": "Front Door",
        "has_built_in_keypad": false,
        "manufacturer_display_name": "Schlage",
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      },
      "name": "Front Door",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List unmanaged devices for a specific manufacturer

Returns a list of all unmanaged devices for a specified manufacturer.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.unmanaged.list({ manufacturer: "schlage" });
```

#### Output:

```javascript
[
  {
    "can_program_offline_access_codes": false,
    "can_program_online_access_codes": true,
    "can_remotely_lock": true,
    "can_remotely_unlock": true,
    "can_simulate_connection": false,
    "can_simulate_disconnection": true,
    "can_simulate_removal": true,
    "capabilities_supported": ["access_code", "lock"],
    "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    "created_at": "2025-06-16T16:54:17.946342Z",
    "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
    "device_type": "schlage_lock",
    "errors": [],
    "is_managed": false,
    "location": {
      "location_name": "Front Door",
      "timezone": "America/New_York"
    },
    "properties": {
      "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
      "manufacturer": "schlage",
      "model": {
        "accessory_keypad_supported": true,
        "can_connect_accessory_keypad": true,
        "display_name": "Front Door",
        "has_built_in_keypad": false,
        "manufacturer_display_name": "Schlage",
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      },
      "name": "Front Door",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/unmanaged/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "manufacturer": "schlage"
}
EOF
```

#### Output:

```curl
{
  "devices": [
    {
      "can_program_offline_access_codes": false,
      "can_program_online_access_codes": true,
      "can_remotely_lock": true,
      "can_remotely_unlock": true,
      "can_simulate_connection": false,
      "can_simulate_disconnection": true,
      "can_simulate_removal": true,
      "capabilities_supported": ["access_code", "lock"],
      "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
      "created_at": "2025-06-16T16:54:17.946342Z",
      "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
      "device_type": "schlage_lock",
      "errors": [],
      "is_managed": false,
      "location": {
        "location_name": "Front Door",
        "timezone": "America/New_York"
      },
      "properties": {
        "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
        "battery": { "level": 1, "status": "full" },
        "battery_level": 1,
        "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
        "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
        "manufacturer": "schlage",
        "model": {
          "accessory_keypad_supported": true,
          "can_connect_accessory_keypad": true,
          "display_name": "Front Door",
          "has_built_in_keypad": false,
          "manufacturer_display_name": "Schlage",
          "offline_access_codes_supported": false,
          "online_access_codes_supported": true
        },
        "name": "Front Door",
        "offline_access_codes_enabled": false,
        "online": true,
        "online_access_codes_enabled": true
      },
      "warnings": [],
      "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.unmanaged.list(manufacturer="schlage")
```

#### Output:

```python
[UnmanagedDevice(can_program_offline_access_codes=false, can_program_online_access_codes=true, can_remotely_lock=true, can_remotely_unlock=true, can_simulate_connection=false, can_simulate_disconnection=true, can_simulate_removal=true, capabilities_supported=["access_code","lock"], connected_account_id="c1a3967f-24a1-4220-a9c7-7fa97c1d5603", created_at="2025-06-16T16:54:17.946342Z", device_id="f4f40e75-86fc-4896-b958-e1c7e092b2cf", device_type="schlage_lock", errors=[], is_managed=false, location={"location_name":"Front Door","timezone":"America/New_York"}, properties={"accessory_keypad":{"battery":{"level":1},"is_connected":true},"battery":{"level":1,"status":"full"},"battery_level":1,"image_alt_text":"Schlage Sense Smart Deadbolt with Camelot Trim, Front","image_url":"https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128","manufacturer":"schlage","model":{"accessory_keypad_supported":true,"can_connect_accessory_keypad":true,"display_name":"Front Door","has_built_in_keypad":false,"manufacturer_display_name":"Schlage","offline_access_codes_supported":false,"online_access_codes_supported":true},"name":"Front Door","offline_access_codes_enabled":false,"online":true,"online_access_codes_enabled":true}, warnings=[], workspace_id="3cd6ba1c-8a60-4c24-b487-07bf6c0b755b")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.unmanaged.list(manufacturer: "schlage")
```

#### Output:

```ruby
[{"can_program_offline_access_codes" => false,"can_program_online_access_codes" => true,"can_remotely_lock" => true,"can_remotely_unlock" => true,"can_simulate_connection" => false,"can_simulate_disconnection" => true,"can_simulate_removal" => true,"capabilities_supported" => ["access_code","lock"],"connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603","created_at" => "2025-06-16T16:54:17.946342Z","device_id" => "f4f40e75-86fc-4896-b958-e1c7e092b2cf","device_type" => "schlage_lock","errors" => [],"is_managed" => false,"location" => {"location_name":"Front Door","timezone":"America/New_York"},"properties" => {"accessory_keypad":{"battery":{"level":1},"is_connected":true},"battery":{"level":1,"status":"full"},"battery_level":1,"image_alt_text":"Schlage Sense Smart Deadbolt with Camelot Trim, Front","image_url":"https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128","manufacturer":"schlage","model":{"accessory_keypad_supported":true,"can_connect_accessory_keypad":true,"display_name":"Front Door","has_built_in_keypad":false,"manufacturer_display_name":"Schlage","offline_access_codes_supported":false,"online_access_codes_supported":true},"name":"Front Door","offline_access_codes_enabled":false,"online":true,"online_access_codes_enabled":true},"warnings" => [],"workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->unmanaged->list(manufacturer: "schlage");
```

#### Output:

```php
[
    [
        "can_program_offline_access_codes" => false,
        "can_program_online_access_codes" => true,
        "can_remotely_lock" => true,
        "can_remotely_unlock" => true,
        "can_simulate_connection" => false,
        "can_simulate_disconnection" => true,
        "can_simulate_removal" => true,
        "capabilities_supported" => ["access_code", "lock"],
        "connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
        "created_at" => "2025-06-16T16:54:17.946342Z",
        "device_id" => "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
        "device_type" => "schlage_lock",
        "errors" => [],
        "is_managed" => false,
        "location" => [
            "location_name" => "Front Door",
            "timezone" => "America/New_York",
        ],
        "properties" => [
            "accessory_keypad" => [
                "battery" => ["level" => 1],
                "is_connected" => true,
            ],
            "battery" => ["level" => 1, "status" => "full"],
            "battery_level" => 1,
            "image_alt_text" =>
                "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
            "image_url" =>
                "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
            "manufacturer" => "schlage",
            "model" => [
                "accessory_keypad_supported" => true,
                "can_connect_accessory_keypad" => true,
                "display_name" => "Front Door",
                "has_built_in_keypad" => false,
                "manufacturer_display_name" => "Schlage",
                "offline_access_codes_supported" => false,
                "online_access_codes_supported" => true,
            ],
            "name" => "Front Door",
            "offline_access_codes_enabled" => false,
            "online" => true,
            "online_access_codes_enabled" => true,
        ],
        "warnings" => [],
        "workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices unmanaged list --manufacturer "schlage"
```

#### Output:

```seam_cli
[
  {
    "can_program_offline_access_codes": false,
    "can_program_online_access_codes": true,
    "can_remotely_lock": true,
    "can_remotely_unlock": true,
    "can_simulate_connection": false,
    "can_simulate_disconnection": true,
    "can_simulate_removal": true,
    "capabilities_supported": ["access_code", "lock"],
    "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    "created_at": "2025-06-16T16:54:17.946342Z",
    "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
    "device_type": "schlage_lock",
    "errors": [],
    "is_managed": false,
    "location": {
      "location_name": "Front Door",
      "timezone": "America/New_York"
    },
    "properties": {
      "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
      "manufacturer": "schlage",
      "model": {
        "accessory_keypad_supported": true,
        "can_connect_accessory_keypad": true,
        "display_name": "Front Door",
        "has_built_in_keypad": false,
        "manufacturer_display_name": "Schlage",
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      },
      "name": "Front Door",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List unmanaged devices created before a specific date

Returns a list of all unmanaged devices created (in Seam) before a specified date.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.unmanaged.list({
  created_before: "2025-01-01T00:00:00.000Z",
  limit: 50,
});
```

#### Output:

```javascript
[
  {
    "can_program_offline_access_codes": false,
    "can_program_online_access_codes": true,
    "can_remotely_lock": true,
    "can_remotely_unlock": true,
    "can_simulate_connection": false,
    "can_simulate_disconnection": true,
    "can_simulate_removal": true,
    "capabilities_supported": ["access_code", "lock"],
    "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    "created_at": "2024-06-16T16:54:17.946342Z",
    "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
    "device_type": "schlage_lock",
    "errors": [],
    "is_managed": false,
    "location": {
      "location_name": "Front Door",
      "timezone": "America/New_York"
    },
    "properties": {
      "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
      "manufacturer": "schlage",
      "model": {
        "accessory_keypad_supported": true,
        "can_connect_accessory_keypad": true,
        "display_name": "Front Door",
        "has_built_in_keypad": false,
        "manufacturer_display_name": "Schlage",
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      },
      "name": "Front Door",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/unmanaged/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "created_before": "2025-01-01T00:00:00.000Z",
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "devices": [
    {
      "can_program_offline_access_codes": false,
      "can_program_online_access_codes": true,
      "can_remotely_lock": true,
      "can_remotely_unlock": true,
      "can_simulate_connection": false,
      "can_simulate_disconnection": true,
      "can_simulate_removal": true,
      "capabilities_supported": ["access_code", "lock"],
      "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
      "created_at": "2024-06-16T16:54:17.946342Z",
      "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
      "device_type": "schlage_lock",
      "errors": [],
      "is_managed": false,
      "location": {
        "location_name": "Front Door",
        "timezone": "America/New_York"
      },
      "properties": {
        "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
        "battery": { "level": 1, "status": "full" },
        "battery_level": 1,
        "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
        "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
        "manufacturer": "schlage",
        "model": {
          "accessory_keypad_supported": true,
          "can_connect_accessory_keypad": true,
          "display_name": "Front Door",
          "has_built_in_keypad": false,
          "manufacturer_display_name": "Schlage",
          "offline_access_codes_supported": false,
          "online_access_codes_supported": true
        },
        "name": "Front Door",
        "offline_access_codes_enabled": false,
        "online": true,
        "online_access_codes_enabled": true
      },
      "warnings": [],
      "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.unmanaged.list(created_before="2025-01-01T00:00:00.000Z", limit=50)
```

#### Output:

```python
[UnmanagedDevice(can_program_offline_access_codes=false, can_program_online_access_codes=true, can_remotely_lock=true, can_remotely_unlock=true, can_simulate_connection=false, can_simulate_disconnection=true, can_simulate_removal=true, capabilities_supported=["access_code","lock"], connected_account_id="c1a3967f-24a1-4220-a9c7-7fa97c1d5603", created_at="2024-06-16T16:54:17.946342Z", device_id="f4f40e75-86fc-4896-b958-e1c7e092b2cf", device_type="schlage_lock", errors=[], is_managed=false, location={"location_name":"Front Door","timezone":"America/New_York"}, properties={"accessory_keypad":{"battery":{"level":1},"is_connected":true},"battery":{"level":1,"status":"full"},"battery_level":1,"image_alt_text":"Schlage Sense Smart Deadbolt with Camelot Trim, Front","image_url":"https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128","manufacturer":"schlage","model":{"accessory_keypad_supported":true,"can_connect_accessory_keypad":true,"display_name":"Front Door","has_built_in_keypad":false,"manufacturer_display_name":"Schlage","offline_access_codes_supported":false,"online_access_codes_supported":true},"name":"Front Door","offline_access_codes_enabled":false,"online":true,"online_access_codes_enabled":true}, warnings=[], workspace_id="3cd6ba1c-8a60-4c24-b487-07bf6c0b755b")]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.unmanaged.list(created_before: "2025-01-01T00:00:00.000Z", limit: 50)
```

#### Output:

```ruby
[{"can_program_offline_access_codes" => false,"can_program_online_access_codes" => true,"can_remotely_lock" => true,"can_remotely_unlock" => true,"can_simulate_connection" => false,"can_simulate_disconnection" => true,"can_simulate_removal" => true,"capabilities_supported" => ["access_code","lock"],"connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603","created_at" => "2024-06-16T16:54:17.946342Z","device_id" => "f4f40e75-86fc-4896-b958-e1c7e092b2cf","device_type" => "schlage_lock","errors" => [],"is_managed" => false,"location" => {"location_name":"Front Door","timezone":"America/New_York"},"properties" => {"accessory_keypad":{"battery":{"level":1},"is_connected":true},"battery":{"level":1,"status":"full"},"battery_level":1,"image_alt_text":"Schlage Sense Smart Deadbolt with Camelot Trim, Front","image_url":"https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128","manufacturer":"schlage","model":{"accessory_keypad_supported":true,"can_connect_accessory_keypad":true,"display_name":"Front Door","has_built_in_keypad":false,"manufacturer_display_name":"Schlage","offline_access_codes_supported":false,"online_access_codes_supported":true},"name":"Front Door","offline_access_codes_enabled":false,"online":true,"online_access_codes_enabled":true},"warnings" => [],"workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"}]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->unmanaged->list(
    created_before: "2025-01-01T00:00:00.000Z",
    limit: 50,
);
```

#### Output:

```php
[
    [
        "can_program_offline_access_codes" => false,
        "can_program_online_access_codes" => true,
        "can_remotely_lock" => true,
        "can_remotely_unlock" => true,
        "can_simulate_connection" => false,
        "can_simulate_disconnection" => true,
        "can_simulate_removal" => true,
        "capabilities_supported" => ["access_code", "lock"],
        "connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
        "created_at" => "2024-06-16T16:54:17.946342Z",
        "device_id" => "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
        "device_type" => "schlage_lock",
        "errors" => [],
        "is_managed" => false,
        "location" => [
            "location_name" => "Front Door",
            "timezone" => "America/New_York",
        ],
        "properties" => [
            "accessory_keypad" => [
                "battery" => ["level" => 1],
                "is_connected" => true,
            ],
            "battery" => ["level" => 1, "status" => "full"],
            "battery_level" => 1,
            "image_alt_text" =>
                "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
            "image_url" =>
                "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
            "manufacturer" => "schlage",
            "model" => [
                "accessory_keypad_supported" => true,
                "can_connect_accessory_keypad" => true,
                "display_name" => "Front Door",
                "has_built_in_keypad" => false,
                "manufacturer_display_name" => "Schlage",
                "offline_access_codes_supported" => false,
                "online_access_codes_supported" => true,
            ],
            "name" => "Front Door",
            "offline_access_codes_enabled" => false,
            "online" => true,
            "online_access_codes_enabled" => true,
        ],
        "warnings" => [],
        "workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices unmanaged list --created_before "2025-01-01T00:00:00.000Z" --limit 50
```

#### Output:

```seam_cli
[
  {
    "can_program_offline_access_codes": false,
    "can_program_online_access_codes": true,
    "can_remotely_lock": true,
    "can_remotely_unlock": true,
    "can_simulate_connection": false,
    "can_simulate_disconnection": true,
    "can_simulate_removal": true,
    "capabilities_supported": ["access_code", "lock"],
    "connected_account_id": "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    "created_at": "2024-06-16T16:54:17.946342Z",
    "device_id": "f4f40e75-86fc-4896-b958-e1c7e092b2cf",
    "device_type": "schlage_lock",
    "errors": [],
    "is_managed": false,
    "location": {
      "location_name": "Front Door",
      "timezone": "America/New_York"
    },
    "properties": {
      "accessory_keypad": { "battery": { "level": 1 }, "is_connected": true },
      "battery": { "level": 1, "status": "full" },
      "battery_level": 1,
      "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
      "manufacturer": "schlage",
      "model": {
        "accessory_keypad_supported": true,
        "can_connect_accessory_keypad": true,
        "display_name": "Front Door",
        "has_built_in_keypad": false,
        "manufacturer_display_name": "Schlage",
        "offline_access_codes_supported": false,
        "online_access_codes_supported": true
      },
      "name": "Front Door",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
]
```
{% endtab %}

{% endtabs %}
