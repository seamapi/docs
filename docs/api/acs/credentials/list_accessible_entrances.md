# List Accessible Entrances

Returns a list of all [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a [credential](https://docs.seam.co/latest/api/acs/credentials) grants access.

{% hint style="success" %}
```
POST /acs/credentials/list_accessible_entrances ⇒ { acs_entrances: [acs_entrance, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_credential_id`** *string*
Required: Yes

ID of the credential for which you want to retrieve all entrances to which this credential grants access.

---


## Return Type

Array<[acs\_entrance](./)>
