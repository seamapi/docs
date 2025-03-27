# List ACS Users Associated with a User Identity

```
POST /user_identities/list_acs_users ⇒ { acs_users: [acs_user, …] }
```

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) assigned to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.userIdentities.listAcsUsers({
  user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
});
```

#### Output

```javascript
[
  {
    "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "email_address": "jean@example.com",
    "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-11T05:45:41.349Z",
    "is_suspended": false,
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_email_address": "jean@example.com",
    "user_identity_phone_number": "+15555550110"
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.user_identities.list_acs_users(
    user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
)
```

#### Output

```python
[
    AcsUser(
        acs_user_id="4d223973-0874-4831-8630-bfcb29e6bce0",
        display_name="Jean Doe",
        full_name="Jean Doe",
        email_address="jean@example.com",
        acs_system_id="8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
        workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        created_at="2024-01-11T05:45:41.349Z",
        is_suspended=false,
        user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
        user_identity_email_address="jean@example.com",
        user_identity_phone_number="+15555550110",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.user_identities.list_acs_users(user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a")
```

#### Output

```ruby
[
  {
    "acs_user_id" => "4d223973-0874-4831-8630-bfcb29e6bce0",
    "display_name" => "Jean Doe",
    "full_name" => "Jean Doe",
    "email_address" => "jean@example.com",
    "acs_system_id" => "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
    "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at" => "2024-01-11T05:45:41.349Z",
    "is_suspended" => false,
    "user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_email_address" => "jean@example.com",
    "user_identity_phone_number" => "+15555550110",
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->user_identities->list_acs_users(
    user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
);
```

#### Output

```php
<?php
[
    [
        "acs_user_id" => "4d223973-0874-4831-8630-bfcb29e6bce0",
        "display_name" => "Jean Doe",
        "full_name" => "Jean Doe",
        "email_address" => "jean@example.com",
        "acs_system_id" => "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
        "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        "created_at" => "2024-01-11T05:45:41.349Z",
        "is_suspended" => false,
        "user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
        "user_identity_email_address" => "jean@example.com",
        "user_identity_phone_number" => "+15555550110",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam user-identities list-acs-users --user_identity_id "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
```

#### Output

```seam_cli
[
  {
    "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "email_address": "jean@example.com",
    "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-11T05:45:41.349Z",
    "is_suspended": false,
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_email_address": "jean@example.com",
    "user_identity_phone_number": "+15555550110"
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.UserIdentities.ListAcsUsers(
		context.Background(),
		api.UserIdentitiesListAcsUsersRequest{
			UserIdentityId: api.String("48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"),
		},
	)
}
```

#### Output

```go
[]api.AcsUser{api.AcsUser{AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0", DisplayName: "Jean Doe", FullName: "Jean Doe", EmailAddress: "jean@example.com", AcsSystemId: "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-01-11T05:45:41.349Z", IsSuspended: false, UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", UserIdentityEmailAddress: "jean@example.com", UserIdentityPhoneNumber: "+15555550110"}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `user_identity_id`

Type: `string`
Required: Yes

ID of the user identity for which you want to retrieve all ACS users.

---


---

## Return Type

Array<[acs\_user](./)>
