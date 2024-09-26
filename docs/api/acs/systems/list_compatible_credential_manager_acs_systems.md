# List Compatible Credential Manager ACS Systems

```
POST /acs/systems/list_compatible_credential_manager_acs_systems ⇒ { acs_systems: [acs_system, …] }
```

Returns a list of all credential manager ACS systems that are compatible with a specified 
[access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the ACS system for which you want to retrieve all compatible credential manager ACS 
systems by including the corresponding `acs_system_id` in the request body.

{% tabs %}
    {% tab title="JavaScript" %}
  ### Request
  ```javascript
  await seam.acs.systems.listCompatibleCredentialManagerAcsSystems({
  acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
});
  ```

  ### Response
  ```javascript
  [{ "acs_system_id": "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4" }]
  ```
    {% endtab %}
    {% tab title="Python" %}
  ### Request
  ```python
  seam.acs.systems.list_compatible_credential_manager_acs_systems(
    acs_system_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33"
)
  ```

  ### Response
  ```python
  [AcsSystem(acs_system_id="aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4")]
  ```
    {% endtab %}
    {% tab title="Ruby" %}
  ### Request
  ```ruby
  seam.acs.systems.list_compatible_credential_manager_acs_systems(acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33")
  ```

  ### Response
  ```ruby
  [{"acs_system_id" => "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4"}]
  ```
    {% endtab %}
    {% tab title="PHP" %}
  ### Request
  ```php
  <?php
$seam->acs->systems->list_compatible_credential_manager_acs_systems(
    acs_system_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
);
  ```

  ### Response
  ```php
  [["acs_system_id" => "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4"]]
  ```
    {% endtab %}
    {% tab title="Seam CLI" %}
  ### Request
  ```seam_cli
  seam acs systems list-compatible-credential-manager-acs-systems --acs_system_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
  ```

  ### Response
  ```seam_cli
  [{ "acs_system_id": "aczp0sgx-gl9f-nygd-r11e-7pc1zufn55z4" }]
  ```
    {% endtab %}
{% endtabs %}

## Request Parameters

### `acs_system_id`

Type: `string`\
Required: Yes

ID of the ACS system for which you want to retrieve all compatible credential manager ACS systems.

---

## Return Type

Array<[acs_system](./README.md)>
