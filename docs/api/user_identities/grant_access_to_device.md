# Grant a User Identity Access to a Device

Grants a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) access to a specified [device](../../core-concepts/devices/README.md).

{% hint style="success" %}
```
PUT /user_identities/grant_access_to_device ⇒ void
```
{% endhint %}

## Parameters

**`device_id`** *String* (Required)

ID of the desired managed device.

---

**`user_identity_id`** *String* (Required)

ID of the desired user identity.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

void
