export const rubyTaskGuidelines = `

* NEVER do \`puts "# Wait for webview authorization"\`, that's supposed to be
  a comment

Here's an example RSpec file from the Ruby SDK:

\`\`\`ruby
RSpec.describe Seam::Clients::AccessCodes do
  let(:client) { Seam::Client.new(api_key: "some_api_key") }

  describe "#list" do
    let(:access_code_hash) { {access_code_id: "123"} }
    let(:device_id) { "device_id_1234" }

    before do
      stub_seam_request(:get, "/access_codes/list",
        {access_codes: [access_code_hash]}).with(query: {device_id: device_id})
    end

    let(:access_codes) { client.access_codes.list(device_id) }

    it "returns a list of Devices" do
      expect(access_codes).to be_a(Array)
      expect(access_codes.first).to be_a(Seam::AccessCode)
      expect(access_codes.first.access_code_id).to be_a(String)
    end
  end

  describe "#get" do
    let(:access_code_id) { "access_code_id_1234" }
    let(:access_code_hash) { {access_code_id: access_code_id} }
    let(:delay_in_setting_warning) { {warning_code: "delay_in_setting_on_device", message: "Delay in setting access code"} }
    let(:failed_to_set_error) { {error_code: "failed_to_set_on_device", message: "Failed to set access code"} }

    before do
      stub_seam_request(
        :get, "/access_codes/get", {access_code: access_code_hash.merge(
          errors: [failed_to_set_error],
          warnings: [delay_in_setting_warning]
        )}
      ).with(
        query: {access_code_id: access_code_id}
      )
    end

    let(:result) { client.access_codes.get(access_code_id) }

    it "returns a Device" do
      expect(result).to be_a(Seam::AccessCode)
    end

    it "returns access code errors" do
      expect(result.errors.first.error_code).to eq("failed_to_set_on_device")
    end

    it "returns access code warnings" do
      expect(result.warnings.first.warning_code).to eq("delay_in_setting_on_device")
    end
  end

  describe "#create" do
    let(:access_code_hash) { {device_id: "1234", name: "A C", code: 1234} }
    let(:action_attempt_hash) { {action_attempt_id: "1234", status: "pending"} }

    before do
      stub_seam_request(
        :post, "/access_codes/create", {action_attempt: action_attempt_hash}
      )

      stub_seam_request(
        :get, "/action_attempts/get", {action_attempt: {result: {access_code: access_code_hash},
                                                        status: "success"}}
      ).with(query: {action_attempt_id: action_attempt_hash[:action_attempt_id]})
    end

    let(:result) { client.access_codes.create(**access_code_hash) }

    it "returns an Access Code" do
      expect(result).to be_a(Seam::AccessCode)
    end
  end

  describe "#delete" do
    let(:access_code_id) { "access_code_1234" }
    let(:action_attempt_hash) { {action_attempt_id: "1234", status: "pending"} }

    before do
      stub_seam_request(
        :post, "/access_codes/delete", {action_attempt: action_attempt_hash}
      ).with do |req|
        req.body.source == {access_code_id: access_code_id}.to_json
      end

      stub_seam_request(
        :get,
        "/action_attempts/get",
        {
          action_attempt: {
            status: "success"
          }
        }
      ).with(query: {action_attempt_id: action_attempt_hash[:action_attempt_id]})
    end

    let(:result) { client.access_codes.delete(access_code_id) }

    it "returns an Access Code" do
      expect(result).to be_a(Seam::ActionAttempt)
    end
  end
end
\`\`\`


\`\`\`ruby
# Example in readme of ruby SDK
devices = seam.devices.list
my_door = devices.first
seam.locks.unlock(my_door).wait_until_finished
\`\`\`

`.trim()
