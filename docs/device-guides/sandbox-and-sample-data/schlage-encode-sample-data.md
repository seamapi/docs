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

<table><thead><tr><th width="150">user_id</th><th width="213.45238095238096">email</th><th>password</th><th># Locks</th></tr></thead><tbody><tr><td>user_1</td><td>jane@example.com</td><td>1234</td><td>2</td></tr><tr><td>user_2</td><td>john@example.com</td><td>1234</td><td>1</td></tr><tr><td>user_3</td><td>kanye@example.com</td><td>1234</td><td>0</td></tr></tbody></table>

### Locks

| lock\_id | Owned By | Initial Status |
| -------- | -------- | -------------- |
| lock\_1  | Jane     | locked         |
| lock\_2  | Jane     | unlocked       |
| lock\_3  | John     | locked         |
