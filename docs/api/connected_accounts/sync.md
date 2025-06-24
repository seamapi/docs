# Sync a Connected Account

- [Request Parameters](#request-parameters)
- [Response](#response)

Request a [connected account](../../core-concepts/connected-accounts/README.md) sync attempt for the specified `connected_account_id`.


{% tabs %}
{% tab title="JavaScript" %}

Request a connected account sync attempt for the specified connected account.

#### Code

```javascript
await seam.connectedAccounts.sync();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Request a connected account sync attempt for the specified connected account.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/sync" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Request a connected account sync attempt for the specified connected account.

#### Code

```python
seam.connected_accounts.sync()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Request a connected account sync attempt for the specified connected account.

#### Code

```ruby
seam.connected_accounts.sync()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Request a connected account sync attempt for the specified connected account.

#### Code

```php
<?php
$seam->connected_accounts->sync();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Request a connected account sync attempt for the specified connected account.

#### Code

```seam_cli
seam connected-accounts sync
```

#### Output

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

void

