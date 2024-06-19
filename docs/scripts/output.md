
  ## ClientSession
  
  **Description**: This object represents a client session in the system, including its properties and associated methods.
  
  ### Properties
  
  | Property | Type | Required | Description |
  |----------|------|----------|-------------|
  
  | workspace_id | string | Yes | ID of the workspace that contains the client session |
  
  | client_session_id | string | Yes | ID of the client session |
  
  | token | string | Yes | Client session token associated with the client session |
  
  | user_identifier_key | string | No | Your own internal user ID for the user |
  
  | created_at | string | Yes | Date and time at which the client session was created |
  
  | device_count | number | No | Number of devices to which the client session grants access |
  
  | connected_account_ids | array | No | Array of connected account IDs associated with this client session |
  
  | connect_webview_ids | array | No | Array of Connect Webview IDs associated with the client session |
  
  | user_identity_ids | array | No | Array of user identity IDs on behalf of which the client session may act |
  
  
  ### Methods
  
  
  #### getClientSession
  
  **Description**: Retrieve the details of a specific client session.
  
  **Request Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  
  | client_session_id | string | Yes | ID of the client session to retrieve |
  
  | user_identifier_key | string | No | Your own internal user ID for the user associated with the client session to retrieve |
  
  
  **Response Properties**:
  | Property | Type | Description |
  |----------|------|-------------|
  
  | workspace_id | string | ID of the workspace that contains the client session |
  
  | token | string | Client session token associated with the client session |
  
  | user_identifier_key | string | Your own internal user ID for the user |
  
  | created_at | string | Date and time at which the client session was created |
  
  | client_session_id | string | ID of the client session |
  
  | device_count | number | Number of devices to which the client session grants access |
  
  | connected_account_ids | array | Array of connected account IDs associated with this client session |
  
  | connect_webview_ids | array | Array of Connect Webview IDs associated with the client session |
  
  | user_identity_ids | array | Array of user identity IDs on behalf of which the client session may act |
  
  
  **Sample Request**:
  ```javascript
  fetch(&#39;/api/client_sessions/get&#39;, {
    method: &#39;POST&#39;,
    headers: {
      &#39;Content-Type&#39;: &#39;application/json&#39;,
    },
    body: JSON.stringify({
      client_session_id: &#39;c75d4330-ae01-4dfd-b6c5-f3e94e0d8168&#39;,
    }),
  })
  ```
  
  **Sample Response**:
  ```json
  {
    &#34;workspace_id&#34;: &#34;398d80b7-3f96-47c2-b85a-6f8ba21d07be&#34;,
    &#34;token&#34;: &#34;seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp&#34;,
    &#34;user_identifier_key&#34;: &#34;internal user ID 1&#34;,
    &#34;created_at&#34;: &#34;2023-12-26T04:23:46.829Z&#34;,
    &#34;client_session_id&#34;: &#34;c75d4330-ae01-4dfd-b6c5-f3e94e0d8168&#34;,
    &#34;device_count&#34;: 4,
    &#34;connected_account_ids&#34;: [
      &#34;3ea0b67f-649f-4131-bfe3-f2035e77a3f9&#34;,
      &#34;6e1cad57-b244-40ca-b4f3-30a46c8000d4&#34;
    ],
    &#34;connect_webview_ids&#34;: [],
    &#34;user_identity_ids&#34;: []
  }
  ```
  
  
  #### createClientSession
  
  **Description**: Create a new client session.
  
  **Request Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  
  | workspace_id | string | Yes | ID of the workspace in which to create the client session |
  
  | user_identifier_key | string | Yes | Your own internal user ID for the user associated with the client session |
  
  
  **Response Properties**:
  | Property | Type | Description |
  |----------|------|-------------|
  
  | workspace_id | string | ID of the workspace that contains the client session |
  
  | client_session_id | string | ID of the newly created client session |
  
  | token | string | Client session token associated with the newly created client session |
  
  | created_at | string | Date and time at which the client session was created |
  
  
  **Sample Request**:
  ```javascript
  fetch(&#39;/api/client_sessions/create&#39;, {
    method: &#39;POST&#39;,
    headers: {
      &#39;Content-Type&#39;: &#39;application/json&#39;,
    },
    body: JSON.stringify({
      workspace_id: &#39;398d80b7-3f96-47c2-b85a-6f8ba21d07be&#39;,
      user_identifier_key: &#39;internal user ID 2&#39;,
    }),
  })
  ```
  
  **Sample Response**:
  ```json
  {
    &#34;workspace_id&#34;: &#34;398d80b7-3f96-47c2-b85a-6f8ba21d07be&#34;,
    &#34;client_session_id&#34;: &#34;d75d4330-ae01-4dfd-b6c5-f3e94e0d8169&#34;,
    &#34;token&#34;: &#34;seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp&#34;,
    &#34;created_at&#34;: &#34;2023-12-27T04:23:46.829Z&#34;
  }
  ```
  
  
  