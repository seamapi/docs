# Remove an ACS User from an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code

```javascript
await seam.acs.accessGroups.removeUser();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/remove_user" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code

```python
seam.acs.access_groups.remove_user()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code

```ruby
seam.acs.access_groups.remove_user()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code

```php
<?php
$seam->acs->access_groups->remove_user();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code

```seam_cli
seam acs access-groups remove-user
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

**`acs_access_group_id`** *String* (Required)

ID of the access group from which you want to remove an access system user.

---

**`acs_user_id`** *String*

ID of the access system user that you want to remove from an access group.

---

**`user_identity_id`** *String*

ID of the user identity associated with the user that you want to remove from an access group.

---


## Response

void


---

## Examples

---

### Remove an access system user from an access group

Removes a specified access system user from a specified access group.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.accessGroups.removeUser();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/remove_user" \
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
seam.acs.access_groups.remove_user()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.access_groups.remove_user()
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
$seam->acs->access_groups->remove_user();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs access-groups remove-user
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
