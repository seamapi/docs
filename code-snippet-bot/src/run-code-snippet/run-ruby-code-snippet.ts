import * as Fake from "@seamapi/fake-seam-connect"
import { runInsideContainer } from "./run-inside-container"
import stripAnsi from "strip-ansi"

export const runRubyCodeSample = async (rubySample: string) => {
  const fake = await Fake.createFake()
  const seed = await fake.seed()
  const server = await fake.startServer()

  const rubyCodeSample = `
  require 'seam'

  random_number = rand(1e6).to_i
  api_url = "https://pws#{random_number}#{random_number}.fakeseamconnect.seam.vc"

  client = Seam::Client.new(api_url: api_url, api_key: 'seam_apikey1_token')

  print client.devices.list
  )
  ` +
    rubySample
      .replace(/YourServerUrl/g, server.serverUrl)
      .replace(/YourApiKey/g, seed.seam_apikey1_token)

  const run_sh = `
      cd /root
      ruby run
    `.trim()

  const { stdout, stderr } = await runInsideContainer({
    command: "/root/app.rb",
    imageName: "seamapi/ruby-sample-runner",
    filesystem: {
      "/root/app.rb": rubyCodeSample,
      "/root/run.sh": run_sh,
    },
  })

  const logged_content: string[] = [
    ...stripAnsi(stdout).replace(/\r\n/g, "\n").trim().split("\n"),
  ]

  if (stderr) {
    console.error("Error during ruby code execution:", stderr)
    logged_content.push(`Error: ${stderr}`)
  }

  return {
    execution_result: stderr
      ? null
      : stripAnsi(stdout).trim().replace(/\r\n/g, "\n"),
    logged_content,
  }
}