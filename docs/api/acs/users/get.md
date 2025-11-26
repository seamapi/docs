# Get an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified access system user.

#### Code:

```javascript
await seam.acs.users.get({
  user_identity_id: "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
  acs_system_id: "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
});
```

#### Output:

```javascript
{
  "access_schedule": {
    "ends_at": "2025-06-12T11:00:00.000Z",
    "starts_at": "2025-06-10T15:00:00.000Z"
  },
  "acs_system_id": "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
  "acs_user_id": "42968059-0c89-40f3-b39a-fb80398d0d08",
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
  "user_identity_id": "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
  "user_identity_phone_number": "+1555551000",
  "warnings": [],
  "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified access system user.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "user_identity_id": "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
  "acs_system_id": "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710"
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
    "acs_system_id": "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
    "acs_user_id": "42968059-0c89-40f3-b39a-fb80398d0d08",
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
    "user_identity_id": "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
    "user_identity_phone_number": "+1555551000",
    "warnings": [],
    "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified access system user.

#### Code:

```python
seam.acs.users.get(user_identity_id="cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c", acs_system_id="f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710")
```

#### Output:

```python
AcsUser(access_schedule={"ends_at":"2025-06-12T11:00:00.000Z","starts_at":"2025-06-10T15:00:00.000Z"}, acs_system_id="f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710", acs_user_id="42968059-0c89-40f3-b39a-fb80398d0d08", connected_account_id="c0175797-30f0-49f7-a228-2df115443ca7", created_at="2025-06-15T16:54:17.946482Z", display_name="Jane Doe", email_address="jane@example.com", errors=[], external_type="salto_site_user", external_type_display_name="Salto site user", full_name="Jane Doe", hid_acs_system_id="2acbe47f-612c-422a-9205-7af292f74e7f", is_managed=true, is_suspended=false, last_successful_sync_at="2025-06-18T17:45:00.582Z", pending_mutations=[], phone_number="+1555551000", user_identity_email_address="jane@example.com", user_identity_full_name="Jane Doe", user_identity_id="cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c", user_identity_phone_number="+1555551000", warnings=[], workspace_id="8d4868e3-2f95-4f33-8689-19420b3101cd")
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified access system user.

#### Code:

```ruby
seam.acs.users.get(user_identity_id: "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c", acs_system_id: "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710")
```

#### Output:

```ruby
{"access_schedule" => {"ends_at":"2025-06-12T11:00:00.000Z","starts_at":"2025-06-10T15:00:00.000Z"},"acs_system_id" => "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710","acs_user_id" => "42968059-0c89-40f3-b39a-fb80398d0d08","connected_account_id" => "c0175797-30f0-49f7-a228-2df115443ca7","created_at" => "2025-06-15T16:54:17.946482Z","display_name" => "Jane Doe","email_address" => "jane@example.com","errors" => [],"external_type" => "salto_site_user","external_type_display_name" => "Salto site user","full_name" => "Jane Doe","hid_acs_system_id" => "2acbe47f-612c-422a-9205-7af292f74e7f","is_managed" => true,"is_suspended" => false,"last_successful_sync_at" => "2025-06-18T17:45:00.582Z","pending_mutations" => [],"phone_number" => "+1555551000","user_identity_email_address" => "jane@example.com","user_identity_full_name" => "Jane Doe","user_identity_id" => "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c","user_identity_phone_number" => "+1555551000","warnings" => [],"workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd"}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified access system user.

#### Code:

```php
$seam->acs->users->get(
    user_identity_id: "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
    acs_system_id: "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
);
```

#### Output:

```php
[
    "access_schedule" => [
        "ends_at" => "2025-06-12T11:00:00.000Z",
        "starts_at" => "2025-06-10T15:00:00.000Z",
    ],
    "acs_system_id" => "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
    "acs_user_id" => "42968059-0c89-40f3-b39a-fb80398d0d08",
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
    "user_identity_id" => "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
    "user_identity_phone_number" => "+1555551000",
    "warnings" => [],
    "workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified access system user.

#### Code:

```seam_cli
seam acs users get --user_identity_id "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c" --acs_system_id "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710"
```

#### Output:

```seam_cli
{
  "access_schedule": {
    "ends_at": "2025-06-12T11:00:00.000Z",
    "starts_at": "2025-06-10T15:00:00.000Z"
  },
  "acs_system_id": "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
  "acs_user_id": "42968059-0c89-40f3-b39a-fb80398d0d08",
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
  "user_identity_id": "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
  "user_identity_phone_number": "+1555551000",
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

**`acs_system_id`** *String*

ID of the access system that you want to get. You can only provide acs_user_id or user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to get. You can only provide acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to get. You can only provide acs_user_id or user_identity_id.

---


## Response

{% hint style="success" %}
Returns:
[acs\_user](.)**

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


### Get an access system user

Returns a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.get({
  acs_user_id: "42968059-0c89-40f3-b39a-fb80398d0d08",
});
```

#### Output:

```javascript
{
  "access_schedule": {
    "ends_at": "2025-06-12T11:00:00.000Z",
    "starts_at": "2025-06-10T15:00:00.000Z"
  },
  "acs_system_id": "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
  "acs_user_id": "42968059-0c89-40f3-b39a-fb80398d0d08",
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
  "user_identity_id": "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
  "user_identity_phone_number": "+1555551000",
  "warnings": [],
  "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_user_id": "42968059-0c89-40f3-b39a-fb80398d0d08"
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
    "acs_system_id": "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
    "acs_user_id": "42968059-0c89-40f3-b39a-fb80398d0d08",
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
    "user_identity_id": "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
    "user_identity_phone_number": "+1555551000",
    "warnings": [],
    "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.users.get(acs_user_id="42968059-0c89-40f3-b39a-fb80398d0d08")
```

#### Output:

```python
AcsUser(access_schedule={"ends_at":"2025-06-12T11:00:00.000Z","starts_at":"2025-06-10T15:00:00.000Z"}, acs_system_id="f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710", acs_user_id="42968059-0c89-40f3-b39a-fb80398d0d08", connected_account_id="c0175797-30f0-49f7-a228-2df115443ca7", created_at="2025-06-15T16:54:17.946482Z", display_name="Jane Doe", email_address="jane@example.com", errors=[], external_type="salto_site_user", external_type_display_name="Salto site user", full_name="Jane Doe", hid_acs_system_id="2acbe47f-612c-422a-9205-7af292f74e7f", is_managed=true, is_suspended=false, last_successful_sync_at="2025-06-18T17:45:00.582Z", pending_mutations=[], phone_number="+1555551000", user_identity_email_address="jane@example.com", user_identity_full_name="Jane Doe", user_identity_id="cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c", user_identity_phone_number="+1555551000", warnings=[], workspace_id="8d4868e3-2f95-4f33-8689-19420b3101cd")
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.users.get(acs_user_id: "42968059-0c89-40f3-b39a-fb80398d0d08")
```

#### Output:

```ruby
{"access_schedule" => {"ends_at":"2025-06-12T11:00:00.000Z","starts_at":"2025-06-10T15:00:00.000Z"},"acs_system_id" => "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710","acs_user_id" => "42968059-0c89-40f3-b39a-fb80398d0d08","connected_account_id" => "c0175797-30f0-49f7-a228-2df115443ca7","created_at" => "2025-06-15T16:54:17.946482Z","display_name" => "Jane Doe","email_address" => "jane@example.com","errors" => [],"external_type" => "salto_site_user","external_type_display_name" => "Salto site user","full_name" => "Jane Doe","hid_acs_system_id" => "2acbe47f-612c-422a-9205-7af292f74e7f","is_managed" => true,"is_suspended" => false,"last_successful_sync_at" => "2025-06-18T17:45:00.582Z","pending_mutations" => [],"phone_number" => "+1555551000","user_identity_email_address" => "jane@example.com","user_identity_full_name" => "Jane Doe","user_identity_id" => "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c","user_identity_phone_number" => "+1555551000","warnings" => [],"workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd"}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->users->get(acs_user_id: "42968059-0c89-40f3-b39a-fb80398d0d08");
```

#### Output:

```php
[
    "access_schedule" => [
        "ends_at" => "2025-06-12T11:00:00.000Z",
        "starts_at" => "2025-06-10T15:00:00.000Z",
    ],
    "acs_system_id" => "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
    "acs_user_id" => "42968059-0c89-40f3-b39a-fb80398d0d08",
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
    "user_identity_id" => "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
    "user_identity_phone_number" => "+1555551000",
    "warnings" => [],
    "workspace_id" => "8d4868e3-2f95-4f33-8689-19420b3101cd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs users get --acs_user_id "42968059-0c89-40f3-b39a-fb80398d0d08"
```

#### Output:

```seam_cli
{
  "access_schedule": {
    "ends_at": "2025-06-12T11:00:00.000Z",
    "starts_at": "2025-06-10T15:00:00.000Z"
  },
  "acs_system_id": "f4d2b3fb-7fa5-47fd-b0d3-aa6da8f5b710",
  "acs_user_id": "42968059-0c89-40f3-b39a-fb80398d0d08",
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
  "user_identity_id": "cde1ec76-5b0d-4b3e-9b85-d80dcc9b599c",
  "user_identity_phone_number": "+1555551000",
  "warnings": [],
  "workspace_id": "8d4868e3-2f95-4f33-8689-19420b3101cd"
}
```
{% endtab %}

{% endtabs %}
