import * as Fake from "@seamapi/fake-seam-connect"
import { NodeVM } from "vm2"
import ms from "ms"
import * as seamapi from "seamapi"

export const runJavascriptCodeSample = async (javascript_sample: string) => {
  const fake = await Fake.createFake()
  const seed = await fake.seed()
  const server = await fake.startServer()
  // const server = await startServer({

  // })
  // server.serverUrl

  const vm = new NodeVM({
    console: "redirect",
    sandbox: {},
    allowAsync: true,
    require: {
      mock: {
        seamapi,
        ms,
      },
    },
  })

  const logged_content: string[] = []
  vm.on("console.log", (content) => {
    logged_content.push(content)
  })

  const $execution_result = vm.run(
    `async function run() {
      const seam = new (require("seam").Seam)({
        apiKey: "${seed.seam_apikey1_token}",
        endpoint: "${server.serverUrl}"
      });
      ${javascript_sample}
    };
    module.exports = run()`
  )
  const execution_result = await $execution_result

  return { execution_result, logged_content }
}
