# Update an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Updates the properties of a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code

```javascript
await seam.acs.users.update();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/update" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code

```python
seam.acs.users.update()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code

```ruby
seam.acs.users.update()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code

```php
<?php
$seam->acs->users->update();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Updates the properties of a specified access system user, using the associated user identity.

#### Code

```seam_cli
seam acs users update
```

#### Output

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

void


---

## Examples


### Update an access system user

Updates the properties of a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.users.update();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/update" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}



#### Code

```python
seam.acs.users.update()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.users.update()
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
$seam->acs->users->update();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs users update
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
