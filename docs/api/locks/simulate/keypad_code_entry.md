# Simulate a Keypad Code Entry

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates the entry of a code on a keypad. You can only perform this action for [August](https://docs.seam.co/latest/device-and-system-integration-guides/august-locks) devices within [sandbox workspaces](../../../core-concepts/workspaces/README.md#sandbox-workspaces).


{% tabs %}
{% tab title="JavaScript" %}

Simulates the entry of a code on a keypad.

#### Code:

```javascript
await seam.locks.simulate.keypadCodeEntry({
  device_id: "97a7a706-05a9-405c-91e5-b03e5b9c2003",
  code: "1234",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
  "action_type": "SIMULATE_KEYPAD_CODE_ENTRY",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Simulates the entry of a code on a keypad.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/locks/simulate/keypad_code_entry" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "97a7a706-05a9-405c-91e5-b03e5b9c2003",
  "code": "1234"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    "action_type": "SIMULATE_KEYPAD_CODE_ENTRY",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Simulates the entry of a code on a keypad.

#### Code:

```python
seam.locks.simulate.keypad_code_entry(device_id="97a7a706-05a9-405c-91e5-b03e5b9c2003", code="1234")
```

#### Output:

```python
ActionAttempt(action_attempt_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d", action_type="SIMULATE_KEYPAD_CODE_ENTRY", error=None, result={}, status="success")
```
{% endtab %}

{% tab title="Ruby" %}

Simulates the entry of a code on a keypad.

#### Code:

```ruby
seam.locks.simulate.keypad_code_entry(device_id: "97a7a706-05a9-405c-91e5-b03e5b9c2003", code: "1234")
```

#### Output:

```ruby
{"action_attempt_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d","action_type" => "SIMULATE_KEYPAD_CODE_ENTRY","error" => nil,"result" => {},"status" => "success"}
```
{% endtab %}

{% tab title="PHP" %}

Simulates the entry of a code on a keypad.

#### Code:

```php
$seam->locks->simulate->keypad_code_entry(
    device_id: "97a7a706-05a9-405c-91e5-b03e5b9c2003",
    code: "1234",
);
```

#### Output:

```php
[
    "action_attempt_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
    "action_type" => "SIMULATE_KEYPAD_CODE_ENTRY",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates the entry of a code on a keypad.

#### Code:

```seam_cli
seam locks simulate keypad-code-entry --device_id "97a7a706-05a9-405c-91e5-b03e5b9c2003" --code "1234"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
  "action_type": "SIMULATE_KEYPAD_CODE_ENTRY",
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

**`code`** *String* (Required)

Code that you want to simulate entering on a keypad.

---

**`device_id`** *String* (Required)

ID of the device for which you want to simulate a keypad code entry.

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
  "action_attempt_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
  "action_type": "SIMULATE_KEYPAD_CODE_ENTRY",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
