# Get an ACS System

```
POST /acs/systems/get ⇒ { acs_system }
```

Returns a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.systems.get({
  acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
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
seam.acs.systems.get(acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Response

```python
[AcsSystem(acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")]
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.systems.get(acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Response

```ruby
[{"acs_system_id" => "8d7e0b3a-b889-49a7-9164-4b71a0506a33"}]
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->systems->get(acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33");
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
seam acs systems get --acs_system_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
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
	client.Acs.Systems.Get(
		context.Background(),
		systems.SystemsGetRequest{
			AcsSystemId: api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
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

## Authentication Methods

<style>
.auth-methods-container {
    margin: 1.5rem 0;
}

.auth-methods-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.auth-method-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eaeaea;
    font-family: system-ui, -apple-system, sans-serif;
}

.auth-method-item:last-child {
    border-bottom: none;
}

.auth-method-item::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #6366f1;
    margin-right: 1rem;
    flex-shrink: 0;
}

.auth-method-item span {
    font-size: 1rem;
    color: #374151;
}
</style>

<div class="auth-methods-container">
    <ul class="auth-methods-list">
            <li class="auth-method-item">
                <span>Personal Access Token</span>
            </li>
            <li class="auth-method-item">
                <span>Console Session Token</span>
            </li>
            <li class="auth-method-item">
                <span>API Key</span>
            </li>
    </ul>
</div>
## Request Parameters

### `acs_system_id`

Type: `string`
Required: Yes

ID of the desired access control system.

***

## Return Type

[acs\_system](./)
