# Revoke Access to a Device from a User Identity

Revokes access to a specified [device](../../core-concepts/devices/README.md) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
POST /user_identities/revoke_access_to_device ⇒ void
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
