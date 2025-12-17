# Revoke ACS User Access to All Entrances

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code:

```javascript
await seam.acs.users.revokeAccessToAllEntrances({
  user_identity_id: "aadb341e-6cd5-4c8b-9561-8f686f84160c",
  acs_system_id: "d42163f1-ac2d-4c15-a651-5f2e0007b297",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/revoke_access_to_all_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "user_identity_id": "aadb341e-6cd5-4c8b-9561-8f686f84160c",
  "acs_system_id": "d42163f1-ac2d-4c15-a651-5f2e0007b297"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code:

```python
seam.acs.users.revoke_access_to_all_entrances(user_identity_id="aadb341e-6cd5-4c8b-9561-8f686f84160c", acs_system_id="d42163f1-ac2d-4c15-a651-5f2e0007b297")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code:

```ruby
seam.acs.users.revoke_access_to_all_entrances(user_identity_id: "aadb341e-6cd5-4c8b-9561-8f686f84160c", acs_system_id: "d42163f1-ac2d-4c15-a651-5f2e0007b297")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code:

```php
$seam->acs->users->revoke_access_to_all_entrances(
    user_identity_id: "aadb341e-6cd5-4c8b-9561-8f686f84160c",
    acs_system_id: "d42163f1-ac2d-4c15-a651-5f2e0007b297",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Revokes access to all entrances for a specified access system user, using the associated user identity.

#### Code:

```seam_cli
seam acs users revoke-access-to-all-entrances --user_identity_id "aadb341e-6cd5-4c8b-9561-8f686f84160c" --acs_system_id "d42163f1-ac2d-4c15-a651-5f2e0007b297"
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

{% hint style="success" %}
Returns:
**void

{% endhint %}


---

## Examples


### Revoke access to all entrances for an access system user

Revokes access to all entrances for a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.revokeAccessToAllEntrances({
  acs_user_id: "2520b7a7-5c5b-482e-9db2-11d02f4ea6ce",
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
curl --include --request POST "https://connect.getseam.com/acs/users/revoke_access_to_all_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_user_id": "2520b7a7-5c5b-482e-9db2-11d02f4ea6ce"
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
seam.acs.users.revoke_access_to_all_entrances(acs_user_id="2520b7a7-5c5b-482e-9db2-11d02f4ea6ce")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.users.revoke_access_to_all_entrances(acs_user_id: "2520b7a7-5c5b-482e-9db2-11d02f4ea6ce")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->users->revoke_access_to_all_entrances(
    acs_user_id: "2520b7a7-5c5b-482e-9db2-11d02f4ea6ce",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs users revoke-access-to-all-entrances --acs_user_id "2520b7a7-5c5b-482e-9db2-11d02f4ea6ce"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
