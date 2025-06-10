# Delete a Connected Account

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deletes a specified [connected account](../../core-concepts/connected-accounts/README.md).

Deleting a connected account triggers a `connected_account.deleted` event and removes the connected account and all data associated with the connected account from Seam, including devices, events, access codes, and so on. For every deleted resource, Seam sends a corresponding deleted event, but the resource is not deleted from the provider.

For example, if you delete a connected account with a device that has an access code, Seam sends a `connected_account.deleted` event, a `device.deleted` event, and an `access_code.deleted` event, but Seam does not remove the access code from the device.


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the `connected_account_id` of the connected account that you want to delete.

```javascript
await seam.connectedAccounts.delete({
  connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}
#### Code

Specify the `connected_account_id` of the connected account that you want to delete.

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/delete" \
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
#### Code

Specify the `connected_account_id` of the connected account that you want to delete.

```python
seam.connected_accounts.delete(
    connected_account_id="23e4eb21-6e93-48c4-a077-bf503246d47c"
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

Specify the `connected_account_id` of the connected account that you want to delete.

```ruby
seam.connected_accounts.delete(connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c")
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

Specify the `connected_account_id` of the connected account that you want to delete.

```php
<?php
$seam->connected_accounts->delete(
    connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Go" %}
#### Code

Specify the `connected_account_id` of the connected account that you want to delete.

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.ConnectedAccounts.Delete(
		context.Background(),
		api.ConnectedAccountsDeleteRequest{
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
#### Code

Specify the `connected_account_id` of the connected account that you want to delete.

```seam_cli
seam connected-accounts delete --connected_account_id "23e4eb21-6e93-48c4-a077-bf503246d47c"
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

ID of the connected account that you want to delete.

---


## Response

void


---

## Examples

