import * as Fake from "@seamapi/fake-seam-connect";
import { runInsideContainer } from "./run-inside-container";

export const runCsharpCodeSample = async (csharp_sample: string) => {
  const fake = await Fake.createFake();
  const seed = await fake.seed();
  const server = await fake.startServer();

  const modified_csharp_sample = csharp_sample
    .replace(/YourServerUrl/g, server.serverUrl)
    .replace(/YourApiKey/g, seed.seam_apikey1_token);

  const run_sh = `
    echo "${modified_csharp_sample}" > Program.cs
    dotnet run
  `.trim();

  const { stdout, stderr } = await runInsideContainer({
    command: "/root/run.sh",
    imageName: "mcr.microsoft.com/dotnet/sdk:6.0",
    filesystem: {
      "/root/run.sh": run_sh,
    },
  });

  const logged_content: string[] = [stdout];

  if (stderr) {
    console.error("Error during C# code execution:", stderr);
    logged_content.push(`Error: ${stderr}`);
  }
  console.log(stderr ? null : stdout,'execution_results')
  console.log(logged_content,'logged_content')
  
  return {
    execution_result: stderr ? null : stdout,
    logged_content
  };
};
