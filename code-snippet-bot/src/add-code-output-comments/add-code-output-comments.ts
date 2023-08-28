import { LanguageConfiguration } from "../language-configurations"
import { addCurlCodeOutputComments } from "./add-curl-code-output-comments"
import { addJavascriptCodeOutputComments } from "./add-javascript-code-output-comments"

export const addCodeOutputComments = async (
  code_snippet: string,
  {
    languageConfig,
    high_level_objective,
    output_reduction_enabled = true,
  }: {
    languageConfig: LanguageConfiguration
    high_level_objective: string
    output_reduction_enabled?: boolean
  }
): Promise<string> => {
  try {
    if (languageConfig.language === "javascript") {
      return addJavascriptCodeOutputComments(code_snippet, {
        high_level_objective,
        output_reduction_enabled,
      })
    }
    if (languageConfig.language === "bash") {
      return addCurlCodeOutputComments(code_snippet, {
        high_level_objective,
        output_reduction_enabled,
      })
    }
  } catch (e: any) {
    console.log(
      `Couldn't add code output comments in ${
        languageConfig.language
      }: ${e.toString()}`
    )
  }

  return code_snippet
}
