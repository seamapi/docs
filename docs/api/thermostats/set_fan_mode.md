# Set the Fan Mode Setting

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the desired fan mode setting.

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

{% tab title="cURL" %}
#### Code

Specify the desired fan mode setting.

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/set_fan_mode" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "123e4567-e89b-12d3-a456-426614174000",
  "fan_mode_setting": "auto"
}
EOF
```

#### Output

```curl
{
  "action_attempt": {
    "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
    "status": "pending",
    "action_type": "SET_FAN_MODE"
  }
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

Specify the desired fan mode setting.

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

Specify the desired fan mode setting.

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

Specify the desired fan mode setting.

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

{% tab title="Go" %}
#### Code

Specify the desired fan mode setting.

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

{% tab title="Seam CLI" %}
#### Code

Specify the desired fan mode setting.

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

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to set the fan mode.

---

**`fan_mode`** *String*

---

**`fan_mode_setting`** *String*

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for the thermostat.

---


## Response

[action\_attempt](./)


---

## Examples

