# List ACS Systems Associated with a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [access systems](https://docs.seam.co/latest/capability-guides/access-systems) associated with a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all access systems associated with a specified user identity.

#### Code:

```javascript
await seam.userIdentities.listAcsSystems({
  user_identity_id: "77e0347d-35ac-4a21-962b-e757a446b47f",
});
```

#### Output:

```javascript
[
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
    "name": "My Access System",
    "warnings": [],
    "workspace_id": "172920be-1f4d-45d4-8519-ecc3bdee638f"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all access systems associated with a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/list_acs_systems" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "77e0347d-35ac-4a21-962b-e757a446b47f"
}
EOF
```

#### Output:

```curl
{
  "acs_systems": [
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
      "name": "My Access System",
      "warnings": [],
      "workspace_id": "172920be-1f4d-45d4-8519-ecc3bdee638f"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all access systems associated with a specified user identity.

#### Code:

```python
seam.user_identities.list_acs_systems(
    user_identity_id="77e0347d-35ac-4a21-962b-e757a446b47f"
)
```

#### Output:

```python
[
    AcsSystem(
        acs_access_group_count=5,
        acs_system_id="dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
        acs_user_count=20,
        connected_account_id="a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
        connected_account_ids=["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
        created_at="2025-06-15T16:54:17.946425Z",
        default_credential_manager_acs_system_id="5dde2def-3507-44f5-9521-7ca96aa4cd18",
        errors=[],
        external_type="salto_ks_site",
        external_type_display_name="Salto KS site",
        image_alt_text="Salto KS site Logo",
        image_url="https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
        is_credential_manager=false,
        location={"time_zone": "America/New_York"},
        name="My Access System",
        warnings=[],
        workspace_id="172920be-1f4d-45d4-8519-ecc3bdee638f",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all access systems associated with a specified user identity.

#### Code:

```ruby
seam.user_identities.list_acs_systems(user_identity_id: "77e0347d-35ac-4a21-962b-e757a446b47f")
```

#### Output:

```ruby
[
  {
    "acs_access_group_count" => 5,
    "acs_system_id" => "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
    "acs_user_count" => 20,
    "connected_account_id" => "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
    "connected_account_ids" => ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
    "created_at" => "2025-06-15T16:54:17.946425Z",
    "default_credential_manager_acs_system_id" => "5dde2def-3507-44f5-9521-7ca96aa4cd18",
    "errors" => [],
    "external_type" => "salto_ks_site",
    "external_type_display_name" => "Salto KS site",
    "image_alt_text" => "Salto KS site Logo",
    "image_url" =>
      "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
    "is_credential_manager" => false,
    "location" => {
      time_zone: "America/New_York",
    },
    "name" => "My Access System",
    "warnings" => [],
    "workspace_id" => "172920be-1f4d-45d4-8519-ecc3bdee638f",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all access systems associated with a specified user identity.

#### Code:

```php
$seam->user_identities->list_acs_systems(
    user_identity_id: "77e0347d-35ac-4a21-962b-e757a446b47f",
);
```

#### Output:

```php
[
    [
        "acs_access_group_count" => 5,
        "acs_system_id" => "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
        "acs_user_count" => 20,
        "connected_account_id" => "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
        "connected_account_ids" => ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
        "created_at" => "2025-06-15T16:54:17.946425Z",
        "default_credential_manager_acs_system_id" =>
            "5dde2def-3507-44f5-9521-7ca96aa4cd18",
        "errors" => [],
        "external_type" => "salto_ks_site",
        "external_type_display_name" => "Salto KS site",
        "image_alt_text" => "Salto KS site Logo",
        "image_url" =>
            "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
        "is_credential_manager" => false,
        "location" => ["time_zone" => "America/New_York"],
        "name" => "My Access System",
        "warnings" => [],
        "workspace_id" => "172920be-1f4d-45d4-8519-ecc3bdee638f",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all access systems associated with a specified user identity.

#### Code:

```seam_cli
seam user-identities list-acs-systems --user_identity_id "77e0347d-35ac-4a21-962b-e757a446b47f"
```

#### Output:

```seam_cli
[
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
    "name": "My Access System",
    "warnings": [],
    "workspace_id": "172920be-1f4d-45d4-8519-ecc3bdee638f"
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

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to retrieve all access systems.

---


## Response

{% hint style="success" %}
Returns:
**Array of [acs\_systems](./../acs/systems)**

{% endhint %}


{% tabs %}
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
