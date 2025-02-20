# Simulate that the Next Credential Scan Will Succeed

```
POST /acs/encoders/simulate/next_credential_scan_will_succeed ⇒ void
```

Simulates that the next attempt to scan a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will succeed. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_credential_id_on_seam`

Type: `string`
Required: No

ID of the Seam `acs_credential` that matches the `acs_credential` on the encoder in this simulation.

***

### `acs_encoder_id`

Type: `string`
Required: Yes

ID of the `acs_encoder` that will be used in the next request to scan the `acs_credential`.

***

### `scenario`

Type: `string`
Required: No

Scenario to simulate.

***

## Return Type

void
