# Scan a Credential

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/scan_credential ⇒ { action_attempt }
```
{% endtab %}
{% endtabs %}

Scans an encoded [acs_credential](../../../capability-guides/access-systems/managing-credentials.md) from a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `acs_encoder_id`

Type: `string`
Required: Yes

ID of the `acs_encoder` to use for the scan.

---


## Return Type

[action\_attempt](./)

### The `SCAN_CREDENTIAL` Resource

Reading credential data from physical encoder.

### Properties

**`action_attempt_id`** *UUID*

ID of the action attempt.


---
**`action_type`** *String*


---
**`status`** *Enum*

<details>

<summary>Possible enum values:</summary>

- `success`
- `pending`
- `error`
</details>


---
