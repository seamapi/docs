# List Compatible Credential Manager ACS Systems

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all credential manager systems that are compatible with a specified [access system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the access system for which you want to retrieve all compatible credential manager systems by including the corresponding `acs_system_id` in the request body.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all credential manager systems that are compatible with a specified access system.

#### Code:

```javascript
await seam.acs.systems.listCompatibleCredentialManagerAcsSystems({
  acs_system_id: "82456f4c-9627-4a27-a426-1b3c50c9871b",
});
```

#### Output:

```javascript
[
  {
    "acs_access_group_count": 5,
    "acs_system_id": "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
    "connected_account_id": "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
    "connected_account_ids": ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
    "created_at": "2025-06-15T16:54:17.946425Z",
    "errors": [],
    "image_alt_text": "Salto KS site Logo",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
    "is_credential_manager": true,
    "location": { "time_zone": "America/New_York" },
    "name": "My Credential Manager",
    "warnings": [],
    "workspace_id": "172920be-1f4d-45d4-8519-ecc3bdee638f"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all credential manager systems that are compatible with a specified access system.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/systems/list_compatible_credential_manager_acs_systems" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "82456f4c-9627-4a27-a426-1b3c50c9871b"
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
      "connected_account_id": "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
      "connected_account_ids": ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
      "created_at": "2025-06-15T16:54:17.946425Z",
      "errors": [],
      "image_alt_text": "Salto KS site Logo",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
      "is_credential_manager": true,
      "location": { "time_zone": "America/New_York" },
      "name": "My Credential Manager",
      "warnings": [],
      "workspace_id": "172920be-1f4d-45d4-8519-ecc3bdee638f"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all credential manager systems that are compatible with a specified access system.

#### Code:

```python
seam.acs.systems.list_compatible_credential_manager_acs_systems(
    acs_system_id="82456f4c-9627-4a27-a426-1b3c50c9871b"
)
```

#### Output:

```python
[
    AcsSystem(
        acs_access_group_count=5,
        acs_system_id="dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
        connected_account_id="a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
        connected_account_ids=["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
        created_at="2025-06-15T16:54:17.946425Z",
        errors=[],
        image_alt_text="Salto KS site Logo",
        image_url="https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
        is_credential_manager=true,
        location={"time_zone": "America/New_York"},
        name="My Credential Manager",
        warnings=[],
        workspace_id="172920be-1f4d-45d4-8519-ecc3bdee638f",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all credential manager systems that are compatible with a specified access system.

#### Code:

```ruby
seam.acs.systems.list_compatible_credential_manager_acs_systems(
  acs_system_id: "82456f4c-9627-4a27-a426-1b3c50c9871b",
)
```

#### Output:

```ruby
[
  {
    "acs_access_group_count" => 5,
    "acs_system_id" => "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
    "connected_account_id" => "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
    "connected_account_ids" => ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
    "created_at" => "2025-06-15T16:54:17.946425Z",
    "errors" => [],
    "image_alt_text" => "Salto KS site Logo",
    "image_url" =>
      "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
    "is_credential_manager" => true,
    "location" => {
      time_zone: "America/New_York",
    },
    "name" => "My Credential Manager",
    "warnings" => [],
    "workspace_id" => "172920be-1f4d-45d4-8519-ecc3bdee638f",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all credential manager systems that are compatible with a specified access system.

#### Code:

```php
$seam->acs->systems->list_compatible_credential_manager_acs_systems(
    acs_system_id: "82456f4c-9627-4a27-a426-1b3c50c9871b",
);
```

#### Output:

```php
[
    [
        "acs_access_group_count" => 5,
        "acs_system_id" => "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
        "connected_account_id" => "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
        "connected_account_ids" => ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
        "created_at" => "2025-06-15T16:54:17.946425Z",
        "errors" => [],
        "image_alt_text" => "Salto KS site Logo",
        "image_url" =>
            "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
        "is_credential_manager" => true,
        "location" => ["time_zone" => "America/New_York"],
        "name" => "My Credential Manager",
        "warnings" => [],
        "workspace_id" => "172920be-1f4d-45d4-8519-ecc3bdee638f",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all credential manager systems that are compatible with a specified access system.

#### Code:

```seam_cli
seam acs systems list-compatible-credential-manager-acs-systems --acs_system_id "82456f4c-9627-4a27-a426-1b3c50c9871b"
```

#### Output:

```seam_cli
[
  {
    "acs_access_group_count": 5,
    "acs_system_id": "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
    "connected_account_id": "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
    "connected_account_ids": ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
    "created_at": "2025-06-15T16:54:17.946425Z",
    "errors": [],
    "image_alt_text": "Salto KS site Logo",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
    "is_credential_manager": true,
    "location": { "time_zone": "America/New_York" },
    "name": "My Credential Manager",
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_system_id`** *String* (Required)

ID of the access system for which you want to retrieve all compatible credential manager systems.

---


## Response

{% hint style="success" %}
Returns:
**Array of [acs\_systems](.)**

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
