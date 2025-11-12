# Update a Credential

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


{% tabs %}
{% tab title="JavaScript" %}

Updates the code and ends at date and time for a specified credential.

#### Code:

```javascript
await seam.acs.credentials.update({
  acs_credential_id: "1d4fb22b-743b-492f-ad74-cffcbd63c874",
  code: "1234",
  ends_at: "2025-06-18T10:42:53.000Z",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates the code and ends at date and time for a specified credential.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "1d4fb22b-743b-492f-ad74-cffcbd63c874",
  "code": "1234",
  "ends_at": "2025-06-18T10:42:53.000Z"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates the code and ends at date and time for a specified credential.

#### Code:

```python
seam.acs.credentials.update(
    acs_credential_id="1d4fb22b-743b-492f-ad74-cffcbd63c874",
    code="1234",
    ends_at="2025-06-18T10:42:53.000Z",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates the code and ends at date and time for a specified credential.

#### Code:

```ruby
seam.acs.credentials.update(
  acs_credential_id: "1d4fb22b-743b-492f-ad74-cffcbd63c874",
  code: "1234",
  ends_at: "2025-06-18T10:42:53.000Z",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates the code and ends at date and time for a specified credential.

#### Code:

```php
$seam->acs->credentials->update(
    acs_credential_id: "1d4fb22b-743b-492f-ad74-cffcbd63c874",
    code: "1234",
    ends_at: "2025-06-18T10:42:53.000Z"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates the code and ends at date and time for a specified credential.

#### Code:

```seam_cli
seam acs credentials update --acs_credential_id "1d4fb22b-743b-492f-ad74-cffcbd63c874" --code "1234" --ends_at "2025-06-18T10:42:53.000Z"
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

ID of the credential that you want to update.

---

**`code`** *String*

Replacement access (PIN) code for the credential that you want to update.

---

**`ends_at`** *String*

Replacement date and time at which the validity of the credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after the `starts_at` value that you set when creating the credential.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

