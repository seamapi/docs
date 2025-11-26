# Update an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Updates the properties of a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code:

```javascript
await seam.acs.users.update({
  acs_user_id: "5db87499-0b3b-4750-a2e8-341b2af64049",
  user_identity_id: "b0bbb463-4fad-4b21-a695-952463ea6e93",
  acs_system_id: "88ae7b8b-c406-414b-a745-91d9cea661f7",
  access_schedule: {
    starts_at: "2025-06-10T15:00:00.000Z",
    ends_at: "2025-06-12T11:00:00.000Z",
  },
  full_name: "Jane Doe",
  email: "jane@example.com",
  phone_number: "+15551234567",
  email_address: "jane@example.com",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "5db87499-0b3b-4750-a2e8-341b2af64049",
  "user_identity_id": "b0bbb463-4fad-4b21-a695-952463ea6e93",
  "acs_system_id": "88ae7b8b-c406-414b-a745-91d9cea661f7",
  "access_schedule": {
    "starts_at": "2025-06-10T15:00:00.000Z",
    "ends_at": "2025-06-12T11:00:00.000Z"
  },
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "phone_number": "+15551234567",
  "email_address": "jane@example.com"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code:

```python
seam.acs.users.update(
    acs_user_id="5db87499-0b3b-4750-a2e8-341b2af64049",
    user_identity_id="b0bbb463-4fad-4b21-a695-952463ea6e93",
    acs_system_id="88ae7b8b-c406-414b-a745-91d9cea661f7",
    access_schedule={
        "starts_at": "2025-06-10T15:00:00.000Z",
        "ends_at": "2025-06-12T11:00:00.000Z",
    },
    full_name="Jane Doe",
    email="jane@example.com",
    phone_number="+15551234567",
    email_address="jane@example.com",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code:

```ruby
seam.acs.users.update(
  acs_user_id: "5db87499-0b3b-4750-a2e8-341b2af64049",
  user_identity_id: "b0bbb463-4fad-4b21-a695-952463ea6e93",
  acs_system_id: "88ae7b8b-c406-414b-a745-91d9cea661f7",
  access_schedule: {
    starts_at: "2025-06-10T15:00:00.000Z",
    ends_at: "2025-06-12T11:00:00.000Z",
  },
  full_name: "Jane Doe",
  email: "jane@example.com",
  phone_number: "+15551234567",
  email_address: "jane@example.com",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code:

```php
$seam->acs->users->update(
    acs_user_id: "5db87499-0b3b-4750-a2e8-341b2af64049",
    user_identity_id: "b0bbb463-4fad-4b21-a695-952463ea6e93",
    acs_system_id: "88ae7b8b-c406-414b-a745-91d9cea661f7",
    access_schedule: [
        "starts_at" => "2025-06-10T15:00:00.000Z",
        "ends_at" => "2025-06-12T11:00:00.000Z",
    ],
    full_name: "Jane Doe",
    email: "jane@example.com",
    phone_number: "+15551234567",
    email_address: "jane@example.com",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code:

```seam_cli
seam acs users update --acs_user_id "5db87499-0b3b-4750-a2e8-341b2af64049" --user_identity_id "b0bbb463-4fad-4b21-a695-952463ea6e93" --acs_system_id "88ae7b8b-c406-414b-a745-91d9cea661f7" --access_schedule {"starts_at":"2025-06-10T15:00:00.000Z","ends_at":"2025-06-12T11:00:00.000Z"} --full_name "Jane Doe" --email "jane@example.com" --phone_number "+15551234567" --email_address "jane@example.com"
```

#### Output:

```seam_cli
{}
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

**`access_schedule`** *Object*

`starts_at` and `ends_at` timestamps for the access system user's access. If you specify an `access_schedule`, you may include both `starts_at` and `ends_at`. If you omit `starts_at`, it defaults to the current time. `ends_at` is optional and must be a time in the future and after `starts_at`.

<details>

<summary><b><code>ends_at</code></b> <i>Datetime</i></summary>

Ending timestamp for the access system user's access.

</details>

---



<details>

<summary><b><code>starts_at</code></b> <i>Datetime</i></summary>

Starting timestamp for the access system user's access.

</details>

---


**`acs_system_id`** *String*

ID of the access system that you want to update. You can only provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to update. You can only provide acs_user_id or user_identity_id.

---

**`email`** *String*

{% hint style="warning" %}
**Deprecated**. use email_address.
{% endhint %}

---

**`email_address`** *String*

Email address of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`full_name`** *String*

Full name of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`hid_acs_system_id`** *String*

---

**`phone_number`** *String*

Phone number of the [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).

---

**`user_identity_id`** *String*

ID of the user identity that you want to update. You can only provide acs_user_id or user_identity_id. If you provide user_identity_id, you must also provide acs_system_id.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}


---

## Examples


### Update an access system user

Updates the properties of a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.update({
  acs_user_id: "5db87499-0b3b-4750-a2e8-341b2af64049",
  access_schedule: {
    starts_at: "2025-06-10T15:00:00.000Z",
    ends_at: "2025-06-12T11:00:00.000Z",
  },
  full_name: "Jane Doe",
  email: "jane@example.com",
  phone_number: "+15551234567",
  email_address: "jane@example.com",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "5db87499-0b3b-4750-a2e8-341b2af64049",
  "access_schedule": {
    "starts_at": "2025-06-10T15:00:00.000Z",
    "ends_at": "2025-06-12T11:00:00.000Z"
  },
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "phone_number": "+15551234567",
  "email_address": "jane@example.com"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.users.update(
    acs_user_id="5db87499-0b3b-4750-a2e8-341b2af64049",
    access_schedule={
        "starts_at": "2025-06-10T15:00:00.000Z",
        "ends_at": "2025-06-12T11:00:00.000Z",
    },
    full_name="Jane Doe",
    email="jane@example.com",
    phone_number="+15551234567",
    email_address="jane@example.com",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.users.update(
  acs_user_id: "5db87499-0b3b-4750-a2e8-341b2af64049",
  access_schedule: {
    starts_at: "2025-06-10T15:00:00.000Z",
    ends_at: "2025-06-12T11:00:00.000Z",
  },
  full_name: "Jane Doe",
  email: "jane@example.com",
  phone_number: "+15551234567",
  email_address: "jane@example.com",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->users->update(
    acs_user_id: "5db87499-0b3b-4750-a2e8-341b2af64049",
    access_schedule: [
        "starts_at" => "2025-06-10T15:00:00.000Z",
        "ends_at" => "2025-06-12T11:00:00.000Z",
    ],
    full_name: "Jane Doe",
    email: "jane@example.com",
    phone_number: "+15551234567",
    email_address: "jane@example.com",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs users update --acs_user_id "5db87499-0b3b-4750-a2e8-341b2af64049" --access_schedule {"starts_at":"2025-06-10T15:00:00.000Z","ends_at":"2025-06-12T11:00:00.000Z"} --full_name "Jane Doe" --email "jane@example.com" --phone_number "+15551234567" --email_address "jane@example.com"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
