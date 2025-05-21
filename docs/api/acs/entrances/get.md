# Get an Entrance

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [ACS entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/entrances/get ⇒ { acs_entrance }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_id`**  (Required)

---


## Response

[acs\_entrance](./)
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

### Get an entrance

Specify the `acs_entrance_id` of the entrance that you want to retrieve.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.entrances.get({
  acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Output

```javascript
{
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_entrance_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "text"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.acs.entrances.get(acs_entrance_id="123e4567-e89b-12d3-a456-426614174000")
```

#### Output

```python
AcsEntrance(
    acs_system_id="123e4567-e89b-12d3-a456-426614174000",
    acs_entrance_id="123e4567-e89b-12d3-a456-426614174000",
    created_at="2024-04-05T07:57:05.323Z",
    display_name="text",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.entrances.get(acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Output

```ruby
{
  "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
  "acs_entrance_id" => "123e4567-e89b-12d3-a456-426614174000",
  "created_at" => "2024-04-05T07:57:05.323Z",
  "display_name" => "text",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->entrances->get(
    acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Output

```php
<?php
[
    "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_entrance_id" => "123e4567-e89b-12d3-a456-426614174000",
    "created_at" => "2024-04-05T07:57:05.323Z",
    "display_name" => "text",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs entrances get --acs_entrance_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Output

```seam_cli
{
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_entrance_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "text"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"
import entrances "github.com/seamapi/go/entrances"

func main() {
	client.Acs.Entrances.Get(
		context.Background(),
		entrances.EntrancesGetRequest{
			AcsEntranceId: api.String("123e4567-e89b-12d3-a456-426614174000"),
		},
	)
}
```

#### Output

```go
api.AcsEntrance{AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", AcsEntranceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "text"}
```
{% endtab %}

{% endtabs %}


