import chalk from "chalk"
import { getCodeInjects, injectCode } from "./inject-code-syntax"
import { findInjectFiles } from "./find-inject-files"
import { languageConfigurations } from "./language-configurations"
import { getCodeSnippet } from "./get-code-snippet"
import { parseGitbookCodeSnippets } from "./parse-gitbook-code-snippets"

export const processFilesInDirectory = async (
  dirPath: string,
  {
    rewriteSnippets = false,
  }: {
    rewriteSnippets?: boolean
  } = {}
) => {
  // Get files with inject markers
  const injectFiles = await findInjectFiles(dirPath)
  console.log(chalk.yellow(`Found ${injectFiles.length} files to process`))

  for (const filePath of injectFiles) {
    console.log(chalk.yellow(`Processing ${filePath}`))

    const codeInjects = await getCodeInjects(filePath)

    for (let i = 0; i < codeInjects.length; i++) {
      console.log(
        chalk.blue(
          `Processing code inject (index: ${i})\nprompt: "${
            codeInjects[i].prompt.trim().split("\n")[0]
          }..."`
        )
      )
      const existingCodeSnippets = parseGitbookCodeSnippets(
        codeInjects[i].content
      )
      const codeSnippets: { [language: string]: string } = {}

      for (const { language } of languageConfigurations) {
        console.log(chalk.gray(`Generating code snippet for ${language}`))

        if (rewriteSnippets || !existingCodeSnippets?.[language]) {
          codeSnippets[language] = await getCodeSnippet({
            language,
            taskDescription: codeInjects[i].prompt,
            existingCodeSnippets,
          })
        } else {
          codeSnippets[language] = existingCodeSnippets?.[language]
        }
      }

      console.log(
        chalk.blue(`Injecting code at line ${codeInjects[i].start_line}`)
      )
      await injectCode({ filePath, injectIndex: i, codeSnippets })
    }

    console.log(chalk.green(`Done processing ${filePath}`))
  }
}
