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

<pre class="language-python"><code class="lang-python"><strong># Endpoint in Development, Coming Soon!
</strong><strong>
</strong><strong># Deactivating the lost phone
</strong>seam.phones.deactivate(
  phone_id=lost_phone_id
)
</code></pre>

***

## Retrieving phones for a user identity

To retrieve the list of phones that the mobile app user has signed onto their account with, simply use the List Phones endpoint, and include the ID of the user identity ("user\_identity\_id"):

```
# Endpoint in Development, Coming Soon!

seam.phones.list(
  user_identity_id=user_identity.id
)

# [{
#   "phone_id": "xxxx",
#   "user_identity_id": "xxxx",
#   "created_at": "2024-01-01T10:40:00+00:00"
# }]
```

***

## Retrieving a phone by its ID

To retrieve a specific phone, simply use the Get Phone endpoint, and include the ID of the phone ("phone\_id"):

```
# Endpoint in Development, Coming Soon!

seam.phones.get(
  phone_id=phone_id
)

# {
#   "phone_id": "xxxx",
#   "user_identity_id": "xxxx",
#   "created_at": "2024-01-01T10:40:00+00:00"
# }
```
