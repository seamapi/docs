---
description: Learn why an account may become disconnected and how to reconnect it.
---

# Reconnecting an Account

An account can become disconnected for many reasons, including the following:

* A user resets their password or clicks **Sign Out of All Devices**, invalidating any access tokens Seam may be using to authenticate to the third-party API.
* The third-party service invalidates access tokens due to excessive usage or as part of a system update.
* An access token used internally by Seam expires.

When an account is disconnected, Seam emits an error like the following example on the `connected_account`:

{% tabs %}
{% tab title="Python" %}
```python
seam.connected_accounts.get(email_address="jane@example.com")
# ConnectedAccount(
#   ...
#   errors=[
#     {
#        error_code: "account_disconnected",
#        message: "Account Disconnected, you may need to reconnect the account with a new webview..."
#     }
#  ]
# )
```
{% endtab %}
{% endtabs %}

Seam recommends adding error handling logic to you application for this error. Your app should also include a fallback case if it encounters an unknown generic error code.

To resolve this error, create a new Connect Webview that the user can use to log in. You may need to instruct them to use the same email address that they used previously. You can use `connected_account.user_identifier` to learn the user's email address. For more information about creating Connect Webviews, see [Connect Webview Process](../capability-guides/device-and-system-capabilities/connect-webviews/connect-webview-process.md).
