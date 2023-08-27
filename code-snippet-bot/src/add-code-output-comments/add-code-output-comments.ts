import { LanguageConfiguration } from "../language-configurations"
import { runJavascriptCodeSample } from "../run-code-snippet"
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
  if (languageConfig.language !== "javascript") {
    return code_snippet
  }
  return addJavascriptCodeOutputComments(code_snippet, {
    high_level_objective,
    output_reduction_enabled: true,
  })
}
