---
description: Guide for using ASSA ABLOY Credential Services with Seam
---

# ASSA ABLOY Credential Services (Credential Manager) - In Development

## Setup Instructions

1. Identify your ASSA ABLOY tenant account username and password, as well as your application ID.\
   ASSA ABLOY should have provided this information to you when you registered your application with the ASSA ABLOY partnerships program.\
   You can also locate this information in the ASSA ABLOY Global Solutions Technology Partner Portal, as follows:
   * In a web browser, go to the [ASSA ABLOY Global Solutions Technology Partner Portal](https://my.assaabloyglobalsolutions.com/tpp).
   * Log in to the ASSA ABLOY Global Solutions Technology Partner Portal.
   *   Click **Accounts > Account List**.\


       <figure><img src="../.gitbook/assets/assa-abloy-accounts-account-list-menu-item.png" alt="In the ASSA ABLOY Global Solutions Technology Partner Portal, click Accounts > Account List."><figcaption></figcaption></figure>
   * In the **Agreements** area, locate and open the text (`.txt`) file.\
     This text file contains your ASSA ABLOY tenant account username and password, as well as your application ID.
2. Create a [Connect Webview](../core-concepts/connect-webviews/), including `assa_abloy_credential_service` in the set of [`accepted_providers`](../api-clients/connect-webviews/#connect\_webview-properties).
3. Display the Connect Webview and perform the following steps:
   * If presented with multiple brand options within the Connect Webview, select **Assa Abloy Credential Service**.
   * In the **Username** field, type the tenant account username.
   * In the **Password** field, type the tenant account password.
   * (Coming soon!) In the **Application ID** field, type the application ID.
   * Click **Submit**.

{% hint style="info" %}
When connecting an ASSA ABLOY Credential Services account in your sandbox test environment, you can use the following test credentials:

[ASSA ABLOY Credential Services Sample Data](sandbox-and-sample-data/assa-abloy-credential-service-sample-data.md)
{% endhint %}
