# Revoke a Client Session

- [Request Parameters](#request-parameters)
- [Response](#response)

Revokes a [client session](../../core-concepts/authentication/client-session-tokens/README.md).

Note that [deleting a client session](https://docs.seam.co/latest/api/client_sessions/delete) is a separate action.


{% tabs %}
{% tab title="JavaScript" %}

Revokes a client session.

#### Code:

```javascript
await seam.clientSessions.revoke({
  client_session_id: "4271352c-6894-4367-8f52-41d565c48f13",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Revokes a client session.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/revoke" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "client_session_id": "4271352c-6894-4367-8f52-41d565c48f13"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Revokes a client session.

#### Code:

```python
seam.client_sessions.revoke(client_session_id="4271352c-6894-4367-8f52-41d565c48f13")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Revokes a client session.

#### Code:

```ruby
seam.client_sessions.revoke(client_session_id: "4271352c-6894-4367-8f52-41d565c48f13")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Revokes a client session.

#### Code:

```php
$seam->client_sessions->revoke(
    client_session_id: "4271352c-6894-4367-8f52-41d565c48f13",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Revokes a client session.

#### Code:

```seam_cli
seam client-sessions revoke --client_session_id "4271352c-6894-4367-8f52-41d565c48f13"
```

#### Output:

```seam_cli
{}
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

**`client_session_id`** *String* (Required)

ID of the client session that you want to revoke.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

