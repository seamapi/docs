# List Credentials

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/credentials/list ⇒ { acs_credentials: [acs_credential, …] }
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

<table>
<tr><th style="width:25%">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>acs_system_id</code></strong> <i>String</i></td>
<td>

ID of the access control system for which you want to retrieve all credentials.
</td></tr>
<tr><td><strong><code>acs_user_id</code></strong> <i>String</i></td>
<td>

ID of the ACS user for which you want to retrieve all credentials.
</td></tr>
<tr><td><strong><code>created_before</code></strong> <i>String</i></td>
<td>

Date and time, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, before which events to return were created.
</td></tr>
<tr><td><strong><code>is_multi_phone_sync_credential</code></strong> <i>Boolean</i></td>
<td>

Indicates whether you want to retrieve only multi-phone sync credentials or non-multi-phone sync credentials.
</td></tr>
<tr><td><strong><code>limit</code></strong> <i>Number</i></td>
<td>

Number of credentials to return.
</td></tr>
<tr><td><strong><code>user_identity_id</code></strong> <i>String</i></td>
<td>

ID of the user identity for which you want to retrieve all credentials.
</td></tr>
</table>

## Response

Array of [acs\_credentials](./)
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
  
### List credentials

Filter the list of returned credentials by `acs_user_id`, `acs_system_id`, or `user_identity_id`. You can also include `is_multi_phone_sync_credential`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.credentials.list({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  is_multi_phone_sync_credential: true,
});
```

#### Output

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
#### Code

```python
seam.acs.credentials.list(
    acs_user_id="33333333-3333-3333-3333-333333333333",
    acs_system_id="11111111-1111-1111-1111-111111111111",
    user_identity_id="22222222-2222-2222-2222-222222222222",
    is_multi_phone_sync_credential=true,
)
```

#### Output

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
#### Code

```ruby
seam.acs.credentials.list(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  is_multi_phone_sync_credential: true,
)
```

#### Output

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
#### Code

```php
<?php
$seam->acs->credentials->list(
    acs_user_id: "33333333-3333-3333-3333-333333333333",
    acs_system_id: "11111111-1111-1111-1111-111111111111",
    user_identity_id: "22222222-2222-2222-2222-222222222222",
    is_multi_phone_sync_credential: true
);
```

#### Output

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
#### Code

```seam_cli
seam acs credentials list --acs_user_id "33333333-3333-3333-3333-333333333333" --acs_system_id "11111111-1111-1111-1111-111111111111" --user_identity_id "22222222-2222-2222-2222-222222222222" --is_multi_phone_sync_credential true
```

#### Output

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
#### Code

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

#### Output

```go
[]api.AcsCredential{api.AcsCredential{AcsCredentialId: "99999999-9999-9999-9999-999999999999", AcsUserId: "33333333-3333-3333-3333-333333333333", DisplayName: "Multi Phone Sync Credential", Code: nil, AcsSystemId: "11111111-1111-1111-1111-111111111111", AccessMethod: "mobile_key", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2024-04-12T03:56:22.396Z", IsMultiPhoneSyncCredential: true}}
```
{% endtab %}

{% endtabs %}


