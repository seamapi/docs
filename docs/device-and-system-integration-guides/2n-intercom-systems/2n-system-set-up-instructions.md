# 2N System Set Up Instructions

## Prepare My2N Account for Seam Integration

{% hint style="warning" %}
To connect 2N devices to Seam, you must use a Company Admin account with multi-factor authentication (MFA) disabled.

If MFA is required for your admin account, create a separate account without MFA for dedicated API communication.
{% endhint %}

***

### Set up steps

1. **Create a My2N account**\
   [Sign up for a My2N account](https://my2n.com/2n-remote-configuration) if you don't already have one.
2. **Add your 2N devices**\
   In My2N, add your 2N IP devices to the account.
3. **Enable Remote API Access (RAA)**\
   Make sure Remote API Access (RAA) is enabled for your company. If it's not, contact [integrations@2n.com](mailto:integrations@2n.com) to activate it. Provide the company ID, which is locatd in the URL.

***

### Enable HTTP API for each Device

Repeat the following steps for each 2N device you want to control through Seam.

1. **Open device configuration**
   * In My2N, go to **Devices** in the left sidebar.
   *   Click the **three-dot icon** next to your device and choose **Open configuration**.\\

       <figure><img src="../../.gitbook/assets/Screenshot 2025-10-31 at 4.56.29 PM.png" alt=""><figcaption></figcaption></figure>
   * When prompted, log in with the device’s credentials:
     * Default username: `Admin`
     * Default password: `2n`
     * (Use custom credentials if they were changed during installation.)
2.  **Enable HTTP API services**

    * In the device dashboard, click **Services**.
    * From the sidebar, select **HTTP API**.
    *   On the **Services** tab, make sure all of the APIs are enabled, with

        **Connection Type** set to **Secure (TLS)** and **Authentication** set to **Digest.**

    <figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>
3. **Create API credentials**
   * In the top toolbar, click on **Account 1**, or another available account.
   * Enable the account.
   * Create a **Username** and **Password**.
   * In the **User Privileges** section, ensure both **Monitoring** and **Control** boxes are checked for all listed options.
   * Click the Save (💾) icon in the bottom-right corner to confirm.

{% hint style="info" %}
**Note**: the **Username** and **Password** created in this step will be used when connecting your device to Seam, please log and remember them.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2025-10-31 at 9.45.19 AM.png" alt=""><figcaption></figcaption></figure>

***

## Connect Webview Instructions

The Seam Connect Webview is where you securely link your My2N account to Seam.

This connection lets Seam manage and update your 2N intercom devices.

1. **Select My2N**\
   In the Seam Connect Webview, select **My2N** from the list of brands available.
2.  **Enter your Company Admin credentials**

    * Enter the Company Admin My2N email and password for your property’s My2N account, then click **Submit**.
    * **Note:** Use an account with multi-factor authentication (MFA) turned off. If your main admin account requires MFA, create a separate account without MFA for this connection.

    <figure><img src="../../.gitbook/assets/Screenshot 2025-10-31 at 11.36.44 AM.png" alt="" width="411"><figcaption></figcaption></figure>
3.  **Choose which devices to connect**\
    The Webview will show all 2N devices under your My2N company.

    If a device doesn’t appear, check that it’s been added and that the HTTP API is enabled.

    Select the devices you want to link to Seam, then click **Submit**.

    <figure><img src="../../.gitbook/assets/Screenshot 2025-10-31 at 5.43.46 PM.png" alt="" width="304"><figcaption></figcaption></figure>
4.  **Authorize device access**\
    For each selected device, enter the **Username** and **Password** you created in the [Enable HTTP API for Each Device](2n-system-set-up-instructions.md#enable-http-api-for-each-device) section.

    This step confirms that Seam can securely communicate with your 2N devices to perform actions like unlocking doors or managing access codes.

    <figure><img src="../../.gitbook/assets/Screenshot 2025-10-31 at 5.46.00 PM.png" alt="" width="319"><figcaption></figcaption></figure>
