# Create a Sandbox Phone

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new simulated phone in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Creating a Simulated Phone for a User Identity](../../../capability-guides/mobile-access/developing-in-a-sandbox-workspace.md#creating-a-simulated-phone-for-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new simulated phone in a sandbox workspace.

#### Code:

```javascript
await seam.phones.simulate.createSandboxPhone({
  custom_sdk_installation_id: "visionline_sdk",
  user_identity_id: "799f9914-f2c2-4087-ab34-f1ffb44d6a0b",
  phone_metadata: {
    operating_system: "android",
    os_version: 10,
    device_manufacturer: "Samsung",
    device_model: "Samsung Galaxy S10",
  },
  assa_abloy_metadata: {
    ble_capability: "true,",
    hce_capability: "false,",
    nfc_capability: "false,",
    application_version: "1.0.0",
    seos_applet_version: "1.0.0",
    seos_tsm_endpoint_id: 1,
  },
});
```

#### Output:

```javascript
{
  "created_at": "2025-06-14T16:54:17.946540Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "e452f665-a635-4c65-922b-9feab0e0f84f",
  "device_type": "android_phone",
  "display_name": "My Phone",
  "errors": [],
  "nickname": "My Phone",
  "properties": {
    "assa_abloy_credential_service_metadata": {
      "endpoints": [
        {
          "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
          "is_active": true
        }
      ],
      "has_active_endpoint": true
    }
  },
  "warnings": [],
  "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new simulated phone in a sandbox workspace.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/phones/simulate/create_sandbox_phone" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "custom_sdk_installation_id": "visionline_sdk",
  "user_identity_id": "799f9914-f2c2-4087-ab34-f1ffb44d6a0b",
  "phone_metadata": {
    "operating_system": "android",
    "os_version": 10,
    "device_manufacturer": "Samsung",
    "device_model": "Samsung Galaxy S10"
  },
  "assa_abloy_metadata": {
    "ble_capability": "true,",
    "hce_capability": "false,",
    "nfc_capability": "false,",
    "application_version": "1.0.0",
    "seos_applet_version": "1.0.0",
    "seos_tsm_endpoint_id": 1
  }
}
EOF
```

#### Output:

```curl
{
  "phone": {
    "created_at": "2025-06-14T16:54:17.946540Z",
    "custom_metadata": { "id": "internalId1" },
    "device_id": "e452f665-a635-4c65-922b-9feab0e0f84f",
    "device_type": "android_phone",
    "display_name": "My Phone",
    "errors": [],
    "nickname": "My Phone",
    "properties": {
      "assa_abloy_credential_service_metadata": {
        "endpoints": [
          {
            "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
            "is_active": true
          }
        ],
        "has_active_endpoint": true
      }
    },
    "warnings": [],
    "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new simulated phone in a sandbox workspace.

#### Code:

```python
seam.phones.simulate.create_sandbox_phone(
    custom_sdk_installation_id="visionline_sdk",
    user_identity_id="799f9914-f2c2-4087-ab34-f1ffb44d6a0b",
    phone_metadata={
        "operating_system": "android",
        "os_version": 10,
        "device_manufacturer": "Samsung",
        "device_model": "Samsung Galaxy S10",
    },
    assa_abloy_metadata={
        "ble_capability": "true,",
        "hce_capability": "false,",
        "nfc_capability": "false,",
        "application_version": "1.0.0",
        "seos_applet_version": "1.0.0",
        "seos_tsm_endpoint_id": 1,
    },
)
```

#### Output:

```python
Phone(
    created_at="2025-06-14T16:54:17.946540Z",
    custom_metadata={"id": "internalId1"},
    device_id="e452f665-a635-4c65-922b-9feab0e0f84f",
    device_type="android_phone",
    display_name="My Phone",
    errors=[],
    nickname="My Phone",
    properties={
        "assa_abloy_credential_service_metadata": {
            "endpoints": [
                {
                    "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
                    "is_active": true,
                }
            ],
            "has_active_endpoint": true,
        }
    },
    warnings=[],
    workspace_id="da8639a4-28a2-4884-a4f9-b7691f4cf336",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new simulated phone in a sandbox workspace.

#### Code:

```ruby
seam.phones.simulate.create_sandbox_phone(
  custom_sdk_installation_id: "visionline_sdk",
  user_identity_id: "799f9914-f2c2-4087-ab34-f1ffb44d6a0b",
  phone_metadata: {
    operating_system: "android",
    os_version: 10,
    device_manufacturer: "Samsung",
    device_model: "Samsung Galaxy S10",
  },
  assa_abloy_metadata: {
    ble_capability: "true,",
    hce_capability: "false,",
    nfc_capability: "false,",
    application_version: "1.0.0",
    seos_applet_version: "1.0.0",
    seos_tsm_endpoint_id: 1,
  },
)
```

#### Output:

```ruby
{
  "created_at" => "2025-06-14T16:54:17.946540Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "device_id" => "e452f665-a635-4c65-922b-9feab0e0f84f",
  "device_type" => "android_phone",
  "display_name" => "My Phone",
  "errors" => [],
  "nickname" => "My Phone",
  "properties" => {
    assa_abloy_credential_service_metadata: {
      endpoints: [{ endpoint_id: "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f", is_active: true }],
      has_active_endpoint: true,
    },
  },
  "warnings" => [],
  "workspace_id" => "da8639a4-28a2-4884-a4f9-b7691f4cf336",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new simulated phone in a sandbox workspace.

#### Code:

```php
$seam->phones->simulate->create_sandbox_phone(
    custom_sdk_installation_id: "visionline_sdk",
    user_identity_id: "799f9914-f2c2-4087-ab34-f1ffb44d6a0b",
    phone_metadata: [
        "operating_system" => "android",
        "os_version" => 10,
        "device_manufacturer" => "Samsung",
        "device_model" => "Samsung Galaxy S10",
    ],
    assa_abloy_metadata: [
        "ble_capability" => "true,",
        "hce_capability" => "false,",
        "nfc_capability" => "false,",
        "application_version" => "1.0.0",
        "seos_applet_version" => "1.0.0",
        "seos_tsm_endpoint_id" => 1,
    ]
);
```

#### Output:

```php
[
    "created_at" => "2025-06-14T16:54:17.946540Z",
    "custom_metadata" => ["id" => "internalId1"],
    "device_id" => "e452f665-a635-4c65-922b-9feab0e0f84f",
    "device_type" => "android_phone",
    "display_name" => "My Phone",
    "errors" => [],
    "nickname" => "My Phone",
    "properties" => [
        "assa_abloy_credential_service_metadata" => [
            "endpoints" => [
                [
                    "endpoint_id" => "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
                    "is_active" => true,
                ],
            ],
            "has_active_endpoint" => true,
        ],
    ],
    "warnings" => [],
    "workspace_id" => "da8639a4-28a2-4884-a4f9-b7691f4cf336",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new simulated phone in a sandbox workspace.

#### Code:

```seam_cli
seam phones simulate create-sandbox-phone --custom_sdk_installation_id "visionline_sdk" --user_identity_id "799f9914-f2c2-4087-ab34-f1ffb44d6a0b" --phone_metadata {"operating_system":"android","os_version":10,"device_manufacturer":"Samsung","device_model":"Samsung Galaxy S10"} --assa_abloy_metadata {"ble_capability":"true,","hce_capability":"false,","nfc_capability":"false,","application_version":"1.0.0","seos_applet_version":"1.0.0","seos_tsm_endpoint_id":1}
```

#### Output:

```seam_cli
{
  "created_at": "2025-06-14T16:54:17.946540Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "e452f665-a635-4c65-922b-9feab0e0f84f",
  "device_type": "android_phone",
  "display_name": "My Phone",
  "errors": [],
  "nickname": "My Phone",
  "properties": {
    "assa_abloy_credential_service_metadata": {
      "endpoints": [
        {
          "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
          "is_active": true
        }
      ],
      "has_active_endpoint": true
    }
  },
  "warnings": [],
  "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *String* (Required)

ID of the user identity that you want to associate with the simulated phone.

---

**`assa_abloy_metadata`** *Object*

ASSA ABLOY metadata that you want to associate with the simulated phone.

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

ID of the custom SDK installation that you want to use for the simulated phone.

---

**`phone_metadata`** *Object*

Metadata that you want to associate with the simulated phone.

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

{% hint style="success" %}
**Returns:**
[phone](./..)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "created_at": "2025-06-14T16:54:17.946540Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "e452f665-a635-4c65-922b-9feab0e0f84f",
  "device_type": "ios_phone",
  "display_name": "My Phone",
  "errors": [],
  "nickname": "My Phone",
  "properties": {
    "assa_abloy_credential_service_metadata": {
      "endpoints": [
        {
          "endpoint_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
          "is_active": true
        }
      ],
      "has_active_endpoint": true
    }
  },
  "warnings": [],
  "workspace_id": "da8639a4-28a2-4884-a4f9-b7691f4cf336"
}
```
{% endtab %}
{% endtabs %}
