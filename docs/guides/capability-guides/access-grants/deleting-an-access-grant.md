---
description: Learn how to delete an Access Grant.
---

# Deleting an Access Grant

To delete an Access Grant:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.delete(access_grant_id="403ea27b-af76-4a48-ace9-8f9498f4c25c")
```

**Output:**

```python
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_grant_id": "403ea27b-af76-4a48-ace9-8f9498f4c25c"
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
await seam.accessGrants.delete({
  access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c",
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
seam.access_grants.delete(access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c")
```

**Output:**

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->delete(
    access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c"
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
