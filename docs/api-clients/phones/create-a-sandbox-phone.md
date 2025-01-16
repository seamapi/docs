# Create a Sandbox Phone

```
POST /phones/simulate/create_sandbox_phone ⇒ { phone }
```

Creates a new simulated phone in a [sandbox workspace](../../core-concepts/workspaces/#sandbox-workspaces). For more information, see [Creating a Simulated Phone for a User Identity](../../capability-guides/mobile-access/developing-in-a-sandbox-workspace.md#creating-a-simulated-phone-for-a-user-identity).

{% tabs %}
{% tab title="JavaScript" %}
**Request**

```javascript
await seam.phones.simulate.createSandboxPhone({
  user_identity_id: "22222222-2222-2222-2222-222222222222",
});
```

**Response**

```javascript
{
  "device_id": "22222222-2222-2222-2222-444444444444",
  "device_type": "android_phone",
  "created_at": "2025-01-01T10:40:00+00:00",
  ...
}
```
{% endtab %}

{% tab title="Python" %}
**Request**

```python
seam.phones.simulate.create_sandbox_phone(
    user_identity_id="22222222-2222-2222-2222-222222222222"
)
```

**Response**

```python
Phone(
  device_id='22222222-2222-2222-2222-444444444444',
  device_type='android_phone',
  created_at='2025-01-01T10:40:00+00:00',
  ...
)
```
{% endtab %}

{% tab title="Ruby" %}
**Request**

```ruby
seam.phones.simulate.create_sandbox_phone(
  user_identity_id: "22222222-2222-2222-2222-222222222222"
)
```

**Response**

```ruby
{
  "device_id" => "22222222-2222-2222-2222-444444444444",
  "device_type" => "android_phone",
  "created_at" => "2025-01-01T10:40:00+00:00",
  ...
}
```
{% endtab %}

{% tab title="PHP" %}
**Request**

```php
<?php
$seam->phones->simulate->create_sandbox_phone(
    user_identity_id: "22222222-2222-2222-2222-222222222222"
);
```

**Response**

```php
<?php
[
    "device_id" => "22222222-2222-2222-2222-444444444444",
    "device_type" => "android_phone",
    "created_at" => "2025-01-01T10:40:00+00:00",
    ...
];
```
{% endtab %}

{% tab title="Seam CLI" %}
**Request**

```seam_cli
seam phones simulate create-sandbox-phone --user_identity_id "22222222-2222-2222-2222-222222222222"
```

**Response**

```seam_cli
{
  "device_id": "22222222-2222-2222-2222-444444444444",
  "device_type": "android_phone",
  "created_at": "2025-01-01T10:40:00+00:00",
  ...
}
```
{% endtab %}

{% tab title="Go" %}
**Request**

```go
package main

import api "github.com/seamapi/go"
import phones "github.com/seamapi/go/phones"

func main() {
	client.Phones.Simulate.CreateSandboxPhone(
		context.Background(),
		phones.PhonesSimulateCreateSandboxPhoneRequest{
			UserIdentityId: api.String("22222222-2222-2222-2222-222222222222"),
		},
	)
}
```

**Response**

```go
api.Phone{DeviceId: "22222222-2222-2222-2222-444444444444", DeviceType: "android_phone", CreatedAt: "2025-01-01T10:40:00.000Z"}
```
{% endtab %}
{% endtabs %}

## Authentication Methods

* API key
* Personal access token\
  Must also include the `seam-workspace` header in the request.

## Request Parameters

### `custom_sdk_installation_id`

Type: `string` Required: No

***

### `user_identity_id`

Type: `string` Required: Yes

***

### `phone_metadata`

Type: `object` Required: No

<details>

<summary><code>operating_system</code> Format: <code>Enum</code></summary>

Possible enum values:

* `android` (default)
* `ios`

</details>

<details>

<summary><code>os_version</code> Format: <code>String</code></summary>

Default: `10`

</details>

<details>

<summary><code>device_manufacturer</code> Format: <code>String</code></summary>

Default: `Samsung`

</details>

<details>

<summary><code>device_model</code> Format: <code>String</code></summary>

Default: `Samsung Galaxy S10`

</details>

***

### `assa_abloy_metadata`

Type: `Object` Required: No

<details>

<summary><code>ble_capability</code> Format: <code>Boolean</code></summary>

Default: `true`

</details>

<details>

<summary><code>hce_capability</code> Format: <code>Boolean</code></summary>

Default: `false`

</details>

<details>

<summary><code>nfc_capability</code> Format: <code>Boolean</code></summary>

Default: `false`

</details>

<details>

<summary><code>application_version</code> Format: <code>String</code></summary>

Default: `1.0.0`

</details>

<details>

<summary><code>seos_applet_version</code> Format: <code>String</code></summary>

Default: `1.0.0`

</details>

<details>

<summary><code>seos_tsm_endpoint_id</code> Format: <code>Number</code></summary>

Default: `1`

</details>

***

## Return Type

[`phone`](./)
