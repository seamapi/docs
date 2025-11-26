# Sync a Connected Account

- [Request Parameters](#request-parameters)
- [Response](#response)

Request a [connected account](../../core-concepts/connected-accounts/README.md) sync attempt for the specified `connected_account_id`.


{% tabs %}
{% tab title="JavaScript" %}

Request a connected account sync attempt for the specified connected account.

#### Code:

```javascript
await seam.connectedAccounts.sync({
  connected_account_id: "f886f890-4ca5-4ce5-b248-509cbfb6c279",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Request a connected account sync attempt for the specified connected account.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/sync" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "connected_account_id": "f886f890-4ca5-4ce5-b248-509cbfb6c279"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Request a connected account sync attempt for the specified connected account.

#### Code:

```python
seam.connected_accounts.sync(connected_account_id="f886f890-4ca5-4ce5-b248-509cbfb6c279")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Request a connected account sync attempt for the specified connected account.

#### Code:

```ruby
seam.connected_accounts.sync(connected_account_id: "f886f890-4ca5-4ce5-b248-509cbfb6c279")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Request a connected account sync attempt for the specified connected account.

#### Code:

```php
$seam->connected_accounts->sync(
    connected_account_id: "f886f890-4ca5-4ce5-b248-509cbfb6c279",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Request a connected account sync attempt for the specified connected account.

#### Code:

```seam_cli
seam connected-accounts sync --connected_account_id "f886f890-4ca5-4ce5-b248-509cbfb6c279"
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

**`connected_account_id`** *String* (Required)

ID of the connected account that you want to sync.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

