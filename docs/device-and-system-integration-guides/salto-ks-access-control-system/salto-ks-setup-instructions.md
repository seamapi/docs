# Salto KS Setup Instructions

To connect the Salto KS ACS to Seam:

1. Create a [Connect Webview](../../core-concepts/connect-webviews/), including `salto_ks` in the set of [`accepted_providers`](../../api-clients/connect_webviews/#connect_webview-properties).
2. Display the Connect Webview and perform the following steps:
   * If the Connect Webview displays multiple brand options, select **Salto KS**.
   * In the **Enter your credentials** dialog, type your username and password for the Salto KS web app. Make sure to use a Salto KS web app user account that has "Site Admin" rights.
   * Click **Continue**.
   *   Confirm that you will allow Seam to add the requisite admin user to your Salto KS site for the integration with Seam, click **Allow and Continue**.

       {% hint style="warning" %}
       Do not suspend or remove the Seam Integration admin user from your Salto KS site.
       {% endhint %}
