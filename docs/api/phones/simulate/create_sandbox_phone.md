# Create a Sandbox Phone

```
POST /phones/simulate/create_sandbox_phone ⇒ { phone }
```

Creates a new simulated phone in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces). For more information, see [Creating a Simulated Phone for a User Identity](../../../capability-guides/mobile-access/developing-in-a-sandbox-workspace.md#creating-a-simulated-phone-for-a-user-identity).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `user_identity_id`

Format: `UUID`
Required: Yes

ID of the user identity to associate with the simulated phone.

***

### `assa_abloy_metadata`

Format: `Object`
Required: No

ASSA ABLOY metadata to associate with the simulated phone.

***

### `custom_sdk_installation_id`

Format: `String`
Required: No

ID of the custom SDK installation to use for the simulated phone.

***

### `phone_metadata`

Format: `Object`
Required: No

Metadata to associate with the simulated phone.

***

## Return Type

[phone](./)
