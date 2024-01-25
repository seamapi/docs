---
description: >-
  External third-party accounts to which your user has authorized Seam to get
  access
---

# Connected Accounts

Once your user uses a [Connect Webview](../connect-webviews/) to authorize Seam to control their devices, Seam registers this authorized account as a "connected account." For example, a connected account might be an August account with a list of door locks.

A connected account has a unique ID and stores the following data about the user and their account:

* User identifier, such as the username or email address that the user uses to log in to their device account.
* Account type, for example, `schlage`.
* A Boolean `automatically_manage_new_devices` property to indicate whether Seam should import all new devices for the connected account to make these devices available for use and management by the Seam API.\
  Seam sets the initial value for this property based on a [corresponding parameter](../../api-clients/connect-webviews/#connect\_webview-properties) in the associated Connect Webview. However, you can use the [Update Connected Account](../../api-clients/connected-accounts/update-a-connected-account.md) method to change this value.
* An set of editable custom metadata, such as your own internal ID for the user.\
  This custom metadata is useful for [filtering connected accounts](filtering-connected-accounts-by-custom-metadata.md) using the [List Connected Accounts](../../api-clients/connected-accounts/list-connected-accounts.md) method.\
  If the associated Connect Webview contains custom metadata, Seam transfers this custom metadata as the initial value for this property. However, you can use the [Update Connected Account](../../api-clients/connected-accounts/update-a-connected-account.md) method to [change or add custom metadata for the connected account](adding-custom-metadata-to-a-connected-account.md).
* The date and time at which Seam created the connected account, that is, when the user completed the Connect Webview to authorize access.
* Any errors or warnings associated with the connected account
