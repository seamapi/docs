# List Credentials with Access to an Entrance

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md) with access to a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `acs_entrance_id` to return all credentials that grant access to the specified entrance.

#### Code

```javascript
await seam.acs.entrances.listCredentialsWithAccess({
  acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Output

```javascript
[
  {
    "acs_credential_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_credential_pool_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
    "parent_acs_credential_id": "123e4567-e89b-12d3-a456-426614174000",
    "display_name": "text",
    "code": "text",
    "card_number": "text",
    "is_issued": false,
    "issued_at": "2024-10-15T12:54:04.155Z",
    "access_method": "code",
    "external_type": "pti_card",
    "external_type_display_name": "text",
    "created_at": "2024-10-15T12:54:04.155Z",
    "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
    "starts_at": "text",
    "ends_at": "text",
    "is_multi_phone_sync_credential": false,
    "is_latest_desired_state_synced_with_provider": false,
    "latest_desired_state_synced_with_provider_at": "2024-10-15T12:54:04.155Z"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Specify the `acs_entrance_id` to return all credentials that grant access to the specified entrance.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/list_credentials_with_access" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_entrance_id": "123e4567-e89b-12d3-a456-426614174000"
}
EOF
```

#### Output

```curl
{
  "acs_credentials": [
    {
      "acs_credential_id": "123e4567-e89b-12d3-a456-426614174000",
      "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
      "acs_credential_pool_id": "123e4567-e89b-12d3-a456-426614174000",
      "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
      "parent_acs_credential_id": "123e4567-e89b-12d3-a456-426614174000",
      "display_name": "text",
      "code": "text",
      "card_number": "text",
      "is_issued": false,
      "issued_at": "2024-10-15T12:54:04.155Z",
      "access_method": "code",
      "external_type": "pti_card",
      "external_type_display_name": "text",
      "created_at": "2024-10-15T12:54:04.155Z",
      "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
      "starts_at": "text",
      "ends_at": "text",
      "is_multi_phone_sync_credential": false,
      "is_latest_desired_state_synced_with_provider": false,
      "latest_desired_state_synced_with_provider_at": "2024-10-15T12:54:04.155Z"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `acs_entrance_id` to return all credentials that grant access to the specified entrance.

#### Code

```python
seam.acs.entrances.list_credentials_with_access(
    acs_entrance_id="123e4567-e89b-12d3-a456-426614174000"
)
```

#### Output

```python
[
    AcsCredential(
        acs_credential_id="123e4567-e89b-12d3-a456-426614174000",
        acs_user_id="123e4567-e89b-12d3-a456-426614174000",
        acs_credential_pool_id="123e4567-e89b-12d3-a456-426614174000",
        acs_system_id="123e4567-e89b-12d3-a456-426614174000",
        parent_acs_credential_id="123e4567-e89b-12d3-a456-426614174000",
        display_name="text",
        code="text",
        card_number="text",
        is_issued=false,
        issued_at="2024-10-15T12:54:04.155Z",
        access_method="code",
        external_type="pti_card",
        external_type_display_name="text",
        created_at="2024-10-15T12:54:04.155Z",
        workspace_id="123e4567-e89b-12d3-a456-426614174000",
        starts_at="text",
        ends_at="text",
        is_multi_phone_sync_credential=false,
        is_latest_desired_state_synced_with_provider=false,
        latest_desired_state_synced_with_provider_at="2024-10-15T12:54:04.155Z",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `acs_entrance_id` to return all credentials that grant access to the specified entrance.

#### Code

```ruby
seam.acs.entrances.list_credentials_with_access(
  acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000",
)
```

#### Output

```ruby
[
  {
    "acs_credential_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_user_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_credential_pool_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
    "parent_acs_credential_id" => "123e4567-e89b-12d3-a456-426614174000",
    "display_name" => "text",
    "code" => "text",
    "card_number" => "text",
    "is_issued" => false,
    "issued_at" => "2024-10-15T12:54:04.155Z",
    "access_method" => "code",
    "external_type" => "pti_card",
    "external_type_display_name" => "text",
    "created_at" => "2024-10-15T12:54:04.155Z",
    "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
    "starts_at" => "text",
    "ends_at" => "text",
    "is_multi_phone_sync_credential" => false,
    "is_latest_desired_state_synced_with_provider" => false,
    "latest_desired_state_synced_with_provider_at" => "2024-10-15T12:54:04.155Z",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Specify the `acs_entrance_id` to return all credentials that grant access to the specified entrance.

#### Code

```php
<?php
$seam->acs->entrances->list_credentials_with_access(
    acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Output

```php
<?php
[
    [
        "acs_credential_id" => "123e4567-e89b-12d3-a456-426614174000",
        "acs_user_id" => "123e4567-e89b-12d3-a456-426614174000",
        "acs_credential_pool_id" => "123e4567-e89b-12d3-a456-426614174000",
        "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
        "parent_acs_credential_id" => "123e4567-e89b-12d3-a456-426614174000",
        "display_name" => "text",
        "code" => "text",
        "card_number" => "text",
        "is_issued" => false,
        "issued_at" => "2024-10-15T12:54:04.155Z",
        "access_method" => "code",
        "external_type" => "pti_card",
        "external_type_display_name" => "text",
        "created_at" => "2024-10-15T12:54:04.155Z",
        "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
        "starts_at" => "text",
        "ends_at" => "text",
        "is_multi_phone_sync_credential" => false,
        "is_latest_desired_state_synced_with_provider" => false,
        "latest_desired_state_synced_with_provider_at" =>
            "2024-10-15T12:54:04.155Z",
    ],
];
```
{% endtab %}

{% tab title="Go" %}

Specify the `acs_entrance_id` to return all credentials that grant access to the specified entrance.

#### Code

```go
package main

import api "github.com/seamapi/go"
import entrances "github.com/seamapi/go/entrances"

func main() {
	client.Acs.Entrances.ListCredentialsWithAccess(
		context.Background(),
		entrances.EntrancesListCredentialsWithAccessRequest{
			AcsEntranceId: api.String("123e4567-e89b-12d3-a456-426614174000"),
		},
	)
}
```

#### Output

```go
[]api.AcsCredential{api.AcsCredential{AcsCredentialId: "123e4567-e89b-12d3-a456-426614174000", AcsUserId: "123e4567-e89b-12d3-a456-426614174000", AcsCredentialPoolId: "123e4567-e89b-12d3-a456-426614174000", AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", ParentAcsCredentialId: "123e4567-e89b-12d3-a456-426614174000", DisplayName: "text", Code: "text", CardNumber: "text", IsIssued: false, IssuedAt: "2024-10-15T12:54:04.155Z", AccessMethod: "code", ExternalType: "pti_card", ExternalTypeDisplayName: "text", CreatedAt: "2024-10-15T12:54:04.155Z", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", StartsAt: "text", EndsAt: "text", IsMultiPhoneSyncCredential: false, IsLatestDesiredStateSyncedWithProvider: false, LatestDesiredStateSyncedWithProviderAt: "2024-10-15T12:54:04.155Z"}}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the `acs_entrance_id` to return all credentials that grant access to the specified entrance.

#### Code

```seam_cli
seam acs entrances list-credentials-with-access --acs_entrance_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Output

```seam_cli
[
  {
    "acs_credential_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_credential_pool_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
    "parent_acs_credential_id": "123e4567-e89b-12d3-a456-426614174000",
    "display_name": "text",
    "code": "text",
    "card_number": "text",
    "is_issued": false,
    "issued_at": "2024-10-15T12:54:04.155Z",
    "access_method": "code",
    "external_type": "pti_card",
    "external_type_display_name": "text",
    "created_at": "2024-10-15T12:54:04.155Z",
    "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
    "starts_at": "text",
    "ends_at": "text",
    "is_multi_phone_sync_credential": false,
    "is_latest_desired_state_synced_with_provider": false,
    "latest_desired_state_synced_with_provider_at": "2024-10-15T12:54:04.155Z"
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

**`acs_entrance_id`** *String* (Required)

````
ID of the entrance for which you want to list all credentials that grant access.
````

---

**`include_if`** *Array* *of Enums*

````
Conditions that credentials must meet to be included in the returned list.
````
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>visionline_metadata.is_valid</code>
</details>

---


## Response

Array of [acs\_credentials](./)


---

## Examples

