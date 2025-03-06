# Set to Off Mode

```
POST /thermostats/off ⇒ { action_attempt }
```

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.off({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Response

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_THERMOSTAT_OFF"
}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.off(device_id="123e4567-e89b-12d3-a456-426614174000")
```

#### Response

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_THERMOSTAT_OFF",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.off(device_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Response

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "status" => "pending",
  "action_type" => "SET_THERMOSTAT_OFF",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->off(device_id: "123e4567-e89b-12d3-a456-426614174000");
```

#### Response

```php
<?php
[
    "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
    "status" => "pending",
    "action_type" => "SET_THERMOSTAT_OFF",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats off --device_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Response

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_THERMOSTAT_OFF"
}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.Off(
		context.Background(),
		api.ThermostatsOffRequest{
			DeviceId: api.String("123e4567-e89b-12d3-a456-426614174000"),
		},
	)
}
```

#### Response

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "pending", ActionType: "SET_THERMOSTAT_OFF"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

## Return Type

[action\_attempt](./)

### `SET_HVAC_MODE`

Setting HVAC mode.

#### action_attempt_id

Format: `ID`

The ID of the action attempt.

---

#### action_type

Format: `String`

---

#### error

Format: `Object`

<details>

<summary><code>message</code> Format: <code>String</code></summary>

</details>

<details>

<summary><code>type</code> Format: <code>String</code></summary>

</details>

---

#### result

Format: `Object`

This object has no properties.

---

#### status

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

