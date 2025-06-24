# Unsuspend an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

[Unsuspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#unsuspend-an-acs-user) a specified suspended [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). While [suspending an access system user](https://docs.seam.co/latest/api/acs/users/suspend) revokes their access temporarily, unsuspending the access system user restores their access.


{% tabs %}
{% tab title="JavaScript" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code

```javascript
await seam.acs.users.unsuspend();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/unsuspend" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code

```python
seam.acs.users.unsuspend()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code

```ruby
seam.acs.users.unsuspend()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code

```php
<?php
$seam->acs->users->unsuspend();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code

```seam_cli
seam acs users unsuspend
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

ID of the access system of the user that you want to unsuspend. You can only provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to unsuspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to unsuspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---


## Response

void


---

## Examples


### Unsuspend an access system user

Unsuspends a specified suspended access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.users.unsuspend();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/unsuspend" \
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
seam.acs.users.unsuspend()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.users.unsuspend()
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
$seam->acs->users->unsuspend();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs users unsuspend
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
