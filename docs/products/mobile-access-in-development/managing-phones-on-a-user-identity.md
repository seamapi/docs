# Managing phones on a user identity

An app user may have several phones. When they sign into their account on your mobile application, it's important that additional phones also provide access. Seam facilitates this by registering each phone within the user identity, and synchronizing mobile credentials across these phones. Furthermore, Seam provides a feature to deactivate a phone if an app user loses it.

***

## Where an App User signs in on a new phone

When an app user signs into a new phone, Seam can automatically set up the new phone, generate matching credentials, and issue them. To facilitate this, you must [issue a multi-phone sync credential](issuing-mobile-credentials-from-an-access-control-system.md) when creating a mobile credential.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption><p>When a user signs in to a new phone, matching credentials are also issued to the new phone.</p></figcaption></figure>

***

## Where an App User loses a phone

Should an app user lose their phone or want to deactivate it, you can deactivate the phone. Seam will then automatically invalidate the stored credentials on their deactivated phone.

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption><p>When a phone is revoked, all the credentials issued to it will also be revoked.</p></figcaption></figure>

To revoke a phone, provide the phone's ID. When a phone is revoked, all the credentials issued to it will also be revoked. The associated ACS credentials will also be removed from the ACS.

```python
# Deactivating the lost phone
seam.phones.deactivate(
  phone_id=lost_phone_id
)
```
