require 'seam'

random_number = rand(1e6).to_i
api_url = "https://pws#{random_number}#{random_number}.fakeseamconnect.seam.vc"

client = Seam::Client.new(api_url: api_url, api_key: 'seam_apikey1_token')

print client.devices.list
