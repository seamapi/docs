# List ACS Users Associated with a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [access system users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) assigned to a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all access system users assigned to a specified user identity.

#### Code:

```javascript
await seam.userIdentities.listAcsUsers({
  user_identity_id: "b0dc10f2-3971-440e-af25-dab964e5c281",
});
```

#### Output:

```javascript
[
  {
    "access_schedule": {
      "ends_at": "2025-06-12T11:00:00.000Z",
      "starts_at": "2025-06-10T15:00:00.000Z"
    },
    "acs_system_id": "62d3384f-267f-4a4a-a946-d35819ec9981",
    "acs_user_id": "6a5d9697-3cc4-436a-8165-4375ff424870",
    "connected_account_id": "c0175797-30f0-49f7-a228-2df115443ca7",
    "created_at": "2025-06-15T16:54:17.946482Z",
    "display_name": "Jane Doe",
    "email_address": "jane@example.com",
    "errors": [],
    "external_type": "salto_site_user",
    "external_type_display_name": "Salto site user",
    "full_name": "Jane Doe",
    "hid_acs_system_id": "2acbe47f-612c-422a-9205-7af292f74e7f",
    "is_managed": true,
    "is_suspended": false,
    "last_successful_sync_at": "2025-06-18T17:45:00.582Z",
    "pending_mutations": [],
    "phone_number": "+1555551000",
    "user_identity_email_address": "jane@example.com",
    "user_identity_full_name": "Jane Doe",
    "user_identity_id": "a23b3e02-e394-4e5f-b21c-b366b8bc0dd3",
    "user_identity_phone_number": "+1555551000",
    "warnings": [],
    "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all access system users assigned to a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/list_acs_users" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "b0dc10f2-3971-440e-af25-dab964e5c281"
}
EOF
```

#### Output:

```curl
{
  "acs_users": [
    {
      "access_schedule": {
        "ends_at": "2025-06-12T11:00:00.000Z",
        "starts_at": "2025-06-10T15:00:00.000Z"
      },
      "acs_system_id": "62d3384f-267f-4a4a-a946-d35819ec9981",
      "acs_user_id": "6a5d9697-3cc4-436a-8165-4375ff424870",
      "connected_account_id": "c0175797-30f0-49f7-a228-2df115443ca7",
      "created_at": "2025-06-15T16:54:17.946482Z",
      "display_name": "Jane Doe",
      "email_address": "jane@example.com",
      "errors": [],
      "external_type": "salto_site_user",
      "external_type_display_name": "Salto site user",
      "full_name": "Jane Doe",
      "hid_acs_system_id": "2acbe47f-612c-422a-9205-7af292f74e7f",
      "is_managed": true,
      "is_suspended": false,
      "last_successful_sync_at": "2025-06-18T17:45:00.582Z",
      "pending_mutations": [],
      "phone_number": "+1555551000",
      "user_identity_email_address": "jane@example.com",
      "user_identity_full_name": "Jane Doe",
      "user_identity_id": "a23b3e02-e394-4e5f-b21c-b366b8bc0dd3",
      "user_identity_phone_number": "+1555551000",
      "warnings": [],
      "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all access system users assigned to a specified user identity.

#### Code:

```python
seam.user_identities.list_acs_users(
    user_identity_id="b0dc10f2-3971-440e-af25-dab964e5c281"
)
```

#### Output:

```python
[
    AcsUser(
        access_schedule={
            "ends_at": "2025-06-12T11:00:00.000Z",
            "starts_at": "2025-06-10T15:00:00.000Z",
        },
        acs_system_id="62d3384f-267f-4a4a-a946-d35819ec9981",
        acs_user_id="6a5d9697-3cc4-436a-8165-4375ff424870",
        connected_account_id="c0175797-30f0-49f7-a228-2df115443ca7",
        created_at="2025-06-15T16:54:17.946482Z",
        display_name="Jane Doe",
        email_address="jane@example.com",
        errors=[],
        external_type="salto_site_user",
        external_type_display_name="Salto site user",
        full_name="Jane Doe",
        hid_acs_system_id="2acbe47f-612c-422a-9205-7af292f74e7f",
        is_managed=true,
        is_suspended=false,
        last_successful_sync_at="2025-06-18T17:45:00.582Z",
        pending_mutations=[],
        phone_number="+1555551000",
        user_identity_email_address="jane@example.com",
        user_identity_full_name="Jane Doe",
        user_identity_id="a23b3e02-e394-4e5f-b21c-b366b8bc0dd3",
        user_identity_phone_number="+1555551000",
        warnings=[],
        workspace_id="8d4868e3-2f95-4f33-8689-19420b3101cd",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all access system users assigned to a specified user identity.

#### Code:

```ruby
seam.user_identities.list_acs_users(user_identity_id: "b0dc10f2-3971-440e-af25-dab964e5c281")
```

#### Output:

```ruby
[
  {
    "access_schedule" => {
      ends_at: "2025-06-12T11:00:00.000Z",
      starts_at: "2025-06-10T15:00:00.000Z",
    },
    "acs_system_id" => "62d3384f-267f-4a4a-a946-d35819ec9981",
    "acs_user_id" => "6a5d9697-3cc4-436a-8165-4375ff424870",
    "connected_account_id" => "c0175797-30f0-49f7-a228-2df115443ca7",
    "created_at" => "2025-06-15T16:54:17.946482Z",
    "display_name" => "Jane Doe",
    "email_address" => "jane@example.com",
    "errors" => [],
    "external_type" => "salto_site_user",
    "external_type_display_name" => "Salto site user",
    "full_name" => "Jane Doe",
    "hid_acs_system_id" => "2acbe47f-612c-422a-9205-7af292f74e7f",
    "is_managed" => true,
    "is_suspended" => false,
    "last_successful_sync_at" => "2025-06-18T17:45:00.582Z",
    "pending_mutations" => [],
    "phone_number" => "+1555551000",
    "user_identity_email_address" => "jane@example.com",
    "user_identity_full_name" => "Jane Doe",
    "user_identity_id" => "a23b3e02-e394-4e5f-b21c-b366b8bc0dd3",
    "user_identity_phone_number" => "+1555551000",
    "warnings" => [],
    "workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all access system users assigned to a specified user identity.

#### Code:

```php
$seam->user_identities->list_acs_users(
    user_identity_id: "b0dc10f2-3971-440e-af25-dab964e5c281",
);
```

#### Output:

```php
[
    [
        "access_schedule" => [
            "ends_at" => "2025-06-12T11:00:00.000Z",
            "starts_at" => "2025-06-10T15:00:00.000Z",
        ],
        "acs_system_id" => "62d3384f-267f-4a4a-a946-d35819ec9981",
        "acs_user_id" => "6a5d9697-3cc4-436a-8165-4375ff424870",
        "connected_account_id" => "c0175797-30f0-49f7-a228-2df115443ca7",
        "created_at" => "2025-06-15T16:54:17.946482Z",
        "display_name" => "Jane Doe",
        "email_address" => "jane@example.com",
        "errors" => [],
        "external_type" => "salto_site_user",
        "external_type_display_name" => "Salto site user",
        "full_name" => "Jane Doe",
        "hid_acs_system_id" => "2acbe47f-612c-422a-9205-7af292f74e7f",
        "is_managed" => true,
        "is_suspended" => false,
        "last_successful_sync_at" => "2025-06-18T17:45:00.582Z",
        "pending_mutations" => [],
        "phone_number" => "+1555551000",
        "user_identity_email_address" => "jane@example.com",
        "user_identity_full_name" => "Jane Doe",
        "user_identity_id" => "a23b3e02-e394-4e5f-b21c-b366b8bc0dd3",
        "user_identity_phone_number" => "+1555551000",
        "warnings" => [],
        "workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all access system users assigned to a specified user identity.

#### Code:

```seam_cli
seam user-identities list-acs-users --user_identity_id "b0dc10f2-3971-440e-af25-dab964e5c281"
```

#### Output:

```seam_cli
[
  {
    "access_schedule": {
      "ends_at": "2025-06-12T11:00:00.000Z",
      "starts_at": "2025-06-10T15:00:00.000Z"
    },
    "acs_system_id": "62d3384f-267f-4a4a-a946-d35819ec9981",
    "acs_user_id": "6a5d9697-3cc4-436a-8165-4375ff424870",
    "connected_account_id": "c0175797-30f0-49f7-a228-2df115443ca7",
    "created_at": "2025-06-15T16:54:17.946482Z",
    "display_name": "Jane Doe",
    "email_address": "jane@example.com",
    "errors": [],
    "external_type": "salto_site_user",
    "external_type_display_name": "Salto site user",
    "full_name": "Jane Doe",
    "hid_acs_system_id": "2acbe47f-612c-422a-9205-7af292f74e7f",
    "is_managed": true,
    "is_suspended": false,
    "last_successful_sync_at": "2025-06-18T17:45:00.582Z",
    "pending_mutations": [],
    "phone_number": "+1555551000",
    "user_identity_email_address": "jane@example.com",
    "user_identity_full_name": "Jane Doe",
    "user_identity_id": "a23b3e02-e394-4e5f-b21c-b366b8bc0dd3",
    "user_identity_phone_number": "+1555551000",
    "warnings": [],
    "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
  }
]
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

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to retrieve all access system users.

---


## Response

{% hint style="success" %}
Returns:
Array of [acs\_users](./../acs/users)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_schedule": {
    "ends_at": "2025-06-12T11:00:00.000Z",
    "starts_at": "2025-06-10T15:00:00.000Z"
  },
  "acs_system_id": "62d3384f-267f-4a4a-a946-d35819ec9981",
  "acs_user_id": "6a5d9697-3cc4-436a-8165-4375ff424870",
  "connected_account_id": "c0175797-30f0-49f7-a228-2df115443ca7",
  "created_at": "2025-06-15T16:54:17.946482Z",
  "display_name": "Jane Doe",
  "email_address": "jane@example.com",
  "errors": [],
  "external_type": "salto_site_user",
  "external_type_display_name": "Salto site user",
  "full_name": "Jane Doe",
  "hid_acs_system_id": "2acbe47f-612c-422a-9205-7af292f74e7f",
  "is_managed": true,
  "is_suspended": false,
  "last_successful_sync_at": "2025-06-18T17:45:00.582Z",
  "pending_mutations": [
    {
      "to": { "acs_access_group_id": "2c0fb4a0-2b42-4651-926e-1a10bedbf6ce" },
      "from": { "acs_access_group_id": "f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f" },
      "message": "This user's access membership is being updated.",
      "created_at": "2025-06-18T17:57:01.867Z",
      "mutation_code": "updating_group_membership"
    }
  ],
  "phone_number": "+1555551000",
  "user_identity_email_address": "jane@example.com",
  "user_identity_full_name": "Jane Doe",
  "user_identity_id": "a23b3e02-e394-4e5f-b21c-b366b8bc0dd3",
  "user_identity_phone_number": "+1555551000",
  "warnings": [],
  "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
}
```
{% endtab %}
{% endtabs %}
