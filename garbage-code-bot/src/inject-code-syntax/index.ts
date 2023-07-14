// Using fs to read and write to files
import fs from "fs"
import { getLanguageConfigurationOrNull } from "../language-configurations"

export type CodeInject = {
  index: number
  location: number
  prompt: string
  content: string
}

// Get code injects
export async function getCodeInjects(filePath: string): Promise<CodeInject[]> {
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const lines = fileContent.split("\n")

  let inCodeInject = false
  let inPrompt = false
  let codeInjects: CodeInject[] = []
  let currentCodeInject: CodeInject = {
    index: -1,
    location: -1,
    prompt: "",
    content: "",
  }

  lines.forEach((line, index) => {
    if (line.trim() === "<!-- CODE INJECT START") {
      inCodeInject = true
      inPrompt = true

      currentCodeInject = {
        index: codeInjects.length,
        location: index,
        prompt: "",
        content: "",
      }
    } else if (line.trim() === "<!-- CODE INJECT END -->") {
      inCodeInject = false
      codeInjects.push(currentCodeInject)
    } else if (inCodeInject) {
      if (line.includes("-->")) {
        inPrompt = false
        currentCodeInject.prompt = currentCodeInject.prompt.trim()
      } else if (inPrompt) {
        currentCodeInject.prompt += `${line}\n`
      } else {
        currentCodeInject.content += `${line}\n`
      }
    }
  })

  return codeInjects
}

// Inject code
export async function injectCode({
  filePath,
  injectIndex,
  codeSnippets,
}: {
  filePath: string
  injectIndex: number
  codeSnippets: { [key: string]: string }
}): Promise<void> {
  const codeInjects = await getCodeInjects(filePath)

  if (injectIndex >= codeInjects.length) {
    throw new Error("Invalid code inject index")
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const lines = fileContent.split("\n")
  const codeInject = codeInjects[injectIndex]

  let injectContent = "{% tabs %}\n"

  for (let [lang, snippet] of Object.entries(codeSnippets)) {
    injectContent += `{% tab title="${
      getLanguageConfigurationOrNull(lang)?.title ?? lang
    }" %}\n\`\`\`${lang}\n${snippet}\n\`\`\`\n{% endtab %}\n`
  }

  const newContent = [
    ...lines.slice(0, codeInject.location + 1),
    codeInject.prompt,
    "-->",
    injectContent.trim(),
    ...lines.slice(
      codeInject.location + 1 + codeInject.content.split("\n").length
    ),
  ]

  fs.writeFileSync(filePath, newContent.join("\n"))
}
