---
description:
Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).

To filter the list of returned access control systems by a specific connected account ID, include the 
`connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the 
response includes all access control systems connected to your workspace.
---

# acsSystemsListPost

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).

To filter the list of returned access control systems by a specific connected account ID, include the
`connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the
response includes all access control systems connected to your workspace.

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/systems/list"
method="POST" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %} ## Request Not enough data ### Request Body Parameters

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
        <td colspan='3'>No parameters available.</td>
      </tr>
  </tbody>
</table>

### Sample Request

<!-- prettier-ignore -->
{% tabs %}
    <!-- prettier-ignore -->
    {% tab title="javascript" %} ```javascript
    await seam.acs.systems.list({&quot;connected_account_id&quot;:&quot;8d7e0b3a-b889-49a7-9164-4b71a0506a33&quot;})
    ``` {% endtab %}
    <!-- prettier-ignore -->
    {% tab title="python" %} ```python
    seam.acs.systems.list(connected_account_id&#x3D;&quot;8d7e0b3a-b889-49a7-9164-4b71a0506a33&quot;)
    ``` {% endtab %}
{% endtabs %} ## Response

OK

### Response Properties

<table>
  <thead>
    <tr>
      <th width='310'>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td colspan='2'>No properties available.</td>
      </tr>
  </tbody>
</table>

### Sample Response

<!-- prettier-ignore -->
{% tabs %}
    <!-- prettier-ignore -->
    {% tab title="javascript" %} ```javascript
    void
    ``` {% endtab %}
    <!-- prettier-ignore -->
    {% tab title="python" %} ```python
    None
    ``` {% endtab %}
{% endtabs %}
