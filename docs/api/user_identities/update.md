# Update a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified user identity.

#### Code

```javascript
await seam.userIdentities.update();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/update" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified user identity.

#### Code

```python
seam.user_identities.update()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified user identity.

#### Code

```ruby
seam.user_identities.update()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified user identity.

#### Code

```php
<?php
$seam->user_identities->update();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified user identity.

#### Code

```seam_cli
seam user-identities update
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

**`user_identity_id`** *String* (Required)

ID of the user identity that you want to update.

---

**`email_address`** *String*

Unique email address for the user identity.

---

**`full_name`** *String*

Full name of the user associated with the user identity.

---

**`phone_number`** *String*

Unique phone number for the user identity.

---

**`user_identity_key`** *String*

Unique key for the user identity.

---


## Response

void

