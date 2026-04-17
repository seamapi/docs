# Revoke Access to a Device from a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Revokes access to a specified [device](../../core-concepts/devices/README.md) from a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Revokes access to a specified device from a specified user identity.

#### Code:

```javascript
await seam.userIdentities.revokeAccessToDevice({
  user_identity_id: "a5a48343-a95e-4f51-a5d9-1e4241b73553",
  device_id: "92874f9e-a2b5-4d49-a039-0280196ad4d5",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Revokes access to a specified device from a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/revoke_access_to_device" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "a5a48343-a95e-4f51-a5d9-1e4241b73553",
  "device_id": "92874f9e-a2b5-4d49-a039-0280196ad4d5"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Revokes access to a specified device from a specified user identity.

#### Code:

```python
seam.user_identities.revoke_access_to_device(
    user_identity_id="a5a48343-a95e-4f51-a5d9-1e4241b73553",
    device_id="92874f9e-a2b5-4d49-a039-0280196ad4d5",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Revokes access to a specified device from a specified user identity.

#### Code:

```ruby
seam.user_identities.revoke_access_to_device(
  user_identity_id: "a5a48343-a95e-4f51-a5d9-1e4241b73553",
  device_id: "92874f9e-a2b5-4d49-a039-0280196ad4d5",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Revokes access to a specified device from a specified user identity.

#### Code:

```php
$seam->user_identities->revoke_access_to_device(
    user_identity_id: "a5a48343-a95e-4f51-a5d9-1e4241b73553",
    device_id: "92874f9e-a2b5-4d49-a039-0280196ad4d5",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Revokes access to a specified device from a specified user identity.

#### Code:

```seam_cli
seam user-identities revoke-access-to-device --user_identity_id "a5a48343-a95e-4f51-a5d9-1e4241b73553" --device_id "92874f9e-a2b5-4d49-a039-0280196ad4d5"
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

**`device_id`** *String* (Required)

ID of the managed device to which you want to revoke access from the user identity.

---

**`user_identity_id`** *String* (Required)

ID of the user identity from which you want to revoke access to a device.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

