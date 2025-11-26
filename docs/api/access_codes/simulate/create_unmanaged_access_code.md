# Simulate Creating an Unmanaged Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates the creation of an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces).


{% tabs %}
{% tab title="JavaScript" %}

Simulates the creation of an unmanaged access code in a sandbox workspace.

#### Code:

```javascript
await seam.accessCodes.simulate.createUnmanagedAccessCode({
  device_id: "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963",
  name: "My Access Code",
  code: "1234",
});
```

#### Output:

```javascript
{
  "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946283Z",
  "device_id": "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963",
  "ends_at": "2025-06-23T16:54:17.946261Z",
  "errors": [],
  "is_managed": false,
  "name": "My Access Code",
  "starts_at": "2025-06-21T16:54:17.946261Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% tab title="cURL" %}

Simulates the creation of an unmanaged access code in a sandbox workspace.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/simulate/create_unmanaged_access_code" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963",
  "name": "My Access Code",
  "code": "1234"
}
EOF
```

#### Output:

```curl
{
  "access_code": {
    "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
    "code": "1234",
    "created_at": "2025-06-16T16:54:17.946283Z",
    "device_id": "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963",
    "ends_at": "2025-06-23T16:54:17.946261Z",
    "errors": [],
    "is_managed": false,
    "name": "My Access Code",
    "starts_at": "2025-06-21T16:54:17.946261Z",
    "status": "set",
    "type": "time_bound",
    "warnings": [],
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Simulates the creation of an unmanaged access code in a sandbox workspace.

#### Code:

```python
seam.access_codes.simulate.create_unmanaged_access_code(device_id="5db6ef75-2e0d-4491-bf7e-c3eb01d5c963", name="My Access Code", code="1234")
```

#### Output:

```python
UnmanagedAccessCode(access_code_id="88fa1812-bef8-4108-9fb4-4855376c3edf", code="1234", created_at="2025-06-16T16:54:17.946283Z", device_id="5db6ef75-2e0d-4491-bf7e-c3eb01d5c963", ends_at="2025-06-23T16:54:17.946261Z", errors=[], is_managed=false, name="My Access Code", starts_at="2025-06-21T16:54:17.946261Z", status="set", type="time_bound", warnings=[], workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7")
```
{% endtab %}

{% tab title="Ruby" %}

Simulates the creation of an unmanaged access code in a sandbox workspace.

#### Code:

```ruby
seam.access_codes.simulate.create_unmanaged_access_code(device_id: "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963", name: "My Access Code", code: "1234")
```

#### Output:

```ruby
{"access_code_id" => "88fa1812-bef8-4108-9fb4-4855376c3edf","code" => "1234","created_at" => "2025-06-16T16:54:17.946283Z","device_id" => "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963","ends_at" => "2025-06-23T16:54:17.946261Z","errors" => [],"is_managed" => false,"name" => "My Access Code","starts_at" => "2025-06-21T16:54:17.946261Z","status" => "set","type" => "time_bound","warnings" => [],"workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}
```
{% endtab %}

{% tab title="PHP" %}

Simulates the creation of an unmanaged access code in a sandbox workspace.

#### Code:

```php
$seam->access_codes->simulate->create_unmanaged_access_code(
    device_id: "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963",
    name: "My Access Code",
    code: "1234",
);
```

#### Output:

```php
[
    "access_code_id" => "88fa1812-bef8-4108-9fb4-4855376c3edf",
    "code" => "1234",
    "created_at" => "2025-06-16T16:54:17.946283Z",
    "device_id" => "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963",
    "ends_at" => "2025-06-23T16:54:17.946261Z",
    "errors" => [],
    "is_managed" => false,
    "name" => "My Access Code",
    "starts_at" => "2025-06-21T16:54:17.946261Z",
    "status" => "set",
    "type" => "time_bound",
    "warnings" => [],
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates the creation of an unmanaged access code in a sandbox workspace.

#### Code:

```seam_cli
seam access-codes simulate create-unmanaged-access-code --device_id "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963" --name "My Access Code" --code "1234"
```

#### Output:

```seam_cli
{
  "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946283Z",
  "device_id": "5db6ef75-2e0d-4491-bf7e-c3eb01d5c963",
  "ends_at": "2025-06-23T16:54:17.946261Z",
  "errors": [],
  "is_managed": false,
  "name": "My Access Code",
  "starts_at": "2025-06-21T16:54:17.946261Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
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

**`code`** *String* (Required)

Code of the simulated unmanaged access code.

---

**`device_id`** *String* (Required)

ID of the device for which you want to simulate the creation of an unmanaged access code.

---

**`name`** *String* (Required)

Name of the simulated unmanaged access code.

---


## Response

{% hint style="success" %}
Returns:
[unmanaged\_access\_code](./../unmanaged)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946283Z",
  "device_id": "b3439f17-7273-46f3-9e20-9a283d9cb5b4",
  "ends_at": "2025-06-23T16:54:17.946261Z",
  "errors": [],
  "is_managed": false,
  "name": "My Unmanaged Access Code",
  "starts_at": "2025-06-21T16:54:17.946261Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% endtabs %}
