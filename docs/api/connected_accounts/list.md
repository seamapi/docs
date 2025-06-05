# List Connected Accounts

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [connected accounts](../../core-concepts/connected-accounts/README.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /connected_accounts/list ⇒ { connected_accounts: [connected_account, …] }
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

**`custom_metadata_has`** *Object*

Custom metadata pairs by which you want to filter connected accounts. Returns connected accounts with `custom_metadata` that contains all of the provided key:value pairs.

---

**`customer_ids`** *Array* *of UUIDs*

---

**`limit`** *Number*

Maximum number of records to return per page.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`user_identifier_key`** *String*

Your user ID for the user by which you want to filter connected accounts.

---


## Response

Array of [connected\_accounts](./)

