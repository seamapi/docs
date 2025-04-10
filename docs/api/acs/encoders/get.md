# Get an Encoder

```
POST /acs/encoders/get ⇒ { acs_encoder }
```

Returns a specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_encoder_id`

Format: `UUID`
Required: Yes

ID of the desired encoder.

***

## Return Type

[acs\_encoder](./)
