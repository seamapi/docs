# Get an Action Attempt

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [action attempt](../../core-concepts/action-attempts.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified action attempt.

#### Code:

```javascript
await seam.actionAttempts.get({
  action_attempt_id: "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type": "UNLOCK_DOOR",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified action attempt.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/action_attempts/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "action_type": "UNLOCK_DOOR",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified action attempt.

#### Code:

```python
seam.action_attempts.get(action_attempt_id="5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f")
```

#### Output:

```python
ActionAttempt(
    action_attempt_id="5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    action_type="UNLOCK_DOOR",
    error=None,
    result={},
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified action attempt.

#### Code:

```ruby
seam.action_attempts.get(action_attempt_id: "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f")
```

#### Output:

```ruby
{
  "action_attempt_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type" => "UNLOCK_DOOR",
  "error" => nil,
  "result" => {
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified action attempt.

#### Code:

```php
$seam->action_attempts->get(
    action_attempt_id: "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
);
```

#### Output:

```php
[
    "action_attempt_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "action_type" => "UNLOCK_DOOR",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified action attempt.

#### Code:

```seam_cli
seam action-attempts get --action_attempt_id "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type": "UNLOCK_DOOR",
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

**`action_attempt_id`** *String* (Required)

ID of the action attempt that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}

