---
description: Learn how to set up a Visionline user account to integrate with Seam.
---

# Step 6: Configure a Visionline User Account

Make sure that your Visionline application is configured with an appropriate user account. You use this account to connect the Visionline instance with Seam. You can use the default `sym` username and password.

Alternately, the Visionline ACS administrator can create a Visionline user specifically for the connection with Seam. This user must be configured as an operator that uses the System Manager operator template. This user must also have a password.

To create a new Visionline user for the Seam connection, first create a new user. Then, configure the user as an operator that uses the System Manager operator template.

{% hint style="info" %}
These instructions use Visionline 1.27. If you are using Visionline 1.28, you may notice differences in a few field names.
{% endhint %}

1. Log in to the Visionline application as a user with System Manager access.
2.  Create a new Visionline user.&#x20;

    1. At the bottom of the left navigation pane, click **Lists**.
    2. In the **System administration** section of the left navigation pane, double-click **Users**.
    3. In the **Users** window, click **Add**.
    4. In the **User details** window, type a **User ID** for the new user, for example, `Seam Integration`.
    5. Type the **Last name** of the user, for example, `Integration`.
    6. Type the **First name** of the user, for example, `Seam`.
    7. Select the **User group** to which to assign the user.
    8. Optionally, in the **PIN** field, type a PIN for the user.
    9. If you've added a PIN, in the **Confirm PIN** field, type the same PIN for the user.
    10. Click **Save**.
    11. In the **User details** dialog, click **Close**.
    12. In the **Users** window, click **Close**.

    <figure><img src="../../../../../.gitbook/assets/visionline-add-user.png" alt="Add a Visionline user for the connection with Seam."><figcaption><p>Add a Visionline user for the connection with Seam.</p></figcaption></figure>
3.  Configure the new user as an operator that uses the System Manager operator template.

    1. At the bottom of the left navigation pane, click **Lists**.
    2. In the **System access** section of the left navigation pane, double-click **Operators**.
    3. In the **Operators** window, click **Add**.
    4. In the **Operator details** dialog, click **...** next to the **User name** field.
    5. In the **Users \<Operator details>** window, select the user that you created and then click **Select**.
    6. In the **Operator details** dialog, select **System Manager** as the **Operator template**.\
       Alternately, you can create a new operator template for the new user, but you must make sure that this operator template has access to all permissions.
    7. In the **Password** and **Confirm Password** fields, type a password for the user.
    8. Click **Save**.
    9. In the **Operator details** dialog, click **Close**.
    10. In the **Operators** window, click **Close**.

    <figure><img src="../../../../../.gitbook/assets/visionline-add-operator.png" alt="Configure the new user as an operator with the System Manager operator template."><figcaption><p>Configure the new user as an operator with the System Manager operator template.</p></figcaption></figure>
4. Note the username and password for this Visionline user. You must use these credentials when you [connect your Visionline account to Seam](../../../../assa-abloy-visionline-access-control-system-in-development/visionline-acs-setup-instructions/developing-and-launching-your-visionline-mobile-key-app/launching-your-visionline-mobile-key-app/step-9-connect-your-visionline-production-account-to-seam.md).
