---
description: >-
  Seam uses the personal access token (PAT) to connect to and operate your
  SmartThings devices.
---

# Generating a SmartThings personal access token

For each of the SmartThings accounts you want to connect with Seam, you need to generate a PAT and provide the PAT to Seam.

## Instructions for generating a PAT

1. Log into the [personal access tokens page](https://account.smartthings.com/tokens) and click "[**Generate new token".**](https://account.smartthings.com/tokens/new)
2. Enter a token name (can be whatever you want), for example, _"Seam Integration"_ and select the following authorized scopes:
   * Devices (all)
   * Installed Applications (all)
   * Apps (all)
   * Locations (all)
   * Scenes (all)
   * Schedules (all)
3. Click "**Generate token**". When the token is displayed, copy and save it somewhere safe as you will not be able to retrieve it again.

## Uploading the PAT to Seam

Go to the Connect Webview, select "SmartThings" as the brand of lock you want to connect, and follow the on-screen instructions to submit your PAT.
