# Deactivate a Phone

- [Request Parameters](#request-parameters)
- [Response](#response)

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).


{% tabs %}
{% tab title="JavaScript" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code

```javascript
await seam.phones.deactivate();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/phones/deactivate" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code

```python
seam.phones.deactivate()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code

```ruby
seam.phones.deactivate()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code

```php
<?php
$seam->phones->deactivate();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Deactivates a phone, which is useful, for example, if a user has lost their phone.

#### Code

```seam_cli
seam phones deactivate
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
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

Device ID of the phone that you want to deactivate.

---


## Response

void

