# Update an Unmanaged Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified unmanaged access code.

#### Code

```javascript
await seam.accessCodes.unmanaged.update();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified unmanaged access code.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/unmanaged/update" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified unmanaged access code.

#### Code

```python
seam.access_codes.unmanaged.update()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified unmanaged access code.

#### Code

```ruby
seam.access_codes.unmanaged.update()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified unmanaged access code.

#### Code

```php
<?php
$seam->access_codes->unmanaged->update();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified unmanaged access code.

#### Code

```seam_cli
seam access-codes unmanaged update
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

ID of the unmanaged access code that you want to update.

---

**`is_managed`** *Boolean* (Required)

---

**`allow_external_modification`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.

---

**`force`** *Boolean*

Indicates whether to force the unmanaged access code update.

---

**`is_external_modification_allowed`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.

---


## Response

void

