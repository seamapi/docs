# Create Reservation Deep Link

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a deep link URL for a specific reservation that can be embedded in an iframe.
The deep link creates a restricted customer portal that navigates directly to the reservation page,
hiding the navigation UI to prevent context switching.

This is intended for PMS integrations (like RMS Cloud) to embed reservation management
in their own portal without exposing the full customer portal.

The deep link expires after 7 days.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`customer_key`** *String* (Required)

The customer_key identifying the customer who owns the reservation.

---

**`reservation_key`** *String* (Required)

The key of the reservation to create a deep link for.

---


## Response

{% hint style="success" %}
Returns:
**[unknown](./)**

{% endhint %}

