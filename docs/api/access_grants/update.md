# Update an Access Grant
{% hint style="info" %}
**Early Access Preview.** The access grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates an existing access grant's time window.


{% tabs %}
{% tab title="JavaScript" %}

Updates an existing access grant's time window.

#### Code

```javascript
await seam.accessGrants.update();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates an existing access grant's time window.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/update" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates an existing access grant's time window.

#### Code

```python
seam.access_grants.update()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates an existing access grant's time window.

#### Code

```ruby
seam.access_grants.update()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates an existing access grant's time window.

#### Code

```php
<?php
$seam->access_grants->update();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Updates an existing access grant's time window.

#### Code

```seam_cli
seam access-grants update
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

**`access_grant_id`** *String* (Required)

ID of the access grant to update.

---

**`ends_at`** *String*

Date and time at which the validity of the grant ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`starts_at`** *String*

Date and time at which the validity of the grant starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---


## Response

void

