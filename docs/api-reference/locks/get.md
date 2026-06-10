# Get a Lock

- [Request Parameters](#request-parameters)
- [Response](#response)

{% hint style="warning" %}
**Deprecated**. Use `/devices/get` instead.
{% endhint %}

Returns a specified [lock](https://docs.seam.co/latest/capability-guides/smart-locks).


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

ID of the lock that you want to get.

---

**`name`** *String*

Name of the lock that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[device](./../devices)**

{% endhint %}


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
  "space_ids": [],
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
