# Update an Access Grant

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates an existing Access Grant's time window.


{% tabs %}
{% tab title="JavaScript" %}

Updates an existing Access Grant's time window.

#### Code:

```javascript
await seam.accessGrants.update({
  access_grant_id: "4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
  starts_at: "2025-06-19T18:01:32.000Z",
  ends_at: "2025-06-22T13:24:50.000Z",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates an existing Access Grant's time window.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_grant_id": "4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
  "starts_at": "2025-06-19T18:01:32.000Z",
  "ends_at": "2025-06-22T13:24:50.000Z"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates an existing Access Grant's time window.

#### Code:

```python
seam.access_grants.update(
    access_grant_id="4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
    starts_at="2025-06-19T18:01:32.000Z",
    ends_at="2025-06-22T13:24:50.000Z",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates an existing Access Grant's time window.

#### Code:

```ruby
seam.access_grants.update(
  access_grant_id: "4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
  starts_at: "2025-06-19T18:01:32.000Z",
  ends_at: "2025-06-22T13:24:50.000Z",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates an existing Access Grant's time window.

#### Code:

```php
$seam->access_grants->update(
    access_grant_id: "4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
    starts_at: "2025-06-19T18:01:32.000Z",
    ends_at: "2025-06-22T13:24:50.000Z",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates an existing Access Grant's time window.

#### Code:

```seam_cli
seam access-grants update --access_grant_id "4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1" --starts_at "2025-06-19T18:01:32.000Z" --ends_at "2025-06-22T13:24:50.000Z"
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
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_grant_id`** *String* (Required)

ID of the Access Grant to update.

---

**`ends_at`** *String*

Date and time at which the validity of the grant ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`name`** *String*

Display name for the access grant.

---

**`starts_at`** *String*

Date and time at which the validity of the grant starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

