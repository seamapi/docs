# Schlage Encode Sample Data

### JSON Representation

```json
{
    "users": [
        {
            "user_id": "user_1",
            "email": "jane@example.com",
            "password": "1234"
        },
        {
            "user_id": "user_2",
            "email": "john@example.com",
            "password": "1234"
        },
        {
            "user_id": "user_3",
            "email": "kanye@example.com",
            "password": "1234"
        }
    ],
    "locks": [
        {
            "user_id": "user_1",
            "lock_id": "lock_1",
            "status": "locked"
        },
        {
            "user_id": "user_1",
            "lock_id": "lock_2",
            "status": "unlocked"
        },
        {
            "user_id": "user_2",
            "lock_id": "lock_3",
            "status": "locked"
        }
    ]
}
```

### Users

| user\_id | email             | password | # Locks |
| -------- | ----------------- | -------- | ------- |
| user\_1  | jane@example.com  | 1234     | 2       |
| user\_2  | john@example.com  | 1234     | 1       |
| user\_3  | kanye@example.com | 1234     | 0       |

### Locks

| lock\_id | Owned By | Initial Status |
| -------- | -------- | -------------- |
| lock\_1  | Jane     | locked         |
| lock\_2  | Jane     | unlocked       |
| lock\_3  | John     | locked         |
