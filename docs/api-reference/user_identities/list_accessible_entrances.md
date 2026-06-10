# List Accessible Entrances for a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [ACS entrances](https://docs.seam.co/latest/api/acs/entrances) accessible to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity). This includes entrances derived from the access grants assigned to the user identity and entrances accessible through ACS users linked to the user identity.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to retrieve all accessible entrances.

---


## Response

{% hint style="success" %}
Returns:
**Array of [acs\_entrances](./../acs/entrances)**

{% endhint %}


{% tabs %}
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
  },
  "warnings": []
}
```
{% endtab %}
{% endtabs %}
