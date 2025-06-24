# Remove an ACS User from an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `acs_access_group_id` and `acs_user_id` to remove an ACS user from an access group.

#### Code

```javascript
await seam.acs.accessGroups.removeUser({
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
  acs_user_id: "33333333-3333-3333-3333-333333333333",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Specify the `acs_access_group_id` and `acs_user_id` to remove an ACS user from an access group.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/remove_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
  "acs_user_id": "33333333-3333-3333-3333-333333333333"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the `acs_access_group_id` and `acs_user_id` to remove an ACS user from an access group.

#### Code

```python
seam.acs.access_groups.remove_user(
    acs_access_group_id="44444444-4444-4444-4444-444444444444",
    acs_user_id="33333333-3333-3333-3333-333333333333",
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `acs_access_group_id` and `acs_user_id` to remove an ACS user from an access group.

#### Code

```ruby
seam.acs.access_groups.remove_user(
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
  acs_user_id: "33333333-3333-3333-3333-333333333333",
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Specify the `acs_access_group_id` and `acs_user_id` to remove an ACS user from an access group.

#### Code

```php
<?php
$seam->acs->access_groups->remove_user(
    acs_access_group_id: "44444444-4444-4444-4444-444444444444",
    acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the `acs_access_group_id` and `acs_user_id` to remove an ACS user from an access group.

#### Code

```seam_cli
seam acs access-groups remove-user --acs_access_group_id "44444444-4444-4444-4444-444444444444" --acs_user_id "33333333-3333-3333-3333-333333333333"
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

