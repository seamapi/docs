# Set the Fan Mode Setting

```
POST /thermostats/set_fan_mode ⇒ { action_attempt }
```

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.setFanMode({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  fan_mode_setting: "auto",
});
```

#### Response

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_FAN_MODE"
}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.set_fan_mode(
    device_id="123e4567-e89b-12d3-a456-426614174000", fan_mode_setting="auto"
)
```

#### Response

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_FAN_MODE",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.set_fan_mode(device_id: "123e4567-e89b-12d3-a456-426614174000", fan_mode_setting: "auto")
```

#### Response

```ruby
{"action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000", "status" => "pending", "action_type" => "SET_FAN_MODE"}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->set_fan_mode(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    fan_mode_setting: "auto"
);
```

#### Response

```php
["action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000","status" => "pending","action_type" => "SET_FAN_MODE"]
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats set-fan-mode --device_id "123e4567-e89b-12d3-a456-426614174000" --fan_mode_setting "auto"
```

#### Response

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_FAN_MODE"
}
```
{% endtab %}

{% tab title="Go" %}
#### Request

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

#### Response

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "pending", ActionType: "SET_FAN_MODE"}
```
{% endtab %}

{% endtabs %}

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

***

## Return Type

[action\_attempt](./)