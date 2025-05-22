# Report Device Access Code Constraints

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Enables you to report access code-related constraints for a device. Currently, supports reporting supported code length constraints for SmartThings devices.

Specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/report_device_constraints ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`**  (Required)

ID of the device for which you want to report constraints.

---

**`max_code_length`** 

Maximum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

---

**`min_code_length`** 

Minimum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

---

**`supported_code_lengths`**  *of Numbers*

Array of supported code lengths as integers between 4 and 20, inclusive. You can specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.

---


## Response

void
