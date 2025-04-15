# Get an ACS System

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/systems/get ⇒ { acs_system }
```
{% endtab %}
{% endtabs %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_system_id`** *String* (Required)

ID of the desired access control system.

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

{% endtabs %}


