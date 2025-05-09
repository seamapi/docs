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
seam.acs.credentials.create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "mobile_key",
  allowed_acs_entrance_ids: %w[
    55555555-5555-5555-5555-555555555555
    55555555-5555-5555-5555-000000000000
  ],
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  is_multi_phone_sync_credential: true,
  starts_at: "2024-03-01T10:40:00Z",
  ends_at: "2024-03-04T10:40:00Z",
)
```

#### Response

```ruby
{
  "acs_credential_id" => "99999999-9999-9999-9999-999999999999",
  "acs_user_id" => "33333333-3333-3333-3333-333333333333",
  "display_name" => "Multi Phone Sync Credential",
  "code" => nil,
  "acs_system_id" => "88888888-8888-8888-8888-888888888888",
  "access_method" => "mobile_key",
  "workspace_id" => "00000000-0000-0000-0000-000000000000",
  "created_at" => "2024-04-12T03:56:22.396Z",
  "is_multi_phone_sync_credential" => true,
}
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

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_method`

Format: `Enum`
Required: Yes

Access method for the new credential. Supported values: `code`, `card`, `mobile_key`.

Possible enum values:
- `code`
- `card`
- `mobile_key`

***

### `acs_user_id`

Format: `UUID`
Required: Yes

ID of the ACS user to whom the new credential belongs.

***

### `allowed_acs_entrance_ids`

Format: `List`
Item format: `UUID`
Required: No

Set of IDs of the [entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md) for which the new credential grants access.

***

### `assa_abloy_vostio_metadata`

Format: `Object`
Required: No

Vostio-specific metadata for the new credential.

<details>

<summary><code>auto_join</code> Format: <code>Boolean</code></summary>
</details>

<details>

<summary><code>join_all_guest_acs_entrances</code> Format: <code>Boolean</code></summary>
</details>

<details>

<summary><code>override_all_guest_acs_entrances</code> Format: <code>Boolean</code></summary>
</details>

<details>

<summary><code>override_guest_acs_entrance_ids</code> Format: <code>List</code></summary>
</details>

***

### `code`

Format: `String`
Required: No

Access (PIN) code for the new credential. There may be manufacturer-specific code restrictions. For details, see the applicable [device or system integration guide](../../../device-and-system-integration-guides/overview.md).

***

### `credential_manager_acs_system_id`

Format: `UUID`
Required: No

ACS system ID of the credential manager for the new credential.

***

### `ends_at`

Format: `Datetime`
Required: No

Date and time at which the validity of the new credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

***

### `is_multi_phone_sync_credential`

Format: `Boolean`
Required: No

Indicates whether the new credential is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).

***

### `salto_space_metadata`

Format: `Object`
Required: No

Salto Space-specific metadata for the new credential.

<details>

<summary><code>assign_new_key</code> Format: <code>Boolean</code></summary>
</details>

<details>

<summary><code>update_current_key</code> Format: <code>Boolean</code></summary>
</details>

***

### `starts_at`

Format: `Datetime`
Required: No

Date and time at which the validity of the new credential starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

***

### `visionline_metadata`

Format: `Object`
Required: No

Visionline-specific metadata for the new credential.

<details>

<summary><code>assa_abloy_credential_service_mobile_endpoint_id</code> Format: <code>UUID</code></summary>

{% hint style="warning" %}
**Deprecated**. Read-only endpoint references moved to `endpoint`.
{% endhint %}
</details>

<details>

<summary><code>auto_join</code> Format: <code>Boolean</code></summary>
</details>

<details>

<summary><code>card_format</code> Format: <code>Enum</code></summary>

Possible enum values:
- `TLCode`
- `rfid48`
</details>

<details>

<summary><code>card_function_type</code> Format: <code>Enum</code></summary>

Possible enum values:
- `guest`
- `staff`
</details>

<details>

<summary><code>is_override_key</code> Format: <code>Boolean</code></summary>

{% hint style="warning" %}
**Deprecated**. Use `override` instead.
{% endhint %}
</details>

<details>

<summary><code>joiner_acs_credential_ids</code> Format: <code>List</code></summary>
</details>

<details>

<summary><code>override</code> Format: <code>Boolean</code></summary>
</details>

***

## Return Type

[acs\_credential](./)
