# Lockly Setup Guide

To use Seam with Lockly devices, ask the device owner to complete the steps below.

### 1. Set up the Lockly mobile app

1. Download the [Lockly mobile app](https://lockly.com/pages/lockly-home-app) and create an account if you don’t have one.
2. For each Lockly lock:
   * Open the lock’s card.
   * Select **Settings** in the lower-right corner.
   * Select **Sync with LocklyOS** and turn it on.

### 2. Sign in to the Lockly Access Portal

1. In a web browser, go to the [Lockly Access Portal (LAP)](https://lap.lockly.com/#/login).
2. Sign in using your Lockly mobile app credentials.
3. Purchase the Lockly plan that fits your needs.
4. Email [support@lockly.com](mailto:support@lockly.com) to request API access for your LAP account.

### 3. Create a programmatic access user

1. In LAP, open **Account → User Management**.
2. Select **Add Account**.
3.  Configure the new user with the following values:

    * **Credential type:** Access Key – Programmatic access
    * **User name:** A descriptive label, such as _Seam Integration_
    * **Property:** Select all properties Seam should access
    * **Role:**
      * Property And Room (Read & Write)
      * Doorlock (Read & Write)
      * API EBadge Admin
    * **Validity period:** Permanent\\

    <figure><img src="../../.gitbook/assets/lockly-access-portal-add-account.png" alt="Create a user account in the Lockly Access portal." width="563"><figcaption></figcaption></figure>
4. Select **Confirm**.\
   LAP creates the new account and displays its credentials.\
   Make sure to record the **Client ID**, **Access Key ID**, **Access Key Secret**, **Token ID**, and **Token Secret**.

<figure><img src="../../.gitbook/assets/lockly-access-portal-account-created-successfully.png" alt="Note the information for the newly-created user account." width="563"><figcaption></figcaption></figure>

### 4. Connect Lockly to Seam

After setting up the Lockly Access Portal account and gathering the credentials, we can complete the connection in Seam.

1. Within the form to connect Lockly to Seam, enter the LAP credentials collected in the previous step:
   * Client ID
   * Access Key ID
   * Access Key Secret
   * Token ID
   * Token Secret
2. Confirm the connection.

***

### Troubleshooting

If devices don't appear after connecting your account:

1. Verify that **Sync with LocklyOS** is enabled for each lock in the Lockly mobile app
2. Confirm your [Lockly Access Portal](https://lap.lockly.com/) subscription is active

For additional troubleshooting steps, see our Knowledge Base article or contact Lockly support at [support@lockly.com](mailto:support@lockly.com) with your account details.

