# Simulate that the Next Credential Scan Will Fail

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates that the next attempt to scan a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will fail. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).


{% tabs %}
{% tab title="JavaScript" %}

Simulates that the next attempt to scan a credential using the specified encoder will fail.

#### Code:

```javascript
await seam.acs.encoders.simulate.nextCredentialScanWillFail({
  acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
  error_code: "no_credential_on_encoder",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates that the next attempt to scan a credential using the specified encoder will fail.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/simulate/next_credential_scan_will_fail" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_encoder_id": "182ea706-8e14-4921-8e57-ee18d5a7de31",
  "error_code": "no_credential_on_encoder"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates that the next attempt to scan a credential using the specified encoder will fail.

#### Code:

```python
seam.acs.encoders.simulate.next_credential_scan_will_fail(
    acs_encoder_id="182ea706-8e14-4921-8e57-ee18d5a7de31",
    error_code="no_credential_on_encoder",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates that the next attempt to scan a credential using the specified encoder will fail.

#### Code:

```ruby
seam.acs.encoders.simulate.next_credential_scan_will_fail(
  acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
  error_code: "no_credential_on_encoder",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates that the next attempt to scan a credential using the specified encoder will fail.

#### Code:

```php
$seam->acs->encoders->simulate->next_credential_scan_will_fail(
    acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
    error_code: "no_credential_on_encoder",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates that the next attempt to scan a credential using the specified encoder will fail.

#### Code:

```seam_cli
seam acs encoders simulate next-credential-scan-will-fail --acs_encoder_id "182ea706-8e14-4921-8e57-ee18d5a7de31" --error_code "no_credential_on_encoder"
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

**`acs_encoder_id`** *String* (Required)

ID of the `acs_encoder` that will fail to scan the `acs_credential` in the next request.

---

**`acs_credential_id_on_seam`** *String*

---

**`error_code`** *String*

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

