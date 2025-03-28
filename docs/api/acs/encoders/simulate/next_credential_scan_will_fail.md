# Simulate that the Next Credential Scan Will Fail

## Signature
```
POST /acs/encoders/simulate/next_credential_scan_will_fail ⇒ void
```

Simulates that the next attempt to scan a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will fail. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_encoder_id`

Type: `string`
Required: Yes

ID of the `acs_encoder` that will fail to scan the `acs_credential` in the next request.

***

### `acs_credential_id_on_seam`

Type: `string`
Required: No



***

### `error_code`

Type: `string`
Required: No



***

## Return Type

void
