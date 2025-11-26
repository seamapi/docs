# Reset a Sandbox Workspace

- [Request Parameters](#request-parameters)
- [Response](#response)

Resets the [sandbox workspace](../../core-concepts/workspaces/README.md#sandbox-workspaces) associated with the authentication value. Note that this endpoint is only available for sandbox workspaces.


{% tabs %}
{% tab title="JavaScript" %}

Resets the sandbox workspace associated with the authentication value.

#### Code:

```javascript
await seam.workspaces.resetSandbox();
```

#### Output:

```javascript
{
  "action_attempt_id": "f8e7d6c5-4b3a-2c1d-9e0f-8a7b6c5d4e3f",
  "action_type": "RESET_SANDBOX_WORKSPACE",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Resets the sandbox workspace associated with the authentication value.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/workspaces/reset_sandbox" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "f8e7d6c5-4b3a-2c1d-9e0f-8a7b6c5d4e3f",
    "action_type": "RESET_SANDBOX_WORKSPACE",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Resets the sandbox workspace associated with the authentication value.

#### Code:

```python
seam.workspaces.reset_sandbox()
```

#### Output:

```python
ActionAttempt(
    action_attempt_id="f8e7d6c5-4b3a-2c1d-9e0f-8a7b6c5d4e3f",
    action_type="RESET_SANDBOX_WORKSPACE",
    error=None,
    result={},
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Resets the sandbox workspace associated with the authentication value.

#### Code:

```ruby
seam.workspaces.reset_sandbox()
```

#### Output:

```ruby
{
  "action_attempt_id" => "f8e7d6c5-4b3a-2c1d-9e0f-8a7b6c5d4e3f",
  "action_type" => "RESET_SANDBOX_WORKSPACE",
  "error" => nil,
  "result" => {
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Resets the sandbox workspace associated with the authentication value.

#### Code:

```php
$seam->workspaces->reset_sandbox();
```

#### Output:

```php
[
    "action_attempt_id" => "f8e7d6c5-4b3a-2c1d-9e0f-8a7b6c5d4e3f",
    "action_type" => "RESET_SANDBOX_WORKSPACE",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Resets the sandbox workspace associated with the authentication value.

#### Code:

```seam_cli
seam workspaces reset-sandbox
```

#### Output:

```seam_cli
{
  "action_attempt_id": "f8e7d6c5-4b3a-2c1d-9e0f-8a7b6c5d4e3f",
  "action_type": "RESET_SANDBOX_WORKSPACE",
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

None


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "f8e7d6c5-4b3a-2c1d-9e0f-8a7b6c5d4e3f",
  "action_type": "RESET_SANDBOX_WORKSPACE",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
