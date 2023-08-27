import * as Fake from "@seamapi/fake-seam-connect"
import { NodeVM } from "vm2"
import ms from "ms"
import * as seamapi from "seamapi"

export const runCurlCodeSnippet = async (curl_sample: string) => {
  const fake = await Fake.createFake()
  const seed = await fake.seed()
  const server = await fake.startServer()

  // TODO
}
