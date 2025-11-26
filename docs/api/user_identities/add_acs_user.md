# Add an ACS User to a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).

You must specify either `user_identity_id` or `user_identity_key` to identify the user identity.

If `user_identity_key` is provided, but the user identity doesn't exist, a new user identity will be created automatically using information from the ACS user.


{% tabs %}
{% tab title="JavaScript" %}

Adds a specified access system user to a specified user identity.

#### Code:

```javascript
await seam.userIdentities.addAcsUser({
  user_identity_id: "68dd3d7e-c90b-4c89-ad70-3e589014ed87",
  acs_user_id: "d73f4706-67e3-419d-899e-ec957a75ee0c",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Adds a specified access system user to a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/add_acs_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "68dd3d7e-c90b-4c89-ad70-3e589014ed87",
  "acs_user_id": "d73f4706-67e3-419d-899e-ec957a75ee0c"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Adds a specified access system user to a specified user identity.

#### Code:

```python
seam.user_identities.add_acs_user(
    user_identity_id="68dd3d7e-c90b-4c89-ad70-3e589014ed87",
    acs_user_id="d73f4706-67e3-419d-899e-ec957a75ee0c",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Adds a specified access system user to a specified user identity.

#### Code:

```ruby
seam.user_identities.add_acs_user(
  user_identity_id: "68dd3d7e-c90b-4c89-ad70-3e589014ed87",
  acs_user_id: "d73f4706-67e3-419d-899e-ec957a75ee0c",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Adds a specified access system user to a specified user identity.

#### Code:

```php
$seam->user_identities->add_acs_user(
    user_identity_id: "68dd3d7e-c90b-4c89-ad70-3e589014ed87",
    acs_user_id: "d73f4706-67e3-419d-899e-ec957a75ee0c",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Adds a specified access system user to a specified user identity.

#### Code:

```seam_cli
seam user-identities add-acs-user --user_identity_id "68dd3d7e-c90b-4c89-ad70-3e589014ed87" --acs_user_id "d73f4706-67e3-419d-899e-ec957a75ee0c"
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

**`acs_user_id`** *String* (Required)

ID of the access system user that you want to add to the user identity.

---

**`user_identity_id`** *String*

ID of the user identity to which you want to add an access system user.

---

**`user_identity_key`** *String*

Key of the user identity to which you want to add an access system user.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

