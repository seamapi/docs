# Create a Workspace

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Creates a new [workspace](../../core-concepts/workspaces/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new sandbox workspace.

#### Code:

```javascript
await seam.workspaces.create({
  name: "My Sandbox Workspace",
  company_name: "Acme",
  connect_partner_name: "Acme",
  is_sandbox: true,
  is_publishable_key_auth_enabled: true,
  publishable_key: "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
  webview_primary_button_color: "#232426",
  webview_primary_button_text_color: "#FFFDE7",
  webview_logo_shape: "circle",
  webview_success_message:
    "Your account has been successfully connected to Acme!",
  connect_webview_customization: {
    inviter_logo_url:
      "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
    logo_shape: "circle",
    primary_button_color: "#232426",
    primary_button_text_color: "#FFFDE7",
    success_message: "Your account has been successfully connected to Acme!",
  },
});
```

#### Output:

```javascript
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
  "is_publishable_key_auth_enabled": true,
  "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
  "is_suspended": false,
  "name": "My Sandbox Workspace",
  "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new sandbox workspace.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/workspaces/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "name": "My Sandbox Workspace",
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "is_sandbox": true,
  "is_publishable_key_auth_enabled": true,
  "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
  "webview_primary_button_color": "#232426",
  "webview_primary_button_text_color": "#FFFDE7",
  "webview_logo_shape": "circle",
  "webview_success_message": "Your account has been successfully connected to Acme!",
  "connect_webview_customization": {
    "inviter_logo_url": "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
    "logo_shape": "circle",
    "primary_button_color": "#232426",
    "primary_button_text_color": "#FFFDE7",
    "success_message": "Your account has been successfully connected to Acme!"
  }
}
EOF
```

#### Output:

```curl
{
  "workspace": {
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
    "is_publishable_key_auth_enabled": true,
    "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
    "is_suspended": false,
    "name": "My Sandbox Workspace",
    "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new sandbox workspace.

#### Code:

```python
seam.workspaces.create(name="My Sandbox Workspace", company_name="Acme", connect_partner_name="Acme", is_sandbox=true, is_publishable_key_auth_enabled=true, publishable_key="seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE", webview_primary_button_color="#232426", webview_primary_button_text_color="#FFFDE7", webview_logo_shape="circle", webview_success_message="Your account has been successfully connected to Acme!", connect_webview_customization={"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"})
```

#### Output:

```python
Workspace(company_name="Acme", connect_partner_name="Acme", connect_webview_customization={"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"}, is_sandbox=true, is_publishable_key_auth_enabled=true, publishable_key="seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE", is_suspended=false, name="My Sandbox Workspace", workspace_id="6a0b6282-6a98-4fef-811e-0904c485ac7a")
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new sandbox workspace.

#### Code:

```ruby
seam.workspaces.create(name: "My Sandbox Workspace", company_name: "Acme", connect_partner_name: "Acme", is_sandbox: true, is_publishable_key_auth_enabled: true, publishable_key: "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE", webview_primary_button_color: "#232426", webview_primary_button_text_color: "#FFFDE7", webview_logo_shape: "circle", webview_success_message: "Your account has been successfully connected to Acme!", connect_webview_customization: {"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"})
```

#### Output:

```ruby
{"company_name" => "Acme","connect_partner_name" => "Acme","connect_webview_customization" => {"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"},"is_sandbox" => true,"is_publishable_key_auth_enabled" => true,"publishable_key" => "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE","is_suspended" => false,"name" => "My Sandbox Workspace","workspace_id" => "6a0b6282-6a98-4fef-811e-0904c485ac7a"}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new sandbox workspace.

#### Code:

```php
$seam->workspaces->create(
    name: "My Sandbox Workspace",
    company_name: "Acme",
    connect_partner_name: "Acme",
    is_sandbox: true,
    is_publishable_key_auth_enabled: true,
    publishable_key: "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
    webview_primary_button_color: "#232426",
    webview_primary_button_text_color: "#FFFDE7",
    webview_logo_shape: "circle",
    webview_success_message: "Your account has been successfully connected to Acme!",
    connect_webview_customization: [
        "inviter_logo_url" =>
            "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
        "logo_shape" => "circle",
        "primary_button_color" => "#232426",
        "primary_button_text_color" => "#FFFDE7",
        "success_message" =>
            "Your account has been successfully connected to Acme!",
    ],
);
```

#### Output:

```php
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
    "is_publishable_key_auth_enabled" => true,
    "publishable_key" => "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
    "is_suspended" => false,
    "name" => "My Sandbox Workspace",
    "workspace_id" => "6a0b6282-6a98-4fef-811e-0904c485ac7a",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new sandbox workspace.

#### Code:

```seam_cli
seam workspaces create --name "My Sandbox Workspace" --company_name "Acme" --connect_partner_name "Acme" --is_sandbox true --is_publishable_key_auth_enabled true --publishable_key "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE" --webview_primary_button_color "#232426" --webview_primary_button_text_color "#FFFDE7" --webview_logo_shape "circle" --webview_success_message "Your account has been successfully connected to Acme!" --connect_webview_customization {"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"}
```

#### Output:

```seam_cli
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
  "is_publishable_key_auth_enabled": true,
  "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
  "is_suspended": false,
  "name": "My Sandbox Workspace",
  "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- Personal access token
  <br>Must omit the `seam-workspace` header from the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`name`** *String* (Required)

Name of the new workspace.

---

**`company_name`** *String*

Company name for the new workspace.

---

**`connect_partner_name`** *String*

Connect partner name for the new workspace.

{% hint style="warning" %}
**Deprecated**. Use `company_name` instead.
{% endhint %}

---

**`connect_webview_customization`** *Object*

[Connect Webview](../../core-concepts/connect-webviews/README.md) customizations for the new workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

<details>

<summary><b><code>logo_shape</code></b> <i>Enum</i></summary>

Logo shape for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the new workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

Enum values:

- <code>circle</code>
- <code>square</code>

</details>

---



<details>

<summary><b><code>primary_button_color</code></b> <i>String</i></summary>

Primary button color for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the new workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

</details>

---



<details>

<summary><b><code>primary_button_text_color</code></b> <i>String</i></summary>

Primary button text color for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the new workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

</details>

---



<details>

<summary><b><code>success_message</code></b> <i>String</i></summary>

Success message for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the new workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

</details>

---


**`is_sandbox`** *Boolean*

Indicates whether the new workspace is a [sandbox workspace](../../core-concepts/workspaces/README.md#sandbox-workspaces).

---

**`webview_logo_shape`** *String*

{% hint style="warning" %}
**Deprecated**. Use `connect_webview_customization.webview_logo_shape` instead.
{% endhint %}

---

**`webview_primary_button_color`** *String*

{% hint style="warning" %}
**Deprecated**. Use `connect_webview_customization.webview_primary_button_color` instead.
{% endhint %}

---

**`webview_primary_button_text_color`** *String*

{% hint style="warning" %}
**Deprecated**. Use `connect_webview_customization.webview_primary_button_text_color` instead.
{% endhint %}

---

**`webview_success_message`** *String*

{% hint style="warning" %}
**Deprecated**. Use `connect_webview_customization.webview_success_message` instead.
{% endhint %}

---


## Response

{% hint style="success" %}
Returns:
**[workspace](.)**

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

---

## Examples


### Create a production workspace

Creates a new production workspace.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.workspaces.create({
  name: "My Production Workspace",
  company_name: "Acme",
  connect_partner_name: "Acme",
  is_sandbox: false,
  is_publishable_key_auth_enabled: true,
  publishable_key: "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
  webview_primary_button_color: "#232426",
  webview_primary_button_text_color: "#FFFDE7",
  webview_logo_shape: "circle",
  webview_success_message:
    "Your account has been successfully connected to Acme!",
  connect_webview_customization: {
    inviter_logo_url:
      "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
    logo_shape: "circle",
    primary_button_color: "#232426",
    primary_button_text_color: "#FFFDE7",
    success_message: "Your account has been successfully connected to Acme!",
  },
});
```

#### Output:

```javascript
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
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/workspaces/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "name": "My Production Workspace",
  "company_name": "Acme",
  "connect_partner_name": "Acme",
  "is_sandbox": false,
  "is_publishable_key_auth_enabled": true,
  "publishable_key": "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
  "webview_primary_button_color": "#232426",
  "webview_primary_button_text_color": "#FFFDE7",
  "webview_logo_shape": "circle",
  "webview_success_message": "Your account has been successfully connected to Acme!",
  "connect_webview_customization": {
    "inviter_logo_url": "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
    "logo_shape": "circle",
    "primary_button_color": "#232426",
    "primary_button_text_color": "#FFFDE7",
    "success_message": "Your account has been successfully connected to Acme!"
  }
}
EOF
```

#### Output:

```curl
{
  "workspace": {
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
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.workspaces.create(name="My Production Workspace", company_name="Acme", connect_partner_name="Acme", is_sandbox=false, is_publishable_key_auth_enabled=true, publishable_key="seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE", webview_primary_button_color="#232426", webview_primary_button_text_color="#FFFDE7", webview_logo_shape="circle", webview_success_message="Your account has been successfully connected to Acme!", connect_webview_customization={"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"})
```

#### Output:

```python
Workspace(company_name="Acme", connect_partner_name="Acme", connect_webview_customization={"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"}, is_sandbox=true, is_suspended=false, is_publishable_key_auth_enabled=true, publishable_key="seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE", name="My Sandbox Workspace", workspace_id="6a0b6282-6a98-4fef-811e-0904c485ac7a")
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.workspaces.create(name: "My Production Workspace", company_name: "Acme", connect_partner_name: "Acme", is_sandbox: false, is_publishable_key_auth_enabled: true, publishable_key: "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE", webview_primary_button_color: "#232426", webview_primary_button_text_color: "#FFFDE7", webview_logo_shape: "circle", webview_success_message: "Your account has been successfully connected to Acme!", connect_webview_customization: {"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"})
```

#### Output:

```ruby
{"company_name" => "Acme","connect_partner_name" => "Acme","connect_webview_customization" => {"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"},"is_sandbox" => true,"is_suspended" => false,"is_publishable_key_auth_enabled" => true,"publishable_key" => "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE","name" => "My Sandbox Workspace","workspace_id" => "6a0b6282-6a98-4fef-811e-0904c485ac7a"}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->workspaces->create(
    name: "My Production Workspace",
    company_name: "Acme",
    connect_partner_name: "Acme",
    is_sandbox: false,
    is_publishable_key_auth_enabled: true,
    publishable_key: "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE",
    webview_primary_button_color: "#232426",
    webview_primary_button_text_color: "#FFFDE7",
    webview_logo_shape: "circle",
    webview_success_message: "Your account has been successfully connected to Acme!",
    connect_webview_customization: [
        "inviter_logo_url" =>
            "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
        "logo_shape" => "circle",
        "primary_button_color" => "#232426",
        "primary_button_text_color" => "#FFFDE7",
        "success_message" =>
            "Your account has been successfully connected to Acme!",
    ],
);
```

#### Output:

```php
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
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam workspaces create --name "My Production Workspace" --company_name "Acme" --connect_partner_name "Acme" --is_sandbox false --is_publishable_key_auth_enabled true --publishable_key "seam_pk1fGd41X_zKs0ZELRTEc8nWxiBsEXAMPLE" --webview_primary_button_color "#232426" --webview_primary_button_text_color "#FFFDE7" --webview_logo_shape "circle" --webview_success_message "Your account has been successfully connected to Acme!" --connect_webview_customization {"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"}
```

#### Output:

```seam_cli
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
```
{% endtab %}

{% endtabs %}
