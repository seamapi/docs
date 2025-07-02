# Workspaces

## The workspace Object

- [Properties](./#properties)


Represents a Seam [workspace](../../core-concepts/workspaces/README.md). A workspace is a top-level entity that encompasses all other resources below it, such as devices, connected accounts, and Connect Webviews. Seam provides two types of workspaces. A [sandbox workspace](../../core-concepts/workspaces/README.md#sandbox-workspaces) is a special type of workspace designed for testing code. Sandbox workspaces offer test device accounts and virtual devices that you can connect and control. This ability to work with virtual devices is quite handy because it removes the need to own physical devices from multiple brands. To connect real devices and systems to Seam, use a [production workspace](../../core-concepts/workspaces/README.md#production-workspaces).

{% tabs %}
{% tab title="Production Workspace" %}

A production workspace resource.

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
  "name": "My Production Workspace",
  "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
}
```
{% endtab %}
{% tab title="Sandbox Workspace" %}

A sandbox workspace resource.

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
  "is_sandbox": true,
  "is_suspended": false,
  "name": "My Sandbox Workspace",
  "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
}
```
{% endtab %}
{% tab title="Workspace" %}

A workspace resource.

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
  "is_sandbox": true,
  "is_suspended": false,
  "name": "My Sandbox Workspace",
  "workspace_id": "6a0b6282-6a98-4fef-811e-0904c485ac7a"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`company_name`** *String*

Company name associated with the [workspace](../../core-concepts/workspaces/README.md).




---

**`connect_partner_name`** *String*


{% hint style="warning" %}
**Deprecated**. Use `company_name` instead.
{% endhint %}



---

**`connect_webview_customization`** *Object*




<details>
  <summary>Child Properties</summary>

  - <strong><code>inviter_logo_url</code></strong> <i>String</i>
  
    URL of the inviter logo for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

  - <strong><code>logo_shape</code></strong> <i>Enum</i>
  
    Logo shape for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).
  <details>
      <summary>Enum values:</summary>
  
      - <code>circle</code>
      - <code>square</code>
  </details>

  - <strong><code>primary_button_color</code></strong> <i>String</i>
  
    Primary button color for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

  - <strong><code>primary_button_text_color</code></strong> <i>String</i>
  
    Primary button text color for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

  - <strong><code>success_message</code></strong> <i>String</i>
  
    Success message for [Connect Webviews](../../core-concepts/connect-webviews/README.md) in the workspace. See also [Customize the Look and Feel of Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-look-and-feel-of-your-connect-webviews).

</details>

---

**`is_sandbox`** *Boolean*

Indicates whether the workspace is a [sandbox workspace](../../core-concepts/workspaces/README.md#sandbox-workspaces).




---

**`is_suspended`** *Boolean*

Indicates whether the [sandbox workspace](../../core-concepts/workspaces/README.md#sandbox-workspaces) is suspended. Seam suspends sandbox workspaces that have not been accessed in 14 days.




---

**`name`** *String*

Name of the [workspace](../../core-concepts/workspaces/README.md).




---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md).




---

## Endpoints


[**`/workspaces/create`**](./create.md)

Creates a new [workspace](../../core-concepts/workspaces/README.md).


[**`/workspaces/get`**](./get.md)

Returns the [workspace](../../core-concepts/workspaces/README.md) associated with the authentication value.


[**`/workspaces/list`**](./list.md)

Returns a list of [workspaces](../../core-concepts/workspaces/README.md) associated with the authentication value.


[**`/workspaces/reset_sandbox`**](./reset_sandbox.md)

Resets the [sandbox workspace](../../core-concepts/workspaces/README.md#sandbox-workspaces) associated with the authentication value. Note that this endpoint is only available for sandbox workspaces.


[**`/workspaces/update`**](./update.md)

Updates the [workspace](../../core-concepts/workspaces/README.md) associated with the authentication value.


