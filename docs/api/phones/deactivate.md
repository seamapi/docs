# Deactivate a Phone

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).

{% hint style="success" %}
```
POST /phones/deactivate ⇒ void
```
{% endhint %}

## Parameters

**`device_id`** *String* (Required)

Device ID of the desired phone.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

void
