# Grant an ACS User Access to an Entrance

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Grants a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) access to a specified [access system entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


{% tabs %}
{% tab title="JavaScript" %}

Grants a specified access system user access to a specified access system entrance, using the associated user identity.

#### Code

```javascript
await seam.acs.entrances.grantAccess();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Grants a specified access system user access to a specified access system entrance, using the associated user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/grant_access" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Grants a specified access system user access to a specified access system entrance, using the associated user identity.

#### Code

```python
seam.acs.entrances.grant_access()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Grants a specified access system user access to a specified access system entrance, using the associated user identity.

#### Code

```ruby
seam.acs.entrances.grant_access()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Grants a specified access system user access to a specified access system entrance, using the associated user identity.

#### Code

```php
<?php
$seam->acs->entrances->grant_access();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Grants a specified access system user access to a specified access system entrance, using the associated user identity.

#### Code

```seam_cli
seam acs entrances grant-access
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

**`acs_entrance_id`** *String* (Required)

ID of the entrance to which you want to grant an access system user access.

---

**`acs_user_id`** *String*

ID of the access system user to whom you want to grant access to an entrance. You can only provide one of acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity to whom you want to grant access to an entrance. You can only provide one of acs_user_id or user_identity_id. If the ACS system contains an ACS user with the same `email_address` or `phone_number` as the user identity that you specify, they are linked, and the access group membership belongs to the ACS user. If the ACS system does not have a corresponding ACS user, one is created.

---


## Response

void


---

## Examples


### Grant an access system user access to an entrance

Grants a specified access system user access to a specified access system entrance.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.entrances.grantAccess();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/grant_access" \
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
seam.acs.entrances.grant_access()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.entrances.grant_access()
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
$seam->acs->entrances->grant_access();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs entrances grant-access
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
