# List Accessible Devices for a User Identity

Returns a list of all [devices](../../core-concepts/devices/README.md) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
POST /user_identities/list_accessible_devices ⇒ { devices: [device, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`user_identity_id`** *string*
Required: Yes

ID of the user identity for which you want to retrieve all accessible devices.

---


## Return Type

Array<[device](./)>
