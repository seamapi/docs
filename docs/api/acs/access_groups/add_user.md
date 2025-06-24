# Add an ACS User to an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Adds a specified access system user to a specified access group.

#### Code

```javascript
await seam.acs.accessGroups.addUser();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Adds a specified access system user to a specified access group.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/add_user" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Adds a specified access system user to a specified access group.

#### Code

```python
seam.acs.access_groups.add_user()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Adds a specified access system user to a specified access group.

#### Code

```ruby
seam.acs.access_groups.add_user()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Adds a specified access system user to a specified access group.

#### Code

```php
<?php
$seam->acs->access_groups->add_user();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Adds a specified access system user to a specified access group.

#### Code

```seam_cli
seam acs access-groups add-user
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

ID of the access group to which you want to add an access system user.

---

**`acs_user_id`** *String*

ID of the access system user that you want to add to an access group. You can only provide one of acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the desired user identity that you want to add to an access group. You can only provide one of acs_user_id or user_identity_id. If the ACS system contains an ACS user with the same `email_address` or `phone_number` as the user identity that you specify, they are linked, and the access group membership belongs to the ACS user. If the ACS system does not have a corresponding ACS user, one is created.

---


## Response

void


---

## Examples

---

### Add a user identity to an access group

Adds a specified access system user to a specified access group, using the associated user identity.

{% tabs %}
{% tab title="JavaScript" %}



#### Code

```javascript
await seam.acs.accessGroups.addUser();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/add_user" \
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
seam.acs.access_groups.add_user()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code

```ruby
seam.acs.access_groups.add_user()
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
$seam->acs->access_groups->add_user();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code

```seam_cli
seam acs access-groups add-user
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
