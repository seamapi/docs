# Unlock a Lock

- [Request Parameters](#request-parameters)
- [Response](#response)

Unlocks a [lock](https://docs.seam.co/latest/capability-guides/smart-locks). See also [Locking and Unlocking Smart Locks](https://docs.seam.co/latest/capability-guides/smart-locks/lock-and-unlock).


{% tabs %}
{% tab title="JavaScript" %}

Unlocks a lock.

#### Code:

```javascript
await seam.locks.unlockDoor({
  device_id: "be047431-bf00-4da6-9fc7-0a7796a9b57f",
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

Unlocks a lock.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/locks/unlock_door" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "be047431-bf00-4da6-9fc7-0a7796a9b57f"
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

Unlocks a lock.

#### Code:

```python
seam.locks.unlock_door(device_id="be047431-bf00-4da6-9fc7-0a7796a9b57f")
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

Unlocks a lock.

#### Code:

```ruby
seam.locks.unlock_door(device_id: "be047431-bf00-4da6-9fc7-0a7796a9b57f")
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

Unlocks a lock.

#### Code:

```php
$seam->locks->unlock_door(device_id: "be047431-bf00-4da6-9fc7-0a7796a9b57f");
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

Unlocks a lock.

#### Code:

```seam_cli
seam locks unlock-door --device_id "be047431-bf00-4da6-9fc7-0a7796a9b57f"
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

**`device_id`** *String* (Required)

ID of the lock that you want to unlock.

---


## Response

{% hint style="success" %}
**Returns:**
[action\_attempt](./)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
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
