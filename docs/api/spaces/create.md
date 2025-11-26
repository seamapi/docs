# Create a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new space.


{% tabs %}
{% tab title="JavaScript" %}

Creates a new space.

#### Code:

```javascript
await seam.spaces.create({
  name: "My Space",
  device_ids: ["b7254403-db91-4e10-bb7b-31d0615d2963"],
  acs_entrance_ids: ["46a47667-a90b-45cc-9bb6-f0917464f1f3"],
});
```

#### Output:

```javascript
{
  "created_at": "2025-06-16T16:54:17.946600Z",
  "display_name": "My Space",
  "name": "My Space",
  "space_id": "5afeb047-3277-4102-b8c4-99edf05b91d2",
  "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new space.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/spaces/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "name": "My Space",
  "device_ids": [
    "b7254403-db91-4e10-bb7b-31d0615d2963"
  ],
  "acs_entrance_ids": [
    "46a47667-a90b-45cc-9bb6-f0917464f1f3"
  ]
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
    "space_id": "5afeb047-3277-4102-b8c4-99edf05b91d2",
    "workspace_id": "96bd12f9-6def-4bf4-b517-760417451ae9"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new space.

#### Code:

```python
seam.spaces.create(
    name="My Space",
    device_ids=["b7254403-db91-4e10-bb7b-31d0615d2963"],
    acs_entrance_ids=["46a47667-a90b-45cc-9bb6-f0917464f1f3"],
)
```

#### Output:

```python
Space(
    created_at="2025-06-16T16:54:17.946600Z",
    display_name="My Space",
    name="My Space",
    space_id="5afeb047-3277-4102-b8c4-99edf05b91d2",
    workspace_id="96bd12f9-6def-4bf4-b517-760417451ae9",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new space.

#### Code:

```ruby
seam.spaces.create(
  name: "My Space",
  device_ids: ["b7254403-db91-4e10-bb7b-31d0615d2963"],
  acs_entrance_ids: ["46a47667-a90b-45cc-9bb6-f0917464f1f3"],
)
```

#### Output:

```ruby
{
  "created_at" => "2025-06-16T16:54:17.946600Z",
  "display_name" => "My Space",
  "name" => "My Space",
  "space_id" => "5afeb047-3277-4102-b8c4-99edf05b91d2",
  "workspace_id" => "96bd12f9-6def-4bf4-b517-760417451ae9",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new space.

#### Code:

```php
$seam->spaces->create(
    name: "My Space",
    device_ids: ["b7254403-db91-4e10-bb7b-31d0615d2963"],
    acs_entrance_ids: ["46a47667-a90b-45cc-9bb6-f0917464f1f3"],
);
```

#### Output:

```php
[
    "created_at" => "2025-06-16T16:54:17.946600Z",
    "display_name" => "My Space",
    "name" => "My Space",
    "space_id" => "5afeb047-3277-4102-b8c4-99edf05b91d2",
    "workspace_id" => "96bd12f9-6def-4bf4-b517-760417451ae9",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new space.

#### Code:

```seam_cli
seam spaces create --name "My Space" --device_ids ["b7254403-db91-4e10-bb7b-31d0615d2963"] --acs_entrance_ids ["46a47667-a90b-45cc-9bb6-f0917464f1f3"]
```

#### Output:

```seam_cli
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


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`name`** *String* (Required)

Name of the space that you want to create.

---

**`acs_entrance_ids`** *Array* *of UUIDs*

IDs of the entrances that you want to add to the new space.

---

**`customer_key`** *String*

Customer key for which you want to create the space.

---

**`device_ids`** *Array* *of UUIDs*

IDs of the devices that you want to add to the new space.

---

**`space_key`** *String*

Unique key for the space within the workspace.

---


## Response

{% hint style="success" %}
Returns:
[space](.)**

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
