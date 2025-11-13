# Unsuspend an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

[Unsuspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#unsuspend-an-acs-user) a specified suspended [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). While [suspending an access system user](https://docs.seam.co/latest/api/acs/users/suspend) revokes their access temporarily, unsuspending the access system user restores their access.


{% tabs %}
{% tab title="JavaScript" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code:

```javascript
await seam.acs.users.unsuspend({
  user_identity_id: "6a42fbcf-da1a-40f8-8221-596774f97537",
  acs_system_id: "264ea3f9-e483-469e-aada-c98c094d5521",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/unsuspend" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "6a42fbcf-da1a-40f8-8221-596774f97537",
  "acs_system_id": "264ea3f9-e483-469e-aada-c98c094d5521"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code:

```python
seam.acs.users.unsuspend(
    user_identity_id="6a42fbcf-da1a-40f8-8221-596774f97537",
    acs_system_id="264ea3f9-e483-469e-aada-c98c094d5521",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code:

```ruby
seam.acs.users.unsuspend(
  user_identity_id: "6a42fbcf-da1a-40f8-8221-596774f97537",
  acs_system_id: "264ea3f9-e483-469e-aada-c98c094d5521",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code:

```php
$seam->acs->users->unsuspend(
    user_identity_id: "6a42fbcf-da1a-40f8-8221-596774f97537",
    acs_system_id: "264ea3f9-e483-469e-aada-c98c094d5521",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Unsuspends a specified suspended access system user, using the associated user identity.

#### Code:

```seam_cli
seam acs users unsuspend --user_identity_id "6a42fbcf-da1a-40f8-8221-596774f97537" --acs_system_id "264ea3f9-e483-469e-aada-c98c094d5521"
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

ID of the access system of the user that you want to unsuspend. You can only provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to unsuspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to unsuspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}


---

## Examples


### Unsuspend an access system user

Unsuspends a specified suspended access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.unsuspend({
  acs_user_id: "56dd7042-4134-4788-9212-53f25f2939e1",
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
curl --include --request POST "https://connect.getseam.com/acs/users/unsuspend" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "56dd7042-4134-4788-9212-53f25f2939e1"
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
seam.acs.users.unsuspend(acs_user_id="56dd7042-4134-4788-9212-53f25f2939e1")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.users.unsuspend(acs_user_id: "56dd7042-4134-4788-9212-53f25f2939e1")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->users->unsuspend(
    acs_user_id: "56dd7042-4134-4788-9212-53f25f2939e1",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs users unsuspend --acs_user_id "56dd7042-4134-4788-9212-53f25f2939e1"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
