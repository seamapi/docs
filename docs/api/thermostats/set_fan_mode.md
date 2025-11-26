# Set the Fan Mode Setting

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}

Sets the fan mode setting for a specified thermostat.

#### Code:

```javascript
await seam.thermostats.setFanMode({
  device_id: "363e657e-3b07-4670-a290-7fb1f32b8e33",
  fan_mode_setting: "auto",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "2a3b4c5d-6e7f-8a9b-acbd-1e2f3a4b5c6d",
  "action_type": "SET_FAN_MODE",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Sets the fan mode setting for a specified thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/set_fan_mode" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "363e657e-3b07-4670-a290-7fb1f32b8e33",
  "fan_mode_setting": "auto"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "2a3b4c5d-6e7f-8a9b-acbd-1e2f3a4b5c6d",
    "action_type": "SET_FAN_MODE",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Sets the fan mode setting for a specified thermostat.

#### Code:

```python
seam.thermostats.set_fan_mode(device_id="363e657e-3b07-4670-a290-7fb1f32b8e33", fan_mode_setting="auto")
```

#### Output:

```python
ActionAttempt(action_attempt_id="2a3b4c5d-6e7f-8a9b-acbd-1e2f3a4b5c6d", action_type="SET_FAN_MODE", error=None, result={}, status="success")
```
{% endtab %}

{% tab title="Ruby" %}

Sets the fan mode setting for a specified thermostat.

#### Code:

```ruby
seam.thermostats.set_fan_mode(device_id: "363e657e-3b07-4670-a290-7fb1f32b8e33", fan_mode_setting: "auto")
```

#### Output:

```ruby
{"action_attempt_id" => "2a3b4c5d-6e7f-8a9b-acbd-1e2f3a4b5c6d","action_type" => "SET_FAN_MODE","error" => nil,"result" => {},"status" => "success"}
```
{% endtab %}

{% tab title="PHP" %}

Sets the fan mode setting for a specified thermostat.

#### Code:

```php
$seam->thermostats->set_fan_mode(
    device_id: "363e657e-3b07-4670-a290-7fb1f32b8e33",
    fan_mode_setting: "auto",
);
```

#### Output:

```php
[
    "action_attempt_id" => "2a3b4c5d-6e7f-8a9b-acbd-1e2f3a4b5c6d",
    "action_type" => "SET_FAN_MODE",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Sets the fan mode setting for a specified thermostat.

#### Code:

```seam_cli
seam thermostats set-fan-mode --device_id "363e657e-3b07-4670-a290-7fb1f32b8e33" --fan_mode_setting "auto"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "2a3b4c5d-6e7f-8a9b-acbd-1e2f3a4b5c6d",
  "action_type": "SET_FAN_MODE",
  "error": null,
  "result": {},
  "status": "success"
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

{% hint style="warning" %}
**Deprecated**. Use `fan_mode_setting` instead.
{% endhint %}

---

**`fan_mode_setting`** *String*

[Fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) that you want to set for the thermostat.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "2a3b4c5d-6e7f-8a9b-acbd-1e2f3a4b5c6d",
  "action_type": "SET_FAN_MODE",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
