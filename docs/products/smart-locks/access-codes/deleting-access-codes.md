---
description: >-
  Learn how to delete your access codes, and ensure that the code is
  successfully removed from the device.
---

# Deleting Access Codes

## 1. Delete the access code using the API

To delete an access code, specify the desired `access_code_id` in the [Delete Access Code](../../../api/access_codes/delete.md) request.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_codes.delete(
  access_code_id="11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/delete' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-555555555555"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessCodes.delete({
  access_code_id: "11111111-1111-1111-1111-555555555555"
});
```

**Output:**

```
void
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
client.access_codes.delete(
  access_code_id: "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
void
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_codes->delete(
  access_code_id: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```
void
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
seam.AccessCodes.Delete(
  accessCodeId: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```
void
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
seam.accessCodes()
  .delete(AccessCodesDeleteRequest.builder()
    .accessCodeId("11111111-1111-1111-1111-555555555555")
    .build());
```

**Output:**

```
void
```
{% endtab %}


{% endtabs %}

***

## 2. Verify that the access code has been removed

Poll for or configure a [webhook](../../../core-concepts/webhooks.md) to listen for an `access_code.deleted` or `access_code.removed_from_device` event containing the `access_code_id` of the access code that you've deleted. Note that if you delete an access code that was never programmed onto a device, Seam does not emit an `access_code.removed_from_device` event for this access code.

If you receive `access_code.failed_to_remove_from_device` or `access_code.delay_in_removing_from_device` events, see [Troubleshooting Access Code Issues](troubleshooting-access-code-issues.md).
