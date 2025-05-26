# List ACS Systems Associated with a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
POST /user_identities/list_acs_systems ⇒ { acs_systems: [acs_system, …] }
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

ID of the user identity for which you want to retrieve all access control systems.

---


## Response

Array of [acs\_systems](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_system
}
```
{% endtab %}
{% endtabs %}

---

## Examples

### List ACS systems associated with a user identity

Specify the desired `user_identity_id`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.userIdentities.listAcsSystems({
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
});
```

#### Output

```javascript
[
  {
    "acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "name": "Assa Abloy Credential Service",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-05T07:16:51.971Z",
    "system_type": "assa_abloy_credential_service",
    "system_type_display_name": "Assa Abloy Credential Service",
    "external_type": "assa_abloy_credential_service",
    "external_type_display_name": "Assa Abloy Credential Service",
    "connected_account_ids": ["dc08066f-d9b8-42f0-9c4b-c781cd900153"]
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.user_identities.list_acs_systems(
    user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f"
)
```

#### Output

```python
[
    AcsSystem(
        acs_system_id="6737e186-8d54-48ce-a7da-a0be4d252172",
        name="Assa Abloy Credential Service",
        workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        created_at="2024-01-05T07:16:51.971Z",
        system_type="assa_abloy_credential_service",
        system_type_display_name="Assa Abloy Credential Service",
        external_type="assa_abloy_credential_service",
        external_type_display_name="Assa Abloy Credential Service",
        connected_account_ids=["dc08066f-d9b8-42f0-9c4b-c781cd900153"],
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.user_identities.list_acs_systems(user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f")
```

#### Output

```ruby
[
  {
    "acs_system_id" => "6737e186-8d54-48ce-a7da-a0be4d252172",
    "name" => "Assa Abloy Credential Service",
    "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at" => "2024-01-05T07:16:51.971Z",
    "system_type" => "assa_abloy_credential_service",
    "system_type_display_name" => "Assa Abloy Credential Service",
    "external_type" => "assa_abloy_credential_service",
    "external_type_display_name" => "Assa Abloy Credential Service",
    "connected_account_ids" => ["dc08066f-d9b8-42f0-9c4b-c781cd900153"],
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->user_identities->list_acs_systems(
    user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
);
```

#### Output

```php
<?php
[
    [
        "acs_system_id" => "6737e186-8d54-48ce-a7da-a0be4d252172",
        "name" => "Assa Abloy Credential Service",
        "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        "created_at" => "2024-01-05T07:16:51.971Z",
        "system_type" => "assa_abloy_credential_service",
        "system_type_display_name" => "Assa Abloy Credential Service",
        "external_type" => "assa_abloy_credential_service",
        "external_type_display_name" => "Assa Abloy Credential Service",
        "connected_account_ids" => ["dc08066f-d9b8-42f0-9c4b-c781cd900153"],
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam user-identities list-acs-systems --user_identity_id "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
```

#### Output

```seam_cli
[
  {
    "acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "name": "Assa Abloy Credential Service",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-05T07:16:51.971Z",
    "system_type": "assa_abloy_credential_service",
    "system_type_display_name": "Assa Abloy Credential Service",
    "external_type": "assa_abloy_credential_service",
    "external_type_display_name": "Assa Abloy Credential Service",
    "connected_account_ids": ["dc08066f-d9b8-42f0-9c4b-c781cd900153"]
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.UserIdentities.ListAcsSystems(
		context.Background(),
		api.UserIdentitiesListAcsSystemsRequest{
			UserIdentityId: api.String("5c945ab5-c75e-4bcb-8e5f-9410061c401f"),
		},
	)
}
```

#### Output

```go
[]api.AcsSystem{api.AcsSystem{AcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172", Name: "Assa Abloy Credential Service", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-01-05T07:16:51.971Z", SystemType: "assa_abloy_credential_service", SystemTypeDisplayName: "Assa Abloy Credential Service", ExternalType: "assa_abloy_credential_service", ExternalTypeDisplayName: "Assa Abloy Credential Service", ConnectedAccountIds: []string{"dc08066f-d9b8-42f0-9c4b-c781cd900153"}}}
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/list_acs_systems" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
}
EOF
```

#### Output

```curl
{
  "acs_systems": [
    {
      "acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
      "name": "Assa Abloy Credential Service",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2024-01-05T07:16:51.971Z",
      "system_type": "assa_abloy_credential_service",
      "system_type_display_name": "Assa Abloy Credential Service",
      "external_type": "assa_abloy_credential_service",
      "external_type_display_name": "Assa Abloy Credential Service",
      "connected_account_ids": ["dc08066f-d9b8-42f0-9c4b-c781cd900153"]
    }
  ]
}
```
{% endtab %}

{% endtabs %}


