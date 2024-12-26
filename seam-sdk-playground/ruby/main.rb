#!/usr/bin/env ruby

require 'seam'

# random_number = rand(1e6).to_i
api_url = "https://connect.getseam.com"

# seam = Seam.new(endpoint: api_url, api_key: "seam_apikey1_token")
seam = Seam.new(api_key: 'seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy')
# seam = Seam.new(
#   personal_access_token: "seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u",
#   workspace_id: "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
# )
# seam = Seam.new(api_key: 'seam_testMyUj_6Exz7BVtFUM6GrHggvm9DFXm')
# seam = Seam.new(endpoint: api_url, api_key: 'seam_test8yup_77ut771wVzFPcfhce9ti5Ccq')
# seam = Seam.new()
# seam = Seam.new()
# seam = Seam.new(endpoint: api_url, api_key: 'seam_test8yup_77ut771wVzFPcfhce9ti5Ccq')
# seam = Seam.new(api_key: 'seam_test8yup_77ut771wVzFPcfhce9ti5Ccq')
# seam = Seam.new(
#   endpoint: api_url,
#   # Specify PAT.
#   api_key: 'seam_at134EHBFs3_2YuxzbTCZ5EJZcHTzy5b2Z8u',
#   # Specify workspace ID.
#   workspace_id: '98feb997-ff3c-4320-a907-1585108b1c08'
# )

# # print seam.devices.list
# puts seam.devices.list().inspect

# puts seam.devices.list(
#   include_if: ["can_remotely_unlock"]
# ).inspect

# puts (seam.devices.get(device_id: "36cf1a96-196d-41b0-9804-88154387f1f9")).properties['locked'].inspect
# puts (seam.devices.get(device_id: "36cf1a96-196d-41b0-9804-88154387f1f9")).properties.accessory_keypad.is_connected.inspect

# access_code = seam.access_codes.create(
#   device_id: "36cf1a96-196d-41b0-9804-88154387f1f9",
#   name: "testing ruby",
#   code: "1234"
# )
# puts access_code.inspect

# puts (seam.locks.get("59112086-537a-49c0-96dc-ce74f5abfbd7")).inspect
# puts (seam.locks.get("59112086-537a-49c0-96dc-ce74f5abfbd7")).properties['locked'].inspect
# puts (seam.locks.get("59112086-537a-49c0-96dc-ce74f5abfbd7")).is_managed.inspect

# # Confirm that the device can remotely unlock.
# if ((seam.devices.get(device_id: "36cf1a96-196d-41b0-9804-88154387f1f9")).can_remotely_unlock)
#   # Perform the unlock operation.
#   puts (seam.locks.unlock_door(device_id: "36cf1a96-196d-41b0-9804-88154387f1f9")).inspect
# end
# Confirm that the device can remotely lock.
# if ((seam.devices.get(device_id: "36cf1a96-196d-41b0-9804-88154387f1f9")).can_remotely_lock)
#   # Perform the lock operation.
#   puts (seam.locks.lock_door(device_id: "36cf1a96-196d-41b0-9804-88154387f1f9")).inspect
# end

# seam.locks.lock_door(device_id: "36cf1a96-196d-41b0-9804-88154387f1f9")

# # Get the device.
# # device = seam.locks.get("11111111-1111-1111-1111-444444444444")
# device = seam.locks.get("59112086-537a-49c0-96dc-ce74f5abfbd7")
# # Confirm that the device supports online access codes.
# # if (device.can_program_online_access_codes)
# if (device.is_managed)
#   # Create the ongoing online access code.
#   seam.access_codes.create(
#     device_id: device.device_id,
#     name: "my ongoing code",
#     code: "1234"
#   )
# end

# puts seam.devices.list_device_providers(provider_category: "stable").inspect
# puts seam.devices.get("30fd243b-3054-4384-a713-5487076a3826").inspect

# device_id = "30fd243b-3054-4384-a713-5487076a3826"
# device_update = seam.devices.update(
#   device_id: device_id,
#   name: "My Lock"
# )

# puts device_update.inspect

# puts seam.unmanaged_devices.list().inspect
# puts seam.unmanaged_devices.get("882dd63f-db9b-4210-bac2-68372aa0aff7").inspect

# device_id = "882dd63f-db9b-4210-bac2-68372aa0aff7"
# unmanaged_device_update = seam.unmanaged_devices.update(
#   device_id: device_id,
#   is_managed: true
# )

# puts unmanaged_device_update.inspect



# device="6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# print seam.devices.get(device_or_id: "6aae9d08-fed6-4ca5-8328-e36849ab48fe")
# device = seam.devices.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe")
# device = seam.devices.get("ed4bb795-f29f-43e5-bc0f-35f69f9141b5")
# puts JSON.pretty_generate(device.properties)

# puts seam.locks.lock_door("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
# puts seam.devices.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
# puts seam.locks.get("882dd63f-db9b-4210-bac2-68372aa0aff7").inspect
# puts seam.locks.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
# puts seam.locks.unlock_door("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect
# puts seam.action_attempts.get("f16b6775-7f74-4c06-ae88-ed30703cbb74").inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = seam.access_codes.create(
#   device_id: device_id,
#   name: "my ongoing code",
#   code: "1234"
# )

# puts created_access_code.inspect

# puts seam.access_codes.get("0edcfb65-fef9-4fac-955f-2442c080e865").inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = seam.access_codes.create(
#   device_id: device_id,
#   name: "my time-bound code",
#   starts_at: "2025-01-01T16:00:00Z",
#   ends_at: "2025-01-22T12:00:00Z",
#   code: "2345"
# )

# puts created_access_code.inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# puts seam.access_codes.list(device_id).inspect

# access_code_ids = ["0d2c8b21-c71f-4301-82ea-22830f749d9b", "6fe348a8-5938-4b73-8a36-86f7ffdfc431"]
# access_codes = seam.access_codes.list(access_code_ids: access_code_ids)
# puts access_codes.inspect

# puts seam.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# updated_access_code = seam.access_codes.update(
#   access_code_id: "0d2c8b21-c71f-4301-82ea-22830f749d9b",
#   name: "my updated code name",
#   starts_at: "2025-02-01T16:00:00Z",
#   ends_at: "2025-02-22T12:00:00Z",
#   code: "5432"
# )

# puts updated_access_code.inspect

# puts seam.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# updated_access_code = seam.access_codes.update(
#   access_code_id: "6fe348a8-5938-4b73-8a36-86f7ffdfc431",
#   starts_at: "2025-02-01T16:00:00Z",
#   ends_at: "2025-02-22T12:00:00Z"
# )

# puts updated_access_code.inspect

# puts seam.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# updated_access_code = seam.access_codes.update(
#   access_code_id: "6fe348a8-5938-4b73-8a36-86f7ffdfc431",
#   type: "ongoing"
# )

# puts updated_access_code.inspect

# puts seam.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# puts seam.access_codes.delete("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect

# begin
#   seam.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431")
# rescue => e
#   puts e
# end

# puts seam.devices.get("ed4bb795-f29f-43e5-bc0f-35f69f9141b5").inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = seam.access_codes.create(
#   device_id: device_id,
#   name: "my ongoing code",
#   allow_external_modification: true
# )

# puts created_access_code.inspect

# access_code = seam.access_codes.get("8f1f576f-ee52-4f12-97f6-7a1593965dec")
# puts "Errors:"
# puts access_code.errors
# puts "Warnings:"
# puts access_code.warnings

# puts seam.devices.get("6aae9d08-fed6-4ca5-8328-e36849ab48fe").inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"

# created_access_code = seam.access_codes.create(
#   device_id: device_id,
#   name: "my time-bound code",
#   starts_at: "2025-01-01T16:00:00Z",
#   ends_at: "2025-01-22T12:00:00Z",
#   use_backup_access_code_pool: true
# )

# puts created_access_code.inspect

# access_code = seam.access_codes.get("995d1927-e0db-4a97-b759-515193e6edbc")
# puts "Is backup access code available: #{access_code.is_backup_access_code_available}"

# access_code_id="995d1927-e0db-4a97-b759-515193e6edbc"
# puts seam.access_codes.pull_backup_access_code(access_code_id).inspect

# device_id = "374d3ee2-5e5d-4141-b828-6c2fa458212f"
# puts seam.unmanaged_access_codes.list(device_id).inspect

# device_id = "6aae9d08-fed6-4ca5-8328-e36849ab48fe"
# puts seam.access_codes.list(device_id).inspect

# puts seam.unmanaged_access_codes.get("449b03e6-1c6f-4ff3-b055-b9cf8146d2b0").inspect


# access_code_id = "ddb6e6b7-7156-471e-9199-4106db2f2e57"
# seam.unmanaged_access_codes.convert_to_managed(access_code_id).inspect

# access_code_id = "ddb6e6b7-7156-471e-9199-4106db2f2e57"
# seam.unmanaged_access_codes.delete(access_code_id).inspect

#########################################################################

# puts seam.thermostats.get("518f692b-f865-4590-8c3e-3849e9984c75").inspect

# heat_request = seam.thermostats.heat_request(
#   access_code_id: "0d2c8b21-c71f-4301-82ea-22830f749d9b",
#   name: "my updated code name",
#   starts_at: "2025-02-01T16:00:00Z",
#   ends_at: "2025-02-22T12:00:00Z",
#   code: "5432"
# )

# puts updated_access_code.inspect

# puts seam.thermostats.seamSettingSchedules.list("518f692b-f865-4590-8c3e-3849e9984c75").inspect


# deviceId = "98dc7c66-045d-49cb-a62b-4bb431b0a9fa"

# noiseThreshold = seam.noiseThresholds.create({
#   device_id: deviceId,
#   starts_daily_at: "20:00:00[America/Los_Angeles]",
#   ends_daily_at: "06:00:00[America/Los_Angeles]",
#   noise_threshold_decibels: 70
# })

# puts noiseThreshold.inspect

# some_lock = seam.locks.list().first
# puts seam.locks.get(some_lock).capabilities_supported

# user_id = "user1"

# created_connect_webview = seam.connect_webviews.create(
#   provider_category: "stable",
#   custom_metadata: {
#     "id": user_id
#   }
# )

# puts created_connect_webview.inspect

# connect_webview = seam.connect_webviews.create(
#   accepted_providers: ["four_suites"]
# )

# puts connect_webview.login_successful # false

# # Use the Connect Webview URL to display the
# # Connect Webview authorization flow to your user.
# puts connect_webview.url

# updated_connect_webview = seam.connect_webviews.get("44912603-23e8-4126-8f02-29c875875a64")

# puts updated_connect_webview.login_successful # true

# created_connect_webview = seam.connect_webviews.create(
#   custom_redirect_url: "https://example.com/redirect",
#   custom_redirect_failure_url: "https://example.com/failure-redirect",
#   provider_category: "stable",
#   automatically_manage_new_devices: true,
#   wait_for_device_creation: true
# )

# puts created_connect_webview.inspect

# puts seam.connected_accounts.delete("25aa45e4-ee1d-44a6-91a0-b53e8c06a6d5").inspect

# puts seam.connected_accounts.list().inspect

# devices = seam.devices.list(
#   # custom_metadata_has: {
#   #   "internal_account_id": "user-1"
#   # }
# )

# Retrieve all devices for the connectedAccountId.
# connected_devices = seam.devices.list(
#   # connected_account_id: "11111111-1111-1111-1111-222222222222"
#   connected_account_id: "486466da-a19f-48b3-824d-b9aa30b936c9"
# )
# puts connected_devices.inspect

# puts devices.inspect

# Retrieve all devices, filtered by manufacturer,
# which is one of several filters that list() supports.
# all_4suites_locks = seam.devices.list(manufacturer: "four_suites")
# all_4suites_locks = seam.devices.list(manufacturer: "yale")
# all_4suites_locks = seam.devices.list(manufacturer: "august")

# some_lock = all_4suites_locks[0]

# puts some_lock.properties['online'] # true
# puts some_lock.properties['locked'] # true

# puts some_lock.inspect

# # Confirm that the device can remotely unlock.
# # if (some_lock.can_remotely_unlock)
# if (some_lock.properties['online']) # WRONG! Using for now because this version of the Ruby SDK does not have can_remotely_unlock.
#   # Perform the unlock operation.
#   action_attempt = seam.locks.unlock_door(some_lock.device_id)
#   puts action_attempt.inspect
# end

# # Get the device by ID.
# updated_lock = seam.devices.get(some_lock.device_id)

# # Inspect the locked property to confirm
# # that the unlock operation was successful.
# puts some_lock.properties['locked'] # false

# # Confirm that the device supports online access codes.
# # if (updated_lock['can_program_online_access_codes'])
# if (updated_lock.properties['online']) # WRONG! Using for now because this version of the Ruby SDK does not have can_program_online_access_codes.
#   # Create an ongoing online access code.
#   seam.access_codes.create(
#     device_id: updated_lock.device_id,
#     name: "my ongoing code",
#     code: "1234"
#   )
#   # Create a time-bound online access code.
#   seam.access_codes.create(
#     device_id: updated_lock.device_id,
#     name: "my time-bound code",
#     starts_at: "2025-01-01T16:00:00Z",
#     ends_at: "2025-01-22T12:00:00Z",
#     code: "2345"
#   )
#   # List all access codes for this device.
#   access_codes = seam.access_codes.list(
#       # device_id: updated_lock.device_id
#       updated_lock.device_id
#   )
#   puts access_codes.inspect
# end



# device = seam.devices.get("36cf1a96-196d-41b0-9804-88154387f1f9")
# puts "Online: " + device.properties['online'].to_s

# device_connected_events = seam.events.list(
#   device_id: "36cf1a96-196d-41b0-9804-88154387f1f9",
#   event_type: "device.connected",
#   since: "2024-01-01T00:00:00Z"
# )
# puts device_connected_events.inspect

# device = seam.devices.get("c2cc3831-f347-444e-b83b-d1f14dbb5893")
# device = seam.devices.get("36cf1a96-196d-41b0-9804-88154387f1f9")
# device = seam.devices.get("59112086-537a-49c0-96dc-ce74f5abfbd7")
# if(device.properties['has_direct_power'] == true)
#   puts "Power Source: Wired"
# else
#   puts "Power Source: Battery-powered"
#   puts "Battery Level: " + device.properties['battery']['level'].to_s
#   puts "Battery Status: " + device.properties['battery']['status']
# end

# puts seam.devices.get("ffc4d67f-e3a6-4ef8-ac84-f3770750422a").inspect;

# devices = seam.devices.list(device_type: "honeywell_thermostat")
# puts devices[4].inspect

# # Create the user identity.
# user_identity = seam.user_identities.create(
#     email_address: "jane_ruby3@example.com"
# )
# puts user_identity.inspect

# # Launch the enrollment automation.
# seam.user_identities.enrollment_automations.launch(
#     # Use the acs_system_id for the credential manager.
#     credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
#     user_identity_id: user_identity.user_identity_id,
#     # Automatically create a new credential manager user
#     # or specify the desired existing credential_manager_acs_user_id.
#     create_credential_manager_user: true
# )

# # Create the seam session.
# seam_session = seam.seam_sessions.create(
#     user_identity_ids: [user_identity.user_identity_id]
# )

# # Use this token to launch your mobile controller.
# token = seam_session.token
# puts token

# puts seam.acs.systems.list().inspect

# Get the device.
# device = seam.devices.get("de49ed1a-0d19-4527-89ce-de7325149104")

# Confirm that Seam supports simulated disconnection.
# if (device.can_simulate_disconnection)
  # Perform the simulated disconnection.
#   seam.devices.simulate.disconnect(device_id: device.device_id)
# end

#puts seam.devices.list(
#  manufacturer: "nest"
#).inspect

# Create the group of linked access codes.
# Each returned access code includes a common_code_key.
# access_codes = seam.access_codes.create_multiple(
#   device_ids: [
#     "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
#     "d87eea5d-71c6-4633-a966-396c5ac51177"
#   ],
#   name: "Jane's reservation",
#   starts_at: "2025-11-15T15:00:00Z",
#   ends_at: "2025-11-17T11:00:00Z",
#   preferred_code_length: 4
# )

# puts access_codes.inspect

# puts seam.thermostats.list.inspect
# device_id = "bad6d447-f847-4672-94a9-5992398d0278"
# device_id = "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73"
# puts seam.thermostats.set_temperature_threshold(
#   device_id: device_id,
#   lower_limit_celsius: 10,
#   upper_limit_celsius: 30
# )
# puts (seam.devices.get(device_id: device_id)).properties.temperature_threshold.inspect
# puts (seam.thermostats.heat(
#   device_id: device_id,
#   heating_set_point_celsius: 20
# )).inspect
# puts (seam.thermostats.create_climate_preset(
#   device_id: device_id,
#   climate_preset_key: "ruby-test",
#   hvac_mode_setting: "heat_cool",
#   heating_set_point_fahrenheit: 68,
#   cooling_set_point_fahrenheit: 80,
#   fan_mode_setting: "auto",
#   manual_override_allowed: true
# )).inspect
# puts (seam.thermostats.schedules.create(
#   device_id: device_id,
#   name: "ruby test",
#   climate_preset_key: "ruby-test",
#   max_override_period_minutes: 60,
#   starts_at: "2024-11-20T00:00:00Z",
#   ends_at: "2024-11-21T00:00:00Z",
#   # is_override_allowed: true
# )).inspect
# seam.thermostats.activate_climate_preset(
#   device_id: device_id,
#   climate_preset_key: "ruby-test"
# )
# puts seam.devices.get(device_id: device_id).inspect
# puts seam.events.list(since: "2024-11-13T00:00:00Z").inspect
# puts seam.action_attempts.list(action_attempt_ids: ["89b64c3a-53b9-4a4e-b0bb-7d09fe41e918", "813fd5de-5c89-4707-b43b-4b519249fcb4"]).inspect
# attempt = seam.locks.lock_door(device_id: device_id)
# puts attempt.inspect
# puts seam.acs.systems.list().inspect
# acs_system_id = "b3eb61dc-9b69-42a9-8b73-375832dbeec8"
# puts (seam.acs.users.create(
#   acs_system_id: acs_system_id,
#   full_name: "Jane Doe"
# )).inspect
# acs_user_id = "e6b837ee-c02a-4ea9-b09c-cbde0a96d107"
# puts (seam.acs.credentials.create(
#   acs_user_id: acs_user_id,
#   access_method: "code",
#   code: "1234"
# )).inspect
# puts (seam.devices.get(device_id: device_id)).can_program_online_access_codes.inspect

# Step 1:
# Create the new ACS user.
acs_user = seam.acs.users.create(
  # acs_system_id: "11111111-1111-1111-1111-111111111111",
  acs_system_id: "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
  full_name: "Jane Doe Ruby4",
  email_address: "jane-ruby4@example.com"
)

# Step 2:
# Create a card-based credential for each entrance for the ACS user.
credential = seam.acs.credentials.create(
  acs_user_id: acs_user.acs_user_id,
  access_method: "card",
  # access_method: "code",
  # List the IDs of the entrances to which
  # you want to grant access.
  allowed_acs_entrance_ids: [
    # room_101.seam_acs_entrance_id
    "d3351d70-efb6-45d4-a580-fa7b2ffca586"
  ],
  starts_at: "2024-12-17T15:00:00.000Z",
  ends_at: "2024-12-18T12:00:00.000Z",
  visionline_metadata: {
      "card_format": "rfid48",
      "override": true
  }
)

puts credential.inspect

# puts (seam.acs.users.list(
#   acs_system_id: "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4"
# )).inspect

# credential = seam.acs.credentials.get(acs_credential_id: "ea5117bd-9e61-4dee-bff7-71f470300741")
# encoders = seam.acs.encoders.list(acs_system_ids: ["8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4"])

# encoding_action_attempt = seam.acs.encoders.encode_credential(
#   acs_credential_id: credential.acs_credential_id,
#   acs_encoder_id: encoders[0].acs_encoder_id
# )

# action_attempt = seam.action_attempts.get(action_attempt_id: "f0f125d9-fece-48d8-a828-529797ac8d46")
# puts action_attempt.result.inspect

