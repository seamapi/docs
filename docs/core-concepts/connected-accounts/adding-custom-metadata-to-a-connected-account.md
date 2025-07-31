---
description: You can add or change custom metadata for a connected account.
---

# Adding Custom Metadata to a Connected Account

You can use custom metadata to store a custom payload or object, tailored to the specific needs of your app. For example, this feature is useful for tracking customer information, internal user IDs, or other internal resources for a [connected account](./). Storing custom metadata in a Seam `connected_account` object enables you to look up an internal resource from directly within your Seam [workspace](../workspaces/). Then, you can [filter connected accounts by the desired metadata](filtering-connected-accounts-by-custom-metadata.md).

{% hint style="info" %}
You can also use unique resource keys as an easy way to link your resources to Seam resources. For details, see [Mapping Your Resources to Seam Resources](../mapping-your-resources-to-seam-resources.md).
{% endhint %}

If the associated [Connect Webview](../connect-webviews/) contains custom metadata, Seam transfers this custom metadata as the initial value for this property. However, you can use the [Update Connected Account](../../api/connected_accounts/update.md) method with the optional `custom_metadata` property to change or add custom metadata for the connected account. This property accepts up to 50 JSON key:value pairs.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
connected_account_update = seam.connected_accounts.update(
    connected_account_id = "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
    custom_metadata = {
        "internal_account_id": "user-1"
    }
)

pprint(connected_account_update)
```

**Response:**

```
True
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connected_accounts/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "connected_account_id": "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  "custom_metadata": {
    "internal_account_id": "user-1"
  }
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const connectedAccountUpdate = await seam.connectedAccounts.update({
  connected_account_id: "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  custom_metadata: {
    "internal_account_id": "user-1"
  }
})

console.log(connectedAccountUpdate)
```

**Response:**

```json
{ ok: true }
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
connected_account_update = client.connected_accounts.update(
  connected_account_id: "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  custom_metadata: {
    "internal_account_id": "user-1"
  }
)

puts connected_account_update.inspect
```

**Response:**

```
{"ok"=>true}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$connected_account_update = $seam->connected_accounts->update(
  connected_account_id: "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  custom_metadata: array('internal_account_id' => 'user-1')
)
echo json_encode($connected_account_update, JSON_PRETTY_PRINT);
```

**Response:**

{% code overflow="wrap" %}
```json
true
```
{% endcode %}
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var customMetadata = new Dictionary<string, string>()
{
  {"internal_account_id", "user-1"}
};

var connectedAccountUpdate = seam.ConnectedAccounts.Update(
  connectedAccountId: "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  customMetadata: customMetadata
);

Console.WriteLine(connectedAccountUpdate);
```

**Response:**

```json
{
  "connected_account_id": "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  "created_at": "2023-12-15T08:03:23.432Z",
  "user_identifier": {
    "email": "jane@example.com"
  },
  ...
  "custom_metadata": {"internal_account_id"=>"user-1"},
  "automatically_manage_new_devices": true
}
```
{% endtab %}
{% endtabs %}
