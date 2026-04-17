---
description: Learn how to connect your Salto KS access system to Seam.
---

# Salto KS Setup Instructions

This topic describes how to connect your Salto KS sites to Seam.

## Prerequisites

Note the following requirements before connecting your Salto KS access control system to Seam:

### Site Admin

You must use a Salto KS web app user account that has "Site Admin" rights.

### Salto KS Production Environment

You must use a Salto KS production environment account to connect to Seam. You cannot use "Accept Environment" credentials.

To confirm that your Salto KS account is a production environment account, note the Salto KS dashboard URL. Make sure that the subdomain within this URL is `app`, for example, `https://app.saltoks.com`.

A subdomain of `app-accept`, for example, `https://app-accept.saltoks.com`, indicates an "Accept Environment" that you cannot connect to Seam.

### Released Salto KS Sites

Make sure that your installer has released your Salto KS sites. Seam cannot perform actions on unreleased Salto KS sites.

***

## Setup Process

To connect the Salto KS ACS to Seam:

1. Create a [Connect Webview](../../core-concepts/connect-webviews/), including `salto_ks` in the set of [`accepted_providers`](../../api/connect_webviews/).
2. Display the Connect Webview and perform the following steps:
   1. If the Connect Webview displays multiple brand options, select **Salto KS**.
   2. In the **Enter your credentials** dialog, type your username and password for the Salto KS web app.
   3. Select the Salto KS sites that you want to integrate with Seam.
   4.  Click **Allow and Continue** to confirm that you allow Seam to add the requisite admin user to your Salto KS site for the integration with Seam.

       \{% hint style="warning" %\} Do not suspend or remove the Seam Integration admin user from your Salto KS site. \{% endhint %\} 5. Click **Close**.
