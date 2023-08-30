# What is an Action Attempt, when is it used?

An `action_attempt` is used any time Seam is requested to take an action that could asynchronously fail and there's not a resource lifecycle to represent the failure. Generally, you can think of action attempts being used for _imperative actions_ against devices.

For example, if you request that a lock be unlocked Seam will return an Action Attempt:

```
seam.locks.unlock_door(device_id="...")

# ActionAttempt(
#   status="pending",
#   action_type="UNLOCK_DOOR"
# )
```

Action attempts aren't used where a resource lifecycle better represents the failure, for example...

```
seam.access_codes.create(code="1234", device_id="...")

# AccessCode(
#   status="creating"
#   ...
# )
```
