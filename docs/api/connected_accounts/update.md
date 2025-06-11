# Update a Connected Account


- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates a [connected account](../../core-concepts/connected-accounts/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `connected_account_id` of the connected account that you want to update, as well as the properties that you want to update.

#### Code

```javascript
await seam.connectedAccounts.update({
  connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c",
  automatically_manage_new_devices: true,
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Specify the `connected_account_id` of the connected account that you want to update, as well as the properties that you want to update.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connected_account_id": "23e4eb21-6e93-48c4-a077-bf503246d47c",
  "automatically_manage_new_devices": true
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the `connected_account_id` of the connected account that you want to update, as well as the properties that you want to update.

#### Code

```python
seam.connected_accounts.update(
    connected_account_id="23e4eb21-6e93-48c4-a077-bf503246d47c",
    automatically_manage_new_devices=true,
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `connected_account_id` of the connected account that you want to update, as well as the properties that you want to update.

#### Code

```ruby
seam.connected_accounts.update(
  connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c",
  automatically_manage_new_devices: true,
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Specify the `connected_account_id` of the connected account that you want to update, as well as the properties that you want to update.

#### Code

```php
<?php
$seam->connected_accounts->update(
    connected_account_id: "23e4eb21-6e93-48c4-a077-bf503246d47c",
    automatically_manage_new_devices: true
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Go" %}

Specify the `connected_account_id` of the connected account that you want to update, as well as the properties that you want to update.

#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.ConnectedAccounts.Update(
		context.Background(),
		api.ConnectedAccountsUpdateRequest{
			ConnectedAccountId:            api.String("23e4eb21-6e93-48c4-a077-bf503246d47c"),
			AutomaticallyManageNewDevices: api.Bool(true),
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

Specify the `connected_account_id` of the connected account that you want to update, as well as the properties that you want to update.

#### Code

```seam_cli
seam connected-accounts update --connected_account_id "23e4eb21-6e93-48c4-a077-bf503246d47c" --automatically_manage_new_devices true
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


---

## Examples

