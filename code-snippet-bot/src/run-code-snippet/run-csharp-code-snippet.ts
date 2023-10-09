import * as Fake from "@seamapi/fake-seam-connect"
import { runInsideContainer } from "./run-inside-container"

export const runCsharpCodeSample = async (csharp_sample: string) => {
  const fake = await Fake.createFake()
  const seed = await fake.seed()
  const server = await fake.startServer()
  
  // Code to replace the server URL and API key in the C# sample code
  const modified_csharp_sample = csharp_sample
    .replace(/YourServerUrl/g, server.serverUrl)
    .replace(/YourApiKey/g, seed.seam_apikey1_token)
  
  const run_sh = `
    echo "${modified_csharp_sample}" > Program.cs
    dotnet run
  `.trim()

  // Running C# code inside a Docker container
  const { stdout, stderr } = await runInsideContainer({
    command: "/bin/sh",
    imageName: "mcr.microsoft.com/dotnet/sdk:6.0",
    filesystem: {
      "/root/run.sh": run_sh,
    },
  })

  // Handle and log any errors
  if (stderr) {
    console.error("Error during C# code execution:", stderr)
    return { execution_result: null, logged_content: [`Error: ${stderr}`] }
  }
  
  return {
    execution_result: stdout,
    logged_content: [stdout]
  }
}
