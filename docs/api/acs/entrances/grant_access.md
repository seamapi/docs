# Grant an ACS User Access to an Entrance

```
POST /acs/entrances/grant_access ⇒ void
```



## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_entrance_id`

Format: `UUID`
Required: Yes

***

### `acs_user_id`

Format: `UUID`
Required: Yes

***

## Return Type

void
