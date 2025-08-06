# Get an Instant Key

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets an [instant key](https://docs.seam.co/latest/capability-guides/mobile-access/instant-keys).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`instant_key_id`** *String*

ID of the instant key to get.

---

**`instant_key_url`** *String*

URL of the instant key to get.

---


## Response

[instant\_key](.)


{% tabs %}
{% tab title="JSON" %}



```json
{
  "client_session_id": "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
  "created_at": "2025-06-14T16:54:17.946559Z",
  "expires_at": "2025-06-16T16:54:17.946559Z",
  "instant_key_id": "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "user_identity_id": "e7a94acb-bd8a-4462-b6fb-8612d35cd7c3",
  "workspace_id": "4d1c24b2-781e-4d1a-8d77-15249ad57c8a"
}
```
{% endtab %}
{% endtabs %}
