# Create a Credential for an ACS User

```
POST /acs/credentials/create ⇒ { acs_credential }
```

Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "mobile_key",
  allowed_acs_entrance_ids: [
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000",
  ],
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  is_multi_phone_sync_credential: true,
  starts_at: "2024-03-01T10:40:00Z",
  ends_at: "2024-03-04T10:40:00Z",
});
```

#### Response

```javascript
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "display_name": "Multi Phone Sync Credential",
  "code": null,
  "acs_system_id": "88888888-8888-8888-8888-888888888888",
  "access_method": "mobile_key",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-12T03:56:22.396Z",
  "is_multi_phone_sync_credential": true
}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.acs.credentials.create(
    acs_user_id="33333333-3333-3333-3333-333333333333",
    access_method="mobile_key",
    allowed_acs_entrance_ids=[
        "55555555-5555-5555-5555-555555555555",
        "55555555-5555-5555-5555-000000000000",
    ],
    credential_manager_acs_system_id="88888888-8888-8888-8888-888888888888",
    is_multi_phone_sync_credential=true,
    starts_at="2024-03-01T10:40:00Z",
    ends_at="2024-03-04T10:40:00Z",
)
```

#### Response

```python
AcsCredential(
    acs_credential_id="99999999-9999-9999-9999-999999999999",
    acs_user_id="33333333-3333-3333-3333-333333333333",
    display_name="Multi Phone Sync Credential",
    code=None,
    acs_system_id="88888888-8888-8888-8888-888888888888",
    access_method="mobile_key",
    workspace_id="00000000-0000-0000-0000-000000000000",
    created_at="2024-04-12T03:56:22.396Z",
    is_multi_phone_sync_credential=true,
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.credentials.create(acs_user_id: "33333333-3333-3333-3333-333333333333", access_method: "mobile_key", allowed_acs_entrance_ids: ["55555555-5555-5555-5555-555555555555", "55555555-5555-5555-5555-000000000000"], credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888", is_multi_phone_sync_credential: true, starts_at: "2024-03-01T10:40:00Z", ends_at: "2024-03-04T10:40:00Z")
```

#### Response

```ruby
{"acs_credential_id" => "99999999-9999-9999-9999-999999999999", "acs_user_id" => "33333333-3333-3333-3333-333333333333", "display_name" => "Multi Phone Sync Credential", "code" => nil, "acs_system_id" => "88888888-8888-8888-8888-888888888888", "access_method" => "mobile_key", "workspace_id" => "00000000-0000-0000-0000-000000000000", "created_at" => "2024-04-12T03:56:22.396Z", "is_multi_phone_sync_credential" => true}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->credentials->create(
    acs_user_id: "33333333-3333-3333-3333-333333333333",
    access_method: "mobile_key",
    allowed_acs_entrance_ids: [
        "55555555-5555-5555-5555-555555555555",
        "55555555-5555-5555-5555-000000000000",
    ],
    credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
    is_multi_phone_sync_credential: true,
    starts_at: "2024-03-01T10:40:00Z",
    ends_at: "2024-03-04T10:40:00Z"
);
```

#### Response

```php
<?php
[
    "acs_credential_id" => "99999999-9999-9999-9999-999999999999",
    "acs_user_id" => "33333333-3333-3333-3333-333333333333",
    "display_name" => "Multi Phone Sync Credential",
    "code" => null,
    "acs_system_id" => "88888888-8888-8888-8888-888888888888",
    "access_method" => "mobile_key",
    "workspace_id" => "00000000-0000-0000-0000-000000000000",
    "created_at" => "2024-04-12T03:56:22.396Z",
    "is_multi_phone_sync_credential" => true,
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs credentials create --acs_user_id "33333333-3333-3333-3333-333333333333" --access_method "mobile_key" --allowed_acs_entrance_ids ["55555555-5555-5555-5555-555555555555","55555555-5555-5555-5555-000000000000"] --credential_manager_acs_system_id "88888888-8888-8888-8888-888888888888" --is_multi_phone_sync_credential true --starts_at "2024-03-01T10:40:00Z" --ends_at "2024-03-04T10:40:00Z"
```

#### Response

```seam_cli
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "display_name": "Multi Phone Sync Credential",
  "code": null,
  "acs_system_id": "88888888-8888-8888-8888-888888888888",
  "access_method": "mobile_key",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-12T03:56:22.396Z",
  "is_multi_phone_sync_credential": true
}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import credentials "github.com/seamapi/go/credentials"

func main() {
	client.Acs.Credentials.Create(
		context.Background(),
		credentials.CredentialsCreateRequest{
			AcsUserId:                    api.String("33333333-3333-3333-3333-333333333333"),
			AccessMethod:                 api.String("mobile_key"),
			AllowedAcsEntranceIds:        [2]string{api.String("55555555-5555-5555-5555-555555555555"), api.String("55555555-5555-5555-5555-000000000000")},
			CredentialManagerAcsSystemId: api.String("88888888-8888-8888-8888-888888888888"),
			IsMultiPhoneSyncCredential:   api.Bool(true),
			StartsAt:                     api.String("2024-03-01T10:40:00Z"),
			EndsAt:                       api.String("2024-03-04T10:40:00Z"),
		},
	)
}
```

#### Response

```go
api.AcsCredential{AcsCredentialId: "99999999-9999-9999-9999-999999999999", AcsUserId: "33333333-3333-3333-3333-333333333333", DisplayName: "Multi Phone Sync Credential", Code: nil, AcsSystemId: "88888888-8888-8888-8888-888888888888", AccessMethod: "mobile_key", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2024-04-12T03:56:22.396Z", IsMultiPhoneSyncCredential: true}
```
{% endtab %}

{% endtabs %}

## Authentication

This endpoint supports the following authentication methods:

<table>
  <tbody>
    <tr>
      <td>Personal Access Token</td>
    </tr>
    <tr>
      <td>Console Session Token</td>
    </tr>
    <tr>
      <td>API Key</td>
    </tr>
  </tbody>
</table>

## Request Parameters

### `access_method`

Type: `string`
Required: Yes

Access method for the new credential. Supported values: `code`, `card`, `mobile_key`.

***

### `acs_user_id`

Type: `string`
Required: Yes

ID of the ACS user to whom the new credential belongs.

***

### `allowed_acs_entrance_ids`

Type: `array`
Required: No

Set of IDs of the [entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md) for which the new credential grants access.

***

### `assa_abloy_vostio_metadata`

Type: `object`
Required: No

Vostio-specific metadata for the new credential.

***

### `code`

Type: `string`
Required: No

Access (PIN) code for the new credential. There may be manufacturer-specific code restrictions. For details, see the applicable [device or system integration guide](../../../device-and-system-integration-guides/overview.md).

***

### `credential_manager_acs_system_id`

Type: `string`
Required: No

ACS system ID of the credential manager for the new credential.

***

### `ends_at`

Type: `string`
Required: No

Date and time at which the validity of the new credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

***

### `is_multi_phone_sync_credential`

Type: `boolean`
Required: No

Indicates whether the new credential is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).

***

### `starts_at`

Type: `string`
Required: No

Date and time at which the validity of the new credential starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

***

### `visionline_metadata`

Type: `object`
Required: No

Visionline-specific metadata for the new credential.

***

## Return Type

[acs\_credential](./)
