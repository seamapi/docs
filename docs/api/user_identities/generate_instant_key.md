# Generate an Instant Key

```
POST /user_identities/generate_instant_key ⇒ { instant_key }
```

Generates a new [instant key](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/instant-keys) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `user_identity_id`

Format: `UUID`
Required: Yes

ID of the user identity for which you want to generate an instant key.

***

### `max_use_count`

Format: `Number`
Required: No

The maximum number of times the instant key can be used. Defaults to 1.

***

## Return Type

[instant\_key](./)
