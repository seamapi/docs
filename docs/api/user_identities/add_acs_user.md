# Add an ACS User to a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Adds a specified access system user to a specified user identity.

#### Code

```javascript
await seam.userIdentities.addAcsUser();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Adds a specified access system user to a specified user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/add_acs_user" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Adds a specified access system user to a specified user identity.

#### Code

```python
seam.user_identities.add_acs_user()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Adds a specified access system user to a specified user identity.

#### Code

```ruby
seam.user_identities.add_acs_user()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Adds a specified access system user to a specified user identity.

#### Code

```php
<?php
$seam->user_identities->add_acs_user();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Adds a specified access system user to a specified user identity.

#### Code

```seam_cli
seam user-identities add-acs-user
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

ID of the access system user that you want to add to the user identity.

---

**`user_identity_id`** *String* (Required)

ID of the user identity to which you want to add an access system user.

---


## Response

void

