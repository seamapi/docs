# Delete a Client Session

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a [client session](../../core-concepts/authentication/client-session-tokens/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a client session.

#### Code:

```javascript
await seam.clientSessions.delete({
  client_session_id: "d149de35-cfad-46fe-a78e-f71f649e7a37",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a client session.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "client_session_id": "d149de35-cfad-46fe-a78e-f71f649e7a37"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a client session.

#### Code:

```python
seam.client_sessions.delete(client_session_id="d149de35-cfad-46fe-a78e-f71f649e7a37")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a client session.

#### Code:

```ruby
seam.client_sessions.delete(client_session_id: "d149de35-cfad-46fe-a78e-f71f649e7a37")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a client session.

#### Code:

```php
$seam->client_sessions->delete(
    client_session_id: "d149de35-cfad-46fe-a78e-f71f649e7a37"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a client session.

#### Code:

```seam_cli
seam client-sessions delete --client_session_id "d149de35-cfad-46fe-a78e-f71f649e7a37"
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

ID of the client session that you want to delete.

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}

