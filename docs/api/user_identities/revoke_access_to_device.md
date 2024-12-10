# Revoke Access to a Device from a User Identity

```
POST /user_identities/revoke_access_to_device ⇒ void
```

Revokes access to a specified [device](../../core-concepts/devices/README.md) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.revokeAccessToDevice({
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
seam.user_identities.revoke_access_to_device(
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
seam.user_identities.revoke_access_to_device(user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf", device_id: "054765c8-a2fc-4599-b486-14c19f462c45")
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
$seam->user_identities->revoke_access_to_device(
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
seam user-identities revoke-access-to-device --user_identity_id "f3a328b4-dd04-4370-9000-d52b7a01b0bf" --device_id "054765c8-a2fc-4599-b486-14c19f462c45"
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
	client.UserIdentities.RevokeAccessToDevice(
		context.Background(),
		api.UserIdentitiesRevokeAccessToDeviceRequest{
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
                <span>Personal Access Token</span>
            </li>
            <li class="auth-method-item">
                <span>Console Session Token</span>
            </li>
    </ul>
</div>
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
