import { extractCodeFromResponse } from "../extract-code-from-response"
import { getChatCompletion } from "../get-chat-completion"
import { runJavascriptCodeSample } from "../run-code-snippet"
import { runCurlCodeSnippet } from "../run-code-snippet/run-curl-code-snippet"
import { getOutputReductionPrompt } from "./output-reduction-prompt"
import { reduceOutput } from "./reduce-output"
import { replaceSeedIds } from "./replace-seed-ids"

// Find and return each line number that is the last line of a multi-line curl
// command. Do this by finding "curl" in a line then scanning until the next
// semi-colon
export const getCurlOutputInjectPoints = (code_snippet: string) => {
  const lines = code_snippet.split("\n")
  const inject_points: Array<{ line_number: number }> = []
  lines.forEach((line, index) => {
    if (line.match(/curl/)) {
      let curl_line = line
      while (curl_line && !curl_line.match(/;/)) {
        index++
        curl_line = lines[index]
      }
      inject_points.push({ line_number: index + 1 })
    }
  })
  inject_points.push({ line_number: lines.length + 1 })
  return inject_points
}

export const addCurlCodeOutputComments = async (
  code_snippet: string,
  {
    high_level_objective,
    output_reduction_enabled,
  }: { high_level_objective: string; output_reduction_enabled: boolean }
) => {
  let logged_content: Array<any>
  try {
    ;({ logged_content } = await runCurlCodeSnippet(code_snippet))
  } catch (e) {
    console.log(
      `Couldn't run curl code sample, returning original code snippet: ${e}`
    )
    return code_snippet
  }

  const code_snippet_lines = code_snippet.split("\n")
  const output_inject_points = getCurlOutputInjectPoints(code_snippet)

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
        let formatted_output = replaceSeedIds(output)

        if (output_reduction_enabled) {
          formatted_output = await reduceOutput({
            output: formatted_output,
            high_level_objective,
          })
        }

        const output_lines = formatted_output.split("\n")
        output_lines[0] = `Output: ${output_lines[0]}`
        newSnippetLines.push("\n")
        output_lines.forEach((output_line) => {
          newSnippetLines.push(`# ${output_line}`)
        })
      }
      output_inject_point_index++
    }
  }

  return newSnippetLines.join("\n")
}
