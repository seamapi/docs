# List Entrances

```
POST /acs/entrances/list ⇒ { acs_entrances: [acs_entrance, …] }
```

Returns a list of all [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% tabs %}
{% tab title="JavaScript TEST" %}
#### Request

```javascript
await seam.acs.entrances.list();
```

#### Response

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

{% tab title="Python TEST" %}
#### Request

```python
seam.acs.entrances.list()
```

#### Response

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

{% tab title="Ruby TEST" %}
#### Request

```ruby
seam.acs.entrances.list()
```

#### Response

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

{% tab title="PHP TEST" %}
#### Request

```php
<?php
$seam->acs->entrances->list();
```

#### Response

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

{% tab title="Seam CLI TEST" %}
#### Request

```seam_cli
seam acs entrances list
```

#### Response

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

{% tab title="Go TEST" %}
#### Request

```go
package main

func main() {
	client.Acs.Entrances.List(context.Background())
}
```

#### Response

```go
[]api.AcsEntrance{api.AcsEntrance{AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", AcsEntranceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "text"}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_credential_id`

Type: `string`
Required: No



***

### `acs_system_id`

Type: `string`
Required: No



***

## Return Type

Array<[acs\_entrance](./)>
