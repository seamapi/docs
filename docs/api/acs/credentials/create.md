# Create a Credential for an ACS User

Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
POST /acs/credentials/create ⇒ { acs_credential }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`access_method`** *String* (Required)

Access method for the new credential. Supported values: `code`, `card`, `mobile_key`.

---

**`acs_user_id`** *String* (Required)

ID of the ACS user to whom the new credential belongs.

---

**`allowed_acs_entrance_ids`** *Array* *of UUIDs*

Set of IDs of the [entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md) for which the new credential grants access.

---

**`assa_abloy_vostio_metadata`** *Object*

Vostio-specific metadata for the new credential.

---

**`code`** *String*

Access (PIN) code for the new credential. There may be manufacturer-specific code restrictions. For details, see the applicable [device or system integration guide](../../../device-and-system-integration-guides/overview.md).

---

**`credential_manager_acs_system_id`** *String*

ACS system ID of the credential manager for the new credential.

---

**`ends_at`** *String*

Date and time at which the validity of the new credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`is_multi_phone_sync_credential`** *Boolean*

Indicates whether the new credential is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).

---

**`salto_space_metadata`** *Object*

Salto Space-specific metadata for the new credential.

---

**`starts_at`** *String*

Date and time at which the validity of the new credential starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`visionline_metadata`** *Object*

Visionline-specific metadata for the new credential.

---


## Return Type

[acs\_credential](./)

---

## Examples
  
### Create a credential for an ACS user

Specify the `acs_user_id` and `access_method` to create a new credential. You can also specify additional parameters, depending on the `access_method`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

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

#### Output

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
#### Code

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

#### Output

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
#### Code

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

#### Output

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
#### Code

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

#### Output

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
#### Code

```seam_cli
seam acs credentials create --acs_user_id "33333333-3333-3333-3333-333333333333" --access_method "mobile_key" --allowed_acs_entrance_ids ["55555555-5555-5555-5555-555555555555","55555555-5555-5555-5555-000000000000"] --credential_manager_acs_system_id "88888888-8888-8888-8888-888888888888" --is_multi_phone_sync_credential true --starts_at "2024-03-01T10:40:00Z" --ends_at "2024-03-04T10:40:00Z"
```

#### Output

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
#### Code

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

#### Output

```go
api.AcsCredential{AcsCredentialId: "99999999-9999-9999-9999-999999999999", AcsUserId: "33333333-3333-3333-3333-333333333333", DisplayName: "Multi Phone Sync Credential", Code: nil, AcsSystemId: "88888888-8888-8888-8888-888888888888", AccessMethod: "mobile_key", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2024-04-12T03:56:22.396Z", IsMultiPhoneSyncCredential: true}
```
{% endtab %}

{% endtabs %}


