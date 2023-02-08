# Get started with NoiseAware Sensors

This guide is for Seam Connect customers who are interested in enabling their users (airbnb hosts, homeowners etc.) to grant access to their NoiseAware devices. By using Seam Connect, customers can see all of a host's devices, see noise events, and add, change or remove noise thresholds.

### Getting Started

All requests to the Seam API should have the following header:

```url
Authorization: Bearer seam_2kBBb3xo_rCUWph7G1BswPsRU3LKaBY3Y
```

Where `seam_2kBBb3xo_rCUWph7G1BswPsRU3LKaBY3Y` is your API key. If you don't have an API contact Seam staff.



To simplify the examples below, we'll use the following modules and utility variables:

{% tabs %}
{% tab title="Python" %}
```python
import requests

api_key = "YOUR_API_KEY"
auth_headers = { "Authorization": f"Bearer {api_key}" }
```
{% endtab %}

{% tab title="Javascript" %}

{% endtab %}
{% endtabs %}

### Overview

To get access to a host's devices (called "sensors" or "activity zones" by NoiseAware), the Host must be prompted to authorize Seam Connect to connect with their NoiseAware account. You can do this by showing them a URL to a custom webview created for your organization. After the user has authorized the access, which usually involves logging into NoiseAware, the Seam API will pass data to your application and the webview can be closed. You can now query the Seam API for events and devices.

### Step by Step

#### 1. Ask Seam Connect for a webview URL

```python
webview = requests.post(
  "https://connect.getseam.com/v1/connect_webviews/create",
  json={ "accepted_providers": ["noiseaware"] },
  headers=auth_headers
).json()["connect_webview"]

webview_id = webview["connect_webview_id"]
webview_url = webview["url"]
```

> You can also provide `custom_redirect_url` to have the login portal redirect to a url of your choosing

#### 2. Display webview URL to user

```python
# In a web application, you could show this in an iframe
# For Android and IOS, use a webview dialog that you can close automatically
print(f"Navigate to this URL: {webview_url}")
```

#### 3. Wait for user to authorize access

Poll `/connect_webviews/get` until the `status` is `authorized`.

> Note: We are introducing a webhook for this soon! The polling API will always remain available.

```python
noiseaware_account_id = None
while True:
  latest_webview = requests.get(
      f"https://connect.getseam.com/v1/connect_webviews/get",
      params={"connect_webview_id": webview_id},
      headers=auth_headers,
  ).json()["connect_webview"]

  if latest_webview["status"] == "authorized":
    noiseaware_account_id = latest_webview["third_party_account_id"]
    break

  time.sleep(0.25)
```

#### 4. View Devices Associated with Connected Account

```python
devices = requests.get(
  f"https://connect.getseam.com/v1/devices/list",
  params={ "third_party_account_id": noiseaware_account_id },
  headers=auth_headers
).json()["devices"]

print(devices)
# [
#   {
#     device_id: 'fb74aee8-a745-485e-8b55-1ba87a119bcd',
#     device_type: 'noiseaware_activity_zone',
#     workspace_id: 'a553c010-e2ed-44b0-ab26-7b0f7081089c',
#     third_party_account_id: "6e793b0f-eab1-4c18-a43a-8001ea084319",
#     location: {'area': 1100, 'city': 'San Francisco', 'state': 'CA', 'country': 'USA', 'street1': '123 Amy Lane', 'street2': ''},
#     properties: {
#       "online": True,
#       user_image: "https://s3.amazonaws.com/123456789/customer_image.png",
#       noise_thresholds: [{
#         noise_threshold_id: "1407b5bf-3c35-4ddd-9c14-cd7f193cbd4a",
#         time_in_effect: { readable: "3pm to 6pm daily" },
#         level: { value: 70, unit: "NoiseAware Noise Risk Score" }
#       }],
#       "noiseaware_metadata": {
#         "device_name": "Backyard Sensor",
#         "property_id": "42840",
#         "property_name": "My House"
#       }
#     },
#     created_at: '2021-09-22T00:33:38.703Z'
#   }
# ]
device_id = devices[0]["device_id"]
```

#### 5. Poll for Device Events

```python
device_events = requests.post(
    f"https://connect.getseam.com/v1/devices/events/list",
    json={"device_id": device_id, "since": "2021-09-22T18:23:07.018Z"},
    headers=auth_headers,
).json()["device_events"]
pyth
# [
#   {
#     "device_event_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "type": "NOISE_DETECTED",
#     "device_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "threshold_name": "Party Noise Limit",
#     "created_at": "2021-09-22T18:23:07.018Z",
#   },
#   {
#     "device_event_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "type": "NOISE_QUIETED",
#     "threshold_name": "Party Noise Limit",
#     "device_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "created_at": "2021-09-22T18:23:07.018Z",
#   },
#   {
#     "device_event_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "type": "DEVICE_ONLINE",
#     "device_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "created_at": "2021-09-22T18:23:07.018Z",
#   },
#   {
#     "device_event_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "type": "DEVICE_ONLINE",
#     "device_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "created_at": "2021-09-22T18:23:07.018Z",
#   },
#   {
#     "device_event_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "type": "DEVICE_CREATED",
#     "device_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "device_type": "noiseaware_activity_zone",
#     "created_at": "2021-09-22T18:23:07.018Z",
#   },
#   {
#     "device_event_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "type": "DEVICE_REMOVED",
#     "device_id": "b9366ab9-8ee4-4d63-9214-d424b5d53342",
#     "created_at": "2021-09-22T18:23:07.018Z",
#   }
# ]
```

The following `device_events` are available:

| Event Type      | Description                                       | Payload                         |
| --------------- | ------------------------------------------------- | ------------------------------- |
| NOISE\_DETECTED | Noise has exceeded a noise threshold              | `{ threshold_name, device_id }` |
| NOISE\_QUIETED  | Noise has dropped below the noise threshold       | `{ threshold_name, device_id }` |
| DEVICE\_ONLINE  | Device has come online                            | `{ device_id }`                 |
| DEVICE\_OFFLINE | Device has gone offline (may have been unplugged) | `{ device_id }`                 |

These `events` can also be listened to using the webhook below.

| Event Type      | Description    |                 |
| --------------- | -------------- | --------------- |
| DEVICE\_CREATED | Device created | `{ device_id }` |
| DEVICE\_REMOVED | Device removed | `{ device_id }` |

#### 6. Add or Remove Noise Threshold

> NOT YET SUPPORTED

```python
res = requests.post(
  f"https://connect.getseam.com/devices/noise_detection/noise_thresholds/create",
  json={
    "name": "Party Limit",
    "time_in_effect": { "start_time": "21:00", "end_time": "23:00", "daily": True, "timezone": "local" },
    "level": { "value": 70, "unit": "Noiseaware Noise Risk Score" }
  },
  headers=auth_headers
).json()

assert(res["ok"] == True)

res = requests.post(
  f"https://connect.getseam.com/devices/noise_detection/noise_threshold/remove",
  json={
    "device_id": device_id,
    "noise_threshold_id": "1407b5bf-3c35-4ddd-9c14-cd7f193cbd4a"
  },
  headers=auth_headers
).json()

assert(res["ok"] == True)
```

#### 7. Register an events webhook

> NOT YET SUPPORTED

```python
res = requests.post(
  f"https://connect.getseam.com/event_webhooks/create",
  json={
    "request_url": "https://mywebsite.com/my-webhook-handler",
    "type": "device_events",
    "device_type": "noiseaware_activity_zone",
    # "events": ["NOISE_DETECTED", "NOISE_QUIETED"] Optional, defaults to all events
    # device_id: Optional, if not specified, all devices will receive webhook
  }
)
```

#### Caveats

Seam is actively working with Noiseaware to address the following issues:

* Noiseaware product owner/end user is unable to remove Seam integration from their Noiseaware dashboard. Integration appears under wrong partner name (always FutureStay).
* A user who has already paired their Noiseaware account with Seam cannot re-pair through another authorization webview (authorization webview will fail). This can make testing difficult.
