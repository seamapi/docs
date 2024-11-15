#!/usr/bin/env ruby

require 'seam'

random_number = rand(1e6).to_i
api_url = "https://pws#{random_number}#{random_number}.fakeseamconnect.seam.vc"

seam = Seam.new(endpoint: api_url, api_key: "seam_apikey1_token")

print seam.devices.list
