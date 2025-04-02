# Get an Entrance

```
POST /acs/entrances/get ⇒ { acs_entrance }
```

Returns a specified [ACS entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.entrances.get({"acs_entrance_id":"123e4567-e89b-12d3-a456-426614174000"})
```

#### Response

```javascript
{"acs_system_id":"123e4567-e89b-12d3-a456-426614174000","acs_entrance_id":"123e4567-e89b-12d3-a456-426614174000","created_at":"2024-04-05T07:57:05.323Z","display_name":"text"}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.acs.entrances.get(acs_entrance_id="123e4567-e89b-12d3-a456-426614174000")
```

#### Response

```python
AcsEntrance(acs_system_id="123e4567-e89b-12d3-a456-426614174000", acs_entrance_id="123e4567-e89b-12d3-a456-426614174000", created_at="2024-04-05T07:57:05.323Z", display_name="text")
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.entrances.get(acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Response

```ruby
{"acs_system_id" => "123e4567-e89b-12d3-a456-426614174000","acs_entrance_id" => "123e4567-e89b-12d3-a456-426614174000","created_at" => "2024-04-05T07:57:05.323Z","display_name" => "text"}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->entrances->get(acs_entrance_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Response

```php
<?php
["acs_system_id" => "123e4567-e89b-12d3-a456-426614174000","acs_entrance_id" => "123e4567-e89b-12d3-a456-426614174000","created_at" => "2024-04-05T07:57:05.323Z","display_name" => "text"]
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs entrances get --acs_entrance_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Response

```seam_cli
{"acs_system_id":"123e4567-e89b-12d3-a456-426614174000","acs_entrance_id":"123e4567-e89b-12d3-a456-426614174000","created_at":"2024-04-05T07:57:05.323Z","display_name":"text"}
```
{% endtab %}

{% tab title="Go" %}
#### Request

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

#### Response

```go
api.AcsEntrance{AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", AcsEntranceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "text"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token

## Request Parameters

### `acs_entrance_id`

Format: `UUID`
Required: Yes

***

## Return Type

[acs\_entrance](./)
