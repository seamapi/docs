# Simulate that the Next Credential Scan Will Succeed

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates that the next attempt to scan a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will succeed. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).


{% tabs %}
{% tab title="JavaScript" %}

Simulates that the next attempt to scan a credential using the specified encoder will succeed.

#### Code:

```javascript
await seam.acs.encoders.simulate.nextCredentialScanWillSucceed({
  acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
  scenario: "credential_exists_on_seam",
  acs_credential_id_on_seam: "123e4567-e89b-12d3-a456-426614174000",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates that the next attempt to scan a credential using the specified encoder will succeed.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/simulate/next_credential_scan_will_succeed" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_encoder_id": "182ea706-8e14-4921-8e57-ee18d5a7de31",
  "scenario": "credential_exists_on_seam",
  "acs_credential_id_on_seam": "123e4567-e89b-12d3-a456-426614174000"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates that the next attempt to scan a credential using the specified encoder will succeed.

#### Code:

```python
seam.acs.encoders.simulate.next_credential_scan_will_succeed(acs_encoder_id="182ea706-8e14-4921-8e57-ee18d5a7de31", scenario="credential_exists_on_seam", acs_credential_id_on_seam="123e4567-e89b-12d3-a456-426614174000")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates that the next attempt to scan a credential using the specified encoder will succeed.

#### Code:

```ruby
seam.acs.encoders.simulate.next_credential_scan_will_succeed(acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31", scenario: "credential_exists_on_seam", acs_credential_id_on_seam: "123e4567-e89b-12d3-a456-426614174000")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates that the next attempt to scan a credential using the specified encoder will succeed.

#### Code:

```php
$seam->acs->encoders->simulate->next_credential_scan_will_succeed(
    acs_encoder_id: "182ea706-8e14-4921-8e57-ee18d5a7de31",
    scenario: "credential_exists_on_seam",
    acs_credential_id_on_seam: "123e4567-e89b-12d3-a456-426614174000",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates that the next attempt to scan a credential using the specified encoder will succeed.

#### Code:

```seam_cli
seam acs encoders simulate next-credential-scan-will-succeed --acs_encoder_id "182ea706-8e14-4921-8e57-ee18d5a7de31" --scenario "credential_exists_on_seam" --acs_credential_id_on_seam "123e4567-e89b-12d3-a456-426614174000"
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

ID of the `acs_encoder` that will be used in the next request to scan the `acs_credential`.

---

**`acs_credential_id_on_seam`** *String*

ID of the Seam `acs_credential` that matches the `acs_credential` on the encoder in this simulation.

---

**`scenario`** *String*

Scenario to simulate.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

