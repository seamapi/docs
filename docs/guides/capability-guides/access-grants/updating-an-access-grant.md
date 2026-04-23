---
description: Learn how to update the time window for an Access Grant
---

# Updating an Access Grant

You can update the starting and ending times for an Access Grant.

Note that you cannot update the access methods, entrances, or spaces associated with an Access Grant. To change these access characteristics, delete the Access Grant and recreate it.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.update(
    access_grant_id="4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
    starts_at="2025-06-19T18:01:32.000Z",
    ends_at="2025-06-22T13:24:50.000Z",
)
```

**Output:**

```python
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

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

**Output:**

```curl
{}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.update({
  access_grant_id: "4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
  starts_at: "2025-06-19T18:01:32.000Z",
  ends_at: "2025-06-22T13:24:50.000Z",
});
```

**Output:**

```javascript
// void
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.update(
  access_grant_id: "4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
  starts_at: "2025-06-19T18:01:32.000Z",
  ends_at: "2025-06-22T13:24:50.000Z",
)
```

**Output:**

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->update(
    access_grant_id: "4ec65722-bf38-4b2f-b4c8-f488aa6ba3f1",
    starts_at: "2025-06-19T18:01:32.000Z",
    ends_at: "2025-06-22T13:24:50.000Z"
);
```

**Output:**

```php
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

***

## Updating Cards

If you update an Access Grant that includes a card access method, the `access_method.card_encoding_required` event indicates that you must [re-encode the card](../access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-access-methods.md) using the same access method. After you re-encode the card, Seam emits an `access_method.reissued` event.

You can also view the `is_encoding_required`, `is_issued`, and `issued_at` properties of the affected access method.

***

## Updating Mobile Keys

If you update an Access Grant that includes a mobile key access method, Seam emits an `access_method.reissued` event.

You can also view the `is_issued` and `issued_at` properties of the affected access method.
