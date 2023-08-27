import { extractCodeFromResponse } from "../extract-code-from-response"
import { getChatCompletion } from "../get-chat-completion"
import { runJavascriptCodeSample } from "../run-code-snippet"
import { getOutputReductionPrompt } from "./output-reduction-prompt"
import { reduceOutput } from "./reduce-output"
import { replaceSeedIds } from "./replace-seed-ids"

export const getJavascriptOutputInjectPoints = (code_snippet: string) => {
  const inject_points: Array<{ line_number: number }> = []
  const lines = code_snippet.split("\n")
  lines.forEach((line, index) => {
    if (line.match(/console.log/)) {
      inject_points.push({ line_number: index + 1 })
    }
  })
  return inject_points
}

export const addJavascriptCodeOutputComments = async (
  code_snippet: string,
  {
    high_level_objective,
    output_reduction_enabled,
  }: { high_level_objective: string; output_reduction_enabled: boolean }
) => {
  let logged_content: Array<any>
  try {
    ;({ logged_content } = await runJavascriptCodeSample(code_snippet))
  } catch (e) {
    console.log(
      `Couldn't run javascript code sample, returning original code snippet: ${e}`
    )
    return code_snippet
  }

  const code_snippet_lines = code_snippet.split("\n")
  const output_inject_points = getJavascriptOutputInjectPoints(code_snippet)

  const newSnippetLines = []
  let output_inject_point_index = 0
  for (let i = 0; i < code_snippet_lines.length; i++) {
    const line = code_snippet_lines[i]
    newSnippetLines.push(line)

    const line_has_associated_output =
      output_inject_point_index < output_inject_points.length &&
      i + 1 === output_inject_points[output_inject_point_index].line_number

    if (line_has_associated_output) {
      const output = logged_content[output_inject_point_index]
      if (output) {
        let formatted_output = JSON.stringify(output, null, 2)

        formatted_output = replaceSeedIds(formatted_output)

        if (output_reduction_enabled) {
          formatted_output = await reduceOutput({
            output: formatted_output,
            high_level_objective,
          })
        }

        const output_lines = formatted_output.split("\n")
        output_lines[0] = `Output: ${output_lines[0]}`
        output_lines.forEach((output_line) => {
          newSnippetLines.push(`// ${output_line}`)
        })
      }
      output_inject_point_index++
    }
  }

  return newSnippetLines.join("\n")
}
