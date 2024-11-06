# Set to Off Mode

```
POST /thermostats/off ⇒ { action_attempt }
```

Sets a thermostat to "off" mode. See also [Setting the Current HVAC and Fan Mode Settings](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

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
{"action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000", "status" => "pending", "action_type" => "SET_THERMOSTAT_OFF"}
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
["action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000","status" => "pending","action_type" => "SET_THERMOSTAT_OFF"]
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

## Request Parameters

### `device_id`

Type: `string`
Required: Yes

ID of the thermostat device.

***

### `sync`

Type: `boolean`
Required: No



***

## Return Type

[action\_attempt](./)
