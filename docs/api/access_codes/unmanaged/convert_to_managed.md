# Convert an Unmanaged Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Converts an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) to an [access code managed through Seam](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

An unmanaged access code has a limited set of operations that you can perform on it. Once you convert an unmanaged access code to a managed access code, the full set of access code operations and lifecycle events becomes available for it.

Note that not all device providers support converting an unmanaged access code to a managed access code.


{% tabs %}
{% tab title="JavaScript" %}

Converts an unmanaged access code to an access code managed through Seam.

#### Code:

```javascript
await seam.accessCodes.unmanaged.convertToManaged({
  access_code_id: "9ef2af02-e335-4b49-bd51-00e851a83ef6",
  is_external_modification_allowed: true,
  force: true,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Converts an unmanaged access code to an access code managed through Seam.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/unmanaged/convert_to_managed" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "access_code_id": "9ef2af02-e335-4b49-bd51-00e851a83ef6",
  "is_external_modification_allowed": true,
  "force": true
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Converts an unmanaged access code to an access code managed through Seam.

#### Code:

```python
seam.access_codes.unmanaged.convert_to_managed(access_code_id="9ef2af02-e335-4b49-bd51-00e851a83ef6", is_external_modification_allowed=true, force=true)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Converts an unmanaged access code to an access code managed through Seam.

#### Code:

```ruby
seam.access_codes.unmanaged.convert_to_managed(access_code_id: "9ef2af02-e335-4b49-bd51-00e851a83ef6", is_external_modification_allowed: true, force: true)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Converts an unmanaged access code to an access code managed through Seam.

#### Code:

```php
$seam->access_codes->unmanaged->convert_to_managed(
    access_code_id: "9ef2af02-e335-4b49-bd51-00e851a83ef6",
    is_external_modification_allowed: true,
    force: true,
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Converts an unmanaged access code to an access code managed through Seam.

#### Code:

```seam_cli
seam access-codes unmanaged convert-to-managed --access_code_id "9ef2af02-e335-4b49-bd51-00e851a83ef6" --is_external_modification_allowed true --force true
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

ID of the unmanaged access code that you want to convert to a managed access code.

---

**`allow_external_modification`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the access code is allowed.

---

**`force`** *Boolean*

Indicates whether to force the access code conversion. To switch management of an access code from one Seam workspace to another, set `force` to `true`.

---

**`is_external_modification_allowed`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the access code is allowed.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

