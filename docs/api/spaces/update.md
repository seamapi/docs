# Update a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates an existing space.


{% tabs %}
{% tab title="JavaScript" %}

Updates an existing space.

#### Code:

```javascript
await seam.spaces.update({
  space_id: "d3513c20-dc89-4e19-8713-1c3ab01aec81",
  name: "My Updated Space",
});
```

#### Output:

```javascript
{
  "created_at": "2025-06-16T16:54:17.946600Z",
  "display_name": "My Updated Space",
  "name": "My Updated Space",
  "space_id": "5f30970d-6ef5-4618-9e91-e701fbca6b63",
  "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
}
```
{% endtab %}

{% tab title="cURL" %}

Updates an existing space.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/spaces/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "space_id": "d3513c20-dc89-4e19-8713-1c3ab01aec81",
  "name": "My Updated Space"
}
EOF
```

#### Output:

```curl
{
  "space": {
    "created_at": "2025-06-16T16:54:17.946600Z",
    "display_name": "My Updated Space",
    "name": "My Updated Space",
    "space_id": "5f30970d-6ef5-4618-9e91-e701fbca6b63",
    "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Updates an existing space.

#### Code:

```python
seam.spaces.update(
    space_id="d3513c20-dc89-4e19-8713-1c3ab01aec81", name="My Updated Space"
)
```

#### Output:

```python
Space(
    created_at="2025-06-16T16:54:17.946600Z",
    display_name="My Updated Space",
    name="My Updated Space",
    space_id="5f30970d-6ef5-4618-9e91-e701fbca6b63",
    workspace_id="96bd12f9-6def-4bf4-b517-760417451ae9",
)
```
{% endtab %}

{% tab title="Ruby" %}

Updates an existing space.

#### Code:

```ruby
seam.spaces.update(space_id: "d3513c20-dc89-4e19-8713-1c3ab01aec81", name: "My Updated Space")
```

#### Output:

```ruby
{
  "created_at" => "2025-06-16T16:54:17.946600Z",
  "display_name" => "My Updated Space",
  "name" => "My Updated Space",
  "space_id" => "5f30970d-6ef5-4618-9e91-e701fbca6b63",
  "workspace_id" => "96bd12f9-6def-4bf4-b517-760417451ae9",
}
```
{% endtab %}

{% tab title="PHP" %}

Updates an existing space.

#### Code:

```php
$seam->spaces->update(
    space_id: "d3513c20-dc89-4e19-8713-1c3ab01aec81",
    name: "My Updated Space",
);
```

#### Output:

```php
[
    "created_at" => "2025-06-16T16:54:17.946600Z",
    "display_name" => "My Updated Space",
    "name" => "My Updated Space",
    "space_id" => "5f30970d-6ef5-4618-9e91-e701fbca6b63",
    "workspace_id" => "96bd12f9-6def-4bf4-b517-760417451ae9",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Updates an existing space.

#### Code:

```seam_cli
seam spaces update --space_id "d3513c20-dc89-4e19-8713-1c3ab01aec81" --name "My Updated Space"
```

#### Output:

```seam_cli
{
  "created_at": "2025-06-16T16:54:17.946600Z",
  "display_name": "My Updated Space",
  "name": "My Updated Space",
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

**`acs_entrance_ids`** *Array* *of UUIDs*

IDs of the entrances that you want to set for the space. If specified, this will replace all existing entrances.

---

**`customer_key`** *String*

Customer key for which you want to update the space.

---

**`device_ids`** *Array* *of UUIDs*

IDs of the devices that you want to set for the space. If specified, this will replace all existing devices.

---

**`name`** *String*

Name of the space.

---

**`space_id`** *String*

ID of the space that you want to update.

---

**`space_key`** *String*

Unique key of the space that you want to update.

---


## Response

{% hint style="success" %}
Returns:
**[space](.)

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
