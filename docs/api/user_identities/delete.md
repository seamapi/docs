# Delete a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity). This deletes the user identity and all associated resources, including any [credentials](https://docs.seam.co/latest/api/access-control-systems/credentials), [acs users](https://docs.seam.co/latest/api/access-control-systems/users) and [client sessions](https://docs.seam.co/latest/api/client_sessions).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a specified user identity.

#### Code:

```javascript
await seam.userIdentities.delete({
  user_identity_id: "7ad2566e-6fd8-466d-b8e4-c10a14a74fd3",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "7ad2566e-6fd8-466d-b8e4-c10a14a74fd3"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a specified user identity.

#### Code:

```python
seam.user_identities.delete(user_identity_id="7ad2566e-6fd8-466d-b8e4-c10a14a74fd3")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a specified user identity.

#### Code:

```ruby
seam.user_identities.delete(user_identity_id: "7ad2566e-6fd8-466d-b8e4-c10a14a74fd3")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a specified user identity.

#### Code:

```php
$seam->user_identities->delete(
    user_identity_id: "7ad2566e-6fd8-466d-b8e4-c10a14a74fd3"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a specified user identity.

#### Code:

```seam_cli
seam user-identities delete --user_identity_id "7ad2566e-6fd8-466d-b8e4-c10a14a74fd3"
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

ID of the user identity that you want to delete.

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}

