---
description: Learn about the site requirements for using Instant Keys.
---

# Setting Up Your Site for Instant Keys

Before issuing Instant Keys, make sure that your property meets the following requirements:

* [Bluetooth compatibility for door locks](setting-up-your-site-for-instant-keys.md#confirm-bluetooth-compatibility-for-door-locks)
* [License requirements](setting-up-your-site-for-instant-keys.md#purchase-the-required-licenses)

Fulfilling these requirements ensures that guests can unlock doors using mobile credentials over Bluetooth.

Then, [connect your access system to Seam](setting-up-your-site-for-instant-keys.md#connect-the-access-system-to-seam).

***

## Bluetooth Compatibility for Door Locks

Your door lock hardware must support Bluetooth Low Energy (BLE) keys. Seam Instant Key uses BLE to unlock doors offline, without relying on Wi-Fi or cellular.

The following table describes the BLE requirements for the access systems for which Seam supports Instant Keys:

<table><thead><tr><th width="282.800048828125">Access System</th><th>BLE Requirements and Support</th></tr></thead><tbody><tr><td>Salto KS</td><td>All locks support BLE mobile keys right out of the box.</td></tr><tr><td>Salto Space</td><td>All locks support BLE mobile keys right out of the box.</td></tr><tr><td>ASSA ABLOY Visionline and Vostio (Vingcard locks)</td><td>Requires specific hardware and licensing. See <a href="setting-up-your-site-for-instant-keys.md#vingcard-lock-requirements">Vingcard Lock Requirements</a>.</td></tr></tbody></table>

### Vingcard Lock Requirements

Note the following requirements for Vingcard locks:

#### RFID Readers for Magstripe Locks

For magstripe locks, you must attach an RFID reader to the escutcheon.

1. Detach the magstripe escutcheon and battery cover.
2. Replace the original reader with an RFID module.
3. Activate mobile access for the lock.

For detailed instructions, see the Vingcard [Upgrading Your Vingcard Door Locks to RFID and Mobile Access](https://www.vingcard.com/en/solutions/mobile-access-and-wallet-solutions/mobile-access/rfid-upgrade) guide.

#### LCU Compatibility

To support mobile (BLE) keys, your lock must have the correct Lock Control Unit (LCU). You can identify the LCU by the label on the back, as follows:

| LCU Model                      | Compatibility                                                                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LCU 6351 (white label)         | <ul><li>BLE built in.</li><li>Mobile key ready.</li></ul>                                                                                                  |
| LCU 6333 or 6334 (green label) | <ul><li>No BLE support.</li><li>Needs an additional <a href="https://estore.vingcard.com/ca/ble-module-pcba-7001.html">BLE module</a> installed.</li></ul> |

<figure><img src="../../.gitbook/assets/image (8) (2).png" alt="LCU examples"><figcaption><p>LCU examples</p></figcaption></figure>

***

## License Requirements

To use mobile keys with your access system, you may need to purchase licenses or subscriptions to activate certain software features. These features vary by access system.

### **ASSA ABLOY Visionline**

To use Instant Keys with Visionline, please reach out to your local installer to purchase the following from Assa Abloy:

* A mobile key license linked to Seam's Assa Abloy tenant account: `SeamLabs-tenant`. Provide this account username when completing your purchase.
* A web services option code.

After you have purchased the items above from Assa Abloy, please reach out to Seam at [support@seam.co](mailto:support@seam.co). Include the Seam workspace ID you'll be using, so we can help finish setting up your workspace for Visionline Instant Keys.

### **ASSA ABLOY Vostio**

To use mobile keys with Vostio, you will need to purchase the following from Assa Abloy:

* A mobile Key license for Seam's Assa Abloy tenant account called `SeamLabs-tenant` — please provide this account name to Assa Abloy when completing your purchase

After you have purchased the items above from Assa Abloy, please reach out to Seam at [support@seam.co](mailto:support@seam.co). Include the Seam workspace ID you'll be using, so we can help finish setting up your workspace for Visionline Instant Keys.

### **Salto KS**

To use mobile keys with Salto KS, you need the following subscription:

*   [Lite package subscription](https://support.saltosystems.com/ks/account/subscription-and-vouchers/)

    Purchase this subscription with a sufficient user subscription that exceeds the maximum number of users that you have on your system at any moment in time.

### **Salto Space**

To use mobile keys with Salto Space, you need to add the following features when purchasing your [Space license](https://saltopro.com/product/salto-space-basic-license-spabasic/):

* 0016-1 – Mobile Access (BLE)
* 0018 – SHIP Interface

***

## Connect Your Access System to Seam

To connect your access system to Seam, we recommend embedding a [Connect Webview](../../core-concepts/connect-webviews/) in your application. The Connect Webview flow guides the property manager through each step of the connection process.

<figure><img src="../../.gitbook/assets/salto webview.webp.png" alt="Example: Connect Webview for Salto systems"><figcaption><p>Example: Connect Webview for Salto systems</p></figcaption></figure>

For on-premises access systems, such as Salto Space and Visionline, Seam offers the lightweight [Seam Bridge](../seam-bridge/) app, at no extra cost. This software-only component runs on a computer within the same local network and creates a secure tunnel between Seam Cloud and the access system. Seam Bridge manages encryption, handles authentication, and removes the need to expose local ports to the internet.

<figure><img src="../../.gitbook/assets/image (9) (2).png" alt="Seam Bridge"><figcaption><p>Seam Bridge</p></figcaption></figure>

For detailed connection instructions, see the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your access system.
