# Create a Webhook

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new [webhook](https://docs.seam.co/latest/developer-tools/webhooks).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new webhook.

#### Code:

```javascript
await seam.webhooks.create({
  url: "https://example.com",
  event_types: ["device.connected", "device.disconnected"],
});
```

#### Output:

```javascript
{
  "event_types": ["device.connected", "device.disconnected"],
  "secret": "mySecret",
  "url": "https://example.com",
  "webhook_id": "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new webhook.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/webhooks/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "url": "https://example.com",
  "event_types": [
    "device.connected",
    "device.disconnected"
  ]
}
EOF
```

#### Output:

```curl
{
  "webhook": {
    "event_types": ["device.connected", "device.disconnected"],
    "secret": "mySecret",
    "url": "https://example.com",
    "webhook_id": "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new webhook.

#### Code:

```python
seam.webhooks.create(
    url="https://example.com", event_types=["device.connected", "device.disconnected"]
)
```

#### Output:

```python
Webhook(
    event_types=["device.connected", "device.disconnected"],
    secret="mySecret",
    url="https://example.com",
    webhook_id="ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new webhook.

#### Code:

```ruby
seam.webhooks.create(
  url: "https://example.com",
  event_types: %w[device.connected device.disconnected],
)
```

#### Output:

```ruby
{
  "event_types" => %w[device.connected device.disconnected],
  "secret" => "mySecret",
  "url" => "https://example.com",
  "webhook_id" => "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new webhook.

#### Code:

```php
$seam->webhooks->create(
    url: "https://example.com",
    event_types: ["device.connected", "device.disconnected"],
);
```

#### Output:

```php
[
    "event_types" => ["device.connected", "device.disconnected"],
    "secret" => "mySecret",
    "url" => "https://example.com",
    "webhook_id" => "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new webhook.

#### Code:

```seam_cli
seam webhooks create --url "https://example.com" --event_types ["device.connected","device.disconnected"]
```

#### Output:

```seam_cli
{
  "event_types": ["device.connected", "device.disconnected"],
  "secret": "mySecret",
  "url": "https://example.com",
  "webhook_id": "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1"
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

**`url`** *String* (Required)

URL for the new webhook.

---

**`event_types`** *Array* *of Strings*

Types of events that you want the new webhook to receive.

---


## Response

{% hint style="success" %}
Returns:
**[webhook](.)

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
