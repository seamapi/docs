# Sync a Connected Account

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Request a [connected account](../../core-concepts/connected-accounts/README.md) sync attempt for the specified connected_account_id.

{% tabs %}
{% tab title="Signature" %}
```
POST /connected_accounts/sync ⇒ void
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

ID of the connected account that you want to sync.

---


## Response

void

