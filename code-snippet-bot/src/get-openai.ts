import { Configuration, OpenAIApi } from "openai"

export const getOpenAI = async () => {
  const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPENAI_API_KEY ?? process.env.OAK })
  )
  return openai
}
