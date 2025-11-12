# Update a Workspace

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates the [workspace](../../core-concepts/workspaces/README.md) associated with the authentication value.


{% tabs %}
{% tab title="JavaScript" %}

Updates the workspace associated with the authentication value.

#### Code:

```javascript
await seam.workspaces.update({
  name: "My Workspace",
  connect_partner_name: "Acme",
  connect_webview_customization: {
    inviter_logo_url:
      "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
    logo_shape: "circle",
    primary_button_color: "#232426",
    primary_button_text_color: "#FFFDE7",
    success_message: "Your account has been successfully connected to Acme!",
  },
  is_suspended: true,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates the workspace associated with the authentication value.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/workspaces/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "name": "My Workspace",
  "connect_partner_name": "Acme",
  "connect_webview_customization": {
    "inviter_logo_url": "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
    "logo_shape": "circle",
    "primary_button_color": "#232426",
    "primary_button_text_color": "#FFFDE7",
    "success_message": "Your account has been successfully connected to Acme!"
  },
  "is_suspended": true
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates the workspace associated with the authentication value.

#### Code:

```python
seam.workspaces.update(
    name="My Workspace",
    connect_partner_name="Acme",
    connect_webview_customization={
        "inviter_logo_url": "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
        "logo_shape": "circle",
        "primary_button_color": "#232426",
        "primary_button_text_color": "#FFFDE7",
        "success_message": "Your account has been successfully connected to Acme!",
    },
    is_suspended=true,
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates the workspace associated with the authentication value.

#### Code:

```ruby
seam.workspaces.update(
  name: "My Workspace",
  connect_partner_name: "Acme",
  connect_webview_customization: {
    inviter_logo_url:
      "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
    logo_shape: "circle",
    primary_button_color: "#232426",
    primary_button_text_color: "#FFFDE7",
    success_message: "Your account has been successfully connected to Acme!",
  },
  is_suspended: true,
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates the workspace associated with the authentication value.

#### Code:

```php
$seam->workspaces->update(
    name: "My Workspace",
    connect_partner_name: "Acme",
    connect_webview_customization: [
        "inviter_logo_url" =>
            "https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c",
        "logo_shape" => "circle",
        "primary_button_color" => "#232426",
        "primary_button_text_color" => "#FFFDE7",
        "success_message" =>
            "Your account has been successfully connected to Acme!",
    ],
    is_suspended: true
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates the workspace associated with the authentication value.

#### Code:

```seam_cli
seam workspaces update --name "My Workspace" --connect_partner_name "Acme" --connect_webview_customization {"inviter_logo_url":"https://connect.getseam.com/internal/images/view?image_id=1de135fa-f0c2-4e57-90d0-6b9a7d090a0c","logo_shape":"circle","primary_button_color":"#232426","primary_button_text_color":"#FFFDE7","success_message":"Your account has been successfully connected to Acme!"} --is_suspended true
```

#### Output:

```seam_cli
{}
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

**`connect_partner_name`** *String*

Connect partner name for the workspace.

---

**`connect_webview_customization`** *Object*

[Connect Webview](../../core-concepts/connect-webviews/README.md) customizations for the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

<details>

<summary><b><code>logo_shape</code></b> <i>Enum</i></summary>

Logo shape for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

Enum values:

- <code>circle</code>
- <code>square</code>

</details>

---



<details>

<summary><b><code>primary_button_color</code></b> <i>String</i></summary>

Primary button color for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

</details>

---



<details>

<summary><b><code>primary_button_text_color</code></b> <i>String</i></summary>

Primary button text color for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

</details>

---



<details>

<summary><b><code>success_message</code></b> <i>String</i></summary>

Success message for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

</details>

---


**`is_publishable_key_auth_enabled`** *Boolean*

Indicates whether publishable key authentication is enabled for this workspace.

---

**`is_suspended`** *Boolean*

Indicates whether the workspace is suspended.

---

**`name`** *String*

Name of the workspace.

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}

