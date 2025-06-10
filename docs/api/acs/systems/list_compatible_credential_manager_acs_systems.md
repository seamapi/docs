# List Compatible Credential Manager ACS Systems

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all credential manager systems that are compatible with a specified [access system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the access system for which you want to retrieve all compatible credential manager systems by including the corresponding `acs_system_id` in the request body.

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/systems/list_compatible_credential_manager_acs_systems ⇒ { acs_systems: [acs_system, …] }
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

**`acs_system_id`** *String* (Required)

ID of the access system for which you want to retrieve all compatible credential manager systems.

---


## Response

Array of [acs\_systems](./)


---

## Examples

### List compatible credential manager ACS systems

Specify the `acs_system_id` for which you want to retrieve all compatible credential manager ACS systems.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.systems.listCompatibleCredentialManagerAcsSystems({
  acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
});
```

#### Output

```javascript
[{ "acs_system_id": "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4" }]
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/systems/list_compatible_credential_manager_acs_systems" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
}
EOF
```

#### Output

```curl
{ "acs_systems": [{ "acs_system_id": "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4" }] }
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.acs.systems.list_compatible_credential_manager_acs_systems(
    acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33"
)
```

#### Output

```python
[AcsSystem(acs_system_id="aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4")]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.systems.list_compatible_credential_manager_acs_systems(
  acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
)
```

#### Output

```ruby
[{ "acs_system_id" => "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4" }]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->systems->list_compatible_credential_manager_acs_systems(
    acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
);
```

#### Output

```php
<?php
[["acs_system_id" => "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4"]];
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"
import systems "github.com/seamapi/go/systems"

func main() {
	client.Acs.Systems.ListCompatibleCredentialManagerAcsSystems(
		context.Background(),
		systems.SystemsListCompatibleCredentialManagerAcsSystemsRequest{
			AcsSystemId: api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
		},
	)
}
```

#### Output

```go
[]api.AcsSystem{api.AcsSystem{AcsSystemId: "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4"}}
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs systems list-compatible-credential-manager-acs-systems --acs_system_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
```

#### Output

```seam_cli
[{ "acs_system_id": "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4" }]
```
{% endtab %}

{% endtabs %}


