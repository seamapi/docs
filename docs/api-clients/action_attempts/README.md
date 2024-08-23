# Action Attempt

## The Action Attempt Object

| **`action_attempt_id`** | uuid   | ID of the Action Attempt                                    |
| ----------------------- | ------ | ----------------------------------------------------------- |
| **`action_type`**       | string | [See table below](./#action-types) for list of action types |
| **`status`**            | string | `pending` or `success` or `error`                           |
| **`result`**            | object | Response data from the action                               |
| **`error`**             | object | Error data from the action                                  |

### Action Types

| `CREATE_ACCESS_CODE`     | [Creates an Access Code](../access-codes/#create-an-access-code) for a keypad lock                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DELETE_ACCESS_CODE`     | [Deletes an Access Code](../access-codes/#delete-an-access-code) for a keypad lock                                                                       |
| `LOCK_DOOR`              | [Locks a Door Lock](../locks/#lock-door) for a door lock                                                                                                 |
| `UNLOCK_DOOR`            | [Unlocks a Door Lock](../locks/#unlock-door) for a door lock                                                                                             |
| `CREATE_NOISE_THRESHOLD` | [Creates a Noise Threshold](https://github.com/seamapi/api-docs/blob/main/docs/api-clients/action-attempt/broken-reference/README.md) for a noise sensor |
| `REMOVE_NOISE_THRESHOLD` | [Removes a Noise Threshold](https://github.com/seamapi/api-docs/blob/main/docs/api-clients/action-attempt/broken-reference/README.md) for a noise sensor |

### List of Methods

<table data-header-hidden><thead><tr><th width="312"></th><th></th></tr></thead><tbody><tr><td><a href="get-action-attempt.md">Get Action Attempt</a></td><td>Get Action Attempt</td></tr></tbody></table>
