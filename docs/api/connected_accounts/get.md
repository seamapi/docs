# Get a Connected Account

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [connected account](../../core-concepts/connected-accounts/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `connected_account_id` of the connected account that you want to get.

#### Code

```javascript
await seam.connectedAccounts.get({
  connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c",
});
```

#### Output

```javascript
[
  {
    "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c",
    "created_at": "2022-08-24T10:38:05.128Z",
    "account_type": "schlage"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Specify the `connected_account_id` of the connected account that you want to get.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c"
}
EOF
```

#### Output

```curl
{
  "connected_account": [
    {
      "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c",
      "created_at": "2022-08-24T10:38:05.128Z",
      "account_type": "schlage"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `connected_account_id` of the connected account that you want to get.

#### Code

```python
seam.connected_accounts.get(connected_account_id="23e4eb21-6e93-48c4-a077-bf503246d47c")
```

#### Output

```python
[
    ConnectedAccount(
        connected_account_id="23e4eb21-6e93-48c4-a077-bf503246d47c",
        created_at="2022-08-24T10:38:05.128Z",
        account_type="schlage",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `connected_account_id` of the connected account that you want to get.

#### Code

```ruby
seam.connected_accounts.get(connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c")
```

#### Output

```ruby
[
  {
    "connected_account_id" => "23e4eb21-6e93-48c4-a077-bf503246d47c",
    "created_at" => "2022-08-24T10:38:05.128Z",
    "account_type" => "schlage",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Specify the `connected_account_id` of the connected account that you want to get.

#### Code

```php
<?php
$seam->connected_accounts->get(
    connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c"
);
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
];
```
{% endtab %}

{% tab title="Go" %}

Specify the `connected_account_id` of the connected account that you want to get.

#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.ConnectedAccounts.Get(
		context.Background(),
		api.ConnectedAccountsGetRequest{
			ConnectedAccountId: api.String("23e4eb21-6e93-48c4-a077-bf503246d47c"),
		},
	)
}
```

#### Output

```go
[]api.ConnectedAccount{api.ConnectedAccount{ConnectedAccountId: "23e4eb21-6e93-48c4-a077-bf503246d47c", CreatedAt: "2022-08-24T10:38:05.128Z", AccountType: "schlage"}}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the `connected_account_id` of the connected account that you want to get.

#### Code

```seam_cli
seam connected-accounts get --connected_account_id "23e4eb21-6e93-48c4-a077-bf503246d47c"
```

#### Output

```seam_cli
[
  {
    "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c",
    "created_at": "2022-08-24T10:38:05.128Z",
    "account_type": "schlage"
  }
]
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

