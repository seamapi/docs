# Update a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified user identity.

#### Code:

```javascript
await seam.userIdentities.update({
  user_identity_id: "dc378ea9-358e-4999-b295-d0f3e0d5ff51",
  user_identity_key: "jane_doe",
  email_address: "jane@example.com",
  phone_number: "+15551234567",
  full_name: "Jane Doe",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "dc378ea9-358e-4999-b295-d0f3e0d5ff51",
  "user_identity_key": "jane_doe",
  "email_address": "jane@example.com",
  "phone_number": "+15551234567",
  "full_name": "Jane Doe"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified user identity.

#### Code:

```python
seam.user_identities.update(
    user_identity_id="dc378ea9-358e-4999-b295-d0f3e0d5ff51",
    user_identity_key="jane_doe",
    email_address="jane@example.com",
    phone_number="+15551234567",
    full_name="Jane Doe",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified user identity.

#### Code:

```ruby
seam.user_identities.update(
  user_identity_id: "dc378ea9-358e-4999-b295-d0f3e0d5ff51",
  user_identity_key: "jane_doe",
  email_address: "jane@example.com",
  phone_number: "+15551234567",
  full_name: "Jane Doe",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified user identity.

#### Code:

```php
$seam->user_identities->update(
    user_identity_id: "dc378ea9-358e-4999-b295-d0f3e0d5ff51",
    user_identity_key: "jane_doe",
    email_address: "jane@example.com",
    phone_number: "+15551234567",
    full_name: "Jane Doe",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified user identity.

#### Code:

```seam_cli
seam user-identities update --user_identity_id "dc378ea9-358e-4999-b295-d0f3e0d5ff51" --user_identity_key "jane_doe" --email_address "jane@example.com" --phone_number "+15551234567" --full_name "Jane Doe"
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

{% hint style="success" %}
Returns:
void**

{% endhint %}

