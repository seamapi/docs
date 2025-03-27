# Deactivate a Phone

```
POST /phones/deactivate ⇒ void
```

Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).

## Authentication Methods

* API key
* Client session token
* Personal access token\
  Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Type: `string` Required: Yes

Device ID of the desired phone.

***

## Return Type

void
