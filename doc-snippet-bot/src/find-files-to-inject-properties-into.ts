import fs from "fs"
import path from "path"

export async function findFilesToInjectPropertiesInto(
  directoryPath: string,
): Promise<string[]> {
  let markdownFilePaths: string[] = []

  const files = fs.readdirSync(directoryPath, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(directoryPath, file.name)
    if (file.isDirectory()) {
      markdownFilePaths = markdownFilePaths.concat(
        await findFilesToInjectPropertiesInto(filePath),
      )
    } else if (file.name.endsWith(".md")) {
      const content = fs.readFileSync(filePath, "utf-8")
      if (content.includes("<!-- INJECT PROPERTIES")) {
        markdownFilePaths.push(filePath)
      }
    }
  }
  return markdownFilePaths
}
