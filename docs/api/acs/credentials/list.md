# List Credentials


- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md).


{% tabs %}
{% tab title="JavaScript" %}

Filter the list of returned credentials by `acs_user_id`, `acs_system_id`, or `user_identity_id`. You can also include `is_multi_phone_sync_credential`.

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

{% tab title="cURL" %}

Filter the list of returned credentials by `acs_user_id`, `acs_system_id`, or `user_identity_id`. You can also include `is_multi_phone_sync_credential`.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "is_multi_phone_sync_credential": true
}
EOF
```

#### Output

```curl
{
  "acs_credentials": [
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
}
```
{% endtab %}

{% tab title="Python" %}

Filter the list of returned credentials by `acs_user_id`, `acs_system_id`, or `user_identity_id`. You can also include `is_multi_phone_sync_credential`.

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

Filter the list of returned credentials by `acs_user_id`, `acs_system_id`, or `user_identity_id`. You can also include `is_multi_phone_sync_credential`.

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

Filter the list of returned credentials by `acs_user_id`, `acs_system_id`, or `user_identity_id`. You can also include `is_multi_phone_sync_credential`.

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

{% tab title="Go" %}

Filter the list of returned credentials by `acs_user_id`, `acs_system_id`, or `user_identity_id`. You can also include `is_multi_phone_sync_credential`.

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

{% tab title="Seam CLI" %}

Filter the list of returned credentials by `acs_user_id`, `acs_system_id`, or `user_identity_id`. You can also include `is_multi_phone_sync_credential`.

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

**`acs_system_id`** *String*

ID of the access system for which you want to retrieve all credentials.

---

**`acs_user_id`** *String*

ID of the access system user for which you want to retrieve all credentials.

---

**`created_before`** *String*

Date and time, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format, before which events to return were created.

---

**`is_multi_phone_sync_credential`** *Boolean*

Indicates whether you want to retrieve only multi-phone sync credentials or non-multi-phone sync credentials.

---

**`limit`** *Number*

Number of credentials to return.

---

**`user_identity_id`** *String*

ID of the user identity for which you want to retrieve all credentials.

---


## Response

Array of [acs\_credentials](./)


---

## Examples

