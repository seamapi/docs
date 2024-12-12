# List ACS Systems

```
POST /acs/systems/list ⇒ { acs_systems: [acs_system, …] }
```

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).

To filter the list of returned access control systems by a specific connected account ID, include the
`connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the
response includes all access control systems connected to your workspace.

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.systems.list({
  connected_account_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Response

```javascript
[{ "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.acs.systems.list(connected_account_id="123e4567-e89b-12d3-a456-426614174000")
```

#### Response

```python
[AcsSystem(acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")]
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.systems.list(connected_account_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Response

```ruby
[{ "acs_system_id" => "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->systems->list(
    connected_account_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Response

```php
<?php
[["acs_system_id" => "8d7e0b3a-b889-49a7-9164-4b71a0506a33"]];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs systems list --connected_account_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Response

```seam_cli
[{ "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import systems "github.com/seamapi/go/systems"

func main() {
	client.Acs.Systems.List(
		context.Background(),
		systems.SystemsListRequest{
			ConnectedAccountId: api.String("123e4567-e89b-12d3-a456-426614174000"),
		},
	)
}
```

#### Response

```go
[]api.AcsSystem{api.AcsSystem{AcsSystemId: "8d7e0b3a-b889-49a7-9164-4b71a0506a33"}}
```
{% endtab %}

{% endtabs %}

## Request Parameters

### `connected_account_id`

Type: `string`
Required: No

ID of the connected account by which to filter the list of returned access control systems.

***

## Return Type

Array<[acs\_system](./)>
