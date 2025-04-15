# Deactivate a Phone

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).

{% hint style="success" %}
```
POST /phones/deactivate ⇒ void
```
{% endhint %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`device_id`** *String* (Required)

Device ID of the desired phone.

---


## Response

void
