#!/usr/bin/env node

import Seam from "seamapi"

const seam = new Seam({
  // endpoint: `https://connect.getseam.com`,
  apiKey: "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy"
  // apiKey: "seam_test8yup_77ut771wVzFPcfhce9ti5Ccq"
  // apiKey: "seam_test24tc_7Mhe64ZMWJctwRodv8eK3PBJ"
})

// const seam = new Seam({
//   endpoint: `https://connect.getseam.com`,
//   // Specify PAT.
//   apiKey: "seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u",
//   // Specify workspace ID.
//   workspaceId: "98feb997-ff3c-4320-a907-1585108b1c08"
// })

// console.log(await seam.devices.list())
// console.log(await seam.devices.listDeviceProviders({provider_category: "stable"}))
// console.log(await seam.devices.get({device_id: "30fd243b-3054-4384-a713-5487076a3826"}))

// const deviceId = "30fd243b-3054-4384-a713-5487076a3826"
// const deviceUpdate = await seam.devices.update({
//   device_id: deviceId,
//   name: "My Lock"
// })

// console.log(deviceUpdate)

// console.log(await seam.devices.unmanaged.list())
// console.log(await seam.devices.unmanaged.get({device_id: "882dd63f-db9b-4210-bac2-68372aa0aff7"}))

// const deviceId = "882dd63f-db9b-4210-bac2-68372aa0aff7"
// const unmanagedDeviceUpdate = await seam.devices.unmanaged.update({
//   device_id: deviceId,
//   is_managed: true
// })

// console.log(unmanagedDeviceUpdate)


// console.log(await seam.locks.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
// console.log(await seam.locks.get("ed4bb795-f29f-43e5-bc0f-35f69f9141b5"))
// console.log(await seam.locks.lockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
// console.log(await seam.locks.unlockDoor("6aae9d08-fed6-4ca5-8328-e36849ab48fe"))
// console.log(await seam.actionAttempts.get("99537f1c-31c3-43ba-a981-3dd005615b0c"))

// const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

// const createdAccessCode = await seam.accessCodes.create({
//     device_id: deviceId,
//     name: "my ongoing code",
//     code: "1234"
// })

// console.log(createdAccessCode)

// const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

// const createdAccessCode = await seam.accessCodes.create({
//   device_id: deviceId,
//   name: "my time-bound code",
//   starts_at: "2025-01-01T16:00:00Z",
//   ends_at: "2025-01-22T12:00:00Z",
//   code: "2345"
// })

// console.log(createdAccessCode)

//     starts_at: new Date("2025-01-01T16:00:00Z").toISOString(),
//     ends_at: new Date("2025-01-22T12:00:00Z").toISOString()

// console.log(await seam.accessCodes.list({
//   device_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
// }))

// console.log(await seam.accessCodes.list({
//   device_id: "9689dc30-77d8-4728-9968-b3abd0835f47"
// }))


// const accessCodeIds = ['80aa1afa-f0e5-43c2-96ea-6ab141112f9c', 'f4780806-076e-4cec-8081-df0ea2139d5a']
// console.log(await seam.accessCodes.list({
//   access_code_ids: accessCodeIds
// }))

// console.log(await seam.accessCodes.get({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
// }))

// const updatedAccessCode = await seam.accessCodes.update({
//   access_code_id: "80aa1afa-f0e5-43c2-96ea-6ab141112f9c",
//   name: "my updated code name",
//   starts_at: "2025-02-01T16:00:00Z",
//   ends_at: "2025-02-22T12:00:00Z",
//   code: "5432"
// })

// console.log(updatedAccessCode)

// console.log(await seam.accessCodes.get({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
// }))

// const updatedAccessCode = await seam.accessCodes.update({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a",
//   starts_at: "2025-02-01T16:00:00Z",
//   ends_at: "2025-02-22T12:00:00Z"
// })

// console.log(updatedAccessCode)

// const updatedAccessCode = await seam.accessCodes.update({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a",
//   type: "ongoing"
// })

// console.log(updatedAccessCode)

// console.log(await seam.accessCodes.get({
//   access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
// }))

// console.log(await seam.accessCodes.delete({
  // access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
  // access_code_id: "da21c436-82a1-4b29-8077-ada9f9b7c0b0"
// }))

// // confirm that you get a 404
// try {
//   await seam.accessCodes.get({
//     access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
//   })
// } catch(error) {
//     console.log(error)
// }


// console.log(await seam.devices.get({
//   device_id: "ed4bb795-f29f-43e5-bc0f-35f69f9141b5"
// }))

// const device = await seam.devices.get({
//     device_id: "ed4bb795-f29f-43e5-bc0f-35f69f9141b5"
//   })

// console.log(device)
// console.log(device.properties.code_constraints)

// const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

// const createdAccessCode = await seam.accessCodes.create({
//     device_id: deviceId,
//     name: "my ongoing code",
//     allow_external_modification: true
// })

// console.log(createdAccessCode)

// const accessCode = await seam.accessCodes.get({
//   access_code_id: "38a569bb-40b9-4e42-97bd-bb78f8d96777"
// })

// console.log("Errors:")
// console.log(accessCode.errors)
// console.log("Warnings:")
// console.log(accessCode.warnings)

// console.log(await seam.devices.get({
//   device_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
// }))

// const deviceId = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

// const createdAccessCode = await seam.accessCodes.create({
//     device_id: deviceId,
//     name: "my time-bound code",
//     starts_at: "2025-01-01T16:00:00Z",
//     ends_at: "2025-01-22T12:00:00Z",
//     use_backup_access_code_pool: true
// })

// console.log(createdAccessCode)

// const accessCode = await seam.accessCodes.get({
//   access_code_id: "f863cb36-7f96-4b56-ac91-115742c31c00"
// })

// console.log("Is backup access code available: "
//   + accessCode.is_backup_access_code_available)

// const backupAccessCode = await seam.accessCodes.pullBackupAccessCode({
//     access_code_id: "f863cb36-7f96-4b56-ac91-115742c31c00"
// })

// console.log(backupAccessCode)

// console.log(await seam.accessCodes.unmanaged.list({
//   device_id: "374d3ee2-5e5d-4141-b828-6c2fa458212f"
// }))

// console.log(await seam.accessCodes.unmanaged.convertToManaged({
//   access_code_id: "5824d0be-5e96-432e-b3c5-f4c49c07b1ba"
// }))

// console.log(await seam.accessCodes.unmanaged.delete({
//   access_code_id: "5824d0be-5e96-432e-b3c5-f4c49c07b1ba"
// }))

///////////////////////////////////
// Offline Access Codes
///////////////////////////////////

// const lock = await seam.locks.get("ea12f6c6-e63e-447d-856b-ec9e92981000")
// const lock = await seam.locks.get("bc14aaee-f485-470a-9bda-2abbcec2e4a6")
// console.log(lock)
// console.log("\nPredefined time slots:")
// console.log(lock.properties.dormakaba_oracode_metadata.predefined_time_slots)

// const deviceId = "ea12f6c6-e63e-447d-856b-ec9e92981000"
// const deviceId = "bc14aaee-f485-470a-9bda-2abbcec2e4a6"

// const createdAccessCode = await seam.accessCodes.create({
//   device_id: deviceId,
//   name: "my hourly-bound offline code",
//   type: "time_bound",
//   starts_at: "2023-12-22T06:00:00-00:00",
//   ends_at: "2023-12-22T18:00:00-00:00",
//   is_offline_access_code: true,
//   // max_time_rounding: "1h"
// })

// console.log(createdAccessCode)
// console.log(await seam.accessCodes.get({access_code_id: "75187cd8-16b8-4529-ab28-d6d33c6406d6"}))

// const deviceId = "ea12f6c6-e63e-447d-856b-ec9e92981000"

// const createdAccessCode = await seam.accessCodes.create({
//   device_id: deviceId,
//   name: "my daily-bound offline code",
//   starts_at: "2023-12-22T23:00:00-00:00",
//   ends_at: "2023-12-27T22:59:00-00:00",
//   max_time_rounding: "1d",
//   is_offline_access_code: true
// })

// console.log(createdAccessCode)


////////////////////////////////////////////////////////////////////////////

// const heat_request = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     hvac_mode_setting: "heat",
//     heating_set_point_celsius: 20,
//     manual_override_allowed: true
//   }
// })

// console.log(heat_request)

// const heat_request = await seam.thermostats.heat({
//       device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//       heating_set_point_celsius: 20
// })

// console.log(heat_request)


// console.log(await seam.actionAttempts.get("4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"))

// const cool_request = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     hvac_mode_setting: "cool",
//     cooling_set_point_celsius: 25,
//     manual_override_allowed: true
//   }
// })

// console.log(cool_request)

// const cool_request = await seam.thermostats.cool({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   cooling_set_point_celsius: 25
// })

// console.log(cool_request)


// const heat_cool_request = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     hvac_mode_setting: "heat_cool",
//     heating_set_point_celsius: 20,
//     cooling_set_point_celsius: 25,
//     manual_override_allowed: true
//   }
// })

// console.log(heat_cool_request)

// const heat_cool_request = await seam.thermostats.heatCool({
//       device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//       heating_set_point_celsius: 20,
//       cooling_set_point_celsius: 25,
// })

// console.log(heat_cool_request)


// const off_request = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     hvac_mode_setting: "off",
//     manual_override_allowed: true
//   }
// })

// console.log(off_request)

// const off_request = await seam.thermostats.off({
//       device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
// })

// console.log(off_request)


// console.log(await seam.thermostats.get({device_id : "518f692b-f865-4590-8c3e-3849e9984c75"}))

// const update = await seam.thermostats.update({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   default_climate_setting: {
//     "hvac_mode_setting": "heat_cool",
//     "cooling_set_point_celsius": 25,
//     "heating_set_point_celsius": 20,
//     "manual_override_allowed": true
//   }
// })

// console.log(update)

// const climate_setting_schedule = await seam.thermostats.climateSettingSchedules.create({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   name: "Guest Stay 1",
//   schedule_starts_at: "2023-12-10T15:00:00.000Z",
//   schedule_ends_at: "2023-12-17T11:00:00.000Z",
//   hvac_mode_setting: "heat_cool",
//   cooling_set_point_celsius: 25,
//   heating_set_point_celsius: 20,
//   manual_override_allowed: true
// })

// console.log(climate_setting_schedule)

// console.log(await seam.actionAttempts.get("c2b9e70a-2df9-4f14-9738-7642422343e3"))

// console.log(await seam.thermostats.climateSettingSchedules.list({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
// }))

// console.log(await seam.thermostats.climateSettingSchedules.get({
//   climate_setting_schedule_id: "6f510b57-70b5-4dc8-b7f5-abe7c2bc6ba7"
// }))

// console.log(await seam.thermostats.list())

// console.log(await seam.thermostats.get({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
// }))

// const updated_schedule = await seam.thermostats.climateSettingSchedules.update({
//   climate_setting_schedule_id: "b7d5cc0c-defc-4af1-9448-85b96aff5fd6",
//   schedule_ends_at: "2023-12-18T11:00:00.000Z",
//   hvac_mode_setting: "heat_cool",
//   cooling_set_point_fahrenheit: 75,
//   heating_set_point_fahrenheit: 65
// })

// console.log(updated_schedule)

// console.log(await seam.thermostats.climateSettingSchedules.delete({
//   climate_setting_schedule_id: "baac3a3a-90fa-4456-8cc2-6d1f94b2f15b"
// }))

// try {
//   await seam.thermostats.climateSettingSchedules.get({
//     climate_setting_schedule_id: "baac3a3a-90fa-4456-8cc2-6d1f94b2f15b"
//   })
// } catch(error) {
//     console.log(error)
// }



// const fan_on_request = await seam.thermostats.setFanMode({
//   device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
//   fan_mode_setting: "on"
// })

// console.log(fan_on_request)

// const deviceId = "98dc7c66-045d-49cb-a62b-4bb431b0a9fa"

// const noiseThresholdAttempt = await seam.noiseThresholds.create({
//   device_id: deviceId,
//   starts_daily_at: "20:00:00[America/Los_Angeles]",
//   ends_daily_at: "06:00:00[America/Los_Angeles]",
//   noise_threshold_decibels: 70
// })

// console.log(noiseThresholdAttempt)

// const userId = "user1"

// const createdConnectWebview = await seam.connectWebviews.create({
//   provider_category: "stable",
//   custom_metadata: {
//     "id": userId
//   }
// })

// console.log(createdConnectWebview)

// const createdConnectWebview = await seam.connectWebviews.create({
//   custom_redirect_url: "https://example.com/redirect",
//   custom_redirect_failure_url: "https://example.com/failure-redirect",
//   provider_category: "stable",
//   automatically_manage_new_devices: true,
//   wait_for_device_creation: true
// })

// console.log(createdConnectWebview)

// console.log(await seam.connectedAccounts.delete({
//   connected_account_id: "f767ceff-2c5c-4888-8f25-898e16c7a728"
// }))

// const user_identifier_key = "internal user ID 2"
// const connected_account_ids = ["3ea0b67f-649f-4131-bfe3-f2035e77a3f9", "6e1cad57-b244-40ca-b4f3-30a46c8000d4"]

// const client_session = await seam.clientSessions.create({
//   user_identifier_key: user_identifier_key,
//   connected_account_ids: connected_account_ids
// })

// const client_session_token = client_session.token
// console.log("Client session token: " + client_session_token)

// console.log(await seam.clientSessions.list())

// const client_session = await seam.clientSessions.getOrCreate({
//   user_identifier_key: user_identifier_key,
//   connected_account_ids: connected_account_ids
// })

// console.log(client_session)

// await seam.clientSessions.grant_access({
//   user_identifier_key: "internal user ID 2",
//   connect_webview_ids: [
//     "b9f2ad01-12b7-47cf-b566-ed5d9b47e834"
//   ]
// })



// const client_session_id = "c75d4330-ae01-4dfd-b6c5-f3e94e0d8168"
// console.log(await seam.clientSessions.get(client_session_id))

// const client_session_id = "639eb8af-19a9-4ae5-817c-6ad08fd078e7"
// console.log(await seam.clientSessions.delete({
//   client_session_id: client_session_id
// }))

// // Use the API key for your workspace in the initial seam constructor.
// const seam = new Seam({
//     apiKey: "seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy"
// })

// // Define the user and connected accounts.
// const user_identifier_key = "internal user ID 3"
// const connected_account_ids = ["3ea0b67f-649f-4131-bfe3-f2035e77a3f9", "6e1cad57-b244-40ca-b4f3-30a46c8000d4"]

// // Create the client session.
// const client_session = await seam.clientSessions.create({
//   user_identifier_key: user_identifier_key,
//   connected_account_ids: connected_account_ids
// })

// // Get the associated client session token.
// const client_session_token = client_session.token

// // Use the client session token in a new seam constructor.
// const seam_using_client_session_token = new Seam({
//   clientSessionToken: client_session_token
// })

// // Create a Connect Webview restricted by the client session token.
// const connect_webview_creation_action_attempt = await seam.connectWebviews.create({
//   provider_category: "stable"
// }

// console.log(connect_webview_creation_action_attempt)

// const user_identifier_key = "internal user ID 4"
// const connected_account_ids = ["3ea0b67f-649f-4131-bfe3-f2035e77a3f9", "6e1cad57-b244-40ca-b4f3-30a46c8000d4"]

// const client_session = await seam.clientSessions.create({
//   user_identifier_key: user_identifier_key,
//   connected_account_ids: connected_account_ids
// })

// console.log(client_session)

// console.log(await seam.clientSessions.list({
//   without_user_identifier_key: true
// }))

// console.log(await seam.clientSessions.list())

// console.log(await seam.clientSessions.get())

// console.log(await seam.connectWebviews.list({
//   custom_metadata_has: {
//     "internal_account_id": "user-1"
//   }
// }));

// console.log(await seam.connectedAccounts.list());

console.log(await seam.connectedAccounts.list({
  // custom_metadata_has: {
  //   "internal_account_id": "user-1"
  // }
}));
