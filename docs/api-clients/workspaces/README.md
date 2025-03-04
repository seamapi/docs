---
description: >-
  A workspace is a top-level entity that encompasses all other resources below
  it, such as devices, connected accounts, and connect webviews.
---

# Workspaces

## The Workspace Object

| **`workspace_id`** | uuid    | ID of the Workspace                                  |
| ------------------ | ------- | ---------------------------------------------------- |
| **`name`**         | string  | Name of the Workspace                                |
| **`is_sandbox`**   | boolean | Whether this workspace is a Test Sandbox environment |

### List of Methods

| [Get Workspace](get.md)     | Get all workspaces connected to account |
| ------------------------------------- | --------------------------------------- |
| [Reset Workspace](workspaces/reset_sandbox.md) | Reset the sandbox on this workspace     |
