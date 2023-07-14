import { getOpenAI } from "./get-openai"
import cache from "node-persist"
import crypto from "crypto"
import chalk from "chalk"

type Options = {
  model: "gpt-3.5-turbo-16k" | "gpt-4"
}

export const getChatCompletion = async (
  prompt: string,
  opts: Options = {
    model: "gpt-3.5-turbo-16k",
  }
) => {
  await cache.init()
  const prompt_hash = crypto.createHash("md5").update(prompt).digest("hex")
  const cache_key = `${opts.model}_${prompt_hash}`

  let result = await cache.getItem(cache_key)
  if (result) {
    console.log(chalk.gray(`Cache hit for "${prompt_hash}"`))
    return result
  }
  const openai = await getOpenAI()
  console.log(chalk.gray(`Calling to OpenAI "${prompt_hash}"`))
  const completion = await openai.createChatCompletion({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: opts.model,
  })

  console.log(
    chalk.gray(`prompt tokens used: ${completion.data.usage?.prompt_tokens}`)
  )

  result = completion.data.choices[0].message?.content

  await cache.setItem(cache_key, result)
  return result
}
