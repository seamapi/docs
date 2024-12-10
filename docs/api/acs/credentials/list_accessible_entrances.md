# List Accessible Entrances

```
POST /acs/credentials/list_accessible_entrances ⇒ { acs_entrances: [acs_entrance, …] }
```

Returns a list of all [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a [credential](https://docs.seam.co/latest/api/acs/credentials) grants access.

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.credentials.listAccessibleEntrances({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
});
```

#### Response

```javascript
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "visionline_metadata": {
      "profiles": [
        {
          "visionline_door_profile_id": "Guest Door",
          "visionline_door_profile_type": "BLE"
        }
      ],
      "door_name": "Guest Lock 2",
      "door_category": "guest"
    },
    "latch_metadata": null,
    "display_name": "Guest Lock 2",
    "created_at": "2024-03-26T14:31:18.979Z"
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.acs.credentials.list_accessible_entrances(
    acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

#### Response

```python
[
    AcsEntrance(
        acs_entrance_id="55555555-5555-5555-5555-555555555555",
        acs_system_id="11111111-1111-1111-1111-111111111111",
        workspace_id="00000000-0000-0000-0000-000000000000",
        visionline_metadata={
            "profiles": [
                {
                    "visionline_door_profile_id": "Guest Door",
                    "visionline_door_profile_type": "BLE",
                }
            ],
            "door_name": "Guest Lock 2",
            "door_category": "guest",
        },
        latch_metadata=None,
        display_name="Guest Lock 2",
        created_at="2024-03-26T14:31:18.979Z",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.credentials.list_accessible_entrances(acs_credential_id: "66666666-6666-6666-6666-666666666666")
```

#### Response

```ruby
[{"acs_entrance_id" => "55555555-5555-5555-5555-555555555555", "acs_system_id" => "11111111-1111-1111-1111-111111111111", "workspace_id" => "00000000-0000-0000-0000-000000000000", "visionline_metadata" => {profiles: [{visionline_door_profile_id: "Guest Door", visionline_door_profile_type: "BLE"}], door_name: "Guest Lock 2", door_category: "guest"}, "latch_metadata" => nil, "display_name" => "Guest Lock 2", "created_at" => "2024-03-26T14:31:18.979Z"}]
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->credentials->list_accessible_entrances(
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

#### Response

```php
<?php
[
    [
        "acs_entrance_id" => "55555555-5555-5555-5555-555555555555",
        "acs_system_id" => "11111111-1111-1111-1111-111111111111",
        "workspace_id" => "00000000-0000-0000-0000-000000000000",
        "visionline_metadata" => [
            "profiles" => [
                [
                    "visionline_door_profile_id" => "Guest Door",
                    "visionline_door_profile_type" => "BLE",
                ],
            ],
            "door_name" => "Guest Lock 2",
            "door_category" => "guest",
        ],
        "latch_metadata" => null,
        "display_name" => "Guest Lock 2",
        "created_at" => "2024-03-26T14:31:18.979Z",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs credentials list-accessible-entrances --acs_credential_id "66666666-6666-6666-6666-666666666666"
```

#### Response

```seam_cli
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "visionline_metadata": {
      "profiles": [
        {
          "visionline_door_profile_id": "Guest Door",
          "visionline_door_profile_type": "BLE"
        }
      ],
      "door_name": "Guest Lock 2",
      "door_category": "guest"
    },
    "latch_metadata": null,
    "display_name": "Guest Lock 2",
    "created_at": "2024-03-26T14:31:18.979Z"
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import credentials "github.com/seamapi/go/credentials"

func main() {
	client.Acs.Credentials.ListAccessibleEntrances(
		context.Background(),
		credentials.CredentialsListAccessibleEntrancesRequest{
			AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
		},
	)
}
```

#### Response

```go
[]api.AcsEntrance{api.AcsEntrance{AcsEntranceId: "55555555-5555-5555-5555-555555555555", AcsSystemId: "11111111-1111-1111-1111-111111111111", WorkspaceId: "00000000-0000-0000-0000-000000000000", VisionlineMetadata: api.AcsEntranceVisionlineMetadata{Profiles: []AcsEntranceVisionlineMetadataProfiles{api.AcsEntranceVisionlineMetadataProfilesProfiles{VisionlineDoorProfileId: "Guest Door", VisionlineDoorProfileType: "BLE"}}, DoorName: "Guest Lock 2", DoorCategory: "guest"}, LatchMetadata: nil, DisplayName: "Guest Lock 2", CreatedAt: "2024-03-26T14:31:18.979Z"}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

<style>
.auth-methods-container {
    margin: 1.5rem 0;
}

.auth-methods-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.auth-method-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eaeaea;
    font-family: system-ui, -apple-system, sans-serif;
}

.auth-method-item:last-child {
    border-bottom: none;
}

.auth-method-item::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #6366f1;
    margin-right: 1rem;
    flex-shrink: 0;
}

.auth-method-item span {
    font-size: 1rem;
    color: #374151;
}
</style>

<div class="auth-methods-container">
    <ul class="auth-methods-list">
            <li class="auth-method-item">
                <span>API Key</span>
            </li>
            <li class="auth-method-item">
                <span>Personal Access Token</span>
            </li>
            <li class="auth-method-item">
                <span>Console Session Token</span>
            </li>
    </ul>
</div>
## Request Parameters

### `acs_credential_id`

Type: `string`
Required: Yes

ID of the credential for which you want to retrieve all entrances to which this credential grants access.

***

## Return Type

Array<[acs\_entrance](./)>
