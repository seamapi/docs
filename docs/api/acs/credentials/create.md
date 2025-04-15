# Create a Credential for an ACS User

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/credentials/create ⇒ { acs_credential }
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

<table>
<tr><th width="25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>access_method</code></strong> <i>String</i> (Required)</td>
<td>

Access method for the new credential. Supported values: `code`, `card`, `mobile_key`.

---
</td></tr>
<tr><td><strong><code>acs_user_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the ACS user to whom the new credential belongs.

---
</td></tr>
<tr><td><strong><code>allowed_acs_entrance_ids</code></strong> <i>Array</i> <i>of UUIDs</i></td>
<td>

Set of IDs of the [entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md) for which the new credential grants access.

---
</td></tr>
<tr><td><strong><code>assa_abloy_vostio_metadata</code></strong> <i>Object</i></td>
<td>

Vostio-specific metadata for the new credential.

---
</td></tr>
<tr><td><strong><code>code</code></strong> <i>String</i></td>
<td>

Access (PIN) code for the new credential. There may be manufacturer-specific code restrictions. For details, see the applicable [device or system integration guide](../../../device-and-system-integration-guides/overview.md).

---
</td></tr>
<tr><td><strong><code>credential_manager_acs_system_id</code></strong> <i>String</i></td>
<td>

ACS system ID of the credential manager for the new credential.

---
</td></tr>
<tr><td><strong><code>ends_at</code></strong> <i>String</i></td>
<td>

Date and time at which the validity of the new credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---
</td></tr>
<tr><td><strong><code>is_multi_phone_sync_credential</code></strong> <i>Boolean</i></td>
<td>

Indicates whether the new credential is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).

---
</td></tr>
<tr><td><strong><code>salto_space_metadata</code></strong> <i>Object</i></td>
<td>

Salto Space-specific metadata for the new credential.

---
</td></tr>
<tr><td><strong><code>starts_at</code></strong> <i>String</i></td>
<td>

Date and time at which the validity of the new credential starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---
</td></tr>
<tr><td><strong><code>visionline_metadata</code></strong> <i>Object</i></td>
<td>

Visionline-specific metadata for the new credential.

---
</td></tr>
</table>

## Response

[acs\_credential](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_credential
}
```
{% endtab %}
{% endtabs %}

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


