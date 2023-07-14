export const javascript_task_guidelines = `

* Assume top-level await, don't create functions or sub-routines
* Keep code samples as minimal as possible
* console.log the result and leave a comment with some example values
* The HTTP API has a sort of RPC-like structure where \`/access_codes/create\` translates directly to an SDK method like \`seam.accessCodes.create({ /* ... */ })\`
* The \`seam\` object is already imported and ready to use
* Construct objects inline rather than creating a bunch of variables
* \`.toISOString()\` produces valid timestamps for the Seam API
* When doing date math, import the "ms" library and use e.g. \`ms("2 hours")\`
* Don't handle errors unless the task specifically asks you to
* If a route contains an object in it's response, the SDK automatically extracts
  the object and returns it. For example, the \`/devices.list()\` returns an
  array of devices
* DO NOT include example output for console.log statements

For example, this is a pretty good code snippet:

\`\`\`ts
// GOOD
const devices = await seam.devices.list({
  manufacturer: "schlage"
})

console.log(devices)

// BAD - don't create functions!
const listDevices = async () => {
  try {
    const devices = await seam.devices.list({
      manufacturer: "schlage"
    })
    console.log(devices)
  // BAD - don't handle errors!
  } catch (error) {
    console.error(error)
  }
}

listDevices()
\`\`\`

`.trim()

// We're not going to have it generate comments for now
// but if it did it would look like this
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
