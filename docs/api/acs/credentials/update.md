# Update a Credential

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `acs_credential_id` and updated `code` to update the credential.

#### Code

```javascript
await seam.acs.credentials.update({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
  code: "7890",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Specify the desired `acs_credential_id` and updated `code` to update the credential.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "code": "7890"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the desired `acs_credential_id` and updated `code` to update the credential.

#### Code

```python
seam.acs.credentials.update(
    acs_credential_id="66666666-6666-6666-6666-666666666666", code="7890"
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Specify the desired `acs_credential_id` and updated `code` to update the credential.

#### Code

```ruby
seam.acs.credentials.update(acs_credential_id: "66666666-6666-6666-6666-666666666666", code: "7890")
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Specify the desired `acs_credential_id` and updated `code` to update the credential.

#### Code

```php
<?php
$seam->acs->credentials->update(
    acs_credential_id: "66666666-6666-6666-6666-666666666666",
    code: "7890"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the desired `acs_credential_id` and updated `code` to update the credential.

#### Code

```seam_cli
seam acs credentials update --acs_credential_id "66666666-6666-6666-6666-666666666666" --code "7890"
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

void

