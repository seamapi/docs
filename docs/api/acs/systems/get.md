# Get an ACS System

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [access system](https://docs.seam.co/latest/capability-guides/access-systems).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/systems/get ⇒ { acs_system }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_system_id`**  (Required)

ID of the access system that you want to get.

---


## Response

[acs\_system](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_system
}
```
{% endtab %}
{% endtabs %}

---

## Examples

### Get a Specific ACS system

Specify the `acs_system_id` of the ACS system that you want to retrieve.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.systems.get({
  acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
});
```

#### Output

```javascript
[{ "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.acs.systems.get(acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Output

```python
[AcsSystem(acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.systems.get(acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Output

```ruby
[{ "acs_system_id" => "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->systems->get(acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33");
```

#### Output

```php
<?php
[["acs_system_id" => "8d7e0b3a-b889-49a7-9164-4b71a0506a33"]];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs systems get --acs_system_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
```

#### Output

```seam_cli
[{ "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }]
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"
import systems "github.com/seamapi/go/systems"

func main() {
	client.Acs.Systems.Get(
		context.Background(),
		systems.SystemsGetRequest{
			AcsSystemId: api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
		},
	)
}
```

#### Output

```go
[]api.AcsSystem{api.AcsSystem{AcsSystemId: "8d7e0b3a-b889-49a7-9164-4b71a0506a33"}}
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/systems/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
}
EOF
```

#### Output

```curl
{ "acs_system": [{ "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33" }] }
```
{% endtab %}

{% endtabs %}


