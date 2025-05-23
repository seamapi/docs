# Scan a Credential

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Scans an encoded [acs_credential](../../../capability-guides/access-systems/managing-credentials.md) from a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/scan_credential ⇒ { action_attempt }
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

**`acs_encoder_id`**  (Required)

ID of the encoder to use for the scan.

---


## Response

[action\_attempt](./)

**`SCAN_CREDENTIAL`**
{% tabs %}
{% tab title="JSON" %}
```json
{
  action_attempt_id: [example value],
  action_type: [example value],
  error: [example value],
  result: [example value],
  status: [example value]
}
```
{% endtab %}
{% endtabs %}
