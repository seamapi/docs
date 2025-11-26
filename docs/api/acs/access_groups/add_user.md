# Add an ACS User to an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Adds a specified access system user to a specified access group.

#### Code:

```javascript
await seam.acs.accessGroups.addUser({
  acs_access_group_id: "55efa954-2b84-42af-8d05-fc1f892df51c",
  acs_user_id: "ebf54c67-746c-471f-a03f-86665148a84c",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Adds a specified access system user to a specified access group.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/add_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "55efa954-2b84-42af-8d05-fc1f892df51c",
  "acs_user_id": "ebf54c67-746c-471f-a03f-86665148a84c"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Adds a specified access system user to a specified access group.

#### Code:

```python
seam.acs.access_groups.add_user(
    acs_access_group_id="55efa954-2b84-42af-8d05-fc1f892df51c",
    acs_user_id="ebf54c67-746c-471f-a03f-86665148a84c",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Adds a specified access system user to a specified access group.

#### Code:

```ruby
seam.acs.access_groups.add_user(
  acs_access_group_id: "55efa954-2b84-42af-8d05-fc1f892df51c",
  acs_user_id: "ebf54c67-746c-471f-a03f-86665148a84c",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Adds a specified access system user to a specified access group.

#### Code:

```php
$seam->acs->access_groups->add_user(
    acs_access_group_id: "55efa954-2b84-42af-8d05-fc1f892df51c",
    acs_user_id: "ebf54c67-746c-471f-a03f-86665148a84c",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Adds a specified access system user to a specified access group.

#### Code:

```seam_cli
seam acs access-groups add-user --acs_access_group_id "55efa954-2b84-42af-8d05-fc1f892df51c" --acs_user_id "ebf54c67-746c-471f-a03f-86665148a84c"
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

ID of the access group to which you want to add an access system user.

---

**`acs_user_id`** *String*

ID of the access system user that you want to add to an access group. You can only provide one of acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the desired user identity that you want to add to an access group. You can only provide one of acs_user_id or user_identity_id. If the ACS system contains an ACS user with the same `email_address` or `phone_number` as the user identity that you specify, they are linked, and the access group membership belongs to the ACS user. If the ACS system does not have a corresponding ACS user, one is created.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}


---

## Examples


### Add a user identity to an access group

Adds a specified access system user to a specified access group, using the associated user identity.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.accessGroups.addUser({
  acs_access_group_id: "55efa954-2b84-42af-8d05-fc1f892df51c",
  user_identity_id: "522d1368-973f-430f-92df-4ff3583ebccf",
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
curl --include --request POST "https://connect.getseam.com/acs/access_groups/add_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "55efa954-2b84-42af-8d05-fc1f892df51c",
  "user_identity_id": "522d1368-973f-430f-92df-4ff3583ebccf"
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
seam.acs.access_groups.add_user(
    acs_access_group_id="55efa954-2b84-42af-8d05-fc1f892df51c",
    user_identity_id="522d1368-973f-430f-92df-4ff3583ebccf",
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
seam.acs.access_groups.add_user(
  acs_access_group_id: "55efa954-2b84-42af-8d05-fc1f892df51c",
  user_identity_id: "522d1368-973f-430f-92df-4ff3583ebccf",
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
$seam->acs->access_groups->add_user(
    acs_access_group_id: "55efa954-2b84-42af-8d05-fc1f892df51c",
    user_identity_id: "522d1368-973f-430f-92df-4ff3583ebccf",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs access-groups add-user --acs_access_group_id "55efa954-2b84-42af-8d05-fc1f892df51c" --user_identity_id "522d1368-973f-430f-92df-4ff3583ebccf"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
