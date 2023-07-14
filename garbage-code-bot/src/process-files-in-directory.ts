import chalk from "chalk"
import { getCodeInjects, injectCode } from "./inject-code-syntax"
import { findInjectFiles } from "./find-inject-files"
import { languageConfigurations } from "./language-configurations"
import { getCodeSnippet } from "./get-code-snippet"

export const processFilesInDirectory = async (dirPath: string) => {
  // Get files with inject markers
  const injectFiles = await findInjectFiles(dirPath)

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
      const codeSnippets: { [language: string]: string } = {}
      for (const { language } of languageConfigurations) {
        console.log(chalk.gray(`Generating code snippet for ${language}`))
        codeSnippets[language] = await getCodeSnippet({
          language,
          taskDescription: codeInjects[i].prompt,
        })
      }

      console.log(
        chalk.blue(`Injecting code at location ${codeInjects[i].location}`)
      )
      await injectCode({ filePath, injectIndex: i, codeSnippets })
    }

    console.log(chalk.green(`Done processing ${filePath}`))
  }
}
