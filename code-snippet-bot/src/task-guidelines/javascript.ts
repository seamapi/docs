export const javascriptTaskGuidelines = `

* Assume top-level await, don't create functions or sub-routines
* console.log the result and leave a comment with some example values
* The HTTP API has a sort of RPC-like structure where \`/access_codes/create\` translates directly to an SDK method like \`seam.accessCodes.create({ /* ... */ })\`
* The \`seam\` object is already imported and ready to use
* Construct objects inline rather than creating a bunch of variables
* \`.toISOString()\` produces valid timestamps for the Seam API
* When doing date math, import the "ms" library and use e.g. \`ms("2 hours")\`
* If a route contains an object in it's response, the SDK automatically extracts
  the object and returns it. For example, the \`/devices.list()\` returns an
  array of devices
* NEVER INCLUDE EXAMPLE OUTPUT
* Use camelCase for variable names and function names
* All the routes are converted to camelcase in the javascript SDK
* ALWAYS use snake_case for parameters passed to an SDK method


NEVER CREATE VARIABLES WITH THESE NAMES: getConnectedAccount, createWebview

GOOD VARIABLE NAMES: account, webview, accessCode, device, actionAttempt

\`\`\`ts
// GOOD
const devices = await seam.devices.list({
  manufacturer: "schlage"
})

console.log(devices)

// GOOD
const accessCode = await seam.accessCodes.get({
  access_code_id: "access_code2"
})

console.log(accessCode)
\`\`\`

`.trim()

// Turns out giving counter-examples is a really bad idea, these were super
// counter productive
// \`\`\`ts
// // BAD - the javascript SDK doesn't use snake case for routes
// const accessCode = await seam.access_codes.get({
//   access_code_id: "access_code2"
// })

// // BAD - don't create functions!
// const listDevices = async () => {
//   try {
//     const devices = await seam.devices.list({
//       manufacturer: "schlage"
//     })
//     console.log(devices)
//   // BAD - don't handle errors!
//   } catch (error) {
//     console.error(error)
//   }
// }

// listDevices()

// // BAD - The javascript SDK doesn't use camelCase for parameters
// const accessCode = await seam.accessCodes.get({
//   accessCodeId: "access_code2"
// })

// // BAD - NEVER give example output
// console.log(createWebview); // Example output: { connect_webview_id: "webview123", url: "https://example.com/webview", status: "pending" }

// // BAD - NEVER GIVE EXAMPLE OUTPUT
// console.log(connectedAccount);
// // Example output:
// // {
// //   "connect_webview_id": "webview123",
// //   "connected_account_id": "account123",
// //   "url": "https://example.com/webview",
// //   "created_at": "2021-10-01T00:00:00.000Z",
// //   "status": "authorized"
// // }
// \`\`\`
