# Spaces
{% hint style="info" %}
The Spaces API is available for early access. We value your feedback
{% endhint %}

## The space Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


---
## Properties

**`created_at`** *Datetime*

Date and time at which the space object was created.




---

**`display_name`** *String*

Display name of the space.




---

**`name`** *String*

Name of the space.




---

**`space_id`** *UUID*

Unique identifier for the space.




---

**`workspace_id`** *UUID*

Unique identifier for the Seam workspace associated with the space.




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


[**`/spaces/list`**](./list.md)

Returns a list of all spaces.


[**`/spaces/remove_acs_entrances`**](./remove_acs_entrances.md)

Removes [entrances](../../capability-guides/access-systems/retrieving-entrance-details.md) from a specific space.


[**`/spaces/remove_devices`**](./remove_devices.md)

Removes devices from a specific space.


[**`/spaces/update`**](./update.md)

Updates an existing space.


