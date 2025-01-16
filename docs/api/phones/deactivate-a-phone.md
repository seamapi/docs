# Deactivate a Phone

```
POST /phones/deactivate  ⇒ void
```

Deactivates a [phone](./), which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).

{% tabs %}
{% tab title="JavaScript" %}
**Request**

```javascript
await seam.phones.deactivate({
  device_id: "22222222-2222-2222-2222-444444444444",
});
```

**Response**

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
**Request**

```python
seam.phones.deactivate(
    device_id="22222222-2222-2222-2222-444444444444"
)
```

**Response**

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
**Request**

```ruby
seam.phones.deactivate(
  device_id: "22222222-2222-2222-2222-444444444444"
)
```

**Response**

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
**Request**

```php
<?php
$seam->phones->deactivate(
    device_id: "22222222-2222-2222-2222-444444444444"
);
```

**Response**

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
**Request**

```seam_cli
seam phones deactivate --device_id "22222222-2222-2222-2222-444444444444"
```

**Response**

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
**Request**

```go
package main

import api "github.com/seamapi/go"
import phones "github.com/seamapi/go/phones"

func main() {
	client.Phones.Deactivate(
		context.Background(),
		phones.PhonesDeactivateRequest{
			DeviceId: api.String("22222222-2222-2222-2222-444444444444"),
		},
	)
}
```

**Response**

```go
nil
```
{% endtab %}
{% endtabs %}

## Authentication Methods

* API key
* Personal access token\
  Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Type: `string` Required: Yes

***

## Return Type

`void`
