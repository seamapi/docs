import type { CodeSampleSyntax } from '@seamapi/blueprint'
import commandExists from 'command-exists'
import { execa } from 'execa'
import { format as prettier } from 'prettier'

export const formatCode = async (
  content: string,
  syntax: CodeSampleSyntax,
): Promise<string> => {
  switch (syntax) {
    case 'javascript':
      return await formatJavascript(content)
    case 'python':
      return await formatPython(content)
    case 'ruby':
      return content
    case 'php':
      return content
    case 'bash':
      return content
    case 'json':
      return await formatJson(content)
    default:
      return content
  }
}

const formatJavascript = async (content: string): Promise<string> => {
  return await prettier(content, { parser: 'typescript' })
}

const formatPython = async (content: string): Promise<string> => {
  try {
    await commandExists('ruff')
    const result = await execa({ input: content })`ruff format -`
    return result.stdout
  } catch {
    // eslint-disable-next-line no-console
    console.warn('Skipping python formatting: ruff is not installed')
    return content
  }
}

const formatJson = async (content: string): Promise<string> => {
  return await prettier(content, { parser: 'json' })
}
