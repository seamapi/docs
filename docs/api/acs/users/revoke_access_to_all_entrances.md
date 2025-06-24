# Revoke ACS User Access to All Entrances

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code

```javascript
await seam.acs.users.revokeAccessToAllEntrances();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/revoke_access_to_all_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code

```python
seam.acs.users.revoke_access_to_all_entrances()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code

```ruby
seam.acs.users.revoke_access_to_all_entrances()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code

```php
<?php
$seam->acs->users->revoke_access_to_all_entrances();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code

```seam_cli
seam acs users revoke-access-to-all-entrances
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

ID of the access system for which you want to revoke access. You can only provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user for whom you want to revoke access. You can only provide acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity for whom you want to revoke access. You can only provide acs_user_id or user_identity_id.

---


## Response

void


---

## Examples

---

### Revoke access to all entrances for an access system user

Revokes access to all entrances for a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.users.revokeAccessToAllEntrances();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/revoke_access_to_all_entrances" \
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
seam.acs.users.revoke_access_to_all_entrances()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.users.revoke_access_to_all_entrances()
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
$seam->acs->users->revoke_access_to_all_entrances();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs users revoke-access-to-all-entrances
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
