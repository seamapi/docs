# List ACS User-Accessible Entrances

```
POST /acs/users/list_accessible_entrances ⇒ { acs_entrances: [acs_entrance, …] }
```

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `acs_user_id`

Type: `string`
Required: Yes

ID of the desired `acs_user`.

---


## Return Type

Array<[acs\_entrance](./)>
