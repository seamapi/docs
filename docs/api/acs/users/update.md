# Update an ACS User

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates the properties of a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="Signature" %}
```
PATCH /acs/users/update ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>[Authentication Methods](https://docs.seam.co/latest/api/authentication)</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_user_id`** *String* (Required)

ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`access_schedule`** *Object*

`starts_at` and `ends_at` timestamps for the `acs_user`'s access. If you specify an `access_schedule`, you must include both `starts_at` and `ends_at`. `ends_at` must be a time in the future and after `starts_at`.

---

**`email`** *String*

---

**`email_address`** *String*

Email address of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`full_name`** *String*

Full name of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

---

**`hid_acs_system_id`** *String*

---

**`phone_number`** *String*

Phone number of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).

---


## Response

void

---

## Examples
  
### Update an ACS user

Update the properties of a specific [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.users.update({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  phone_number: "+15555550222",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.acs.users.update(
    acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33", phone_number="+15555550222"
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.users.update(
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  phone_number: "+15555550222",
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->users->update(
    acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
    phone_number: "+15555550222"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs users update --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33" --phone_number "+15555550222"
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"
import users "github.com/seamapi/go/users"

func main() {
	client.Acs.Users.Update(
		context.Background(),
		users.UsersUpdateRequest{
			AcsUserId:   api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
			PhoneNumber: api.String("+15555550222"),
		},
	)
}
```

#### Output

```go
nil
```
{% endtab %}

{% endtabs %}


