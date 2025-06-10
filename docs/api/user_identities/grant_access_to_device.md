# Grant a User Identity Access to a Device

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Grants a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) access to a specified [device](../../core-concepts/devices/README.md).


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the desired `user_identity_id` and `device_id`.

```javascript
await seam.userIdentities.grantAccessToDevice({
  user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
  device_id: "054765c8-a2fc-4599-b486-14c19f462c45",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}
#### Code

Specify the desired `user_identity_id` and `device_id`.

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/grant_access_to_device" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
  "device_id": "054765c8-a2fc-4599-b486-14c19f462c45"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}
#### Code

Specify the desired `user_identity_id` and `device_id`.

```python
seam.user_identities.grant_access_to_device(
    user_identity_id="f3a328b4-dd04-4370-9000-d52b7a01b0bf",
    device_id="054765c8-a2fc-4599-b486-14c19f462c45",
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

Specify the desired `user_identity_id` and `device_id`.

```ruby
seam.user_identities.grant_access_to_device(
  user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
  device_id: "054765c8-a2fc-4599-b486-14c19f462c45",
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

Specify the desired `user_identity_id` and `device_id`.

```php
<?php
$seam->user_identities->grant_access_to_device(
    user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
    device_id: "054765c8-a2fc-4599-b486-14c19f462c45"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Go" %}
#### Code

Specify the desired `user_identity_id` and `device_id`.

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

#### Output

```go
nil
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

Specify the desired `user_identity_id` and `device_id`.

```seam_cli
seam user-identities grant-access-to-device --user_identity_id "f3a328b4-dd04-4370-9000-d52b7a01b0bf" --device_id "054765c8-a2fc-4599-b486-14c19f462c45"
```

#### Output

```seam_cli
{}
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

**`device_id`** *String* (Required)

ID of the desired managed device.

---

**`user_identity_id`** *String* (Required)

ID of the desired user identity.

---


## Response

void


---

## Examples

