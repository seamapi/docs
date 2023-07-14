export const javascript_task_guidelines = `

* Assume top-level await, don't create functions or sub-routines
* Keep code samples as minimal as possible
* console.log the result and leave a comment with some example values

For example, this is a pretty good code snippet:

\`\`\`ts
const devices = await seam.devices.list()

console.log(devices)
/*
[
  {
    device_id: "1234",
    device_type: "august_lock",
    capabilities_supported: ["lock", "unlock"],
    properties: {
      online: true,
      name: "Front Door",
      model: {
        display_name: "August Smart Lock Pro",
      },
    },
    location: {
      latitude: 37.7749,
      longitude: 122.4194,
    },
    connected_account_id: "5678",
    workspace_id: "9012",
    errors: [],
    warnings: [],
    created_at: "2021-01-01T00:00:00.000Z",
    is_managed: true,
  },
  // ...
]
*/
\`\`\`

`.trim()
