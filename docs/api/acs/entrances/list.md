# List Entrances

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [access system entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/entrances/list ⇒ { acs_entrances: [acs_entrance, …] }
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

**`acs_credential_id`** 

ID of the credential for which you want to retrieve all entrances.

---

**`acs_system_id`** 

ID of the access system for which you want to retrieve all entrances.

---


## Response

Array of [acs\_entrances](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_entrance
}
```
{% endtab %}
{% endtabs %}

---

## Examples

### List entrances

To filter the list of entrances, specify the desired `acs_system_id` or `acs_user_id`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.entrances.list();
```

#### Output

```javascript
[
  {
    "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_entrance_id": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-04-05T07:57:05.323Z",
    "display_name": "text"
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.acs.entrances.list()
```

#### Output

```python
[
    AcsEntrance(
        acs_system_id="123e4567-e89b-12d3-a456-426614174000",
        acs_entrance_id="123e4567-e89b-12d3-a456-426614174000",
        created_at="2024-04-05T07:57:05.323Z",
        display_name="text",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.entrances.list()
```

#### Output

```ruby
[
  {
    "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_entrance_id" => "123e4567-e89b-12d3-a456-426614174000",
    "created_at" => "2024-04-05T07:57:05.323Z",
    "display_name" => "text",
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->entrances->list();
```

#### Output

```php
<?php
[
    [
        "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
        "acs_entrance_id" => "123e4567-e89b-12d3-a456-426614174000",
        "created_at" => "2024-04-05T07:57:05.323Z",
        "display_name" => "text",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs entrances list
```

#### Output

```seam_cli
[
  {
    "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_entrance_id": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-04-05T07:57:05.323Z",
    "display_name": "text"
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

func main() {
	client.Acs.Entrances.List(context.Background())
}
```

#### Output

```go
[]api.AcsEntrance{api.AcsEntrance{AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", AcsEntranceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "text"}}
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{
  "acs_entrances": [
    {
      "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
      "acs_entrance_id": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-04-05T07:57:05.323Z",
      "display_name": "text"
    }
  ]
}
```
{% endtab %}

{% endtabs %}


