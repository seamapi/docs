# List ACS Systems

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [access systems](https://docs.seam.co/latest/capability-guides/access-systems).

To filter the list of returned access systems by a specific connected account ID, include the `connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the response includes all access systems connected to your workspace.


{% tabs %}
{% tab title="JavaScript" %}
#### Code

To filter the list of ACS systems, include a `connected_account_id`.

```javascript
await seam.acs.systems.list({
  connected_account_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Output

```javascript
[{ "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
```
{% endtab %}

{% tab title="cURL" %}
#### Code

To filter the list of ACS systems, include a `connected_account_id`.

```curl
curl --include --request POST "https://connect.getseam.com/acs/systems/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connected_account_id": "123e4567-e89b-12d3-a456-426614174000"
}
EOF
```

#### Output

```curl
{ "acs_systems": [{ "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }] }
```
{% endtab %}

{% tab title="Python" %}
#### Code

To filter the list of ACS systems, include a `connected_account_id`.

```python
seam.acs.systems.list(connected_account_id="123e4567-e89b-12d3-a456-426614174000")
```

#### Output

```python
[AcsSystem(acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

To filter the list of ACS systems, include a `connected_account_id`.

```ruby
seam.acs.systems.list(connected_account_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Output

```ruby
[{ "acs_system_id" => "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

To filter the list of ACS systems, include a `connected_account_id`.

```php
<?php
$seam->acs->systems->list(
    connected_account_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Output

```php
<?php
[["acs_system_id" => "8d7e0b3a-b889-49a7-9164-4b71a0506a33"]];
```
{% endtab %}

{% tab title="Go" %}
#### Code

To filter the list of ACS systems, include a `connected_account_id`.

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

#### Output

```go
[]api.AcsSystem{api.AcsSystem{AcsSystemId: "8d7e0b3a-b889-49a7-9164-4b71a0506a33"}}
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

To filter the list of ACS systems, include a `connected_account_id`.

```seam_cli
seam acs systems list --connected_account_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Output

```seam_cli
[{ "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
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

**`connected_account_id`** *String*

ID of the connected account by which you want to filter the list of access systems.

---


## Response

Array of [acs\_systems](./)


---

## Examples

