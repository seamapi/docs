import { getOpenAI } from "./get-openai"
import cache from "node-persist"
import crypto from "crypto"

type Options = {
  model: "gpt-3.5-turbo-16k"
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
  if (result) return result
  const openai = await getOpenAI()
  result = (
    await openai.createChatCompletion({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: opts.model,
    })
  ).data.choices[0].message?.content

  await cache.setItem(cache_key, result)
  return result
}
