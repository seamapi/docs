# Remove an ACS User from a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Removes a specified access system user from a specified user identity.

#### Code:

```javascript
await seam.userIdentities.removeAcsUser({
  user_identity_id: "802633b6-a66c-4911-b57b-323e900ee531",
  acs_user_id: "faa22878-fa74-4ea0-87f7-2b05c1b06181",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Removes a specified access system user from a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/remove_acs_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "802633b6-a66c-4911-b57b-323e900ee531",
  "acs_user_id": "faa22878-fa74-4ea0-87f7-2b05c1b06181"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Removes a specified access system user from a specified user identity.

#### Code:

```python
seam.user_identities.remove_acs_user(
    user_identity_id="802633b6-a66c-4911-b57b-323e900ee531",
    acs_user_id="faa22878-fa74-4ea0-87f7-2b05c1b06181",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Removes a specified access system user from a specified user identity.

#### Code:

```ruby
seam.user_identities.remove_acs_user(
  user_identity_id: "802633b6-a66c-4911-b57b-323e900ee531",
  acs_user_id: "faa22878-fa74-4ea0-87f7-2b05c1b06181",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Removes a specified access system user from a specified user identity.

#### Code:

```php
$seam->user_identities->remove_acs_user(
    user_identity_id: "802633b6-a66c-4911-b57b-323e900ee531",
    acs_user_id: "faa22878-fa74-4ea0-87f7-2b05c1b06181",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Removes a specified access system user from a specified user identity.

#### Code:

```seam_cli
seam user-identities remove-acs-user --user_identity_id "802633b6-a66c-4911-b57b-323e900ee531" --acs_user_id "faa22878-fa74-4ea0-87f7-2b05c1b06181"
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

ID of the access system user that you want to remove from the user identity..

---

**`user_identity_id`** *String* (Required)

ID of the user identity from which you want to remove an access system user.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

