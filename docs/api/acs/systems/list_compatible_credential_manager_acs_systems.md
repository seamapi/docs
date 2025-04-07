# List Compatible Credential Manager ACS Systems

Returns a list of all credential manager ACS systems that are compatible with a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the ACS system for which you want to retrieve all compatible credential manager ACS systems by including the corresponding `acs_system_id` in the request body.

{% hint style="success" %}
```
POST /acs/systems/list_compatible_credential_manager_acs_systems ⇒ { acs_systems: [acs_system, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`acs_system_id`** *String* (Required)

ID of the ACS system for which you want to retrieve all compatible credential manager ACS systems.

---


## Return Type

Array of [acs\_systems](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_system
}
```
{% endtab %}
{% endtabs %}

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

{% endtabs %}


