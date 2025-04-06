# List Phones

Returns a list of all phones. To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.

{% hint style="success" %}
```
POST /phones/list ⇒ { phones: [phone, …] }
```
{% endhint %}

## Parameters

**`acs_credential_id`** **

ID of the [credential](../../capability-guides/access-systems/managing-credentials.md) by which to filter the list of returned phones.

---

**`owner_user_identity_id`** **

ID of the user identity that represents the owner by which to filter the list of returned phones.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

Array<[phone](./)>
