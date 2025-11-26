# Get an Entrance

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [access system entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified access system entrance.

#### Code:

```javascript
await seam.acs.entrances.get({
  acs_entrance_id: "c931c953-4a5b-4f66-9189-500d39959ad1",
});
```

#### Output:

```javascript
{
  "acs_entrance_id": "c931c953-4a5b-4f66-9189-500d39959ad1",
  "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
  "created_at": "2025-06-15T16:54:17.946495Z",
  "display_name": "Main Entrance",
  "errors": [],
  "visionline_metadata": {
    "door_category": "guest",
    "door_name": "Main Entrance",
    "profiles": [
      {
        "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "visionline_door_profile_type": "BLE"
      }
    ]
  }
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified access system entrance.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_entrance_id": "c931c953-4a5b-4f66-9189-500d39959ad1"
}
EOF
```

#### Output:

```curl
{
  "acs_entrance": {
    "acs_entrance_id": "c931c953-4a5b-4f66-9189-500d39959ad1",
    "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
    "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
    "created_at": "2025-06-15T16:54:17.946495Z",
    "display_name": "Main Entrance",
    "errors": [],
    "visionline_metadata": {
      "door_category": "guest",
      "door_name": "Main Entrance",
      "profiles": [
        {
          "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
          "visionline_door_profile_type": "BLE"
        }
      ]
    }
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified access system entrance.

#### Code:

```python
seam.acs.entrances.get(acs_entrance_id="c931c953-4a5b-4f66-9189-500d39959ad1")
```

#### Output:

```python
AcsEntrance(acs_entrance_id="c931c953-4a5b-4f66-9189-500d39959ad1", acs_system_id="6a74a969-94ea-4383-b5cf-5e7da8c113d1", connected_account_id="1b9a3e0d-443f-4063-b619-4ca7e2a97751", created_at="2025-06-15T16:54:17.946495Z", display_name="Main Entrance", errors=[], visionline_metadata={"door_category":"guest","door_name":"Main Entrance","profiles":[{"visionline_door_profile_id":"7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","visionline_door_profile_type":"BLE"}]})
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified access system entrance.

#### Code:

```ruby
seam.acs.entrances.get(acs_entrance_id: "c931c953-4a5b-4f66-9189-500d39959ad1")
```

#### Output:

```ruby
{"acs_entrance_id" => "c931c953-4a5b-4f66-9189-500d39959ad1","acs_system_id" => "6a74a969-94ea-4383-b5cf-5e7da8c113d1","connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97751","created_at" => "2025-06-15T16:54:17.946495Z","display_name" => "Main Entrance","errors" => [],"visionline_metadata" => {"door_category":"guest","door_name":"Main Entrance","profiles":[{"visionline_door_profile_id":"7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","visionline_door_profile_type":"BLE"}]}}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified access system entrance.

#### Code:

```php
$seam->acs->entrances->get(
    acs_entrance_id: "c931c953-4a5b-4f66-9189-500d39959ad1",
);
```

#### Output:

```php
[
    "acs_entrance_id" => "c931c953-4a5b-4f66-9189-500d39959ad1",
    "acs_system_id" => "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
    "connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
    "created_at" => "2025-06-15T16:54:17.946495Z",
    "display_name" => "Main Entrance",
    "errors" => [],
    "visionline_metadata" => [
        "door_category" => "guest",
        "door_name" => "Main Entrance",
        "profiles" => [
            [
                "visionline_door_profile_id" =>
                    "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
                "visionline_door_profile_type" => "BLE",
            ],
        ],
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified access system entrance.

#### Code:

```seam_cli
seam acs entrances get --acs_entrance_id "c931c953-4a5b-4f66-9189-500d39959ad1"
```

#### Output:

```seam_cli
{
  "acs_entrance_id": "c931c953-4a5b-4f66-9189-500d39959ad1",
  "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
  "created_at": "2025-06-15T16:54:17.946495Z",
  "display_name": "Main Entrance",
  "errors": [],
  "visionline_metadata": {
    "door_category": "guest",
    "door_name": "Main Entrance",
    "profiles": [
      {
        "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "visionline_door_profile_type": "BLE"
      }
    ]
  }
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_id`** *String* (Required)

ID of the entrance that you want to get.

---


## Response

{% hint style="success" %}
Returns:
[acs\_entrance](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
  "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
  "created_at": "2025-06-15T16:54:17.946495Z",
  "display_name": "Main Entrance",
  "errors": [],
  "space_ids": [],
  "visionline_metadata": {
    "door_category": "guest",
    "door_name": "Main Entrance",
    "profiles": [
      {
        "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "visionline_door_profile_type": "BLE"
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}
