# List ACS Users

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [access system users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all access system users for a specified user identity.

#### Code:

```javascript
await seam.acs.users.list({
  user_identity_id: "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e",
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
    "user_identity_id": "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e",
    "user_identity_phone_number": "+1555551000",
    "warnings": [],
    "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all access system users for a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e"
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
      "user_identity_id": "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e",
      "user_identity_phone_number": "+1555551000",
      "warnings": [],
      "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all access system users for a specified user identity.

#### Code:

```python
seam.acs.users.list(user_identity_id="0dcb435f-0aef-4ae6-8d6e-9c605b78c94e")
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
        user_identity_id="0dcb435f-0aef-4ae6-8d6e-9c605b78c94e",
        user_identity_phone_number="+1555551000",
        warnings=[],
        workspace_id="8d4868e3-2f95-4f33-8689-19420b3101cd",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all access system users for a specified user identity.

#### Code:

```ruby
seam.acs.users.list(user_identity_id: "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e")
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
    "user_identity_id" => "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e",
    "user_identity_phone_number" => "+1555551000",
    "warnings" => [],
    "workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all access system users for a specified user identity.

#### Code:

```php
$seam->acs->users->list(
    user_identity_id: "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e"
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
        "user_identity_id" => "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e",
        "user_identity_phone_number" => "+1555551000",
        "warnings" => [],
        "workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all access system users for a specified user identity.

#### Code:

```seam_cli
seam acs users list --user_identity_id "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e"
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
    "user_identity_id": "0dcb435f-0aef-4ae6-8d6e-9c605b78c94e",
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
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_system_id`** *String*

ID of the `acs_system` for which you want to retrieve all access system users.

---

**`created_before`** *String*

Timestamp by which to limit returned access system users. Returns users created before this timestamp.

---

**`limit`** *Number*

Maximum number of records to return per page.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`search`** *String*

String for which to search. Filters returned access system users to include all records that satisfy a partial match using `full_name`, `phone_number`, `email_address`, `acs_user_id`, `user_identity_id`, `user_identity_full_name` or `user_identity_phone_number`.

---

**`user_identity_email_address`** *String*

Email address of the user identity for which you want to retrieve all access system users.

---

**`user_identity_id`** *String*

ID of the user identity for which you want to retrieve all access system users.

---

**`user_identity_phone_number`** *String*

Phone number of the user identity for which you want to retrieve all access system users, in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, `+15555550100`).

---


## Response

{% hint style="success" %}
**Returns:**
Array of [acs\_users](.)

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

---

## Examples


### List access system users for a user identity phone number

Returns a list of all access system users for a specified user identity phone number.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.list({ user_identity_phone_number: "+1555551000" });
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



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_phone_number": "+1555551000"
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



#### Code:

```python
seam.acs.users.list(user_identity_phone_number="+1555551000")
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



#### Code:

```ruby
seam.acs.users.list(user_identity_phone_number: "+1555551000")
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



#### Code:

```php
$seam->acs->users->list(user_identity_phone_number: "+1555551000");
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



#### Code:

```seam_cli
seam acs users list --user_identity_phone_number "+1555551000"
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

---


### List access system users for a user identity email address

Returns a list of all access system users for a specified user identity email address.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.list({ user_identity_email_address: "jane@example.com" });
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



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_email_address": "jane@example.com"
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



#### Code:

```python
seam.acs.users.list(user_identity_email_address="jane@example.com")
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



#### Code:

```ruby
seam.acs.users.list(user_identity_email_address: "jane@example.com")
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



#### Code:

```php
$seam->acs->users->list(user_identity_email_address: "jane@example.com");
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



#### Code:

```seam_cli
seam acs users list --user_identity_email_address "jane@example.com"
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

---


### List users for an access system

Returns a list of all users for a specified access system.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.list({
  acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2",
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
    "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2"
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
      "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```python
seam.acs.users.list(acs_system_id="0e3369a0-1376-46cd-b79c-ebba856701a2")
```

#### Output:

```python
[
    AcsUser(
        access_schedule={
            "ends_at": "2025-06-12T11:00:00.000Z",
            "starts_at": "2025-06-10T15:00:00.000Z",
        },
        acs_system_id="0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```ruby
seam.acs.users.list(acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2")
```

#### Output:

```ruby
[
  {
    "access_schedule" => {
      ends_at: "2025-06-12T11:00:00.000Z",
      starts_at: "2025-06-10T15:00:00.000Z",
    },
    "acs_system_id" => "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```php
$seam->acs->users->list(acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2");
```

#### Output:

```php
[
    [
        "access_schedule" => [
            "ends_at" => "2025-06-12T11:00:00.000Z",
            "starts_at" => "2025-06-10T15:00:00.000Z",
        ],
        "acs_system_id" => "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```seam_cli
seam acs users list --acs_system_id "0e3369a0-1376-46cd-b79c-ebba856701a2"
```

#### Output:

```seam_cli
[
  {
    "access_schedule": {
      "ends_at": "2025-06-12T11:00:00.000Z",
      "starts_at": "2025-06-10T15:00:00.000Z"
    },
    "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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

---


### List access system users, filtered by a string

Returns a list of all access system users, filtered by a string.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.list({ search: "Jane Doe" });
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



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "search": "Jane Doe"
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



#### Code:

```python
seam.acs.users.list(search="Jane Doe")
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



#### Code:

```ruby
seam.acs.users.list(search: "Jane Doe")
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



#### Code:

```php
$seam->acs->users->list(search: "Jane Doe");
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



#### Code:

```seam_cli
seam acs users list --search "Jane Doe"
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

---


### List access system users, limited to ten per page

Returns a list of all access system users, with a limit of ten per page.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.list({
  acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2",
  limit: 10,
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
    "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
  "limit": 10
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
      "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```python
seam.acs.users.list(acs_system_id="0e3369a0-1376-46cd-b79c-ebba856701a2", limit=10)
```

#### Output:

```python
[
    AcsUser(
        access_schedule={
            "ends_at": "2025-06-12T11:00:00.000Z",
            "starts_at": "2025-06-10T15:00:00.000Z",
        },
        acs_system_id="0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```ruby
seam.acs.users.list(acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2", limit: 10)
```

#### Output:

```ruby
[
  {
    "access_schedule" => {
      ends_at: "2025-06-12T11:00:00.000Z",
      starts_at: "2025-06-10T15:00:00.000Z",
    },
    "acs_system_id" => "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```php
$seam->acs->users->list(
    acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2",
    limit: 10
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
        "acs_system_id" => "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```seam_cli
seam acs users list --acs_system_id "0e3369a0-1376-46cd-b79c-ebba856701a2" --limit 10
```

#### Output:

```seam_cli
[
  {
    "access_schedule": {
      "ends_at": "2025-06-12T11:00:00.000Z",
      "starts_at": "2025-06-10T15:00:00.000Z"
    },
    "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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

---


### List access system users created before a date

Returns a list of all access system users created before a specified date.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.list({
  acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2",
  created_before: "2025-06-19T02:22:45.000Z",
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
    "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
  "created_before": "2025-06-19T02:22:45.000Z"
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
      "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```python
seam.acs.users.list(
    acs_system_id="0e3369a0-1376-46cd-b79c-ebba856701a2",
    created_before="2025-06-19T02:22:45.000Z",
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
        acs_system_id="0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```ruby
seam.acs.users.list(
  acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2",
  created_before: "2025-06-19T02:22:45.000Z",
)
```

#### Output:

```ruby
[
  {
    "access_schedule" => {
      ends_at: "2025-06-12T11:00:00.000Z",
      starts_at: "2025-06-10T15:00:00.000Z",
    },
    "acs_system_id" => "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```php
$seam->acs->users->list(
    acs_system_id: "0e3369a0-1376-46cd-b79c-ebba856701a2",
    created_before: "2025-06-19T02:22:45.000Z"
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
        "acs_system_id" => "0e3369a0-1376-46cd-b79c-ebba856701a2",
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



#### Code:

```seam_cli
seam acs users list --acs_system_id "0e3369a0-1376-46cd-b79c-ebba856701a2" --created_before "2025-06-19T02:22:45.000Z"
```

#### Output:

```seam_cli
[
  {
    "access_schedule": {
      "ends_at": "2025-06-12T11:00:00.000Z",
      "starts_at": "2025-06-10T15:00:00.000Z"
    },
    "acs_system_id": "0e3369a0-1376-46cd-b79c-ebba856701a2",
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
