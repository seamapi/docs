import test from "ava"
import { Configuration, OpenAIApi } from "openai"
import { routeDefinitions } from "../src/route-definitions"

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY ?? process.env.OAK })
)

const prompt = `

You are a code bot designed to output code samples for api documentation. Read
the API documentation and task then produce a relevant code snippet using
the Seam Typescript SDK:

# Task

Create an access code that starts today and ends in 30 days.

## Task Guidelines



# API Documentation

The HTTP API has a sort of RPC-like structure where \`/access_codes/create\` translates directly to an SDK method like \`seam.accessCodes.create({ /* ... */ })\`

## Typescript SDK Overview

TODO

## Route Definitions

${routeDefinitions}

`.trim()

test("add typescript snippet", async (t) => {
  const completion = await openai.createChatCompletion({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo-16k",
  })
  console.log(completion.data.choices[0].message?.content)
})
