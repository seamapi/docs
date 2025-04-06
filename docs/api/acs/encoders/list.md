# List Encoders

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

{% hint style="success" %}
```
POST /acs/encoders/list ⇒ { acs_encoders: [acs_encoder, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_encoder_ids`** ** *of UUIDs*

IDs of the `acs_encoder`s that you want to retrieve.

---

**`acs_system_id`** **

ID of the `acs_system` for which you want to retrieve all `acs_encoder`s.

---

**`acs_system_ids`** ** *of UUIDs*

IDs of the `acs_system`s for which you want to retrieve all `acs_encoder`s.

---

**`limit`** **

Number of `acs_encoders` to return.

---


## Return Type

Array<[acs\_encoder](./)>
