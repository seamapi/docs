import { extractCodeFromResponse } from "./extract-code-from-response"
export function parseGitbookCodeSnippets(
  gitbookMarkdown: string
): Record<string, string> {
  const languageSnippets: Record<string, string> = {}
  let currentLanguage = ""
  let currentSnippet = ""

  const lines = gitbookMarkdown.split("\n")

  const addSnippetToMap = (language: string, snippet: string) => {
    languageSnippets[language] = extractCodeFromResponse(snippet) ?? snippet
  }

  lines.forEach((line: string) => {
    const tabMatch = line.match(/{% tab title="([^"]+)" %}/)
    if (tabMatch) {
      if (currentLanguage && currentSnippet) {
        addSnippetToMap(currentLanguage, currentSnippet)
      }
      currentLanguage = tabMatch[1].toLowerCase()
      currentSnippet = ""
      return
    }

    const endTabMatch = line.match(/{% endtab %}/)
    if (endTabMatch) {
      if (currentLanguage && currentSnippet) {
        addSnippetToMap(currentLanguage, currentSnippet)
      }
      currentLanguage = ""
      currentSnippet = ""
      return
    }

    const codeStartMatch = line.match(/^```[a-zA-Z]*$/)
    if (codeStartMatch) return // Skip line

    if (currentLanguage) {
      currentSnippet += line + "\n"
    }
  })

  // Save last language snippet
  if (currentLanguage && currentSnippet) {
    addSnippetToMap(currentLanguage, currentSnippet)
  }

  return languageSnippets
}
