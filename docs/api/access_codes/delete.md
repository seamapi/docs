# Delete an Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


{% tabs %}
{% tab title="JavaScript" %}

Deletes an access code.

#### Code:

```javascript
await seam.accessCodes.delete({
  device_id: "d33f4cc7-2b6a-41a4-ad30-c372ee493589",
  access_code_id: "275b40a3-6b0b-4c51-8fd2-aafd3de2195c",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes an access code.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "d33f4cc7-2b6a-41a4-ad30-c372ee493589",
  "access_code_id": "275b40a3-6b0b-4c51-8fd2-aafd3de2195c"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes an access code.

#### Code:

```python
seam.access_codes.delete(
    device_id="d33f4cc7-2b6a-41a4-ad30-c372ee493589",
    access_code_id="275b40a3-6b0b-4c51-8fd2-aafd3de2195c",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes an access code.

#### Code:

```ruby
seam.access_codes.delete(
  device_id: "d33f4cc7-2b6a-41a4-ad30-c372ee493589",
  access_code_id: "275b40a3-6b0b-4c51-8fd2-aafd3de2195c",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes an access code.

#### Code:

```php
$seam->access_codes->delete(
    device_id: "d33f4cc7-2b6a-41a4-ad30-c372ee493589",
    access_code_id: "275b40a3-6b0b-4c51-8fd2-aafd3de2195c"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes an access code.

#### Code:

```seam_cli
seam access-codes delete --device_id "d33f4cc7-2b6a-41a4-ad30-c372ee493589" --access_code_id "275b40a3-6b0b-4c51-8fd2-aafd3de2195c"
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

**`access_code_id`** *String* (Required)

ID of the access code that you want to delete.

---

**`device_id`** *String*

ID of the device for which you want to delete the access code.

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}

