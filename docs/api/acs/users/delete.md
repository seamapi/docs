# Delete an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Deletes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) and invalidates the access system user's [credentials](../../../capability-guides/access-systems/managing-credentials.md).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code

```javascript
await seam.acs.users.delete();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code

```python
seam.acs.users.delete()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code

```ruby
seam.acs.users.delete()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code

```php
<?php
$seam->acs->users->delete();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code

```seam_cli
seam acs users delete
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

ID of the access system that you want to delete. You must provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to delete. You must provide either acs_user_id or user_identity_id

---

**`user_identity_id`** *String*

ID of the user identity that you want to delete. You must provide either acs_user_id or user_identity_id. If you provide user_identity_id, you must also provide acs_system_id.

---


## Response

void


---

## Examples


### Delete an access system user

Deletes a specified access system user and invalidates the access system user's credentials.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.users.delete();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/delete" \
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
seam.acs.users.delete()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.users.delete()
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
$seam->acs->users->delete();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs users delete
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
