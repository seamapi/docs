---
description: >-
  Learn how to retrieve the set of devices or ACS that your app user connected
  to Seam through a specific Connect Webview.
---

# Retrieving Devices or Access Control Systems Connected Through a Connect Webview

When your app user completes a [Connect Webview](../../core-concepts/connect-webviews/) authorization flow successfully, the resulting [`connected_account.connected` event](../../api-clients/events/#event-types) includes a `connected_account_id`. Also, once the connection is successful, the [`connect_webview` object](../../api-clients/connect\_webviews/) includes the `connected_account_id`.

The first step in controlling connected devices or a connected ACS is to retrieve the newly-connected set of devices or ACS.

***

## Retrieve Connected Devices

Use this `connected_account_id` in a [List Devices](../../api-clients/devices/list.md) command to retrieve the devices that your user has just connected to Seam.

{% hint style="info" %}
If you set `wait_for_device_creation` to `false` when [creating the Connect Webview](../../core-concepts/connect-webviews/#id-1.-create-a-connect-webview), you should wait for the [`connected_account.completed_first_sync` event](../../api-clients/events/#event-types) before retrieving the user's devices. This event indicates that Seam has finished the first sync of the connected account and the devices are now available.
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Retrieve all devices for the connected_account_id.
connected_devices = seam.devices.list(
  connected_account_id="11111111-1111-1111-1111-222222222222"
)
```

**Output:**

```
[
  Device(
    connected_account_id='11111111-1111-1111-1111-222222222222',
    device_id='11111111-1111-1111-1111-444444444444',
    display_name='Front Door Lock',
    is_managed=True,
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Retrieve all devices for the connected_account_id.
connected_devices=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/list' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
    "connected_account_id": "11111111-1111-1111-1111-222222222222"
  }')
```

**Output:**

```json
{
  "devices": [
    {
      "connected_account_id": "11111111-1111-1111-1111-222222222222",
      "device_id": "11111111-1111-1111-1111-444444444444",
      "display_name": "Front Door Lock",
      "is_managed": true,
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

<pre class="language-javascript"><code class="lang-javascript"><strong>// Retrieve all devices for the connected_account_id.
</strong>const connectedDevices = await seam.devices.list({
  connected_account_id: "11111111-1111-1111-1111-222222222222"
});
</code></pre>

**Output:**

```json
[
  {
    connected_account_id: '11111111-1111-1111-1111-222222222222',
    device_id: '11111111-1111-1111-1111-444444444444',
    display_name: 'Front Door Lock',
    is_managed: true,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Retrieve all devices for the connected_account_id.
connected_devices = seam.devices.list(
  connected_account_id: "11111111-1111-1111-1111-222222222222"
)
```

**Output:**

```json
[
  <
    Seam::Device:0x00438
      connected_account_id="11111111-1111-1111-1111-222222222222"
      device_id="11111111-1111-1111-1111-444444444444"
      display_name='Front Door Lock'
      is_managed=true
      ...
  >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Retrieve all devices for the connected_account_id.
$connected_devices = $seam->devices->list(
  connected_account_id: "11111111-1111-1111-1111-222222222222"
);
```

**Output:**

```json
[
  {
    "connected_account_id": "11111111-1111-1111-1111-222222222222",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "display_name": "Front Door Lock",
    "is_managed": true,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Retrieve all devices for the connectedAccountId.
var connectedDevices = seam.Devices.List(
  connectedAccountId: "11111111-1111-1111-1111-222222222222"
);
```

**Output:**

```json
{
  "connected_account_id": "11111111-1111-1111-1111-222222222222",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "display_name": "Front Door Lock",
  "is_managed": true,
  ...
}
...
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
// Retrieve all devices for the connectedAccountId.
var connectedDevices = seam.devices().list(DevicesListRequest.builder()
  .connectedAccountId("11111111-1111-1111-1111-222222222222")
  .build());
```

**Output:**

```json
[
  {
    "connected_account_id": "11111111-1111-1111-1111-222222222222",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "display_name": "Front Door Lock",
    "is_managed": true,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
// Retrieve all devices for the ConnectedAccountId.
connectedDevices, err := client.Devices.List(
  context.Background(), &api.DevicesListRequest{
    ConnectedAccountId: api.String("11111111-1111-1111-1111-222222222222"),
  },
)

if err != nil {
  return err
}

return nil
```

**Output:**

```json
[
  {
    "connected_account_id": "11111111-1111-1111-1111-222222222222",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "display_name": "Front Door Lock",
    "is_managed": true,
    ...
  }
  ...
]
```
{% endtab %}
{% endtabs %}

***

## Retrieve a Connected Access Control System

Use this `connected_account_id` in a [List ACS Systems](../../api/acs/systems/list.md) command to retrieve the ACS that your user has just connected to Seam.

{% hint style="info" %}
If you set `wait_for_device_creation` to `false` when [creating the Connect Webview](../../core-concepts/connect-webviews/#id-1.-create-a-connect-webview), you should wait for the [`connected_account.completed_first_sync` event](../../api-clients/events/#event-types) before retrieving the user's ACS. This event indicates that Seam has finished the first sync of the connected account and the `acs_system` is now available.
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Retrieve all acs_systems for the connected_account_id.
connected_acs_systems = seam.acs.list(
  connected_account_id="11111111-1111-1111-2222-111111111111"
)
```

**Output:**

```
[
  AcsSystem(
    connected_account_ids=[
      '11111111-1111-1111-2222-111111111111'
    ],
    acs_system_id='11111111-1111-1111-1111-111111111111',
    name='My ACS',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Retrieve all acs_systems for the connected_account_id.
connected_acs_systems=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/acs/systems/list' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
    "connected_account_id": "11111111-1111-1111-2222-111111111111"
  }')
```

**Output:**

```json
{
  "acs_systems": [
    {
      "connected_account_ids": [
        "11111111-1111-1111-2222-111111111111"
      ],
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "name": "My ACS",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

<pre class="language-javascript"><code class="lang-javascript"><strong>// Retrieve all acs_systems for the connected_account_id.
</strong>const connectedAcsSystems = await seam.acs.systems.list({
  connected_account_id: "11111111-1111-1111-2222-111111111111"
});
</code></pre>

**Output:**

```json
[
  {
    connected_account_ids: [
      '11111111-1111-1111-2222-111111111111'
    ],
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    name: 'My ACS',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Retrieve all acs_systems for the connected_account_id.
$connected_acs_systems = $seam->acs->systems->list(
  connected_account_id: "11111111-1111-1111-2222-111111111111"
);
```

**Output:**

```json
[
  {
    "connected_account_ids": [
      "11111111-1111-1111-2222-111111111111"
    ],
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "name": "My ACS",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Retrieve all acs_systems for the connectedAccountId.
var connectedAcsSystems = seam.SystemsAcs.List(
  connectedAccountId: "11111111-1111-1111-2222-111111111111"
);
```

**Output:**

```json
{
  "connected_account_ids": [
    "11111111-1111-1111-2222-111111111111"
  ],
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "name": "My ACS",
  ...
}
...
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
// Retrieve all acs_systems for the ConnectedAccountId.
connected_acs_systems, err := client.Acs.Systems.List(
  context.Background(), &acs.SystemsListRequest{
    ConnectedAccountId: api.String("11111111-1111-1111-2222-111111111111"),
  },
)

if err != nil {
  return err
}

return nil
```

**Output:**

```json
[
  {
    "connected_account_ids": [
      "11111111-1111-1111-2222-111111111111"
    ],
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "name": "My ACS",
    ...
  },
  ...
]
```
{% endtab %}
{% endtabs %}
