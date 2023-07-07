---
description: Guide for using Hubitat Elevation Hubs with Seam
---

# Hubitat Elevation Hub

This integration uses [Hubitat’s](https://github.com/jason0x43/hacs-hubitat/blob/master/hubitat.com) [Maker API](https://docs.hubitat.com/index.php?title=Hubitat%E2%84%A2\_Maker\_API) to make devices connected to a Hubitat Hub available for use with Seam.

## Supported Devices

The following device types are currently supported:

* Door Locks - Where the device has the capability, we support triggering lock / unlock actions, and programming access codes.

## Set Up Instructions&#x20;

### 1. Access the Hubitat Hub Dashboard

* For instructions on how to get access to the Hubitat Hub's Dashboard, [visit this link](https://docs2.hubitat.com/getting-started/registration-and-setup).

### 2. Configure the "Type" of the Device

* From the Hubitat Hub dashboard, click on "Devices" in the left navigation.
* In the "Device Information" section, click on "Type", and select the correct device type of the device.

### 3. Turn on Hub Login Security (IMPORTANT)

This prevents other people on the same network as that of the hub from being able to log in to the dashboard and modify your settings.

* From the Hubitat Hub dashboard, click on "Settings" in the left navigation
* In the "Admin Settings" section, click on "Hub Login Security".
* Click on "Add User"
* Fill in the form with a username, email, and password, and make sure to save this information somewhere. You'll be using these credentials to log in to your dashboard.

### 4.  Adding the Maker API App for Seam access

* From the Hubitat Hub dashboard, click on "Apps" in the left navigation
* Click on "Add Built-In App" on the top right corner
* Click on the "Maker API" app to install it
* Under the "Security" section:
  * Enable "Allow Access via Remote / Cloud"
  * Disable "Allow Access via Local IP / Address"
* Under "Select Devices", check the checkboxes of all the devices you want to connect with Seam
* Under the "Cloud URLS:" section, copy the "Get Device Info" Cloud URL, and save it. You'll be using this URL to connect the hub to Seam.

### 5. Adding your account via Seam Connect Webview

Use the Cloud URL you collected in the previous step to connect your account.

<figure><img src="../.gitbook/assets/Screen Shot 2023-07-06 at 5.19.49 PM (2).png" alt="" width="338"><figcaption></figcaption></figure>

## Where to Order

You can purchase Hubitat Hubs from their website. They offer Zigbee and Z-Wave hubs that work across most of the world.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Hubitat Hub Store</strong></td><td></td><td><a href="https://hubitat.com/products">https://hubitat.com/products</a></td><td><a href="../.gitbook/assets/61-5mM-Np1L._AC_SL1500_.jpg">61-5mM-Np1L._AC_SL1500_.jpg</a></td></tr></tbody></table>
