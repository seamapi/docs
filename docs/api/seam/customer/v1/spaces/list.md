# List Spaces

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all spaces.


<details>

<summary>Authentication Methods</summary>

- Client session token

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`search`** *String*

String for which to search. Filters returned spaces to include all records that satisfy a partial match using `name`.

---

**`space_key`** *String*

Filter spaces by space_key.

---


## Response

Array of [spaces](./../../../../spaces)


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
