# Get Phone

```
POST /phones/get ⇒ { phone }
```

Returns a single phone entry matching the provided `device_id`.

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `device_id`

Type: `string`
Required: Yes

Device ID of the desired phone.

---


---

## Return Type

[phone](./)
