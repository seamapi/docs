# List User Identities

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [user identities](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
POST /user_identities/list ⇒ { user_identities: [user_identity, …] }
```
{% endtab %}
{% endtabs %}

<details>

<summary>[Authentication Methods](https://docs.seam.co/latest/api/authentication)</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`credential_manager_acs_system_id`** *String*

---


## Response

Array of [user\_identitys](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of user_identity
}
```
{% endtab %}
{% endtabs %}

---

## Examples
  
### List user identities

To filter the list of user identities, specify the desired `credential_manager_acs_system_id`.

{% tabs %}
{% tab title="JavaScript" %}
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

{% tab title="Python" %}
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

{% tab title="Seam CLI" %}
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

{% tab title="Go" %}
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

{% endtabs %}


