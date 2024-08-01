---
description: "Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).

To filter the list of returned access control systems by a specific connected account ID, include the 
`connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the 
response includes all access control systems connected to your workspace."
---

# List ACS Systems

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).

To filter the list of returned access control systems by a specific connected account ID, include the 
`connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the 
response includes all access control systems connected to your workspace.

### Request and Response

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th width='112.33333333333331'>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td><code>connected_account_id</code></td>
        <td>String (UUID)<br /><em>Optional</em></td>
        <td>ID of the connected account by which to filter the list of returned access control systems.</td>
      </tr>
  </tbody>
</table>


<table>
  <thead>
    <tr>
      <th width="310">Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td><code>acs_system_id</code></td>
        <td>ID of the &#x60;acs_system&#x60;.</td>
      </tr>
      <tr>
        <td><code>can_add_acs_users_to_acs_access_groups</code></td>
        <td>Indicates whether the &#x60;acs_system&#x60; supports [adding users to access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).</td>
      </tr>
      <tr>
        <td><code>can_automate_enrollment</code></td>
        <td>Indicates whether it is possible to [launch enrollment automations](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut) for the &#x60;acs_system&#x60;.</td>
      </tr>
      <tr>
        <td><code>can_create_acs_access_groups</code></td>
        <td>Indicates whether the &#x60;acs_system&#x60; supports creating [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).</td>
      </tr>
      <tr>
        <td><code>can_remove_acs_users_from_acs_access_groups</code></td>
        <td>Indicates whether the &#x60;acs_system&#x60; supports [removing users from access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).</td>
      </tr>
      <tr>
        <td><code>connected_account_ids</code></td>
        <td>IDs of the [connected accounts](https://docs.seam.co/latest/core-concepts/connected-accounts) associated with the &#x60;acs_system&#x60;.</td>
      </tr>
      <tr>
        <td><code>created_at</code></td>
        <td>Date and time at which the &#x60;acs_system&#x60; was created.</td>
      </tr>
      <tr>
        <td><code>errors</code></td>
        <td>Errors associated with the &#x60;acs_system&#x60;.</td>
      </tr>
      <tr>
        <td><code>external_type</code></td>
        <td>Brand-specific terminology for the &#x60;acs_system&#x60; type.</td>
      </tr>
      <tr>
        <td><code>external_type_display_name</code></td>
        <td>Display name that corresponds to the brand-specific terminology for the &#x60;acs_system&#x60; type.</td>
      </tr>
      <tr>
        <td><code>image_alt_text</code></td>
        <td>Alternative text for the &#x60;acs_system&#x60; image.</td>
      </tr>
      <tr>
        <td><code>image_url</code></td>
        <td>URL for the image that represents the &#x60;acs_system&#x60;.</td>
      </tr>
      <tr>
        <td><code>name</code></td>
        <td>Name of the &#x60;acs_system&#x60;.</td>
      </tr>
      <tr>
        <td><code>system_type</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>system_type_display_name</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>warnings</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>workspace_id</code></td>
        <td>ID of the [workspace](https://docs.seam.co/latest/core-concepts/workspaces) that contains the &#x60;acs_system&#x60;.</td>
      </tr>
  </tbody>
</table>

## Samples

{% tabs %}
    {% tab title="JavaScript" %}
  ### Request
  ```javascript
  await seam.acs.systems.list({&quot;connected_account_id&quot;:&quot;8d7e0b3a-b889-49a7-9164-4b71a0506a33&quot;})
  ```

  ### Response
  ```javascript
  void
  ```
    {% endtab %}
    {% tab title="Python" %}
  ### Request
  ```python
  seam.acs.systems.list(connected_account_id&#x3D;&quot;8d7e0b3a-b889-49a7-9164-4b71a0506a33&quot;)
  ```

  ### Response
  ```python
  None
  ```
    {% endtab %}
    {% tab title="PHP" %}
  ### Request
  ```php
  $seam-&gt;acs-&gt;systems-&gt;list(connected_account_id:&quot;8d7e0b3a-b889-49a7-9164-4b71a0506a33&quot;)
  ```

  ### Response
  ```php
  void
  ```
    {% endtab %}
{% endtabs %}