# Create a Space

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new space with optional parent space support.


<details>

<summary>Authentication Methods</summary>

- Client session token

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`name`** *String* (Required)

Name of the space that you want to create.

---

**`acs_entrance_ids`** *Array* *of UUIDs*

IDs of the entrances that you want to add to the new space.

---

**`device_ids`** *Array* *of UUIDs*

IDs of the devices that you want to add to the new space.

---

**`parent_space_key`** *String*

Space key of the parent space for this space.

---

**`parent_space_name`** *String*

Name of the parent space for this space.

---

**`space_key`** *String*

Unique key for the space within the workspace.

---


## Response

[space](./../../../../spaces)


{% tabs %}
{% tab title="JSON" %}



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
