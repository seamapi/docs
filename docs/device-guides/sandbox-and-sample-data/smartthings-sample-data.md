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

<table><thead><tr><th width="150">user_id</th><th width="213.45238095238096">email</th><th>password</th><th># Locks</th></tr></thead><tbody><tr><td>user_1</td><td>jane@example.com</td><td>1234</td><td>1</td></tr></tbody></table>

### Locks

| lock\_id                               | Owned By | Initial Status |
| -------------------------------------- | -------- | -------------- |
| `790ba079-bd09-4087-9225-e2c722972b0e` | Jane     | unlocked       |
