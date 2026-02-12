# List ACS Systems

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [access systems](https://docs.seam.co/latest/capability-guides/access-systems).

To filter the list of returned access systems by a specific connected account ID, include the `connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the response includes all access systems connected to your workspace.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all access systems.

#### Code:

```javascript
await seam.acs.systems.list({
  connected_account_id: "2283a842-27c5-474a-bd0e-4c959274efa0",
});
```

#### Output:

```javascript
[
  {
    "acs_access_group_count": 5,
    "acs_system_id": "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
    "acs_user_count": 20,
    "connected_account_id": "2283a842-27c5-474a-bd0e-4c959274efa0",
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

Returns a list of all access systems.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/systems/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "connected_account_id": "2283a842-27c5-474a-bd0e-4c959274efa0"
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
      "connected_account_id": "2283a842-27c5-474a-bd0e-4c959274efa0",
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

Returns a list of all access systems.

#### Code:

```python
seam.acs.systems.list(connected_account_id="2283a842-27c5-474a-bd0e-4c959274efa0")
```

#### Output:

```python
[AcsSystem(acs_access_group_count=5, acs_system_id="dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7", acs_user_count=20, connected_account_id="2283a842-27c5-474a-bd0e-4c959274efa0", connected_account_ids=["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"], created_at="2025-06-15T16:54:17.946425Z", default_credential_manager_acs_system_id="5dde2def-3507-44f5-9521-7ca96aa4cd18", errors=[], external_type="salto_ks_site", external_type_display_name="Salto KS site", image_alt_text="Salto KS site Logo", image_url="https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128", is_credential_manager=false, location={"time_zone":"America/New_York"}, name="My Access System", warnings=[], workspace_id="172920be-1f4d-45d4-8519-ecc3bdee638f")]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all access systems.

#### Code:

```ruby
seam.acs.systems.list(connected_account_id: "2283a842-27c5-474a-bd0e-4c959274efa0")
```

#### Output:

```ruby
[{"acs_access_group_count" => 5,"acs_system_id" => "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7","acs_user_count" => 20,"connected_account_id" => "2283a842-27c5-474a-bd0e-4c959274efa0","connected_account_ids" => ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],"created_at" => "2025-06-15T16:54:17.946425Z","default_credential_manager_acs_system_id" => "5dde2def-3507-44f5-9521-7ca96aa4cd18","errors" => [],"external_type" => "salto_ks_site","external_type_display_name" => "Salto KS site","image_alt_text" => "Salto KS site Logo","image_url" => "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128","is_credential_manager" => false,"location" => {"time_zone":"America/New_York"},"name" => "My Access System","warnings" => [],"workspace_id" => "172920be-1f4d-45d4-8519-ecc3bdee638f"}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all access systems.

#### Code:

```php
$seam->acs->systems->list(
    connected_account_id: "2283a842-27c5-474a-bd0e-4c959274efa0",
);
```

#### Output:

```php
[
    [
        "acs_access_group_count" => 5,
        "acs_system_id" => "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
        "acs_user_count" => 20,
        "connected_account_id" => "2283a842-27c5-474a-bd0e-4c959274efa0",
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

Returns a list of all access systems.

#### Code:

```seam_cli
seam acs systems list --connected_account_id "2283a842-27c5-474a-bd0e-4c959274efa0"
```

#### Output:

```seam_cli
[
  {
    "acs_access_group_count": 5,
    "acs_system_id": "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
    "acs_user_count": 20,
    "connected_account_id": "2283a842-27c5-474a-bd0e-4c959274efa0",
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

**`connected_account_id`** *String*

ID of the connected account by which you want to filter the list of access systems.

---

**`customer_key`** *String*

Customer key for which you want to list access systems.

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
