# Get a Connected Account

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [connected account](../../core-concepts/connected-accounts/README.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /connected_accounts/get ⇒ { connected_account }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`connected_account_id`** *String*

ID of the connected account that you want to get.

---

**`email`** *String*

Email address associated with the connected account that you want to get.

---


## Response

[connected\_account](./)

