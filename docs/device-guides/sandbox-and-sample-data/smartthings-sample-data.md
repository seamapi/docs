# SmartThings Sample Data

### JSON Representation

```json
{
    "users": [
        {
            "user_id": "user_1",
            "email": "jane@example.com",
            "password": "1234"
        }
    ],
    "locks": [
        {
            "user_id": "user_1",
            "lock_id": "790ba079-bd09-4087-9225-e2c722972b0e",
            "status": "unlocked"
        }
    ]
}
```

### Users

| user\_id | email            | password | # Locks |
| -------- | ---------------- | -------- | ------- |
| user\_1  | jane@example.com | 1234     | 1       |

### Locks

| lock\_id                               | Owned By | Initial Status |
| -------------------------------------- | -------- | -------------- |
| `790ba079-bd09-4087-9225-e2c722972b0e` | Jane     | unlocked       |
