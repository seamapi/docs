import * as Fake from "@seamapi/fake-seam-connect"
import ms from "ms"
import * as seamapi from "seamapi"
import { runInsideContainer } from "./run-inside-container"

export const runCsharpCodeSample = async (csharp_sample: string) => {
  // const fake = await Fake.createFake()
  // const seed = await fake.seed()
  // const server = await fake.startServer()

  // const containerServerUrl = server.serverUrl.replace(
  //   /(127.0.0.1)|(localhost)/,
  //   os.platform() === "darwin" ? "host.docker.internal" : "172.17.0.1"
  // )

  const run_sh = `
  dotnet new console
  dotnet add package seam
  `.trim()

  const { stdout } = await runInsideContainer({
    command: "/root/run.sh",
    imageName: "mcr.microsoft.com/dotnet/sdk:6.0",
    filesystem: {
      "/root/Program.cs": script,
    },
  })

  return { execution_result, logged_content }
}
