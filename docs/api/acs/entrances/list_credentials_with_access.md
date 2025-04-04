# List Credentials with Access to an Entrance

```
POST /acs/entrances/list_credentials_with_access ⇒ { acs_credentials: [acs_credential, …] }
```

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md) with access to a specified [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.entrances.listCredentialsWithAccess({
  acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Response

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

{% tab title="Python" %}
#### Request

```python
seam.acs.entrances.list_credentials_with_access(
    acs_entrance_id="123e4567-e89b-12d3-a456-426614174000"
)
```

#### Response

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
#### Request

```ruby
seam.acs.entrances.list_credentials_with_access(
  acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000",
)
```

#### Response

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
#### Request

```php
<?php
$seam->acs->entrances->list_credentials_with_access(
    acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Response

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

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs entrances list-credentials-with-access --acs_entrance_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Response

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

{% tab title="Go" %}
#### Request

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

#### Response

```go
[]api.AcsCredential{api.AcsCredential{AcsCredentialId: "123e4567-e89b-12d3-a456-426614174000", AcsUserId: "123e4567-e89b-12d3-a456-426614174000", AcsCredentialPoolId: "123e4567-e89b-12d3-a456-426614174000", AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", ParentAcsCredentialId: "123e4567-e89b-12d3-a456-426614174000", DisplayName: "text", Code: "text", CardNumber: "text", IsIssued: false, IssuedAt: "2024-10-15T12:54:04.155Z", AccessMethod: "code", ExternalType: "pti_card", ExternalTypeDisplayName: "text", CreatedAt: "2024-10-15T12:54:04.155Z", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", StartsAt: "text", EndsAt: "text", IsMultiPhoneSyncCredential: false, IsLatestDesiredStateSyncedWithProvider: false, LatestDesiredStateSyncedWithProviderAt: "2024-10-15T12:54:04.155Z"}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_entrance_id`

Format: `UUID`
Required: Yes

***

### `include_if`

Format: `List`
Item format: `Enum`
Required: No

Possible enum values:
- `visionline_metadata.is_valid`

***

## Return Type

Array<[acs\_credential](./)>
