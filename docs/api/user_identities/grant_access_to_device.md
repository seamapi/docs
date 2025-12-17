# Grant a User Identity Access to a Device

- [Request Parameters](#request-parameters)
- [Response](#response)

Grants a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) access to a specified [device](../../core-concepts/devices/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Grants a specified user identity access to a specified device.

#### Code:

```javascript
await seam.userIdentities.grantAccessToDevice({
  user_identity_id: "4e9b7099-bcad-4af6-bb78-88b96cc347bd",
  device_id: "6de31c5d-c8a3-4b25-a86b-a9c5075a5eb8",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Grants a specified user identity access to a specified device.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/grant_access_to_device" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "4e9b7099-bcad-4af6-bb78-88b96cc347bd",
  "device_id": "6de31c5d-c8a3-4b25-a86b-a9c5075a5eb8"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Grants a specified user identity access to a specified device.

#### Code:

```python
seam.user_identities.grant_access_to_device(
    user_identity_id="4e9b7099-bcad-4af6-bb78-88b96cc347bd",
    device_id="6de31c5d-c8a3-4b25-a86b-a9c5075a5eb8",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Grants a specified user identity access to a specified device.

#### Code:

```ruby
seam.user_identities.grant_access_to_device(
  user_identity_id: "4e9b7099-bcad-4af6-bb78-88b96cc347bd",
  device_id: "6de31c5d-c8a3-4b25-a86b-a9c5075a5eb8",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Grants a specified user identity access to a specified device.

#### Code:

```php
$seam->user_identities->grant_access_to_device(
    user_identity_id: "4e9b7099-bcad-4af6-bb78-88b96cc347bd",
    device_id: "6de31c5d-c8a3-4b25-a86b-a9c5075a5eb8",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Grants a specified user identity access to a specified device.

#### Code:

```seam_cli
seam user-identities grant-access-to-device --user_identity_id "4e9b7099-bcad-4af6-bb78-88b96cc347bd" --device_id "6de31c5d-c8a3-4b25-a86b-a9c5075a5eb8"
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

ID of the managed device to which you want to grant access to the user identity.

---

**`user_identity_id`** *String* (Required)

ID of the user identity that you want to grant access to a device.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

