# List Spaces

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all spaces.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all spaces.

#### Code:

```javascript
await seam.spaces.list();
```

#### Output:

```javascript
[
  {
    "created_at": "2025-06-16T16:54:17.946600Z",
    "display_name": "My Space",
    "name": "My Space",
    "space_id": "5afeb047-3277-4102-b8c4-99edf05b91d2",
    "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all spaces.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/spaces/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output:

```curl
{
  "spaces": [
    {
      "created_at": "2025-06-16T16:54:17.946600Z",
      "display_name": "My Space",
      "name": "My Space",
      "space_id": "5afeb047-3277-4102-b8c4-99edf05b91d2",
      "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all spaces.

#### Code:

```python
seam.spaces.list()
```

#### Output:

```python
[Space(created_at="2025-06-16T16:54:17.946600Z", display_name="My Space", name="My Space", space_id="5afeb047-3277-4102-b8c4-99edf05b91d2", workspace_id="96bd12f9-6def-4bf4-b517-760417451ae9")]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all spaces.

#### Code:

```ruby
seam.spaces.list()
```

#### Output:

```ruby
[{"created_at" => "2025-06-16T16:54:17.946600Z","display_name" => "My Space","name" => "My Space","space_id" => "5afeb047-3277-4102-b8c4-99edf05b91d2","workspace_id" => "96bd12f9-6def-4bf4-b517-760417451ae9"}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all spaces.

#### Code:

```php
$seam->spaces->list();
```

#### Output:

```php
[
    [
        "created_at" => "2025-06-16T16:54:17.946600Z",
        "display_name" => "My Space",
        "name" => "My Space",
        "space_id" => "5afeb047-3277-4102-b8c4-99edf05b91d2",
        "workspace_id" => "96bd12f9-6def-4bf4-b517-760417451ae9",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all spaces.

#### Code:

```seam_cli
seam spaces list
```

#### Output:

```seam_cli
[
  {
    "created_at": "2025-06-16T16:54:17.946600Z",
    "display_name": "My Space",
    "name": "My Space",
    "space_id": "5afeb047-3277-4102-b8c4-99edf05b91d2",
    "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
  }
]
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`customer_key`** *String*

Customer key for which you want to list spaces.

---

**`search`** *String*

String for which to search. Filters returned spaces to include all records that satisfy a partial match using `name`.

---

**`space_key`** *String*

Filter spaces by space_key.

---


## Response

{% hint style="success" %}
Returns:
**Array of [spaces](.)**

{% endhint %}


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
