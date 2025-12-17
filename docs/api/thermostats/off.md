# Set to Off Mode

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


{% tabs %}
{% tab title="JavaScript" %}

Sets a specified thermostat to "off" mode.

#### Code:

```javascript
await seam.thermostats.off({
  device_id: "5d5c3b30-5fed-47a3-9df1-ed32f32589e5",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
  "action_type": "SET_HVAC_MODE",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Sets a specified thermostat to "off" mode.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/off" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "5d5c3b30-5fed-47a3-9df1-ed32f32589e5"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
    "action_type": "SET_HVAC_MODE",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Sets a specified thermostat to "off" mode.

#### Code:

```python
seam.thermostats.off(device_id="5d5c3b30-5fed-47a3-9df1-ed32f32589e5")
```

#### Output:

```python
ActionAttempt(action_attempt_id="b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d", action_type="SET_HVAC_MODE", error=None, result={}, status="success")
```
{% endtab %}

{% tab title="Ruby" %}

Sets a specified thermostat to "off" mode.

#### Code:

```ruby
seam.thermostats.off(device_id: "5d5c3b30-5fed-47a3-9df1-ed32f32589e5")
```

#### Output:

```ruby
{"action_attempt_id" => "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d","action_type" => "SET_HVAC_MODE","error" => nil,"result" => {},"status" => "success"}
```
{% endtab %}

{% tab title="PHP" %}

Sets a specified thermostat to "off" mode.

#### Code:

```php
$seam->thermostats->off(device_id: "5d5c3b30-5fed-47a3-9df1-ed32f32589e5");
```

#### Output:

```php
[
    "action_attempt_id" => "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
    "action_type" => "SET_HVAC_MODE",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Sets a specified thermostat to "off" mode.

#### Code:

```seam_cli
seam thermostats off --device_id "5d5c3b30-5fed-47a3-9df1-ed32f32589e5"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
  "action_type": "SET_HVAC_MODE",
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

ID of the thermostat device that you want to set to off mode.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
  "action_type": "SET_HVAC_MODE",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
