# Remove an ACS User from a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Removes a specified access system user from a specified user identity.

#### Code

```javascript
await seam.userIdentities.removeAcsUser();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Removes a specified access system user from a specified user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/remove_acs_user" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Removes a specified access system user from a specified user identity.

#### Code

```python
seam.user_identities.remove_acs_user()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Removes a specified access system user from a specified user identity.

#### Code

```ruby
seam.user_identities.remove_acs_user()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Removes a specified access system user from a specified user identity.

#### Code

```php
<?php
$seam->user_identities->remove_acs_user();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Removes a specified access system user from a specified user identity.

#### Code

```seam_cli
seam user-identities remove-acs-user
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

**`acs_user_id`** *String* (Required)

ID of the access system user that you want to remove from the user identity..

---

**`user_identity_id`** *String* (Required)

ID of the user identity from which you want to remove an access system user.

---


## Response

void

