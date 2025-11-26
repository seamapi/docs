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
await seam.acs.users.removeFromAccessGroup({
  user_identity_id: "00ff2781-cce8-4b63-8c65-2b97647d790c",
  acs_access_group_id: "d192f395-4c68-4c33-af41-97a7df5be576",
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
curl --include --request POST "https://connect.getseam.com/acs/users/remove_from_access_group" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "00ff2781-cce8-4b63-8c65-2b97647d790c",
  "acs_access_group_id": "d192f395-4c68-4c33-af41-97a7df5be576"
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
seam.acs.users.remove_from_access_group(
    user_identity_id="00ff2781-cce8-4b63-8c65-2b97647d790c",
    acs_access_group_id="d192f395-4c68-4c33-af41-97a7df5be576",
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
seam.acs.users.remove_from_access_group(
  user_identity_id: "00ff2781-cce8-4b63-8c65-2b97647d790c",
  acs_access_group_id: "d192f395-4c68-4c33-af41-97a7df5be576",
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
$seam->acs->users->remove_from_access_group(
    user_identity_id: "00ff2781-cce8-4b63-8c65-2b97647d790c",
    acs_access_group_id: "d192f395-4c68-4c33-af41-97a7df5be576",
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
seam acs users remove-from-access-group --user_identity_id "00ff2781-cce8-4b63-8c65-2b97647d790c" --acs_access_group_id "d192f395-4c68-4c33-af41-97a7df5be576"
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

ID of the access system user that you want to remove from an access group. You can only provide acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to remove from an access group. You can only provide acs_user_id or user_identity_id.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}


---

## Examples


### Remove an access system user from an access group

Removes a specified access system user from a specified access group.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.removeFromAccessGroup({
  acs_user_id: "6808e2d9-b4eb-4ad8-b200-503877cd1057",
  acs_access_group_id: "d192f395-4c68-4c33-af41-97a7df5be576",
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
curl --include --request POST "https://connect.getseam.com/acs/users/remove_from_access_group" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "6808e2d9-b4eb-4ad8-b200-503877cd1057",
  "acs_access_group_id": "d192f395-4c68-4c33-af41-97a7df5be576"
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
seam.acs.users.remove_from_access_group(
    acs_user_id="6808e2d9-b4eb-4ad8-b200-503877cd1057",
    acs_access_group_id="d192f395-4c68-4c33-af41-97a7df5be576",
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
seam.acs.users.remove_from_access_group(
  acs_user_id: "6808e2d9-b4eb-4ad8-b200-503877cd1057",
  acs_access_group_id: "d192f395-4c68-4c33-af41-97a7df5be576",
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
$seam->acs->users->remove_from_access_group(
    acs_user_id: "6808e2d9-b4eb-4ad8-b200-503877cd1057",
    acs_access_group_id: "d192f395-4c68-4c33-af41-97a7df5be576",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs users remove-from-access-group --acs_user_id "6808e2d9-b4eb-4ad8-b200-503877cd1057" --acs_access_group_id "d192f395-4c68-4c33-af41-97a7df5be576"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
