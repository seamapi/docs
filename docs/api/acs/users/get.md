# Get an ACS User

```
POST /acs/users/get ⇒ { acs_user }
```

Returns a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
    {% tab title="JavaScript" %}
  ### Request
  ```javascript
  await seam.acs.users.get({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
});
  ```

  ### Response
  ```javascript
  {
  "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_access_group_ids": ["123e4567-e89b-12d3-a456-426614174000"],
  "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100"
}
  ```
    {% endtab %}
    {% tab title="Python" %}
  ### Request
  ```python
  seam.acs.users.get(acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")
  ```

  ### Response
  ```python
  AcsUser(
    acs_user_id="123e4567-e89b-12d3-a456-426614174000",
    acs_system_id="123e4567-e89b-12d3-a456-426614174000",
    acs_access_group_ids=["123e4567-e89b-12d3-a456-426614174000"],
    workspace_id="123e4567-e89b-12d3-a456-426614174000",
    created_at="2024-04-05T07:57:05.323Z",
    display_name="Jane Doe",
    full_name="Jane Doe",
    email_address="jane@example.com",
    phone_number="+15555550100",
)
  ```
    {% endtab %}
    {% tab title="Ruby" %}
  ### Request
  ```ruby
  seam.acs.users.get(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33")
  ```

  ### Response
  ```ruby
  {"acs_user_id" => "123e4567-e89b-12d3-a456-426614174000", "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000", "acs_access_group_ids" => ["123e4567-e89b-12d3-a456-426614174000"], "workspace_id" => "123e4567-e89b-12d3-a456-426614174000", "created_at" => "2024-04-05T07:57:05.323Z", "display_name" => "Jane Doe", "full_name" => "Jane Doe", "email_address" => "jane@example.com", "phone_number" => "+15555550100"}
  ```
    {% endtab %}
    {% tab title="PHP" %}
  ### Request
  ```php
  <?php
$seam->acs->users->get(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33");
  ```

  ### Response
  ```php
  ["acs_user_id" => "123e4567-e89b-12d3-a456-426614174000","acs_system_id" => "123e4567-e89b-12d3-a456-426614174000","acs_access_group_ids" => ["123e4567-e89b-12d3-a456-426614174000"],"workspace_id" => "123e4567-e89b-12d3-a456-426614174000","created_at" => "2024-04-05T07:57:05.323Z","display_name" => "Jane Doe","full_name" => "Jane Doe","email_address" => "jane@example.com","phone_number" => "+15555550100"]
  ```
    {% endtab %}
    {% tab title="Seam CLI" %}
  ### Request
  ```seam_cli
  seam acs users get --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
  ```

  ### Response
  ```seam_cli
  {
  "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_access_group_ids": ["123e4567-e89b-12d3-a456-426614174000"],
  "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100"
}
  ```
    {% endtab %}
{% endtabs %}

## Request Parameters

### `acs_user_id`

Type: `string`\
Required: Yes

ID of the desired `acs_user`.

---

## Return Type

[acs_user](./README.md)
