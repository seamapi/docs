# List Workspaces

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of [workspaces](../../core-concepts/workspaces/README.md) associated with the authentication value.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of workspaces associated with the authentication value.

#### Code:

```javascript
await seam.workspaces.list();
```

#### Output:

```javascript
[
  {
    "company_name": "Acme",
    "connect_partner_name": "Acme",
    "connect_webview_customization": {
      "inviter_logo_url": "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
      "logo_shape": "circle",
      "primary_button_color": "#232426",
      "primary_button_text_color": "#FFFDE7",
      "success_message": "Your account has been successfully connected to Acme!"
    },
    "is_sandbox": true,
    "is_suspended": false,
    "is_publishable_key_auth_enabled": true,
    "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
    "name": "My Sandbox Workspace",
    "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of workspaces associated with the authentication value.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/workspaces/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output:

```curl
{
  "workspaces": [
    {
      "company_name": "Acme",
      "connect_partner_name": "Acme",
      "connect_webview_customization": {
        "inviter_logo_url": "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
        "logo_shape": "circle",
        "primary_button_color": "#232426",
        "primary_button_text_color": "#FFFDE7",
        "success_message": "Your account has been successfully connected to Acme!"
      },
      "is_sandbox": true,
      "is_suspended": false,
      "is_publishable_key_auth_enabled": true,
      "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
      "name": "My Sandbox Workspace",
      "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of workspaces associated with the authentication value.

#### Code:

```python
seam.workspaces.list()
```

#### Output:

```python
[Workspace(company_name="Acme", connect_partner_name="Acme", connect_webview_customization={"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"}, is_sandbox=true, is_suspended=false, is_publishable_key_auth_enabled=true, publishable_key="seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE", name="My Sandbox Workspace", workspace_id="6a0b6282-6a98-4fef-811e-0904c485ac7a")]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of workspaces associated with the authentication value.

#### Code:

```ruby
seam.workspaces.list()
```

#### Output:

```ruby
[{"company_name" => "Acme","connect_partner_name" => "Acme","connect_webview_customization" => {"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"},"is_sandbox" => true,"is_suspended" => false,"is_publishable_key_auth_enabled" => true,"publishable_key" => "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE","name" => "My Sandbox Workspace","workspace_id" => "6a0b6282-6a98-4fef-811e-0904c485ac7a"}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of workspaces associated with the authentication value.

#### Code:

```php
$seam->workspaces->list();
```

#### Output:

```php
[
    [
        "company_name" => "Acme",
        "connect_partner_name" => "Acme",
        "connect_webview_customization" => [
            "inviter_logo_url" =>
                "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
            "logo_shape" => "circle",
            "primary_button_color" => "#232426",
            "primary_button_text_color" => "#FFFDE7",
            "success_message" =>
                "Your account has been successfully connected to Acme!",
        ],
        "is_sandbox" => true,
        "is_suspended" => false,
        "is_publishable_key_auth_enabled" => true,
        "publishable_key" => "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
        "name" => "My Sandbox Workspace",
        "workspace_id" => "6a0b6282-6a98-4fef-811e-0904c485ac7a",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of workspaces associated with the authentication value.

#### Code:

```seam_cli
seam workspaces list
```

#### Output:

```seam_cli
[
  {
    "company_name": "Acme",
    "connect_partner_name": "Acme",
    "connect_webview_customization": {
      "inviter_logo_url": "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
      "logo_shape": "circle",
      "primary_button_color": "#232426",
      "primary_button_text_color": "#FFFDE7",
      "success_message": "Your account has been successfully connected to Acme!"
    },
    "is_sandbox": true,
    "is_suspended": false,
    "is_publishable_key_auth_enabled": true,
    "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
    "name": "My Sandbox Workspace",
    "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
  }
]
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Can also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

None


## Response

{% hint style="success" %}
Returns:
**Array of [workspaces](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "connect_webview_customization": {
    "inviter_logo_url": "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
    "logo_shape": "circle",
    "primary_button_color": "#232426",
    "primary_button_text_color": "#FFFDE7",
    "success_message": "Your account has been successfully connected to Acme!"
  },
  "is_sandbox": false,
  "is_suspended": false,
  "is_publishable_key_auth_enabled": true,
  "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
  "name": "My Production Workspace",
  "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
}
```
{% endtab %}
{% endtabs %}
