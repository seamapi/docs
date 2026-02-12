# Delete an Access Method

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes an access method.


{% tabs %}
{% tab title="JavaScript" %}

Deletes an access method.

#### Code:

```javascript
await seam.accessMethods.delete({
  access_method_id: "3f10d86c-526b-4b85-8788-cc1a74411b71",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes an access method.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_methods/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_method_id": "3f10d86c-526b-4b85-8788-cc1a74411b71"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes an access method.

#### Code:

```python
seam.access_methods.delete(access_method_id="3f10d86c-526b-4b85-8788-cc1a74411b71")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes an access method.

#### Code:

```ruby
seam.access_methods.delete(access_method_id: "3f10d86c-526b-4b85-8788-cc1a74411b71")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes an access method.

#### Code:

```php
$seam->access_methods->delete(
    access_method_id: "3f10d86c-526b-4b85-8788-cc1a74411b71",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes an access method.

#### Code:

```seam_cli
seam access-methods delete --access_method_id "3f10d86c-526b-4b85-8788-cc1a74411b71"
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

**`access_method_id`** *String* (Required)

ID of access method to get.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

