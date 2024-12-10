# List Entrances

```
POST /acs/entrances/list ⇒ { acs_entrances: [acs_entrance, …] }
```

Returns a list of all [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% tabs %}
{% tab title="JavaScript" %}
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

{% tab title="Python" %}
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

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.entrances.list
```

#### Response

```ruby
[{"acs_system_id" => "123e4567-e89b-12d3-a456-426614174000", "acs_entrance_id" => "123e4567-e89b-12d3-a456-426614174000", "created_at" => "2024-04-05T07:57:05.323Z", "display_name" => "text"}]
```
{% endtab %}

{% tab title="PHP" %}
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

{% tab title="Seam CLI" %}
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

{% tab title="Go" %}
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
                <span>API Key</span>
            </li>
            <li class="auth-method-item">
                <span>Client Session Token</span>
            </li>
            <li class="auth-method-item">
                <span>Personal Access Token</span>
            </li>
            <li class="auth-method-item">
                <span>Console Session Token</span>
            </li>
    </ul>
</div>
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
