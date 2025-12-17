# Lock a Lock

- [Request Parameters](#request-parameters)
- [Response](#response)

Locks a [lock](https://docs.seam.co/latest/capability-guides/smart-locks). See also [Locking and Unlocking Smart Locks](https://docs.seam.co/latest/capability-guides/smart-locks/lock-and-unlock).


{% tabs %}
{% tab title="JavaScript" %}

Locks a lock.

#### Code:

```javascript
await seam.locks.lockDoor({
  device_id: "9a31853e-4db0-4d78-b21d-f50c8dbdb9dc",
});
```

#### Output:

```javascript
{
  "action_attempt_id": "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
  "action_type": "LOCK_DOOR",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Locks a lock.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/locks/lock_door" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "9a31853e-4db0-4d78-b21d-f50c8dbdb9dc"
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
    "action_type": "LOCK_DOOR",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Locks a lock.

#### Code:

```python
seam.locks.lock_door(device_id="9a31853e-4db0-4d78-b21d-f50c8dbdb9dc")
```

#### Output:

```python
ActionAttempt(action_attempt_id="3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f", action_type="LOCK_DOOR", error=None, result={}, status="success")
```
{% endtab %}

{% tab title="Ruby" %}

Locks a lock.

#### Code:

```ruby
seam.locks.lock_door(device_id: "9a31853e-4db0-4d78-b21d-f50c8dbdb9dc")
```

#### Output:

```ruby
{"action_attempt_id" => "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f","action_type" => "LOCK_DOOR","error" => nil,"result" => {},"status" => "success"}
```
{% endtab %}

{% tab title="PHP" %}

Locks a lock.

#### Code:

```php
$seam->locks->lock_door(device_id: "9a31853e-4db0-4d78-b21d-f50c8dbdb9dc");
```

#### Output:

```php
[
    "action_attempt_id" => "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
    "action_type" => "LOCK_DOOR",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Locks a lock.

#### Code:

```seam_cli
seam locks lock-door --device_id "9a31853e-4db0-4d78-b21d-f50c8dbdb9dc"
```

#### Output:

```seam_cli
{
  "action_attempt_id": "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
  "action_type": "LOCK_DOOR",
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

ID of the lock that you want to lock.

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
  "action_attempt_id": "3f2b1c8d-1b5e-4f8c-9c7d-9a8b7c6d5e4f",
  "action_type": "LOCK_DOOR",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
