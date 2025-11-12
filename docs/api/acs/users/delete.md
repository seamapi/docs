# Delete an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Deletes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) and invalidates the access system user's [credentials](../../../capability-guides/access-systems/managing-credentials.md).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code:

```javascript
await seam.acs.users.delete({
  user_identity_id: "586c225c-b05c-4af4-8679-9c8a46066cce",
  acs_system_id: "1c655fbd-ecd7-49fc-a57e-b6fb67bd8d64",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "586c225c-b05c-4af4-8679-9c8a46066cce",
  "acs_system_id": "1c655fbd-ecd7-49fc-a57e-b6fb67bd8d64"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code:

```python
seam.acs.users.delete(
    user_identity_id="586c225c-b05c-4af4-8679-9c8a46066cce",
    acs_system_id="1c655fbd-ecd7-49fc-a57e-b6fb67bd8d64",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code:

```ruby
seam.acs.users.delete(
  user_identity_id: "586c225c-b05c-4af4-8679-9c8a46066cce",
  acs_system_id: "1c655fbd-ecd7-49fc-a57e-b6fb67bd8d64",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code:

```php
$seam->acs->users->delete(
    user_identity_id: "586c225c-b05c-4af4-8679-9c8a46066cce",
    acs_system_id: "1c655fbd-ecd7-49fc-a57e-b6fb67bd8d64"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a specified access system user and invalidates the access system user's credentials.

#### Code:

```seam_cli
seam acs users delete --user_identity_id "586c225c-b05c-4af4-8679-9c8a46066cce" --acs_system_id "1c655fbd-ecd7-49fc-a57e-b6fb67bd8d64"
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

ID of the access system that you want to delete. You must provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to delete. You must provide either acs_user_id or user_identity_id

---

**`user_identity_id`** *String*

ID of the user identity that you want to delete. You must provide either acs_user_id or user_identity_id. If you provide user_identity_id, you must also provide acs_system_id.

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}


---

## Examples


### Delete an access system user

Deletes a specified access system user and invalidates the access system user's credentials.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.delete({
  acs_user_id: "8d483a94-5cbc-425a-a6ee-bd9825820c26",
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
curl --include --request POST "https://connect.getseam.com/acs/users/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "8d483a94-5cbc-425a-a6ee-bd9825820c26"
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
seam.acs.users.delete(acs_user_id="8d483a94-5cbc-425a-a6ee-bd9825820c26")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.users.delete(acs_user_id: "8d483a94-5cbc-425a-a6ee-bd9825820c26")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->users->delete(acs_user_id: "8d483a94-5cbc-425a-a6ee-bd9825820c26");
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs users delete --acs_user_id "8d483a94-5cbc-425a-a6ee-bd9825820c26"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
