# Delete an Unmanaged Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


{% tabs %}
{% tab title="JavaScript" %}

Deletes an unmanaged access code.

#### Code:

```javascript
await seam.accessCodes.unmanaged.delete({
  access_code_id: "95d54d42-477b-49d6-bd3a-5e8a40a5a78f",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes an unmanaged access code.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/unmanaged/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "access_code_id": "95d54d42-477b-49d6-bd3a-5e8a40a5a78f"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes an unmanaged access code.

#### Code:

```python
seam.access_codes.unmanaged.delete(access_code_id="95d54d42-477b-49d6-bd3a-5e8a40a5a78f")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes an unmanaged access code.

#### Code:

```ruby
seam.access_codes.unmanaged.delete(access_code_id: "95d54d42-477b-49d6-bd3a-5e8a40a5a78f")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes an unmanaged access code.

#### Code:

```php
$seam->access_codes->unmanaged->delete(
    access_code_id: "95d54d42-477b-49d6-bd3a-5e8a40a5a78f",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes an unmanaged access code.

#### Code:

```seam_cli
seam access-codes unmanaged delete --access_code_id "95d54d42-477b-49d6-bd3a-5e8a40a5a78f"
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

ID of the unmanaged access code that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

