# Get a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets a space.


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified space.

#### Code:

```javascript
await seam.spaces.get({ space_id: "5f30970d-6ef5-4618-9e91-e701fbca6b63" });
```

#### Output:

```javascript
{
  "created_at": "2025-06-16T16:54:17.946600Z",
  "display_name": "My Space",
  "name": "My Space",
  "space_id": "5f30970d-6ef5-4618-9e91-e701fbca6b63",
  "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified space.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/spaces/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "space_id": "5f30970d-6ef5-4618-9e91-e701fbca6b63"
}
EOF
```

#### Output:

```curl
{
  "space": {
    "created_at": "2025-06-16T16:54:17.946600Z",
    "display_name": "My Space",
    "name": "My Space",
    "space_id": "5f30970d-6ef5-4618-9e91-e701fbca6b63",
    "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified space.

#### Code:

```python
seam.spaces.get(space_id="5f30970d-6ef5-4618-9e91-e701fbca6b63")
```

#### Output:

```python
Space(created_at="2025-06-16T16:54:17.946600Z", display_name="My Space", name="My Space", space_id="5f30970d-6ef5-4618-9e91-e701fbca6b63", workspace_id="96bd12f9-6def-4bf4-b517-760417451ae9")
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified space.

#### Code:

```ruby
seam.spaces.get(space_id: "5f30970d-6ef5-4618-9e91-e701fbca6b63")
```

#### Output:

```ruby
{"created_at" => "2025-06-16T16:54:17.946600Z","display_name" => "My Space","name" => "My Space","space_id" => "5f30970d-6ef5-4618-9e91-e701fbca6b63","workspace_id" => "96bd12f9-6def-4bf4-b517-760417451ae9"}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified space.

#### Code:

```php
$seam->spaces->get(space_id: "5f30970d-6ef5-4618-9e91-e701fbca6b63");
```

#### Output:

```php
[
    "created_at" => "2025-06-16T16:54:17.946600Z",
    "display_name" => "My Space",
    "name" => "My Space",
    "space_id" => "5f30970d-6ef5-4618-9e91-e701fbca6b63",
    "workspace_id" => "96bd12f9-6def-4bf4-b517-760417451ae9",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified space.

#### Code:

```seam_cli
seam spaces get --space_id "5f30970d-6ef5-4618-9e91-e701fbca6b63"
```

#### Output:

```seam_cli
{
  "created_at": "2025-06-16T16:54:17.946600Z",
  "display_name": "My Space",
  "name": "My Space",
  "space_id": "5f30970d-6ef5-4618-9e91-e701fbca6b63",
  "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
}
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

**`space_id`** *String*

ID of the space that you want to get.

---

**`space_key`** *String*

Unique key of the space that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[space](.)**

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
