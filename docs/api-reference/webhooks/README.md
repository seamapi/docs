# Webhooks

## The webhook Object

- [Properties](./#properties)
- [Endpoints](./#endpoints)


Represents a [webhook](https://docs.seam.co/latest/developer-tools/webhooks) that enables you to receive notifications of events. When you create a webhook, specify the endpoint URL at which you want to receive events and the set of event types that you want to receive.

{% tabs %}
{% tab title="Webhook" %}

A webhook resource.

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

---
## Properties

**`event_types`** *List* *of Strings*

Types of events that the [webhook](https://docs.seam.co/latest/developer-tools/webhooks) should receive.




---

**`secret`** *String*

Secret associated with the [webhook](https://docs.seam.co/latest/developer-tools/webhooks).




---

**`url`** *String*

URL for the [webhook](https://docs.seam.co/latest/developer-tools/webhooks).




---

**`webhook_id`** *String*

ID of the [webhook](https://docs.seam.co/latest/developer-tools/webhooks).




---

## Endpoints


[**`/webhooks/create`**](./create.md)

Creates a new [webhook](https://docs.seam.co/latest/developer-tools/webhooks).


[**`/webhooks/delete`**](./delete.md)

Deletes a specified [webhook](https://docs.seam.co/latest/developer-tools/webhooks).


[**`/webhooks/get`**](./get.md)

Gets a specified [webhook](https://docs.seam.co/latest/developer-tools/webhooks).


[**`/webhooks/list`**](./list.md)

Returns a list of all [webhooks](https://docs.seam.co/latest/developer-tools/webhooks).


[**`/webhooks/update`**](./update.md)

Updates a specified [webhook](https://docs.seam.co/latest/developer-tools/webhooks).


