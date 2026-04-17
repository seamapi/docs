# Brivo Access Setup Guide

## Steps to onboard your Brivo devices:

1. Obtain a Brivo API key at the correct API tier for your property
2. Onboard your Brivo devices through Connect Webview

### Step 1 - Obtain a Brivo API Key

Activating the Brivo API service requires the following steps:

1. Submit the **Brivo API Account Access Agreement**
   1.  Submit the [**Brivo API Account Access Agreement**](https://support.brivo.com/s/article/Brivo-API-Account-Access-Agreement-v13-fillable?language=en_US) to your authorized Brivo Dealer.

       When completing this form, supply the following information:

       1. In the **Which solution(s) will be using the API?** field, type `Seam`.
       2.  In the **If applicable, please provide the Developer Account Username** field, type `seamapi`.\
           <br>

           <figure><img src="../../.gitbook/assets/brivo username.png" alt=""><figcaption></figcaption></figure>
       3.  Select the correct API Tier depending on how many devices you have. We suggest up to 20-devices per 100k API calls.

           1. **Up to 20 Devices -** B-OA-API-TX0 = Tier 0: 100k API Calls Per 30 Days
           2. **20 to 100 Devices -** B-OA-API-TX1 = Tier 1: 500k API Calls Per 30 Days
           3. **100 to 200 Devices -** B-OA-API-TX2 = Tier 2: 1MM API Calls Per 30 Days
           4. **200 to 400 Devices -** B-OA-API-TX3 = Tier 3: 2MM API Calls Per 30 Days

           ![image.png](<../../.gitbook/assets/brivo api tier.png>)
2. Your Brivo Dealer executes Part Two of the authorization agreement.
3. Brivo enables the API feature on your account upon execution of Part One and Part Two.
4. Brivo then provides the API key to you securely which will be used in the next Connect Webview step. This is a manual process on Brivo’s end. You can contact their customer service if you have not received your API key in a timely manner at [api@brivo.com](mailto:api@brivo.com)

### Step 2 - Connect Webview Instructions

1. Click the **“Add Device”** button to launch a new Connect Webview
2.  Select **“Brivo”** within the list of available providers (your list might look slightly different)

    ![image.png](<../../.gitbook/assets/brivo device brand.webp>)
3.  Enter your Brivo API Key you obtained in **Step 1** and click “submit”

    ![image.png](<../../.gitbook/assets/brivo api key.webp>)
4.  You will be prompted to login with an Admin ID and a password.

    ![image.png](<../../.gitbook/assets/brivo login.png>)

    * Your Admin ID is **NOT** the same as your Brivo Access username.
    * Your Admin ID can be found by logging into your Brivo Access account and clicking the account icon in the top right corner. Your Admin ID will be listed under the account’s email address (see example below).
    * Your password is the **same** password used to login to your Brivo Access account.
