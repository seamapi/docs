# Managing mobile app user accounts with User Identities

## What is a User Identity?

Seam’s “User Identities” is a feature for tracking and managing user accounts in your application. It assigns unique identifiers to each of your users, enabling you to issue and manage their mobile credentials and access permissions.

<figure><img src="../../.gitbook/assets/identities accounts.png" alt="" width="563"><figcaption><p>Each “User Identity” is mapped to a user account in your application.</p></figcaption></figure>



#### User identities can be connected to users in multiple access control systems

User Identities can be linked to one ACS user in each Access Control System. Any mobile credentials issued to these ACS users will be consolidated under the user identity. Consequently, a user's mobile app account will have access to these credentials via the user identity.

<figure><img src="../../.gitbook/assets/acs identites.png" alt="" width="563"><figcaption><p>A User Identity can be connected to an ACS User in each ACS.</p></figcaption></figure>

***

## Creating a User Identity and associating it with an ACS user

### 1. Create a User Identity

To create a user identity, provide either a unique email (`email`) or user identity key (`user_identity_key`). Optionally, provide their first name (`first_name`) and last name (`last_name`).

```python
seam.user_identities.create(
  email="jane@example.com"
  first_name="Jane"
  last_name="Lee"
)
```

### 2. Assign an ACS User to the User Identity

To link an ACS User with a User Identity, provide the user identity's ID, and the ACS user's ID.

```python
acs_user = acs.user.get(email="jane@example.com")

seam.user_identities.add_acs_user(
  user_identity=user_identity_id,
  acs_user_id=acs_user.acs_user_id
)
```
