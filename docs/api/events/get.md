# Get an Event

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a specified event. This endpoint returns the same event that would be sent to a [webhook](https://docs.seam.co/latest/developer-tools/webhooks), but it enables you to retrieve an event that already took place.


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified event by ID.

#### Code:

```javascript
await seam.events.get({ event_id: "ed3adbb8-bbe1-4033-a35a-710d44322bd8" });
```

#### Output:

```javascript
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at": "2025-06-15T16:54:18.000000Z",
  "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type": "device.connected",
  "occurred_at": "2025-06-15T16:54:17.946329Z",
  "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified event by ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8"
}
EOF
```

#### Output:

```curl
{
  "event": {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified event by ID.

#### Code:

```python
seam.events.get(event_id="ed3adbb8-bbe1-4033-a35a-710d44322bd8")
```

#### Output:

```python
SeamEvent(
    connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    created_at="2025-06-15T16:54:18.000000Z",
    device_id="3febfdb2-de92-43c1-aba4-640ce8a55a22",
    event_description="The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    event_id="ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    event_type="device.connected",
    occurred_at="2025-06-15T16:54:17.946329Z",
    workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified event by ID.

#### Code:

```ruby
seam.events.get(event_id: "ed3adbb8-bbe1-4033-a35a-710d44322bd8")
```

#### Output:

```ruby
{
  "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at" => "2025-06-15T16:54:18.000000Z",
  "device_id" => "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description" =>
    "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id" => "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type" => "device.connected",
  "occurred_at" => "2025-06-15T16:54:17.946329Z",
  "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified event by ID.

#### Code:

```php
$seam->events->get(event_id: "ed3adbb8-bbe1-4033-a35a-710d44322bd8");
```

#### Output:

```php
[
    "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at" => "2025-06-15T16:54:18.000000Z",
    "device_id" => "3febfdb2-de92-43c1-aba4-640ce8a55a22",
    "event_description" =>
        "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id" => "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    "event_type" => "device.connected",
    "occurred_at" => "2025-06-15T16:54:17.946329Z",
    "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified event by ID.

#### Code:

```seam_cli
seam events get --event_id "ed3adbb8-bbe1-4033-a35a-710d44322bd8"
```

#### Output:

```seam_cli
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at": "2025-06-15T16:54:18.000000Z",
  "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type": "device.connected",
  "occurred_at": "2025-06-15T16:54:17.946329Z",
  "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
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

**`device_id`** *String*

Unique identifier for the device that triggered the event that you want to get.

---

**`event_id`** *String*

Unique identifier for the event that you want to get.

---

**`event_type`** *String*

Type of the event that you want to get.

---


## Response

{% hint style="success" %}
**Returns:**
[event](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at": "2025-06-15T16:54:18.000000Z",
  "device_id": "b3c4d5e6-f7a8-49bc-def1-23456789abcd",
  "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id": "6d7e8f9a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
  "event_type": "device.connected",
  "occurred_at": "2025-06-15T16:54:17.946329Z",
  "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### Get an event by event type

Returns a specified event, using the event type.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.events.get({ event_type: "device.connected" });
```

#### Output:

```javascript
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at": "2025-06-15T16:54:18.000000Z",
  "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type": "device.connected",
  "occurred_at": "2025-06-15T16:54:17.946329Z",
  "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "event_type": "device.connected"
}
EOF
```

#### Output:

```curl
{
  "event": {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.events.get(event_type="device.connected")
```

#### Output:

```python
SeamEvent(
    connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    created_at="2025-06-15T16:54:18.000000Z",
    device_id="3febfdb2-de92-43c1-aba4-640ce8a55a22",
    event_description="The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    event_id="ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    event_type="device.connected",
    occurred_at="2025-06-15T16:54:17.946329Z",
    workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.events.get(event_type: "device.connected")
```

#### Output:

```ruby
{
  "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at" => "2025-06-15T16:54:18.000000Z",
  "device_id" => "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description" =>
    "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id" => "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type" => "device.connected",
  "occurred_at" => "2025-06-15T16:54:17.946329Z",
  "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->events->get(event_type: "device.connected");
```

#### Output:

```php
[
    "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at" => "2025-06-15T16:54:18.000000Z",
    "device_id" => "3febfdb2-de92-43c1-aba4-640ce8a55a22",
    "event_description" =>
        "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id" => "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    "event_type" => "device.connected",
    "occurred_at" => "2025-06-15T16:54:17.946329Z",
    "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam events get --event_type "device.connected"
```

#### Output:

```seam_cli
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at": "2025-06-15T16:54:18.000000Z",
  "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type": "device.connected",
  "occurred_at": "2025-06-15T16:54:17.946329Z",
  "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
}
```
{% endtab %}

{% endtabs %}

---


### Get an event by device ID

Returns a specified event by device ID.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.events.get({ device_id: "3febfdb2-de92-43c1-aba4-640ce8a55a22" });
```

#### Output:

```javascript
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at": "2025-06-15T16:54:18.000000Z",
  "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type": "device.connected",
  "occurred_at": "2025-06-15T16:54:17.946329Z",
  "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/events/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22"
}
EOF
```

#### Output:

```curl
{
  "event": {
    "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at": "2025-06-15T16:54:18.000000Z",
    "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
    "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    "event_type": "device.connected",
    "occurred_at": "2025-06-15T16:54:17.946329Z",
    "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.events.get(device_id="3febfdb2-de92-43c1-aba4-640ce8a55a22")
```

#### Output:

```python
SeamEvent(
    connected_account_id="2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    created_at="2025-06-15T16:54:18.000000Z",
    device_id="3febfdb2-de92-43c1-aba4-640ce8a55a22",
    event_description="The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    event_id="ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    event_type="device.connected",
    occurred_at="2025-06-15T16:54:17.946329Z",
    workspace_id="9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.events.get(device_id: "3febfdb2-de92-43c1-aba4-640ce8a55a22")
```

#### Output:

```ruby
{
  "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at" => "2025-06-15T16:54:18.000000Z",
  "device_id" => "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description" =>
    "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id" => "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type" => "device.connected",
  "occurred_at" => "2025-06-15T16:54:17.946329Z",
  "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->events->get(device_id: "3febfdb2-de92-43c1-aba4-640ce8a55a22");
```

#### Output:

```php
[
    "connected_account_id" => "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
    "created_at" => "2025-06-15T16:54:18.000000Z",
    "device_id" => "3febfdb2-de92-43c1-aba4-640ce8a55a22",
    "event_description" =>
        "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
    "event_id" => "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
    "event_type" => "device.connected",
    "occurred_at" => "2025-06-15T16:54:17.946329Z",
    "workspace_id" => "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam events get --device_id "3febfdb2-de92-43c1-aba4-640ce8a55a22"
```

#### Output:

```seam_cli
{
  "connected_account_id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
  "created_at": "2025-06-15T16:54:18.000000Z",
  "device_id": "3febfdb2-de92-43c1-aba4-640ce8a55a22",
  "event_description": "The status of a device changed from offline to online. That is, the device.properties.online property changed from false to true. Note that some devices operate entirely in offline mode, so Seam never emits a device.connected event for these devices.",
  "event_id": "ed3adbb8-bbe1-4033-a35a-710d44322bd8",
  "event_type": "device.connected",
  "occurred_at": "2025-06-15T16:54:17.946329Z",
  "workspace_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d"
}
```
{% endtab %}

{% endtabs %}
