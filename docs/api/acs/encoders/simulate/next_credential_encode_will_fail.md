# Simulate that the Next Credential Encoding Will Fail

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates that the next attempt to encode a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will fail. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).


{% tabs %}
{% tab title="JavaScript" %}

Simulates that the next attempt to encode a credential using the specified encoder will fail.

#### Code:

```javascript
await seam.acs.encoders.simulate.nextCredentialEncodeWillFail({
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

Simulates that the next attempt to encode a credential using the specified encoder will fail.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/simulate/next_credential_encode_will_fail" \
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

Simulates that the next attempt to encode a credential using the specified encoder will fail.

#### Code:

```python
seam.acs.encoders.simulate.next_credential_encode_will_fail(
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

Simulates that the next attempt to encode a credential using the specified encoder will fail.

#### Code:

```ruby
seam.acs.encoders.simulate.next_credential_encode_will_fail(
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

Simulates that the next attempt to encode a credential using the specified encoder will fail.

#### Code:

```php
$seam->acs->encoders->simulate->next_credential_encode_will_fail(
    acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
    error_code: "no_credential_on_encoder",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates that the next attempt to encode a credential using the specified encoder will fail.

#### Code:

```seam_cli
seam acs encoders simulate next-credential-encode-will-fail --acs_encoder_id "182ea706-8e14-4921-8e57-ee18d5a7de31" --error_code "no_credential_on_encoder"
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

ID of the `acs_encoder` that will be used in the next request to encode the `acs_credential`.

---

**`acs_credential_id`** *String*

ID of the `acs_credential` that will fail to be encoded onto a card in the next request.

---

**`error_code`** *String*

Code of the error to simulate.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

