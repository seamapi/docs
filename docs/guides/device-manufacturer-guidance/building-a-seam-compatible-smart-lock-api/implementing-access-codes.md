---
description: >-
  How to create, update, list, and track PIN codes on smart locks through your
  API.
---

# Implementing Access Codes

Seam relies on access codes to support hospitality, multifamily, coworking, and STR use cases. Your API should let Seam create user-defined PIN codes, manage their validity windows, and receive events when codes are used or fail.

***

### Creating an access code

Seam specifies the PIN value and validity window (if supported). Your API should return an immediate acknowledgement and send a status event when the code is fully applied to the device. If the request is invalid or the device cannot accept a new code, your API should return [an error response](implementing-access-codes.md#common-error-responses) immediately instead of a pending status.

#### Create code request

`POST https://devicecloud.example.com/locks/<LOCK_ID>/access_codes`

```json
{
  "name": "Jane Lo",
  "code": "4829",
  "starts_at": "2025-05-22T15:00:00Z",
  "ends_at": "2025-05-25T11:00:00Z"
}
```

#### Expected synchronous response

```json
{
  "access_code_id": "ac_55301",
  "name": "Jane Lo",
  "status": "pending",
  "code": "4829",
  "starts_at": "2025-05-21T15:00:00Z",
  "ends_at": "2025-05-24T11:00:00Z"
}
```

If the lock is offline, you may return a pending state or reject immediately:

```json
{
  "error_code": "DEVICE_OFFLINE",
  "message": "The device is currently offline and cannot receive new access codes."
}
```

#### Access code applied event

Once the device successfully stores the PIN, your API should send a webhook event.

```json
{
  "event_type": "access_code.created",
  "access_code": {
    "access_code_id": "ac_55301",
    "lockk_id": "lock_123",
    "code": "4829",
    "starts_at": "2025-05-21T16:00:00Z",
    "ends_at": "2025-05-24T12:00:00Z",
    "status": "active"
  },
  "status": "success",
  "timestamp": "2025-05-22T14:59:12Z"
}
```

***

### Updating an access code

If your platform allows modification, Seam may update the validity window or replace the PIN value.

If the request is invalid or the device cannot accept changes, your API should return [an error response](implementing-access-codes.md#common-error-responses) immediately instead of a pending status.

#### Update request

`PATCH https://devicecloud.example.com/access_codes/<ACCESS_CODE_ID>`

```jsonnet
{
  "starts_at": "2025-05-22T16:00:00Z",
  "ends_at": "2025-05-25T12:00:00Z"
}
```

#### Update response

```json
{
  "access_code_id": "ac_55301",
  "status": "pending",
  "starts_at": "2025-05-22T16:00:00Z",
  "ends_at": "2025-05-25T12:00:00Z"
}
```

#### Update applied event

```json
{
  "event_type": "access_code.updated",
  "access_code": {
    "access_code_id": "ac_55301",
    "lock_id": "lock_123",
    "code": "4829",
    "starts_at": "2025-05-22T16:00:00Z",
    "ends_at": "2025-05-25T12:00:00Z",
    "status": "active"
  },
  "status": "success",
  "timestamp": "2025-05-22T16:01:12Z"
}
```

***

### Deleting an access code

Seam may remove a PIN code when a reservation ends or a user revokes access.

#### Delete request

`DELETE https://devicecloud.example.com/access_codes/<ACCESS_CODE_ID>`

#### Delete response

```json
{
  "access_code_id": "ac_55301",
  "status": "pending"
}
```

#### Delete applied event

```json
{
  "event_type": "access_code.deleted",
  "access_code_id": "ac_55301",
  "status": "success",
  "timestamp": "2025-05-25T11:02:44Z"
}
```

***

### Listing access codes

Your API should expose an endpoint to list all codes currently on a lock. Seam uses this to prevent duplicates and maintain state accuracy.

#### List request

`GET https://devicecloud.example.com/locks/<LOCK_ID>/access_codes`

```json
{
  "access_codes": [
    {
      "access_code_id": "ac_55301",
      "lock_id": "lock_1234",
      "code": "4829",
      "starts_at": "2025-05-22T15:00:00Z",
      "ends_at": "2025-05-25T11:00:00Z",
      "status": "active"
    },
    {
      "access_code_id": "ac_99218",
      "lock_id": "lock_1234",
      "code": "9910",
      "starts_at": null,
      "ends_at": null,
      "status": "active"
    }
  ]
}
```

***

### Access code usage events

When an access code is used, your API should send a webhook event that includes the specific code.

#### Successful code usage

```json
{
  "event_type": "access_code.used",
  "lock_id": "lock_491829",
  "access_code_id": "ac_55301",
  "timestamp": "2025-05-23T08:15:32Z"
}
```

***

#### Incorrect PIN attempts

If supported, your API should notify Seam when someone enters an incorrect PIN.

Being able to see incorrect pin that was set is useful for debugging access code issues.

```json
{
  "event_type": "access_code.incorrect_attempt",
  "lock_id": "lock_491829",
  "pin": "3434",
  "timestamp": "2025-05-23T08:16:02Z"
}
```

***

### Common error responses

Your API should clearly surface code-related failures, including:

* invalid PIN format
* conflicting PIN on device
* device unable to store new codes
* device offline or out of sync

#### Example: conflicting PIN error

```
{
  "error_code": "PIN_CONFLICT",
  "message": "This PIN is already in use on the device."
}
```

***
