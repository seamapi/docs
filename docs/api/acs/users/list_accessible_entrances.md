# List ACS User-Accessible Entrances

{% hint style="info" %}
**Authentication Methods:** `client_session_token`, `personal_access_token`, `console_session_token`, `api_key`
{% endhint %}

```
POST /acs/users/list_accessible_entrances ⇒ { acs_entrances: [acs_entrance, …] }
```

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.

## Request Parameters

### `acs_user_id`

Type: `string`
Required: Yes

ID of the desired `acs_user`.

***

## Return Type

Array<[acs\_entrance](./)>
