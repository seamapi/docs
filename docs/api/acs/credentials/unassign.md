# Unassign a Credential from an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Unassigns a specified credential from a specified access system user, using the associated user identity ID.

#### Code

```javascript
await seam.acs.credentials.unassign();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Unassigns a specified credential from a specified access system user, using the associated user identity ID.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/unassign" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Unassigns a specified credential from a specified access system user, using the associated user identity ID.

#### Code

```python
seam.acs.credentials.unassign()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Unassigns a specified credential from a specified access system user, using the associated user identity ID.

#### Code

```ruby
seam.acs.credentials.unassign()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Unassigns a specified credential from a specified access system user, using the associated user identity ID.

#### Code

```php
<?php
$seam->acs->credentials->unassign();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Unassigns a specified credential from a specified access system user, using the associated user identity ID.

#### Code

```seam_cli
seam acs credentials unassign
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

**`acs_credential_id`** *String* (Required)

ID of the credential that you want to unassign from an access system user.

---

**`acs_user_id`** *String*

ID of the access system user from which you want to unassign a credential. You can only provide one of acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity from which you want to unassign a credential. You can only provide one of acs_user_id or user_identity_id.

---


## Response

void


---

## Examples


### Unassign a credential from an access system user

Unassigns a specified credential from a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.credentials.unassign();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/unassign" \
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
seam.acs.credentials.unassign()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.credentials.unassign()
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
$seam->acs->credentials->unassign();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs credentials unassign
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
