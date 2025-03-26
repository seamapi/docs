# Get a Credential

```
POST /acs/credentials/get ⇒ { acs_credential }
```

Returns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% tabs %}
{% tab title="JavaScript TEST" %}
#### Request

```javascript
await seam.acs.credentials.get({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
});
```

#### Response

```javascript
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "display_name": "Multi Phone Sync Credential",
  "code": null,
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_method": "mobile_key",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-12T03:56:22.396Z",
  "is_multi_phone_sync_credential": true
}
```
{% endtab %}

{% tab title="Python TEST" %}
#### Request

```python
seam.acs.credentials.get(acs_credential_id="66666666-6666-6666-6666-666666666666")
```

#### Response

```python
AcsCredential(
    acs_credential_id="99999999-9999-9999-9999-999999999999",
    acs_user_id="33333333-3333-3333-3333-333333333333",
    display_name="Multi Phone Sync Credential",
    code=None,
    acs_system_id="11111111-1111-1111-1111-111111111111",
    access_method="mobile_key",
    workspace_id="00000000-0000-0000-0000-000000000000",
    created_at="2024-04-12T03:56:22.396Z",
    is_multi_phone_sync_credential=true,
)
```
{% endtab %}

{% tab title="Ruby TEST" %}
#### Request

```ruby
seam.acs.credentials.get(acs_credential_id: "66666666-6666-6666-6666-666666666666")
```

#### Response

```ruby
{
  "acs_credential_id" => "99999999-9999-9999-9999-999999999999",
  "acs_user_id" => "33333333-3333-3333-3333-333333333333",
  "display_name" => "Multi Phone Sync Credential",
  "code" => nil,
  "acs_system_id" => "11111111-1111-1111-1111-111111111111",
  "access_method" => "mobile_key",
  "workspace_id" => "00000000-0000-0000-0000-000000000000",
  "created_at" => "2024-04-12T03:56:22.396Z",
  "is_multi_phone_sync_credential" => true,
}
```
{% endtab %}

{% tab title="PHP TEST" %}
#### Request

```php
<?php
$seam->acs->credentials->get(
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
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
    "acs_system_id" => "11111111-1111-1111-1111-111111111111",
    "access_method" => "mobile_key",
    "workspace_id" => "00000000-0000-0000-0000-000000000000",
    "created_at" => "2024-04-12T03:56:22.396Z",
    "is_multi_phone_sync_credential" => true,
];
```
{% endtab %}

{% tab title="Seam CLI TEST" %}
#### Request

```seam_cli
seam acs credentials get --acs_credential_id "66666666-6666-6666-6666-666666666666"
```

#### Response

```seam_cli
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "display_name": "Multi Phone Sync Credential",
  "code": null,
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_method": "mobile_key",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "created_at": "2024-04-12T03:56:22.396Z",
  "is_multi_phone_sync_credential": true
}
```
{% endtab %}

{% tab title="Go TEST" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import credentials "github.com/seamapi/go/credentials"

func main() {
	client.Acs.Credentials.Get(
		context.Background(),
		credentials.CredentialsGetRequest{
			AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
		},
	)
}
```

#### Response

```go
api.AcsCredential{AcsCredentialId: "99999999-9999-9999-9999-999999999999", AcsUserId: "33333333-3333-3333-3333-333333333333", DisplayName: "Multi Phone Sync Credential", Code: nil, AcsSystemId: "11111111-1111-1111-1111-111111111111", AccessMethod: "mobile_key", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2024-04-12T03:56:22.396Z", IsMultiPhoneSyncCredential: true}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_credential_id`

Type: `string`
Required: Yes

ID of the desired credential.

***

## Return Type

[acs\_credential](./)
