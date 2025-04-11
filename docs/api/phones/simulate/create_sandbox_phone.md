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

<details>

<summary><code>application_version</code> Format: <code>String</code></summary>

Application version that you want to use for the simulated phone.
</details>

<details>

<summary><code>ble_capability</code> Format: <code>Boolean</code></summary>

Indicates whether the simulated phone should have Bluetooth low energy (BLE) capability.
</details>

<details>

<summary><code>hce_capability</code> Format: <code>Boolean</code></summary>

Indicates whether the simulated phone should have host card emulation (HCE) capability.
</details>

<details>

<summary><code>nfc_capability</code> Format: <code>Boolean</code></summary>

Indicates whether the simulated phone should have near-field communication (NFC) capability.
</details>

<details>

<summary><code>seos_applet_version</code> Format: <code>String</code></summary>

SEOS applet version that you want to use for the simulated phone.
</details>

<details>

<summary><code>seos_tsm_endpoint_id</code> Format: <code>Number</code></summary>

ID of the SEOS trusted service manager (TSM) endpoint that you want to use for the simulated phone.
</details>

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

<details>

<summary><code>device_manufacturer</code> Format: <code>String</code></summary>

Manufacturer that you want to use for the simulated phone.
</details>

<details>

<summary><code>device_model</code> Format: <code>String</code></summary>

Device model that you want to use for the simulated phone.
</details>

<details>

<summary><code>operating_system</code> Format: <code>Enum</code></summary>

Mobile operating system that you want to use for the simulated phone.

Possible enum values:
- `android`
- `ios`
</details>

<details>

<summary><code>os_version</code> Format: <code>String</code></summary>

Mobile operating system version that you want to use for the simulated phone.
</details>

***

## Return Type

[phone](./)
