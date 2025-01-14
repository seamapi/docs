# Grant a User Identity Access to a Device

```
PUT /user_identities/grant_access_to_device ⇒ void
```

Grants a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) access to a specified [device](../../core-concepts/devices/README.md).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.grantAccessToDevice({
  user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
  device_id: "054765c8-a2fc-4599-b486-14c19f462c45",
});
```

#### Response

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.user_identities.grant_access_to_device(
    user_identity_id="f3a328b4-dd04-4370-9000-d52b7a01b0bf",
    device_id="054765c8-a2fc-4599-b486-14c19f462c45",
)
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.user_identities.grant_access_to_device(
  user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
  device_id: "054765c8-a2fc-4599-b486-14c19f462c45",
)
```

#### Response

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->user_identities->grant_access_to_device(
    user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
    device_id: "054765c8-a2fc-4599-b486-14c19f462c45"
);
```

#### Response

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam user-identities grant-access-to-device --user_identity_id "f3a328b4-dd04-4370-9000-d52b7a01b0bf" --device_id "054765c8-a2fc-4599-b486-14c19f462c45"
```

#### Response

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.UserIdentities.GrantAccessToDevice(
		context.Background(),
		api.UserIdentitiesGrantAccessToDeviceRequest{
			UserIdentityId: api.String("f3a328b4-dd04-4370-9000-d52b7a01b0bf"),
			DeviceId:       api.String("054765c8-a2fc-4599-b486-14c19f462c45"),
		},
	)
}
```

#### Response

```go
nil
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token
  Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Type: `string`
Required: Yes

ID of the desired managed device.

***

### `user_identity_id`

Type: `string`
Required: Yes

ID of the desired user identity.

***

## Return Type

void
