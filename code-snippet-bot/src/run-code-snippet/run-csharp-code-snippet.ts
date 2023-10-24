import * as Fake from "@seamapi/fake-seam-connect";
import { runInsideContainer } from "./run-inside-container";
import stripAnsi from "strip-ansi"

export const runCsharpCodeSample = async (csharp_sample: string) => {
  const fake = await Fake.createFake()
  const seed = await fake.seed()
  const server = await fake.startServer()

  const modified_csharp_sample = csharp_sample
    .replace(/YourServerUrl/g, server.serverUrl)
    .replace(/YourApiKey/g, seed.seam_apikey1_token)

  const run_sh = `
    cd /root
    dotnet new console
    dotnet add package seam

    rm Program.cs
    mv sample.cs Program.cs

    echo '--- REAL OUTPUT START ---'

    dotnet run
  `.trim()

  const { stdout, stderr } = await runInsideContainer({
    command: "/root/run.sh",
    imageName: "mcr.microsoft.com/dotnet/sdk:6.0",
    filesystem: {
      "/root/sample.cs": modified_csharp_sample,
      "/root/run.sh": run_sh,
    },
  })

  const output_after_installation = stripAnsi(stdout)
    .split("--- REAL OUTPUT START ---")[1]
    .split("\n")
    .map((l) => l.trim())
    .join("\n")
    .trim()

  const logged_content: string[] = [output_after_installation]

  if (stderr) {
    console.error("Error during C# code execution:", stderr)
    logged_content.push(`Error: ${stderr}`)
  }

  return {
    execution_result: stderr ? null : output_after_installation,
    logged_content,
  }
}
