# List Accessible Entrances

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a [credential](https://docs.seam.co/latest/api/acs/credentials) grants access.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all entrances to which a credential grants access.

#### Code:

```javascript
await seam.acs.credentials.listAccessibleEntrances({
  acs_credential_id: "9407e456-b8ac-475a-8431-fee76cedda03",
});
```

#### Output:

```javascript
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
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
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all entrances to which a credential grants access.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/list_accessible_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_credential_id": "9407e456-b8ac-475a-8431-fee76cedda03"
}
EOF
```

#### Output:

```curl
{
  "acs_entrances": [
    {
      "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all entrances to which a credential grants access.

#### Code:

```python
seam.acs.credentials.list_accessible_entrances(acs_credential_id="9407e456-b8ac-475a-8431-fee76cedda03")
```

#### Output:

```python
[AcsEntrance(acs_entrance_id="f74e4879-5991-4e2f-a368-888983dcfbfc", acs_system_id="6a74a969-94ea-4383-b5cf-5e7da8c113d1", connected_account_id="1b9a3e0d-443f-4063-b619-4ca7e2a97751", created_at="2025-06-15T16:54:17.946495Z", display_name="Main Entrance", errors=[], visionline_metadata={"door_category":"guest","door_name":"Main Entrance","profiles":[{"visionline_door_profile_id":"7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","visionline_door_profile_type":"BLE"}]})]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all entrances to which a credential grants access.

#### Code:

```ruby
seam.acs.credentials.list_accessible_entrances(acs_credential_id: "9407e456-b8ac-475a-8431-fee76cedda03")
```

#### Output:

```ruby
[{"acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc","acs_system_id" => "6a74a969-94ea-4383-b5cf-5e7da8c113d1","connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97751","created_at" => "2025-06-15T16:54:17.946495Z","display_name" => "Main Entrance","errors" => [],"visionline_metadata" => {"door_category":"guest","door_name":"Main Entrance","profiles":[{"visionline_door_profile_id":"7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a","visionline_door_profile_type":"BLE"}]}}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all entrances to which a credential grants access.

#### Code:

```php
$seam->acs->credentials->list_accessible_entrances(
    acs_credential_id: "9407e456-b8ac-475a-8431-fee76cedda03",
);
```

#### Output:

```php
[
    [
        "acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all entrances to which a credential grants access.

#### Code:

```seam_cli
seam acs credentials list-accessible-entrances --acs_credential_id "9407e456-b8ac-475a-8431-fee76cedda03"
```

#### Output:

```seam_cli
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
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
]
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

**`acs_credential_id`** *String* (Required)

ID of the credential for which you want to retrieve all entrances to which the credential grants access.

---


## Response

{% hint style="success" %}
Returns:
Array of [acs\_entrances](./../entrances)**

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
