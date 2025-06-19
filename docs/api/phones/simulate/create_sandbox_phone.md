# Create a Sandbox Phone

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a new simulated phone in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Creating a Simulated Phone for a User Identity](../../../capability-guides/mobile-access/developing-in-a-sandbox-workspace.md#creating-a-simulated-phone-for-a-user-identity).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *String* (Required)

````
ID of the user identity that you want to associate with the simulated phone.
````

---

**`assa_abloy_metadata`** *Object*

````
ASSA ABLOY metadata that you want to associate with the simulated phone.
````

<details>

<summary><b><code>application_version</code></b> <i>String</i></summary>

Application version that you want to use for the simulated phone.

</details>

---



<details>

<summary><b><code>ble_capability</code></b> <i>Boolean</i></summary>

Indicates whether the simulated phone should have Bluetooth low energy (BLE) capability.

</details>

---



<details>

<summary><b><code>hce_capability</code></b> <i>Boolean</i></summary>

Indicates whether the simulated phone should have host card emulation (HCE) capability.

</details>

---



<details>

<summary><b><code>nfc_capability</code></b> <i>Boolean</i></summary>

Indicates whether the simulated phone should have near-field communication (NFC) capability.

</details>

---



<details>

<summary><b><code>seos_applet_version</code></b> <i>String</i></summary>

SEOS applet version that you want to use for the simulated phone.

</details>

---



<details>

<summary><b><code>seos_tsm_endpoint_id</code></b> <i>Number</i></summary>

ID of the SEOS trusted service manager (TSM) endpoint that you want to use for the simulated phone.

</details>

---


**`custom_sdk_installation_id`** *String*

````
ID of the custom SDK installation that you want to use for the simulated phone.
````

---

**`phone_metadata`** *Object*

````
Metadata that you want to associate with the simulated phone.
````

<details>

<summary><b><code>device_manufacturer</code></b> <i>String</i></summary>

Manufacturer that you want to use for the simulated phone.

</details>

---



<details>

<summary><b><code>device_model</code></b> <i>String</i></summary>

Device model that you want to use for the simulated phone.

</details>

---



<details>

<summary><b><code>operating_system</code></b> <i>Enum</i></summary>

Mobile operating system that you want to use for the simulated phone.

Enum values:

- <code>android</code>
- <code>ios</code>

</details>

---



<details>

<summary><b><code>os_version</code></b> <i>String</i></summary>

Mobile operating system version that you want to use for the simulated phone.

</details>

---



## Response

[phone](./)

