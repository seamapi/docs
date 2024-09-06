# Action Attempt

## The Action Attempt Object

| **`action_attempt_id`** | uuid   | ID of the Action Attempt                                                     |
| ----------------------- | ------ | ---------------------------------------------------------------------------- |
| **`action_type`**       | string | [See table below](action\_attempts.md#action-types) for list of action types |
| **`status`**            | string | `pending` or `success` or `error`                                            |
| **`result`**            | object | Response data from the action                                                |
| **`error`**             | object | Error data from the action                                                   |

### Action Types

| `CREATE_ACCESS_CODE`     | [Creates an Access Code](../api-clients/access\_codes/create/) for a keypad lock                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DELETE_ACCESS_CODE`     | [Deletes an Access Code](../api-clients/access\_codes/delete/) for a keypad lock                                                                         |
| `LOCK_DOOR`              | [Locks a Door Lock](../api-clients/locks/lock\_door/) for a door lock                                                                                    |
| `UNLOCK_DOOR`            | [Unlocks a Door Lock](../api-clients/locks/unlock\_door/) for a door lock                                                                                |
| `CREATE_NOISE_THRESHOLD` | [Creates a Noise Threshold](https://github.com/seamapi/api-docs/blob/main/docs/api-clients/action-attempt/broken-reference/README.md) for a noise sensor |
| `REMOVE_NOISE_THRESHOLD` | [Removes a Noise Threshold](https://github.com/seamapi/api-docs/blob/main/docs/api-clients/action-attempt/broken-reference/README.md) for a noise sensor |

### List of Methods

<table data-header-hidden><thead><tr><th width="312"></th><th></th></tr></thead><tbody><tr><td><a href="../api-clients/action-attempt/get.md">Get Action Attempt</a></td><td>Get Action Attempt</td></tr></tbody></table>
