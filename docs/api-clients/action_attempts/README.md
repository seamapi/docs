# Action Attempts

## The Action Attempt Object

| **`action_attempt_id`** | uuid   | ID of the Action Attempt                                    |
| ----------------------- | ------ | ----------------------------------------------------------- |
| **`action_type`**       | string | [See table below](./#action-types) for list of action types |
| **`status`**            | string | `pending` or `success` or `error`                           |
| **`result`**            | object | Response data from the action                               |
| **`error`**             | object | Error data from the action                                  |

### Action Types

| `CREATE_ACCESS_CODE`     | [Creates an Access Code](../../api/access_codes/create.md) for a keypad lock                |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| `DELETE_ACCESS_CODE`     | [Deletes an Access Code](../../api/access_codes/delete.md) for a keypad lock                |
| `LOCK_DOOR`              | [Locks a Door Lock](../locks/lock_door.md) for a door lock                                  |
| `UNLOCK_DOOR`            | [Unlocks a Door Lock](../locks/unlock_door.md) for a door lock                              |
| `CREATE_NOISE_THRESHOLD` | [Creates a Noise Threshold](../noise_sensors/noise_thresholds/create.md) for a noise sensor |
| `REMOVE_NOISE_THRESHOLD` | [Removes a Noise Threshold](../noise_sensors/noise_thresholds/delete.md) for a noise sensor |

### List of Methods

<table data-header-hidden><thead><tr><th width="312"></th><th></th></tr></thead><tbody><tr><td><a href="get.md">Get Action Attempt</a></td><td>Get Action Attempt</td></tr></tbody></table>
