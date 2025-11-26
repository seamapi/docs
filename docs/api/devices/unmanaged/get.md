# Get an Unmanaged Device

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a specified [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md).

An unmanaged device has a limited set of visible properties and a subset of supported events. You cannot control an unmanaged device. Any [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) on an unmanaged device are unmanaged. To control an unmanaged device with Seam, [convert it to a managed device](../../../core-concepts/devices/managed-and-unmanaged-devices.md#convert-an-unmanaged-device-to-managed).

You must specify either `device_id` or `name`.


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified unmanaged device, using an ID.

#### Code:

```javascript
await seam.devices.unmanaged.get({
  device_id: "9f871e41-0ce4-4825-8d99-9653df4cd525",
});
```

#### Output:

```javascript
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
  "device_id": "9f871e41-0ce4-4825-8d99-9653df4cd525",
  "device_type": "schlage_lock",
  "errors": [],
  "is_managed": false,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
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
    "name": "My Unmanaged Device",
    "offline_access_codes_enabled": false,
    "online": true,
    "online_access_codes_enabled": true
  },
  "warnings": [],
  "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified unmanaged device, using an ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/unmanaged/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "9f871e41-0ce4-4825-8d99-9653df4cd525"
}
EOF
```

#### Output:

```curl
{
  "device": {
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
    "device_id": "9f871e41-0ce4-4825-8d99-9653df4cd525",
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
      "name": "My Unmanaged Device",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified unmanaged device, using an ID.

#### Code:

```python
seam.devices.unmanaged.get(device_id="9f871e41-0ce4-4825-8d99-9653df4cd525")
```

#### Output:

```python
UnmanagedDevice(
    can_program_offline_access_codes=false,
    can_program_online_access_codes=true,
    can_remotely_lock=true,
    can_remotely_unlock=true,
    can_simulate_connection=false,
    can_simulate_disconnection=true,
    can_simulate_removal=true,
    capabilities_supported=["access_code", "lock"],
    connected_account_id="c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    created_at="2025-06-16T16:54:17.946342Z",
    device_id="9f871e41-0ce4-4825-8d99-9653df4cd525",
    device_type="schlage_lock",
    errors=[],
    is_managed=false,
    location={"location_name": "Front Door", "timezone": "America/New_York"},
    properties={
        "accessory_keypad": {"battery": {"level": 1}, "is_connected": true},
        "battery": {"level": 1, "status": "full"},
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
            "online_access_codes_supported": true,
        },
        "name": "My Unmanaged Device",
        "offline_access_codes_enabled": false,
        "online": true,
        "online_access_codes_enabled": true,
    },
    warnings=[],
    workspace_id="3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified unmanaged device, using an ID.

#### Code:

```ruby
seam.devices.unmanaged.get(device_id: "9f871e41-0ce4-4825-8d99-9653df4cd525")
```

#### Output:

```ruby
{
  "can_program_offline_access_codes" => false,
  "can_program_online_access_codes" => true,
  "can_remotely_lock" => true,
  "can_remotely_unlock" => true,
  "can_simulate_connection" => false,
  "can_simulate_disconnection" => true,
  "can_simulate_removal" => true,
  "capabilities_supported" => %w[access_code lock],
  "connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
  "created_at" => "2025-06-16T16:54:17.946342Z",
  "device_id" => "9f871e41-0ce4-4825-8d99-9653df4cd525",
  "device_type" => "schlage_lock",
  "errors" => [],
  "is_managed" => false,
  "location" => {
    location_name: "Front Door",
    timezone: "America/New_York",
  },
  "properties" => {
    accessory_keypad: {
      battery: {
        level: 1,
      },
      is_connected: true,
    },
    battery: {
      level: 1,
      status: "full",
    },
    battery_level: 1,
    image_alt_text: "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
    image_url:
      "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
    manufacturer: "schlage",
    model: {
      accessory_keypad_supported: true,
      can_connect_accessory_keypad: true,
      display_name: "Front Door",
      has_built_in_keypad: false,
      manufacturer_display_name: "Schlage",
      offline_access_codes_supported: false,
      online_access_codes_supported: true,
    },
    name: "My Unmanaged Device",
    offline_access_codes_enabled: false,
    online: true,
    online_access_codes_enabled: true,
  },
  "warnings" => [],
  "workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified unmanaged device, using an ID.

#### Code:

```php
$seam->devices->unmanaged->get(
    device_id: "9f871e41-0ce4-4825-8d99-9653df4cd525",
);
```

#### Output:

```php
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
    "device_id" => "9f871e41-0ce4-4825-8d99-9653df4cd525",
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
        "name" => "My Unmanaged Device",
        "offline_access_codes_enabled" => false,
        "online" => true,
        "online_access_codes_enabled" => true,
    ],
    "warnings" => [],
    "workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified unmanaged device, using an ID.

#### Code:

```seam_cli
seam devices unmanaged get --device_id "9f871e41-0ce4-4825-8d99-9653df4cd525"
```

#### Output:

```seam_cli
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
  "device_id": "9f871e41-0ce4-4825-8d99-9653df4cd525",
  "device_type": "schlage_lock",
  "errors": [],
  "is_managed": false,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
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
    "name": "My Unmanaged Device",
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


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String*

ID of the unmanaged device that you want to get.

---

**`name`** *String*

Name of the unmanaged device that you want to get.

---


## Response

{% hint style="success" %}
Returns:
[unmanaged\_device](.)**

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


### Get an unmanaged device by name

Returns a specified unmanaged device, using a name.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.unmanaged.get({ name: "My Unmanaged Device" });
```

#### Output:

```javascript
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
  "device_id": "9f871e41-0ce4-4825-8d99-9653df4cd525",
  "device_type": "schlage_lock",
  "errors": [],
  "is_managed": false,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
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
    "name": "My Unmanaged Device",
    "offline_access_codes_enabled": false,
    "online": true,
    "online_access_codes_enabled": true
  },
  "warnings": [],
  "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/unmanaged/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "name": "My Unmanaged Device"
}
EOF
```

#### Output:

```curl
{
  "device": {
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
    "device_id": "9f871e41-0ce4-4825-8d99-9653df4cd525",
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
      "name": "My Unmanaged Device",
      "offline_access_codes_enabled": false,
      "online": true,
      "online_access_codes_enabled": true
    },
    "warnings": [],
    "workspace_id": "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.unmanaged.get(name="My Unmanaged Device")
```

#### Output:

```python
UnmanagedDevice(
    can_program_offline_access_codes=false,
    can_program_online_access_codes=true,
    can_remotely_lock=true,
    can_remotely_unlock=true,
    can_simulate_connection=false,
    can_simulate_disconnection=true,
    can_simulate_removal=true,
    capabilities_supported=["access_code", "lock"],
    connected_account_id="c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
    created_at="2025-06-16T16:54:17.946342Z",
    device_id="9f871e41-0ce4-4825-8d99-9653df4cd525",
    device_type="schlage_lock",
    errors=[],
    is_managed=false,
    location={"location_name": "Front Door", "timezone": "America/New_York"},
    properties={
        "accessory_keypad": {"battery": {"level": 1}, "is_connected": true},
        "battery": {"level": 1, "status": "full"},
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
            "online_access_codes_supported": true,
        },
        "name": "My Unmanaged Device",
        "offline_access_codes_enabled": false,
        "online": true,
        "online_access_codes_enabled": true,
    },
    warnings=[],
    workspace_id="3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.unmanaged.get(name: "My Unmanaged Device")
```

#### Output:

```ruby
{
  "can_program_offline_access_codes" => false,
  "can_program_online_access_codes" => true,
  "can_remotely_lock" => true,
  "can_remotely_unlock" => true,
  "can_simulate_connection" => false,
  "can_simulate_disconnection" => true,
  "can_simulate_removal" => true,
  "capabilities_supported" => %w[access_code lock],
  "connected_account_id" => "c1a3967f-24a1-4220-a9c7-7fa97c1d5603",
  "created_at" => "2025-06-16T16:54:17.946342Z",
  "device_id" => "9f871e41-0ce4-4825-8d99-9653df4cd525",
  "device_type" => "schlage_lock",
  "errors" => [],
  "is_managed" => false,
  "location" => {
    location_name: "Front Door",
    timezone: "America/New_York",
  },
  "properties" => {
    accessory_keypad: {
      battery: {
        level: 1,
      },
      is_connected: true,
    },
    battery: {
      level: 1,
      status: "full",
    },
    battery_level: 1,
    image_alt_text: "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
    image_url:
      "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
    manufacturer: "schlage",
    model: {
      accessory_keypad_supported: true,
      can_connect_accessory_keypad: true,
      display_name: "Front Door",
      has_built_in_keypad: false,
      manufacturer_display_name: "Schlage",
      offline_access_codes_supported: false,
      online_access_codes_supported: true,
    },
    name: "My Unmanaged Device",
    offline_access_codes_enabled: false,
    online: true,
    online_access_codes_enabled: true,
  },
  "warnings" => [],
  "workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->unmanaged->get(name: "My Unmanaged Device");
```

#### Output:

```php
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
    "device_id" => "9f871e41-0ce4-4825-8d99-9653df4cd525",
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
        "name" => "My Unmanaged Device",
        "offline_access_codes_enabled" => false,
        "online" => true,
        "online_access_codes_enabled" => true,
    ],
    "warnings" => [],
    "workspace_id" => "3cd6ba1c-8a60-4c24-b487-07bf6c0b755b",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices unmanaged get --name "My Unmanaged Device"
```

#### Output:

```seam_cli
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
  "device_id": "9f871e41-0ce4-4825-8d99-9653df4cd525",
  "device_type": "schlage_lock",
  "errors": [],
  "is_managed": false,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
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
    "name": "My Unmanaged Device",
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
