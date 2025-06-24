# Suspend an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an access system user revokes their access temporarily. To restore an access system user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.


{% tabs %}
{% tab title="JavaScript" %}

Suspends a specified access system user, using the associated user identity.

#### Code

```javascript
await seam.acs.users.suspend();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Suspends a specified access system user, using the associated user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/suspend" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Suspends a specified access system user, using the associated user identity.

#### Code

```python
seam.acs.users.suspend()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Suspends a specified access system user, using the associated user identity.

#### Code

```ruby
seam.acs.users.suspend()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Suspends a specified access system user, using the associated user identity.

#### Code

```php
<?php
$seam->acs->users->suspend();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Suspends a specified access system user, using the associated user identity.

#### Code

```seam_cli
seam acs users suspend
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

**`acs_system_id`** *String*

ID of the access system that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---


## Response

void


---

## Examples


### Suspend a user identity

Suspends a specified access system user, using the associated user identity.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.users.suspend();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/suspend" \
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
seam.acs.users.suspend()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.users.suspend()
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
$seam->acs->users->suspend();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs users suspend
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
