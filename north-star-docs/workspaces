
# Workspace

## Overview

The top-level resource in Seam is a workspace. All other resources, such as Devices, Connected Accounts, and Settings, are organized under workspaces. When you sign up for Seam, we create two workspaces for you:

* Sandbox: This is a special type of workspace. It contains simulated devices, handy for testing your code without needing real devices.

* Production: This is for when you're ready to control real devices!

Of course, you are not limited to these two. You can create as many workspaces as you need.

## Basic Implementation

### Create a new Sandbox

If you find that the existing sandbox and production workspaces do not meet your needs, you can create a new workspace. Go to the Seam Dashboard and click on the workspace switch, which will bring up a dropdown menu with the option to create a new workspace. Enter the desired name for the workspace and your company information, and specify whether it is a sandbox workspace or not.

### Sandbox Workspaces

Sandbox workspaces are for you to test your code. We seed each Sandbox with simulated devices and user accounts that own them.

These simulated devices behave like their real counterparts. This lets you test your application against multiple device brands, **without needing to actually own each device!**

Check the credentials to each account on https://docs.seam.co/latest/device-guides/sandbox-and-sample-data

### Api Keys

In order to request access to a device within a workspace, an API key specific to that workspace is required. Each workspace can have multiple API keys, but a key cannot be used across different workspaces.

To manage API keys for a workspace, navigate to the Seam dashboard and select the appropriate workspace. From there, go to the API key tab, where you can create or edit keys according to your needs.

### Workspace Team

Through the Seam Dashboard, your team can easily collaborate to manage a workspace and its resources.

To manage your team, navigate to the Seam dashboard and select the appropriate workspace. From there, go to the Team tab to invite new members or remove existing ones. It's important to note that a member will only appear on the list once they have accepted your invitation.

### Resetting Sandboxes

You can always reset a sandbox workspace to return it to its starting state. This is handy if you need to run continuous integration! We are also working on letting you edit the initial seed state.

## Advanced Implementation(s)

N/A

## Troubleshooting Steps

### Should a PMS (Property Management Software) be creating a new workspace for each customer?

NO, Instead, you should create one workspace for your application, and keep track of which host has linked which connected accounts

## Configuring features via the Console

Workspaces are managed via the console only.

## How would a user incorporate this feature into their Dashboard?

N/A

## Suggested Improvements

- [ ] https://docs.seam.co/latest/device-guides/sandbox-and-sample-data, is missing some providers, and the sample data is in an even worst state, we should generate it from code somehow 
