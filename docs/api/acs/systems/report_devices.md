# Report ACS Resources

- [Request Parameters](#request-parameters)
- [Response](#response)

Reports ACS system resources including encoders and entrances with their metadata.

This endpoint allows reporting of:
- ACS encoders with removal status and encoder port metadata
- ACS entrances with room number metadata


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_system_id`** *String* (Required)

ID of the ACS system to report resources for

---

**`acs_encoders`** *Array* *of Objects*

Array of ACS encoders to report

<details>

<summary><b><code>hotek_metadata</code></b> <i>Object</i></summary>

</details>

---



<details>

<summary><b><code>is_removed</code></b> <i>Boolean</i></summary>

Whether the encoder is removed

</details>

---


**`acs_entrances`** *Array* *of Objects*

Array of ACS entrances to report

<details>

<summary><b><code>hotek_metadata</code></b> <i>Object</i></summary>

Hotek-specific metadata associated with the entrance.

</details>

---



<details>

<summary><b><code>is_removed</code></b> <i>Boolean</i></summary>

Whether the entrance is removed

</details>

---



## Response

void

