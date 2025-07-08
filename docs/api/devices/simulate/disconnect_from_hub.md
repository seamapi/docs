# Simulate Hub Disconnection

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates taking the Wi-Fi hub (bridge) offline for a device.  
Only applicable for [sandbox workspaces](../../../core-concepts/workspaces/README.md#sandbox-workspaces) and August locks today, but designed so we can extend to other providers later.  
This will set the `hub_disconnected` error on the device.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the device whose hub you want to disconnect.

---


## Response

void

