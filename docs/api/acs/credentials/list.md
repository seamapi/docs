# List Credentials

```
POST /acs/credentials/list ⇒ { acs_credentials: [acs_credential, …] }
```

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.credentials.list({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  is_multi_phone_sync_credential: true,
});
```

#### Response

```javascript
[
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
]
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.acs.credentials.list(
    acs_user_id="33333333-3333-3333-3333-333333333333",
    acs_system_id="11111111-1111-1111-1111-111111111111",
    user_identity_id="22222222-2222-2222-2222-222222222222",
    is_multi_phone_sync_credential=true,
)
```

#### Response

```python
[
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
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.credentials.list(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  is_multi_phone_sync_credential: true,
)
```

#### Response

```ruby
[
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->credentials->list(
    acs_user_id: "33333333-3333-3333-3333-333333333333",
    acs_system_id: "11111111-1111-1111-1111-111111111111",
    user_identity_id: "22222222-2222-2222-2222-222222222222",
    is_multi_phone_sync_credential: true
);
```

#### Response

```php
<?php
[
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs credentials list --acs_user_id "33333333-3333-3333-3333-333333333333" --acs_system_id "11111111-1111-1111-1111-111111111111" --user_identity_id "22222222-2222-2222-2222-222222222222" --is_multi_phone_sync_credential true
```

#### Response

```seam_cli
[
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
]
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import credentials "github.com/seamapi/go/credentials"

func main() {
	client.Acs.Credentials.List(
		context.Background(),
		credentials.CredentialsListRequest{
			AcsUserId:                  api.String("33333333-3333-3333-3333-333333333333"),
			AcsSystemId:                api.String("11111111-1111-1111-1111-111111111111"),
			UserIdentityId:             api.String("22222222-2222-2222-2222-222222222222"),
			IsMultiPhoneSyncCredential: api.Bool(true),
		},
	)
}
```

#### Response

```go
[]api.AcsCredential{api.AcsCredential{AcsCredentialId: "99999999-9999-9999-9999-999999999999", AcsUserId: "33333333-3333-3333-3333-333333333333", DisplayName: "Multi Phone Sync Credential", Code: nil, AcsSystemId: "11111111-1111-1111-1111-111111111111", AccessMethod: "mobile_key", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2024-04-12T03:56:22.396Z", IsMultiPhoneSyncCredential: true}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

None

## Return Type

Array<[acs\_credential](./)>
