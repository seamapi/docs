# Get a Phone

{% hint style="info" %}
Coming soon!
{% endhint %}

```
POST /phones/get ⇒ { phone }
```

Returns a specified mobile [phone](./).

Specify the desired phone by including the corresponding `device_id` in the request body.

{% tabs %}
{% tab title="JavaScript" %}
**Request**

```javascript
await seam.phones.get({
  device_id: "22222222-2222-2222-2222-444444444444",
});
```

**Response**

```javascript
[{ "phone_id": "22222222-2222-2222-2222-444444444444" }]
```
{% endtab %}

{% tab title="Python" %}
**Request**

```python
seam.phones.get(device_id="22222222-2222-2222-2222-444444444444")
```

**Response**

```python
[Phone(device_id="22222222-2222-2222-2222-444444444444")]
```
{% endtab %}

{% tab title="Ruby" %}
**Request**

```ruby
seam.phones.get(device_id: "22222222-2222-2222-2222-444444444444")
```

**Response**

```ruby
[{ "device_id" => "22222222-2222-2222-2222-444444444444" }]
```
{% endtab %}

{% tab title="PHP" %}
**Request**

```php
<?php
$seam->phones->get(device_id: "22222222-2222-2222-2222-444444444444");
```

**Response**

```php
<?php
[["device_id" => "22222222-2222-2222-2222-444444444444"]];
```
{% endtab %}

{% tab title="Seam CLI" %}
**Request**

```seam_cli
seam phones get --device_id "22222222-2222-2222-2222-444444444444"
```

**Response**

```seam_cli
[{ "device_id": "22222222-2222-2222-2222-444444444444" }]
```
{% endtab %}

{% tab title="Go" %}
**Request**

```go
package main

import api "github.com/seamapi/go"
import phones "github.com/seamapi/go/phones"

func main() {
	client.Phones.Get(
		context.Background(),
		phones.PhonesGetRequest{
			DeviceId: api.String("22222222-2222-2222-2222-444444444444"),
		},
	)
}
```

**Response**

```go
[]api.Phone{api.Phone{DeviceId: "22222222-2222-2222-2222-444444444444"}}
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

ID of the desired phone.

***

## Return Type

[`phone`](./)
