# List Connected Accounts


- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [connected accounts](../../core-concepts/connected-accounts/README.md).


{% tabs %}
{% tab title="JavaScript" %}

List all connected accounts.

#### Code

```javascript
await seam.connectedAccounts.list();
```

#### Output

```javascript
[
  {
    "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c",
    "created_at": "2022-08-24T10:38:05.128Z",
    "account_type": "schlage"
  },
  {
    "connected_account_id": "dc0df710-376c-4ec3-9b2b-2b7f788bdfa8",
    "created_at": "2022-07-04T08:40:02.110Z",
    "account_type": "kwikset"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

List all connected accounts.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{
  "connected_accounts": [
    {
      "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c",
      "created_at": "2022-08-24T10:38:05.128Z",
      "account_type": "schlage"
    },
    {
      "connected_account_id": "dc0df710-376c-4ec3-9b2b-2b7f788bdfa8",
      "created_at": "2022-07-04T08:40:02.110Z",
      "account_type": "kwikset"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

List all connected accounts.

#### Code

```python
seam.connected_accounts.list()
```

#### Output

```python
[
    ConnectedAccount(
        connected_account_id="23e4eb21-6e93-48c4-a077-bf503246d47c",
        created_at="2022-08-24T10:38:05.128Z",
        account_type="schlage",
    ),
    ConnectedAccount(
        connected_account_id="dc0df710-376c-4ec3-9b2b-2b7f788bdfa8",
        created_at="2022-07-04T08:40:02.110Z",
        account_type="kwikset",
    ),
]
```
{% endtab %}

{% tab title="Ruby" %}

List all connected accounts.

#### Code

```ruby
seam.connected_accounts.list()
```

#### Output

```ruby
[
  {
    "connected_account_id" => "23e4eb21-6e93-48c4-a077-bf503246d47c",
    "created_at" => "2022-08-24T10:38:05.128Z",
    "account_type" => "schlage",
  },
  {
    "connected_account_id" => "dc0df710-376c-4ec3-9b2b-2b7f788bdfa8",
    "created_at" => "2022-07-04T08:40:02.110Z",
    "account_type" => "kwikset",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

List all connected accounts.

#### Code

```php
<?php
$seam->connected_accounts->list();
```

#### Output

```php
<?php
[
    [
        "connected_account_id" => "23e4eb21-6e93-48c4-a077-bf503246d47c",
        "created_at" => "2022-08-24T10:38:05.128Z",
        "account_type" => "schlage",
    ],
    [
        "connected_account_id" => "dc0df710-376c-4ec3-9b2b-2b7f788bdfa8",
        "created_at" => "2022-07-04T08:40:02.110Z",
        "account_type" => "kwikset",
    ],
];
```
{% endtab %}

{% tab title="Go" %}

List all connected accounts.

#### Code

```go
package main

func main() {
	client.ConnectedAccounts.List(context.Background())
}
```

#### Output

```go
[]api.ConnectedAccount{api.ConnectedAccount{ConnectedAccountId: "23e4eb21-6e93-48c4-a077-bf503246d47c", CreatedAt: "2022-08-24T10:38:05.128Z", AccountType: "schlage"}, api.ConnectedAccount{ConnectedAccountId: "dc0df710-376c-4ec3-9b2b-2b7f788bdfa8", CreatedAt: "2022-07-04T08:40:02.110Z", AccountType: "kwikset"}}
```
{% endtab %}

{% tab title="Seam CLI" %}

List all connected accounts.

#### Code

```seam_cli
seam connected-accounts list
```

#### Output

```seam_cli
[
  {
    "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c",
    "created_at": "2022-08-24T10:38:05.128Z",
    "account_type": "schlage"
  },
  {
    "connected_account_id": "dc0df710-376c-4ec3-9b2b-2b7f788bdfa8",
    "created_at": "2022-07-04T08:40:02.110Z",
    "account_type": "kwikset"
  }
]
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


---

## Examples

