# Events

## The event Object

- [Properties](./#properties)


Represents an event that occurred in your workspace.

---
## Properties

**`event_id`** *UUID*

ID of the event.




---

**`event_type`** *String*

Type of event.




---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.




---

**`created_at`** *DateTime*

Date and time at which the event was created.




---

**`occurred_at`** *DateTime*

Date and time at which the event occurred.




---

## Endpoints


[**`/events/get`**](./get.md)

Returns a specified event. This endpoint returns the same event that would be sent to a [webhook](https://docs.seam.co/latest/developer-tools/webhooks), but it enables you to retrieve an event that already took place.


[**`/events/list`**](./list.md)

Returns a list of all events. This endpoint returns the same events that would be sent to a [webhook](https://docs.seam.co/latest/developer-tools/webhooks), but it enables you to filter or see events that already took place.


