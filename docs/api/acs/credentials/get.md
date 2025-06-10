# Get a Credential

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/credentials/get ⇒ { acs_credential }
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

**`acs_credential_id`** *String* (Required)

ID of the credential that you want to get.

---


## Response

[acs\_credential](./)


---

## Examples

### Get a credential

Specify the `acs_credential_id` of the credential that you want to retrieve.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.credentials.get({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
});
```

#### Output

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

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}
EOF
```

#### Output

```curl
{
  "acs_credential": {
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
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.acs.credentials.get(acs_credential_id="66666666-6666-6666-6666-666666666666")
```

#### Output

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

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.credentials.get(acs_credential_id: "66666666-6666-6666-6666-666666666666")
```

#### Output

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

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->credentials->get(
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
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
    "acs_system_id" => "11111111-1111-1111-1111-111111111111",
    "access_method" => "mobile_key",
    "workspace_id" => "00000000-0000-0000-0000-000000000000",
    "created_at" => "2024-04-12T03:56:22.396Z",
    "is_multi_phone_sync_credential" => true,
];
```
{% endtab %}

{% tab title="Go" %}
#### Code

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

#### Output

```go
api.AcsCredential{AcsCredentialId: "99999999-9999-9999-9999-999999999999", AcsUserId: "33333333-3333-3333-3333-333333333333", DisplayName: "Multi Phone Sync Credential", Code: nil, AcsSystemId: "11111111-1111-1111-1111-111111111111", AccessMethod: "mobile_key", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2024-04-12T03:56:22.396Z", IsMultiPhoneSyncCredential: true}
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs credentials get --acs_credential_id "66666666-6666-6666-6666-666666666666"
```

#### Output

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

{% endtabs %}


