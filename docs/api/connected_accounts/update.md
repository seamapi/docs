# Update a Connected Account

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates a [connected account](../../core-concepts/connected-accounts/README.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /connected_accounts/update ⇒ void
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

**`connected_account_id`** *String* (Required)

ID of the connected account that you want to update.

---

**`automatically_manage_new_devices`** *Boolean*

Indicates whether newly-added devices should appear as [managed devices](../../core-concepts/devices/managed-and-unmanaged-devices.md).

---

**`custom_metadata`** *Object*

Custom metadata that you want to associate with the connected account. Supports up to 50 JSON key:value pairs. [Adding custom metadata to a connected account](../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md) enables you to store custom information, like customer details or internal IDs from your application. Then, you can [filter connected accounts by the desired metadata](../../core-concepts/connected-accounts/filtering-connected-accounts-by-custom-metadata.md).

---


## Response

void

