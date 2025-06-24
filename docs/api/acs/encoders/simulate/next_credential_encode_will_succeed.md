# Simulate that the Next Credential Encoding Will Succeed

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates that the next attempt to encode a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will succeed. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).


{% tabs %}
{% tab title="JavaScript" %}

Simulates that the next attempt to encode a credential using the specified encoder will succeed.

#### Code

```javascript
await seam.acs.encoders.simulate.nextCredentialEncodeWillSucceed({
  acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
  scenario: "credential_is_issued",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates that the next attempt to encode a credential using the specified encoder will succeed.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/simulate/next_credential_encode_will_succeed" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_encoder_id": "182ea706-8e14-4921-8e57-ee18d5a7de31",
  "scenario": "credential_is_issued"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates that the next attempt to encode a credential using the specified encoder will succeed.

#### Code

```python
seam.acs.encoders.simulate.next_credential_encode_will_succeed(
    acs_encoder_id="182ea706-8e14-4921-8e57-ee18d5a7de31",
    scenario="credential_is_issued",
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates that the next attempt to encode a credential using the specified encoder will succeed.

#### Code

```ruby
seam.acs.encoders.simulate.next_credential_encode_will_succeed(
  acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
  scenario: "credential_is_issued",
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates that the next attempt to encode a credential using the specified encoder will succeed.

#### Code

```php
<?php
$seam->acs->encoders->simulate->next_credential_encode_will_succeed(
    acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
    scenario: "credential_is_issued"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates that the next attempt to encode a credential using the specified encoder will succeed.

#### Code

```seam_cli
seam acs encoders simulate next-credential-encode-will-succeed --acs_encoder_id "182ea706-8e14-4921-8e57-ee18d5a7de31" --scenario "credential_is_issued"
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

**`acs_encoder_id`** *String* (Required)

ID of the `acs_encoder` that will be used in the next request to encode the `acs_credential`.

---

**`scenario`** *String*

Scenario to simulate.

---


## Response

void

