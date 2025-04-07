# Set to Off Mode

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

{% hint style="success" %}
```
POST /thermostats/off ⇒ { action_attempt }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`device_id`** *String* (Required)

ID of the desired thermostat device.

---


## Return Type

[action\_attempt](./)

**`SET_HVAC_MODE`**
{% tabs %}
{% tab title="JSON" %}
```json
{
  action_attempt_id: [example value],
  action_type: [example value],
  status: [example value]
}
```
{% endtab %}
{% endtabs %}

---

## Examples
  
### Set to off mode

Specify the `device_id` of the thermostat that you want to set to off mode.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.off({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Output

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_THERMOSTAT_OFF"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.off(device_id="123e4567-e89b-12d3-a456-426614174000")
```

#### Output

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_THERMOSTAT_OFF",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.off(device_id: "123e4567-e89b-12d3-a456-426614174000")
```

#### Output

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "status" => "pending",
  "action_type" => "SET_THERMOSTAT_OFF",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->off(device_id: "123e4567-e89b-12d3-a456-426614174000");
```

#### Output

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
#### Code

```seam_cli
seam thermostats off --device_id "123e4567-e89b-12d3-a456-426614174000"
```

#### Output

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_THERMOSTAT_OFF"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

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

#### Output

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "pending", ActionType: "SET_THERMOSTAT_OFF"}
```
{% endtab %}

{% endtabs %}


