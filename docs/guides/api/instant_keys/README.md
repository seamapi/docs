# Instant Keys

## The instant_key Object

- [Properties](./#properties)
- [Endpoints](./#endpoints)


Represents a Seam Instant Key. For issuing Bluetooth mobile keys, Instant Keys are the fastest way to share access. With a single API call, you can create a mobile key and send it through text or email or embed it in your own app.

There’s no app to install, nor account to create. Your user just taps a link and gets a lightweight, native-feeling experience using iOS App Clip or Instant Apps on Android. Further, Instant Keys work offline, so even in areas with poor cellular or Wi-Fi, like elevator banks or concrete-walled hallways, the Instant Keys still work.

{% tabs %}
{% tab title="Instant Key" %}

An Instant Key resource.

```json
{
  "client_session_id": "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
  "created_at": "2025-06-14T16:54:17.946559Z",
  "expires_at": "2025-06-16T16:54:17.946559Z",
  "instant_key_id": "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "user_identity_id": "e7a94acb-bd8a-4462-b6fb-8612d35cd7c3",
  "workspace_id": "4d1c24b2-781e-4d1a-8d77-15249ad57c8a"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`client_session_id`** *UUID*

ID of the [client session](../../core-concepts/authentication/client-session-tokens/README.md) associated with the Instant Key.




---

**`created_at`** *Datetime*

Date and time at which the Instant Key was created.




---

**`customization`** *Object*

Customization applied to the Instant Key UI.



<details>
  <summary>Child Properties</summary>

  - <strong><code>logo_url</code></strong> <i>String</i>
  
    URL of the logo displayed on the Instant Key.

  - <strong><code>primary_color</code></strong> <i>String</i>
  
    Primary color used in the Instant Key UI.

  - <strong><code>secondary_color</code></strong> <i>String</i>
  
    Secondary color used in the Instant Key UI.

</details>

---

**`customization_profile_id`** *UUID*

ID of the customization profile associated with the Instant Key.




---

**`expires_at`** *Datetime*

Date and time at which the Instant Key expires.




---

**`instant_key_id`** *UUID*

ID of the Instant Key.




---

**`instant_key_url`** *String*

Shareable URL for the Instant Key. Use the URL to deliver the Instant Key to your user through a link in a text message or email or by embedding it in your web app.




---

**`user_identity_id`** *UUID*

ID of the user identity associated with the Instant Key.




---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the Instant Key.




---

## Endpoints


[**`/instant_keys/delete`**](./delete.md)

Deletes a specified [Instant Key](../../capability-guides/instant-keys/README.md).


[**`/instant_keys/get`**](./get.md)

Gets an [instant key](https://docs.seam.co/latest/capability-guides/mobile-access/instant-keys).


[**`/instant_keys/list`**](./list.md)

Returns a list of all [instant keys](https://docs.seam.co/latest/capability-guides/mobile-access/instant-keys).


