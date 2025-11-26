# List Action Attempts

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of the [action attempts](../../core-concepts/action-attempts.md) that you specify as an array of `action_attempt_id`s.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of the action attempts that you specify as an array of `action_attempt_id`s.

#### Code:

```javascript
await seam.actionAttempts.list({
  action_attempt_ids: [
    "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
  ],
});
```

#### Output:

```javascript
[
  {
    "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "action_type": "UNLOCK_DOOR",
    "error": null,
    "result": {},
    "status": "success"
  },
  {
    "action_attempt_id": "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
    "action_type": "LOCK_DOOR",
    "error": null,
    "result": {},
    "status": "success"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of the action attempts that you specify as an array of `action_attempt_id`s.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/action_attempts/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "action_attempt_ids": [
    "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f"
  ]
}
EOF
```

#### Output:

```curl
{
  "action_attempts": [
    {
      "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
      "action_type": "UNLOCK_DOOR",
      "error": null,
      "result": {},
      "status": "success"
    },
    {
      "action_attempt_id": "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
      "action_type": "LOCK_DOOR",
      "error": null,
      "result": {},
      "status": "success"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of the action attempts that you specify as an array of `action_attempt_id`s.

#### Code:

```python
seam.action_attempts.list(
    action_attempt_ids=[
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
    ]
)
```

#### Output:

```python
[
    ActionAttempt(
        action_attempt_id="5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        action_type="UNLOCK_DOOR",
        error=None,
        result={},
        status="success",
    ),
    ActionAttempt(
        action_attempt_id="3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
        action_type="LOCK_DOOR",
        error=None,
        result={},
        status="success",
    ),
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of the action attempts that you specify as an array of `action_attempt_id`s.

#### Code:

```ruby
seam.action_attempts.list(
  action_attempt_ids: %w[5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f 3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f],
)
```

#### Output:

```ruby
[
  {
    "action_attempt_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "action_type" => "UNLOCK_DOOR",
    "error" => nil,
    "result" => {
    },
    "status" => "success",
  },
  {
    "action_attempt_id" => "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
    "action_type" => "LOCK_DOOR",
    "error" => nil,
    "result" => {
    },
    "status" => "success",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of the action attempts that you specify as an array of `action_attempt_id`s.

#### Code:

```php
$seam->action_attempts->list(
    action_attempt_ids: [
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
    ],
);
```

#### Output:

```php
[
    [
        "action_attempt_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "action_type" => "UNLOCK_DOOR",
        "error" => null,
        "result" => [],
        "status" => "success",
    ],
    [
        "action_attempt_id" => "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
        "action_type" => "LOCK_DOOR",
        "error" => null,
        "result" => [],
        "status" => "success",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of the action attempts that you specify as an array of `action_attempt_id`s.

#### Code:

```seam_cli
seam action-attempts list --action_attempt_ids ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f"]
```

#### Output:

```seam_cli
[
  {
    "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "action_type": "UNLOCK_DOOR",
    "error": null,
    "result": {},
    "status": "success"
  },
  {
    "action_attempt_id": "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
    "action_type": "LOCK_DOOR",
    "error": null,
    "result": {},
    "status": "success"
  }
]
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

**`action_attempt_ids`** *Array* *of UUIDs* (Required)

IDs of the action attempts that you want to retrieve.

---


## Response

{% hint style="success" %}
Returns:
**Array of [action\_attempts](./)**

{% endhint %}

