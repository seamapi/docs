# Get related Access Method resources

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets all related resources for one or more Access Methods.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method_ids`** *Array* *of UUIDs* (Required)

IDs of the access methods that you want to get along with their related resources.

---

**`exclude`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>access_grants</code>
- <code>access_methods</code>
- <code>instant_keys</code>
- <code>client_sessions</code>
- <code>acs_credentials</code>
</details>

---

**`include`** *Array* *of Enums*
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>spaces</code>
- <code>devices</code>
- <code>acs_entrances</code>
- <code>access_grants</code>
- <code>access_methods</code>
- <code>instant_keys</code>
- <code>client_sessions</code>
- <code>acs_credentials</code>
</details>

---


## Response

{% hint style="success" %}
Returns:
batch response
- `spaces`: Array of [spaces](./../spaces)
- `devices`: Array of [devices](./../devices)
- `acs_entrances`: Array of [acs\_entrances](./../acs/entrances)
- `access_grants`: Array of [access\_grants](./../access_grants)
- `access_methods`: Array of [access\_methods](.)
- `instant_keys`: Array of [instant\_keys](./../instant_keys)
- `client_sessions`: Array of [client\_sessions](./../client_sessions)
- `acs_credentials`: Array of [acs\_credentials](./../acs/credentials)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "spaces": [
    {
      "created_at": "2025-06-16T16:54:17.946600Z",
      "display_name": "My Space",
      "name": "My Space",
      "space_id": "5afeb047-3277-4102-b8c4-99edf05b91d2",
      "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
    }
  ],
  "devices": [
    {
      "can_program_online_access_codes": true,
      "can_remotely_lock": true,
      "can_remotely_unlock": true,
      "capabilities_supported": [
        "access_code",
        "lock"
      ],
      "connected_account_id": "8e3a4f1b-2c7d-4a9e-8b5f-3d2c1a0b9e8f",
      "created_at": "2025-03-27T02:08:16.418Z",
      "space_ids": [],
      "custom_metadata": {
        "id": "internalId1"
      },
      "device_id": "a69569e1-133b-4a9d-b883-018641bfe543",
      "device_type": "schlage_lock",
      "display_name": "FRONT DOOR",
      "errors": [],
      "is_managed": true,
      "location": {
        "location_name": "Front Door",
        "timezone": "America/New_York"
      },
      "nickname": "Front Door",
      "properties": {
        "appearance": {
          "name": "FRONT DOOR"
        },
        "battery": {
          "level": 0.48,
          "status": "good"
        },
        "battery_level": 0.48,
        "code_constraints": [
          {
            "constraint_type": "name_length",
            "max_length": 9
          }
        ],
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
        "supported_code_lengths": [
          4,
          5,
          6,
          7,
          8
        ],
        "supports_backup_access_code_pool": true,
        "supports_offline_access_codes": false
      },
      "warnings": [],
      "workspace_id": "5d7f2e1a-9c8b-4f3e-8d2c-1a0b9e8f7c6d"
    }
  ],
  "acs_entrances": [
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
  ],
  "access_grants": [
    {
      "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code Credential",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
          ]
        },
        {
          "display_name": "Card Credential",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": [
            "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
          ]
        },
        {
          "display_name": "Mobile Key Credential",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": [
            "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
          ]
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "e3d736c1-540d-4d10-83e5-9a4e135453b4",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
    }
  ],
  "access_methods": [
    {
      "access_method_id": "27d8ad77-55c2-4e20-b5b3-43555926f0e8",
      "created_at": "2025-06-14T16:54:17.946612Z",
      "display_name": "My Card",
      "is_card_encoding_required": true,
      "issued_at": "2025-06-14T16:54:17.946612Z",
      "mode": "card",
      "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
    }
  ],
  "instant_keys": [
    {
      "client_session_id": "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
      "created_at": "2025-06-14T16:54:17.946559Z",
      "expires_at": "2025-06-16T16:54:17.946559Z",
      "instant_key_id": "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "user_identity_id": "e7a94acb-bd8a-4462-b6fb-8612d35cd7c3",
      "workspace_id": "4d1c24b2-781e-4d1a-8d77-15249ad57c8a"
    }
  ],
  "client_sessions": [
    {
      "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
      "connect_webview_ids": [
        "550e8400-e29b-41d4-a716-446655440000"
      ],
      "connected_account_ids": [
        "f47ac10b-58cc-4372-a567-0e02b2c3d479"
      ],
      "created_at": "2025-06-15T16:54:17.946309Z",
      "customer_id": "77eccc4e-c8bc-4c7d-b83c-cb853ed3bade",
      "device_count": 1,
      "expires_at": "2025-06-17T16:54:17.946309Z",
      "token": "seam_cst1891oqCmB_6dBwV8PJ2Fsoe9dWYVyMfVHq",
      "user_identifier_key": "user_id_1",
      "user_identity_id": "a6e93f84-565e-47d7-8908-1ca71ada373c",
      "user_identity_ids": [
        "a6e93f84-565e-47d7-8908-1ca71ada373c"
      ],
      "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
    }
  ],
  "acs_credentials": [
    {
      "access_method": "card",
      "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
      "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
      "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
      "connected_account_id": "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
      "card_number": "164d29dc4a09b65f",
      "created_at": "2025-06-16T16:54:17.946514Z",
      "display_name": "Guest Lock 1, Vingcard Lock 2",
      "ends_at": "2025-07-12T16:54:17.946512Z",
      "errors": [],
      "external_type": "visionline_card",
      "external_type_display_name": "Visionline Card",
      "is_issued": true,
      "is_latest_desired_state_synced_with_provider": true,
      "is_managed": true,
      "is_multi_phone_sync_credential": false,
      "issued_at": "2025-06-16T16:54:17.946512Z",
      "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
      "starts_at": "2025-07-10T16:54:17.946512Z",
      "visionline_metadata": {
        "card_function_type": "guest",
        "card_id": "5",
        "common_acs_entrance_ids": [
          "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
        ],
        "credential_id": "15",
        "guest_acs_entrance_ids": [
          "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
        ],
        "is_valid": true
      },
      "warnings": [],
      "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
    }
  ]
}
```
{% endtab %}
{% endtabs %}
