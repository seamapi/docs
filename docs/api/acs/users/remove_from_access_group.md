# Remove an ACS User from an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

#### Code

```javascript
await seam.acs.users.removeFromAccessGroup({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/remove_from_access_group" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  "acs_access_group_id": "123e4567-e89b-12d3-a456-426614174000"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

#### Code

```python
seam.acs.users.remove_from_access_group(
    acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33",
    acs_access_group_id="123e4567-e89b-12d3-a456-426614174000",
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

#### Code

```ruby
seam.acs.users.remove_from_access_group(
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000",
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

#### Code

```php
<?php
$seam->acs->users->remove_from_access_group(
    acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
    acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

#### Code

```seam_cli
seam acs users remove-from-access-group --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33" --acs_access_group_id "123e4567-e89b-12d3-a456-426614174000"
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

ID of the access system user that you want to remove from an access group. You can only provide acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to remove from an access group. You can only provide acs_user_id or user_identity_id.

---


## Response

void

