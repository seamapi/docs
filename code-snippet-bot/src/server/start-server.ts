import chalk from "chalk"
import http from "node:http"
import formidable, { IncomingForm } from "formidable"
import { languageConfigurations } from "../language-configurations"
import { getCodeSnippet } from "../get-code-snippet"

const parseFormData = (
  req: http.IncomingMessage
): Promise<formidable.Fields> => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      resolve(fields)
    })
  })
}

export const startServer = async (opts?: { port: number }) => {
  const port = opts?.port ?? 3080

  const server = http.createServer(async (req, res) => {
    try {
      const codeSnippets: { [language: string]: string } = {}
      let prompt: string = ""
      if (req.method === "POST") {
        const form_data = await parseFormData(req)
        ;({
          content: [prompt],
        } = form_data)

        const promises: Array<
          Promise<{
            language: any
            codeSnippet: string
          }>
        > = []
        for (const { language } of languageConfigurations) {
          console.log(chalk.gray(`Generating code snippet for ${language}`))
          promises.push(
            (async () => {
              return {
                language,
                codeSnippet: await getCodeSnippet({
                  language,
                  taskDescription: prompt,
                }),
              }
            })()
          )
        }

        ;(await Promise.all(promises)).forEach(({ language, codeSnippet }) => {
          codeSnippets[language] = codeSnippet
        })
        console.log(
          chalk.green(
            `Generated code snippets for "${prompt.slice(0, 20)}..."!`
          )
        )
      }

      let output_display = ""
      for (const [language, codeSnippet] of Object.entries(codeSnippets)) {
        output_display += `<details><summary><b>${language}</b></summary><pre>${codeSnippet}</pre></details>`
      }

      res.writeHead(200, { "Content-Type": "text/html" })
      res.end(
        `
<html>
<body>
  <h2>Prompt</h2>
  <form method="POST">
    <textarea name="content" style="width: 300px; height: 300px;">${prompt}</textarea><br/>
    <button onclick="document.body.style = 'background-color: #ccc';" type="submit">Submit</button>
  </form>
  <h2>Output</h2>
  ${output_display}
</body>
</html>
    `.trim()
      )
    } catch (e: any) {
      res.writeHead(500, { "Content-Type": "text/html" })
      res.end(
        `<html><body><h2>Error</h2><pre>${e.toString()}</pre><br/><pre>${
          e.stack
        }</pre></body></html>`
      )
    }
  })

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server started at http://localhost:${port}`)
  })
}
