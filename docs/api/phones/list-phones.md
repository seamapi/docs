# List Phones

```
POST /phones/list ⇒ { phones: [phone, …] }
```

Returns a list of all [phones](./).

To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.

{% tabs %}
{% tab title="JavaScript" %}
**Request**

```javascript
await seam.phones.list({
  owner_user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
});
```

**Response**

```javascript
[{ "device_id": "22222222-2222-2222-2222-444444444444" }]
```
{% endtab %}

{% tab title="Python" %}
**Request**

```python
seam.phones.list(
  owner_user_identity_id="22222222-2222-2222-2222-222222222222",
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

**Response**

```python
[Phone(device_id="22222222-2222-2222-2222-444444444444")]
```
{% endtab %}

{% tab title="Ruby" %}
**Request**

```ruby
seam.phones.list(
  owner_user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
)
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
$seam->phones->list(
  owner_user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
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
seam phones list --owner_user_identity_id "22222222-2222-2222-2222-222222222222" --acs_credential_id "66666666-6666-6666-6666-666666666666"
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
	client.Phones.List(
		context.Background(),
		phones.PhonesListRequest{
			OwnerUserIdentityId: api.String("22222222-2222-2222-2222-222222222222"),
			AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
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
* Client session token
* Personal access token\
  Must also include the `seam-workspace` header in the request.

## Request Parameters

### `owner_user_identity_id`

Type: `string` Required: No

ID of the user identity that represents the owner by which to filter the list of returned phones.

***

### `acs_credential_id`

Type: `string` Required: No

ID of the credential by which to filter the list of returned phones.

***

## Return Type

`Array<`[`phone`](./)`>`
