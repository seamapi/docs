# Create an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new access system user.

#### Code:

```javascript
await seam.acs.users.create({
  full_name: "Jane Doe",
  acs_system_id: "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46",
  acs_access_group_ids: ["bab9962b-708b-4db7-98d5-b242a28c12e9"],
  user_identity_id: "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6",
  access_schedule: {
    starts_at: "2025-06-10T15:00:00.000Z",
    ends_at: "2025-06-12T11:00:00.000Z",
  },
  email_address: "jane@example.com",
  phone_number: "+15551234567",
});
```

#### Output:

```javascript
{
  "access_schedule": {
    "ends_at": "2025-06-12T11:00:00.000Z",
    "starts_at": "2025-06-10T15:00:00.000Z"
  },
  "acs_system_id": "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46",
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
  "phone_number": "+15551234567",
  "user_identity_email_address": "jane@example.com",
  "user_identity_full_name": "Jane Doe",
  "user_identity_id": "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6",
  "user_identity_phone_number": "+15551234567",
  "warnings": [],
  "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new access system user.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "full_name": "Jane Doe",
  "acs_system_id": "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46",
  "acs_access_group_ids": [
    "bab9962b-708b-4db7-98d5-b242a28c12e9"
  ],
  "user_identity_id": "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6",
  "access_schedule": {
    "starts_at": "2025-06-10T15:00:00.000Z",
    "ends_at": "2025-06-12T11:00:00.000Z"
  },
  "email_address": "jane@example.com",
  "phone_number": "+15551234567"
}
EOF
```

#### Output:

```curl
{
  "acs_user": {
    "access_schedule": {
      "ends_at": "2025-06-12T11:00:00.000Z",
      "starts_at": "2025-06-10T15:00:00.000Z"
    },
    "acs_system_id": "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46",
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
    "phone_number": "+15551234567",
    "user_identity_email_address": "jane@example.com",
    "user_identity_full_name": "Jane Doe",
    "user_identity_id": "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6",
    "user_identity_phone_number": "+15551234567",
    "warnings": [],
    "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new access system user.

#### Code:

```python
seam.acs.users.create(full_name="Jane Doe", acs_system_id="dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46", acs_access_group_ids=["bab9962b-708b-4db7-98d5-b242a28c12e9"], user_identity_id="3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6", access_schedule={"starts_at":"2025-06-10T15:00:00.000Z","ends_at":"2025-06-12T11:00:00.000Z"}, email_address="jane@example.com", phone_number="+15551234567")
```

#### Output:

```python
AcsUser(access_schedule={"ends_at":"2025-06-12T11:00:00.000Z","starts_at":"2025-06-10T15:00:00.000Z"}, acs_system_id="dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46", acs_user_id="6a5d9697-3cc4-436a-8165-4375ff424870", connected_account_id="c0175797-30f0-49f7-a228-2df115443ca7", created_at="2025-06-15T16:54:17.946482Z", display_name="Jane Doe", email_address="jane@example.com", errors=[], external_type="salto_site_user", external_type_display_name="Salto site user", full_name="Jane Doe", hid_acs_system_id="2acbe47f-612c-422a-9205-7af292f74e7f", is_managed=true, is_suspended=false, last_successful_sync_at="2025-06-18T17:45:00.582Z", pending_mutations=[], phone_number="+15551234567", user_identity_email_address="jane@example.com", user_identity_full_name="Jane Doe", user_identity_id="3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6", user_identity_phone_number="+15551234567", warnings=[], workspace_id="8d4868e3-2f95-4f33-8689-19420b3101cd")
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new access system user.

#### Code:

```ruby
seam.acs.users.create(full_name: "Jane Doe", acs_system_id: "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46", acs_access_group_ids: ["bab9962b-708b-4db7-98d5-b242a28c12e9"], user_identity_id: "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6", access_schedule: {"starts_at":"2025-06-10T15:00:00.000Z","ends_at":"2025-06-12T11:00:00.000Z"}, email_address: "jane@example.com", phone_number: "+15551234567")
```

#### Output:

```ruby
{"access_schedule" => {"ends_at":"2025-06-12T11:00:00.000Z","starts_at":"2025-06-10T15:00:00.000Z"},"acs_system_id" => "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46","acs_user_id" => "6a5d9697-3cc4-436a-8165-4375ff424870","connected_account_id" => "c0175797-30f0-49f7-a228-2df115443ca7","created_at" => "2025-06-15T16:54:17.946482Z","display_name" => "Jane Doe","email_address" => "jane@example.com","errors" => [],"external_type" => "salto_site_user","external_type_display_name" => "Salto site user","full_name" => "Jane Doe","hid_acs_system_id" => "2acbe47f-612c-422a-9205-7af292f74e7f","is_managed" => true,"is_suspended" => false,"last_successful_sync_at" => "2025-06-18T17:45:00.582Z","pending_mutations" => [],"phone_number" => "+15551234567","user_identity_email_address" => "jane@example.com","user_identity_full_name" => "Jane Doe","user_identity_id" => "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6","user_identity_phone_number" => "+15551234567","warnings" => [],"workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd"}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new access system user.

#### Code:

```php
$seam->acs->users->create(
    full_name: "Jane Doe",
    acs_system_id: "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46",
    acs_access_group_ids: ["bab9962b-708b-4db7-98d5-b242a28c12e9"],
    user_identity_id: "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6",
    access_schedule: [
        "starts_at" => "2025-06-10T15:00:00.000Z",
        "ends_at" => "2025-06-12T11:00:00.000Z",
    ],
    email_address: "jane@example.com",
    phone_number: "+15551234567",
);
```

#### Output:

```php
[
    "access_schedule" => [
        "ends_at" => "2025-06-12T11:00:00.000Z",
        "starts_at" => "2025-06-10T15:00:00.000Z",
    ],
    "acs_system_id" => "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46",
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
    "phone_number" => "+15551234567",
    "user_identity_email_address" => "jane@example.com",
    "user_identity_full_name" => "Jane Doe",
    "user_identity_id" => "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6",
    "user_identity_phone_number" => "+15551234567",
    "warnings" => [],
    "workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new access system user.

#### Code:

```seam_cli
seam acs users create --full_name "Jane Doe" --acs_system_id "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46" --acs_access_group_ids ["bab9962b-708b-4db7-98d5-b242a28c12e9"] --user_identity_id "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6" --access_schedule {"starts_at":"2025-06-10T15:00:00.000Z","ends_at":"2025-06-12T11:00:00.000Z"} --email_address "jane@example.com" --phone_number "+15551234567"
```

#### Output:

```seam_cli
{
  "access_schedule": {
    "ends_at": "2025-06-12T11:00:00.000Z",
    "starts_at": "2025-06-10T15:00:00.000Z"
  },
  "acs_system_id": "dc5c90b2-1aab-40a6-bcaa-4b8924b7ad46",
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
  "phone_number": "+15551234567",
  "user_identity_email_address": "jane@example.com",
  "user_identity_full_name": "Jane Doe",
  "user_identity_id": "3ce809f3-b5ac-43a7-a086-70ffa9cb1dd6",
  "user_identity_phone_number": "+15551234567",
  "warnings": [],
  "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
}
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

**`acs_system_id`** *String* (Required)

ID of the access system to which you want to add the new access system user.

---

**`full_name`** *String* (Required)

Full name of the new access system user.

---

**`access_schedule`** *Object*

`starts_at` and `ends_at` timestamps for the new access system user's access. If you specify an `access_schedule`, you may include both `starts_at` and `ends_at`. If you omit `starts_at`, it defaults to the current time. `ends_at` is optional and must be a time in the future and after `starts_at`.

<details>

<summary><b><code>ends_at</code></b> <i>Datetime</i></summary>

Ending timestamp for the new access system user's access.

</details>

---



<details>

<summary><b><code>starts_at</code></b> <i>Datetime</i></summary>

Starting timestamp for the new access system user's access.

</details>

---


**`acs_access_group_ids`** *Array* *of UUIDs*

Array of access group IDs to indicate the access groups to which you want to add the new access system user.

---

**`email`** *String*

{% hint style="warning" %}
**Deprecated**. use email_address.
{% endhint %}

---

**`email_address`** *String*

Email address of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`phone_number`** *String*

Phone number of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).

---

**`user_identity_id`** *String*

ID of the user identity with which you want to associate the new access system user.

---


## Response

{% hint style="success" %}
Returns:
**[acs\_user](.)**

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
