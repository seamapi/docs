# Revoke ACS User Access to All Entrances

```
POST /acs/users/revoke_access_to_all_entrances ⇒ void
```

{% hint style="info" %}
**Authentication Methods:** `api_key`, `personal_access_token`, `console_session_token`
{% endhint %}

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

## Request Parameters

### `acs_user_id`

Type: `string`
Required: Yes

ID of the desired `acs_user`.

***

## Return Type

void
