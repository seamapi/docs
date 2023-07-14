import fs from "fs"
import path from "path"

export async function findInjectFiles(dir: string): Promise<string[]> {
  let injectFiles: string[] = []

  // Read all files in the directory recursively
  const files = fs.readdirSync(dir, { withFileTypes: true })

  for (let file of files) {
    let fullPath = path.join(dir, file.name)
    if (file.isDirectory()) {
      // If this is a directory, recurse into it
      injectFiles = injectFiles.concat(await findInjectFiles(fullPath))
    } else if (file.name.endsWith(".md")) {
      // If this is a file, check if it contains "<!-- CODE INJECT START"
      const content = fs.readFileSync(fullPath, "utf8")
      if (content.includes("<!-- CODE INJECT START")) {
        injectFiles.push(fullPath)
      }
    }
  }

  return injectFiles
}
