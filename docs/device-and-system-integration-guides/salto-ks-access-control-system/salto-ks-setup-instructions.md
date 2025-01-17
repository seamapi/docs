# Salto KS Setup Instructions

To connect the Salto KS ACS to Seam:

1. Create a [Connect Webview](../../core-concepts/connect-webviews/), including `salto_ks` in the set of [`accepted_providers`](../../api-clients/connect_webviews/#connect_webview-properties).
2. Display the Connect Webview and perform the following steps:
   * If the Connect Webview displays multiple brand options, select **Salto KS**.
   *   In the **Enter your credentials** dialog, type your username and password for the Salto KS web app.

       Note the following restrictions:

       *   You must use a Salto KS production environment account to connect to Seam. You cannot use "Accept Environment" credentials.\
           To confirm that your Salto KS account is a production environment account, note the Salto KS dashboard URL. Make sure that the subdomain within this URL is `app`, for example, `https://app.saltoks.com`.

           A subdomain of `app-accept`, for example, `https://app-accept.saltoks.com`, indicates an "Accept Environment" that you cannot connect to Seam.
       * You must use a Salto KS web app user account that has "Site Admin" rights.
   *   Select the Salto KS sites that you want to integrate with Seam.

       {% hint style="success" %}
       Make sure that your installer has released your Salto KS sites. Seam cannot perform actions on unreleased Salto KS sites.
       {% endhint %}
   *   Confirm that you will allow Seam to add the requisite admin user to your Salto KS site for the integration with Seam, click **Allow and Continue**.

       {% hint style="warning" %}
       Do not suspend or remove the Seam Integration admin user from your Salto KS site.
       {% endhint %}
