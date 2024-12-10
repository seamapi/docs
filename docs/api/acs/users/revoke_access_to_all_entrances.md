# Revoke ACS User Access to All Entrances

```
POST /acs/users/revoke_access_to_all_entrances ⇒ void
```

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

## Authentication

This endpoint supports the following authentication methods:

<table>
  <tbody>
    <tr>
      <td>API Key</td>
    </tr>
    <tr>
      <td>Personal Access Token</td>
    </tr>
    <tr>
      <td>Console Session Token</td>
    </tr>
  </tbody>
</table>

## Request Parameters

### `acs_user_id`

Type: `string`
Required: Yes

ID of the desired `acs_user`.

***

## Return Type

void
