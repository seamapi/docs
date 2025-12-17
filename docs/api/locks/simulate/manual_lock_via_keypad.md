# Simulate a Manual Lock Action Using a Keypad

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates a manual lock action using a keypad. You can only perform this action for [August](https://docs.seam.co/latest/device-and-system-integration-guides/august-locks) devices within [sandbox workspaces](../../../core-concepts/workspaces/README.md#sandbox-workspaces).


{% tabs %}
{% tab title="JavaScript" %}

Simulates a manual lock action using a keypad.

#### Code:

```javascript
await seam.locks.simulate.manualLockViaKeypad({
  device_id: "d0eed522-8c2f-4905-88fd-4fe8b067bedc",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "f0e1d2c3-b4a5-6d7e-8f90-1a2b3c4d5e6f",
  "action_type": "SIMULATE_MANUAL_LOCK_VIA_KEYPAD",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Simulates a manual lock action using a keypad.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/locks/simulate/manual_lock_via_keypad" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "d0eed522-8c2f-4905-88fd-4fe8b067bedc"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "f0e1d2c3-b4a5-6d7e-8f90-1a2b3c4d5e6f",
    "action_type": "SIMULATE_MANUAL_LOCK_VIA_KEYPAD",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Simulates a manual lock action using a keypad.

#### Code:

```python
seam.locks.simulate.manual_lock_via_keypad(device_id="d0eed522-8c2f-4905-88fd-4fe8b067bedc")
```

#### Output:

```python
ActionAttempt(action_attempt_id="f0e1d2c3-b4a5-6d7e-8f90-1a2b3c4d5e6f", action_type="SIMULATE_MANUAL_LOCK_VIA_KEYPAD", error=None, result={}, status="success")
```
{% endtab %}

{% tab title="Ruby" %}

Simulates a manual lock action using a keypad.

#### Code:

```ruby
seam.locks.simulate.manual_lock_via_keypad(device_id: "d0eed522-8c2f-4905-88fd-4fe8b067bedc")
```

#### Output:

```ruby
{"action_attempt_id" => "f0e1d2c3-b4a5-6d7e-8f90-1a2b3c4d5e6f","action_type" => "SIMULATE_MANUAL_LOCK_VIA_KEYPAD","error" => nil,"result" => {},"status" => "success"}
```
{% endtab %}

{% tab title="PHP" %}

Simulates a manual lock action using a keypad.

#### Code:

```php
$seam->locks->simulate->manual_lock_via_keypad(
    device_id: "d0eed522-8c2f-4905-88fd-4fe8b067bedc",
);
```

#### Output:

```php
[
    "action_attempt_id" => "f0e1d2c3-b4a5-6d7e-8f90-1a2b3c4d5e6f",
    "action_type" => "SIMULATE_MANUAL_LOCK_VIA_KEYPAD",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates a manual lock action using a keypad.

#### Code:

```seam_cli
seam locks simulate manual-lock-via-keypad --device_id "d0eed522-8c2f-4905-88fd-4fe8b067bedc"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "f0e1d2c3-b4a5-6d7e-8f90-1a2b3c4d5e6f",
  "action_type": "SIMULATE_MANUAL_LOCK_VIA_KEYPAD",
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the device for which you want to simulate a manual lock action using a keypad.

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
  "action_attempt_id": "f0e1d2c3-b4a5-6d7e-8f90-1a2b3c4d5e6f",
  "action_type": "SIMULATE_MANUAL_LOCK_VIA_KEYPAD",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
