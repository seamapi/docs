import * as fs from "fs"
import * as path from "path"
import fetchSeamConnectOpenApiSpec from "./fetch-seam-connect-openapi-spec"
import { findFilesToInjectPropertiesInto } from "./find-files-to-inject-properties-into"

export default async function injectPropertiesBot() {
  try {
    const fetchedProperties = await fetchSeamConnectOpenApiSpec()

    const rootDirectory = process.cwd()
    const mdFiles = await findFilesToInjectPropertiesInto(rootDirectory)
    for (const filePath of mdFiles) {
      injectProperties(filePath, fetchedProperties)
      console.log(`Found the following *.md files: ${filePath}`)
    }
  } catch (error) {
    console.error("An error occurred:", error)
  }
}

function injectProperties(filePath: string, propertiesToInject: string) {
  let fileContent = fs.readFileSync(filePath, "utf-8")
  fileContent = fileContent.replace(
    "<!-- INJECT PROPERTIES",
    propertiesToInject
  )
  fs.writeFileSync(filePath, fileContent, "utf-8")
}
