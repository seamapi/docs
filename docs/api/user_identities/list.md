# List User Identities

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [user identities](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

To filter the list of user identities, specify the desired `credential_manager_acs_system_id`.

#### Code

```javascript
await seam.userIdentities.list();
```

#### Output

```javascript
[
  {
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "created_at": "2024-01-11T05:37:50.264Z",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

To filter the list of user identities, specify the desired `credential_manager_acs_system_id`.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{
  "user_identities": [
    {
      "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
      "user_identity_key": "jean_doe",
      "email_address": "jean@example.com",
      "phone_number": "+15555550110",
      "display_name": "Jean Doe",
      "full_name": "Jean Doe",
      "created_at": "2024-01-11T05:37:50.264Z",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

To filter the list of user identities, specify the desired `credential_manager_acs_system_id`.

#### Code

```python
seam.user_identities.list()
```

#### Output

```python
[
    UserIdentity(
        user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
        user_identity_key="jean_doe",
        email_address="jean@example.com",
        phone_number="+15555550110",
        display_name="Jean Doe",
        full_name="Jean Doe",
        created_at="2024-01-11T05:37:50.264Z",
        workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

To filter the list of user identities, specify the desired `credential_manager_acs_system_id`.

#### Code

```ruby
seam.user_identities.list()
```

#### Output

```ruby
[
  {
    "user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key" => "jean_doe",
    "email_address" => "jean@example.com",
    "phone_number" => "+15555550110",
    "display_name" => "Jean Doe",
    "full_name" => "Jean Doe",
    "created_at" => "2024-01-11T05:37:50.264Z",
    "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

To filter the list of user identities, specify the desired `credential_manager_acs_system_id`.

#### Code

```php
<?php
$seam->user_identities->list();
```

#### Output

```php
<?php
[
    [
        "user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
        "user_identity_key" => "jean_doe",
        "email_address" => "jean@example.com",
        "phone_number" => "+15555550110",
        "display_name" => "Jean Doe",
        "full_name" => "Jean Doe",
        "created_at" => "2024-01-11T05:37:50.264Z",
        "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    ],
];
```
{% endtab %}

{% tab title="Go" %}

To filter the list of user identities, specify the desired `credential_manager_acs_system_id`.

#### Code

```go
package main

func main() {
	client.UserIdentities.List(context.Background())
}
```

#### Output

```go
[]api.UserIdentity{api.UserIdentity{UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", UserIdentityKey: "jean_doe", EmailAddress: "jean@example.com", PhoneNumber: "+15555550110", DisplayName: "Jean Doe", FullName: "Jean Doe", CreatedAt: "2024-01-11T05:37:50.264Z", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be"}}
```
{% endtab %}

{% tab title="Seam CLI" %}

To filter the list of user identities, specify the desired `credential_manager_acs_system_id`.

#### Code

```seam_cli
seam user-identities list
```

#### Output

```seam_cli
[
  {
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "created_at": "2024-01-11T05:37:50.264Z",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
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

**`credential_manager_acs_system_id`** *String*

`acs_system_id` of the credential manager by which you want to filter the list of user identities.

---


## Response

Array of [user\_identitys](./)


---

## Examples

