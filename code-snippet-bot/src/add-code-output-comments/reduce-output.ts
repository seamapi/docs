import { extractCodeFromResponse } from "../extract-code-from-response"
import { getChatCompletion } from "../get-chat-completion"
import { getOutputReductionPrompt } from "./output-reduction-prompt"

export const reduceOutput = async (opts: {
  output: string
  high_level_objective: string
}) => {
  const output_reduction_prompt = await getOutputReductionPrompt(opts)

  const reduced_output = await getChatCompletion(output_reduction_prompt, {
    model: "gpt-4",
  })

  return extractCodeFromResponse(reduced_output) ?? reduced_output
}
