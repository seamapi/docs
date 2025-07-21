# Spaces
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

## The space Object

- [Properties](./#properties)
- [Endpoints](./#endpoints)


Represents a space that is a logical grouping of devices and entrances. You can assign access to an entire space, thereby making granting access more efficient.

{% tabs %}
{% tab title="Space" %}

A space resource.

```json
{
  "created_at": "2025-06-16T16:54:17.946600Z",
  "display_name": "My Space",
  "name": "My Space",
  "space_id": "5afeb047-3277-4102-b8c4-99edf05b91d2",
  "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`acs_entrance_count`** *Number*

Number of entrances in the space.




---

**`created_at`** *Datetime*

Date and time at which the space was created.




---

**`device_count`** *Number*

Number of devices in the space.




---

**`display_name`** *String*

Display name for the space.




---

**`name`** *String*

Name of the space.




---

**`space_id`** *UUID*

ID of the space.




---

**`space_key`** *String*

Unique key for the space within the workspace.




---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the space.




---

## Endpoints


[**`/spaces/add_acs_entrances`**](./add_acs_entrances.md)

Adds [entrances](../../capability-guides/access-systems/retrieving-entrance-details.md) to a specific space.


[**`/spaces/add_devices`**](./add_devices.md)

Adds devices to a specific space.


[**`/spaces/create`**](./create.md)

Creates a new space.


[**`/spaces/delete`**](./delete.md)

Deletes a space.


[**`/spaces/get`**](./get.md)

Gets a space.


[**`/spaces/get_related`**](./get_related.md)

Gets all related resources for one or more Spaces.


[**`/spaces/list`**](./list.md)

Returns a list of all spaces.


[**`/spaces/remove_acs_entrances`**](./remove_acs_entrances.md)

Removes [entrances](../../capability-guides/access-systems/retrieving-entrance-details.md) from a specific space.


[**`/spaces/remove_devices`**](./remove_devices.md)

Removes devices from a specific space.


[**`/spaces/update`**](./update.md)

Updates an existing space.


