# List ACS Users in an Access Group

```
POST /acs/access_groups/list_users ⇒ { acs_users: [acs_user, …] }
```

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.accessGroups.listUsers({
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
});
```

#### Response

```javascript
[
  {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "display_name": "Jane Doe",
    "full_name": "Jane Doe",
    "email": "jane@example.com",
    "email_address": "jane@example.com",
    "phone_number": "+15555550100",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-04-05T07:14:28.531Z",
    "is_suspended": false,
    "access_schedule": {
      "starts_at": "2024-03-01T10:40:00.000Z",
      "ends_at": "2024-03-04T10:40:00.000Z"
    },
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "user_identity_full_name": "Jane Doe",
    "user_identity_email_address": "jane@example.com",
    "user_identity_phone_number": "+15555550100"
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.acs.access_groups.list_users(
    acs_access_group_id="44444444-4444-4444-4444-444444444444"
)
```

#### Response

```python
[
    AcsUser(
        acs_user_id="33333333-3333-3333-3333-333333333333",
        display_name="Jane Doe",
        full_name="Jane Doe",
        email="jane@example.com",
        email_address="jane@example.com",
        phone_number="+15555550100",
        acs_system_id="11111111-1111-1111-1111-111111111111",
        workspace_id="00000000-0000-0000-0000-000000000000",
        created_at="2024-04-05T07:14:28.531Z",
        is_suspended=false,
        access_schedule={
            "starts_at": "2024-03-01T10:40:00.000Z",
            "ends_at": "2024-03-04T10:40:00.000Z",
        },
        user_identity_id="22222222-2222-2222-2222-222222222222",
        user_identity_full_name="Jane Doe",
        user_identity_email_address="jane@example.com",
        user_identity_phone_number="+15555550100",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.access_groups.list_users(acs_access_group_id: "44444444-4444-4444-4444-444444444444")
```

#### Response

```ruby
[
  {
    "acs_user_id" => "33333333-3333-3333-3333-333333333333",
    "display_name" => "Jane Doe",
    "full_name" => "Jane Doe",
    "email" => "jane@example.com",
    "email_address" => "jane@example.com",
    "phone_number" => "+15555550100",
    "acs_system_id" => "11111111-1111-1111-1111-111111111111",
    "workspace_id" => "00000000-0000-0000-0000-000000000000",
    "created_at" => "2024-04-05T07:14:28.531Z",
    "is_suspended" => false,
    "access_schedule" => {
      starts_at: "2024-03-01T10:40:00.000Z",
      ends_at: "2024-03-04T10:40:00.000Z",
    },
    "user_identity_id" => "22222222-2222-2222-2222-222222222222",
    "user_identity_full_name" => "Jane Doe",
    "user_identity_email_address" => "jane@example.com",
    "user_identity_phone_number" => "+15555550100",
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->access_groups->list_users(
    acs_access_group_id: "44444444-4444-4444-4444-444444444444"
);
```

#### Response

```php
<?php
[
    [
        "acs_user_id" => "33333333-3333-3333-3333-333333333333",
        "display_name" => "Jane Doe",
        "full_name" => "Jane Doe",
        "email" => "jane@example.com",
        "email_address" => "jane@example.com",
        "phone_number" => "+15555550100",
        "acs_system_id" => "11111111-1111-1111-1111-111111111111",
        "workspace_id" => "00000000-0000-0000-0000-000000000000",
        "created_at" => "2024-04-05T07:14:28.531Z",
        "is_suspended" => false,
        "access_schedule" => [
            "starts_at" => "2024-03-01T10:40:00.000Z",
            "ends_at" => "2024-03-04T10:40:00.000Z",
        ],
        "user_identity_id" => "22222222-2222-2222-2222-222222222222",
        "user_identity_full_name" => "Jane Doe",
        "user_identity_email_address" => "jane@example.com",
        "user_identity_phone_number" => "+15555550100",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs access-groups list-users --acs_access_group_id "44444444-4444-4444-4444-444444444444"
```

#### Response

```seam_cli
[
  {
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "display_name": "Jane Doe",
    "full_name": "Jane Doe",
    "email": "jane@example.com",
    "email_address": "jane@example.com",
    "phone_number": "+15555550100",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-04-05T07:14:28.531Z",
    "is_suspended": false,
    "access_schedule": {
      "starts_at": "2024-03-01T10:40:00.000Z",
      "ends_at": "2024-03-04T10:40:00.000Z"
    },
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "user_identity_full_name": "Jane Doe",
    "user_identity_email_address": "jane@example.com",
    "user_identity_phone_number": "+15555550100"
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import accessgroups "github.com/seamapi/go/accessgroups"

func main() {
	client.Acs.AccessGroups.ListUsers(
		context.Background(),
		accessgroups.AccessGroupsListUsersRequest{
			AcsAccessGroupId: api.String("44444444-4444-4444-4444-444444444444"),
		},
	)
}
```

#### Response

```go
[]api.AcsUser{api.AcsUser{AcsUserId: "33333333-3333-3333-3333-333333333333", DisplayName: "Jane Doe", FullName: "Jane Doe", Email: "jane@example.com", EmailAddress: "jane@example.com", PhoneNumber: "+15555550100", AcsSystemId: "11111111-1111-1111-1111-111111111111", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2024-04-05T07:14:28.531Z", IsSuspended: false, AccessSchedule: api.AcsUserAccessSchedule{StartsAt: "2024-03-01T10:40:00.000Z", EndsAt: "2024-03-04T10:40:00.000Z"}, UserIdentityId: "22222222-2222-2222-2222-222222222222", UserIdentityFullName: "Jane Doe", UserIdentityEmailAddress: "jane@example.com", UserIdentityPhoneNumber: "+15555550100"}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_access_group_id`

Format: `UUID`
Required: Yes

ID of the access group for which you want to retrieve all users.

***

## Return Type

Array<[acs\_user](./)>
