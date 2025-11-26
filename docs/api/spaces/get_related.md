# Get related Space resources
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets all related resources for one or more Spaces.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`exclude`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>connected_accounts</code>
- <code>acs_systems</code>
</details>

---

**`include`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>connected_accounts</code>
- <code>acs_systems</code>
</details>

---

**`space_ids`** *Array* *of UUIDs*

IDs of the spaces that you want to get along with their related resources.

---

**`space_keys`** *Array* *of Strings*

Keys of the spaces that you want to get along with their related resources.

---


## Response

{% hint style="success" %}
Returns:
**Batch response containing:
- `spaces`: Array of [spaces](.)
- `devices`: Array of [devices](./../devices)
- `acs_entrances`: Array of [acs\_entrances](./../acs/entrances)
- `connected_accounts`: Array of [connected\_accounts](./../connected_accounts)
- `acs_systems`: Array of [acs\_systems](./../acs/systems)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "created_at": "2025-06-16T16:54:17.946600Z",
  "display_name": "My Space",
  "name": "My Space",
  "space_id": "5afeb047-3277-4102-b8c4-99edf05b91d2",
  "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
}
```
{% endtab %}
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
{% tab title="JSON" %}



```json
{
  "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
  "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
  "created_at": "2025-06-15T16:54:17.946495Z",
  "display_name": "Main Entrance",
  "errors": [],
  "space_ids": [],
  "visionline_metadata": {
    "door_category": "guest",
    "door_name": "Main Entrance",
    "profiles": [
      {
        "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "visionline_door_profile_type": "BLE"
      }
    ]
  }
}
```
{% endtab %}
{% tab title="JSON" %}



```json
{
  "account_type": "salto_space",
  "account_type_display_name": "Salto Space",
  "automatically_manage_new_devices": true,
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at": "2025-06-15T16:54:17.946329Z",
  "custom_metadata": { "id": "internalId1" },
  "errors": [],
  "user_identifier": {
    "api_url": "https://example.com/api",
    "email": "jane_doe@example.com",
    "exclusive": true,
    "phone": "+1555551004",
    "username": "jane_doe"
  },
  "warnings": [],
  "accepted_capabilities": ["lock"]
}
```
{% endtab %}
{% tab title="JSON" %}



```json
{
  "acs_access_group_count": 5,
  "acs_system_id": "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
  "acs_user_count": 20,
  "connected_account_id": "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
  "connected_account_ids": ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
  "created_at": "2025-06-15T16:54:17.946425Z",
  "default_credential_manager_acs_system_id": "5dde2def-3507-44f5-9521-7ca96aa4cd18",
  "errors": [],
  "external_type": "salto_ks_site",
  "external_type_display_name": "Salto KS site",
  "image_alt_text": "Salto KS site Logo",
  "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
  "is_credential_manager": false,
  "location": { "time_zone": "America/New_York" },
  "name": "My ACS System",
  "warnings": [],
  "workspace_id": "172920be-1f4d-45d4-8519-ecc3bdee638f"
}
```
{% endtab %}
{% endtabs %}
