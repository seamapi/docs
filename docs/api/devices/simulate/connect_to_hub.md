# Simulate Hub Connection

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates bringing the Wi-Fi hub (bridge) back online for a device.  
Only applicable for [sandbox workspaces](../../../core-concepts/workspaces/README.md#sandbox-workspaces) and August locks today, but designed so we can extend to other providers later.  
This will clear the `hub_disconnected` error on the device.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the device whose hub you want to reconnect.

---


## Response

void

