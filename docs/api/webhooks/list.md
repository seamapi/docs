# List Webhooks

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [webhooks](https://docs.seam.co/latest/developer-tools/webhooks).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all webhooks.

#### Code:

```javascript
await seam.webhooks.list();
```

#### Output:

```javascript
[
  {
    "event_types": ["device.connected", "device.disconnected"],
    "secret": "mySecret",
    "url": "https://example.com/webhook",
    "webhook_id": "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all webhooks.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/webhooks/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output:

```curl
{
  "webhooks": [
    {
      "event_types": ["device.connected", "device.disconnected"],
      "secret": "mySecret",
      "url": "https://example.com/webhook",
      "webhook_id": "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all webhooks.

#### Code:

```python
seam.webhooks.list()
```

#### Output:

```python
[Webhook(event_types=["device.connected","device.disconnected"], secret="mySecret", url="https://example.com/webhook", webhook_id="ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1")]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all webhooks.

#### Code:

```ruby
seam.webhooks.list()
```

#### Output:

```ruby
[{"event_types" => ["device.connected","device.disconnected"],"secret" => "mySecret","url" => "https://example.com/webhook","webhook_id" => "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1"}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all webhooks.

#### Code:

```php
$seam->webhooks->list();
```

#### Output:

```php
[
    [
        "event_types" => ["device.connected", "device.disconnected"],
        "secret" => "mySecret",
        "url" => "https://example.com/webhook",
        "webhook_id" => "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all webhooks.

#### Code:

```seam_cli
seam webhooks list
```

#### Output:

```seam_cli
[
  {
    "event_types": ["device.connected", "device.disconnected"],
    "secret": "mySecret",
    "url": "https://example.com/webhook",
    "webhook_id": "ffe5cc3c-f3f4-48e8-b377-6f76c05d09a1"
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

None


## Response

{% hint style="success" %}
Returns:
Array of [webhooks](.)**

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
