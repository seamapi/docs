# Create a Space

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a new space.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`name`** *String* (Required)

Name of the space that you want to create.

---

**`acs_entrance_ids`** *Array* *of UUIDs*

IDs of the entrances that you want to add to the new space.

---

**`device_ids`** *Array* *of UUIDs*

IDs of the devices that you want to add to the new space.

---


## Response

[space](./)

