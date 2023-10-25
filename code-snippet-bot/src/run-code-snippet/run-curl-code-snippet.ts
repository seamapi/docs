import * as Fake from "@seamapi/fake-seam-connect"
import os from "os"
import { runInsideContainer } from "./run-inside-container"

export const runCurlCodeSnippet = async (curl_sample: string) => {
  const fake = await Fake.createFake()
  const seed = await fake.seed()
  const server = await fake.startServer()

  const containerServerUrl = server.serverUrl.replace(
    /(127.0.0.1)|(localhost)/,
    os.platform() === "darwin" ? "host.docker.internal" : "172.17.0.1"
  )

  const script = `
export SEAM_API_KEY="${seed.seam_apikey1_token}";
${curl_sample.replace(/https:\/\/connect.getseam.com/g, containerServerUrl)}
  `.trim()

  const { stdout } = await runInsideContainer({
    command: "/root/run.sh",
    imageName: "alpine/curl",
    filesystem: {
      "/root/run.sh": script,
    },
  })

  // TODO separate curl lines more robustly
  const adjacent_curl_outs = stdout.split("}{")
  for (let i = 0; i < adjacent_curl_outs.length; i++) {
    if (i !== 0) adjacent_curl_outs[i] = "{" + adjacent_curl_outs[i]
    if (i !== adjacent_curl_outs.length - 1)
      adjacent_curl_outs[i] = adjacent_curl_outs[i] + "}"
  }

  return {
    logged_content: adjacent_curl_outs,
  }
}
