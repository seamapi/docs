# Set to Off Mode

{% hint style="info" %}
**Alpha**. This API is in Alpha, please give us feedback.
{% endhint %}

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `device_id` of the thermostat that you want to set to off mode.

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

{% tab title="cURL" %}

Specify the `device_id` of the thermostat that you want to set to off mode.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/off" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "123e4567-e89b-12d3-a456-426614174000"
}
EOF
```

#### Output

```curl
{
  "action_attempt": {
    "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
    "status": "pending",
    "action_type": "SET_THERMOSTAT_OFF"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `device_id` of the thermostat that you want to set to off mode.

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

Specify the `device_id` of the thermostat that you want to set to off mode.

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

Specify the `device_id` of the thermostat that you want to set to off mode.

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

{% tab title="Go" %}

Specify the `device_id` of the thermostat that you want to set to off mode.

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

{% tab title="Seam CLI" %}

Specify the `device_id` of the thermostat that you want to set to off mode.

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

ID of the thermostat device that you want to set to off mode.

---


## Response

[action\_attempt](./)


---

## Examples

