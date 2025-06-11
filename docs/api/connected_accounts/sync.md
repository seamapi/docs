# Sync a Connected Account

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Request a [connected account](../../core-concepts/connected-accounts/README.md) sync attempt for the specified connected_account_id.


{% tabs %}
{% tab title="JavaScript" %}

Request an on-demand sync of the devices and systems in a connected account.

#### Code

```javascript
await seam.connectedAccounts.sync({
  connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Request an on-demand sync of the devices and systems in a connected account.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/sync" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Request an on-demand sync of the devices and systems in a connected account.

#### Code

```python
seam.connected_accounts.sync(
    connected_account_id="23e4eb21-6e93-48c4-a077-bf503246d47c"
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Request an on-demand sync of the devices and systems in a connected account.

#### Code

```ruby
seam.connected_accounts.sync(connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c")
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Request an on-demand sync of the devices and systems in a connected account.

#### Code

```php
<?php
$seam->connected_accounts->sync(
    connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Go" %}

Request an on-demand sync of the devices and systems in a connected account.

#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.ConnectedAccounts.Sync(
		context.Background(),
		api.ConnectedAccountsSyncRequest{
			ConnectedAccountId: api.String("23e4eb21-6e93-48c4-a077-bf503246d47c"),
		},
	)
}
```

#### Output

```go
nil
```
{% endtab %}

{% tab title="Seam CLI" %}

Request an on-demand sync of the devices and systems in a connected account.

#### Code

```seam_cli
seam connected-accounts sync --connected_account_id "23e4eb21-6e93-48c4-a077-bf503246d47c"
```

#### Output

```seam_cli
{}
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


---

## Examples

