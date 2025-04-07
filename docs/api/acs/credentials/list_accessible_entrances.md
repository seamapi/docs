# List Accessible Entrances

Returns a list of all [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a [credential](https://docs.seam.co/latest/api/acs/credentials) grants access.

{% hint style="success" %}
```
POST /acs/credentials/list_accessible_entrances ⇒ { acs_entrances: [acs_entrance, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`acs_credential_id`** *String* (Required)

ID of the credential for which you want to retrieve all entrances to which this credential grants access.

---


## Return Type

Array of [acs\_entrances](./)
acs_entrances

---

## Examples
  
### List accessible entrances

Specify the `acs_credential_id` for which you want to retrieve all entrances to which the credential grants access.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.credentials.listAccessibleEntrances({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
});
```

#### Output

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
#### Code

```python
seam.acs.credentials.list_accessible_entrances(
    acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

#### Output

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
#### Code

```ruby
seam.acs.credentials.list_accessible_entrances(
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
)
```

#### Output

```ruby
[
  {
    "acs_entrance_id" => "55555555-5555-5555-5555-555555555555",
    "acs_system_id" => "11111111-1111-1111-1111-111111111111",
    "workspace_id" => "00000000-0000-0000-0000-000000000000",
    "visionline_metadata" => {
      profiles: [{ visionline_door_profile_id: "Guest Door", visionline_door_profile_type: "BLE" }],
      door_name: "Guest Lock 2",
      door_category: "guest",
    },
    "latch_metadata" => nil,
    "display_name" => "Guest Lock 2",
    "created_at" => "2024-03-26T14:31:18.979Z",
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->credentials->list_accessible_entrances(
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

#### Output

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
#### Code

```seam_cli
seam acs credentials list-accessible-entrances --acs_credential_id "66666666-6666-6666-6666-666666666666"
```

#### Output

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
#### Code

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

#### Output

```go
[]api.AcsEntrance{api.AcsEntrance{AcsEntranceId: "55555555-5555-5555-5555-555555555555", AcsSystemId: "11111111-1111-1111-1111-111111111111", WorkspaceId: "00000000-0000-0000-0000-000000000000", VisionlineMetadata: api.AcsEntranceVisionlineMetadata{Profiles: []AcsEntranceVisionlineMetadataProfiles{api.AcsEntranceVisionlineMetadataProfilesProfiles{VisionlineDoorProfileId: "Guest Door", VisionlineDoorProfileType: "BLE"}}, DoorName: "Guest Lock 2", DoorCategory: "guest"}, LatchMetadata: nil, DisplayName: "Guest Lock 2", CreatedAt: "2024-03-26T14:31:18.979Z"}}
```
{% endtab %}

{% endtabs %}


