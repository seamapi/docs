# Device Simulations

## Endpoints


[**`/devices/simulate/connect`**](./connect.md)

Simulates connecting a device to Seam. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your App Against Device Disconnection and Removal](../../../core-concepts/devices/testing-your-app-against-device-disconnection-and-removal.md).


[**`/devices/simulate/connect_to_hub`**](./connect_to_hub.md)

Simulates bringing the Wi‑Fi hub (bridge) back online for a device.
Only applicable for sandbox workspaces and currently
implemented for August and TTLock locks.
This will clear the corresponding `hub_disconnected` or
`ttlock_lock_not_paired_to_gateway` error on the device.


[**`/devices/simulate/disconnect`**](./disconnect.md)

Simulates disconnecting a device from Seam. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your App Against Device Disconnection and Removal](../../../core-concepts/devices/testing-your-app-against-device-disconnection-and-removal.md).


[**`/devices/simulate/disconnect_from_hub`**](./disconnect_from_hub.md)

Simulates taking the Wi‑Fi hub (bridge) offline for a device.
Only applicable for sandbox workspaces and currently
implemented for August and TTLock locks.
This will set the corresponding `hub_disconnected` or
`ttlock_lock_not_paired_to_gateway` error on the device.


[**`/devices/simulate/remove`**](./remove.md)

Simulates removing a device from Seam. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your App Against Device Disconnection and Removal](../../../core-concepts/devices/testing-your-app-against-device-disconnection-and-removal.md).


