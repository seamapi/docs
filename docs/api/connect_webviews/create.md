# Create a Connect Webview

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Creates a new [Connect Webview](../../core-concepts/connect-webviews/README.md).

To enable a user to connect their devices or systems to Seam, they must sign in to their device or system account. To enable a user to sign in, you create a `connect_webview`. After creating the Connect Webview, you receive a URL that you can use to display the visual component of this Connect Webview for your user. You can open an iframe or new window to display the Connect Webview.

You should make a new `connect_webview` for each unique login request. Each `connect_webview` tracks the user that signed in with it. You receive an error if you reuse a Connect Webview for the same user twice or if you use the same Connect Webview for multiple users.

See also: [Connect Webview Process](../../core-concepts/connect-webviews/connect-webview-process.md).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new Connect Webview that accepts all stable providers.

#### Code:

```javascript
await seam.connectWebviews.create({
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  customer_id: "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
  provider_category: "stable",
  custom_metadata: { id: "internalId1" },
  automatically_manage_new_devices: true,
  wait_for_device_creation: true,
  accepted_capabilities: ["lock", "thermostat"],
});
```

#### Output:

```javascript
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": [
    "schlage",
    "kwikset",
    "yale",
    "smartthings",
    "august",
    "avigilon_alta",
    "brivo",
    "nuki",
    "salto_ks",
    "salto_space",
    "controlbyweb",
    "minut",
    "my_2n",
    "ttlock",
    "noiseaware",
    "igloohome",
    "ecobee",
    "four_suites",
    "lockly",
    "wyze",
    "google_nest",
    "tede",
    "seam_bridge",
    "honeywell_resideo",
    "visionline",
    "assa_abloy_credential_service",
    "latch",
    "akiles",
    "sensi",
    "assa_abloy_vostio"
  ],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new Connect Webview that accepts all stable providers.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connect_webviews/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "custom_redirect_url": "https://example.com/redirect",
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "customer_id": "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
  "provider_category": "stable",
  "custom_metadata": {
    "id": "internalId1"
  },
  "automatically_manage_new_devices": true,
  "wait_for_device_creation": true,
  "accepted_capabilities": [
    "lock",
    "thermostat"
  ]
}
EOF
```

#### Output:

```curl
{
  "connect_webview": {
    "accepted_capabilities": ["lock", "thermostat"],
    "accepted_devices": [],
    "accepted_providers": [
      "schlage",
      "kwikset",
      "yale",
      "smartthings",
      "august",
      "avigilon_alta",
      "brivo",
      "nuki",
      "salto_ks",
      "salto_space",
      "controlbyweb",
      "minut",
      "my_2n",
      "ttlock",
      "noiseaware",
      "igloohome",
      "ecobee",
      "four_suites",
      "lockly",
      "wyze",
      "google_nest",
      "tede",
      "seam_bridge",
      "honeywell_resideo",
      "visionline",
      "assa_abloy_credential_service",
      "latch",
      "akiles",
      "sensi",
      "assa_abloy_vostio"
    ],
    "any_device_allowed": true,
    "any_provider_allowed": false,
    "authorized_at": null,
    "automatically_manage_new_devices": true,
    "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id": null,
    "created_at": "2025-06-14T16:54:17.946323Z",
    "custom_metadata": { "id": "internalId1" },
    "custom_redirect_failure_url": "https://example.com/failure-redirect",
    "custom_redirect_url": "https://example.com/redirect",
    "device_selection_mode": "none",
    "login_successful": false,
    "selected_provider": null,
    "status": "pending",
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation": true,
    "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new Connect Webview that accepts all stable providers.

#### Code:

```python
seam.connect_webviews.create(
    custom_redirect_url="https://example.com/redirect",
    custom_redirect_failure_url="https://example.com/failure-redirect",
    customer_id="8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
    provider_category="stable",
    custom_metadata={"id": "internalId1"},
    automatically_manage_new_devices=true,
    wait_for_device_creation=true,
    accepted_capabilities=["lock", "thermostat"],
)
```

#### Output:

```python
ConnectWebview(
    accepted_capabilities=["lock", "thermostat"],
    accepted_devices=[],
    accepted_providers=[
        "schlage",
        "kwikset",
        "yale",
        "smartthings",
        "august",
        "avigilon_alta",
        "brivo",
        "nuki",
        "salto_ks",
        "salto_space",
        "controlbyweb",
        "minut",
        "my_2n",
        "ttlock",
        "noiseaware",
        "igloohome",
        "ecobee",
        "four_suites",
        "lockly",
        "wyze",
        "google_nest",
        "tede",
        "seam_bridge",
        "honeywell_resideo",
        "visionline",
        "assa_abloy_credential_service",
        "latch",
        "akiles",
        "sensi",
        "assa_abloy_vostio",
    ],
    any_device_allowed=true,
    any_provider_allowed=false,
    authorized_at=None,
    automatically_manage_new_devices=true,
    connect_webview_id="c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    connected_account_id=None,
    created_at="2025-06-14T16:54:17.946323Z",
    custom_metadata={"id": "internalId1"},
    custom_redirect_failure_url="https://example.com/failure-redirect",
    custom_redirect_url="https://example.com/redirect",
    device_selection_mode="none",
    login_successful=false,
    selected_provider=None,
    status="pending",
    url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    wait_for_device_creation=true,
    workspace_id="9db95105-e77d-4577-b1b7-0a20b360d5e0",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new Connect Webview that accepts all stable providers.

#### Code:

```ruby
seam.connect_webviews.create(
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  customer_id: "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
  provider_category: "stable",
  custom_metadata: {
    id: "internalId1",
  },
  automatically_manage_new_devices: true,
  wait_for_device_creation: true,
  accepted_capabilities: %w[lock thermostat],
)
```

#### Output:

```ruby
{
  "accepted_capabilities" => %w[lock thermostat],
  "accepted_devices" => [],
  "accepted_providers" => %w[
    schlage
    kwikset
    yale
    smartthings
    august
    avigilon_alta
    brivo
    nuki
    salto_ks
    salto_space
    controlbyweb
    minut
    my_2n
    ttlock
    noiseaware
    igloohome
    ecobee
    four_suites
    lockly
    wyze
    google_nest
    tede
    seam_bridge
    honeywell_resideo
    visionline
    assa_abloy_credential_service
    latch
    akiles
    sensi
    assa_abloy_vostio
  ],
  "any_device_allowed" => true,
  "any_provider_allowed" => false,
  "authorized_at" => nil,
  "automatically_manage_new_devices" => true,
  "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id" => nil,
  "created_at" => "2025-06-14T16:54:17.946323Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "custom_redirect_failure_url" => "https://example.com/failure-redirect",
  "custom_redirect_url" => "https://example.com/redirect",
  "device_selection_mode" => "none",
  "login_successful" => false,
  "selected_provider" => nil,
  "status" => "pending",
  "url" =>
    "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation" => true,
  "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new Connect Webview that accepts all stable providers.

#### Code:

```php
$seam->connect_webviews->create(
    custom_redirect_url: "https://example.com/redirect",
    custom_redirect_failure_url: "https://example.com/failure-redirect",
    customer_id: "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
    provider_category: "stable",
    custom_metadata: ["id" => "internalId1"],
    automatically_manage_new_devices: true,
    wait_for_device_creation: true,
    accepted_capabilities: ["lock", "thermostat"],
);
```

#### Output:

```php
[
    "accepted_capabilities" => ["lock", "thermostat"],
    "accepted_devices" => [],
    "accepted_providers" => [
        "schlage",
        "kwikset",
        "yale",
        "smartthings",
        "august",
        "avigilon_alta",
        "brivo",
        "nuki",
        "salto_ks",
        "salto_space",
        "controlbyweb",
        "minut",
        "my_2n",
        "ttlock",
        "noiseaware",
        "igloohome",
        "ecobee",
        "four_suites",
        "lockly",
        "wyze",
        "google_nest",
        "tede",
        "seam_bridge",
        "honeywell_resideo",
        "visionline",
        "assa_abloy_credential_service",
        "latch",
        "akiles",
        "sensi",
        "assa_abloy_vostio",
    ],
    "any_device_allowed" => true,
    "any_provider_allowed" => false,
    "authorized_at" => null,
    "automatically_manage_new_devices" => true,
    "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id" => null,
    "created_at" => "2025-06-14T16:54:17.946323Z",
    "custom_metadata" => ["id" => "internalId1"],
    "custom_redirect_failure_url" => "https://example.com/failure-redirect",
    "custom_redirect_url" => "https://example.com/redirect",
    "device_selection_mode" => "none",
    "login_successful" => false,
    "selected_provider" => null,
    "status" => "pending",
    "url" =>
        "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation" => true,
    "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new Connect Webview that accepts all stable providers.

#### Code:

```seam_cli
seam connect-webviews create --custom_redirect_url "https://example.com/redirect" --custom_redirect_failure_url "https://example.com/failure-redirect" --customer_id "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0" --provider_category "stable" --custom_metadata {"id":"internalId1"} --automatically_manage_new_devices true --wait_for_device_creation true --accepted_capabilities ["lock","thermostat"]
```

#### Output:

```seam_cli
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": [
    "schlage",
    "kwikset",
    "yale",
    "smartthings",
    "august",
    "avigilon_alta",
    "brivo",
    "nuki",
    "salto_ks",
    "salto_space",
    "controlbyweb",
    "minut",
    "my_2n",
    "ttlock",
    "noiseaware",
    "igloohome",
    "ecobee",
    "four_suites",
    "lockly",
    "wyze",
    "google_nest",
    "tede",
    "seam_bridge",
    "honeywell_resideo",
    "visionline",
    "assa_abloy_credential_service",
    "latch",
    "akiles",
    "sensi",
    "assa_abloy_vostio"
  ],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`accepted_capabilities`** *Array* *of Enums*

List of accepted device capabilities that restrict the types of devices that can be connected through the Connect Webview. If not provided, defaults will be determined based on the accepted providers.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>lock</code>
- <code>thermostat</code>
- <code>noise_sensor</code>
- <code>access_control</code>
</details>

---

**`accepted_providers`** *Array* *of Enums*

Accepted device provider keys as an alternative to `provider_category`. Use this parameter to specify accepted providers explicitly. See [Customize the Brands to Display in Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews). To list all provider keys, use [`/devices/list_device_providers`](https://docs.seam.co/latest/api/devices/list_device_providers) with no filters.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>hotek</code>
- <code>dormakaba_community</code>
- <code>legic_connect</code>
- <code>akuvox</code>
- <code>august</code>
- <code>avigilon_alta</code>
- <code>brivo</code>
- <code>butterflymx</code>
- <code>schlage</code>
- <code>smartthings</code>
- <code>yale</code>
- <code>genie</code>
- <code>doorking</code>
- <code>salto</code>
- <code>salto_ks</code>
- <code>lockly</code>
- <code>ttlock</code>
- <code>linear</code>
- <code>noiseaware</code>
- <code>nuki</code>
- <code>seam_relay_admin</code>
- <code>igloo</code>
- <code>kwikset</code>
- <code>minut</code>
- <code>my_2n</code>
- <code>controlbyweb</code>
- <code>nest</code>
- <code>igloohome</code>
- <code>ecobee</code>
- <code>hubitat</code>
- <code>four_suites</code>
- <code>dormakaba_oracode</code>
- <code>pti</code>
- <code>wyze</code>
- <code>seam_passport</code>
- <code>visionline</code>
- <code>assa_abloy_credential_service</code>
- <code>tedee</code>
- <code>honeywell_resideo</code>
- <code>latch</code>
- <code>akiles</code>
- <code>assa_abloy_vostio</code>
- <code>assa_abloy_vostio_credential_service</code>
- <code>tado</code>
- <code>salto_space</code>
- <code>sensi</code>
- <code>kwikset2</code>
- <code>keynest</code>
- <code>dormakaba_ambiance</code>
- <code>ultraloq</code>
- <code>yale_access</code>
- <code>hid_cm</code>
- <code>google_nest</code>
</details>

---

**`automatically_manage_new_devices`** *Boolean*

Indicates whether newly-added devices should appear as [managed devices](../../core-concepts/devices/managed-and-unmanaged-devices.md). See also: [Customize the Behavior Settings of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-behavior-settings-of-your-connect-webviews).

---

**`custom_metadata`** *Object*

Custom metadata that you want to associate with the Connect Webview. Supports up to 50 JSON key:value pairs. [Adding custom metadata to a Connect Webview](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md) enables you to store custom information, like customer details or internal IDs from your application. The custom metadata is then transferred to any [connected accounts](../../core-concepts/connected-accounts/README.md) that were connected using the Connect Webview, making it easy to find and filter these resources in your [workspace](../../core-concepts/workspaces/README.md). You can also [filter Connect Webviews by custom metadata](../../core-concepts/connect-webviews/filtering-connect-webviews-by-custom-metadata.md).

---

**`custom_redirect_failure_url`** *String*

Alternative URL that you want to redirect the user to on an error. If you do not set this parameter, the Connect Webview falls back to the `custom_redirect_url`.

---

**`custom_redirect_url`** *String*

URL that you want to redirect the user to after the provider login is complete.

---

**`customer_key`** *String*

Associate the Connect Webview, the connected account, and all resources under the connected account with a customer. If the connected account already exists, it will be associated with the customer. If the connected account already exists, but is already associated with a customer, the Connect Webview will show an error.

---

**`excluded_providers`** *Array* *of Strings*

List of provider keys to exclude from the Connect Webview. These providers will not be shown when the user tries to connect an account.

---

**`provider_category`** *String*

Specifies the category of providers that you want to include. To list all providers within a category, use [`/devices/list_device_providers`](https://docs.seam.co/latest/api/devices/list_device_providers) with the desired `provider_category` filter.

---

**`wait_for_device_creation`** *Boolean*

Indicates whether Seam should finish syncing all devices in a newly-connected account before completing the associated Connect Webview. See also: [Customize the Behavior Settings of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-behavior-settings-of-your-connect-webviews).

---


## Response

{% hint style="success" %}
Returns:
**[connect\_webview](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["schlage", "kwikset", "yale", "smartthings"],
  "any_device_allowed": false,
  "any_provider_allowed": false,
  "authorized_at": "2025-06-14T16:54:17.946323Z",
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": "5d2fe05f-4f5b-4b91-909c-96e2601dccbe",
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "single",
  "login_successful": true,
  "selected_provider": "schlage",
  "status": "authorized",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=2r2Rn8V5QUtxE79gNsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### Create a Connect Webview for specific providers

Creates a new Connect Webview that accepts specific providers.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.connectWebviews.create({
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  customer_id: "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
  accepted_providers: ["kwikset", "schlage", "smartthings", "yale"],
  provider_category: "stable",
  custom_metadata: { id: "internalId1" },
  automatically_manage_new_devices: true,
  wait_for_device_creation: true,
  accepted_capabilities: ["lock", "thermostat"],
});
```

#### Output:

```javascript
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connect_webviews/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "custom_redirect_url": "https://example.com/redirect",
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "customer_id": "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
  "accepted_providers": [
    "kwikset",
    "schlage",
    "smartthings",
    "yale"
  ],
  "provider_category": "stable",
  "custom_metadata": {
    "id": "internalId1"
  },
  "automatically_manage_new_devices": true,
  "wait_for_device_creation": true,
  "accepted_capabilities": [
    "lock",
    "thermostat"
  ]
}
EOF
```

#### Output:

```curl
{
  "connect_webview": {
    "accepted_capabilities": ["lock", "thermostat"],
    "accepted_devices": [],
    "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
    "any_device_allowed": true,
    "any_provider_allowed": false,
    "authorized_at": null,
    "automatically_manage_new_devices": true,
    "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id": null,
    "created_at": "2025-06-14T16:54:17.946323Z",
    "custom_metadata": { "id": "internalId1" },
    "custom_redirect_failure_url": "https://example.com/failure-redirect",
    "custom_redirect_url": "https://example.com/redirect",
    "device_selection_mode": "none",
    "login_successful": false,
    "selected_provider": null,
    "status": "pending",
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation": true,
    "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.connect_webviews.create(
    custom_redirect_url="https://example.com/redirect",
    custom_redirect_failure_url="https://example.com/failure-redirect",
    customer_id="8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
    accepted_providers=["kwikset", "schlage", "smartthings", "yale"],
    provider_category="stable",
    custom_metadata={"id": "internalId1"},
    automatically_manage_new_devices=true,
    wait_for_device_creation=true,
    accepted_capabilities=["lock", "thermostat"],
)
```

#### Output:

```python
ConnectWebview(
    accepted_capabilities=["lock", "thermostat"],
    accepted_devices=[],
    accepted_providers=["kwikset", "schlage", "smartthings", "yale"],
    any_device_allowed=true,
    any_provider_allowed=false,
    authorized_at=None,
    automatically_manage_new_devices=true,
    connect_webview_id="c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    connected_account_id=None,
    created_at="2025-06-14T16:54:17.946323Z",
    custom_metadata={"id": "internalId1"},
    custom_redirect_failure_url="https://example.com/failure-redirect",
    custom_redirect_url="https://example.com/redirect",
    device_selection_mode="none",
    login_successful=false,
    selected_provider=None,
    status="pending",
    url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    wait_for_device_creation=true,
    workspace_id="9db95105-e77d-4577-b1b7-0a20b360d5e0",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.connect_webviews.create(
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  customer_id: "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
  accepted_providers: %w[kwikset schlage smartthings yale],
  provider_category: "stable",
  custom_metadata: {
    id: "internalId1",
  },
  automatically_manage_new_devices: true,
  wait_for_device_creation: true,
  accepted_capabilities: %w[lock thermostat],
)
```

#### Output:

```ruby
{
  "accepted_capabilities" => %w[lock thermostat],
  "accepted_devices" => [],
  "accepted_providers" => %w[kwikset schlage smartthings yale],
  "any_device_allowed" => true,
  "any_provider_allowed" => false,
  "authorized_at" => nil,
  "automatically_manage_new_devices" => true,
  "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id" => nil,
  "created_at" => "2025-06-14T16:54:17.946323Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "custom_redirect_failure_url" => "https://example.com/failure-redirect",
  "custom_redirect_url" => "https://example.com/redirect",
  "device_selection_mode" => "none",
  "login_successful" => false,
  "selected_provider" => nil,
  "status" => "pending",
  "url" =>
    "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation" => true,
  "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->connect_webviews->create(
    custom_redirect_url: "https://example.com/redirect",
    custom_redirect_failure_url: "https://example.com/failure-redirect",
    customer_id: "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0",
    accepted_providers: ["kwikset", "schlage", "smartthings", "yale"],
    provider_category: "stable",
    custom_metadata: ["id" => "internalId1"],
    automatically_manage_new_devices: true,
    wait_for_device_creation: true,
    accepted_capabilities: ["lock", "thermostat"],
);
```

#### Output:

```php
[
    "accepted_capabilities" => ["lock", "thermostat"],
    "accepted_devices" => [],
    "accepted_providers" => ["kwikset", "schlage", "smartthings", "yale"],
    "any_device_allowed" => true,
    "any_provider_allowed" => false,
    "authorized_at" => null,
    "automatically_manage_new_devices" => true,
    "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id" => null,
    "created_at" => "2025-06-14T16:54:17.946323Z",
    "custom_metadata" => ["id" => "internalId1"],
    "custom_redirect_failure_url" => "https://example.com/failure-redirect",
    "custom_redirect_url" => "https://example.com/redirect",
    "device_selection_mode" => "none",
    "login_successful" => false,
    "selected_provider" => null,
    "status" => "pending",
    "url" =>
        "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation" => true,
    "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam connect-webviews create --custom_redirect_url "https://example.com/redirect" --custom_redirect_failure_url "https://example.com/failure-redirect" --customer_id "8d7a8cc0-2e69-4bc6-85c8-545036fdd5c0" --accepted_providers ["kwikset","schlage","smartthings","yale"] --provider_category "stable" --custom_metadata {"id":"internalId1"} --automatically_manage_new_devices true --wait_for_device_creation true --accepted_capabilities ["lock","thermostat"]
```

#### Output:

```seam_cli
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% endtabs %}
