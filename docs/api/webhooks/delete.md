# Delete a Webhook

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [webhook](https://docs.seam.co/latest/developer-tools/webhooks).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a specified webhook.

#### Code:

```javascript
await seam.webhooks.delete({
  webhook_id: "d3fb55d3-8b49-43ed-ac6b-e490be7b4274",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a specified webhook.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/webhooks/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "webhook_id": "d3fb55d3-8b49-43ed-ac6b-e490be7b4274"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a specified webhook.

#### Code:

```python
seam.webhooks.delete(webhook_id="d3fb55d3-8b49-43ed-ac6b-e490be7b4274")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a specified webhook.

#### Code:

```ruby
seam.webhooks.delete(webhook_id: "d3fb55d3-8b49-43ed-ac6b-e490be7b4274")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a specified webhook.

#### Code:

```php
$seam->webhooks->delete(webhook_id: "d3fb55d3-8b49-43ed-ac6b-e490be7b4274");
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a specified webhook.

#### Code:

```seam_cli
seam webhooks delete --webhook_id "d3fb55d3-8b49-43ed-ac6b-e490be7b4274"
```

#### Output:

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

**`webhook_id`** *String* (Required)

ID of the webhook that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

