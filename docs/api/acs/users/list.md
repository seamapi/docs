# List ACS Users

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [access system users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

```javascript
await seam.acs.users.list();
```

#### Output

```javascript
{
  "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100"
}
```
{% endtab %}

{% tab title="cURL" %}
#### Code

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{
  "acs_users": {
    "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
    "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-04-05T07:57:05.323Z",
    "display_name": "Jane Doe",
    "full_name": "Jane Doe",
    "email_address": "jane@example.com",
    "phone_number": "+15555550100"
  }
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

```python
seam.acs.users.list()
```

#### Output

```python
AcsUser(
    acs_user_id="123e4567-e89b-12d3-a456-426614174000",
    acs_system_id="123e4567-e89b-12d3-a456-426614174000",
    workspace_id="123e4567-e89b-12d3-a456-426614174000",
    created_at="2024-04-05T07:57:05.323Z",
    display_name="Jane Doe",
    full_name="Jane Doe",
    email_address="jane@example.com",
    phone_number="+15555550100",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

```ruby
seam.acs.users.list()
```

#### Output

```ruby
{
  "acs_user_id" => "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
  "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
  "created_at" => "2024-04-05T07:57:05.323Z",
  "display_name" => "Jane Doe",
  "full_name" => "Jane Doe",
  "email_address" => "jane@example.com",
  "phone_number" => "+15555550100",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

```php
<?php
$seam->acs->users->list();
```

#### Output

```php
<?php
[
    "acs_user_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
    "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
    "created_at" => "2024-04-05T07:57:05.323Z",
    "display_name" => "Jane Doe",
    "full_name" => "Jane Doe",
    "email_address" => "jane@example.com",
    "phone_number" => "+15555550100",
];
```
{% endtab %}

{% tab title="Go" %}
#### Code

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

```go
package main

func main() {
	client.Acs.Users.List(context.Background())
}
```

#### Output

```go
api.AcsUser{AcsUserId: "123e4567-e89b-12d3-a456-426614174000", AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "Jane Doe", FullName: "Jane Doe", EmailAddress: "jane@example.com", PhoneNumber: "+15555550100"}
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

```seam_cli
seam acs users list
```

#### Output

```seam_cli
{
  "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100"
}
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

Array of [acs\_users](./)


---

## Examples

