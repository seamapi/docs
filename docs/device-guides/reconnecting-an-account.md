# Reconnecting an Account

An account can become disconnected for many reasons:

* A user resets their password or clicks "Sign Out of All Devices", invalidating any access tokens Seam may be using to authenticate to the third party API
* The Third Party Service invalidates access tokens due to excessive usage, or as part of a system update
* An access token used internally by Seam expires

When an account is disconnected, you'll receive an error like this on your `connected_account`:

{% tabs %}
{% tab title="Python" %}
```python
connected_account.get(email="jane@example.com")
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

To resolve, issue a new webview for the user to login with. You may need to instruct them to use the same email they previously used (you can use `connected_account.user_identifier` for this. See the guide on Connect Views for more information on how to create Connect Webviews.
