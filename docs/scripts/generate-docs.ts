const fs = require('fs');
const ejs = require('ejs');

const data = {
    objectName: 'ClientSession',
    objectDescription: 'This object represents a client session in the system, including its properties and associated methods.',
    properties: [
      { name: 'workspace_id', type: 'string', required: true, description: 'ID of the workspace that contains the client session' },
      { name: 'client_session_id', type: 'string', required: true, description: 'ID of the client session' },
      { name: 'token', type: 'string', required: true, description: 'Client session token associated with the client session' },
      { name: 'user_identifier_key', type: 'string', required: false, description: 'Your own internal user ID for the user' },
      { name: 'created_at', type: 'string', required: true, description: 'Date and time at which the client session was created' },
      { name: 'device_count', type: 'number', required: false, description: 'Number of devices to which the client session grants access' },
      { name: 'connected_account_ids', type: 'array', required: false, description: 'Array of connected account IDs associated with this client session' },
      { name: 'connect_webview_ids', type: 'array', required: false, description: 'Array of Connect Webview IDs associated with the client session' },
      { name: 'user_identity_ids', type: 'array', required: false, description: 'Array of user identity IDs on behalf of which the client session may act' },
    ],
    methods: [
      {
        methodName: 'getClientSession',
        description: 'Retrieve the details of a specific client session.',
        parameters: [
          { name: 'client_session_id', type: 'string', required: true, description: 'ID of the client session to retrieve' },
          { name: 'user_identifier_key', type: 'string', required: false, description: 'Your own internal user ID for the user associated with the client session to retrieve' },
        ],
        responseProperties: [
          { name: 'workspace_id', type: 'string', description: 'ID of the workspace that contains the client session' },
          { name: 'token', type: 'string', description: 'Client session token associated with the client session' },
          { name: 'user_identifier_key', type: 'string', description: 'Your own internal user ID for the user' },
          { name: 'created_at', type: 'string', description: 'Date and time at which the client session was created' },
          { name: 'client_session_id', type: 'string', description: 'ID of the client session' },
          { name: 'device_count', type: 'number', description: 'Number of devices to which the client session grants access' },
          { name: 'connected_account_ids', type: 'array', description: 'Array of connected account IDs associated with this client session' },
          { name: 'connect_webview_ids', type: 'array', description: 'Array of Connect Webview IDs associated with the client session' },
          { name: 'user_identity_ids', type: 'array', description: 'Array of user identity IDs on behalf of which the client session may act' },
        ],
        sampleRequest: `fetch('/api/client_sessions/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_session_id: 'c75d4330-ae01-4dfd-b6c5-f3e94e0d8168',
    }),
  })`,
        sampleResponse: `{
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "token": "seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp",
    "user_identifier_key": "internal user ID 1",
    "created_at": "2023-12-26T04:23:46.829Z",
    "client_session_id": "c75d4330-ae01-4dfd-b6c5-f3e94e0d8168",
    "device_count": 4,
    "connected_account_ids": [
      "3ea0b67f-649f-4131-bfe3-f2035e77a3f9",
      "6e1cad57-b244-40ca-b4f3-30a46c8000d4"
    ],
    "connect_webview_ids": [],
    "user_identity_ids": []
  }`,
      },
      {
        methodName: 'createClientSession',
        description: 'Create a new client session.',
        parameters: [
          { name: 'workspace_id', type: 'string', required: true, description: 'ID of the workspace in which to create the client session' },
          { name: 'user_identifier_key', type: 'string', required: true, description: 'Your own internal user ID for the user associated with the client session' },
        ],
        responseProperties: [
          { name: 'workspace_id', type: 'string', description: 'ID of the workspace that contains the client session' },
          { name: 'client_session_id', type: 'string', description: 'ID of the newly created client session' },
          { name: 'token', type: 'string', description: 'Client session token associated with the newly created client session' },
          { name: 'created_at', type: 'string', description: 'Date and time at which the client session was created' },
        ],
        sampleRequest: `fetch('/api/client_sessions/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
      user_identifier_key: 'internal user ID 2',
    }),
  })`,
        sampleResponse: `{
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "client_session_id": "d75d4330-ae01-4dfd-b6c5-f3e94e0d8169",
    "token": "seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp",
    "created_at": "2023-12-27T04:23:46.829Z"
  }`,
      },
    ],
  };
  
  // EJS template
  const templateSource = `
  ## <%= objectName %>
  
  **Description**: <%= objectDescription %>
  
  ### Properties
  
  | Property | Type | Required | Description |
  |----------|------|----------|-------------|
  <% properties.forEach(function(prop) { %>
  | <%= prop.name %> | <%= prop.type %> | <%= prop.required ? 'Yes' : 'No' %> | <%= prop.description %> |
  <% }); %>
  
  ### Methods
  
  <% methods.forEach(function(method) { %>
  #### <%= method.methodName %>
  
  **Description**: <%= method.description %>
  
  **Request Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  <% method.parameters.forEach(function(param) { %>
  | <%= param.name %> | <%= param.type %> | <%= param.required ? 'Yes' : 'No' %> | <%= param.description %> |
  <% }); %>
  
  **Response Properties**:
  | Property | Type | Description |
  |----------|------|-------------|
  <% method.responseProperties.forEach(function(resp) { %>
  | <%= resp.name %> | <%= resp.type %> | <%= resp.description %> |
  <% }); %>
  
  **Sample Request**:
  \`\`\`javascript
  <%= method.sampleRequest %>
  \`\`\`
  
  **Sample Response**:
  \`\`\`json
  <%= method.sampleResponse %>
  \`\`\`
  
  <% }); %>
  `;
  
// Render the template
const markdownContent = ejs.render(templateSource, data)

// Write the content to a .md file
fs.writeFileSync("output.md", markdownContent, "utf8")

console.log("Markdown file generated successfully.")
