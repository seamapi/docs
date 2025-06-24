# Set to Off Mode

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


{% tabs %}
{% tab title="JavaScript" %}

Sets a specified thermostat to "off" mode.

#### Code

```javascript
await seam.thermostats.off();
```

#### Output

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

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/off" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

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

#### Code

```python
seam.thermostats.off()
```

#### Output

```python
ActionAttempt(
    action_attempt_id="b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
    action_type="SET_HVAC_MODE",
    error=None,
    result={},
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Sets a specified thermostat to "off" mode.

#### Code

```ruby
seam.thermostats.off()
```

#### Output

```ruby
{
  "action_attempt_id" => "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
  "action_type" => "SET_HVAC_MODE",
  "error" => nil,
  "result" => {
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Sets a specified thermostat to "off" mode.

#### Code

```php
<?php
$seam->thermostats->off();
```

#### Output

```php
<?php
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

#### Code

```seam_cli
seam thermostats off
```

#### Output

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

[action\_attempt](./)

