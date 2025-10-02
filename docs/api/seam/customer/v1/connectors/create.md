# Create Connector

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new connector for a customer in a workspace. The connector will be activated and start syncing data from the external API.


<details>

<summary>Authentication Methods</summary>

- API key

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`config`** *Object* (Required)

Instance-specific configuration for the connector

<details>

<summary><b><code>access_token</code></b> <i>String</i></summary>

</details>

---



<details>

<summary><b><code>client</code></b> <i>String</i></summary>

</details>

---



<details>

<summary><b><code>client_token</code></b> <i>String</i></summary>

</details>

---



<details>

<summary><b><code>enterprise_ids</code></b> <i>List</i></summary>

</details>

---


**`connector_type`** *String* (Required)

Type of connector to create

---

**`customer_key`** *String* (Required)

Key identifying the customer

---


## Response

[unknown](./)

