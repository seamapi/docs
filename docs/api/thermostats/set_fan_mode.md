# Set the Fan Mode Setting

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/set_fan_mode ⇒ { action_attempt }
```
{% endtab %}
{% endtabs %}

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.setFanMode({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  fan_mode_setting: "auto",
});
```

#### Output

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_FAN_MODE"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.set_fan_mode(
    device_id="123e4567-e89b-12d3-a456-426614174000", fan_mode_setting="auto"
)
```

#### Output

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_FAN_MODE",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.set_fan_mode(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  fan_mode_setting: "auto",
)
```

#### Output

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "status" => "pending",
  "action_type" => "SET_FAN_MODE",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->set_fan_mode(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    fan_mode_setting: "auto"
);
```

#### Output

```php
<?php
[
    "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
    "status" => "pending",
    "action_type" => "SET_FAN_MODE",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam thermostats set-fan-mode --device_id "123e4567-e89b-12d3-a456-426614174000" --fan_mode_setting "auto"
```

#### Output

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_FAN_MODE"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.SetFanMode(
		context.Background(),
		api.ThermostatsSetFanModeRequest{
			DeviceId:       api.String("123e4567-e89b-12d3-a456-426614174000"),
			FanModeSetting: api.String("auto"),
		},
	)
}
```

#### Output

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "pending", ActionType: "SET_FAN_MODE"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `device_id`

Type: `string`
Required: Yes

***

### `fan_mode`

Type: `string`
Required: No

***

### `fan_mode_setting`

Type: `string`
Required: No

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for the thermostat.

---


## Return Type

[action\_attempt](./)

### The `SET_FAN_MODE` Resource

Setting fan mode.

### Properties

#### `action_attempt_id`

Format: `UUID`

ID of the action attempt.

---

#### `action_type`

Format: `String`

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

