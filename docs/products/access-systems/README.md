---
description: >-
  Learn about managing access control systems that enable you to control users'
  access to physical spaces, using credentials.
---

# 🏢 Access Control Systems

<figure><img src="../../.gitbook/assets/building-acs-example.png" alt="With Seam, you can manage your ACS system, granting users access to multiple entrances using credentials."><figcaption><p>With Seam, you can manage your access control system, granting users access to multiple entrances using credentials.</p></figcaption></figure>

Use the Seam access control system (ACS) API to grant and manage access to apartment buildings, hotels, commercial offices, warehouses, special-purpose facilities, and much more. Seam integrates with multiple ACS systems and brands, and the Seam API standardizes key functions.

***

## What Is an Access Control System?

Access control systems centralize access authorization for buildings, which means that you can use a single system to grant users access to one or more entrances. An access control system manages the following elements:

* Who has access
* The entrances to which users have access
* The access schedule for each user and entrance
* The access mechanism—PIN codes, mobile keys, or plastic cards—for each access grant

***

## Managing Your ACS with Seam

Seam enables you to manage your ACS in a logical, efficient manner.

1. Create ACS users.
2.  Configure access for your ACS users.

    For each user, specify the entrances to which the user has access and the schedule for this access.
3. Define credentials, which are the digital means of granting access, such as PIN codes, mobile keys, and plastic (RFID) cards.\
   If you are developing a mobile app to provide access for your ACS users, you can also use [Seam's iOS and Android SDKs](../../developer-tools/mobile-sdks/) that pair with the Seam API to create and manage mobile keys.

<figure><img src="../../.gitbook/assets/acs-credential-types.png" alt="Seam provides the flexibility to grant access to ACS users, using the access methods that best suit your users&#x27; needs."><figcaption><p>Seam provides the flexibility to grant access to ACS users, using the access methods that best suit your users' needs.</p></figcaption></figure>

### Seam's API Handles ACS Differences

Seam's universal API provides the flexibility to manage a variety of [access control systems](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md), each of which may have manufacturer-specific differences. For example, depending on your ACS, you configure access permissions by [assigning ACS users to access groups](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md#access-group-based-access-control-systems) or by [specifying access permissions for each ACS user or credential](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md#credential-based-access-control-systems).

For details specific to your access control system, see the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS.

***

## **Getting Started**

Create your first credentials! See the [ACS Quick Starts](../../capability-guides/access-systems/acs-quick-starts/).

<table data-view="cards"><thead><tr><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td>Create your first PIN code credential. →</td><td><a href="../../.gitbook/assets/pin-code.png">pin-code.png</a></td><td><a href="../../capability-guides/access-systems/acs-quick-starts/pin-code-quick-start.md">pin-code-quick-start.md</a></td></tr><tr><td>Create your first encodable key card credential. →</td><td><a href="../../.gitbook/assets/key-card.png">key-card.png</a></td><td><a href="../../capability-guides/access-systems/acs-quick-starts/encodable-key-card-quick-start.md">encodable-key-card-quick-start.md</a></td></tr><tr><td>Create your first mobile key credential. →</td><td><a href="../../.gitbook/assets/mobile-key.png">mobile-key.png</a></td><td><a href="../../capability-guides/access-systems/acs-quick-starts/mobile-key-quick-start.md">mobile-key-quick-start.md</a></td></tr></tbody></table>

***

## Learn More

Find out more about using Seam to manage access control system resources. See the following guides:

1. Connect your ACS to Seam.
   * [Connect an ACS to Seam](../../capability-guides/access-systems/connect-an-acs-to-seam/)
2. Learn about ACS concepts.
   * [Access Control System Resources](../../capability-guides/access-systems/connect-an-acs-to-seam/access-control-system-resources.md)
   * [Understanding ACS Differences](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md)
3. Get your ACS system ID.
   * [Retrieving ACS System Details](../../capability-guides/access-systems/connect-an-acs-to-seam/retrieving-acs-system-details.md)
4. Create ACS users.
   * [Managing ACS Users](user-management.md)
5. For relevant access control systems, assign ACS users to access groups.
   * [Assigning ACS Users to Access Groups](../../capability-guides/access-systems/user-management/assigning-users-to-access-groups.md)
6. Learn about available entrances.
   * [Retrieving Entrance Details](../../capability-guides/access-systems/retrieving-entrance-details.md)
7. Create credentials for ACS users.
   * [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
8. See the Seam [Access Control Systems API reference](../../api/acs/).
