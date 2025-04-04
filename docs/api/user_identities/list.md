# List User Identities

```
POST /user_identities/list ⇒ { user_identities: [user_identity, …] }
```

Returns a list of all [user identities](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.list();
```

#### Response

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
#### Request

```python
seam.user_identities.list()
```

#### Response

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
#### Request

```ruby
seam.user_identities.list()
```

#### Response

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
#### Request

```php
<?php
$seam->user_identities->list();
```

#### Response

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
#### Request

```seam_cli
seam user-identities list
```

#### Response

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
#### Request

```go
package main

func main() {
	client.UserIdentities.List(context.Background())
}
```

#### Response

```go
[]api.UserIdentity{api.UserIdentity{UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", UserIdentityKey: "jean_doe", EmailAddress: "jean@example.com", PhoneNumber: "+15555550110", DisplayName: "Jean Doe", FullName: "Jean Doe", CreatedAt: "2024-01-11T05:37:50.264Z", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be"}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `credential_manager_acs_system_id`

Format: `UUID`
Required: No

***

## Return Type

Array<[user\_identity](./)>
