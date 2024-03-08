---
description: Delete a Connected Account by ID
---

# Delete a Connected Account

{% hint style="warning" %}
Deleting a connected account account device will trigger a `connected_account.deleted` event and remove the connected account and all data associated with the connected account from Seam: devices, events, access codes, etc. This action is irreversible.

For every deleted resource, a corresponding deleted event will be sent, but the resource will not be deleted from the provider.
For example, deleting a connected account with a device that has an access code will send a `connected_account.deleted` event, a `device.deleted` event, and an `access_code.deleted` event,
but Seam will not remove the access code from the device.
{% endhint %}

{% swagger src="https://connect.getseam.com/openapi.json" path="/connected_accounts/delete" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}

<pre class="language-python"><code class="lang-python"><strong>seam.connected_accounts.delete("f891acfd-d228-4bb2-8399-c0f7e24e6b16")
</strong></code></pre>

{% endtab %}

{% tab title="cURL (bash)" %}

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connected_accounts/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "connected_account_id": "f891acfd-d228-4bb2-8399-c0f7e24e6b16"
}'

# {
#   "ok": true
# }
```

{% endtab %}

{% tab title="JavaScript" %}

<pre class="language-javascript"><code class="lang-javascript"><strong>await seam.connectedAccounts.delete({
</strong>  connected_account_id: "f891acfd-d228-4bb2-8399-c0f7e24e6b16"
})
</code></pre>

{% endtab %}

{% tab title="PHP" %}

```php
$seam->connected_accounts->delete("f891acfd-d228-4bb2-8399-c0f7e24e6b16");
```

{% endtab %}

{% tab title="Java" %}

```java
seam.connectedAccounts().delete(ConnectedAccountsDeleteRequest.builder()
                .connectedAccountId("f891acfd-d228-4bb2-8399-c0f7e24e6b16")
                .build());
```

{% endtab %}
{% endtabs %}

### Parameters

| `connected_account_id` | type: string | ID of the Connected Account |
| ---------------------- | ------------ | --------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}

```json
{
  "ok": true
}
```

{% endtab %}
{% endtabs %}
