# List Encoders

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/list ⇒ { acs_encoders: [acs_encoder, …] }
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

**`acs_encoder_ids`** *Array* *of UUIDs*

IDs of the `acs_encoder`s that you want to retrieve.

---

**`acs_system_id`** *String*

ID of the `acs_system` for which you want to retrieve all `acs_encoder`s.

---

**`acs_system_ids`** *Array* *of UUIDs*

IDs of the `acs_system`s for which you want to retrieve all `acs_encoder`s.

---

**`limit`** *Number*

Number of `acs_encoders` to return.

---


## Response

Array of [acs\_encoders](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_encoder
}
```
{% endtab %}
{% endtabs %}
