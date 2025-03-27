# List Encoders

```
POST /acs/encoders/list ⇒ { acs_encoders: [acs_encoder, …] }
```

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `acs_encoder_ids`

Type: `array`
Required: No

IDs of the `acs_encoder`s that you want to retrieve.

---

### `acs_system_id`

Type: `string`
Required: No

ID of the `acs_system` for which you want to retrieve all `acs_encoder`s.

---

### `acs_system_ids`

Type: `array`
Required: No

IDs of the `acs_system`s for which you want to retrieve all `acs_encoder`s.

---

### `limit`

Type: `number`
Required: No

Number of `acs_encoders` to return.

---


---

## Return Type

Array<[acs\_encoder](./)>
