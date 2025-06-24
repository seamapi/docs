# Revoke Access to a Device from a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Revokes access to a specified [device](../../core-concepts/devices/README.md) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Revokes access to a specified device from a specified user identity.

#### Code

```javascript
await seam.userIdentities.revokeAccessToDevice();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Revokes access to a specified device from a specified user identity.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/revoke_access_to_device" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Revokes access to a specified device from a specified user identity.

#### Code

```python
seam.user_identities.revoke_access_to_device()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Revokes access to a specified device from a specified user identity.

#### Code

```ruby
seam.user_identities.revoke_access_to_device()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Revokes access to a specified device from a specified user identity.

#### Code

```php
<?php
$seam->user_identities->revoke_access_to_device();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Revokes access to a specified device from a specified user identity.

#### Code

```seam_cli
seam user-identities revoke-access-to-device
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

**`device_id`** *String* (Required)

ID of the managed device to which you want to revoke access from the user identity.

---

**`user_identity_id`** *String* (Required)

ID of the user identity from which you want to revoke access to a device.

---


## Response

void

