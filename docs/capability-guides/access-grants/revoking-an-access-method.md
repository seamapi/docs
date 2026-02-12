---
description: Learn how to revoke an access method so that a user can no longer use it.
---

# Revoking an Access Method

To revoke an access method, delete it.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_methods.delete(access_method_id="3f10d86c-526b-4b85-8788-cc1a74411b71")
```

**Output:**

```python
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl --include --request POST "https://connect.getseam.com/access_methods/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_method_id": "3f10d86c-526b-4b85-8788-cc1a74411b71"
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
await seam.accessMethods.delete({
  access_method_id: "3f10d86c-526b-4b85-8788-cc1a74411b71",
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
seam.access_methods.delete(access_method_id: "3f10d86c-526b-4b85-8788-cc1a74411b71")
```

**Output:**

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_methods->delete(
    access_method_id: "3f10d86c-526b-4b85-8788-cc1a74411b71"
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
