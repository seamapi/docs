# Get a Webhook

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets a specified [webhook](https://docs.seam.co/latest/developer-tools/webhooks).


{% tabs %}
{% tab title="JavaScript" %}

Gets a specified webhook.

#### Code:

```javascript
await seam.webhooks.get({ webhook_id: "e5f1b17c-c67d-469d-a860-9510cf814657" });
```

#### Output:

```javascript
{
  "event_types": ["device.connected", "device.disconnected"],
  "secret": "mySecret",
  "url": "https://example.com/webhook",
  "webhook_id": "e5f1b17c-c67d-469d-a860-9510cf814657"
}
```
{% endtab %}

{% tab title="cURL" %}

Gets a specified webhook.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/webhooks/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "webhook_id": "e5f1b17c-c67d-469d-a860-9510cf814657"
}
EOF
```

#### Output:

```curl
{
  "webhook": {
    "event_types": ["device.connected", "device.disconnected"],
    "secret": "mySecret",
    "url": "https://example.com/webhook",
    "webhook_id": "e5f1b17c-c67d-469d-a860-9510cf814657"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Gets a specified webhook.

#### Code:

```python
seam.webhooks.get(webhook_id="e5f1b17c-c67d-469d-a860-9510cf814657")
```

#### Output:

```python
Webhook(event_types=["device.connected","device.disconnected"], secret="mySecret", url="https://example.com/webhook", webhook_id="e5f1b17c-c67d-469d-a860-9510cf814657")
```
{% endtab %}

{% tab title="Ruby" %}

Gets a specified webhook.

#### Code:

```ruby
seam.webhooks.get(webhook_id: "e5f1b17c-c67d-469d-a860-9510cf814657")
```

#### Output:

```ruby
{"event_types" => ["device.connected","device.disconnected"],"secret" => "mySecret","url" => "https://example.com/webhook","webhook_id" => "e5f1b17c-c67d-469d-a860-9510cf814657"}
```
{% endtab %}

{% tab title="PHP" %}

Gets a specified webhook.

#### Code:

```php
$seam->webhooks->get(webhook_id: "e5f1b17c-c67d-469d-a860-9510cf814657");
```

#### Output:

```php
[
    "event_types" => ["device.connected", "device.disconnected"],
    "secret" => "mySecret",
    "url" => "https://example.com/webhook",
    "webhook_id" => "e5f1b17c-c67d-469d-a860-9510cf814657",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Gets a specified webhook.

#### Code:

```seam_cli
seam webhooks get --webhook_id "e5f1b17c-c67d-469d-a860-9510cf814657"
```

#### Output:

```seam_cli
{
  "event_types": ["device.connected", "device.disconnected"],
  "secret": "mySecret",
  "url": "https://example.com/webhook",
  "webhook_id": "e5f1b17c-c67d-469d-a860-9510cf814657"
}
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

ID of the webhook that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[webhook](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "event_types": ["device.connected", "device.disconnected"],
  "secret": "mySecret",
  "url": "https://example.com/webhook",
  "webhook_id": "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1"
}
```
{% endtab %}
{% endtabs %}
