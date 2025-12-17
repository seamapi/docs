# Suspend an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an access system user revokes their access temporarily. To restore an access system user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.


{% tabs %}
{% tab title="JavaScript" %}

Suspends a specified access system user, using the associated user identity.

#### Code:

```javascript
await seam.acs.users.suspend({
  user_identity_id: "73fac667-bd93-4548-add2-e75161d69c7c",
  acs_system_id: "f2240088-0bc7-4edb-80d1-485bd956ba7d",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Suspends a specified access system user, using the associated user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/suspend" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "73fac667-bd93-4548-add2-e75161d69c7c",
  "acs_system_id": "f2240088-0bc7-4edb-80d1-485bd956ba7d"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Suspends a specified access system user, using the associated user identity.

#### Code:

```python
seam.acs.users.suspend(
    user_identity_id="73fac667-bd93-4548-add2-e75161d69c7c",
    acs_system_id="f2240088-0bc7-4edb-80d1-485bd956ba7d",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Suspends a specified access system user, using the associated user identity.

#### Code:

```ruby
seam.acs.users.suspend(
  user_identity_id: "73fac667-bd93-4548-add2-e75161d69c7c",
  acs_system_id: "f2240088-0bc7-4edb-80d1-485bd956ba7d",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Suspends a specified access system user, using the associated user identity.

#### Code:

```php
$seam->acs->users->suspend(
    user_identity_id: "73fac667-bd93-4548-add2-e75161d69c7c",
    acs_system_id: "f2240088-0bc7-4edb-80d1-485bd956ba7d",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Suspends a specified access system user, using the associated user identity.

#### Code:

```seam_cli
seam acs users suspend --user_identity_id "73fac667-bd93-4548-add2-e75161d69c7c" --acs_system_id "f2240088-0bc7-4edb-80d1-485bd956ba7d"
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

ID of the access system that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}


---

## Examples


### Suspend a user identity

Suspends a specified access system user, using the associated user identity.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.suspend({
  acs_user_id: "8f934186-1dbc-4098-9f66-d1b202abec9d",
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
curl --include --request POST "https://connect.getseam.com/acs/users/suspend" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "8f934186-1dbc-4098-9f66-d1b202abec9d"
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
seam.acs.users.suspend(acs_user_id="8f934186-1dbc-4098-9f66-d1b202abec9d")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.users.suspend(acs_user_id: "8f934186-1dbc-4098-9f66-d1b202abec9d")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->users->suspend(acs_user_id: "8f934186-1dbc-4098-9f66-d1b202abec9d");
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs users suspend --acs_user_id "8f934186-1dbc-4098-9f66-d1b202abec9d"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
