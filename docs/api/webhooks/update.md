# Update a Webhook

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified [webhook](https://docs.seam.co/latest/developer-tools/webhooks).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified webhook.

#### Code:

```javascript
await seam.webhooks.update({
  webhook_id: "e294905f-e7a5-4804-95a6-303f440eb262",
  event_types: [
    "device.connected",
    "device.disconnected",
    "device.unmanaged.converted_to_managed",
  ],
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified webhook.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/webhooks/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "webhook_id": "e294905f-e7a5-4804-95a6-303f440eb262",
  "event_types": [
    "device.connected",
    "device.disconnected",
    "device.unmanaged.converted_to_managed"
  ]
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified webhook.

#### Code:

```python
seam.webhooks.update(
    webhook_id="e294905f-e7a5-4804-95a6-303f440eb262",
    event_types=[
        "device.connected",
        "device.disconnected",
        "device.unmanaged.converted_to_managed",
    ],
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified webhook.

#### Code:

```ruby
seam.webhooks.update(
  webhook_id: "e294905f-e7a5-4804-95a6-303f440eb262",
  event_types: %w[device.connected device.disconnected device.unmanaged.converted_to_managed],
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified webhook.

#### Code:

```php
$seam->webhooks->update(
    webhook_id: "e294905f-e7a5-4804-95a6-303f440eb262",
    event_types: [
        "device.connected",
        "device.disconnected",
        "device.unmanaged.converted_to_managed",
    ],
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified webhook.

#### Code:

```seam_cli
seam webhooks update --webhook_id "e294905f-e7a5-4804-95a6-303f440eb262" --event_types ["device.connected","device.disconnected","device.unmanaged.converted_to_managed"]
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

**`event_types`** *Array* *of Strings* (Required)

Types of events that you want the webhook to receive.

---

**`webhook_id`** *String* (Required)

ID of the webhook that you want to update.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

