#!/usr/bin/env node

import { Seam } from "seam"

// const seam = new Seam({
//   endpoint: `https://r${Math.random()
//     .toString(16)
//     .slice(2)}.fakeseamconnect.seam.vc`,
//   apiKey: "seam_apikey1_token",
// })

const seam = new Seam({
  apiKey: "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy",
})

// console.log(await seam.devices.list())

// console.log(await seam.connectedAccounts.list({
//   // custom_metadata_has: {
//   //   "internal_account_id": "user-1"
//   // }
// }));

// console.log(await seam.devices.list({
//   // custom_metadata_has: {
//   //   "internal_account_id": "user-1"
//   // }
// }));

// console.log(await seam.devices.listDeviceProviders({provider_category: "stable"}))

// console.log(await seam.connectedAccounts.delete({connected_account_id: "6e1cad57-b244-40ca-b4f3-30a46c8000d4"}))

// console.log(await seam.devices.get({device_id: "70ea1ecb-902c-48e6-962e-532e59db46d5"}))
// const devices = await seam.devices.list({device_type: "honeywell_thermostat"})
// console.log(devices[0])
const devices = await seam.devices.list({device_type: "nest_thermostat"})
console.log(devices[0])
