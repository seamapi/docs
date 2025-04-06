# Deactivate a Phone

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).

{% hint style="info" %}
{% tabs %}
{% tab title="Signature" %}
```
POST /phones/deactivate ⇒ void
```

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

{% endtab %}
{% endtabs %}
{% endhint %}


## Request Parameters

### `device_id`

Type: `string`
Required: Yes

Device ID of the desired phone.

---


## Return Type

void
