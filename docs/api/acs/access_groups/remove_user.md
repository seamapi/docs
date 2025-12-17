# Remove an ACS User from an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code:

```javascript
await seam.acs.accessGroups.removeUser({
  acs_access_group_id: "e320069d-59ba-4adb-a465-f4f01a833e07",
  user_identity_id: "3d662a00-5d7c-41b4-aee7-16c385964149",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/remove_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "e320069d-59ba-4adb-a465-f4f01a833e07",
  "user_identity_id": "3d662a00-5d7c-41b4-aee7-16c385964149"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code:

```python
seam.acs.access_groups.remove_user(
    acs_access_group_id="e320069d-59ba-4adb-a465-f4f01a833e07",
    user_identity_id="3d662a00-5d7c-41b4-aee7-16c385964149",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code:

```ruby
seam.acs.access_groups.remove_user(
  acs_access_group_id: "e320069d-59ba-4adb-a465-f4f01a833e07",
  user_identity_id: "3d662a00-5d7c-41b4-aee7-16c385964149",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code:

```php
$seam->acs->access_groups->remove_user(
    acs_access_group_id: "e320069d-59ba-4adb-a465-f4f01a833e07",
    user_identity_id: "3d662a00-5d7c-41b4-aee7-16c385964149",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Removes a specified access system user from a specified access group, using the associated user identity.

#### Code:

```seam_cli
seam acs access-groups remove-user --acs_access_group_id "e320069d-59ba-4adb-a465-f4f01a833e07" --user_identity_id "3d662a00-5d7c-41b4-aee7-16c385964149"
```

#### Output:

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

{% hint style="success" %}
Returns:
**void

{% endhint %}


---

## Examples


### Remove an access system user from an access group

Removes a specified access system user from a specified access group.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.accessGroups.removeUser({
  acs_access_group_id: "e320069d-59ba-4adb-a465-f4f01a833e07",
  acs_user_id: "64cfac1f-61c0-4c76-8fa2-3e9ab680edc8",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/remove_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "e320069d-59ba-4adb-a465-f4f01a833e07",
  "acs_user_id": "64cfac1f-61c0-4c76-8fa2-3e9ab680edc8"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.access_groups.remove_user(
    acs_access_group_id="e320069d-59ba-4adb-a465-f4f01a833e07",
    acs_user_id="64cfac1f-61c0-4c76-8fa2-3e9ab680edc8",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.access_groups.remove_user(
  acs_access_group_id: "e320069d-59ba-4adb-a465-f4f01a833e07",
  acs_user_id: "64cfac1f-61c0-4c76-8fa2-3e9ab680edc8",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->access_groups->remove_user(
    acs_access_group_id: "e320069d-59ba-4adb-a465-f4f01a833e07",
    acs_user_id: "64cfac1f-61c0-4c76-8fa2-3e9ab680edc8",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs access-groups remove-user --acs_access_group_id "e320069d-59ba-4adb-a465-f4f01a833e07" --acs_user_id "64cfac1f-61c0-4c76-8fa2-3e9ab680edc8"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
