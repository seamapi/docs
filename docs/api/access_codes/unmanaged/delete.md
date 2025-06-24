# Delete an Unmanaged Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


{% tabs %}
{% tab title="JavaScript" %}

Deletes an unmanaged access code.

#### Code

```javascript
await seam.accessCodes.unmanaged.delete();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes an unmanaged access code.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/unmanaged/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes an unmanaged access code.

#### Code

```python
seam.access_codes.unmanaged.delete()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes an unmanaged access code.

#### Code

```ruby
seam.access_codes.unmanaged.delete()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes an unmanaged access code.

#### Code

```php
<?php
$seam->access_codes->unmanaged->delete();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes an unmanaged access code.

#### Code

```seam_cli
seam access-codes unmanaged delete
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

**`access_code_id`** *String* (Required)

ID of the unmanaged access code that you want to delete.

---


## Response

void

