# Get an Entrance

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [access system entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `acs_entrance_id` of the entrance that you want to retrieve.

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

{% tab title="cURL" %}

Specify the `acs_entrance_id` of the entrance that you want to retrieve.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_entrance_id": "123e4567-e89b-12d3-a456-426614174000"
}
EOF
```

#### Output

```curl
{
  "acs_entrance": {
    "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_entrance_id": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-04-05T07:57:05.323Z",
    "display_name": "text"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `acs_entrance_id` of the entrance that you want to retrieve.

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

Specify the `acs_entrance_id` of the entrance that you want to retrieve.

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

Specify the `acs_entrance_id` of the entrance that you want to retrieve.

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

{% tab title="Go" %}

Specify the `acs_entrance_id` of the entrance that you want to retrieve.

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

{% tab title="Seam CLI" %}

Specify the `acs_entrance_id` of the entrance that you want to retrieve.

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

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_id`** *String* (Required)

ID of the entrance that you want to get.

---


## Response

[acs\_entrance](./)

