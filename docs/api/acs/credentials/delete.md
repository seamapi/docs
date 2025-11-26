# Delete a Credential

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a specified credential.

#### Code:

```javascript
await seam.acs.credentials.delete({
  acs_credential_id: "33bbceea-221e-48bd-8d38-aa72f88a1cab",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a specified credential.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "33bbceea-221e-48bd-8d38-aa72f88a1cab"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a specified credential.

#### Code:

```python
seam.acs.credentials.delete(acs_credential_id="33bbceea-221e-48bd-8d38-aa72f88a1cab")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a specified credential.

#### Code:

```ruby
seam.acs.credentials.delete(acs_credential_id: "33bbceea-221e-48bd-8d38-aa72f88a1cab")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a specified credential.

#### Code:

```php
$seam->acs->credentials->delete(
    acs_credential_id: "33bbceea-221e-48bd-8d38-aa72f88a1cab",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a specified credential.

#### Code:

```seam_cli
seam acs credentials delete --acs_credential_id "33bbceea-221e-48bd-8d38-aa72f88a1cab"
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_credential_id`** *String* (Required)

ID of the credential that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

