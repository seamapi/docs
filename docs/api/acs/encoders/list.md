# List Encoders

```
POST /acs/encoders/list ⇒ { acs_encoders: [acs_encoder, …] }
```

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

None.

## Return Type

Array<[acs\_encoder](./)>
